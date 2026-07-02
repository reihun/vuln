/**
 * Shared metrics/telemetry utilities.
 *
 * Consolidates the duplicated metrics sending pattern found in:
 * - dxg.js lines 29268-29310: sendMetrics and sendNavigationMetrics
 *   Both methods are nearly identical — they queue an API call that
 *   posts to an endpoint with "X-Skip-Loading" header, take(1),
 *   catchError, then call processNextApiCall() in both success and error.
 *
 * Also consolidates the API call queue pattern at lines 29312-29329.
 */

import { skipLoadingHeaders } from "./http-utils.js";

/**
 * A rate-limited API call queue that ensures calls are spaced apart.
 * Replaces the duplicated queue logic at dxg.js lines 29196-29329.
 */
export class ApiCallQueue {
  /**
   * @param {number} intervalMs - Minimum interval between API calls (default: 1000ms)
   */
  constructor(intervalMs = 1000) {
    this._queue = [];
    this._isProcessing = false;
    this._lastCallTime = 0;
    this._intervalMs = intervalMs;
  }

  /**
   * Add a callback to the queue and start processing.
   * Replaces: queueApiCall(wt) at line 29312.
   *
   * @param {Function} callback - The async operation to queue
   */
  enqueue(callback) {
    this._queue.push(callback);
    if (!this._isProcessing) {
      this._processNext();
    }
  }

  /**
   * Process the next item in the queue, respecting the rate limit.
   * Replaces: processNextApiCall() at line 29316 and executeNextApiCall() at line 29326.
   */
  _processNext() {
    if (this._queue.length === 0) {
      this._isProcessing = false;
      return;
    }

    this._isProcessing = true;
    const elapsed = Date.now() - this._lastCallTime;

    if (elapsed >= this._intervalMs) {
      this._execute();
    } else {
      setTimeout(() => this._execute(), this._intervalMs - elapsed);
    }
  }

  _execute() {
    const callback = this._queue.shift();
    if (callback) {
      this._lastCallTime = Date.now();
      callback();
    } else {
      this._isProcessing = false;
    }
  }

  get length() {
    return this._queue.length;
  }

  get isProcessing() {
    return this._isProcessing;
  }
}

/**
 * Creates a metrics sender that queues HTTP posts with rate limiting.
 * Replaces the duplicated sendMetrics/sendNavigationMetrics pattern.
 *
 * Before (duplicated twice):
 *   sendMetrics(wt) {
 *     this.enableMetrics ? this.queueApiCall(() => {
 *       this.http.post(endpoint, wt, { headers: {"X-Skip-Loading": "true"} })
 *         .pipe(take(1), catchError(...)).subscribe({
 *           next: () => this.processNextApiCall(),
 *           error: () => this.processNextApiCall()
 *         })
 *     }) : console.log("dev mode:", wt)
 *   }
 *
 * After:
 *   const sender = createMetricsSender({ http, queue, operators, enableMetrics });
 *   sender.send(metricsEndpoint, data);
 *   sender.send(navigationEndpoint, data);
 *
 * @param {object} config
 * @param {object} config.http - Angular HttpClient instance
 * @param {ApiCallQueue} config.queue - The rate-limited queue
 * @param {object} config.operators - RxJS operators { take, catchError, of }
 * @param {boolean} config.enableMetrics - Whether to actually send (false = log only)
 * @returns {object} Object with send(endpoint, data) method
 */
export function createMetricsSender(config) {
  const { http, queue, operators, enableMetrics } = config;
  const { take, catchError, of } = operators;

  return {
    /**
     * Send metrics data to the given endpoint via the rate-limited queue.
     *
     * @param {string} endpoint - The API endpoint to POST to
     * @param {object} data - The metrics payload
     * @param {string} [logLabel="Metrics"] - Label for dev-mode logging
     */
    send(endpoint, data, logLabel = "Metrics") {
      if (!enableMetrics) {
        console.log(`${logLabel} (dev mode):`, data);
        return;
      }

      queue.enqueue(() => {
        http
          .post(endpoint, data, skipLoadingHeaders())
          .pipe(
            take(1),
            catchError(() => of(null))
          )
          .subscribe({
            next: (response) => {
              if (response !== null) {
                console.log(`${logLabel} sent successfully`);
              }
              queue._processNext();
            },
            error: () => {
              queue._processNext();
            },
          });
      });
    },
  };
}
