'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ShieldCheck } from 'lucide-react';
import { BrandMarkSvg } from './BrandLogo';
import { APK_DOWNLOAD_URL } from '@/lib/download-link';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [showGuide, setShowGuide] = React.useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.12 }}
            className="relative z-10 w-full max-w-lg p-5 sm:p-8 bg-white/90 backdrop-blur-2xl rounded-[28px] sm:rounded-[32px] shadow-[0_30px_80px_-20px_rgba(16,94,58,0.35),0_0_0_1px_rgba(143,194,42,0.15)] border border-white/80 overflow-hidden max-h-[92vh] overflow-y-auto no-scrollbar text-[#16241C]"
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
            Unduh Aplikasi Re-Feed
          </h3>
          <p className="text-xs sm:text-sm text-[#5A6960] mt-1 max-w-sm mx-auto">
            Pindai kode QR dengan kamera HP untuk instal
          </p>
        </div>

        {/* Big QR Code */}
        <div className="flex flex-col items-center mb-5">
          <div className="w-52 h-52 sm:w-60 sm:h-60 bg-white rounded-2xl p-3 shadow-xs border border-[#DCE4D3]">
            <div className="relative w-full h-full">
              <Image
                src="/images/qr-refeed-apk.svg"
                alt="QR Code untuk mengunduh aplikasi Re-Feed"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <span className="text-[11px] font-bold text-[#5A6960] mt-2 uppercase tracking-wider">Scan dengan Kamera HP</span>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-[#E8E4DA]" />
          <span className="text-[11px] font-bold text-[#8A968D] uppercase tracking-wider">atau</span>
          <div className="h-px flex-1 bg-[#E8E4DA]" />
        </div>

        {/* Direct Download Button */}
        <a
          href={APK_DOWNLOAD_URL}
          download="refeed-app.apk"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 px-4 sm:px-5 bg-gradient-btn hover:opacity-95 text-white rounded-2xl flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer group"
        >
          <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          <span className="text-sm sm:text-base font-black tracking-wide">Unduh APK Langsung</span>
        </a>

        {/* Trust note */}
        <div className="mt-3.5 flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-[#5A6960] font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-[#105e3a]" />
          <span>100% Gratis &middot; Aman untuk Android</span>
        </div>

        {/* Install Guide Accordion */}
        <div className="mt-4 pt-3.5 border-t border-[#E8E4DA]/80">
          <button
            type="button"
            onClick={() => setShowGuide(!showGuide)}
            className="w-full flex items-center justify-between text-xs font-bold text-[#105e3a] hover:text-[#0b462a] transition-colors py-1 cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              <span>❓ Cara instal APK di HP Android</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#5A6960] bg-[#F4F2EC] px-2 py-0.5 rounded-md">
              {showGuide ? 'Tutup' : 'Lihat'}
            </span>
          </button>

          {showGuide && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2.5 p-3 sm:p-3.5 bg-[#F6F5F0] rounded-xl text-left text-xs text-[#3E4D43] space-y-2 border border-[#E8E4DA]"
            >
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-[#105e3a] text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">1</span>
                <p>Klik <strong>Unduh APK</strong> atau scan QR, tunggu unduhan selesai.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-[#105e3a] text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">2</span>
                <p>Buka notifikasi unduhan atau buka file <strong>refeed-app.apk</strong> di Pengelola File.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-[#105e3a] text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">3</span>
                <p>Jika muncul peringatan keamanan, pilih <strong>Setelan</strong> lalu aktifkan <strong>Izinkan dari sumber ini</strong>.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-[#105e3a] text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">4</span>
                <p>Tekan <strong>Instal</strong> dan aplikasi Re-Feed siap digunakan!</p>
              </div>
            </motion.div>
          )}
        </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
