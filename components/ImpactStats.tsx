'use client';

import React from 'react';
import { Utensils, Leaf, Users, Globe } from 'lucide-react';

export default function ImpactStats() {
  const stats = [
    {
      icon: Utensils,
      value: 'Ribuan+',
      label: 'Porsi Makanan Terselamatkan',
      iconBg: 'bg-gradient-to-br from-[#EBF5E4] to-[#DCEAD1] text-[#105e3a]',
    },
    {
      icon: Leaf,
      value: 'Ton+',
      label: 'Emisi CO₂ Berkurang',
      iconBg: 'bg-gradient-to-br from-[#EBF5E4] to-[#DCEAD1] text-[#105e3a]',
    },
    {
      icon: Users,
      value: 'Ratusan+',
      label: 'Mitra Resto & Retail',
      iconBg: 'bg-gradient-to-br from-[#EBF5E4] to-[#DCEAD1] text-[#105e3a]',
    },
    {
      icon: Globe,
      value: 'Satu Tujuan',
      label: 'Bumi yang Lebih Baik',
      iconBg: 'bg-gradient-to-br from-[#EBF5E4] to-[#DCEAD1] text-[#105e3a]',
    },
  ];

  return (
    <section id="impact" className="py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean 4-Column Horizontal Floating Strip Card */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-[#E8EDE5] p-5 sm:p-7 shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-[#E8EDE5]">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className={`flex items-center gap-3.5 sm:gap-4 ${idx > 0 ? 'pt-4 sm:pt-0' : ''} ${idx > 0 ? 'lg:pl-6' : ''}`}
              >
                <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-2xl ${stat.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-base sm:text-xl font-black text-[#141A16] tracking-tight leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#57655B] font-medium leading-tight mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
