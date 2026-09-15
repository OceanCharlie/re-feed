/**
 * Single source of truth for the ReFeed app install link.
 *
 * Every "Download" / "Install" button across the site (Hero, Download CTA,
 * Download Modal, Floating CTA, Behind ReFeed page) imports this constant
 * instead of hardcoding a URL, so the link only needs to be updated here.
 *
 * TODO: Replace with the real APK URL once it's hosted (e.g. a GitHub
 * Release asset, or a file placed at `public/downloads/refeed-app.apk`
 * and referenced here as `/downloads/refeed-app.apk`).
 */
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
