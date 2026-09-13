'use client';

import React from 'react';
import { Store, TrendingUp, Users, Leaf, ArrowRight } from 'lucide-react';

interface PartnerLogosStripProps {
  onOpenPartnerModal?: () => void;
}

export default function PartnerLogosStrip({ onOpenPartnerModal }: PartnerLogosStripProps) {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Monetisasi Surplus',
      desc: 'Ubah makanan lezat berlebih sebelum jam tutup menjadi sumber pendapatan ekstra setiap hari.',
    },
    {
      icon: Users,
      title: 'Jangkau Pelanggan Baru',
      desc: 'Perkenalkan menu dan usaha kulinermu ke komunitas konsumen sadar lingkungan.',
    },
    {
      icon: Leaf,
      title: 'Nol Limbah Makanan',
      desc: 'Kurangi jejak karbon dan sisa makanan secara terukur, bantu bumi lebih hijau.',
    },
  ];

  return (
    <section id="merchant" className="py-16 sm:py-24 border-y border-[#E8EDE5]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-12">
          <div className="badge-glow px-3.5 py-1.5 rounded-full text-[#105e3a] text-xs font-bold">
            <span className="badge-glow-dot" />
            <Store className="w-3.5 h-3.5" />
            <span>Peluang Kemitraan Kuliner</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141A16] tracking-tight">
            Jadilah Mitra Pelopor ReFeed
          </h3>

          <p className="text-xs sm:text-sm md:text-base text-[#57655B] leading-relaxed max-w-2xl mx-auto">
            Kami sedang membuka kesempatan bagi restoran, bakery, kafe, dan supermarket untuk menjadi mitra pertama dalam gerakan penyelamatan makanan di Indonesia.
          </p>
        </div>

        {/* 3 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 max-w-5xl mx-auto">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="app-card p-5 sm:p-6 rounded-2xl"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EBF5E4] text-[#105e3a] flex items-center justify-center mb-3.5 font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#141A16] mb-1.5">{b.title}</h4>
                <p className="text-xs sm:text-sm text-[#57655B] leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Call to action bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <button
            onClick={onOpenPartnerModal}
            className="btn-app-primary px-7 py-3.5 text-sm sm:text-base font-bold rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-2.5 cursor-pointer active:scale-98"
          >
            <Store className="w-4 h-4" />
            <span>Daftar Sebagai Mitra Pelopor</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Categories tags */}
        <div className="mt-8 pt-6 border-t border-[#E8EDE5]/60 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-[#57655B]">
          <span className="font-semibold text-[#141A16]">Terbuka untuk:</span>
          <span className="glass-panel px-3 py-1 rounded-full font-medium">Restoran & Rumah Makan</span>
          <span className="glass-panel px-3 py-1 rounded-full font-medium">Bakery & Pastry</span>
          <span className="glass-panel px-3 py-1 rounded-full font-medium">Kafe & Kedai Kopi</span>
          <span className="glass-panel px-3 py-1 rounded-full font-medium">Supermarket & Minimarket</span>
          <span className="glass-panel px-3 py-1 rounded-full font-medium">Hotel & Katering</span>
        </div>

      </div>
    </section>
  );
}
