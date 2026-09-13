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
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFEFC] via-[#FDFEFC]/80 to-transparent lg:via-[#FDFEFC]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFEFC]/40 via-transparent to-[#FDFEFC]" />
        {/* Faint technical grid for a futuristic layer */}
        <div className="absolute inset-0 bg-grid-tech opacity-70" />
        {/* Ambient glow orbs — the "4-point" energy reads through the hero too */}
        <div className="glow-orb -left-24 -top-24 w-72 h-72" />
        <div className="glow-orb -right-16 top-1/3 w-56 h-56 [animation-delay:1.5s]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Main Typography & CTAs */}
          <div className="lg:col-span-6 text-left space-y-5 sm:space-y-6">
            
            {/* Bold Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#141A16] leading-[1.12]">
              Selamatkan <br />
              Makanan Lezat, <br />
              <span className="text-gradient-brand">Hemat hingga 70%</span>
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
                className="h-14 px-6 bg-black hover:bg-neutral-900 text-white rounded-2xl flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer group"
              >
                <GooglePlayIcon size={24} className="shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] text-neutral-300 font-bold uppercase tracking-wider leading-none">Download di</div>
                  <div className="text-sm sm:text-base font-black leading-tight text-white mt-0.5">Google Play Store</div>
                </div>
              </a>

              <button
                onClick={onOpenDownloadModal}
                className="btn-app-secondary h-14 px-6 rounded-2xl flex items-center justify-center gap-2.5 active:scale-98 cursor-pointer font-bold text-xs sm:text-sm"
              >
                <QrCode className="w-5 h-5 text-[#105e3a] shrink-0" />
                <span>Pindai QR / Unduh APK</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Smartphone Mockup + Hero Mascot */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-6 lg:pt-0">

            {/* Ambient glow halo behind the phone for a futuristic energy feel */}
            <div className="glow-orb w-64 h-64 sm:w-80 sm:h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />

            {/* Doodle Speech Bubble (Top Right of Mascot) */}
            <div className="absolute -top-2 right-2 sm:right-6 z-30 max-w-[170px] text-[11px] font-bold text-[#141A16] floating-badge px-3 py-2 rounded-2xl transform rotate-2 hidden xs:block">
              <span>Lebih hemat, lebih berdampak bersama ReFeed!</span>
              <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white border-b border-r border-[#C8D9C2] transform rotate-45" />
            </div>

            {/* Main Center Phone Mockup */}
            <div className="relative z-20 w-[270px] xs:w-[290px] sm:w-[310px] bg-black rounded-[46px] p-3 app-phone-shadow border-[3px] border-[#2D3E33]">
              
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
