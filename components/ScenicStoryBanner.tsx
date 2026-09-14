'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Trees, Play } from 'lucide-react';

interface ScenicStoryBannerProps {
  onOpenPartnerModal?: () => void;
}

export default function ScenicStoryBanner({ }: ScenicStoryBannerProps) {
  const sdgGoals = [
    {
      id: 2,
      image: '/images/sdg/sdg-2.png',
      alt: 'SDG 2 - Zero Hunger (Tanpa Kelaparan)',
      title: 'Tanpa Kelaparan',
      target: 'Target 2.1 • Pangan Terjangkau',
      desc: 'Membuka akses surplus makanan lezat bergizi dengan diskon 50–70% agar pangan layak konsumsi dapat dinikmati semua kalangan.',
      badgeBg: 'bg-[#FEF9EE] text-[#9A6708] border-[#F5E2B5]',
      cardHover: 'hover:border-[#DDA63A]/60 hover:shadow-[0_16px_36px_-12px_rgba(221,166,58,0.25)]',
    },
    {
      id: 7,
      image: '/images/sdg/sdg-7.png',
      alt: 'SDG 7 - Affordable and Clean Energy (Energi Bersih dan Terjangkau)',
      title: 'Energi Bersih & Terjangkau',
      target: 'Target 7.2 • Energi Biogas',
      desc: 'Mengolah sisa makanan tak layak konsumsi di Waste Hub menjadi energi alternatif biogas bersih dan pupuk ramah lingkungan.',
      badgeBg: 'bg-[#FEFBE8] text-[#8C6000] border-[#FAEA9E]',
      cardHover: 'hover:border-[#FDB713]/60 hover:shadow-[0_16px_36px_-12px_rgba(253,183,19,0.25)]',
    },
    {
      id: 12,
      image: '/images/sdg/sdg-12.png',
      alt: 'SDG 12 - Responsible Consumption and Production (Konsumsi dan Produksi Bertanggung Jawab)',
      title: 'Konsumsi Bertanggung Jawab',
      target: 'Target 12.3 • Pangkas Food Waste',
      desc: 'Mencegah pemborosan makanan layak di merchant kuliner serta mengajak masyarakat hidup hemat sirkular demi nol sampah makanan.',
      badgeBg: 'bg-[#FEF6EC] text-[#9C5700] border-[#FBD9B0]',
      cardHover: 'hover:border-[#CF8D2A]/60 hover:shadow-[0_16px_36px_-12px_rgba(207,141,42,0.25)]',
    },
    {
      id: 13,
      image: '/images/sdg/sdg-13.png',
      alt: 'SDG 13 - Climate Action (Penanganan Perubahan Iklim)',
      title: 'Penanganan Perubahan Iklim',
      target: 'Target 13.2 • Mitigasi Metana TPA',
      desc: 'Mencegah pembusukan sisa pangan di TPA yang menghasilkan gas metana (CH₄) dengan efek pemanasan 28x lipat dibanding CO₂.',
      badgeBg: 'bg-[#EEF7EF] text-[#245728] border-[#C2E4C5]',
      cardHover: 'hover:border-[#3F7E44]/60 hover:shadow-[0_16px_36px_-12px_rgba(63,126,68,0.25)]',
    },
  ];

  return (
    <section className="py-10 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">

        {/* 1. Scenic Panoramic Card */}
        <div className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden min-h-[420px] sm:min-h-[480px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 text-white shadow-[0_24px_60px_-20px_rgba(16,94,58,0.4)] border border-white/10">

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/nature_story_banner.webp"
              alt="ReFeed Nature Impact Landscape"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center brightness-[0.88]"
            />
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </div>

          {/* Top Section: Badge & Annotation (Clean, no emoji/icons) */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[#bef264] text-xs font-bold border border-white/25 shadow-xs">
              <span>Dampak Nyata untuk Bumi • Agenda SDGs 2030</span>
            </div>

            {/* Note (Top Right) */}
            <div className="text-right hidden sm:block">
              <span className="text-xs sm:text-sm font-bold text-white/95 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-white/20 shadow-xs">
                Hari ini untuk esok yang lebih baik
              </span>
            </div>
          </div>

          {/* Middle Section: Big Bold Headline & Subtitle */}
          <div className="relative z-10 max-w-2xl text-left space-y-3 sm:space-y-4 my-6 sm:my-8">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-md">
              Lebih dari Sekadar Makanan
            </h2>
            <p className="text-xs sm:text-sm sm:text-base text-white/90 leading-relaxed max-w-xl font-normal drop-shadow-sm">
              Setiap paket yang kamu selamatkan berarti lebih sedikit limbah, lebih rendah emisi gas rumah kaca, dan kontribusi nyata pada sasaran Pembangunan Berkelanjutan dunia.
            </p>
          </div>

          {/* Bottom Section: 3 Metric Pills + Story Button */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 pt-4 border-t border-white/20">

            {/* 3 Metric Pills */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Stat 1 */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-xs">
                <div className="w-6 h-6 rounded-full bg-[#8fc22a] flex items-center justify-center text-black shrink-0">
                  <Leaf className="w-3.5 h-3.5 text-[#111c15]" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black text-white">2.8 Ton+</div>
                  <div className="text-[10px] text-white/80">Emisi CO₂ Berkurang</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-xs">
                <div className="w-6 h-6 rounded-full bg-[#38bdf8] flex items-center justify-center text-black shrink-0">
                  <Recycle className="w-3.5 h-3.5 text-[#111c15]" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black text-white">12.000+</div>
                  <div className="text-[10px] text-white/80">Porsi Terselamatkan</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-xs">
                <div className="w-6 h-6 rounded-full bg-[#bef264] flex items-center justify-center text-black shrink-0">
                  <Trees className="w-3.5 h-3.5 text-[#111c15]" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black text-white">Setara 480+</div>
                  <div className="text-[10px] text-white/80">Pohon Ditanam</div>
                </div>
              </div>
            </div>

            {/* Action Link to Behind ReFeed */}
            <Link
              href="/behind-refeed/"
              className="px-5 py-3 rounded-2xl bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/30 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95 shadow-md shrink-0 cursor-pointer group"
            >
              <div className="w-6 h-6 rounded-full bg-[#105e3a] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-white" />
              </div>
              <span>Lihat Cerita Kami</span>
            </Link>

          </div>

        </div>

        {/* 2. Dedicated UN SDGs Section (Official Images & Standard Chip) */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Section Header with standard badge-glow chip without icon */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="badge-glow px-3.5 py-1.5 rounded-full text-[#105e3a] text-xs font-bold inline-flex items-center">
              <span className="badge-glow-dot" />
              Komitmen SDGs PBB 2030
            </div>
            
            <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#141A16] tracking-tight">
              Kontribusi Nyata Re-Feed untuk <span className="text-[#105e3a]">SDGs 2030</span>
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-[#57655B] leading-relaxed">
              Ekosistem sirkular Re-Feed dirancang untuk mempercepat pencapaian 4 sasaran utama Tujuan Pembangunan Berkelanjutan (Sustainable Development Goals) di Indonesia.
            </p>
          </div>

          {/* 4 SDGs Cards Grid with Official Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {sdgGoals.map((sdg) => (
              <motion.div
                key={sdg.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={`app-card p-4 sm:p-5 rounded-3xl border border-[#E8EDE5] flex flex-col justify-between text-left transition-all duration-300 group bg-white ${sdg.cardHover}`}
              >
                <div className="space-y-3.5">
                  {/* Official UN SDG Tile Image */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xs border border-black/5 group-hover:scale-[1.02] transition-transform duration-300 bg-[#F9FAF8]">
                    <Image
                      src={sdg.image}
                      alt={sdg.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain"
                    />
                  </div>

                  {/* Target Tag & Title */}
                  <div className="space-y-1.5 pt-1">
                    <span className={`inline-block text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${sdg.badgeBg}`}>
                      {sdg.target}
                    </span>
                    <h4 className="text-sm sm:text-base font-black text-[#141A16] leading-snug group-hover:text-[#105e3a] transition-colors">
                      {sdg.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#57655B] leading-relaxed">
                    {sdg.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}