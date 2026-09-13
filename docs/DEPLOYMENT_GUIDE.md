# Panduan Lengkap Deploy Next.js ke cPanel Biznet Gio via GitHub Actions

Dokumentasi ini merangkum alur setup dari awal hingga website **ReFeed Indonesia** (`https://refeed-indonesia.com`) berhasil live dengan sistem **CI/CD (Continuous Integration / Continuous Deployment)** otomatis.

---

## 📌 Ringkasan Arsitektur

- **Framework:** Next.js (App Router, Tailwind CSS)
- **Mode Build:** Static Export (`output: 'export'`)
- **Web Server:** LiteSpeed / Apache (cPanel Shared Hosting Biznet Gio)
- **DNS Manager:** Biznet Gio Cloud (Neo DNS)
- **Otomasi (CI/CD):** GitHub Actions (`SamKirkland/FTP-Deploy-Action`)

> **Mengapa metode ini yang terbaik?**  
> Pada shared hosting cPanel, fitur Node.js selector sering mengalami kehabisan memori (*Out of Memory / 100% CPU lock*) saat menjalankan `npm run build`. Dengan metode ini, proses build dilakukan secara gratis dan cepat di server GitHub (RAM 7 GB), lalu file HTML/CSS jadinya otomatis disinkronkan ke cPanel via FTP.

---

## 🛠️ Langkah 1: Konfigurasi di Project Next.js (Lokal)

### 1.1. Konfigurasi `next.config.ts`
Ubah `next.config.ts` agar menghasilkan file statis dan mendukung format URL cPanel:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### 1.2. Konfigurasi `public/.htaccess`
Buat file `public/.htaccess` agar Apache di cPanel mendukung routing halaman Next.js, memaksa HTTPS, dan mengaktifkan kompresi:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # 1. Paksa HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # 2. Sajikan langsung jika file atau folder asli ada
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # 3. Clean URL untuk sub-halaman
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.*)$ $1.html [L]

  RewriteCond %{REQUEST_FILENAME}/index.html -f
  RewriteRule ^(.*)$ $1/index.html [L]
</IfModule>

# Custom Error 404
ErrorDocument 404 /404.html

# Cache & Kompresi Aset
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### 1.3. Workflow Otomatis `.github/workflows/deploy.yml`
Buat file workflow di `.github/workflows/deploy.yml`:

```yaml
name: Deploy to cPanel

on:
  push:
    branches:
      - main

concurrency:
  group: deploy-production
  cancel-in-progress: true

jobs:
  build-and-deploy:
    name: Build & Sync to cPanel
    runs-on: ubuntu-latest

    steps:
      - name: 🚚 Checkout Repository
        uses: actions/checkout@v4

      - name: ⚙️ Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: 📦 Install Dependencies
        run: npm ci

      - name: 🏗️ Build Static Site
        run: npm run build

      - name: 🚀 Sync to cPanel via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          protocol: ftp
          port: 21
          local-dir: ./out/
          server-dir: ./public_html/
          dangerous-clean-slate: false
```

---

## 🔐 Langkah 2: Setup Secrets di GitHub Repository

Agar GitHub Actions memiliki akses FTP untuk mengunggah file ke cPanel:

1. Buka repositori Anda di GitHub.
2. Masuk ke **Settings** ➔ **Secrets and variables** ➔ **Actions**.
3. Klik tombol hijau **New repository secret**, lalu tambahkan 3 variabel berikut:

| Nama Secret | Nilai / Value | Catatan |
| :--- | :--- | :--- |
| `FTP_SERVER` | `103.125.180.21` | **Wajib IP Server**, jangan pakai nama domain atau awalan `https://` |
| `FTP_USERNAME` | `refeedia` | Username login cPanel Anda |
| `FTP_PASSWORD` | *(Password cPanel Anda)* | Password login akun cPanel |

---

## 🌐 Langkah 3: Konfigurasi DNS di Portal Biznet Gio Cloud (Neo DNS)

Agar nama domain mengarah ke IP hosting cPanel Anda:

1. Login ke **Portal Biznet Gio Cloud** (`portal.biznetgio.com`).
2. Masuk ke menu **Domain** ➔ Klik domain **`refeed-indonesia.com`**.
3. Klik tombol hijau **Manage DNS** di bagian atas (di samping tombol *Renew*).
4. Klik tab **Records** (di sebelah tab *Overview*).
5. Klik **Add Record** dan tambahkan 2 record berikut:

### Record 1 (Domain Utama)
- **Type:** `A`
- **Name / Host:** `@` *(atau `refeed-indonesia.com`)*
- **Content / Target IP:** `103.125.180.21`
- **TTL:** `3600`

### Record 2 (Awalan www)
- **Type:** `CNAME`
- **Name / Host:** `www`
- **Content / Target:** `refeed-indonesia.com`
- **TTL:** `3600`

6. Simpan perubahan.

---

## 🔒 Langkah 4: Mengaktifkan SSL (HTTPS) di cPanel

Setelah DNS terhubung, aktifkan sertifikat SSL gratis (*AutoSSL Let's Encrypt*):

1. Login ke **cPanel** Anda.
2. Cari dan klik menu **SSL/TLS Status** (di bagian Security).
3. Centang kotak domain `refeed-indonesia.com` dan `www.refeed-indonesia.com`.
4. Klik tombol **Run AutoSSL**.
5. Tunggu proses validasi 1–3 menit sampai muncul ikon gembok hijau aktif.

---

## 🚀 Langkah 5: Cara Update Website Sehari-hari

Mulai sekarang, Anda tidak perlu membuka cPanel lagi saat ingin update konten atau fitur. Cukup jalankan perintah standar Git dari terminal komputer lokal Anda:

```bash
# 1. Simpan perubahan file
git add .

# 2. Beri catatan commit
git commit -m "update konten halaman utama"

# 3. Push ke GitHub
git push origin main
```

**Sistem akan otomatis:**
1. Memicu GitHub Actions untuk build project.
2. Mengunggah perubahan ke folder `public_html` di cPanel.
3. Website di `https://refeed-indonesia.com` ter-update otomatis dalam kurun waktu 30–60 detik!

---

## 🔍 Catatan & Solusi Kendala (Troubleshooting)

### 1. Error `getaddrinfo ENOTFOUND` pada GitHub Actions
- **Penyebab:** DNS domain belum aktif atau salah format hostname.
- **Solusi:** Pastikan `FTP_SERVER` pada GitHub Secrets diisi dengan **IP Server** (misal: `103.125.180.21`), bukan nama domain atau tautan web.

### 2. Browser menampilkan `DNS_PROBE_FINISHED_NXDOMAIN`
- **Penyebab:** Cache DNS lokal di komputer/browser masih menyimpan status lama sebelum DNS dipasang.
- **Solusi:** Bersihkan cache Chrome di `chrome://net-internals/#dns` (klik *Clear host cache*) atau uji menggunakan koneksi paket data seluler di HP.

### 3. Error `The system cannot deploy (.cpanel.yml)` di cPanel
- **Penyebab:** Menu *cPanel Git Version Control* bawaan tidak cocok untuk Next.js karena server shared hosting tidak sanggup mem-build kode React mentah.
- **Solusi:** Abaikan fitur deploy bawaan cPanel tersebut. Seluruh proses deploy sudah ditangani sepenuhnya oleh **GitHub Actions**.
