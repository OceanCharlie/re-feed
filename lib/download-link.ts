/**
 * Single source of truth for the Re-Feed app install and store links.
 *
 * Every "Google Play" direct button across the site imports `PLAY_STORE_URL`,
 * while APK download modal / QR code flows use `APK_DOWNLOAD_URL`.
 */
export const PLAY_STORE_URL = 'https://play.google.com';
export const APK_DOWNLOAD_URL = '/downloads/refeed-app.apk';

/** Production site origin, used to build absolute URLs (e.g. for the QR code). */
export const SITE_URL = 'https://refeed-indonesia.com';

/**
 * Absolute APK download URL. A QR code must encode a full URL (it's scanned
 * outside the browser, so a relative path has no origin to resolve against).
 */
export const APK_DOWNLOAD_URL_ABSOLUTE = APK_DOWNLOAD_URL.startsWith('http')
  ? APK_DOWNLOAD_URL
  : `${SITE_URL}${APK_DOWNLOAD_URL}`;
