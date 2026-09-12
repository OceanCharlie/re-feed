'use client';

import React from 'react';

export default function PartnerLogosStrip() {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF9F6] border-y border-[#E8EDE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="space-y-1.5 max-w-xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-black text-[#141A16] tracking-tight">
            Brand & Mitra yang Sudah Bergabung
          </h3>
          <p className="text-xs sm:text-sm text-[#57655B]">
            Bersama mereka, kita wujudkan perubahan nyata.
          </p>
        </div>

        {/* Logos Flex Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 text-slate-800 opacity-90">
          
          {/* 1. Tous les Jours */}
          <div className="flex flex-col items-center justify-center font-serif text-lg sm:text-2xl font-bold tracking-wider hover:opacity-100 transition-opacity">
            <span className="text-[#1A3322]">TOUS <span className="font-normal italic text-sm sm:text-lg">les</span> JOURS</span>
          </div>

          {/* 2. Dapur Solo */}
          <div className="flex items-center gap-1 font-serif text-lg sm:text-2xl font-black text-[#7A1D1D] tracking-tight hover:opacity-100 transition-opacity">
            <span>Dapur Solo</span>
          </div>

          {/* 3. FamilyMart */}
          <div className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
            <div className="flex flex-col gap-0.5">
              <div className="w-5 sm:w-6 h-1 bg-[#008CD6] rounded-xs" />
              <div className="w-5 sm:w-6 h-1 bg-[#00A651] rounded-xs" />
            </div>
            <span className="font-sans text-base sm:text-xl font-black tracking-tight text-[#008CD6]">
              Family<span className="text-[#00A651]">Mart</span>
            </span>
          </div>

          {/* 4. HokBen */}
          <div className="font-sans text-lg sm:text-2xl font-black text-[#D9251D] tracking-wide hover:opacity-100 transition-opacity">
            HokBen
          </div>

          {/* 5. Kopi Kenangan */}
          <div className="flex items-center gap-1 font-mono text-base sm:text-xl font-bold text-[#42210B] tracking-tight hover:opacity-100 transition-opacity">
            <span>kopi kenangan</span>
            <span className="text-xs text-rose-400">💕</span>
          </div>

          {/* 6. BreadTalk */}
          <div className="font-sans text-lg sm:text-2xl font-black text-[#8B4513] tracking-tighter hover:opacity-100 transition-opacity">
            Bread<span className="font-light">Talk</span>
          </div>

          {/* 7. Dan banyak lagi */}
          <div className="text-xs sm:text-sm font-semibold text-[#57655B] italic">
            dan banyak lagi...
          </div>

        </div>

      </div>
    </section>
  );
}
