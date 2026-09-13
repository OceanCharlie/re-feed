'use client';

import React from 'react';
import Image from 'next/image';
import { ShoppingBag, Leaf, Recycle, ArrowRight, Sparkles } from 'lucide-react';

interface DualEcosystemProps {
  onOpenDownloadModal: () => void;
  onOpenPartnerModal: () => void;
}

export default function DualEcosystem({ onOpenDownloadModal }: DualEcosystemProps) {
  const cards = [
    {
      id: 1,
      title: 'Hemat & Nikmati',
      desc: 'Dapatkan makanan lezat dari brand favorit dengan harga hingga 70% lebih murah.',
      icon: ShoppingBag,
      iconColor: 'text-[#105e3a]',
      iconBg: 'bg-[#E2EED9]',
      cardBg: 'bg-[#F2F7EC] border-[#E0EBD7]',
      image: '/images/croissant_food.png',
      badge: '🥐 Hemat hingga 70%',
    },
    {
      id: 2,
      title: 'Kurangi Limbah',
      desc: 'Bantu mengurangi makanan yang terbuang sia-sia dan dukung lingkungan yang lebih bersih.',
      icon: Leaf,
      iconColor: 'text-[#105e3a]',
      iconBg: 'bg-[#EAEEDF]',
      cardBg: 'bg-[#FBF8F1] border-[#EBE6DA]',
      image: '/images/earth_leaves.png',
      badge: null,
    },
    {
      id: 3,
      title: 'Ubah Jadi Energi',
      desc: 'Sisa organik yang tidak dapat dikonsumsi akan disalurkan untuk diolah menjadi biogas.',
      icon: Recycle,
      iconColor: 'text-[#0284C7]',
      iconBg: 'bg-[#E1EFF8]',
      cardBg: 'bg-[#EFF6FC] border-[#DCEAF5]',
      image: '/images/biogas_dome.png',
      badge: null,
    },
  ];

  return (
    <section id="solutions" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          
          {/* LEFT COLUMN: Section Header & Narrative */}
          <div className="lg:col-span-4 text-left space-y-4 sm:space-y-5">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black text-[#141A16] tracking-tight leading-[1.15]">
              Langkah Kecil, <br />
              Dampak Besar
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#57655B] leading-relaxed">
              ReFeed menghubungkan kamu dengan makanan berkualitas yang masih layak konsumsi, membantu mengurangi limbah makanan, dan menciptakan masa depan yang lebih berkelanjutan.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenDownloadModal}
                className="px-6 py-3.5 bg-[#105e3a] hover:bg-[#0c5536] text-white font-bold text-xs sm:text-sm rounded-2xl shadow-sm transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Pelajari Lebih Lanjut</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: 3 Clean Feature Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className={`rounded-3xl p-5 sm:p-6 ${card.cardBg} border shadow-2xs flex flex-col justify-between text-left transition-all hover:-translate-y-1 hover:shadow-md group`}
                >
                  <div className="space-y-3">
                    {/* Round Icon Header */}
                    <div className={`w-11 h-11 rounded-2xl ${card.iconBg} ${card.iconColor} flex items-center justify-center font-bold shadow-2xs`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-[#141A16]">
                      {card.title}
                    </h3>

                    <p className="text-xs text-[#57655B] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                    {/* Image Container with Badge */}
                    <div className="mt-5 relative h-36 xs:h-40 w-full rounded-2xl overflow-hidden bg-white/70 border border-white/60 shadow-2xs">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {card.badge && (
                        <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-md text-[#105e3a] text-[10px] font-black shadow-xs border border-[#E8EDE5]">
                          {card.badge}
                        </div>
                      )}
                    </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
