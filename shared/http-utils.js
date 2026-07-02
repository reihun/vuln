/**
 * Shared HTTP utilities for consistent API request patterns.
 *
 * Consolidates duplicated patterns found across:
 * - dxg.js: httpClient.get with throwErrors headers, X-Skip-Loading header
 * - sky/main: this.http.get/post/put/delete with base URL construction
 * - ivy/http-CpsaqGZT.js: axios instance with interceptors
 * - ivy/useAgentDocuments: .get(url).then(s => s.data) fetcher
 */

// --- Angular (RxJS-based) HTTP utilities ---

/**
 * Creates a standard "throw errors" header used by dictionary and platform services.
 * Replaces duplicated getThrowErrors() found at dxg.js lines 21731, 28249, 28454.
 *
 * @param {Function} ThrowErrorsBuilder - The ThrowErrors class constructor (e.g., `r.b`)
 * @param {Function} ThrowErrorConfig - The error config class (e.g., `n.W`)
 * @param {number} statusCode - HTTP status code to throw on (default: 404)
 * @returns {object} Headers object for HTTP requests
 */
export function createThrowErrorsHeader(ThrowErrorsBuilder, ThrowErrorConfig, statusCode = 404) {
  return new ThrowErrorsBuilder([new ThrowErrorConfig({ statusCode })]).getHeader();
}

/**
 * Standard pipe chain for cached dictionary-style HTTP requests.
 * Replaces the duplicated pattern: .pipe(catchError(...), map(...), take(1), shareReplay())
 * Found at dxg.js lines 21714-21722 and 28135-28143.
 *
 * @param {Observable} request$ - The HTTP GET observable
 * @param {object} operators - RxJS operators { catchError, map, take, shareReplay }
 * @param {Function} fallbackFactory - Factory for fallback value on error
 * @param {Function} transformFn - Mapping/transform function for successful response
 * @returns {Observable} Processed observable with caching
 */
export function cachedRequest(request$, operators, fallbackFactory, transformFn) {
  const { catchError, map, take, shareReplay, of } = operators;
  return request$.pipe(
    catchError(() => of(fallbackFactory())),
    map(transformFn),
    take(1),
    shareReplay()
  );
}

/**
 * Creates HTTP request options with the "X-Skip-Loading" header.
 * Replaces duplicated header objects at dxg.js lines 29272, 29294, 30403.
 *
 * @param {object} [additionalHeaders={}] - Extra headers to merge
 * @returns {object} Headers config for Angular HttpClient
 */
export function skipLoadingHeaders(additionalHeaders = {}) {
  return {
    headers: {
      "X-Skip-Loading": "true",
      ...additionalHeaders,
    },
  };
}

// --- React/Fetch-based HTTP utilities ---

/**
 * Standard data-extracting fetcher for SWR/React hooks.
 * Replaces: `const p = t => d.get(t).then(s => s.data)` pattern
 * found in ivy/useAgentDocuments-BZz3HwA3.js.
 *
 * @param {object} httpClient - Axios-like HTTP client instance
 * @returns {Function} Fetcher function compatible with SWR
 */
export function createDataFetcher(httpClient) {
  return (url) => httpClient.get(url).then((response) => response.data);
}

/**
 * Builds a conditional SWR key with optional enable flag.
 * Replaces pattern: `t && s ? \`/api/agent/${t}/documents\` : null`
 *
 * @param {string} urlTemplate - URL to fetch
 * @param {boolean} enabled - Whether the request should be enabled
 * @returns {string|null} SWR cache key or null to disable
 */
export function conditionalSwrKey(urlTemplate, enabled = true) {
  return enabled ? urlTemplate : null;
}

/**
 * Generic fetch wrapper with JSON parsing, used across ivy/ files.
 * Replaces: `fetch(e).then(r => r.json())` pattern.
 *
 * @param {string} url - URL to fetch
 * @param {object} [options={}] - Fetch options
 * @returns {Promise<any>} Parsed JSON response
 */
export async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  return response.json();
}
