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
    <section className="py-7 border-y border-[#E8EDE5]/60 overflow-hidden">
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
                className="glass-panel flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold text-[#141A16] whitespace-nowrap hover:border-[#8fc22a]/60 hover:shadow-[0_0_18px_-4px_rgba(143,194,42,0.4)] transition-all"
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
