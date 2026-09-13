# 🌱 ReFeed — Selamatkan Makanan, Selamatkan Bumi

Website resmi **ReFeed**, platform yang menghubungkan restoran, bakery, dan supermarket dengan konsumen untuk menyelamatkan makanan surplus berkualitas dengan diskon hingga 70%, sekaligus mengelola limbah organik menjadi energi biogas melalui jaringan **Waste Hub**.

Proyek ini merupakan inovasi mahasiswa **Fakultas Teknologi Informasi, Universitas Tarumanagara (UNTAR)** di bawah program **PKM (Program Kreativitas Mahasiswa) Kemendikbudristek**.

🔗 **Live site:** [refeed-indonesia.com](https://refeed-indonesia.com)

---

## ✨ Fitur Utama Website

- **Landing page** lengkap: hero, statistik dampak, ekosistem solusi (surplus food, waste-to-energy, food bank), cerita dampak lingkungan, kemitraan merchant, dan CTA unduh aplikasi.
- **Kalkulator interaktif** — simulasi penghematan konsumen (`PersonalSavingsCalculator`) dan proyeksi omzet tambahan mitra usaha (`PartnerCalculator`).
- **Simulator aplikasi** — pratinjau antarmuka mobile ReFeed (`AppSimulator`) dan simulasi radar surplus makanan langsung (`LiveRadarSimulator`).
- **Halaman "Behind ReFeed"** — profil tim, dosen pembimbing, tiga pilar ekosistem, teknologi, dan nilai inti.
- **Modal pendaftaran mitra & unduh aplikasi** dengan validasi form dan efek confetti saat submit berhasil.
- Desain **glassmorphism futuristik** — mesh gradient 4 titik (putih & hijau), kartu kaca (`app-card`, `glass-panel`), dan aksen glow yang konsisten di seluruh halaman, sepenuhnya responsif dari 400px ke atas.

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack, Static Export) |
| Bahasa | TypeScript |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Ikon | [lucide-react](https://lucide.dev) |
| Efek | [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) |
| Font | Bricolage Grotesque (display) & Inter (body) via `next/font` |
| Linting | ESLint (`eslint-config-next`) |
| CI/CD | GitHub Actions → FTP deploy ke cPanel (lihat [`docs/DEPLOYMENT_GUIDE.md`](docs/DEPLOYMENT_GUIDE.md)) |

> Proyek ini dikonfigurasi sebagai **static export** (`output: 'export'` di `next.config.ts`) agar bisa di-hosting di shared hosting cPanel tanpa Node.js runtime.

---

## 📂 Struktur Proyek

```
re-feed/
├── app/
│   ├── page.tsx                # Landing page utama (route "/")
│   ├── layout.tsx              # Root layout, metadata, font, background mesh
│   ├── globals.css             # Design system: warna, gradient mesh, utility class
│   ├── favicon.ico
│   └── behind-refeed/
│       └── page.tsx            # Halaman "Behind ReFeed" (profil tim & cerita)
├── components/
│   ├── Navbar.tsx               ├── HeroSection.tsx
│   ├── ImpactStats.tsx          ├── DualEcosystem.tsx
│   ├── ScenicStoryBanner.tsx    ├── PartnerLogosStrip.tsx
│   ├── DownloadCta.tsx          ├── Footer.tsx
│   ├── FloatingCta.tsx          ├── DownloadModal.tsx
│   ├── PartnerModal.tsx         ├── FeaturesBento.tsx
│   ├── HowItWorks.tsx           ├── AppSimulator.tsx
│   ├── LiveRadarSimulator.tsx   ├── PartnerCalculator.tsx
│   ├── PersonalSavingsCalculator.tsx
│   ├── Testimonials.tsx         ├── FaqSection.tsx
│   ├── PartnerMarquee.tsx       └── BrandLogo.tsx
├── public/
│   └── images/                  # Aset gambar, mockup, dan logo mitra/institusi
├── docs/
│   └── DEPLOYMENT_GUIDE.md      # Panduan lengkap deploy ke cPanel via GitHub Actions
├── .github/workflows/deploy.yml # Workflow CI/CD (build + FTP sync ke cPanel)
├── AGENTS.md                    # Catatan versi Next.js untuk AI coding agent
├── next.config.ts
└── package.json
```

> Beberapa komponen (`HowItWorks`, `AppSimulator`, `FeaturesBento`, `Testimonials`, `FaqSection`, `PartnerCalculator`, `PartnerMarquee`, `PersonalSavingsCalculator`, `LiveRadarSimulator`) sudah dibuat tapi belum tentu ter-render di `app/page.tsx` saat ini — cek import di file tersebut sebelum menambah link navigasi baru ke section-nya.

---

## 🚀 Getting Started

### Prasyarat
- Node.js 20+
- npm (project menggunakan `package-lock.json`)

### Instalasi

```bash
git clone https://github.com/<org>/re-feed.git
cd re-feed
npm install
```

### Development

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) — halaman auto-reload saat file di-edit (mulai dari `app/page.tsx`).

### Build & Static Export

```bash
npm run build
```

Hasil build statis (HTML/CSS/JS) akan ada di folder `out/`, siap di-upload ke hosting statis mana pun.

### Menjalankan hasil build secara lokal

```bash
npx serve out
```

### Lint

```bash
npm run lint
```

---

## 🌐 Deployment

Website ini di-deploy otomatis ke **cPanel (Biznet Gio)** setiap ada push ke branch `main`, melalui GitHub Actions yang men-build project lalu mengirim isi folder `out/` ke `public_html` via FTP.

Panduan lengkap (konfigurasi `next.config.ts`, `.htaccess`, GitHub Secrets, DNS, SSL, hingga troubleshooting) ada di **[`docs/DEPLOYMENT_GUIDE.md`](docs/DEPLOYMENT_GUIDE.md)**.

Alur update harian:

```bash
git add .
git commit -m "update konten halaman utama"
git push origin main
```

Dalam ~30–60 detik perubahan otomatis live di [refeed-indonesia.com](https://refeed-indonesia.com).

---

## 🎨 Design System Singkat

Warna & efek visual dipusatkan di `app/globals.css` sebagai CSS variables & utility class, dipakai berulang lintas komponen:

- `--forest-primary`, `--spring-green`, `--lime-accent` — palet hijau utama.
- `.bg-mesh-canvas` / `.bg-mesh-soft` — gradient mesh 4 titik (putih + hijau) yang jadi identitas visual di belakang seluruh halaman.
- `.app-card` / `.glass-panel` — kartu glassmorphism dengan efek blur & glow saat hover.
- `.badge-glow` / `.text-gradient-brand` — badge pill & teks gradien untuk penekanan visual.
- `.btn-app-primary` / `.btn-app-secondary` — tombol CTA dengan efek shine & glow.

Ubah token warna di `:root` pada `app/globals.css` untuk menyesuaikan tema secara global.

---

## 👥 Tim

Dikembangkan oleh mahasiswa Fakultas Teknologi Informasi, Universitas Tarumanagara (UNTAR) di bawah bimbingan dosen, dengan dukungan Kemendikbudristek, Diktisaintek, dan SIMBelmawa melalui program PKM. Profil lengkap tim ada di halaman [`/behind-refeed`](https://refeed-indonesia.com/behind-refeed).

---

## 📄 Lisensi

Proyek internal tim ReFeed / UNTAR — belum ditentukan lisensi publik. Hubungi tim melalui [pkmkc.refeed@gmail.com](mailto:pkmkc.refeed@gmail.com) untuk pertanyaan penggunaan kode.
