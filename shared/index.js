/**
 * Shared utilities index.
 *
 * This module provides consolidated utilities extracted from duplicated patterns
 * across the codebase (dxg.js, ivy/, sky/).
 *
 * Modules:
 * - http-utils:     HTTP request helpers, headers, fetchers
 * - cache-utils:    Service-level caching (dictionary services, etc.)
 * - metrics-utils:  Rate-limited metrics/telemetry sending
 * - swr-config:     SWR data fetching configuration
 * - loading-state:  Loading/busy state management
 * - error-handling: Error extraction, notification, and severity
 */

export {
  createThrowErrorsHeader,
  cachedRequest,
  skipLoadingHeaders,
  createDataFetcher,
  conditionalSwrKey,
  fetchJson,
} from "./http-utils.js";

export {
  ServiceCache,
  createDictionaryService,
} from "./cache-utils.js";

export {
  ApiCallQueue,
  createMetricsSender,
} from "./metrics-utils.js";

export {
  baseSWRConfig,
  staticDataSWRConfig,
  realtimeSWRConfig,
  buildSwrKey,
  createAxiosFetcher,
} from "./swr-config.js";

export {
  ElementLoadingState,
  LoadingTracker,
  LoadingCounter,
} from "./loading-state.js";

export {
  extractErrorMessage,
  getErrorSeverity,
  isKnownError,
  createNotifier,
  formatHttpError,
} from "./error-handling.js";
