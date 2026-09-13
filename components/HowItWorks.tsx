'use client';

import React from 'react';
import Image from 'next/image';
import { Search, CreditCard, ShoppingBag, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenDownloadModal: () => void;
  onOpenPartnerModal: () => void;
}

export default function HowItWorks({ onOpenDownloadModal, onOpenPartnerModal }: HowItWorksProps) {
  const steps = [
    {
      step: '01',
      icon: Search,
      title: 'Pilih Makanan di Radar',
      desc: 'Buka ReFeed dan temukan surplus lezat dari bakery, resto, atau supermarket terdekat.',
      image: '/images/1.png',
    },
    {
      step: '02',
      icon: CreditCard,
      title: 'Pesan & Bayar Hemat 70%',
      desc: 'Lakukan pembayaran mudah dan aman dengan QRIS atau e-wallet untuk mengamankan pesanan.',
      image: '/images/2.png',
    },
    {
      step: '03',
      icon: ShoppingBag,
      title: 'Ambil di Toko & Nikmati',
      desc: 'Datang ke gerai saat jam pickup, tunjukkan kode pesanan di aplikasi, dan selamat menikmati.',
      image: '/images/4.png',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 border-y border-[#E8EDE5]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
          <span className="badge-glow px-3.5 py-1.5 rounded-full text-[#105e3a] text-xs font-bold uppercase tracking-wider">
            <span className="badge-glow-dot" />
            Langkah Mudah
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#141A16] tracking-tight">
            Cara Selamatkan Makanan
          </h2>
          <p className="text-sm sm:text-base text-[#57655B] leading-relaxed">
            Hanya butuh 3 langkah simpel untuk menikmati makanan lezat berkualitas dengan harga hemat.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 max-w-5xl mx-auto mb-10 sm:mb-14">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="app-card rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 flex flex-col justify-between text-left"
              >
                <div>
                  {/* Step Icon & Number */}
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#EBF5E4] text-[#105e3a] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-[#E8EDE5]">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#141A17] mb-1.5 sm:mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#57655B] leading-relaxed mb-4 sm:mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Screenshot Window */}
                <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden bg-slate-50 border border-[#E8EDE5]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onOpenDownloadModal}
            className="btn-app-primary w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-base rounded-2xl inline-flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98"
          >
            <span>Unduh Aplikasi ReFeed Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
