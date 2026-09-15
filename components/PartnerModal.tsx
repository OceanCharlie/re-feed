'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Store, CheckCircle, Send, Loader2, AlertCircle, MailCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORY_MAP: Record<string, string> = {
  bakery: 'Bakery & Pastry',
  restaurant: 'Restoran & Rumah Makan',
  cafe: 'Cafe & Coffee Shop',
  supermarket: 'Supermarket & Fresh Groceries',
  wastehub: 'Waste Hub & Pengolahan Organik',
};

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isNeedsActivation, setIsNeedsActivation] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const categoryLabel = CATEGORY_MAP[formData.category] || formData.category;
    const submissionTime = new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Jakarta',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    try {
      const response = await fetch('https://formsubmit.co/ajax/pkmkc.refeed@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `[Re-Feed Mitra] Pendaftaran Baru - ${formData.businessName}`,
          _template: 'table',
          _captcha: 'false',
          'Nama Usaha / Brand': formData.businessName,
          'Kategori Bisnis': categoryLabel,
          'Nama Pemilik / PIC': formData.ownerName,
          'Nomor WhatsApp / HP': formData.phone,
          'Email Bisnis': formData.email || '-',
          'Kota Operasional': formData.city,
          'Estimasi Porsi Makanan Berlebih / Hari': `${formData.estimatedPortions} Porsi/hari`,
          'Waktu Pendaftaran': `${submissionTime} WIB`,
        }),
      });

      const result = await response.json().catch(() => null);

      if (result && typeof result.message === 'string' && result.message.toLowerCase().includes('activation')) {
        setIsNeedsActivation(true);
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
        return;
      }

      if (!response.ok || (result && result.success === 'false')) {
        throw new Error(result?.message || `Pengiriman gagal (${response.status})`);
      }

      setIsNeedsActivation(false);
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
    } catch (err: unknown) {
      console.error('Error submitting partner form:', err);
      const errText = err instanceof Error ? err.message : '';
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Terjadi kesalahan sistem. Silakan coba lagi atau hubungi kami via WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsNeedsActivation(false);
    setErrorMessage(null);
    setFormData({
      businessName: '',
      category: 'bakery',
      ownerName: '',
      phone: '',
      email: '',
      city: 'Jakarta',
      estimatedPortions: '15',
    });
    onClose();
  };

  const handleClose = () => {
    setErrorMessage(null);
    setIsSubmitted(false);
    setIsNeedsActivation(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.12 }}
            className="relative z-10 w-full max-w-xl p-5 sm:p-8 bg-white/90 backdrop-blur-2xl rounded-[28px] sm:rounded-3xl shadow-[0_30px_80px_-20px_rgba(16,94,58,0.35),0_0_0_1px_rgba(143,194,42,0.15)] border border-white/80 max-h-[92vh] overflow-y-auto no-scrollbar text-[#16241C]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
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
                Daftar Jadi Mitra Re-Feed
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE4D3] bg-white/70 backdrop-blur-sm text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-[#16241C] mb-1">
                    Kategori Bisnis *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE4D3] bg-white/70 backdrop-blur-sm text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE4D3] bg-white/70 backdrop-blur-sm text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE4D3] bg-white/70 backdrop-blur-sm text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE4D3] bg-white/70 backdrop-blur-sm text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE4D3] bg-white/70 backdrop-blur-sm text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
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

              {errorMessage && (
                <div className="p-3.5 bg-red-50/90 border border-red-200 rounded-2xl flex items-start gap-2.5 text-xs text-red-800">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <p className="font-semibold leading-snug">{errorMessage}</p>
                    <p className="text-[11px] text-red-600">
                      Anda juga dapat mendaftar langsung via email ke{' '}
                      <a
                        href="mailto:pkmkc.refeed@gmail.com?subject=Pendaftaran%20Mitra%20Re-Feed"
                        className="font-bold underline hover:text-red-900"
                      >
                        pkmkc.refeed@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-app-primary w-full py-3.5 px-6 text-white font-black text-xs sm:text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Mengirim Pendaftaran ke Tim Re-Feed...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Kirim Pendaftaran Mitra</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-[#5A6960] mt-1.5 leading-tight">
                Tanpa biaya pendaftaran. Tim Re-Feed akan menghubungi via WhatsApp dalam 1x24 jam kerja.
              </p>
            </form>
          </>
        ) : (
          <div className="py-6 sm:py-8 text-center space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#E8F4DA] rounded-full flex items-center justify-center mx-auto text-[#105e3a] animate-bounce">
              {isNeedsActivation ? (
                <MailCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#105e3a]" />
              ) : (
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#105e3a]" />
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#16241C]">
              {isNeedsActivation ? 'Email Aktivasi Telah Dikirim! 📬' : 'Pendaftaran Berhasil Dikirim! 🎉'}
            </h3>

            {isNeedsActivation ? (
              <div className="bg-[#F4F9EE] border border-[#C5D3B8] rounded-2xl p-4 text-left space-y-2.5 text-xs sm:text-sm text-[#3E4D43] max-w-md mx-auto">
                <div className="flex items-center gap-2 text-[#105e3a] font-black">
                  <MailCheck className="w-4 h-4 text-[#105e3a] shrink-0" />
                  <span>Aktivasi 1 Kali Diperlukan</span>
                </div>
                <p className="text-xs leading-relaxed text-[#5A6960]">
                  FormSubmit telah mengirimkan email konfirmasi ke <strong className="text-[#16241C]">pkmkc.refeed@gmail.com</strong>.
                </p>
                <p className="text-xs leading-relaxed text-[#5A6960]">
                  Buka email tersebut (cek folder <em>Inbox/Spam</em>) dan klik tombol <strong>&quot;Activate Form&quot;</strong>.
                </p>
                <p className="text-[11px] text-[#5A6960]/80 italic pt-1.5 border-t border-[#DCE4D3]">
                  Setelah diaktivasi 1 kali, seluruh pendaftaran mitra berikutnya akan otomatis langsung masuk ke email.
                </p>
              </div>
            ) : (
              <p className="text-xs sm:text-sm text-[#5A6960] max-w-md mx-auto leading-relaxed">
                Terima kasih <strong className="text-[#105e3a]">{formData.ownerName}</strong> dari <strong className="text-[#105e3a]">{formData.businessName}</strong>. Tim onboarding Re-Feed akan segera menghubungi nomor <strong className="text-[#16241C]">{formData.phone}</strong> untuk verifikasi dan aktivasi dashboard merchant.
              </p>
            )}

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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}