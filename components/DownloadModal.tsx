'use client';

import React from 'react';
import { X, Apple, Play, QrCode, CheckCircle2, ShieldCheck, Download, Clock } from 'lucide-react';
import { BrandMarkSvg } from './BrandLogo';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg p-6 sm:p-8 bg-white rounded-[32px] shadow-2xl border border-[#DCE4D3] overflow-hidden text-[#16241C]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#16241C] rounded-full hover:bg-[#F6F5F0] transition-colors cursor-pointer"
          aria-label="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-splash text-white shadow-lg mb-3">
            <BrandMarkSvg size={30} color="#ffffff" />
          </div>
          <h3 className="text-2xl font-black text-[#16241C] tracking-tight">
            Unduh Aplikasi ReFeed
          </h3>
          <p className="text-xs sm:text-sm text-[#5A6960] mt-1">
            Mulai selamatkan makanan lezat, hemat s.d 70%, dan raih Eco-Points harian!
          </p>
        </div>

        {/* QR Code & Android Badge */}
        <div className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-2xl bg-[#F6F5F0] border border-[#DCE4D3] mb-5">
          {/* QR Code */}
          <div className="w-28 h-28 bg-white rounded-xl p-2 shadow-xs flex flex-col items-center justify-center border border-[#DCE4D3] shrink-0">
            <div className="grid grid-cols-5 gap-1 w-full h-full p-1 bg-[#16241C] rounded-lg">
              <div className="bg-white rounded-xs col-span-2 row-span-2 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-[#105e3a] rounded-xs"></div>
              </div>
              <div className="bg-[#8fc22a] rounded-xs"></div>
              <div className="bg-white rounded-xs col-span-2 row-span-2 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-[#105e3a] rounded-xs"></div>
              </div>
              <div className="bg-[#8fc22a] rounded-xs"></div>
              <div className="bg-white rounded-xs"></div>
              <div className="bg-[#105e3a] rounded-xs"></div>
              <div className="bg-white rounded-xs col-span-2 row-span-2 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-[#105e3a] rounded-xs"></div>
              </div>
              <div className="bg-[#8fc22a] rounded-xs"></div>
              <div className="bg-white rounded-xs"></div>
              <div className="bg-[#8fc22a] rounded-xs"></div>
            </div>
            <span className="text-[8px] font-black text-[#5A6960] mt-1 uppercase tracking-wider">Scan Kamera</span>
          </div>

          <div className="text-left space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#105e3a]">
              <QrCode className="w-4 h-4 text-[#105e3a]" />
              <span>Pindai langsung lewat kamera smartphone</span>
            </div>
            <p className="text-xs text-[#5A6960] leading-relaxed">
              Arahkan kamera untuk otomatis membuka halaman unduhan aplikasi resmi ReFeed di perangkat Android.
            </p>
            <div className="flex items-center gap-1 text-[11px] text-[#105e3a] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Aplikasi Bebas Iklan & Aman</span>
            </div>
          </div>
        </div>

        {/* Buttons List */}
        <div className="space-y-2.5">
          {/* 1. Google Play Store (Active) */}
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 bg-gradient-btn hover:opacity-95 text-white rounded-2xl flex items-center justify-between shadow-md hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-3">
              <Play className="w-5 h-5 fill-white text-white group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-[9px] uppercase tracking-wider text-[#DCE4D3]">Tersedia Sekarang</div>
                <div className="text-sm font-black tracking-wide">Google Play Store</div>
              </div>
            </div>
            <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full font-bold">
              Unduh
            </span>
          </a>

          {/* 2. Direct APK Download (Active) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://play.google.com', '_blank');
            }}
            className="w-full py-3 px-5 bg-[#F6F5F0] hover:bg-[#E8F4DA] text-[#16241C] rounded-2xl flex items-center justify-between border border-[#DCE4D3] transition-all group"
          >
            <div className="flex items-center gap-3">
              <Download className="w-4 h-4 text-[#105e3a] group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-[9px] uppercase tracking-wider text-[#5A6960]">Alternatif Android</div>
                <div className="text-xs font-black">Unduh File APK (.apk)</div>
              </div>
            </div>
            <span className="text-[10px] bg-white border border-[#DCE4D3] px-2 py-0.5 rounded font-bold text-[#105e3a]">
              Versi 1.0.4
            </span>
          </a>

          {/* 3. Apple App Store (Coming Soon) */}
          <div className="w-full py-3 px-5 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-between border border-slate-200 cursor-not-allowed">
            <div className="flex items-center gap-3">
              <Apple className="w-5 h-5 fill-slate-400" />
              <div className="text-left">
                <div className="text-[9px] uppercase tracking-wider text-slate-400">Apple iOS</div>
                <div className="text-xs font-bold text-slate-600">Apple App Store</div>
              </div>
            </div>
            <span className="text-[10px] bg-amber-100 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
              <Clock className="w-3 h-3 text-amber-700" />
              Segera Hadir
            </span>
          </div>
        </div>

        {/* Bottom trust note */}
        <div className="mt-4 pt-3 border-t border-[#F6F5F0] flex items-center justify-center gap-4 text-xs text-[#5A6960] font-bold">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#105e3a]" /> 100% Gratis
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#105e3a]" /> Diskon s.d 70%
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#105e3a]" /> Eco Points
          </span>
        </div>
      </div>
    </div>
  );
}
