'use client';

import React from 'react';
import Image from 'next/image';
import { QrCode, CheckCircle2 } from 'lucide-react';
import { GooglePlayIcon } from './BrandLogo';
import { APK_DOWNLOAD_URL } from '@/lib/download-link';

interface DownloadCtaProps {
  onOpenDownloadModal: () => void;
  onOpenPartnerModal: () => void;
}

export default function DownloadCta({ onOpenDownloadModal }: DownloadCtaProps) {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Soft Green Rounded Container Card */}
        <div className="app-card rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          {/* Ambient glow accents echoing the 4-point mesh */}
          <div className="glow-orb -top-16 -left-16 w-56 h-56 opacity-60" />
          <div className="glow-orb -bottom-20 -right-10 w-64 h-64 opacity-50 [animation-delay:2s]" />
          
          {/* Left Column: Cute Mascot with Grocery Bag */}
          <div className="lg:col-span-3 flex items-center justify-center relative">
            <div className="relative w-40 sm:w-48 lg:w-56 h-40 sm:h-48 lg:h-56">
              <Image
                src="/images/mitra.webp"
                alt="ReFeed Sprout Mascot with Grocery Bag"
                fill
                priority
                sizes="(max-width: 1024px) 200px, 240px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Center Column: Headings & Bullet Checklist */}
          <div className="lg:col-span-6 text-left space-y-3 sm:space-y-4">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#141A16] tracking-tight leading-tight">
              Yuk, Mulai Selamatkan <br />
              Makanan Hari Ini!
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#57655B] leading-relaxed max-w-lg">
              Download aplikasi ReFeed sekarang dan jadi bagian dari perubahan untuk bumi yang lebih baik.
            </p>

            {/* Checklist */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm font-bold text-[#105e3a]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 fill-[#105e3a] text-white" />
                <span>Gratis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 fill-[#105e3a] text-white" />
                <span>Mudah Digunakan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 fill-[#105e3a] text-white" />
                <span>Berdampak Nyata</span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Play Button & QR Card */}
          <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-3">
            {/* Google Play Button */}
            <a
              href={APK_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-14 px-5 bg-black hover:bg-neutral-900 text-white rounded-2xl flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer group"
            >
              <GooglePlayIcon size={24} className="shrink-0" />
              <div className="text-left">
                <div className="text-[9px] text-neutral-300 font-bold uppercase tracking-wider leading-none">Download di</div>
                <div className="text-xs sm:text-sm font-black leading-tight text-white mt-0.5">Google Play Store</div>
              </div>
            </a>

            {/* QR Scanner Card */}
            <button
              onClick={onOpenDownloadModal}
              className="btn-app-secondary w-full h-14 px-4 rounded-2xl flex items-center justify-center gap-3 active:scale-98 cursor-pointer"
            >
              <QrCode className="w-5 h-5 text-[#105e3a] shrink-0" />
              <div className="text-left text-xs font-bold leading-tight">
                <div>Pindai QR</div>
                <div className="text-[10px] text-[#57655B] font-normal">untuk Unduh</div>
              </div>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
