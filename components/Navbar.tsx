'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Store, Menu, X, Play } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenDownloadModal: () => void;
  onOpenPartnerModal: () => void;
}

export default function Navbar({ onOpenDownloadModal, onOpenPartnerModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solusi', href: '/#solutions' },
    { label: 'Cara Kerja', href: '/#how-it-works' },
    { label: 'Aplikasi', href: '/#app' },
    { label: 'Dampak Lingkungan', href: '/#impact' },
    { label: 'Mitra Resto', href: '/#merchant' },
    { label: 'Behind ReFeed', href: '/behind-refeed' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FCFAF7]/90 backdrop-blur-xl py-3 shadow-sm border-b border-[#E8EDE5]' 
          : 'bg-[#FCFAF7] py-4 border-b border-[#E8EDE5]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Version Pill */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group">
            <BrandLogo markSize={32} textColor="#141A16" showTagline={false} />
          </Link>
          <div className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EBF5E4] text-[10px] font-bold text-[#105e3a] border border-[#C8D9C2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#105e3a] animate-pulse" />
            <span>v1.0 di Android</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs sm:text-sm font-semibold text-[#57655B] hover:text-[#105e3a] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenPartnerModal}
            className="px-4 py-2 text-xs sm:text-sm font-bold text-[#105e3a] hover:bg-[#EBF5E4] rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Store className="w-4 h-4" />
            <span>Gabung Mitra</span>
          </button>

          <button
            onClick={onOpenDownloadModal}
            className="btn-app-primary px-4.5 py-2 text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-white text-white" />
            <span>Google Play</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onOpenDownloadModal}
            className="btn-app-primary px-3 py-1.5 text-xs font-bold rounded-xl flex items-center gap-1 shadow-xs"
          >
            <Play className="w-3 h-3 fill-white text-white" />
            Unduh
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#141A16] rounded-xl hover:bg-[#EBF5E4] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#105e3a]" /> : <Menu className="w-5 h-5 text-[#141A16]" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FCFAF7] border-t border-[#E8EDE5] px-4 pt-3 pb-5 mt-2 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-[#141A16] hover:text-[#105e3a] hover:bg-[#EBF5E4] rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-[#E8EDE5] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPartnerModal();
              }}
              className="w-full py-2.5 text-xs font-bold text-[#105e3a] bg-white rounded-xl border border-[#E8EDE5]"
            >
              Gabung Mitra Merchant
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownloadModal();
              }}
              className="btn-app-primary w-full py-2.5 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              Unduh di Google Play
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
