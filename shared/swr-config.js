/**
 * Shared SWR (stale-while-revalidate) configuration.
 *
 * Consolidates duplicated SWR config patterns found in:
 * - ivy/swr-CnSS_55K.js: default fetcher and revalidation options
 * - ivy/useAgentDocuments-BZz3HwA3.js: per-hook revalidation overrides
 * - ivy/index-DKih18Jp.js: SWR core library with default config
 *
 * These files independently define overlapping SWR options like:
 *   { revalidateOnFocus: false, revalidateOnReconnect: false }
 */

const DEFAULT_MAX_RETRIES = 3;
const DEFAULT_RETRY_DELAY_MS = 1000;

/**
 * Base SWR configuration shared across all hooks in the ivy app.
 * Replaces the config object in ivy/swr-CnSS_55K.js.
 */
export const baseSWRConfig = {
  fetcher: (url) => fetch(url).then((res) => res.json()),
  revalidateOnFocus: false,
  revalidateOnMount: true,
  revalidateOnReconnect: false,
  revalidateIfStale: true,
  onErrorRetry: (error, _key, _config, revalidate, { retryCount }) => {
    if (retryCount >= DEFAULT_MAX_RETRIES) return;
    setTimeout(() => revalidate({ retryCount }), DEFAULT_RETRY_DELAY_MS);
  },
};

/**
 * SWR config for hooks that should never auto-revalidate.
 * Replaces the inline config in useAgentDocuments:
 *   { revalidateOnFocus: false, revalidateOnReconnect: false }
 *
 * Use this for data that is expensive to refetch or rarely changes.
 */
export const staticDataSWRConfig = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  revalidateIfStale: false,
};

/**
 * SWR config for real-time data that should revalidate aggressively.
 */
export const realtimeSWRConfig = {
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  revalidateIfStale: true,
  refreshInterval: 30000,
};

/**
 * Builds a URL with query string from base URL and params object.
 * Replaces the `R` function in ivy/swr-CnSS_55K.js:
 *   `function R(e, r) { return r ? \`${e}?\${o.stringify(i(s)(r))}\` : e }`
 *
 * @param {string} baseUrl - The base URL
 * @param {object|null} params - Query parameters (null/undefined = no params)
 * @param {object} options
 * @param {Function} [options.stringify] - Query string serializer (default: URLSearchParams)
 * @param {Function} [options.filterFn] - Filter function to remove blank params
 * @returns {string} URL with query string appended
 */
export function buildSwrKey(baseUrl, params = null, options = {}) {
  if (!params) return baseUrl;

  const { stringify, filterFn } = options;

  if (stringify && filterFn) {
    return `${baseUrl}?${stringify(filterFn(params))}`;
  }

  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value != null && value !== "") {
      searchParams.set(key, String(value));
    }
  }
  const qs = searchParams.toString();
  return qs ? `${baseUrl}?${qs}` : baseUrl;
}

/**
 * Creates a hook-style data fetcher that extracts response.data.
 * Replaces: `const p = t => d.get(t).then(s => s.data)`
 *
 * @param {object} httpClient - Axios-like HTTP client
 * @returns {Function} Fetcher function for SWR
 */
export function createAxiosFetcher(httpClient) {
  return (url) => httpClient.get(url).then((res) => res.data);
}
