'use client';

import React from 'react';
import { Play, QrCode, Sparkles } from 'lucide-react';

interface DownloadCtaProps {
  onOpenDownloadModal: () => void;
  onOpenPartnerModal: () => void;
}

export default function DownloadCta({ onOpenDownloadModal, onOpenPartnerModal }: DownloadCtaProps) {
  return (
    <section className="py-20 bg-[#FCFAF7] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-[36px] bg-gradient-to-br from-[#105e3a] to-[#0b4d2e] text-white p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-xl border border-[#0b4d2e]">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-[#EBF5E4] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#8fc22a]" />
            Mulai Gerakan Hari Ini
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-tight text-white">
            Siap Makan Enak & Berhemat?
          </h2>

          <p className="text-sm sm:text-base text-[#EBF5E4]/90 max-w-lg mx-auto leading-relaxed">
            Unduh aplikasi ReFeed sekarang di Google Play atau pindai kode QR untuk menikmati makanan lezat berdiskon hingga 70%.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#FCFAF7] text-[#105e3a] font-black text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2.5 hover:-translate-y-0.5 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-[#105e3a] text-[#105e3a]" />
              <span>Download di Google Play</span>
            </a>

            <button
              onClick={onOpenDownloadModal}
              className="w-full sm:w-auto px-6 py-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <QrCode className="w-4 h-4 text-[#8fc22a]" />
              <span>Pindai QR / Unduh APK</span>
            </button>
          </div>

          <div className="pt-3 text-xs text-[#EBF5E4]/80">
            <span>🟢 Android v1.0 Ready</span>
            <span className="mx-2">•</span>
            <span>🍏 iOS (Apple App Store) Segera Hadir</span>
          </div>

        </div>

      </div>
    </section>
  );
}
