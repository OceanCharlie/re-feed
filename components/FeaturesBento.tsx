'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  MapPin, 
  ChefHat, 
  ShieldCheck, 
  BarChart3, 
  Coins, 
  Flame, 
  Clock, 
  Leaf, 
  CheckCircle,
  Bell,
  RefreshCw,
  Zap,
  ShoppingBag
} from 'lucide-react';
import { BrandMarkSvg } from './BrandLogo';

export default function FeaturesBento() {
  return (
    <section id="features" className="py-24 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F4DA] text-[#105e3a] text-xs font-black uppercase tracking-wider">
            ✨ Fitur Unggulan ReFeed
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#16241C] tracking-tight">
            Solusi Terpadu Selamatkan Pangan & Kelola Limbah
          </h2>
          <p className="text-[#5A6960] text-base sm:text-lg">
            Mengintegrasikan pasar surplus makanan lezat, pengelolaan limbah organik menjadi energi, dan edukasi gaya hidup ramah lingkungan.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Beli Surplus (8 cols) */}
          <div className="md:col-span-8 p-8 rounded-3xl bg-[#F6F5F0] border border-[#DCE4D3] shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-48 h-48 opacity-10 pointer-events-none">
              <BrandMarkSvg size={190} color="#105e3a" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#105e3a] text-white text-xs font-black flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Hemat s.d 70%
                </span>
                <span className="text-xs text-[#5A6960] font-bold">Food Hero Marketplace</span>
              </div>

              <h3 className="text-2xl font-black text-[#16241C] mb-2">
                Surplus Food Rescue dari Bakery & Resto Pilihan
              </h3>
              <p className="text-[#5A6960] text-sm max-w-xl leading-relaxed">
                Dapatkan roti artisan hangat, paket bento lezat, kue lembut, hingga buah segar berkualitas prima yang belum terjual di hari itu dengan harga sepertiga harga normal.
              </p>
            </div>

            {/* Quick badges */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-white border border-[#DCE4D3] flex items-center gap-3">
                <div className="text-2xl">🥐</div>
                <div>
                  <div className="text-xs font-black text-[#16241C]">Bakery & Pastry</div>
                  <div className="text-[10px] text-[#105e3a] font-black">Diskon s.d 70%</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#DCE4D3] flex items-center gap-3">
                <div className="text-2xl">🍱</div>
                <div>
                  <div className="text-xs font-black text-[#16241C]">Resto Meals</div>
                  <div className="text-[10px] text-[#105e3a] font-black">Diskon s.d 60%</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#DCE4D3] flex items-center gap-3">
                <div className="text-2xl">🍎</div>
                <div>
                  <div className="text-xs font-black text-[#16241C]">Fresh Grocery</div>
                  <div className="text-[10px] text-[#fe6708] font-black">Flash Sale</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Waste Hub & Biogas (4 cols) */}
          <div className="md:col-span-4 p-8 rounded-3xl bg-gradient-hero text-white border border-[#105e3a] shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 text-[#8fc22a] flex items-center justify-center font-bold mb-4 backdrop-blur-md">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black mb-2">
                Waste Hub & Energi Biogas
              </h3>
              <p className="text-[#E8F4DA] text-xs leading-relaxed">
                Salurkan sisa sampah organik dapur ke Drop Point ReFeed untuk diolah menjadi energi biogas bersih dan pupuk kompos bernutrisi tinggi.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-2xl bg-white/10 border border-white/20 text-xs text-[#E8F4DA] font-bold">
              ⚡ 45.000 kg limbah organik telah dikonversi jadi energi hijau!
            </div>
          </div>

          {/* Card 3: Standar Higienitas 100% (4 cols) */}
          <div className="md:col-span-4 p-8 rounded-3xl bg-[#F6F5F0] border border-[#DCE4D3] shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8F4DA] text-[#105e3a] flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#16241C] mb-2">
                Standar Higienitas & Mutu 100%
              </h3>
              <p className="text-[#5A6960] text-xs leading-relaxed">
                Setiap makanan yang terdaftar adalah stok baru hari itu yang tersegel rapi. Bukan makanan basi, sisa piring, atau kadaluwarsa.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-black text-[#105e3a]">
              <CheckCircle className="w-4 h-4" />
              <span>Pakta Integritas Keamanan Pangan</span>
            </div>
          </div>

          {/* Card 4: Geo Radar Flash Alerts (4 cols) */}
          <div className="md:col-span-4 p-8 rounded-3xl bg-[#F6F5F0] border border-[#DCE4D3] shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFF3E0] text-[#fe6708] flex items-center justify-center font-bold mb-4">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#16241C] mb-2">
                Geo-Radar Notifikasi Instan
              </h3>
              <p className="text-[#5A6960] text-xs leading-relaxed">
                Dapatkan notifikasi otomatis saat toko atau resto di sekitar radius 1-3 km mulai merilis makanan surplus sore dan malam hari.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-black text-[#fe6708]">
              <Clock className="w-4 h-4" />
              <span>Flash Sale Sore & Malam Hari</span>
            </div>
          </div>

          {/* Card 5: Gamifikasi & Laporan ESG (4 cols) */}
          <div className="md:col-span-4 p-8 rounded-3xl bg-[#F6F5F0] border border-[#DCE4D3] shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8F4DA] text-[#105e3a] flex items-center justify-center font-bold mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#16241C] mb-2">
                Eco-Points & Laporan ESG
              </h3>
              <p className="text-[#5A6960] text-xs leading-relaxed">
                Tukar Eco-Points dengan voucher diskon, dan bagi mitra bisnis dapatkan laporan audit reduksi jejak karbon berkala.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs pt-3 border-t border-[#DCE4D3]">
              <span className="font-bold text-[#105e3a]">Eco-Rewards Terintegrasi</span>
              <span className="font-black bg-[#E8F4DA] text-[#105e3a] px-2 py-0.5 rounded-md">ESG Ready</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
