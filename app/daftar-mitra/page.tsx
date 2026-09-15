'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Store,
  CheckCircle2,
  Send,
  Loader2,
  AlertCircle,
  MailCheck,
  ArrowLeft,
  Building2,
  TrendingUp,
  Leaf,
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  Utensils,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CATEGORY_OPTIONS = [
  { id: 'bakery', label: 'Bakery & Pastry', desc: 'Roti, kue, croissant, donat, dan kue basah' },
  { id: 'restaurant', label: 'Restoran & Rumah Makan', desc: 'Menu makanan utama, lauk pauk, hidangan siap saji' },
  { id: 'cafe', label: 'Cafe & Coffee Shop', desc: 'Minuman kopi, snack, pastry pendamping' },
  { id: 'supermarket', label: 'Supermarket & Fresh Groceries', desc: 'Sayur, buah, produk segar dengan masa simpan terbatas' },
  { id: 'catering', label: 'Katering & Hotel', desc: 'Sisa hidangan prasmanan, paket katering acara' },
  { id: 'wastehub', label: 'Waste Hub & Pengolahan Organik', desc: 'Ampas dapur, sisa organik non-konsumsi untuk biogas/kompos' },
];

const SURPLUS_TYPES = [
  'Roti & Pastry',
  'Makanan Matang Siap Saji',
  'Sayur & Buah Segar',
  'Kue Basah & Dessert',
  'Bahan Makanan Mentah',
  'Residu / Sisa Dapur Organik',
];

export default function DaftarMitraPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    category: 'bakery',
    outletCount: '1',
    ownerName: '',
    role: 'Pemilik / Owner',
    phone: '',
    email: '',
    city: 'Jakarta',
    address: '',
    closingTime: '21:00',
    estimatedPortions: '20',
    surplusTypes: ['Roti & Pastry'],
    notes: '',
    agreeHygiene: true,
    agreeTerms: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isNeedsActivation, setIsNeedsActivation] = useState(false);

  // Dynamic Impact Calculator based on portions
  const portions = parseInt(formData.estimatedPortions, 10) || 15;
  const monthlyKgSaved = Math.round(portions * 0.35 * 30);
  const monthlyCo2Avoided = Math.round(monthlyKgSaved * 2.5);
  const monthlyPotentialOmzet = (portions * 15000 * 30).toLocaleString('id-ID');

  const handleTypeToggle = (type: string) => {
    setFormData((prev) => {
      const exists = prev.surplusTypes.includes(type);
      return {
        ...prev,
        surplusTypes: exists
          ? prev.surplusTypes.filter((t) => t !== type)
          : [...prev.surplusTypes, type],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const categoryObj = CATEGORY_OPTIONS.find((c) => c.id === formData.category);
    const categoryLabel = categoryObj ? categoryObj.label : formData.category;
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
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `[Re-Feed Mitra] Pendaftaran Baru - ${formData.businessName} (${categoryLabel})`,
          _template: 'table',
          _captcha: 'false',
          'Nama Usaha / Brand': formData.businessName,
          'Kategori Bisnis': categoryLabel,
          'Jumlah Outlet / Cabang': `${formData.outletCount} Outlet`,
          'Nama PIC / Pemilik': formData.ownerName,
          'Jabatan PIC': formData.role,
          'Nomor WhatsApp / HP': formData.phone,
          'Email Bisnis': formData.email || '-',
          'Kota Operasional': formData.city,
          'Alamat Lengkap Gerai': formData.address || '-',
          'Jam Tutup / Waktu Penjemputan': `${formData.closingTime} WIB`,
          'Estimasi Surplus Pangan': `${formData.estimatedPortions} Porsi / Hari`,
          'Jenis Pangan Surplus': formData.surplusTypes.join(', ') || '-',
          'Catatan Khusus': formData.notes || '-',
          'Waktu Pendaftaran': `${submissionTime} WIB`,
        }),
      });

      const result = await response.json().catch(() => null);

      if (result && typeof result.message === 'string' && result.message.toLowerCase().includes('activation')) {
        setIsNeedsActivation(true);
        setIsSubmitted(true);
        try {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.5 },
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
          particleCount: 110,
          spread: 85,
          origin: { y: 0.5 },
        });
      } catch {
        // ignore
      }
    } catch (err: unknown) {
      console.error('Error submitting partner form:', err);
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Terjadi kendala saat mengirimkan pendaftaran. Silakan coba kembali atau hubungi kami via WhatsApp.'
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
      outletCount: '1',
      ownerName: '',
      role: 'Pemilik / Owner',
      phone: '',
      email: '',
      city: 'Jakarta',
      address: '',
      closingTime: '21:00',
      estimatedPortions: '20',
      surplusTypes: ['Roti & Pastry'],
      notes: '',
      agreeHygiene: true,
      agreeTerms: true,
    });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#105e3a] selection:text-white bg-[#FCFDFB]">
      {/* 1. Header Navbar */}
      <Navbar />

      <main className="flex-grow pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb & Navigation Back */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#57655B] hover:text-[#105e3a] transition-colors py-1.5 px-3 rounded-xl hover:bg-[#EBF5E4]/80"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-left max-w-3xl mb-10 sm:mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5E4] text-[#105e3a] text-xs font-bold border border-[#C8D9C2]">
              <Store className="w-3.5 h-3.5" />
              <span>Program Kemitraan Merchant Re-Feed</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-black text-[#141A16] tracking-tight leading-tight">
              Daftar Jadi <span className="text-gradient-brand">Mitra Merchant</span>
            </h1>

            <p className="text-xs sm:text-base text-[#57655B] leading-relaxed">
              Ubah makanan berlebih berkualitas prima menjadi sumber omzet baru, tekan limbah organik ke TPA, dan perkuat reputasi bisnis ramah lingkungan Anda.
            </p>
          </div>

          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* LEFT COLUMN: The Dedicated Form (7 Columns) */}
            <div className="lg:col-span-7">
              <div className="app-card rounded-3xl p-5 sm:p-8 sm:p-10 shadow-sm border border-[#C8D9C2]/70 bg-white/95 backdrop-blur-xl">

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-7">

                    {/* Section 1: Data Usaha */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#E8EDE5]">
                        <div className="w-7 h-7 rounded-lg bg-[#EBF5E4] text-[#105e3a] flex items-center justify-center font-bold text-xs">
                          1
                        </div>
                        <h2 className="text-base sm:text-lg font-black text-[#141A16]">
                          Informasi Usaha & Gerai
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-black text-[#141A16] mb-1.5">
                            Nama Brand / Usaha Kuliner <span className="text-[#fe6708]">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Contoh: Roti Manis Nusantara, Kopi Kenangan Senja"
                            value={formData.businessName}
                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#DCE4D3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black text-[#141A16] mb-1.5">
                            Kategori Bisnis <span className="text-[#fe6708]">*</span>
                          </label>
                          <select
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#DCE4D3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
                          >
                            {CATEGORY_OPTIONS.map((cat) => (
                              <option key={cat.id} value={cat.id}>
                                {cat.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-black text-[#141A16] mb-1.5">
                            Jumlah Cabang / Outlet <span className="text-[#fe6708]">*</span>
                          </label>
                          <select
                            value={formData.outletCount}
                            onChange={(e) => setFormData({ ...formData, outletCount: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#DCE4D3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
                          >
                            <option value="1">1 Gerai (Single Outlet)</option>
                            <option value="2-5">2 - 5 Cabang</option>
                            <option value=">5">Lebih dari 5 Cabang (Jaringan/Franchise)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Kontak PIC */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#E8EDE5]">
                        <div className="w-7 h-7 rounded-lg bg-[#EBF5E4] text-[#105e3a] flex items-center justify-center font-bold text-xs">
                          2
                        </div>
                        <h2 className="text-base sm:text-lg font-black text-[#141A16]">
                          Kontak Penanggung Jawab (PIC)
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-black text-[#141A16] mb-1.5">
                            Nama Lengkap PIC / Pemilik <span className="text-[#fe6708]">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Contoh: Budi Santoso"
                            value={formData.ownerName}
                            onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#DCE4D3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black text-[#141A16] mb-1.5">
                            Jabatan PIC
                          </label>
                          <select
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#DCE4D3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
                          >
                            <option value="Pemilik / Owner">Pemilik / Owner</option>
                            <option value="Manajer Operasional">Manajer Operasional</option>
                            <option value="Store Manager">Kepala Gerai / Store Manager</option>
                            <option value="Staff Administrasi">Staff Administrasi / Partnership</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-black text-[#141A16] mb-1.5">
                            Nomor WhatsApp / HP Aktif <span className="text-[#fe6708]">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              required
                              placeholder="081234567890"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-[#DCE4D3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
                            />
                          </div>
                          <span className="text-[11px] text-[#57655B] mt-1 block">
                            Tim Re-Feed akan mengirimkan konfirmasi & link onboarding via WhatsApp.
                          </span>
                        </div>

                        <div>
                          <label className="block text-xs font-black text-[#141A16] mb-1.5">
                            Email Bisnis
                          </label>
                          <input
                            type="email"
                            placeholder="nama@brandkuliner.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#DCE4D3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Lokasi & Operasional */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#E8EDE5]">
                        <div className="w-7 h-7 rounded-lg bg-[#EBF5E4] text-[#105e3a] flex items-center justify-center font-bold text-xs">
                          3
                        </div>
                        <h2 className="text-base sm:text-lg font-black text-[#141A16]">
                          Lokasi & Jam Operasional
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-black text-[#141A16] mb-1.5">
                            Kota Operasional <span className="text-[#fe6708]">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Contoh: Jakarta Barat, Tangerang, Surabaya"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#DCE4D3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black text-[#141A16] mb-1.5">
                            Jam Tutup Toko / Waktu Flash Sale Ideal
                          </label>
                          <input
                            type="text"
                            placeholder="Contoh: 20:30 WIB / 21:00 WIB"
                            value={formData.closingTime}
                            onChange={(e) => setFormData({ ...formData, closingTime: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#DCE4D3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-xs font-black text-[#141A16] mb-1.5">
                            Alamat Lengkap Gerai Utama
                          </label>
                          <textarea
                            rows={2}
                            placeholder="Jl. Tanjung Duren Barat No. 12, Grogol Petamburan, Jakarta Barat"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-[#DCE4D3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Karakteristik Surplus & Live Calculator */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#E8EDE5]">
                        <div className="w-7 h-7 rounded-lg bg-[#EBF5E4] text-[#105e3a] flex items-center justify-center font-bold text-xs">
                          4
                        </div>
                        <h2 className="text-base sm:text-lg font-black text-[#141A16]">
                          Estimasi Surplus Pangan
                        </h2>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-black text-[#141A16]">
                            Estimasi Porsi Makanan Berlebih / Hari
                          </label>
                          <span className="px-3 py-1 bg-[#EBF5E4] text-[#105e3a] font-black text-xs rounded-xl border border-[#C8D9C2]">
                            {formData.estimatedPortions} Porsi / Hari
                          </span>
                        </div>

                        <input
                          type="range"
                          min="3"
                          max="120"
                          step="1"
                          value={formData.estimatedPortions}
                          onChange={(e) => setFormData({ ...formData, estimatedPortions: e.target.value })}
                          className="w-full h-2.5 bg-[#E8EDE5] rounded-lg accent-[#105e3a] cursor-pointer"
                        />
                        <div className="flex justify-between text-[11px] text-[#57655B]">
                          <span>3 Porsi (Min)</span>
                          <span>50 Porsi</span>
                          <span>120+ Porsi</span>
                        </div>

                        {/* Interactive Impact Calculator Strip */}
                        <div className="mt-3 p-4 rounded-2xl bg-gradient-to-r from-[#F5F9F2] to-[#EEF6EC] border border-[#D5E2CE] grid grid-cols-3 gap-2 text-center">
                          <div>
                            <div className="text-[10px] sm:text-[11px] font-bold text-[#57655B]">Makanan Tertolong</div>
                            <div className="text-xs sm:text-sm font-black text-[#105e3a] mt-0.5">~{monthlyKgSaved} kg/bln</div>
                          </div>
                          <div className="border-x border-[#D5E2CE]/70 px-1">
                            <div className="text-[10px] sm:text-[11px] font-bold text-[#57655B]">Potensi Emisi Dicegah</div>
                            <div className="text-xs sm:text-sm font-black text-[#105e3a] mt-0.5">~{monthlyCo2Avoided} kg CO₂e</div>
                          </div>
                          <div>
                            <div className="text-[10px] sm:text-[11px] font-bold text-[#57655B]">Est. Omzet Tambahan</div>
                            <div className="text-xs sm:text-sm font-black text-[#fe6708] mt-0.5">Rp {monthlyPotentialOmzet}</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-black text-[#141A16] mb-2">
                          Jenis Makanan yang Berpotensi Surplus (Pilih yang relevan)
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {SURPLUS_TYPES.map((type) => {
                            const isSelected = formData.surplusTypes.includes(type);
                            return (
                              <button
                                key={type}
                                type="button"
                                onClick={() => handleTypeToggle(type)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#105e3a] text-white shadow-2xs'
                                    : 'bg-white border border-[#DCE4D3] text-[#57655B] hover:border-[#105e3a]/40 hover:text-[#141A16]'
                                }`}
                              >
                                {type}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-black text-[#141A16] mb-1.5">
                          Catatan Tambahan atau Ekspektasi Khusus
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Contoh: Kami memiliki kemasan siap bawa sendiri, butuh penjemputan Waste Hub untuk ampas kopi, dsb."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-[#DCE4D3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#8fc22a] focus:border-[#8fc22a] transition-all"
                        />
                      </div>
                    </div>

                    {/* Section 5: Persetujuan Standar Mutu */}
                    <div className="p-4 rounded-2xl bg-[#FCFDFB] border border-[#E8EDE5] space-y-2.5">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.agreeHygiene}
                          onChange={(e) => setFormData({ ...formData, agreeHygiene: e.target.checked })}
                          className="w-4 h-4 rounded text-[#105e3a] focus:ring-[#8fc22a] mt-0.5"
                          required
                        />
                        <span className="text-xs text-[#57655B] leading-relaxed">
                          Saya mengonfirmasi bahwa seluruh surplus makanan yang dijual via Re-Feed adalah <strong className="text-[#141A16]">layak konsumsi, higienis, dan belum melewati tanggal kedaluwarsa</strong>.
                        </span>
                      </label>

                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.agreeTerms}
                          onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                          className="w-4 h-4 rounded text-[#105e3a] focus:ring-[#8fc22a] mt-0.5"
                          required
                        />
                        <span className="text-xs text-[#57655B] leading-relaxed">
                          Saya menyetujui syarat kemitraan Re-Feed (Bebas biaya pendaftaran awal, onboarding 100% didukung tim).
                        </span>
                      </label>
                    </div>

                    {/* Error Banner */}
                    {errorMessage && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 text-xs text-red-800">
                        <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        <div className="flex-1 space-y-1">
                          <p className="font-bold">{errorMessage}</p>
                          <p className="text-[11px] text-red-600">
                            Anda juga dapat mendaftar via email ke{' '}
                            <a
                              href="mailto:pkmkc.refeed@gmail.com?subject=Pendaftaran%20Mitra%20Re-Feed"
                              className="font-bold underline"
                            >
                              pkmkc.refeed@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-app-primary w-full py-4 px-6 text-white font-black text-sm sm:text-base rounded-2xl shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Mengirim Formulir Pendaftaran...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Kirim Formulir Pendaftaran Mitra</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-[#57655B]">
                      Data Anda terlindungi dan hanya digunakan untuk keperluan koordinasi kemitraan Re-Feed.
                    </p>

                  </form>
                ) : (
                  /* Success Confirmation State */
                  <div className="py-8 sm:py-12 text-center space-y-5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#EBF5E4] rounded-full flex items-center justify-center mx-auto text-[#105e3a] animate-bounce">
                      {isNeedsActivation ? (
                        <MailCheck className="w-10 h-10 text-[#105e3a]" />
                      ) : (
                        <CheckCircle2 className="w-10 h-10 text-[#105e3a]" />
                      )}
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-2xl sm:text-3xl font-black text-[#141A16]">
                        {isNeedsActivation ? 'Email Aktivasi Diperlukan! 📬' : 'Pendaftaran Berhasil Terkirim! 🎉'}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#57655B] max-w-md mx-auto leading-relaxed">
                        Terima kasih <strong className="text-[#105e3a]">{formData.ownerName}</strong> dari{' '}
                        <strong className="text-[#105e3a]">{formData.businessName}</strong>.
                      </p>
                    </div>

                    {isNeedsActivation ? (
                      <div className="bg-[#F4F9EE] border border-[#C5D3B8] rounded-2xl p-5 text-left space-y-3 text-xs sm:text-sm text-[#3E4D43] max-w-md mx-auto">
                        <div className="flex items-center gap-2 text-[#105e3a] font-black">
                          <MailCheck className="w-4 h-4 text-[#105e3a] shrink-0" />
                          <span>Konfirmasi 1 Kali FormSubmit</span>
                        </div>
                        <p className="text-xs leading-relaxed text-[#57655B]">
                          FormSubmit telah mengirimkan email konfirmasi ke <strong className="text-[#141A16]">pkmkc.refeed@gmail.com</strong>.
                        </p>
                        <p className="text-xs leading-relaxed text-[#57655B]">
                          Buka email tersebut dan klik <strong>&quot;Activate Form&quot;</strong> agar seluruh data pendaftaran otomatis diteruskan ke admin Re-Feed.
                        </p>
                      </div>
                    ) : (
                      <div className="bg-[#F4F9EE] border border-[#C8D9C2] rounded-2xl p-5 text-left space-y-3 text-xs text-[#57655B] max-w-md mx-auto">
                        <div className="font-bold text-[#141A16] flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#105e3a]" />
                          <span>Langkah Selanjutnya:</span>
                        </div>
                        <ol className="list-decimal pl-4 space-y-1.5 leading-relaxed">
                          <li>Tim Re-Feed akan memverifikasi data dan lokasi gerai Anda.</li>
                          <li>Kami akan menghubungi nomor WhatsApp <strong className="text-[#141A16]">{formData.phone}</strong> dalam 1x24 jam kerja.</li>
                          <li>Panduan penggunaan aplikasi & akun merchant akan disiapkan untuk Anda.</li>
                        </ol>
                      </div>
                    )}

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Link
                        href="/"
                        className="btn-app-primary px-7 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer active:scale-95"
                      >
                        Kembali ke Beranda
                      </Link>
                      <button
                        onClick={handleReset}
                        className="btn-app-secondary px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer"
                      >
                        Daftarkan Gerai Lain
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* RIGHT COLUMN: Value Proposition, Timeline & Endorsement (5 Columns) */}
            <div className="lg:col-span-5 space-y-6">

              {/* 4 Core Merchant Benefits */}
              <div className="app-card rounded-3xl p-6 sm:p-7 border border-[#C8D9C2]/60 space-y-5">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#105e3a]">
                    Mengapa Bergabung?
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#141A16]">
                    Keuntungan Menjadi Mitra Re-Feed
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#EBF5E4] text-[#105e3a] flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#141A16]">Omzet Baru dari Surplus</h4>
                      <p className="text-xs text-[#57655B] leading-relaxed mt-0.5">
                        Ubah makanan berlebih yang berpotensi rugi menjadi pemasukan ekstra setiap harinya sebelum gerai tutup.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#EBF5E4] text-[#105e3a] flex items-center justify-center shrink-0 mt-0.5">
                      <Leaf className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#141A16]">Audit Karbon & Sertifikat Hijau</h4>
                      <p className="text-xs text-[#57655B] leading-relaxed mt-0.5">
                        Dapatkan sertifikasi resmi pencegahan emisi metana (CH₄) dan food waste untuk reputasi ESG brand Anda.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#EBF5E4] text-[#105e3a] flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#141A16]">Ribuan Konsumen Sekitar</h4>
                      <p className="text-xs text-[#57655B] leading-relaxed mt-0.5">
                        Jangkau pembeli baru dalam radius 1–5 km yang siap membeli paket flash sale toko Anda.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#EBF5E4] text-[#105e3a] flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#141A16]">Gratis Tanpa Biaya Pendaftaran</h4>
                      <p className="text-xs text-[#57655B] leading-relaxed mt-0.5">
                        Tidak ada biaya registrasi maupun biaya bulanan tetap. Onboarding dipandu penuh oleh tim kami.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3-Step Simple Onboarding Timeline */}
              <div className="app-card rounded-3xl p-6 sm:p-7 border border-[#C8D9C2]/60 space-y-4">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#141A16]">
                  Alur Registrasi Mudah (3 Langkah)
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F4F9F0] border border-[#E8EDE5]">
                    <span className="w-6 h-6 rounded-full bg-[#105e3a] text-white text-xs font-black flex items-center justify-center shrink-0">
                      1
                    </span>
                    <span className="text-xs text-[#141A16] font-bold">
                      Isi & kirim formulir online di halaman ini (2 menit)
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F4F9F0] border border-[#E8EDE5]">
                    <span className="w-6 h-6 rounded-full bg-[#105e3a] text-white text-xs font-black flex items-center justify-center shrink-0">
                      2
                    </span>
                    <span className="text-xs text-[#141A16] font-bold">
                      Verifikasi & aktivasi akun via WhatsApp Tim Re-Feed (1x24 Jam)
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F4F9F0] border border-[#E8EDE5]">
                    <span className="w-6 h-6 rounded-full bg-[#105e3a] text-white text-xs font-black flex items-center justify-center shrink-0">
                      3
                    </span>
                    <span className="text-xs text-[#141A16] font-bold">
                      Mulai terbitkan menu surplus & nikmati omzet baru!
                    </span>
                  </div>
                </div>
              </div>

              {/* Fast Direct Contact Box */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-[#EBF5E4] to-[#DFECD7] border border-[#C8D9C2] space-y-3">
                <div className="flex items-center gap-2 text-xs font-black text-[#105e3a]">
                  <HelpCircle className="w-4 h-4" />
                  <span>Butuh Konsultasi Kemitraan?</span>
                </div>
                <p className="text-xs text-[#57655B] leading-relaxed">
                  Punya pertanyaan seputar integrasi katering, Waste Hub, atau sistem Re-Feed? Hubungi tim kemitraan kami langsung:
                </p>
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <a
                    href="mailto:pkmkc.refeed@gmail.com"
                    className="px-3.5 py-2 rounded-xl bg-white text-[#105e3a] text-xs font-bold flex items-center justify-center gap-2 border border-[#C8D9C2] hover:bg-[#105e3a] hover:text-white transition-all shadow-2xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>pkmkc.refeed@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Institutional Backing Logos Strip */}
              <div className="p-4 rounded-2xl bg-white/70 border border-[#E8EDE5] text-center space-y-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#57655B]">
                  Inisiatif Resmi Didukung & Dibina Oleh
                </span>
                <div className="flex flex-wrap items-center justify-center gap-4 opacity-90">
                  <div className="relative h-6 w-6">
                    <Image src="/images/Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg.webp" alt="Kemendikbudristek" fill className="object-contain" unoptimized />
                  </div>
                  <div className="relative h-6 w-20">
                    <Image src="/images/Logo-Untar-new.webp" alt="Universitas Tarumanagara" fill className="object-contain" unoptimized />
                  </div>
                  <div className="relative h-6 w-24">
                    <Image src="/images/dikti.webp" alt="DIKTI" fill className="object-contain" unoptimized />
                  </div>
                  <div className="relative h-6 w-16">
                    <Image src="/images/Logo PKM Hor - Warna.9d2ca75b.webp" alt="PKM" fill className="object-contain" unoptimized />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
