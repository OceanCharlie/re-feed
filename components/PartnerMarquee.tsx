'use client';

import React from 'react';
import { Store, ShoppingBag, Coffee, Utensils, Zap, Heart } from 'lucide-react';

export default function PartnerMarquee() {
  const categories = [
    { label: '🥐 Artisan Bakery & Pastry', icon: ShoppingBag },
    { label: '☕ Specialty Coffee & Toast', icon: Coffee },
    { label: '🍱 Japanese & Gourmet Bento', icon: Utensils },
    { label: '🥗 Fresh Salad & Healthy Bowls', icon: Store },
    { label: '⚡ Waste-to-Energy Biogas Hub', icon: Zap },
    { label: '🛒 Organic Supermarket & Fresh Groceries', icon: Heart },
  ];

  return (
    <section className="py-7 bg-[#FFFFFF] border-y border-[#E8EDE5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <span className="text-xs font-bold text-[#57655B] tracking-wide">
          Kategori Makanan Surplus & Pengelolaan Limbah yang Didukung ReFeed
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex">
        <div className="animate-marquee flex items-center gap-3.5 py-1">
          {[...categories, ...categories, ...categories].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#FCFAF7] border border-[#E8EDE5] text-xs font-bold text-[#141A16] whitespace-nowrap shadow-2xs hover:border-[#105e3a]/40 transition-colors"
              >
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
