// Regenerates public/images/qr-refeed-apk.svg from the APK download link.
// Run this any time lib/download-link.ts's APK_DOWNLOAD_URL(_ABSOLUTE) changes:
//   npm run generate:qr
import QRCode from 'qrcode';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Kept in sync with lib/download-link.ts (plain Node script can't import the
// TS module directly without a build step, so the URL is mirrored here).
const SITE_URL = 'https://refeed-indonesia.com';
const APK_DOWNLOAD_URL = '/downloads/refeed-app.apk';
const APK_DOWNLOAD_URL_ABSOLUTE = APK_DOWNLOAD_URL.startsWith('http')
  ? APK_DOWNLOAD_URL
  : `${SITE_URL}${APK_DOWNLOAD_URL}`;

const outPath = path.join(__dirname, '..', 'public', 'images', 'qr-refeed-apk.svg');

const svg = await QRCode.toString(APK_DOWNLOAD_URL_ABSOLUTE, {
  type: 'svg',
  errorCorrectionLevel: 'M',
  margin: 1,
  color: {
    dark: '#16241C',
    light: '#FFFFFF',
  },
});

await writeFile(outPath, svg, 'utf8');
console.log(`QR code written to ${path.relative(process.cwd(), outPath)}`);
console.log(`Encoded URL: ${APK_DOWNLOAD_URL_ABSOLUTE}`);
