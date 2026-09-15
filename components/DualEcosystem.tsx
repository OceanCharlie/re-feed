'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingBag, Leaf, Recycle, ArrowRight } from 'lucide-react';

interface DualEcosystemProps {
  onOpenDownloadModal: () => void;
  onOpenPartnerModal?: () => void;
}

export default function DualEcosystem({ onOpenDownloadModal }: DualEcosystemProps) {
  const cards = [
    {
      id: 1,
      title: 'Hemat & Nikmati',
      desc: 'Dapatkan makanan lezat dari brand favorit dengan harga hingga 70% lebih murah.',
      icon: ShoppingBag,
      image: '/images/croissant_food.webp',
    },
    {
      id: 2,
      title: 'Kurangi Jejak Karbon',
      desc: 'Setiap kilogram makanan yang diselamatkan mengurangi emisi gas rumah kaca.',
      icon: Leaf,
      image: '/images/earth_leaves.webp',
    },
    {
      id: 3,
      title: 'Ubah Jadi Energi',
      desc: 'Sisa organik yang tidak dapat dikonsumsi akan disalurkan untuk diolah menjadi biogas.',
      icon: Recycle,
      image: '/images/biogas_dome.webp',
    },
  ];

  return (
    <section id="solutions" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          
          {/* LEFT COLUMN: Section Header & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 text-left space-y-4 sm:space-y-5"
          >
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
                className="btn-app-primary px-6 py-3.5 font-bold text-xs sm:text-sm rounded-2xl transition-all flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Pelajari Lebih Lanjut</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 3 Clean Feature Cards with stagger motion */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="app-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between text-left group"
                >
                  <div className="space-y-3">
                    {/* Round Icon Header */}
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#E2EED9] to-[#C8DFBC] text-[#105e3a] flex items-center justify-center font-bold shadow-[0_0_0_1px_rgba(143,194,42,0.2)]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-[#141A16]">
                      {card.title}
                    </h3>

                    <p className="text-xs text-[#57655B] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Image Container */}
                  <div className="mt-5 relative h-36 xs:h-40 w-full rounded-2xl overflow-hidden bg-white/70 border border-white/60 shadow-2xs">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
