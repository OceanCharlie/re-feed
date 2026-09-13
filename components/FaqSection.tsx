'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Apa itu ReFeed dan bagaimana cara kerjanya?',
      a: 'ReFeed adalah aplikasi mobile penyelamat surplus makanan dan pengelolaan limbah organik. Konsumen dapat membeli makanan lezat layak makan dari restoran & bakery mitra dengan diskon 50-70%, serta menyalurkan sampah organik ke Waste Hub untuk diolah jadi energi terbarukan.',
    },
    {
      q: 'Apakah makanan surplus di ReFeed terjamin aman dan higienis?',
      a: 'Sangat aman 100%. Makanan yang dijual di ReFeed adalah kelebihan produksi atau stok display hari itu yang belum terjual, BUKAN sisa piring atau makanan basi. Semua mitra wajib mematuhi standar higienitas dan keamanan pangan.',
    },
    {
      q: 'Bagaimana cara menyetor sampah organik ke Waste Hub?',
      a: 'Buka menu "Waste" di aplikasi ReFeed, pilih Drop Point terdekat atau jadwalkan penjemputan. Anda akan menerima Eco-Points setelah setoran ditimbang dan diverifikasi oleh tim Waste Hub.',
    },
    {
      q: 'Bagaimana cara mendaftarkan usaha kuliner menjadi mitra?',
      a: 'Pendaftaran merchant gratis dan tanpa biaya bulanan. Klik tombol "Gabung Mitra" di website ini, dan tim ReFeed akan menghubungi via WhatsApp dalam 1x24 jam untuk aktivasi.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 space-y-2">
          <span className="badge-glow inline-flex px-3 py-1 rounded-full text-[#105e3a] text-xs font-black uppercase tracking-wider">
            <span className="badge-glow-dot" />
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#16241C] tracking-tight">
            Pertanyaan Umum
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl overflow-hidden shadow-[0_10px_28px_-12px_rgba(16,94,58,0.14)] transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer focus:outline-none select-none active:bg-[#FCFAF7]"
                >
                  <span className="text-xs sm:text-base font-black text-[#16241C] leading-snug">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-[#EBF5E4] text-[#105e3a] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-[#5A6960] leading-relaxed border-t border-[#F6F5F0] pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
