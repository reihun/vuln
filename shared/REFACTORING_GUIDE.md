# Refactoring Guide: Duplicated Code → Shared Utilities

This document maps duplicated code patterns found in the codebase to their shared utility replacements.

## Summary of Duplicated Patterns Found

| Pattern | Occurrences | Files | Shared Utility |
|---------|-------------|-------|----------------|
| Dictionary cache + HTTP fetch | 3 | dxg.js | `createDictionaryService()` |
| `getThrowErrors()` method | 3 | dxg.js | `createThrowErrorsHeader()` |
| Metrics sending with queue | 2 | dxg.js | `createMetricsSender()` |
| API call rate-limit queue | 1 (complex) | dxg.js | `ApiCallQueue` |
| X-Skip-Loading header | 4 | dxg.js | `skipLoadingHeaders()` |
| SWR revalidation config | 3 | ivy/ | `baseSWRConfig`, `staticDataSWRConfig` |
| Data fetcher `.then(r => r.data)` | 2 | ivy/ | `createAxiosFetcher()` |
| Loading state toggle | 12+ | dxg.js | `ElementLoadingState`, `LoadingTracker` |
| Error message extraction | 4 | dxg.js, ivy/ | `extractErrorMessage()` |
| Toast notification service | 5 | dxg.js | `createNotifier()` |

---

## Pattern 1: Dictionary Service Caching

### Before (duplicated in 3 places)

**dxg.js:21697-21746** — DictionaryService:
```javascript
constructor(httpClient, localeService, config, messageService) {
    this.httpClient = httpClient;
    this.dictionariesCache = new Map;
    this.throwErrors = this.getThrowErrors();
}
getDictionary(name) {
    if (!this.dictionariesCache.has(name)) {
        const obs = this.httpClient.get(`/${this.config.appName}/api/1/dictionaries/${name}`, {
            params: { lang: this.localeService.getCurrentLocale() },
            headers: this.throwErrors
        }).pipe(catchError(() => of({ name: "NO_DICTIONARY_FOUND", entries: [] })),
                map(s => new DictionaryModel(s)), take(1), shareReplay());
        this.dictionariesCache.set(name, obs);
    }
    return this.dictionariesCache.get(name).pipe(
        map(o => (o.name === "NO_DICTIONARY_FOUND" && this.messageService.showError(...), o))
    );
}
getThrowErrors() {
    return new ThrowErrors([new ErrorConfig({ statusCode: 404 })]).getHeader();
}
```

**dxg.js:28114-28259** — Nearly identical dictionary service with minor differences.  
**dxg.js:28429-28458** — Platform cache with same pattern.

### After

```javascript
import { createDictionaryService, createThrowErrorsHeader } from './shared/cache-utils.js';

// In Angular service constructor:
const { cache, getDictionary } = createDictionaryService({
    httpClient: this.httpClient,
    buildUrl: (name) => `/${this.config.appName}/api/1/dictionaries/${name}`,
    buildParams: () => ({ lang: this.localeService.getCurrentLocale() }),
    headers: createThrowErrorsHeader(ThrowErrors, ErrorConfig, 404),
    operators: { catchError, map, take, shareReplay, of },
    ModelClass: DictionaryModel,
    notFoundName: "NO_DICTIONARY_FOUND",
    onNotFound: (name) => this.messageService.showError(errorKey, { dictionaryName: name })
});
this.getDictionary = getDictionary;
```

---

## Pattern 2: Metrics Sending

### Before (sendMetrics and sendNavigationMetrics are nearly identical)

**dxg.js:29268-29310:**
```javascript
sendMetrics(data) {
    this.enableMetrics ? this.queueApiCall(() => {
        this.http.post(this.metricsEndpoint, data, {
            headers: { "X-Skip-Loading": "true" }
        }).pipe(take(1), catchError(() => of(null))).subscribe({
            next: () => { console.log("sent"); this.processNextApiCall(); },
            error: () => { this.processNextApiCall(); }
        });
    }) : console.log("dev mode:", data);
}
sendNavigationMetrics(data) {
    // EXACT SAME PATTERN, different endpoint
    this.enableMetrics ? this.queueApiCall(() => {
        this.http.post(this.navigationEndpoint, data, {
            headers: { "X-Skip-Loading": "true" }
        }).pipe(take(1), catchError(() => of(null))).subscribe({
            next: () => { console.log("sent"); this.processNextApiCall(); },
            error: () => { this.processNextApiCall(); }
        });
    }) : console.log("dev mode:", data);
}
```

### After

```javascript
import { ApiCallQueue, createMetricsSender } from './shared/metrics-utils.js';

// In service constructor:
this.queue = new ApiCallQueue(1000);
this.sender = createMetricsSender({
    http: this.http,
    queue: this.queue,
    operators: { take, catchError, of },
    enableMetrics: this.enableMetrics
});

// Usage (replaces both methods):
sendMetrics(data) { this.sender.send(this.metricsEndpoint, data, "Page load metrics"); }
sendNavigationMetrics(data) { this.sender.send(this.navigationEndpoint, data, "Navigation metrics"); }
```

---

## Pattern 3: SWR Configuration

### Before (scattered across multiple ivy/ chunks)

**ivy/swr-CnSS_55K.js:**
```javascript
const config = {
    fetcher: e => fetch(e).then(r => r.json()),
    revalidateOnFocus: false,
    revalidateOnMount: true,
    revalidateOnReconnect: false,
    revalidateIfStale: true,
    onErrorRetry: (e, r, c, n, {retryCount: t}) => {
        t >= 3 || setTimeout(() => n({retryCount: t}), 1000);
    }
};
```

**ivy/useAgentDocuments-BZz3HwA3.js:**
```javascript
const { data } = useSWR(key, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
});
```

### After

```javascript
import { baseSWRConfig, staticDataSWRConfig, createAxiosFetcher } from './shared/swr-config.js';

// App-level SWR provider uses baseSWRConfig
<SWRConfig value={baseSWRConfig}>...</SWRConfig>

// Hooks that need static data use the shared config:
const { data } = useSWR(key, fetcher, staticDataSWRConfig);
```

---

## Pattern 4: Loading State Management

### Before (repeated 12+ times)

**dxg.js:8450-8459:**
```javascript
addLoadingState() {
    this.element.classList.add(this.classNames.loadingState);
    this.element.setAttribute('aria-busy', 'true');
    this.isLoading = true;
}
removeLoadingState() {
    this.element.classList.remove(this.classNames.loadingState);
    this.element.removeAttribute('aria-busy');
    this.isLoading = false;
}
```

### After

```javascript
import { ElementLoadingState } from './shared/loading-state.js';

const loader = new ElementLoadingState(element, 'loading-state');
loader.start();  // Adds class + aria-busy
loader.stop();   // Removes class + aria-busy

// Or wrap an async operation:
await loader.wrap(async () => {
    const data = await fetchData();
    renderData(data);
});
```

---

## Pattern 5: Error Message Extraction

### Before (duplicated across Angular and React apps)

**dxg.js (interceptor):**
```javascript
Vn.error?.message || Vn.error?.error || Vn.error.message
```

**ivy/_-BvbvM-bN.js (ErrorBoundary):**
```javascript
t?.data?.data?.detail || t?.data?.detail || t?.detail || "An error occurred..."
```

### After

```javascript
import { extractErrorMessage } from './shared/error-handling.js';

// Works with any error format:
const message = extractErrorMessage(error);
// Returns the first non-null value from: data.data.detail, data.detail, detail,
// error.message, error.error, message, statusText, or the fallback.
```

---

## Migration Priority

1. **High impact, low risk:** `createThrowErrorsHeader()`, `skipLoadingHeaders()` — simple value replacements
2. **High impact, medium risk:** `createDictionaryService()` — replaces 3 service implementations
3. **Medium impact, low risk:** `baseSWRConfig` / `staticDataSWRConfig` — configuration dedup
4. **Medium impact, medium risk:** `createMetricsSender()` — replaces 2 identical methods
5. **Lower priority:** `LoadingTracker`, `extractErrorMessage()` — broader refactoring needed
