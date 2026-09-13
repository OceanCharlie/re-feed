'use client';

import { 
  Sparkles, 
  ShieldCheck, 
  BarChart3, 
  Clock, 
  CheckCircle,
  Bell,
  Zap
} from 'lucide-react';
import { BrandMarkSvg } from './BrandLogo';

export default function FeaturesBento() {
  return (
    <section id="features" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
          <div className="badge-glow px-3.5 py-1.5 rounded-full text-[#105e3a] text-xs font-black uppercase tracking-wider">
            <span className="badge-glow-dot" />
            ✨ Fitur Unggulan ReFeed
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#16241C] tracking-tight">
            Solusi Terpadu Selamatkan Pangan & Kelola Limbah
          </h2>
          <p className="text-[#5A6960] text-sm sm:text-lg leading-relaxed">
            Mengintegrasikan pasar surplus makanan lezat, pengelolaan limbah organik menjadi energi, dan edukasi gaya hidup ramah lingkungan.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Beli Surplus (8 cols) */}
          <div className="app-card md:col-span-8 p-5 sm:p-8 rounded-[28px] sm:rounded-3xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-48 h-48 opacity-10 pointer-events-none">
              <BrandMarkSvg size={190} color="#105e3a" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                <span className="px-3 py-1 rounded-full bg-[#105e3a] text-white text-[11px] sm:text-xs font-black flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Hemat s.d 70%
                </span>
                <span className="text-[11px] sm:text-xs text-[#5A6960] font-bold">Food Hero Marketplace</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#16241C] mb-2">
                Surplus Food Rescue dari Bakery & Resto Pilihan
              </h3>
              <p className="text-[#5A6960] text-xs sm:text-sm max-w-xl leading-relaxed">
                Dapatkan roti artisan hangat, paket bento lezat, kue lembut, hingga buah segar berkualitas prima yang belum terjual di hari itu dengan harga sepertiga harga normal.
              </p>
            </div>

            {/* Quick badges */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 xs:grid-cols-3 gap-2.5 sm:gap-3">
              <div className="floating-badge p-3 sm:p-3.5 rounded-2xl flex items-center gap-2.5 sm:gap-3">
                <div className="text-xl sm:text-2xl shrink-0">🥐</div>
                <div>
                  <div className="text-xs font-black text-[#16241C]">Bakery & Pastry</div>
                  <div className="text-[10px] text-[#105e3a] font-black">Diskon s.d 70%</div>
                </div>
              </div>

              <div className="floating-badge p-3 sm:p-3.5 rounded-2xl flex items-center gap-2.5 sm:gap-3">
                <div className="text-xl sm:text-2xl shrink-0">🍱</div>
                <div>
                  <div className="text-xs font-black text-[#16241C]">Resto Meals</div>
                  <div className="text-[10px] text-[#105e3a] font-black">Diskon s.d 60%</div>
                </div>
              </div>

              <div className="floating-badge p-3 sm:p-3.5 rounded-2xl flex items-center gap-2.5 sm:gap-3">
                <div className="text-xl sm:text-2xl shrink-0">🍎</div>
                <div>
                  <div className="text-xs font-black text-[#16241C]">Fresh Grocery</div>
                  <div className="text-[10px] text-[#fe6708] font-black">Flash Sale</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Waste Hub & Biogas (4 cols) */}
          <div className="md:col-span-4 p-5 sm:p-8 rounded-[28px] sm:rounded-3xl bg-gradient-hero text-white border border-[#1e8939]/50 shadow-[0_16px_40px_-14px_rgba(16,94,58,0.5),0_0_30px_-8px_rgba(143,194,42,0.3)] hover:shadow-[0_20px_48px_-14px_rgba(16,94,58,0.6),0_0_40px_-6px_rgba(143,194,42,0.5)] hover:-translate-y-1 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/20 text-[#8fc22a] flex items-center justify-center font-bold mb-3 sm:mb-4 backdrop-blur-md">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-black mb-2">
                Waste Hub & Energi Biogas
              </h3>
              <p className="text-[#E8F4DA] text-xs leading-relaxed">
                Salurkan sisa sampah organik dapur ke Drop Point ReFeed untuk diolah menjadi energi biogas bersih dan pupuk kompos bernutrisi tinggi.
              </p>
            </div>

            <div className="mt-5 sm:mt-6 p-3 rounded-2xl bg-white/10 border border-white/20 text-xs text-[#E8F4DA] font-bold">
              ⚡ Terkoneksi ke sistem pengolahan limbah organik & reaktor biogas hijau
            </div>
          </div>

          {/* Card 3: Standar Higienitas 100% (4 cols) */}
          <div className="app-card md:col-span-4 p-5 sm:p-8 rounded-[28px] sm:rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#E8F4DA] text-[#105e3a] flex items-center justify-center font-bold mb-3 sm:mb-4">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-[#16241C] mb-2">
                Standar Higienitas & Mutu 100%
              </h3>
              <p className="text-[#5A6960] text-xs leading-relaxed">
                Setiap makanan yang terdaftar adalah stok baru hari itu yang tersegel rapi. Bukan makanan basi, sisa piring, atau kadaluwarsa.
              </p>
            </div>

            <div className="mt-5 sm:mt-6 flex items-center gap-2 text-xs font-black text-[#105e3a]">
              <CheckCircle className="w-4 h-4" />
              <span>Pakta Integritas Keamanan Pangan</span>
            </div>
          </div>

          {/* Card 4: Geo Radar Flash Alerts (4 cols) */}
          <div className="app-card md:col-span-4 p-5 sm:p-8 rounded-[28px] sm:rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FFF3E0] text-[#fe6708] flex items-center justify-center font-bold mb-3 sm:mb-4">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-[#16241C] mb-2">
                Geo-Radar Notifikasi Instan
              </h3>
              <p className="text-[#5A6960] text-xs leading-relaxed">
                Dapatkan notifikasi otomatis saat toko atau resto di sekitar radius 1-3 km mulai merilis makanan surplus sore dan malam hari.
              </p>
            </div>

            <div className="mt-5 sm:mt-6 flex items-center gap-2 text-xs font-black text-[#fe6708]">
              <Clock className="w-4 h-4" />
              <span>Flash Sale Sore & Malam Hari</span>
            </div>
          </div>

          {/* Card 5: Gamifikasi & Laporan ESG (4 cols) */}
          <div className="app-card md:col-span-4 p-5 sm:p-8 rounded-[28px] sm:rounded-3xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#E8F4DA] text-[#105e3a] flex items-center justify-center font-bold mb-3 sm:mb-4">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-[#16241C] mb-2">
                Eco-Points & Laporan ESG
              </h3>
              <p className="text-[#5A6960] text-xs leading-relaxed">
                Tukar Eco-Points dengan voucher diskon, dan bagi mitra bisnis dapatkan laporan audit reduksi jejak karbon berkala.
              </p>
            </div>

            <div className="mt-5 sm:mt-6 flex items-center justify-between text-xs pt-3 border-t border-[#DCE4D3]">
              <span className="font-bold text-[#105e3a]">Eco-Rewards Terintegrasi</span>
              <span className="font-black bg-[#E8F4DA] text-[#105e3a] px-2 py-0.5 rounded-md">ESG Ready</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
