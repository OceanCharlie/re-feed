'use client';

import React, { useState } from 'react';
import { Sparkles, DollarSign, Leaf, Trees, ArrowRight, Check, Zap, ShoppingBag } from 'lucide-react';

interface PersonalSavingsCalculatorProps {
  onOpenDownloadModal: () => void;
}

export default function PersonalSavingsCalculator({ onOpenDownloadModal }: PersonalSavingsCalculatorProps) {
  const [mealsPerWeek, setMealsPerWeek] = useState<number>(4);
  const [wasteKgPerMonth, setWasteKgPerMonth] = useState<number>(6);

  // Average saving per meal: Rp 45.000
  const monthlySavings = mealsPerWeek * 4 * 45000;
  const yearlySavings = monthlySavings * 12;
  
  // Average CO2 prevented per meal: 2.2 kg + Waste hub: 1.5 kg per kg
  const monthlyCo2 = Math.round((mealsPerWeek * 4 * 2.2) + (wasteKgPerMonth * 1.5));
  // Yearly equivalent trees
  const yearlyTrees = Math.max(1, Math.round((monthlyCo2 * 12) / 20));
  // Clean biogas points
  const ecoPoints = (mealsPerWeek * 4 * 20) + (wasteKgPerMonth * 50);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0c1610] text-white rounded-[28px] sm:rounded-[40px] p-5 xs:p-6 sm:p-12 shadow-[0_30px_70px_-20px_rgba(16,94,58,0.5)] border border-[#1e8939]/30 relative overflow-hidden">
          {/* Ambient Radial Glow */}
          <div className="glow-orb -top-20 -right-20 w-80 h-80 opacity-70" />
          <div className="glow-orb -bottom-24 -left-16 w-64 h-64 opacity-40 [animation-delay:3s]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center relative z-10">
            
            {/* Left Column: Interactive Dual Sliders */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#8fc22a] text-[11px] sm:text-xs font-black uppercase tracking-wider border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-[#8fc22a]" />
                Kalkulator Dampak & Penghematan
              </div>

              <h3 className="text-xl xs:text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                Hitung Manfaat Nyata untuk Kantong & Bumi
              </h3>

              {/* Slider 1: Rescued Meals */}
              <div className="space-y-2 pt-1 sm:pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-[#DCE4D3] flex items-center gap-1.5">
                    <ShoppingBag className="w-4 h-4 text-[#8fc22a]" />
                    Porsi Surplus Kamu Beli:
                  </label>
                  <span className="px-2.5 sm:px-3 py-1 bg-[#105e3a] text-white rounded-xl font-black text-xs border border-[#8fc22a]/40 shadow-xs">
                    {mealsPerWeek} Porsi / Mgg
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="14"
                  step="1"
                  value={mealsPerWeek}
                  onChange={(e) => setMealsPerWeek(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#8fc22a]"
                />

                <div className="flex justify-between text-[10px] text-[#DCE4D3]/60 font-medium">
                  <span>1 Porsi (Sesekali)</span>
                  <span>7 Porsi (Harian)</span>
                  <span>14 Porsi (Keluarga)</span>
                </div>
              </div>

              {/* Slider 2: Organic Waste */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-[#DCE4D3] flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-[#fe6708]" />
                    Sampah Organik Disetor:
                  </label>
                  <span className="px-2.5 sm:px-3 py-1 bg-[#0c5536] text-white rounded-xl font-black text-xs border border-[#fe6708]/40 shadow-xs">
                    {wasteKgPerMonth} kg / Bln
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="20"
                  step="2"
                  value={wasteKgPerMonth}
                  onChange={(e) => setWasteKgPerMonth(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#fe6708]"
                />

                <div className="flex justify-between text-[10px] text-[#DCE4D3]/60 font-medium">
                  <span>0 kg</span>
                  <span>10 kg (Rumah Tangga)</span>
                  <span>20 kg (Aktif)</span>
                </div>
              </div>

              <p className="text-[10px] sm:text-[11px] text-[#DCE4D3]/70 leading-relaxed pt-1">
                *Estimasi rata-rata penghematan 65% per porsi dari resto mitra ReFeed & konversi metana TPA.
              </p>
            </div>

            {/* Right Column: Live Computed Result Cards */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl sm:rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/15 space-y-3.5 sm:space-y-4 text-center">
              <div>
                <span className="text-[10px] uppercase font-black tracking-wider text-[#8fc22a]">
                  Total Uang Hemat / Bulan
                </span>
                <div className="text-2xl xs:text-3xl sm:text-4xl font-black text-white tracking-tight mt-0.5">
                  {formatRupiah(monthlySavings)}
                </div>
                <div className="text-[11px] text-[#bef264] font-bold mt-0.5">
                  Setara {formatRupiah(yearlySavings)} per tahun!
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-3 border-t border-white/10 text-left">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-black/40 border border-white/10">
                  <div className="flex items-center gap-1 text-[10px] text-[#8fc22a] font-bold mb-0.5">
                    <Leaf className="w-3 h-3" />
                    <span>CO₂e Dicegah</span>
                  </div>
                  <div className="text-xs sm:text-sm font-black text-white">
                    {monthlyCo2} kg /bln
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-black/40 border border-white/10">
                  <div className="flex items-center gap-1 text-[10px] text-[#bef264] font-bold mb-0.5">
                    <Trees className="w-3 h-3" />
                    <span>Setara Pohon</span>
                  </div>
                  <div className="text-xs sm:text-sm font-black text-white">
                    {yearlyTrees} Pohon /thn
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl sm:rounded-2xl bg-[#105e3a]/60 border border-[#8fc22a]/30 text-left flex items-center justify-between">
                <div className="text-[11px] font-bold text-[#E8F4DA]">
                  ⚡ Reward Eco-Points
                </div>
                <div className="text-xs font-black text-[#8fc22a]">
                  +{ecoPoints} Poin / bln
                </div>
              </div>

              <button
                onClick={onOpenDownloadModal}
                className="w-full py-3.5 px-4 bg-gradient-btn hover:opacity-95 text-white font-black text-xs sm:text-sm rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Mulai Berhemat di Google Play</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
