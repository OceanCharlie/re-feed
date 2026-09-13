# ReFeed (Website) - Surplus Food Rescue & Waste-to-Energy Platform

**Project Context:** PKM-KC Kemendikbudristek & Universitas Tarumanagara (UNTAR) <br>
**Version:** 1.0 (Official Web Portal) <br>
**Live Website:** [refeed-indonesia.com](https://refeed-indonesia.com)

ReFeed is a Next.js-based web application and official landing portal designed to combat food waste and environmental degradation in Indonesia. The platform connects consumers with restaurants, bakeries, and supermarkets to rescue surplus food with up to 70% discounts, while channeling non-consumable organic waste into biogas and organic fertilizer through the **Waste Hub** network.

-----

## Key Features

* **Surplus Food Rescue Marketplace:** Browse and purchase surplus food packages (Surprise Bags) from culinary merchants before store closing hours.
* **Waste-to-Energy Hub:** Dedicated circular economy pipeline to convert unavoidable organic food waste into renewable biogas energy.
* **Interactive Calculators:**
  * **Personal Savings Calculator:** Real-time simulation of financial savings, CO₂ emission reductions, and equivalent trees saved.
  * **Partner Revenue Calculator:** Merchant profit simulator projecting monthly additional income from surplus inventory.
* **Live Radar & App Simulator:** Interactive mobile UI demonstration and geo-radar simulator showing live food rescue drops across major cities.
* **Behind ReFeed Portal:** Genesis story, three core ecosystem pillars, AI/geolocation technology breakdown, and student innovation research background.
* **Partner & Download Modals:** Interactive merchant onboarding forms with client-side validation and celebration feedback powered by canvas-confetti.
* **Futuristic Glassmorphism Aesthetic:** Custom 4-point mesh gradient, frosted glass cards (`app-card`, `glass-panel`), responsive typography, and smooth micro-animations.
* **Automated CI/CD Deployment:** Automated static bundle compilation via GitHub Actions and synchronized directly to cPanel shared hosting via FTP.

-----

## Technology Stack

The project is built upon the following key technologies:

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | High-performance React framework with Turbopack and static export. |
| **Language** | TypeScript | Ensures type safety throughout the application. |
| **Styling** | Tailwind CSS 4 | Utility-first CSS framework with custom glassmorphism design system. |
| **Icons** | Lucide React | Lightweight, consistent, and customizable SVG iconography. |
| **Effects** | Canvas Confetti | Celebration particle effects on interactive form submissions. |
| **Typography** | Bricolage Grotesque & Inter | Custom Google Fonts paired via `next/font` for optimal readability. |
| **CI/CD & Hosting** | GitHub Actions & cPanel | Continuous deployment pipeline targeting Biznet Gio Cloud (NeoDNS). |

-----

## Requirements and Setup

### Prerequisites

* Node.js (version 20 or higher is recommended).
* A package manager (npm, yarn, or pnpm).
* Modern web browser supporting modern CSS (backdrop-filter, CSS grid).

### Installation

1. Clone the repository and navigate into the project directory:

    ```bash
    git clone https://github.com/OceanCharlie/re-feed.git
    cd re-feed
    ```

2. Install project dependencies:

    ```bash
    npm install
    # or pnpm install
    ```

### Running the Application

To start the development server:

```bash
npm run dev
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

### Code Overview

The program utilizes Next.js App Router and the following logical directory structure:

| Directory / File | Description |
| :--- | :--- |
| `app/` | Contains all Next.js routes, including landing page (`page.tsx`), team page (`behind-refeed/page.tsx`), and root layout (`layout.tsx`). |
| `components/` | Modular and reusable UI components (Navbar, HeroSection, LiveRadarSimulator, Calculators, Modals, Footer). |
| `public/` | Static assets including optimized WebP images, institutional logos, `.htaccess`, and site verification files. |
| `.github/workflows/` | GitHub Actions workflow configuration (`deploy.yml`) for automated FTP deployment. |
| `next.config.ts` | Next.js configuration enabling `output: 'export'` for static cPanel shared hosting compatibility. |

-----

### Development & Configuration Notes

1. **Static Export Mode:** <br>The project is configured with `output: 'export'` and `trailingSlash: true` in `next.config.ts` to output pure HTML/CSS/JS into `out/`, eliminating the need for a Node.js daemon on cPanel.
2. **Server Routing & SSL:** <br>The `public/.htaccess` file handles HTTPS enforcement, clean trailing-slash routing, and browser caching rules on LiteSpeed/Apache web servers.
3. **Automated Deployment:** <br>Any push to the `main` branch automatically triggers the GitHub Actions workflow to build and sync the `out/` directory to the server's `public_html` via FTP.
4. **Code Quality:** <br>ESLint and TypeScript compiler are strictly enforced to maintain zero warnings and clean build output.

### Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `dev` | `npm run dev` | Runs the Next.js development server with Turbopack. |
| `build` | `npm run build` | Compiles and exports static production assets to `/out`. |
| `lint` | `npm run lint` | Executes ESLint against the codebase to ensure code quality. |

-----

## Partnership & Credits

This project was developed under the **Program Kreativitas Mahasiswa (PKM-KC)** by **Kemendikbudristek** (Kementerian Pendidikan Dasar dan Menengah / Kementerian Pendidikan Tinggi, Sains, dan Teknologi) and **Universitas Tarumanagara (UNTAR)**.

### Strategic Advisor & Dosen Pembimbing

* **[Tony, Ph.D.](https://www.linkedin.com/in/tony-lie-b57a195/)** - *Strategic Advisor & Dosen Pembimbing*, Fakultas Teknologi Informasi UNTAR.

### Development Team

* **[Ocean Charlie Gunawan](https://www.linkedin.com/in/oceancharliegunawan/)** - *Front End Developer* (React Native, Next.js, Expo, Tailwind CSS).
* **[Chandra Wijaya](https://www.linkedin.com/in/chandra-wijaya)** - *UI/UX Designer* (Figma, Design System, User Flow).
* **[Jessica](https://www.linkedin.com/in/jessica-jessica)** - *Project Manager* (Product Roadmap, Agile, Operations).
* **[Akemi Belva Sutanto](https://www.linkedin.com/in/akemi-belva-sutanto-064061296/)** - *Integration Engineer* (API Pipeline, Cloud Services, Data Sync).
* **[Danniel](https://www.linkedin.com/in/danniel-a5a918252/)** - *Back End Developer* (Spring Boot, MySQL, REST API).

### Connect With Us

* **Instagram:** [@pkmkc.refeed](https://www.instagram.com/pkmkc.refeed/)
* **Email:** [pkmkc.refeed@gmail.com](mailto:pkmkc.refeed@gmail.com)
* **Website:** [refeed-indonesia.com](https://refeed-indonesia.com)