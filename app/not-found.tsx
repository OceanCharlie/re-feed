import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Mail } from 'lucide-react';
import { BrandLogo } from '@/components/BrandLogo';

export const metadata: Metadata = {
  title: '404 - Halaman Tidak Ditemukan | Re-Feed Indonesia',
  description: 'Halaman yang Anda tuju tidak ditemukan atau telah dipindahkan di Re-Feed Indonesia.',
  robots: {
    index: false,
    follow: true,
  },
};

function EmptyPlateSvg({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ilustrasi Piring Kosong Re-Feed"
      role="img"
    >
      <defs>
        {/* Outer Rim Ceramic Gradient */}
        <linearGradient id="plateRim" x1="20" y1="20" x2="140" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F8FAF7" />
          <stop offset="100%" stopColor="#DFEADE" />
        </linearGradient>

        {/* Inner Plate Basin Gradient */}
        <radialGradient id="plateBasin" cx="80" cy="74" r="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F4F8F2" />
          <stop offset="100%" stopColor="#D9E6D5" />
        </radialGradient>

        {/* Cutlery Silverware Gradient */}
        <linearGradient id="silverware" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A8BBAE" />
          <stop offset="50%" stopColor="#7B9281" />
          <stop offset="100%" stopColor="#5E7364" />
        </linearGradient>

        {/* Brand Leaf Gradient */}
        <linearGradient id="brandLeaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8fc22a" />
          <stop offset="100%" stopColor="#105e3a" />
        </linearGradient>

        {/* Subtle Recessed Basin Shadow */}
        <filter id="basinShadow" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#105e3a" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Left Fork */}
      <g opacity="0.92" transform="translate(10, 30)">
        <rect x="5.5" y="42" width="3" height="52" rx="1.5" fill="url(#silverware)" />
        <path d="M4 42 C4 35, 10 35, 10 42 Z" fill="url(#silverware)" />
        <path d="M3 24 L3 36 C3 40, 11 40, 11 36 L11 24 M5.5 24 L5.5 35 M8.5 24 L8.5 35" stroke="url(#silverware)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Right Knife */}
      <g opacity="0.92" transform="translate(136, 30)">
        <rect x="5.5" y="42" width="3" height="52" rx="1.5" fill="url(#silverware)" />
        <path d="M7 42 L7 22 C7 20, 11 23, 11 30 L11 42 Z" fill="url(#silverware)" />
      </g>

      {/* Outer Ceramic Plate Body */}
      <circle cx="80" cy="80" r="54" fill="url(#plateRim)" stroke="#C5D3B8" strokeWidth="1.5" />

      {/* Rim Highlight Specular Arc */}
      <path
        d="M46 42 A 48 48 0 0 1 114 42"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Decorative Plate Rim Ridge */}
      <circle cx="80" cy="80" r="46" stroke="#DCE4D3" strokeWidth="1" strokeDasharray="3 3" opacity="0.85" />

      {/* Inner Plate Basin (Recessed) */}
      <circle cx="80" cy="80" r="38" fill="url(#plateBasin)" filter="url(#basinShadow)" stroke="#D0DEC8" strokeWidth="1" />

      {/* Inner Basin Shine Arc */}
      <path
        d="M56 62 A 32 32 0 0 1 104 62"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Center Eco Sprout (Zero Waste Symbol) */}
      <g transform="translate(80, 78) scale(0.95)">
        <circle cx="0" cy="2" r="3.5" fill="#8fc22a" opacity="0.3" />
        <path
          d="M0 2 C-4 -5, -8 -3, -8 0 C-8 4, -3 6, 0 2 Z"
          fill="url(#brandLeaf)"
        />
        <path
          d="M0 2 C4 -5, 8 -3, 8 0 C8 4, 3 6, 0 2 Z"
          fill="#8fc22a"
        />
        <path d="M0 7 L0 2" stroke="#105e3a" strokeWidth="1.3" strokeLinecap="round" />
      </g>

      {/* Warm Food Rescue Sparkle */}
      <g transform="translate(120, 36) scale(0.75)">
        <path
          d="M0 -10 C0 -2, 2 0, 10 0 C2 0, 0 2, 0 10 C0 2, -2 0, -10 0 C-2 0, 0 -2, 0 -10 Z"
          fill="#fe6708"
        />
      </g>
    </svg>
  );
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-between relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden selection:bg-[#105e3a] selection:text-white">
      {/* Background Ambient Glow Orbs */}
      <div 
        className="glow-orb -top-24 left-1/2 -translate-x-1/2 w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] opacity-70 pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="glow-orb bottom-10 right-[-10%] w-[320px] h-[320px] opacity-40 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Top Navigation / Brand */}
      <header className="max-w-5xl mx-auto w-full flex items-center justify-between z-10">
        <Link href="/" className="group transition-transform active:scale-95" aria-label="Kembali ke Beranda Re-Feed">
          <BrandLogo markSize={32} showTagline={true} />
        </Link>
      </header>

      {/* Center 404 Hero Card */}
      <div className="max-w-3xl mx-auto w-full my-auto py-8 sm:py-12 z-10">
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_30px_80px_-20px_rgba(16,94,58,0.22),0_0_0_1px_rgba(143,194,42,0.12)] p-6 sm:p-12 text-center overflow-hidden">
          {/* Subtle decorative mesh gradient inside card */}
          <div 
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-[#8fc22a]/15 to-transparent blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-tr from-[#105e3a]/10 to-transparent blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          {/* Big Stylized 404 Graphic */}
          <div className="relative flex items-center justify-center gap-2 sm:gap-4 my-2 select-none">
            <span className="text-7xl sm:text-9xl font-black tracking-tighter text-[#16241C] font-display drop-shadow-sm">
              4
            </span>
            
            {/* Center Plate SVG Illustration */}
            <div className="relative flex items-center justify-center p-1 animate-bounce duration-1000">
              <EmptyPlateSvg className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-md hover:rotate-6 transition-transform cursor-pointer" />
            </div>

            <span className="text-7xl sm:text-9xl font-black tracking-tighter text-[#16241C] font-display drop-shadow-sm">
              4
            </span>
          </div>

          {/* Headline & Description */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#16241C] tracking-tight mt-4 font-display">
            Oops! Piring Ini Kosong... 🍽️
          </h1>
          <p className="text-sm sm:text-base text-[#57655B] max-w-lg mx-auto mt-2.5 leading-relaxed font-normal">
            Sepertinya porsi halaman yang Anda cari sudah habis dipindahkan atau tautannya keliru. Tapi tenang, masih banyak makanan lezat yang bisa diselamatkan di beranda!
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7">
            <Link
              href="/"
              className="btn-app-primary w-full sm:w-auto px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-black text-white flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
            >
              <Home className="w-4 h-4" />
              <span>Kembali ke Beranda Utama</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer Help */}
      <footer className="max-w-5xl mx-auto w-full text-center text-xs text-[#57655B] z-10">
        <p>
          Butuh bantuan langsung? Hubungi kami di{' '}
          <a
            href="mailto:pkmkc.refeed@gmail.com?subject=Bantuan%20Link%20Error%20404"
            className="font-bold text-[#105e3a] hover:underline inline-flex items-center gap-1"
          >
            <Mail className="w-3 h-3" />
            <span>pkmkc.refeed@gmail.com</span>
          </a>
        </p>
        <p className="text-[11px] text-[#57655B]/70 mt-1">
          &copy; {new Date().getFullYear()} Re-Feed Indonesia. What we recover today, feeds tomorrow!
        </p>
      </footer>
    </main>
  );
}