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
            Unduh Aplikasi ReFeed
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
                alt="QR Code untuk mengunduh aplikasi ReFeed"
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
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 px-4 sm:px-5 bg-gradient-btn hover:opacity-95 text-white rounded-2xl flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
        >
          <Download className="w-5 h-5" />
          <span className="text-sm sm:text-base font-black tracking-wide">Unduh APK Langsung</span>
        </a>

        {/* Trust note */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-[#5A6960] font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-[#105e3a]" />
          <span>100% Gratis &middot; Aman untuk Android</span>
        </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
