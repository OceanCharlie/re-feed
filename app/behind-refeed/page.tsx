'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Leaf, 
  Zap, 
  HeartHandshake, 
  ShoppingBag, 
  Cpu, 
  BarChart3, 
  Play, 
  Store,
  Compass,
  CheckCircle2,
  Users,
  GraduationCap
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DownloadModal from '@/components/DownloadModal';
import PartnerModal from '@/components/PartnerModal';
import FloatingCta from '@/components/FloatingCta';

export default function BehindReFeedPage() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  // Official Team Members (2000x2500 portrait cutouts)
  const teamMembers = [
    {
      name: 'Ocean Charlie Gunawan',
      role: 'Front End Developer',
      image: '/images/ocean.png',
      tag: 'Front End',
    },
    {
      name: 'Chandra Wijaya',
      role: 'UI/UX Designer',
      image: '/images/chandra.png',
      tag: 'UI/UX Design',
    },
    {
      name: 'Jessica',
      role: 'Project Manager',
      image: '/images/jes.png',
      tag: 'Project Lead',
    },
    {
      name: 'Akemi Belva Sutanto',
      role: 'Integration Engineer',
      image: '/images/akemi.png',
      tag: 'Integration',
    },
    {
      name: 'Danniel',
      role: 'Back End Developer',
      image: '/images/danniel.png',
      tag: 'Back End',
    },
  ];

  const advisor = {
    name: 'Tony, Ph.D.',
    role: 'Strategic Advisor & Dosen Pembimbing',
    institution: 'Universitas Tarumanagara (UNTAR)',
    image: '/images/tony.png',
    desc: 'Mengarahkan visi strategis, validasi metodologi riset, dan pengawasan arsitektur sistem ekonomi sirkular ReFeed.',
  };

  const pillars = [
    {
      title: 'Pilar 1: Surplus Food Marketplace',
      subtitle: 'Pencegahan di Hulu',
      icon: ShoppingBag,
      tag: 'Ekonomi Sirkular',
      desc: 'Menghubungkan restoran, bakery, kafe, dan supermarket untuk menjual makanan segar berlebih sebelum tutup dengan diskon 50-70%.',
      asset: '/images/food-hero.webp',
    },
    {
      title: 'Pilar 2: Waste-to-Energy Hub',
      subtitle: 'Pengolahan di Hilir',
      icon: Zap,
      tag: 'Energi Terbarukan',
      desc: 'Untuk bahan makanan yang sudah tak layak konsumsi (kulit buah, sayur layu, ampas kopi), ReFeed menyediakan jaringan Waste Hub untuk dikonversi menjadi biogas dan pupuk organik.',
      asset: '/images/energy.webp',
    },
    {
      title: 'Pilar 3: Food Bank & Donasi Sosial',
      subtitle: 'Solidaritas Sosial',
      icon: HeartHandshake,
      tag: 'Aksi Kemanusiaan',
      desc: 'Memfasilitasi donasi makanan berlebih layak konsumsi dari katering, hotel, dan perorangan untuk disalurkan ke yayasan sosial dan masyarakat yang membutuhkan.',
      asset: '/images/drop-point.webp',
    },
  ];

  const technologies = [
    {
      icon: Compass,
      title: 'Geo-Radar Engine',
      desc: 'Algoritma lokasi real-time yang mencocokkan stok berlebih merchant dengan pembeli dalam radius 1 - 5 km seketika flash sale dibuka.',
    },
    {
      icon: Cpu,
      title: 'Smart Pantry AI',
      desc: 'Model AI terintegrasi yang memprediksi masa simpan bahan makanan di kulkas dan merekomendasikan resep dari bahan sisa.',
    },
    {
      icon: BarChart3,
      title: 'Automated Carbon Ledger',
      desc: 'Sistem audit otomatis yang menghitung metrik reduksi emisi CO₂e dan jejak air virtual untuk sertifikasi keberlanjutan mitra.',
    },
  ];

  const values = [
    {
      number: '01',
      title: 'Setiap Butir Makanan Berharga',
      desc: 'Pangan diproduksi dengan kerja keras petani, air, dan energi. Tidak boleh ada makanan layak yang berakhir sia-sia di tempat sampah.',
    },
    {
      number: '02',
      title: 'Dampak Terukur & Transparan',
      desc: 'Perubahan lingkungan harus nyata dan dapat diverifikasi dalam kilogram pangan, ton emisi karbon, dan penghematan biaya.',
    },
    {
      number: '03',
      title: 'Solusi Menang Bersama (Win-Win-Win)',
      desc: 'Konsumen berhemat, pebisnis kuliner mendapat pemasukan tambahan, dan bumi terlindungi dari emisi gas metana.',
    },
    {
      number: '04',
      title: 'Visi Nol Sampah ke TPA',
      desc: 'Menciptakan siklus tertutup di mana makanan diselamatkan, dan residunya diolah kembali menjadi energi bersih serta nutrisi tanah.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF7] text-[#141A16] selection:bg-[#105e3a] selection:text-white">
      {/* Navbar */}
      <Navbar
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
        onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
      />

      <main className="flex-grow">
        
        {/* 1. Header Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#FCFAF7] text-center border-b border-[#E8EDE5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8EDE5] text-[#57655B] text-xs font-bold hover:text-[#105e3a] transition-all shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda</span>
            </Link>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#141A16]">
              Di Balik Gerakan <span className="text-[#105e3a]">ReFeed</span>
            </h1>

            <p className="text-base sm:text-lg text-[#57655B] max-w-2xl mx-auto leading-relaxed">
              Inovasi anak bangsa dari Universitas Tarumanagara (UNTAR) untuk menghentikan pemborosan makanan dan menyelamatkan lingkungan hidup.
            </p>
          </div>
        </section>

        {/* 2. Team & Advisor Section */}
        <section className="py-20 md:py-28 bg-white border-b border-[#E8EDE5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EBF5E4] text-[#105e3a] text-xs font-bold uppercase tracking-wider border border-[#C8D9C2]">
                Tim Pengembang & Pembimbing
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141A16] tracking-tight">
                Orang-Orang di Balik RE-FEED
              </h2>
              <p className="text-base text-[#57655B]">
                Kolaborasi talenta muda dan bimbingan akademis Universitas Tarumanagara (UNTAR).
              </p>
            </div>

            {/* Team Members Grid (5 Columns) */}
            <div className="mb-16">
              <div className="text-left mb-8 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#EBF5E4] text-[#105e3a] flex items-center justify-center font-bold">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#141A16]">
                  Anggota Tim RE-FEED
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="app-card rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
                  >
                    {/* Portrait Image (4:5 Aspect) */}
                    <div className="relative aspect-[4/5] w-full bg-gradient-to-b from-[#EBF5E4] via-[#F4F9F0] to-[#FAFBF9] flex items-end justify-center overflow-hidden border-b border-[#E8EDE5]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        priority
                        className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content Box */}
                    <div className="p-4 sm:p-5 bg-white text-left space-y-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#FCFAF7] border border-[#E8EDE5] text-[#57655B] uppercase">
                        {member.tag}
                      </span>
                      <h4 className="text-sm sm:text-base font-black text-[#141A16] pt-1 leading-snug">
                        {member.name}
                      </h4>
                      <div className="text-xs font-bold text-[#105e3a]">
                        {member.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dosen Pembimbing Grid */}
            <div className="pt-8 border-t border-[#E8EDE5]">
              <div className="text-left mb-8 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#EBF5E4] text-[#105e3a] flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#141A17]">
                  Dosen Pembimbing
                </h3>
              </div>

              <div className="app-card rounded-3xl overflow-hidden max-w-2xl mx-auto flex flex-col sm:flex-row items-center p-6 sm:p-8 gap-6 sm:gap-8 bg-gradient-to-r from-white via-[#FCFAF7] to-[#F4F9F0]">
                {/* Advisor Photo */}
                <div className="relative w-40 sm:w-48 aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-[#EBF5E4] to-[#FAFBF9] shrink-0 border border-[#E8EDE5]">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    className="object-contain object-bottom"
                  />
                </div>

                {/* Advisor Details */}
                <div className="space-y-2 text-center sm:text-left">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#EBF5E4] text-[#105e3a] text-xs font-bold uppercase tracking-wider border border-[#C8D9C2]">
                    Dosen Pembimbing
                  </span>
                  <h4 className="text-2xl font-black text-[#141A16]">
                    {advisor.name}
                  </h4>
                  <div className="text-sm font-bold text-[#105e3a]">
                    {advisor.role} • <span className="text-[#57655B] font-semibold">{advisor.institution}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#57655B] leading-relaxed pt-1">
                    {advisor.desc}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. The Genesis Story */}
        <section className="py-24 bg-[#FCFAF7] border-b border-[#E8EDE5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              
              <div className="md:col-span-7 space-y-5 text-left">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EBF5E4] text-[#105e3a] text-xs font-bold uppercase tracking-wider border border-[#C8D9C2]">
                  Paradoks Pangan
                </span>

                <h2 className="text-3xl sm:text-4xl font-black text-[#141A16] tracking-tight">
                  Mengapa ReFeed Harus Ada?
                </h2>

                <p className="text-sm sm:text-base text-[#57655B] leading-relaxed">
                  Berdasarkan kajian Bappenas, Indonesia membuang antara <b>23 hingga 48 juta ton makanan setiap tahunnya</b> — setara dengan kerugian ekonomi sebesar <b>Rp 330 Triliun</b>.
                </p>

                <p className="text-sm sm:text-base text-[#57655B] leading-relaxed">
                  Di saat yang sama, jutaan keluarga masih menghadapi kerentanan pangan. Sampah makanan yang membusuk di TPA melepaskan <b>gas metana (CH₄)</b> — pemicu pemanasan global yang 28 kali lebih agresif dibanding CO₂.
                </p>

                <div className="p-4 rounded-2xl bg-white border border-[#E8EDE5] text-xs sm:text-sm text-[#105e3a] font-bold flex items-center gap-3 shadow-2xs">
                  <ShieldCheck className="w-6 h-6 text-[#105e3a] shrink-0" />
                  <span>ReFeed hadir menghubungkan surplus makanan dengan konsumen secara cepat, higienis, dan terjangkau.</span>
                </div>
              </div>

              <div className="md:col-span-5 space-y-4">
                <div className="app-card p-6 sm:p-8 rounded-3xl text-left space-y-2">
                  <div className="text-3xl sm:text-4xl font-black text-[#105e3a]">48 Juta Ton</div>
                  <div className="text-xs font-bold text-[#141A16] uppercase tracking-wider">Makanan Terbuang / Tahun di RI</div>
                  <div className="text-[11px] text-[#57655B]">Sumber: Kajian Food Loss Bappenas</div>
                </div>

                <div className="app-card p-6 sm:p-8 rounded-3xl text-left space-y-2">
                  <div className="text-3xl sm:text-4xl font-black text-[#FE6708]">28x Lipat</div>
                  <div className="text-xs font-bold text-[#141A16] uppercase tracking-wider">Dampak Gas Metana TPA vs CO₂</div>
                  <div className="text-[11px] text-[#57655B]">Dihasilkan dari pembusukan sisa makanan basah</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Tiga Pilar Ekosistem */}
        <section className="py-24 bg-white border-b border-[#E8EDE5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EBF5E4] text-[#105e3a] text-xs font-bold uppercase tracking-wider border border-[#C8D9C2]">
                Model Ekosistem Sirkular
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141A16] tracking-tight">
                Tiga Pilar Penyelamatan Pangan
              </h2>
              <p className="text-base text-[#57655B]">
                Solusi menyeluruh dari hulu ke hilir untuk memastikan tidak ada makanan yang terbuang sia-sia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="app-card rounded-3xl overflow-hidden flex flex-col justify-between text-left"
                  >
                    <div>
                      <div className="relative h-48 w-full bg-slate-100 border-b border-[#E8EDE5]">
                        <Image
                          src={pillar.asset}
                          alt={pillar.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-[#141A16] text-[10px] font-black uppercase shadow-xs">
                          {pillar.tag}
                        </div>
                      </div>

                      <div className="p-6 space-y-2">
                        <div className="text-xs font-bold text-[#105e3a] uppercase tracking-wider">
                          {pillar.subtitle}
                        </div>
                        <h3 className="text-xl font-bold text-[#141A16]">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#57655B] leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <div className="pt-3 border-t border-[#E8EDE5] flex items-center gap-1.5 text-xs font-bold text-[#105e3a]">
                        <CheckCircle2 className="w-4 h-4 text-[#105e3a]" />
                        <span>Sistem Terverifikasi ReFeed</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 5. Teknologi */}
        <section className="py-24 bg-[#FCFAF7] border-b border-[#E8EDE5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EBF5E4] text-[#105e3a] text-xs font-bold uppercase tracking-wider border border-[#C8D9C2]">
                Inovasi Teknologi
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141A16] tracking-tight">
                Teknologi di Balik ReFeed
              </h2>
              <p className="text-base text-[#57655B]">
                Memadukan kecerdasan buatan dan geolokasi mikro untuk penyelamatan makanan yang efisien.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technologies.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={idx}
                    className="app-card rounded-3xl p-6 sm:p-8 text-left space-y-3"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#EBF5E4] text-[#105e3a] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#141A16]">
                      {tech.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57655B] leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 6. Nilai Inti */}
        <section className="py-24 bg-white border-b border-[#E8EDE5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EBF5E4] text-[#105e3a] text-xs font-bold uppercase tracking-wider border border-[#C8D9C2]">
                Prinsip Kami
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141A16] tracking-tight">
                Nilai yang Kami Pegang Teguh
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="app-card rounded-3xl p-6 sm:p-8 text-left space-y-2"
                >
                  <span className="text-2xl font-black text-[#105e3a]">
                    {val.number}
                  </span>
                  <h3 className="text-lg font-bold text-[#141A16]">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57655B] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 7. CTA */}
        <section className="py-20 bg-gradient-to-br from-[#105e3a] to-[#0b4d2e] text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Jadilah Bagian dari Gerakan Food Hero
            </h2>
            <p className="text-sm sm:text-base text-[#EBF5E4]/90 max-w-lg mx-auto">
              Unduh aplikasi ReFeed sekarang di Google Play atau daftarkan gerai kuliner Anda menjadi mitra resmi ReFeed.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-[#105e3a] font-bold text-sm rounded-2xl shadow-lg flex items-center gap-2 hover:bg-[#FCFAF7] transition-all"
              >
                <Play className="w-4 h-4 fill-[#105e3a] text-[#105e3a]" />
                <span>Unduh di Google Play</span>
              </a>

              <button
                onClick={() => setIsPartnerModalOpen(true)}
                className="px-6 py-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-sm rounded-2xl transition-all flex items-center gap-2"
              >
                <Store className="w-4 h-4 text-[#8fc22a]" />
                <span>Daftar Mitra Resto</span>
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
        onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
      />

      {/* Modals */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />

      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      />

      <FloatingCta
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
      />
    </div>
  );
}
