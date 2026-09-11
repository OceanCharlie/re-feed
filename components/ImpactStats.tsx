'use client';

import React from 'react';
import { Utensils, CloudSun, DollarSign, Zap, Trees, Droplets } from 'lucide-react';

export default function ImpactStats() {
  const stats = [
    {
      icon: Utensils,
      value: '150.000+',
      label: 'Makanan Diselamatkan',
      desc: 'Porsi lezat dari gerai mitra',
    },
    {
      icon: CloudSun,
      value: '320+ Ton',
      label: 'Emisi CO₂e Dicegah',
      desc: 'Mencegah gas metana di TPA',
    },
    {
      icon: DollarSign,
      value: 'Rp 4,8 M+',
      label: 'Uang Hemat Pengguna',
      desc: 'Total potongan harga diskon',
    },
    {
      icon: Zap,
      value: '45.000 kg',
      label: 'Limbah Jadi Energi',
      desc: 'Diolah di Waste Hub kota',
    },
  ];

  return (
    <section id="impact" className="py-24 bg-[#FFFFFF] border-y border-[#E8EDE5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EBF5E4] text-[#105e3a] text-xs font-bold uppercase tracking-wider border border-[#C8D9C2]">
            Dampak Lingkungan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141A16] tracking-tight">
            Perubahan Nyata dalam Angka
          </h2>
          <p className="text-base text-[#57655B]">
            Setiap porsi makanan yang diselamatkan berkontribusi langsung menjaga kelestarian bumi kita.
          </p>
        </div>

        {/* 4 Clean Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="app-card rounded-[32px] p-6 text-left"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#EBF5E4] text-[#105e3a] flex items-center justify-center font-bold mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-black text-[#141A16] tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-[#105e3a] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#57655B]">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Equivalency Bar */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-[32px] bg-[#FCFAF7] border border-[#E8EDE5] flex flex-col md:flex-row items-center justify-around gap-6 text-left">
          <div className="flex items-center gap-3">
            <Trees className="w-6 h-6 text-[#105e3a] shrink-0" />
            <div>
              <div className="text-sm font-bold text-[#141A16]">16.000+ Pohon</div>
              <div className="text-xs text-[#57655B]">Setara serapan karbon hutan 1 thn</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-[#E8EDE5]" />

          <div className="flex items-center gap-3">
            <Droplets className="w-6 h-6 text-[#0284C7] shrink-0" />
            <div>
              <div className="text-sm font-bold text-[#141A16]">85 Juta Liter Air</div>
              <div className="text-xs text-[#57655B]">Jejak air virtual terlindungi</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-[#E8EDE5]" />

          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-[#fe6708] shrink-0" />
            <div>
              <div className="text-sm font-bold text-[#141A16]">22.500 kWh Listrik</div>
              <div className="text-xs text-[#57655B]">Energi biogas dari limbah dapur</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
