'use client';

import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Dian Safitri',
      role: 'Mahasiswi & Food Hero',
      city: 'Jakarta Selatan',
      avatar: '👩‍🎓',
      rating: 5,
      comment: 'Bisa nikmatin pastry artisan dan bento lezat seharga 20 ribuan sepulang kuliah! Sangat membantu anak kos untuk hemat uang jajan sambil berkontribusi nyata menjaga bumi dari limbah makanan.',
      highlight: 'Hemat Rp 800rb/bulan',
    },
    {
      name: 'Chef Rangga Pratama',
      role: 'Owner Artisan Bakery & Cafe',
      city: 'Bandung',
      avatar: '👨‍🍳',
      rating: 5,
      comment: 'Sebelum gabung ReFeed, kami terpaksa membuang 15-20 sisa croissant display tiap malam demi komitmen produk fresh. Sekarang semuanya selalu ludes diselamatkan pembeli lewat ReFeed!',
      highlight: '+Rp 7,5 Juta Omzet Ekstra/bln',
    },
    {
      name: 'Nadia Kirana',
      role: 'Pegiat Zero Waste & Eco Hub',
      city: 'Tangerang',
      avatar: '🌱',
      rating: 5,
      comment: 'Fitur Waste Hub ReFeed sangat mempermudah menyalurkan sampah organik rumah tangga ke drop point terdekat. Sangat inspiratif dan terkelola rapi.',
      highlight: 'Zero Waste Lifestyle',
    },
    {
      name: 'Budi Santoso',
      role: 'Operational Manager Resto Network',
      city: 'Surabaya',
      avatar: '👔',
      rating: 5,
      comment: 'Aplikasi ReFeed sangat praktis bagi tim kitchen kami. Input surplus cuma butuh 1 menit dan laporan audit reduksi emisinya sangat kredibel untuk manajemen.',
      highlight: 'Laporan ESG Otomatis',
    },
  ];

  return (
    <section className="py-24 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F4DA] text-[#105e3a] text-xs font-black uppercase tracking-wider">
            ⭐ Cerita Pengguna & Mitra
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16241C] tracking-tight">
            Cerita & Antusiasme Komunitas ReFeed
          </h2>
          <p className="text-[#5A6960] text-base sm:text-lg">
            Bagaimana ekosistem ReFeed menghadirkan manfaat ekonomi hemat sekaligus aksi nyata bagi kelestarian lingkungan.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#F6F5F0] border border-[#DCE4D3] shadow-md hover:shadow-xl hover:border-[#105e3a]/40 hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Highlight Badge */}
                <span className="inline-block px-2.5 py-1 rounded-lg bg-white text-[#105e3a] text-[11px] font-black mb-3 border border-[#DCE4D3]">
                  {item.highlight}
                </span>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#2D3E33] leading-relaxed italic mb-6">
                  &quot;{item.comment}&quot;
                </p>
              </div>

              {/* User Identity */}
              <div className="pt-4 border-t border-[#DCE4D3] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl shrink-0 border border-[#DCE4D3]">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#16241C] flex items-center gap-1">
                    {item.name}
                    <CheckCircle2 className="w-3 h-3 text-[#105e3a]" />
                  </h4>
                  <p className="text-[10px] text-[#5A6960]">
                    {item.role} • {item.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
