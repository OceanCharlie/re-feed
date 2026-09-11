'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ShoppingBag, 
  Store, 
  RefreshCw, 
  ShoppingCart, 
  UserCheck, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

export default function AppSimulator() {
  const [activeScreen, setActiveScreen] = useState<number>(1);

  const screens = [
    {
      id: 1,
      image: '/images/1.png',
      tag: 'Radar Surplus',
      title: 'Temukan Makanan di Radius 1-5 km',
      summary: 'Pantau diskon 50-70% makanan lezat dari gerai terdekat sebelum toko tutup.',
      icon: ShoppingBag,
    },
    {
      id: 2,
      image: '/images/2.png',
      tag: 'Surprise Bag',
      title: 'Detail Porsi & Info Jam Pickup',
      summary: 'Lihat estimasi porsi makanan, harga hemat, dan waktu penjemputan yang transparan.',
      icon: Store,
    },
    {
      id: 3,
      image: '/images/3.png',
      tag: 'Waste Hub',
      title: 'Peta Drop Point Sampah Organik',
      summary: 'Salurkan sisa organik dapur ke Waste Hub dan dapatkan +50 Poin reward per kg.',
      icon: RefreshCw,
    },
    {
      id: 4,
      image: '/images/4.png',
      tag: 'Pembayaran',
      title: 'Checkout Cepat via QRIS & E-Wallet',
      summary: 'Pembayaran instan dengan kode tiket penjemputan digital otomatis.',
      icon: ShoppingCart,
    },
    {
      id: 5,
      image: '/images/5.png',
      tag: 'Jejak Karbon',
      title: 'Sertifikat & Level Food Hero',
      summary: 'Pantau akumulasi kg makanan diselamatkan dan pohon yang kamu lindungi.',
      icon: UserCheck,
    },
  ];

  const current = screens.find((s) => s.id === activeScreen) || screens[0];

  return (
    <section id="app" className="py-24 bg-[#FCFAF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EBF5E4] text-[#105e3a] text-xs font-bold uppercase tracking-wider border border-[#C8D9C2]">
            Antarmuka Aplikasi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141A16] tracking-tight">
            Desain Intuitif & Cepat
          </h2>
          <p className="text-base text-[#57655B]">
            Jelajahi 5 fitur utama di aplikasi mobile ReFeed yang dirancang ramah pengguna.
          </p>
        </div>

        {/* Horizontal Navigation Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto no-scrollbar pb-2">
          {screens.map((item) => {
            const Icon = item.icon;
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveScreen(item.id)}
                className={`px-4 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#105e3a] text-white shadow-sm'
                    : 'bg-[#FFFFFF] text-[#57655B] hover:text-[#141A16] border border-[#E8EDE5]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Clean Showcase Frame */}
        <div className="max-w-4xl mx-auto app-card rounded-[36px] p-6 sm:p-12 flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Info Column */}
          <div className="md:w-1/2 space-y-4 text-left">
            <span className="text-xs font-bold text-[#105e3a] uppercase tracking-wider">
              Layar {current.id} dari 5
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#141A16] leading-tight">
              {current.title}
            </h3>
            <p className="text-sm sm:text-base text-[#57655B] leading-relaxed">
              {current.summary}
            </p>

            <div className="pt-4 flex items-center gap-2">
              <button
                onClick={() => setActiveScreen((prev) => (prev <= 1 ? screens.length : prev - 1))}
                className="w-10 h-10 rounded-full bg-[#FCFAF7] border border-[#E8EDE5] flex items-center justify-center text-[#141A16] hover:bg-[#EBF5E4] transition-colors cursor-pointer"
                aria-label="Previous Screen"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveScreen((prev) => (prev >= screens.length ? 1 : prev + 1))}
                className="w-10 h-10 rounded-full bg-[#FCFAF7] border border-[#E8EDE5] flex items-center justify-center text-[#141A16] hover:bg-[#EBF5E4] transition-colors cursor-pointer"
                aria-label="Next Screen"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-[260px] sm:w-[290px] rounded-[44px] p-2.5 bg-[#111c15] app-phone-shadow border-[3px] border-[#2D3E33]">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-end px-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8fc22a]" />
              </div>
              <div className="relative w-full h-[520px] sm:h-[570px] bg-white rounded-[36px] overflow-hidden">
                <Image
                  key={current.id}
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
