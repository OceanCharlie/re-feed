import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenDownloadModal?: () => void;
  onOpenPartnerModal?: () => void;
}

export default function Footer({}: FooterProps) {
  return (
    <footer className="border-t border-[#C8D9C2]/50 py-8 sm:py-10 text-[#57655B] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#8fc22a]/60 to-transparent" />
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
              href="https://www.instagram.com/pkmkc.refeed/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-[#57655B] hover:text-[#105e3a] hover:border-[#8fc22a]/60 hover:shadow-[0_0_14px_-2px_rgba(143,194,42,0.5)] transition-all"
              aria-label="Instagram"
              title="Ikuti Instagram @pkmkc.refeed"
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
              className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-[#57655B] hover:text-[#105e3a] hover:border-[#8fc22a]/60 hover:shadow-[0_0_14px_-2px_rgba(143,194,42,0.5)] transition-all"
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
              className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-[#57655B] hover:text-[#105e3a] hover:border-[#8fc22a]/60 hover:shadow-[0_0_14px_-2px_rgba(143,194,42,0.5)] transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Supporting Institutional Logos Strip */}
        <div className="mt-8 pt-6 border-t border-[#E8EDE5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#57655B]">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-semibold text-xs text-[#57655B]">
              Didukung oleh:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 opacity-85 hover:opacity-100 transition-opacity">
              <a href="https://www.kemendikdasmen.go.id/" target="_blank" rel="noopener noreferrer" className="relative h-6 w-6 hover:scale-110 transition-transform cursor-pointer" title="Kementerian Pendidikan Dasar dan Menengah">
                <Image src="/images/Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg.webp" alt="Kemendikbudristek" fill className="object-contain" unoptimized />
              </a>
              <a href="https://untar.ac.id/" target="_blank" rel="noopener noreferrer" className="relative h-6 w-20 hover:scale-110 transition-transform cursor-pointer" title="Universitas Tarumanagara">
                <Image src="/images/Logo-Untar-new.webp" alt="Universitas Tarumanagara" fill className="object-contain" unoptimized />
              </a>
              <a href="https://dikti.kemdikbud.go.id/" target="_blank" rel="noopener noreferrer" className="relative h-6 w-24 hover:scale-110 transition-transform cursor-pointer" title="Direktorat Jenderal Pendidikan Tinggi">
                <Image src="/images/dikti.webp" alt="Diktisaintek" fill className="object-contain" unoptimized />
              </a>
              <a href="https://simbelmawa.kemdikbud.go.id/" target="_blank" rel="noopener noreferrer" className="relative h-6 w-16 hover:scale-110 transition-transform cursor-pointer" title="Program Kreativitas Mahasiswa">
                <Image src="/images/Logo PKM Hor - Warna.9d2ca75b.webp" alt="PKM" fill className="object-contain" unoptimized />
              </a>
              <a href="https://simbelmawa.kemdikbud.go.id/" target="_blank" rel="noopener noreferrer" className="relative h-6 w-24 hover:scale-110 transition-transform cursor-pointer" title="SIMBelmawa">
                <Image src="/images/logo-simbelmawa.webp" alt="SIMBelmawa" fill className="object-contain" unoptimized />
              </a>
            </div>
          </div>
          <span className="text-[11px] text-[#57655B]/80 text-center sm:text-right">
            &copy; {new Date().getFullYear()} ReFeed. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
