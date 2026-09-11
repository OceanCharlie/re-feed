'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Play, 
  QrCode, 
  Sparkles, 
  Star, 
  ShieldCheck, 
  Leaf, 
  Zap, 
  TrendingDown,
  ArrowRight
} from 'lucide-react';

interface HeroSectionProps {
  onOpenDownloadModal: () => void;
  onOpenPartnerModal: () => void;
}

export default function HeroSection({ onOpenDownloadModal, onOpenPartnerModal }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FCFAF7]">
      {/* Warm Ambient Soft Green & Yellow Halo */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#EBF5E4]/80 via-[#FEF9EE]/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Friendly Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF5E4] text-[#105e3a] text-xs font-bold mb-6 border border-[#C8D9C2] shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#105e3a] animate-pulse" />
          <span>Aplikasi Penyelamat Pangan & Nol Limbah #1</span>
        </div>

        {/* Clean, Inviting Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#141A16] max-w-4xl mx-auto leading-[1.08] mb-6">
          Selamatkan Makanan Lezat,{' '}
          <span className="text-[#105e3a]">Hemat hingga 70%</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-[#57655B] max-w-2xl mx-auto font-normal leading-relaxed mb-8">
          Beli paket makanan berkualitas prima dari resto, bakery, dan supermarket favoritmu sebelum jam tutup dengan harga hemat, serta salurkan sisa organik dapur jadi energi biogas bersih.
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-app-primary w-full sm:w-auto px-8 py-4 text-sm sm:text-base rounded-2xl flex items-center justify-center gap-3 cursor-pointer shadow-md"
          >
            <Play className="w-5 h-5 fill-white text-white" />
            <div className="text-left">
              <div className="text-[10px] text-[#E8F4DA] font-semibold uppercase tracking-wider leading-tight">Download Sekarang</div>
              <div className="text-sm font-black leading-none">Google Play Store</div>
            </div>
          </a>

          <button
            onClick={onOpenDownloadModal}
            className="btn-app-secondary w-full sm:w-auto px-6 py-4 text-sm sm:text-base rounded-2xl flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <QrCode className="w-4 h-4 text-[#105e3a]" />
            <span>Pindai QR / Unduh APK</span>
          </button>
        </div>

        {/* Store Availability Tag Badges */}
        <div className="flex items-center justify-center gap-3 text-xs text-[#57655B] mb-14">
          <span className="inline-flex items-center gap-1.5 font-bold text-[#105e3a]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#105e3a]"></span>
            Tersedia di Android (v1.0 Ready)
          </span>
          <span>•</span>
          <span className="text-slate-500 font-medium">
            🍏 Versi iOS App Store Segera Hadir
          </span>
        </div>

        {/* Centerpiece 3D Smartphone Showcase */}
        <div className="relative max-w-sm sm:max-w-md mx-auto flex items-center justify-center">
          
          {/* Left Floating Surprise Bag Card */}
          <div className="hidden sm:flex absolute -left-20 top-20 z-30 p-3.5 floating-badge rounded-2xl items-center gap-3 text-left animate-gentle-float">
            <div className="w-10 h-10 rounded-xl bg-[#FE6708] flex items-center justify-center text-white font-black shrink-0 shadow-xs">
              -70%
            </div>
            <div>
              <div className="text-xs font-black text-[#141A16]">Surprise Bag Resto</div>
              <div className="text-[11px] text-[#57655B] font-medium">🥐 3 Croissant Diselamatkan</div>
            </div>
          </div>

          {/* Right Floating Waste Hub Card */}
          <div className="hidden sm:flex absolute -right-20 bottom-24 z-30 p-3.5 floating-badge rounded-2xl items-center gap-3 text-left animate-gentle-float-delayed">
            <div className="w-10 h-10 rounded-xl bg-[#EBF5E4] flex items-center justify-center text-[#105e3a] font-black shrink-0 shadow-xs">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-[#141A16]">Waste Hub +50 Poin</div>
              <div className="text-[11px] text-[#57655B] font-medium">🌱 Daur ulang limbah jadi energi</div>
            </div>
          </div>

          {/* Smartphone Frame */}
          <div className="relative z-20 w-[280px] sm:w-[320px] rounded-[48px] p-3 bg-[#111c15] app-phone-shadow border-[4px] border-[#2D3E33]">
            {/* Dynamic Island */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-black rounded-full z-30 flex items-center justify-end px-2">
              <div className="w-2 h-2 rounded-full bg-[#8fc22a] animate-pulse" />
            </div>

            {/* Screen Image */}
            <div className="relative w-full h-[560px] sm:h-[620px] bg-white rounded-[38px] overflow-hidden">
              <Image
                src="/images/1.png"
                alt="ReFeed Mobile App Screen"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>

        </div>

        {/* Trust Proof Bar */}
        <div className="mt-16 pt-8 border-t border-[#E8EDE5] max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#57655B]">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-[#141A16]">4.9 / 5.0</span>
            <span>(15k+ Food Hero)</span>
          </div>

          <div className="flex items-center gap-1.5 font-semibold text-[#141A16]">
            <ShieldCheck className="w-4 h-4 text-[#105e3a]" />
            <span>100% Layak Konsumsi</span>
          </div>

          <div className="flex items-center gap-1.5 font-semibold text-[#141A16]">
            <Leaf className="w-4 h-4 text-[#105e3a]" />
            <span>150k+ Makanan Diselamatkan</span>
          </div>
        </div>

      </div>
    </section>
  );
}
