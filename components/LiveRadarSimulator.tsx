'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  ShoppingBag, 
  ArrowRight, 
  TrendingDown, 
  ShieldCheck, 
  Zap, 
  Store,
  CheckCircle2,
  Gift
} from 'lucide-react';

interface LiveRadarSimulatorProps {
  onOpenDownloadModal: () => void;
}

export default function LiveRadarSimulator({ onOpenDownloadModal }: LiveRadarSimulatorProps) {
  const [selectedArea, setSelectedArea] = useState<'jaksel' | 'bsd' | 'bandung' | 'surabaya'>('jaksel');
  const [activeBagIndex, setActiveBagIndex] = useState<number>(0);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const areas = [
    { id: 'jaksel', name: 'Jakarta Selatan', sub: 'Senopati / Blok M' },
    { id: 'bsd', name: 'BSD & Serpong', sub: 'Gading Serpong' },
    { id: 'bandung', name: 'Bandung', sub: 'Dago / Riau' },
    { id: 'surabaya', name: 'Surabaya', sub: 'Gubeng / Darmo' },
  ] as const;

  const bagDataByArea = {
    jaksel: [
      {
        store: 'Le Croissant Artisan Bakery',
        category: 'Pastry & Viennoiserie',
        distance: '1.2 km',
        pickupTime: '20:30 - 21:45',
        originalPrice: 120000,
        discountedPrice: 38000,
        discountPercent: 68,
        rating: 4.9,
        itemsLeft: 3,
        contents: '3x Almond Croissant, 1x Pain au Chocolat, 1x Sourdough Brioche Roll',
        co2Saved: '1.8 kg CO₂e',
        img: '/images/food-hero.webp',
      },
      {
        store: 'Komorebi Japanese Bento',
        category: 'Gourmet Japanese',
        distance: '1.8 km',
        pickupTime: '21:00 - 22:00',
        originalPrice: 95000,
        discountedPrice: 32000,
        discountPercent: 66,
        rating: 4.8,
        itemsLeft: 2,
        contents: '1x Salmon Teriyaki Set, 1x Chicken Katsu, 1x Fresh Tamagoyaki Bento',
        co2Saved: '2.4 kg CO₂e',
        img: '/images/1.png',
      },
      {
        store: 'Green Pantry Organic Salad & Juice',
        category: 'Healthy & Organic',
        distance: '2.4 km',
        pickupTime: '19:45 - 20:30',
        originalPrice: 85000,
        discountedPrice: 29000,
        discountPercent: 65,
        rating: 4.9,
        itemsLeft: 5,
        contents: '2x Roasted Sesame Salad Bowl, 1x Cold-Pressed Green Detox Juice',
        co2Saved: '1.2 kg CO₂e',
        img: '/images/2.png',
      },
    ],
    bsd: [
      {
        store: 'Artisan Oven & Pastry BSD',
        category: 'European Bakery',
        distance: '0.9 km',
        pickupTime: '20:00 - 21:30',
        originalPrice: 110000,
        discountedPrice: 35000,
        discountPercent: 68,
        rating: 4.9,
        itemsLeft: 4,
        contents: '2x Garlic Butter Baguette, 2x Cinnamon Rolls, 1x Butter Croissant',
        co2Saved: '1.6 kg CO₂e',
        img: '/images/food-hero.webp',
      },
      {
        store: 'Botanica Coffee & Roast',
        category: 'Specialty Cafe & Sandwiches',
        distance: '1.5 km',
        pickupTime: '21:00 - 21:45',
        originalPrice: 75000,
        discountedPrice: 25000,
        discountPercent: 66,
        rating: 4.7,
        itemsLeft: 3,
        contents: '1x Truffle Beef Panini, 1x Iced Salted Caramel Latte (Bottled)',
        co2Saved: '1.4 kg CO₂e',
        img: '/images/1.png',
      },
    ],
    bandung: [
      {
        store: 'Dago Artisan Boulangerie',
        category: 'Artisan Pastry',
        distance: '1.1 km',
        pickupTime: '20:30 - 21:30',
        originalPrice: 105000,
        discountedPrice: 34000,
        discountPercent: 67,
        rating: 4.9,
        itemsLeft: 2,
        contents: '2x Smoked Beef Croissant, 2x Choco Danish Pastry',
        co2Saved: '1.7 kg CO₂e',
        img: '/images/food-hero.webp',
      },
      {
        store: 'Riau Roastery & Kitchen',
        category: 'Cafe Dining',
        distance: '1.9 km',
        pickupTime: '21:15 - 22:00',
        originalPrice: 90000,
        discountedPrice: 30000,
        discountPercent: 66,
        rating: 4.8,
        itemsLeft: 3,
        contents: '1x Spaghetti Carbonara, 1x Caesar Salad, 1x Cold Brew Coffee',
        co2Saved: '2.1 kg CO₂e',
        img: '/images/2.png',
      },
    ],
    surabaya: [
      {
        store: 'Darmo Grand Patisserie',
        category: 'French Bakery',
        distance: '1.3 km',
        pickupTime: '20:45 - 21:30',
        originalPrice: 125000,
        discountedPrice: 39000,
        discountPercent: 68,
        rating: 4.9,
        itemsLeft: 3,
        contents: '3x Cheese Croissant, 1x Blueberry Muffin, 1x Country Sourdough Loaf',
        co2Saved: '2.0 kg CO₂e',
        img: '/images/food-hero.webp',
      },
      {
        store: 'Gubeng Bento Express',
        category: 'Rice Bowls & Bento',
        distance: '2.1 km',
        pickupTime: '21:00 - 22:00',
        originalPrice: 80000,
        discountedPrice: 28000,
        discountPercent: 65,
        rating: 4.8,
        itemsLeft: 4,
        contents: '1x Gyudon Beef Bowl, 1x Chicken Karaage, 1x Ocha Cold Tea',
        co2Saved: '1.9 kg CO₂e',
        img: '/images/1.png',
      },
    ],
  };

  const currentBags = bagDataByArea[selectedArea] || bagDataByArea.jaksel;
  const activeBag = currentBags[activeBagIndex] || currentBags[0];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#8fc22a]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F4DA] text-[#105e3a] text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#105e3a]" />
            Live Discovery Simulator
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#16241C] tracking-tight">
            Coba Sensasi Berburu Surprise Bag
          </h2>
          <p className="text-xs sm:text-base text-[#5A6960] max-w-xl mx-auto leading-relaxed">
            Pilih area Anda dan lihat surplus makanan segar yang siap Anda selamatkan malam ini dengan diskon hingga 70%.
          </p>
        </div>

        {/* Interactive Simulator Shell */}
        <div className="max-w-5xl mx-auto rounded-[28px] sm:rounded-[36px] bg-[#F6F5F0] border border-[#DCE4D3] p-4 xs:p-6 sm:p-10 shadow-xl">
          
          {/* 1. Area Selector Tabs */}
          <div className="mb-6 sm:mb-8">
            <div className="text-xs font-black text-[#105e3a] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#8fc22a]" />
              <span>1. Pilih Area Radius Sekitarmu</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {areas.map((area) => {
                const isActive = selectedArea === area.id;
                return (
                  <button
                    key={area.id}
                    onClick={() => {
                      setSelectedArea(area.id);
                      setActiveBagIndex(0);
                      setIsRevealed(false);
                    }}
                    className={`p-3 rounded-2xl text-xs font-black transition-all text-left cursor-pointer border active:scale-95 ${
                      isActive
                        ? 'bg-[#105e3a] text-white border-[#105e3a] shadow-xs'
                        : 'bg-white text-[#16241C] border-[#DCE4D3] hover:border-[#105e3a]/40'
                    }`}
                  >
                    <div className="font-bold truncate">{area.name}</div>
                    <div className={`text-[10px] truncate ${isActive ? 'text-[#bef264]' : 'text-[#5A6960]'}`}>
                      {area.sub}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Interactive Bag Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Column: List of Surprise Bags in Selected Area */}
            <div className="lg:col-span-6 space-y-2.5 sm:space-y-3">
              <div className="text-xs font-black text-[#5A6960] uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Surprise Bags Tersedia</span>
                <span className="text-[#fe6708] font-bold text-[11px]">● Flash Sale Aktif</span>
              </div>

              {currentBags.map((bag, idx) => {
                const isSelected = activeBagIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveBagIndex(idx);
                      setIsRevealed(false);
                    }}
                    className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2.5 sm:gap-4 active:scale-98 ${
                      isSelected
                        ? 'bg-white border-[#105e3a] shadow-md ring-2 ring-[#105e3a]/15'
                        : 'bg-white/70 border-[#DCE4D3] hover:bg-white hover:border-[#105e3a]/30'
                    }`}
                  >
                    <div className="space-y-1 text-left min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#fe6708] text-white shrink-0">
                          -{bag.discountPercent}%
                        </span>
                        <h4 className="text-xs sm:text-sm font-black text-[#16241C] truncate">{bag.store}</h4>
                      </div>
                      <div className="text-[11px] text-[#5A6960] flex items-center gap-2 flex-wrap">
                        <span>📍 {bag.distance}</span>
                        <span>⏰ {bag.pickupTime}</span>
                        <span className="text-[#105e3a] font-bold">⚡ {bag.itemsLeft} box</span>
                      </div>
                    </div>

                    <div className="text-left xs:text-right shrink-0 flex xs:flex-col items-center xs:items-end gap-2 xs:gap-0">
                      <div className="text-[10px] sm:text-[11px] text-[#5A6960] line-through">
                        Rp {bag.originalPrice.toLocaleString('id-ID')}
                      </div>
                      <div className="text-sm sm:text-base font-black text-[#105e3a]">
                        Rp {bag.discountedPrice.toLocaleString('id-ID')}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Interactive Surprise Box Reveal Card */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-white border border-[#DCE4D3] p-5 sm:p-8 shadow-lg text-left space-y-4 sm:space-y-5 relative overflow-hidden">
                
                {/* Store Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#E8F4DA] text-[#105e3a] uppercase tracking-wider">
                      {activeBag.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-[#16241C] mt-1.5 leading-snug">
                      {activeBag.store}
                    </h3>
                    <div className="text-[11px] sm:text-xs text-[#5A6960] mt-0.5">
                      ⭐ {activeBag.rating} • Radius {activeBag.distance} • Jam: {activeBag.pickupTime}
                    </div>
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#E8F4DA] text-[#105e3a] flex items-center justify-center font-bold shrink-0">
                    <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-[#105e3a]" />
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F6F5F0] border border-[#DCE4D3] flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2.5">
                  <div>
                    <div className="text-[11px] text-[#5A6960]">Harga Normal: <span className="line-through">Rp {activeBag.originalPrice.toLocaleString('id-ID')}</span></div>
                    <div className="text-xl sm:text-2xl font-black text-[#105e3a]">
                      Rp {activeBag.discountedPrice.toLocaleString('id-ID')}
                    </div>
                  </div>
                  <div className="text-left xs:text-right">
                    <div className="text-xs font-black text-[#fe6708]">HEMAT Rp {(activeBag.originalPrice - activeBag.discountedPrice).toLocaleString('id-ID')}</div>
                    <div className="text-[10px] text-[#105e3a] font-bold">🌱 Reduksi {activeBag.co2Saved}</div>
                  </div>
                </div>

                {/* Surprise Bag Box Content (Revealed or Mystery State) */}
                <div className="border border-dashed border-[#105e3a]/40 rounded-2xl p-3.5 sm:p-4 bg-[#F0FDF4]">
                  {!isRevealed ? (
                    <div className="text-center py-2 space-y-2">
                      <div className="text-xs font-bold text-[#16241C]">
                        🎁 Surprise Bag berisi paket makanan lezat yang belum terjual hari ini
                      </div>
                      <button
                        onClick={() => setIsRevealed(true)}
                        className="px-4 py-2 bg-[#105e3a] hover:bg-[#0c5536] text-white text-xs font-black rounded-xl shadow-xs cursor-pointer transition-all active:scale-95"
                      >
                        ✨ Buka & Intip Isi Paket Ini
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1 text-left animate-in fade-in duration-200">
                      <div className="text-[10px] uppercase font-black text-[#105e3a] tracking-wider">
                        ✅ Isi Paket Yang Diselamatkan:
                      </div>
                      <div className="text-xs font-bold text-[#16241C] leading-snug">
                        {activeBag.contents}
                      </div>
                      <div className="text-[10px] text-[#5A6960] pt-0.5">
                        Kondisi 100% segar, higienis, dan terjamin standar keselamatan pangan.
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Action */}
                <button
                  onClick={onOpenDownloadModal}
                  className="btn-app-primary w-full py-3.5 px-4 text-xs sm:text-sm rounded-2xl shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Amankan Pesanan di Aplikasi ReFeed</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
