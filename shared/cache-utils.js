/**
 * Shared caching utilities for service-level data caching.
 *
 * Consolidates the duplicated dictionary cache pattern found in:
 * - dxg.js line 21704: `this.dictionariesCache = new Map`
 * - dxg.js line 28120: `this.dictionariesCache = new Map`
 * - dxg.js line 28435: `this.platformCache = new Map`
 *
 * All three services follow identical logic:
 *   1. Check if cache has key
 *   2. If not, create request with pipe chain and store in cache
 *   3. Return cached observable
 */

/**
 * A reusable service cache that stores observables by key.
 * Provides get-or-create semantics with optional cache invalidation.
 */
export class ServiceCache {
  constructor() {
    this._cache = new Map();
  }

  /**
   * Get a cached observable or create one using the factory function.
   *
   * @param {string} key - Cache key (e.g., dictionary name)
   * @param {Function} factory - Function that returns an Observable to cache
   * @returns {Observable} The cached observable
   */
  getOrCreate(key, factory) {
    if (!this._cache.has(key)) {
      this._cache.set(key, factory());
    }
    return this._cache.get(key);
  }

  /**
   * Check if a key exists in the cache.
   * @param {string} key
   * @returns {boolean}
   */
  has(key) {
    return this._cache.has(key);
  }

  /**
   * Remove a specific key from the cache.
   * Replaces: `this.dictionariesCache.has(k) && this.dictionariesCache.delete(k)`
   * at dxg.js line 28254-28255.
   *
   * @param {string} key
   */
  invalidate(key) {
    this._cache.delete(key);
  }

  /**
   * Clear all cached entries.
   * Replaces: `this.dictionariesCache = new Map` on language change
   * at dxg.js line 28122.
   */
  clear() {
    this._cache.clear();
  }

  /**
   * Get the number of cached entries.
   * @returns {number}
   */
  get size() {
    return this._cache.size;
  }
}

/**
 * Creates a cached dictionary service pattern.
 * Replaces the duplicated getDictionary implementations at dxg.js lines 21707-21729
 * and 28124-28150.
 *
 * @param {object} config - Configuration object
 * @param {object} config.httpClient - Angular HttpClient instance
 * @param {Function} config.buildUrl - Function to build the request URL from dictionary name
 * @param {Function} config.buildParams - Function to build request params
 * @param {object} config.headers - Request headers (e.g., throwErrors)
 * @param {object} config.operators - RxJS operators { catchError, map, take, shareReplay, of }
 * @param {Function} config.ModelClass - Class to wrap response in (e.g., Dictionary)
 * @param {string} config.notFoundName - Name constant for not-found dictionaries
 * @param {Function} [config.onNotFound] - Callback when dictionary is not found
 * @returns {object} Object with { cache, getDictionary }
 */
export function createDictionaryService(config) {
  const {
    httpClient,
    buildUrl,
    buildParams,
    headers,
    operators,
    ModelClass,
    notFoundName,
    onNotFound,
  } = config;

  const { catchError, map, take, shareReplay, of } = operators;
  const cache = new ServiceCache();

  function getDictionary(name, extraParams = {}) {
    const observable = cache.getOrCreate(name, () => {
      const params = { ...buildParams(), ...extraParams };
      return httpClient
        .get(buildUrl(name), { params, headers })
        .pipe(
          catchError(() => of({ name: notFoundName, entries: [] })),
          map((response) => new ModelClass(response)),
          take(1),
          shareReplay()
        );
    });

    return observable.pipe(
      map((result) => {
        if (result.name === notFoundName && onNotFound) {
          onNotFound(name);
        }
        return result;
      })
    );
  }

  return { cache, getDictionary };
}
