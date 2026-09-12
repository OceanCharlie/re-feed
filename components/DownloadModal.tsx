'use client';

import React from 'react';
import { X, QrCode, CheckCircle2, ShieldCheck, Download, Smartphone, ArrowRight } from 'lucide-react';
import { BrandMarkSvg, GooglePlayIcon } from './BrandLogo';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/65 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg p-5 sm:p-8 bg-white rounded-[28px] sm:rounded-[32px] shadow-2xl border border-[#DCE4D3] overflow-hidden max-h-[92vh] overflow-y-auto no-scrollbar text-[#16241C]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 text-slate-400 hover:text-[#16241C] rounded-full hover:bg-[#F6F5F0] transition-colors cursor-pointer active:scale-90 z-20"
          aria-label="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-5 sm:mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-splash text-white shadow-md mb-2.5 sm:mb-3">
            <BrandMarkSvg size={26} color="#ffffff" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#16241C] tracking-tight">
            Unduh Aplikasi ReFeed
          </h3>
          <p className="text-xs sm:text-sm text-[#5A6960] mt-1 max-w-sm mx-auto">
            Mulai selamatkan makanan lezat, hemat s.d 70%, dan salurkan sisa organik dapur jadi energi bersih!
          </p>
        </div>

        {/* Desktop QR Code View (Hidden on Mobile for cleaner experience) */}
        <div className="hidden sm:flex items-center gap-5 p-4 rounded-2xl bg-[#F6F5F0] border border-[#DCE4D3] mb-5">
          {/* QR Code */}
          <div className="w-24 h-24 bg-white rounded-xl p-2 shadow-xs flex flex-col items-center justify-center border border-[#DCE4D3] shrink-0">
            <div className="grid grid-cols-5 gap-1 w-full h-full p-1 bg-[#16241C] rounded-lg">
              <div className="bg-white rounded-xs col-span-2 row-span-2 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#105e3a] rounded-xs"></div>
              </div>
              <div className="bg-[#8fc22a] rounded-xs"></div>
              <div className="bg-white rounded-xs col-span-2 row-span-2 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#105e3a] rounded-xs"></div>
              </div>
              <div className="bg-[#8fc22a] rounded-xs"></div>
              <div className="bg-white rounded-xs"></div>
              <div className="bg-[#105e3a] rounded-xs"></div>
              <div className="bg-white rounded-xs col-span-2 row-span-2 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#105e3a] rounded-xs"></div>
              </div>
              <div className="bg-[#8fc22a] rounded-xs"></div>
              <div className="bg-white rounded-xs"></div>
              <div className="bg-[#8fc22a] rounded-xs"></div>
            </div>
            <span className="text-[8px] font-black text-[#5A6960] mt-1 uppercase tracking-wider">Scan Kamera</span>
          </div>

          <div className="text-left space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#105e3a]">
              <QrCode className="w-4 h-4 text-[#105e3a]" />
              <span>Pindai langsung lewat kamera smartphone</span>
            </div>
            <p className="text-xs text-[#5A6960] leading-relaxed">
              Arahkan kamera smartphone Android Anda ke kode QR untuk membuka halaman instalasi ReFeed.
            </p>
            <div className="flex items-center gap-1 text-[11px] text-[#105e3a] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Aplikasi Bebas Iklan, Aman & Terverifikasi</span>
            </div>
          </div>
        </div>

        {/* Mobile Quick Direct Info Note */}
        <div className="sm:hidden p-3 rounded-2xl bg-[#EBF5E4] border border-[#C8D9C2] mb-3.5 text-left flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#105e3a] text-white flex items-center justify-center shrink-0">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#105e3a]">Instal Langsung di HP Android</div>
            <div className="text-[11px] text-[#57655B]">Pilih metode instalasi di bawah ini</div>
          </div>
        </div>

        {/* Download Options List (Android Only) */}
        <div className="space-y-3">
          {/* 1. Google Play Store (Primary) */}
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-4 sm:px-5 bg-gradient-btn hover:opacity-95 text-white rounded-2xl flex items-center justify-between shadow-md hover:shadow-lg transition-all active:scale-98 group cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-xs">
                <GooglePlayIcon size={24} />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-[#DCE4D3] font-bold">Resmi & Terverifikasi</div>
                <div className="text-sm sm:text-base font-black tracking-wide leading-tight">Google Play Store</div>
              </div>
            </div>
            <span className="text-xs bg-white/20 px-3.5 py-1.5 rounded-xl font-black flex items-center gap-1 shrink-0">
              <span>Unduh</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* 2. Direct APK Download (Alternative) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://play.google.com', '_blank');
            }}
            className="w-full py-3.5 px-4 sm:px-5 bg-[#F6F5F0] hover:bg-[#E8F4DA] text-[#16241C] rounded-2xl flex items-center justify-between border border-[#DCE4D3] transition-all active:scale-98 group cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#DCE4D3] flex items-center justify-center shrink-0">
                <Download className="w-4 h-4 text-[#105e3a] group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-[#5A6960] font-semibold">Instal Manual</div>
                <div className="text-xs sm:text-sm font-black">Unduh Paket APK Langsung (.apk)</div>
              </div>
            </div>
            <span className="text-[10px] bg-white border border-[#DCE4D3] px-2.5 py-1 rounded-lg font-bold text-[#105e3a] shrink-0">
              v1.0 Ready
            </span>
          </a>
        </div>

        {/* Bottom trust note */}
        <div className="mt-5 pt-3.5 border-t border-[#F6F5F0] flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-[#5A6960] font-bold">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#105e3a]" /> 100% Gratis
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#105e3a]" /> Diskon s.d 70%
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#105e3a]" /> Eco-Points Harian
          </span>
        </div>
      </div>
    </div>
  );
}
