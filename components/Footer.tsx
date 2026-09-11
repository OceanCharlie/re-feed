'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenDownloadModal: () => void;
  onOpenPartnerModal: () => void;
}

export default function Footer({ onOpenDownloadModal, onOpenPartnerModal }: FooterProps) {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E8EDE5] py-14 text-[#57655B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E8EDE5]">
          {/* Brand */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link href="/">
              <BrandLogo markSize={30} textColor="#141A16" showTagline={false} />
            </Link>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="text-xs text-[#57655B]">
              Aplikasi Penyelamat Pangan & Nol Limbah Indonesia
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-[#141A16]">
            <Link href="/#solutions" className="hover:text-[#105e3a] transition-colors">
              Solusi
            </Link>
            <Link href="/#how-it-works" className="hover:text-[#105e3a] transition-colors">
              Cara Kerja
            </Link>
            <Link href="/#app" className="hover:text-[#105e3a] transition-colors">
              Layar Aplikasi
            </Link>
            <Link href="/#impact" className="hover:text-[#105e3a] transition-colors">
              Dampak
            </Link>
            <Link href="/#merchant" className="hover:text-[#105e3a] transition-colors">
              Mitra Resto
            </Link>
            <Link href="/behind-refeed" className="text-[#105e3a] hover:underline font-bold">
              Behind ReFeed
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#57655B]">
          <div>
            © {new Date().getFullYear()} ReFeed Indonesia. Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center gap-3 text-[11px] text-[#57655B]">
            <span>Universitas Tarumanagara (UNTAR)</span>
            <span>•</span>
            <span>Jakarta, Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
