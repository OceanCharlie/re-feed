'use client';

import React from 'react';
import Image from 'next/image';
import { ShoppingBag, Zap, ArrowRight, CheckCircle2, Leaf, Clock, Sparkles } from 'lucide-react';

interface DualEcosystemProps {
  onOpenDownloadModal: () => void;
  onOpenPartnerModal: () => void;
}

export default function DualEcosystem({ onOpenDownloadModal, onOpenPartnerModal }: DualEcosystemProps) {
  return (
    <section id="solutions" className="py-24 bg-[#FCFAF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EBF5E4] text-[#105e3a] text-xs font-bold uppercase tracking-wider border border-[#C8D9C2]">
            Dua Solusi Utama
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141A16] tracking-tight">
            Cara Nyata Selamatkan Pangan
          </h2>
          <p className="text-base text-[#57655B]">
            Mencegah makanan layak konsumsi terbuang sia-sia di hulu, dan mengonversi sisa organik dapur jadi energi bersih di hilir.
          </p>
        </div>

        {/* 2 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Surplus Food Marketplace */}
          <div className="app-card rounded-[32px] p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              {/* Asset Header */}
              <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-[#E8EDE5]">
                <Image
                  src="/images/food-hero.webp"
                  alt="Surplus Food Hero Marketplace"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FE6708] text-white text-xs font-black shadow-xs">
                  Diskon s.d 70%
                </div>
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/65 backdrop-blur-md text-white flex items-center justify-between text-xs">
                  <span className="font-bold">🥐 Paul Bakery Artisan</span>
                  <span className="text-[#8fc22a] font-bold">Hemat Rp 60.000 / Box</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#EBF5E4] text-[#105e3a] text-xs font-bold mb-3 border border-[#C8D9C2]">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Pencegahan di Hulu</span>
              </div>

              <h3 className="text-2xl font-black text-[#141A16] mb-2">
                Surplus Food Marketplace
              </h3>

              <p className="text-sm text-[#57655B] leading-relaxed mb-6">
                Beli paket makanan lezat berkualitas prima dari resto, bakery, dan supermarket favoritmu sebelum jam operasional tutup dengan harga hemat.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#E8EDE5]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#141A16]">
                  <CheckCircle2 className="w-4 h-4 text-[#105e3a]" />
                  <span>100% Makanan Segar & Higienis</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#141A16]">
                  <CheckCircle2 className="w-4 h-4 text-[#105e3a]" />
                  <span>Jadwal Pengambilan (Pickup Window) Jelas</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#141A16]">
                  <CheckCircle2 className="w-4 h-4 text-[#105e3a]" />
                  <span>Sistem Booking Otomatis & Jaminan Porsi</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E8EDE5]">
              <button
                onClick={onOpenDownloadModal}
                className="btn-app-primary w-full py-3.5 rounded-2xl flex items-center justify-center gap-2 text-sm cursor-pointer shadow-sm"
              >
                <span>Cari Makanan di Sekitarmu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Waste-to-Energy Hub */}
          <div className="app-card rounded-[32px] p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              {/* Asset Header */}
              <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-[#E8EDE5]">
                <Image
                  src="/images/energy.webp"
                  alt="Waste to Energy Hub"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#105e3a] text-white text-xs font-black shadow-xs">
                  Biogas & Kompos
                </div>
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/65 backdrop-blur-md text-white flex items-center justify-between text-xs">
                  <span className="font-bold">⚡ Drop Point Kebayoran</span>
                  <span className="text-[#8fc22a] font-bold">+50 Poin / kg</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#EBF5E4] text-[#105e3a] text-xs font-bold mb-3 border border-[#C8D9C2]">
                <Zap className="w-3.5 h-3.5 text-[#FE6708]" />
                <span>Pengolahan di Hilir</span>
              </div>

              <h3 className="text-2xl font-black text-[#141A16] mb-2">
                Waste-to-Energy Hub
              </h3>

              <p className="text-sm text-[#57655B] leading-relaxed mb-6">
                Untuk sisa bahan organik yang tak layak konsumsi (kulit buah, sayur layu, ampas kopi), salurkan ke Waste Hub untuk dikonversi menjadi energi biogas dan pupuk.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#E8EDE5]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#141A16]">
                  <CheckCircle2 className="w-4 h-4 text-[#105e3a]" />
                  <span>Cegah Pelepasan Gas Metana di TPA</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#141A16]">
                  <CheckCircle2 className="w-4 h-4 text-[#105e3a]" />
                  <span>Dapatkan Poin Reward Setiap Setor</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#141A16]">
                  <CheckCircle2 className="w-4 h-4 text-[#105e3a]" />
                  <span>Jaringan Drop Point Tersebar di Kota</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E8EDE5]">
              <button
                onClick={onOpenDownloadModal}
                className="btn-app-secondary w-full py-3.5 rounded-2xl flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <span>Cari Drop Point Terdekat</span>
                <ArrowRight className="w-4 h-4 text-[#105e3a]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
