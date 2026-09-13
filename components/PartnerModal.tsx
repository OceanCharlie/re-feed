'use client';

import React, { useState } from 'react';
import { X, Store, CheckCircle, Sparkles, Building2, Phone, Mail, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BrandMarkSvg } from './BrandLogo';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnerModal({ isOpen, onClose }: PartnerModalProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    category: 'bakery',
    ownerName: '',
    phone: '',
    email: '',
    city: 'Jakarta',
    estimatedPortions: '15',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/75 animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="relative w-full max-w-xl p-5 sm:p-8 bg-white rounded-[28px] sm:rounded-3xl shadow-2xl border border-[#DCE4D3] max-h-[92vh] overflow-y-auto no-scrollbar text-[#16241C]"
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

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-4 sm:mb-6 pr-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4DA] text-[#105e3a] text-xs font-black mb-2">
                <Store className="w-3.5 h-3.5 text-[#105e3a]" />
                Kemitraan Merchant
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#16241C] tracking-tight">
                Daftar Jadi Mitra ReFeed
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6960] mt-1">
                Ubah surplus makanan menjadi omzet baru & dapatkan sertifikasi bisnis ramah lingkungan.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-black text-[#16241C] mb-1">
                    Nama Usaha / Brand *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Roti Manis Bakery"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE4D3] bg-[#F6F5F0] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#105e3a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-[#16241C] mb-1">
                    Kategori Bisnis *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE4D3] bg-[#F6F5F0] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#105e3a]"
                  >
                    <option value="bakery">Bakery & Pastry</option>
                    <option value="restaurant">Restoran & Rumah Makan</option>
                    <option value="cafe">Cafe & Coffee Shop</option>
                    <option value="supermarket">Supermarket & Fresh Groceries</option>
                    <option value="wastehub">Waste Hub & Pengolahan Organik</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-black text-[#16241C] mb-1">
                    Nama Pemilik / PIC *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Lengkap Anda"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE4D3] bg-[#F6F5F0] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#105e3a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-[#16241C] mb-1">
                    Nomor WhatsApp / HP *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="081234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE4D3] bg-[#F6F5F0] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#105e3a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-black text-[#16241C] mb-1">
                    Email Bisnis
                  </label>
                  <input
                    type="email"
                    placeholder="mitra@usaha.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE4D3] bg-[#F6F5F0] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#105e3a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-[#16241C] mb-1">
                    Kota Operasional *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jakarta, Bandung, Surabaya, dll"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE4D3] bg-[#F6F5F0] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#105e3a]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-[#16241C] mb-1">
                  Estimasi Porsi Makanan Berlebih / Hari
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="3"
                    max="100"
                    value={formData.estimatedPortions}
                    onChange={(e) => setFormData({ ...formData, estimatedPortions: e.target.value })}
                    className="w-full h-2.5 bg-[#E8EDE5] rounded-lg accent-[#105e3a]"
                  />
                  <span className="px-3 py-1 bg-[#E8F4DA] text-[#105e3a] font-black text-xs rounded-xl border border-[#C5D3B8] whitespace-nowrap shrink-0">
                    {formData.estimatedPortions} Porsi/hari
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-app-primary w-full py-3.5 px-6 text-white font-black text-xs sm:text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Kirim Pendaftaran Mitra</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#5A6960] mt-1.5 leading-tight">
                Tanpa biaya pendaftaran. Tim ReFeed akan menghubungi via WhatsApp dalam 1x24 jam kerja.
              </p>
            </form>
          </>
        ) : (
          <div className="py-6 sm:py-8 text-center space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#E8F4DA] rounded-full flex items-center justify-center mx-auto text-[#105e3a] animate-bounce">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#105e3a]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#16241C]">
              Pendaftaran Berhasil Dikirim! 🎉
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6960] max-w-md mx-auto leading-relaxed">
              Terima kasih <strong className="text-[#105e3a]">{formData.ownerName}</strong> dari <strong className="text-[#105e3a]">{formData.businessName}</strong>. Tim onboarding ReFeed akan segera menghubungi nomor <strong className="text-[#16241C]">{formData.phone}</strong> untuk verifikasi dan aktivasi dashboard merchant.
            </p>

            <div className="pt-3">
              <button
                onClick={handleReset}
                className="btn-app-primary px-7 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer active:scale-95"
              >
                Selesai
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
