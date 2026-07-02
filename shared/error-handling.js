/**
 * Shared error handling utilities.
 *
 * Consolidates duplicated error handling patterns found in:
 * - dxg.js lines 30330-30370: HTTP error interceptor with toaster notifications
 * - dxg.js lines 22019-22033: showSuccess/showError/showWarning/showInfo message service
 * - ivy/_-BvbvM-bN.js: ErrorBoundary with toast notifications
 * - ivy/components-Z7XpNWav.js: Remix ErrorBoundary pattern
 *
 * Common duplicated patterns:
 *   1. Extracting error message from various response formats
 *   2. Showing toaster/toast notifications with consistent types
 *   3. Mapping HTTP status codes to user-friendly messages
 */

/**
 * Extracts a user-friendly error message from various error response formats.
 * Replaces the duplicated error extraction logic in the HTTP error interceptor
 * (dxg.js line 30341-30354) and ErrorBoundary (ivy/_-BvbvM-bN.js).
 *
 * Handles:
 * - { error: { message: "..." } }  (Angular HttpErrorResponse)
 * - { data: { detail: "..." } }    (Remix/React error)
 * - { detail: "..." }              (FastAPI/Python error)
 * - { message: "..." }             (Generic error)
 * - Error instances with .message
 * - String errors
 *
 * @param {any} error - The error object/response
 * @param {string} [fallback] - Fallback message if extraction fails
 * @returns {string} Human-readable error message
 */
export function extractErrorMessage(error, fallback = "An error occurred while processing your request.") {
  if (!error) return fallback;

  if (typeof error === "string") return error;

  // Remix/React loader error format
  if (error?.data?.data?.detail) return error.data.data.detail;
  if (error?.data?.detail) return error.data.detail;
  if (error?.detail) return error.detail;

  // Angular HttpErrorResponse format
  if (error?.error?.message) return error.error.message;
  if (error?.error?.error) return error.error.error;

  // Standard Error instance
  if (error?.message) return error.message;

  // Status text fallback
  if (error?.statusText) {
    return `${error.statusText}${error.status ? ` (${error.status})` : ""}`;
  }

  return fallback;
}

/**
 * Determines the severity/type of an HTTP error by status code.
 * Replaces the regex-based pattern matching at dxg.js line 30335.
 *
 * @param {number} statusCode - HTTP status code
 * @returns {"error"|"warning"|"info"} Toast notification type
 */
export function getErrorSeverity(statusCode) {
  if (statusCode >= 500) return "error";
  if (statusCode === 403 || statusCode === 401) return "warning";
  if (statusCode >= 400) return "error";
  return "info";
}

/**
 * Checks if an error is a known/expected error code that should be handled silently.
 * Replaces the `ii.includes(errorCode)` check at dxg.js line 30343.
 *
 * @param {string} errorCode - The error code from the response
 * @param {string[]} knownCodes - Array of known/expected error codes
 * @returns {boolean} True if the error is known/expected
 */
export function isKnownError(errorCode, knownCodes) {
  return knownCodes.includes(errorCode);
}

/**
 * Unified notification service interface.
 * Replaces duplicated showSuccess/showError/showInfo/showWarning pattern
 * found at dxg.js lines 22019-22033.
 *
 * Usage:
 *   const notifier = createNotifier(toasterService, bodyOutputType, componentFactory);
 *   notifier.success(component, model);
 *   notifier.error(component, model);
 */
export function createNotifier(toasterService, bodyOutputType, componentFactoryResolver) {
  function createMsg(type, component, model) {
    return {
      type,
      bodyOutputType,
      body: component,
      data: {
        componentFactory: componentFactoryResolver.resolveComponentFactory(component),
        model,
      },
    };
  }

  return {
    success(component, model) {
      toasterService.pop(createMsg("success", component, model));
    },
    error(component, model) {
      toasterService.pop(createMsg("error", component, model));
    },
    info(component, model) {
      toasterService.pop(createMsg("info", component, model));
    },
    warning(component, model) {
      toasterService.pop(createMsg("warning", component, model));
    },
  };
}

/**
 * Default error notification message with status code.
 * Replaces the pattern: translateService.instant("message.statusCode", { statusCode })
 *
 * @param {number} statusCode - HTTP status code
 * @param {Function} translate - Translation function
 * @param {string} translationKey - The i18n key for generic HTTP errors
 * @returns {string} Translated error message
 */
export function formatHttpError(statusCode, translate, translationKey) {
  return translate(translationKey, { statusCode });
}
