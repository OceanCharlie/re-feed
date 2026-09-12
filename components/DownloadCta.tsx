'use client';

import React from 'react';
import Image from 'next/image';
import { QrCode, CheckCircle2 } from 'lucide-react';
import { GooglePlayIcon } from './BrandLogo';

interface DownloadCtaProps {
  onOpenDownloadModal: () => void;
  onOpenPartnerModal: () => void;
}

export default function DownloadCta({ onOpenDownloadModal }: DownloadCtaProps) {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Soft Green Rounded Container Card */}
        <div className="rounded-[32px] sm:rounded-[40px] bg-[#EFF6E9] border border-[#DCE8D4] p-6 sm:p-10 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          
          {/* Left Column: Cute Mascot with Grocery Bag */}
          <div className="lg:col-span-3 flex items-center justify-center relative">
            <div className="relative w-40 sm:w-48 lg:w-56 h-40 sm:h-48 lg:h-56 drop-shadow-lg">
              <Image
                src="/images/mascot_bag.png"
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
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 bg-[#105e3a] hover:bg-[#0c5536] text-white rounded-2xl flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-xs">
                <GooglePlayIcon size={20} />
              </div>
              <div className="text-left">
                <div className="text-[9px] text-[#DCE4D3] font-bold uppercase tracking-wider leading-none">Download di</div>
                <div className="text-xs sm:text-sm font-black leading-tight text-white mt-0.5">Google Play Store</div>
              </div>
            </a>

            {/* QR Scanner Card */}
            <button
              onClick={onOpenDownloadModal}
              className="w-full py-3 px-4 bg-white hover:bg-[#FAF9F6] text-[#141A16] border border-[#DCE8D4] rounded-2xl flex items-center justify-center gap-3 shadow-2xs transition-all active:scale-98 cursor-pointer"
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
