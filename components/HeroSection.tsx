'use client';

import React from 'react';
import Image from 'next/image';
import { QrCode } from 'lucide-react';
import { GooglePlayIcon } from './BrandLogo';

interface HeroSectionProps {
  onOpenDownloadModal: () => void;
  onOpenPartnerModal: () => void;
}

export default function HeroSection({ onOpenDownloadModal }: HeroSectionProps) {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-[#FAF9F6]">
      {/* Background Eco-City Panorama Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/bg.png"
          alt="ReFeed Eco Green Landscape Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        {/* Soft Gradients to ensure text contrast on left while keeping scenery vivid on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent lg:via-[#FAF9F6]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/40 via-transparent to-[#FAF9F6]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Main Typography & CTAs */}
          <div className="lg:col-span-6 text-left space-y-5 sm:space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5E4] text-[#105e3a] text-xs font-bold border border-[#C8D9C2] shadow-2xs">
              <span>🍃</span>
              <span>Inisiatif Penyelamat Makanan & Nol Limbah</span>
            </div>

            {/* Bold Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#141A16] leading-[1.12]">
              Selamatkan <br />
              Makanan Lezat, <br />
              <span className="text-[#105e3a]">Hemat hingga 70%</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-xs sm:text-sm md:text-base text-[#57655B] leading-relaxed max-w-xl">
              Beli paket makanan berkualitas dari resto, bakery, dan supermarket favoritmu sebelum jam tutup dengan harga hemat, serta salurkan sisa organik dapur jadi energi biogas bersih.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#105e3a] hover:bg-[#0c5536] text-white rounded-2xl flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-xs">
                  <GooglePlayIcon size={20} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-[#DCE4D3] font-bold uppercase tracking-wider leading-none">Download di</div>
                  <div className="text-sm sm:text-base font-black leading-tight text-white mt-0.5">Google Play Store</div>
                </div>
              </a>

              <button
                onClick={onOpenDownloadModal}
                className="px-5 py-3.5 bg-white hover:bg-[#F6F5F0] text-[#141A16] border border-[#DCE4D3] rounded-2xl flex items-center justify-center gap-2.5 shadow-2xs transition-all active:scale-98 cursor-pointer font-bold text-xs sm:text-sm"
              >
                <QrCode className="w-4 h-4 text-[#105e3a]" />
                <span>Pindai QR / Unduh APK</span>
              </button>
            </div>

            {/* Bottom Status Tags */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#57655B] pt-2">
              <span className="inline-flex items-center gap-1.5 bg-[#EBF5E4] text-[#105e3a] px-3 py-1 rounded-full font-bold border border-[#C8D9C2]">
                <span>🌱</span>
                <span>Android (v1.0 Ready)</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1.5 bg-white text-[#57655B] px-3 py-1 rounded-full font-medium border border-[#E8EDE5]">
                <span>🍃</span>
                <span>What we recover today, feeds tomorrow!</span>
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Smartphone Mockup + Hero Mascot */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-6 lg:pt-0">
            

            {/* Doodle Speech Bubble (Top Right of Mascot) */}
            <div className="absolute -top-2 right-2 sm:right-6 z-30 max-w-[170px] text-[11px] font-bold text-[#141A16] bg-white px-3 py-2 rounded-2xl border border-[#C8D9C2] shadow-md transform rotate-2 hidden xs:block">
              <span>Lebih hemat, lebih berdampak bersama ReFeed!</span>
              <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white border-b border-r border-[#C8D9C2] transform rotate-45" />
            </div>

            {/* Main Center Phone Mockup */}
            <div className="relative z-20 w-[270px] xs:w-[290px] sm:w-[310px] bg-black rounded-[46px] p-3 shadow-2xl border-[3px] border-[#2D3E33]">
              
              {/* Dynamic Island / Speaker */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8fc22a]" />
              </div>

              {/* Screen Image */}
              <div className="relative w-full h-[560px] xs:h-[590px] bg-white rounded-[38px] overflow-hidden">
                <Image
                  src="/images/1.png"
                  alt="ReFeed Mobile App Screen"
                  fill
                  priority
                  sizes="(max-width: 640px) 290px, 310px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Floating ReFeed Hero Mascot Character (Right Side of Phone) */}
            <div className="absolute -right-6 sm:-right-14 bottom-4 sm:bottom-10 z-30 w-40 xs:w-48 sm:w-56 h-48 xs:h-56 sm:h-64 pointer-events-none drop-shadow-2xl">
              <Image
                src="/images/energy.webp"
                alt="ReFeed Energy Mascot Hero"
                fill
                priority
                sizes="(max-width: 640px) 190px, 240px"
                className="object-contain"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
