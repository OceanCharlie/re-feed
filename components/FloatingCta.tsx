'use client';

import React, { useState, useEffect } from 'react';
import { Play, QrCode } from 'lucide-react';

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
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-2 p-1.5 bg-[#111c15]/95 backdrop-blur-md border border-white/20 rounded-full shadow-2xl shadow-black/40">
        <a
          href="https://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-btn text-white text-xs font-black rounded-full hover:opacity-95 transition-all"
        >
          <Play className="w-3.5 h-3.5 fill-white text-white" />
          <span>Google Play</span>
        </a>

        <button
          onClick={onOpenDownloadModal}
          className="p-2 text-[#E8F4DA] hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          title="Scan QR Code"
          aria-label="Scan QR Code"
        >
          <QrCode className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
