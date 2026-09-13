'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Store, 
  Menu, 
  X, 
  ShoppingBag, 
  Smartphone, 
  Leaf, 
  Users, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenDownloadModal?: () => void;
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
    { label: 'Solusi', href: '/#solutions', icon: ShoppingBag },
    { label: 'Cara Kerja', href: '/#how-it-works', icon: Sparkles },
    { label: 'Aplikasi', href: '/#app', icon: Smartphone },
    { label: 'Dampak Lingkungan', href: '/#impact', icon: Leaf },
    { label: 'Mitra Resto', href: '/#merchant', icon: Store },
    { label: 'Behind ReFeed', href: '/behind-refeed', icon: Users },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/75 backdrop-blur-xl py-2.5 sm:py-3 shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset,0_8px_28px_-12px_rgba(16,94,58,0.22)] border-b border-[#C8D9C2]/60'
          : 'bg-white/40 backdrop-blur-md py-3.5 sm:py-4 border-b border-white/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Link href="/" className="group" onClick={() => setMobileMenuOpen(false)}>
            <BrandLogo markSize={30} textColor="#141A16" showTagline={false} />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6">
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

        {/* Desktop Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenPartnerModal}
            className="btn-app-primary px-4 py-2 text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Store className="w-4 h-4" />
            <span>Gabung Mitra</span>
          </button>
        </div>

        {/* Mobile Menu Toggle & Action Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenPartnerModal}
            className="btn-app-primary px-3 py-1.5 text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-2xs cursor-pointer active:scale-95"
            aria-label="Gabung Mitra"
          >
            <Store className="w-3.5 h-3.5" />
            <span>Mitra</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 flex items-center justify-center text-[#141A16] rounded-xl glass-panel hover:bg-[#EBF5E4]/70 transition-colors cursor-pointer active:scale-95"
            aria-label={mobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#105e3a]" /> : <Menu className="w-5 h-5 text-[#141A16]" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown with Modern Card Styling */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/85 backdrop-blur-2xl border-t border-[#C8D9C2]/60 px-4 pt-3 pb-6 space-y-4 shadow-xl max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 text-sm font-bold text-[#141A16] hover:text-[#105e3a] hover:bg-[#EBF5E4] rounded-xl transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#EBF5E4] text-[#105e3a] flex items-center justify-center group-hover:bg-[#105e3a] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{link.label}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#105e3a] group-hover:translate-x-0.5 transition-all" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E8EDE5] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPartnerModal();
              }}
              className="btn-app-primary w-full py-3 px-4 text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-2xs cursor-pointer active:scale-98"
            >
              <Store className="w-4 h-4 text-white" />
              <span>Gabung Mitra Usaha Kuliner</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
