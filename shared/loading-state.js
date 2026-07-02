/**
 * Shared loading state management utilities.
 *
 * Consolidates duplicated loading/busy state patterns found in:
 * - dxg.js lines 8450-8459: addLoadingState/removeLoadingState
 * - dxg.js lines 55139-55174: this.loading = true/false with class toggling
 * - dxg.js lines 72249-72264: loading state with DOM attribute management
 * - ivy/LoadingContext-C7RDKM__.js: React context-based loading state
 * - ivy/LoadingFullScreen-DN4Gr571.js: Full-screen loading component
 *
 * Common pattern repeated throughout:
 *   this.loading = true;
 *   element.classList.add('loading-state');
 *   element.setAttribute('aria-busy', 'true');
 *   // ... do work ...
 *   this.loading = false;
 *   element.classList.remove('loading-state');
 *   element.removeAttribute('aria-busy');
 */

/**
 * Manages loading state with DOM element class and aria attribute toggling.
 * Replaces addLoadingState/removeLoadingState pattern at dxg.js lines 8450-8459.
 */
export class ElementLoadingState {
  /**
   * @param {HTMLElement} element - The DOM element to manage
   * @param {string} loadingClass - CSS class to toggle (default: 'is-loading')
   */
  constructor(element, loadingClass = "is-loading") {
    this._element = element;
    this._loadingClass = loadingClass;
    this._isLoading = false;
  }

  get isLoading() {
    return this._isLoading;
  }

  /**
   * Set loading state on the element.
   * Adds CSS class and aria-busy attribute.
   */
  start() {
    this._element.classList.add(this._loadingClass);
    this._element.setAttribute("aria-busy", "true");
    this._isLoading = true;
  }

  /**
   * Clear loading state from the element.
   * Removes CSS class and aria-busy attribute.
   */
  stop() {
    this._element.classList.remove(this._loadingClass);
    this._element.removeAttribute("aria-busy");
    this._isLoading = false;
  }

  /**
   * Execute an async function with automatic loading state management.
   *
   * @param {Function} asyncFn - Async function to execute while loading
   * @returns {Promise<any>} Result of the async function
   */
  async wrap(asyncFn) {
    this.start();
    try {
      return await asyncFn();
    } finally {
      this.stop();
    }
  }
}

/**
 * Simple boolean loading state tracker for service/component use.
 * Replaces the scattered `this.loading = true/false` pattern.
 *
 * Usage:
 *   const loadingState = new LoadingTracker();
 *   loadingState.start();  // this.loading = true
 *   // ... do work ...
 *   loadingState.stop();   // this.loading = false
 */
export class LoadingTracker {
  constructor() {
    this._isLoading = false;
    this._listeners = [];
  }

  get isLoading() {
    return this._isLoading;
  }

  start() {
    this._isLoading = true;
    this._notify();
  }

  stop() {
    this._isLoading = false;
    this._notify();
  }

  /**
   * Subscribe to loading state changes.
   * @param {Function} callback - Called with boolean isLoading value
   * @returns {Function} Unsubscribe function
   */
  subscribe(callback) {
    this._listeners.push(callback);
    return () => {
      this._listeners = this._listeners.filter((l) => l !== callback);
    };
  }

  _notify() {
    this._listeners.forEach((cb) => cb(this._isLoading));
  }

  /**
   * Execute an async function with automatic loading tracking.
   *
   * @param {Function} asyncFn - Async function to execute
   * @returns {Promise<any>} Result of the async function
   */
  async wrap(asyncFn) {
    this.start();
    try {
      return await asyncFn();
    } finally {
      this.stop();
    }
  }
}

/**
 * Counter-based loading state for multiple concurrent operations.
 * Only transitions to "not loading" when ALL operations complete.
 * Replaces the request counter pattern at dxg.js line 30151.
 */
export class LoadingCounter {
  constructor() {
    this._count = 0;
    this._listeners = [];
  }

  get isLoading() {
    return this._count > 0;
  }

  get count() {
    return this._count;
  }

  increment() {
    this._count++;
    if (this._count === 1) this._notify();
  }

  decrement() {
    this._count = Math.max(0, this._count - 1);
    if (this._count === 0) this._notify();
  }

  subscribe(callback) {
    this._listeners.push(callback);
    return () => {
      this._listeners = this._listeners.filter((l) => l !== callback);
    };
  }

  _notify() {
    this._listeners.forEach((cb) => cb(this.isLoading));
  }
}
