'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Recycle, Trees, Play } from 'lucide-react';

interface ScenicStoryBannerProps {
  onOpenPartnerModal?: () => void;
}

export default function ScenicStoryBanner({ onOpenPartnerModal }: ScenicStoryBannerProps) {
  return (
    <section className="py-8 sm:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Scenic Panoramic Card */}
        <div className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden min-h-[420px] sm:min-h-[480px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 text-white shadow-[0_24px_60px_-20px_rgba(16,94,58,0.4)] border border-white/10">
          
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/nature_story_banner.png"
              alt="ReFeed Nature Impact Landscape"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center brightness-[0.88]"
            />
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </div>

          {/* Top Section: Badge & Handwritten Annotation */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[#bef264] text-xs font-bold border border-white/25 shadow-xs">
              <span>🍃</span>
              <span>Dampak Nyata untuk Bumi</span>
            </div>

            {/* Handwritten Doodle Note (Top Right) */}
            <div className="text-right hidden sm:block">
              <span className="text-xs sm:text-sm font-bold text-white/95 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-white/20 shadow-xs">
                Hari ini untuk esok yang lebih baik 🍃
              </span>
            </div>
          </div>

          {/* Middle Section: Big Bold Headline & Subtitle */}
          <div className="relative z-10 max-w-2xl text-left space-y-3 sm:space-y-4 my-6 sm:my-8">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-md">
              Lebih dari Sekadar Makanan
            </h2>
            <p className="text-xs sm:text-sm sm:text-base text-white/90 leading-relaxed max-w-xl font-normal drop-shadow-sm">
              Setiap paket yang kamu selamatkan, berarti lebih sedikit limbah, lebih rendah emisi, dan langkah lebih dekat menuju masa depan yang berkelanjutan.
            </p>
          </div>

          {/* Bottom Section: 3 Metric Pills + Story Button */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 pt-4 border-t border-white/20">
            
            {/* 3 Metric Pills */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Stat 1 */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-xs">
                <div className="w-6 h-6 rounded-full bg-[#8fc22a] flex items-center justify-center text-black shrink-0">
                  <Leaf className="w-3.5 h-3.5 text-[#111c15]" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black text-white">2.8 Ton+</div>
                  <div className="text-[10px] text-white/80">Emisi CO₂ Berkurang</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-xs">
                <div className="w-6 h-6 rounded-full bg-[#38bdf8] flex items-center justify-center text-black shrink-0">
                  <Recycle className="w-3.5 h-3.5 text-[#111c15]" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black text-white">12.000+</div>
                  <div className="text-[10px] text-white/80">Porsi Terselamatkan</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-xs">
                <div className="w-6 h-6 rounded-full bg-[#bef264] flex items-center justify-center text-black shrink-0">
                  <Trees className="w-3.5 h-3.5 text-[#111c15]" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black text-white">Setara 480+</div>
                  <div className="text-[10px] text-white/80">Pohon Ditanam</div>
                </div>
              </div>
            </div>

            {/* Action Link to Behind ReFeed */}
            <Link
              href="/behind-refeed"
              className="px-5 py-3 rounded-2xl bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/30 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95 shadow-md shrink-0 cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-[#105e3a] flex items-center justify-center text-white">
                <Play className="w-3 h-3 fill-white" />
              </div>
              <span>Lihat Cerita Kami</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
