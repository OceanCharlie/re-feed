'use client';

import React, { useState, useEffect } from 'react';
import { QrCode } from 'lucide-react';
import { GooglePlayIcon } from './BrandLogo';

interface FloatingCtaProps {
  onOpenDownloadModal: () => void;
}

export default function FloatingCta({ onOpenDownloadModal }: FloatingCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center gap-1.5 p-1.5 bg-[#111c15]/95 backdrop-blur-md border border-[#8fc22a]/30 rounded-full shadow-2xl shadow-black/40 [box-shadow:0_0_24px_-4px_rgba(143,194,42,0.4)]">
        <a
          href="https://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-gradient-btn text-white text-xs font-black rounded-full hover:opacity-95 transition-all active:scale-95 shadow-xs"
        >
          <div className="w-4 h-4 rounded bg-white flex items-center justify-center shrink-0">
            <GooglePlayIcon size={12} />
          </div>
          <span>Google Play</span>
        </a>

        <button
          onClick={onOpenDownloadModal}
          className="p-2 text-[#E8F4DA] hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer active:scale-95"
          title="Scan QR Code / Unduh"
          aria-label="Scan QR Code / Unduh"
        >
          <QrCode className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
