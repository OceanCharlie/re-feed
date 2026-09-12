'use client';

import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenDownloadModal: () => void;
  onOpenPartnerModal: () => void;
}

export default function Footer({ onOpenDownloadModal, onOpenPartnerModal }: FooterProps) {
  return (
    <footer className="bg-[#FAF9F6] border-t border-[#E8EDE5] py-8 sm:py-10 text-[#57655B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Brand & Motto */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link href="/">
              <BrandLogo markSize={26} textColor="#141A16" showTagline={false} />
            </Link>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="text-xs text-[#57655B] font-medium">
              What we recover today, feeds tomorrow!
            </span>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-[#141A16]">
            <Link href="/behind-refeed" className="hover:text-[#105e3a] transition-colors py-1">
              Tentang Kami
            </Link>
            <Link href="/behind-refeed" className="hover:text-[#105e3a] transition-colors py-1">
              Karir
            </Link>
            <Link href="/#faq" className="hover:text-[#105e3a] transition-colors py-1">
              FAQ
            </Link>
            <a href="mailto:pkmkc.refeed@gmail.com" className="hover:text-[#105e3a] transition-colors py-1">
              Kontak
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-[#141A16]">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white border border-[#E8EDE5] flex items-center justify-center text-[#57655B] hover:text-[#105e3a] hover:border-[#105e3a] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white border border-[#E8EDE5] flex items-center justify-center text-[#57655B] hover:text-[#105e3a] hover:border-[#105e3a] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            {/* Email */}
            <a
              href="mailto:pkmkc.refeed@gmail.com"
              className="w-8 h-8 rounded-full bg-white border border-[#E8EDE5] flex items-center justify-center text-[#57655B] hover:text-[#105e3a] hover:border-[#105e3a] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
