'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Store, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';

interface PartnerCalculatorProps {
  onOpenPartnerModal: () => void;
}

export default function PartnerCalculator({ onOpenPartnerModal }: PartnerCalculatorProps) {
  const [portionsPerDay, setPortionsPerDay] = useState<number>(15);

  const monthlyRevenue = portionsPerDay * 20000 * 30;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="merchant" className="py-24 bg-[#FCFAF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EBF5E4] text-[#105e3a] text-xs font-bold uppercase tracking-wider border border-[#C8D9C2]">
            Kemitraan Usaha Kuliner
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141A16] tracking-tight">
            Ubah Sisa Makanan Jadi Omzet
          </h2>
          <p className="text-base text-[#57655B]">
            Solusi praktis bagi bakery, kafe, restoran, dan supermarket untuk menekan food waste dan meraih penghasilan tambahan.
          </p>
        </div>

        {/* Clean Bento Card */}
        <div className="max-w-5xl mx-auto app-card rounded-[36px] p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Image & Info */}
          <div className="md:col-span-6 space-y-6 text-left">
            <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-slate-100 border border-[#E8EDE5]">
              <Image
                src="/images/mitra.webp"
                alt="Mitra Merchant ReFeed"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-2.5">
              <h3 className="text-xl font-bold text-[#141A17]">
                Keuntungan Bergabung Jadi Mitra
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#57655B]">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#105e3a] shrink-0" />
                  <span>Tanpa biaya pendaftaran atau biaya sewa bulanan</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#105e3a] shrink-0" />
                  <span>Jangkau ribuan pelanggan baru di sekitar lokasi toko</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#105e3a] shrink-0" />
                  <span>Sertifikat pelaporan ESG & jejak karbon otomatis</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Clean Mini Simulator */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#FCFAF7] border border-[#E8EDE5] space-y-6 text-left">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold text-[#141A17]">
                  Estimasi Surplus / Hari:
                </label>
                <span className="px-3 py-1 bg-white border border-[#E8EDE5] rounded-xl text-xs font-bold text-[#105e3a]">
                  {portionsPerDay} Porsi
                </span>
              </div>

              <input
                type="range"
                min="5"
                max="50"
                step="5"
                value={portionsPerDay}
                onChange={(e) => setPortionsPerDay(Number(e.target.value))}
                className="w-full h-2 bg-[#E8EDE5] rounded-lg appearance-none cursor-pointer accent-[#105e3a]"
              />

              <div className="flex justify-between text-[11px] text-[#57655B]">
                <span>5 Porsi (Kafe kecil)</span>
                <span>25 Porsi</span>
                <span>50+ Porsi (Resto/Bakery)</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8EDE5] text-center">
              <span className="text-xs text-[#57655B]">Estimasi Pemasukan Ekstra Bersih</span>
              <div className="text-2xl sm:text-3xl font-black text-[#105e3a] mt-1">
                {formatRupiah(monthlyRevenue)}
                <span className="text-xs font-normal text-[#57655B]"> /bulan</span>
              </div>
            </div>

            <button
              onClick={onOpenPartnerModal}
              className="btn-app-primary w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer shadow-sm"
            >
              <span>Daftarkan Usaha Kuliner Anda</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
