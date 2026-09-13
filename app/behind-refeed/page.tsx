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
  GraduationCap,
  Code2,
  Palette,
  Layers,
  Database,
  Building2,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DownloadModal from '@/components/DownloadModal';
import PartnerModal from '@/components/PartnerModal';
import FloatingCta from '@/components/FloatingCta';
import { GooglePlayIcon } from '@/components/BrandLogo';

export default function BehindReFeedPage() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  // Official Team Members (2000x2500 portrait cutouts)
  const teamMembers = [
    {
      name: 'Ocean Charlie Gunawan',
      role: 'Front End Developer',
      image: '/images/ocean.png',
      icon: Code2,
      skills: ['React Native', 'NextJs', 'Expo', 'Tailwind CSS'],
      bio: 'Mengembangkan antarmuka interaktif yang responsif, performa tinggi, dan ramah pengguna.',
    },
    {
      name: 'Chandra Wijaya',
      role: 'UI/UX Designer',
      image: '/images/chandra.png',
      icon: Palette,
      skills: ['Figma', 'Design System', 'User Flow'],
      bio: 'Merancang identitas visual sistemik, estetika sirkular, dan kenyamanan navigasi aplikasi.',
    },
    {
      name: 'Jessica',
      role: 'Project Manager',
      image: '/images/jes.png',
      icon: Sparkles,
      skills: ['Product Roadmap', 'Agile', 'Operations'],
      bio: 'Mengorkestrasi milestone riset, koordinasi lintas fungsi, dan manajemen eksekusi ekosistem.',
    },
    {
      name: 'Akemi Belva Sutanto',
      role: 'Integration Engineer',
      image: '/images/akemi.png',
      icon: Layers,
      skills: ['API Pipeline', 'Cloud Services', 'Data Sync'],
      bio: 'Menghubungkan arsitektur frontend dengan pipeline integrasi data analitik dan backend.',
    },
    {
      name: 'Danniel',
      role: 'Back End Developer',
      image: '/images/danniel.png',
      icon: Database,
      skills: ['Node.js', 'PostgreSQL', 'Microservices'],
      bio: 'Membangun arsitektur server terdistribusi, basis data efisien, dan keamanan endpoint.',
    },
  ];

  const advisor = {
    name: 'Tony, Ph.D.',
    role: 'Strategic Advisor',
    faculty: 'Fakultas Teknologi Informasi',
    university: 'Universitas Tarumanagara (UNTAR)',
    image: '/images/tony.png',
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
    <div className="min-h-screen flex flex-col text-[#141A16] selection:bg-[#105e3a] selection:text-white">
      {/* Navbar */}
      <Navbar
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
        onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
      />

      <main className="flex-grow">

        {/* 1. Header Section */}
        <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 text-center border-b border-[#E8EDE5]/70">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4">
            <Link
              href="/"
              className="glass-panel inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[#57655B] text-xs font-bold hover:text-[#105e3a] hover:border-[#8fc22a]/60 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda</span>
            </Link>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#141A16] leading-tight">
              Di Balik Gerakan <span className="text-gradient-brand">ReFeed</span>
            </h1>

            <p className="text-xs sm:text-base md:text-lg text-[#57655B] max-w-2xl mx-auto leading-relaxed">
              Inovasi anak bangsa dari Universitas Tarumanagara (UNTAR) untuk menghentikan pemborosan makanan dan menyelamatkan lingkungan hidup.
            </p>

            {/* Supporting Institutional Logos */}
            <div className="pt-6 sm:pt-8 flex flex-col items-center">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#57655B] mb-3.5">
                Didukung & Dibina Oleh
              </span>
              <div className="inline-flex flex-wrap items-center justify-center gap-5 sm:gap-7 md:gap-9 px-6 sm:px-9 py-3.5 rounded-2xl glass-panel">
                {/* Kemendikbudristek / Ministry */}
                <div className="relative h-8 sm:h-9 w-8 sm:w-9 flex items-center justify-center">
                  <Image
                    src="/images/Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg.webp"
                    alt="Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>

                {/* DIKTI */}
                <div className="relative h-8 sm:h-9 w-26 sm:w-30 flex items-center justify-center">
                  <Image
                    src="/images/dikti.png"
                    alt="Diktisaintek Berdampak - Kemendikbudristek"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>

                {/* SIMBelmawa */}
                <div className="relative h-8 sm:h-9 w-26 sm:w-30 flex items-center justify-center">
                  <Image
                    src="/images/logo-simbelmawa.png"
                    alt="SIMBelmawa"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>

                {/* PKM */}
                <div className="relative h-8 sm:h-9 w-20 sm:w-24 flex items-center justify-center">
                  <Image
                    src="/images/Logo PKM Hor - Warna.9d2ca75b.png"
                    alt="Program Kreativitas Mahasiswa (PKM)"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>

                {/* UNTAR */}
                <div className="relative h-8 sm:h-9 w-24 sm:w-28 flex items-center justify-center">
                  <Image
                    src="/images/Logo-Untar-new.webp"
                    alt="Universitas Tarumanagara (UNTAR)"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Team & Advisor Section */}
        <section className="py-20 sm:py-28 border-b border-[#E8EDE5]/70 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Clean Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5E4] text-[#105e3a] text-xs font-bold border border-[#C8D9C2]">
                <Users className="w-3.5 h-3.5" />
                <span>Universitas Tarumanagara</span>
              </div>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black text-[#141A16] tracking-tight">
                Orang-Orang di Balik <span className="whitespace-nowrap text-[#105e3a]">RE-FEED</span>
              </h2>
              <p className="text-xs sm:text-base text-[#57655B] leading-relaxed">
                Inisiatif inovasi mahasiswa dan dosen pembimbing dari Fakultas Teknologi Informasi, Universitas Tarumanagara (UNTAR).
              </p>
            </div>

            {/* Dosen Pembimbing (Tony, Ph.D.) - Ringkas, Tanpa Fluff */}
            <div className="pt-12 sm:pt-14 border-t border-[#E8EDE5]">
              <div className="text-center mb-8 sm:mb-10">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#105e3a]">
                  Dosen Pembimbing
                </span>
              </div>

              <div className="flex flex-col items-center group cursor-default">
                <div className="relative w-44 sm:w-48 aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-[#EEF4E8] to-[#DFE9DA] mb-3.5 shadow-xs border border-[#D5E2CE]/60">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    priority
                    unoptimized
                    className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-sm text-[#105e3a] flex items-center justify-center shadow-xs border border-white">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#141A16] tracking-tight group-hover:text-[#105e3a] transition-colors">
                  {advisor.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#105e3a] mt-0.5">
                  {advisor.role}
                </p>
                <p className="text-xs text-[#57655B] mt-0.5 inline-flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{advisor.faculty} • {advisor.university}</span>
                </p>
              </div>
            </div>

            {/* Tim Pengembang Mahasiswa (5 Anggota) */}
            <div className="pt-12 sm:pt-14 border-t border-[#E8EDE5]">
              <div className="text-center mb-8 sm:mb-10">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#105e3a]">
                  Tim Pengembang Mahasiswa
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-7 items-start text-center">
                {teamMembers.map((member, idx) => {
                  const Icon = member.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center group cursor-default">
                      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-[#EEF4E8] to-[#DFE9DA] mb-3.5 shadow-xs border border-[#D5E2CE]/60">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          unoptimized
                          className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-sm text-[#105e3a] flex items-center justify-center shadow-xs border border-white">
                          <Icon className="w-4 h-4" />
                        </div>
                        {/* Bio reveal on hover (desktop) */}
                        <div className="absolute inset-x-0 bottom-0 p-3 pt-8 bg-gradient-to-t from-[#0b4d2e]/95 via-[#105e3a]/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-[10px] sm:text-[11px] text-white leading-snug text-left">
                            {member.bio}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <h4 className="text-sm sm:text-base font-black text-[#141A16] tracking-tight group-hover:text-[#105e3a] transition-colors leading-snug">
                          {member.name}
                        </h4>
                        <p className="text-xs sm:text-sm font-bold text-[#105e3a]">
                          {member.role}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-1 pt-0.5">
                          {member.skills.slice(0, 2).map((skill) => (
                            <span
                              key={skill}
                              className="text-[9px] sm:text-[10px] font-semibold text-[#57655B] bg-[#F4F9F0] border border-[#E8EDE5] px-2 py-0.5 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* 3. The Genesis Story */}
        <section className="py-16 sm:py-24 border-b border-[#E8EDE5]/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

              <div className="md:col-span-7 space-y-4 sm:space-y-5 text-left">
                <span className="badge-glow inline-flex px-3.5 py-1.5 rounded-full text-[#105e3a] text-xs font-bold uppercase tracking-wider">
                  Paradoks Pangan
                </span>

                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-[#141A16] tracking-tight">
                  Mengapa ReFeed Harus Ada?
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-[#57655B] leading-relaxed">
                  Berdasarkan kajian Bappenas, Indonesia membuang antara <b>23 hingga 48 juta ton makanan setiap tahunnya</b> — setara dengan kerugian ekonomi sebesar <b>Rp 330 Triliun</b>.
                </p>

                <p className="text-xs sm:text-sm md:text-base text-[#57655B] leading-relaxed">
                  Di saat yang sama, jutaan keluarga masih menghadapi kerentanan pangan. Sampah makanan yang membusuk di TPA melepaskan <b>gas metana (CH₄)</b> — pemicu pemanasan global yang 28 kali lebih agresif dibanding CO₂.
                </p>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E8EDE5] text-xs sm:text-sm text-[#105e3a] font-bold flex items-center gap-3 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#105e3a] shrink-0" />
                  <span>ReFeed hadir menghubungkan surplus makanan dengan konsumen secara cepat, higienis, dan terjangkau.</span>
                </div>
              </div>

              <div className="md:col-span-5 space-y-3 sm:space-y-4">
                <div className="app-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl text-left space-y-1 sm:space-y-2">
                  <div className="text-2xl sm:text-4xl font-black text-[#105e3a]">48 Juta Ton</div>
                  <div className="text-xs font-bold text-[#141A16] uppercase tracking-wider">Makanan Terbuang / Tahun di RI</div>
                  <div className="text-[11px] text-[#57655B]">Sumber: Kajian Food Loss Bappenas</div>
                </div>

                <div className="app-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl text-left space-y-1 sm:space-y-2">
                  <div className="text-2xl sm:text-4xl font-black text-[#FE6708]">28x Lipat</div>
                  <div className="text-xs font-bold text-[#141A16] uppercase tracking-wider">Dampak Gas Metana TPA vs CO₂</div>
                  <div className="text-[11px] text-[#57655B]">Dihasilkan dari pembusukan sisa makanan basah</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Tiga Pilar Ekosistem */}
        <section className="py-16 sm:py-24 bg-white/85 border-b border-[#E8EDE5]/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
              <span className="badge-glow inline-flex px-3.5 py-1.5 rounded-full text-[#105e3a] text-xs font-bold uppercase tracking-wider">
                Model Ekosistem Sirkular
              </span>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#141A16] tracking-tight">
                Tiga Pilar Penyelamatan Pangan
              </h2>
              <p className="text-xs sm:text-base text-[#57655B]">
                Solusi menyeluruh dari hulu ke hilir untuk memastikan tidak ada makanan yang terbuang sia-sia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="app-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between text-left"
                  >
                    <div>
                      <div className="relative h-44 sm:h-48 w-full bg-slate-100 border-b border-[#E8EDE5]">
                        <Image
                          src={pillar.asset}
                          alt={pillar.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-[#141A16] text-[10px] font-black uppercase shadow-xs">
                          {pillar.tag}
                        </div>
                        <div className="absolute -bottom-5 left-5 w-10 h-10 rounded-2xl bg-white text-[#105e3a] flex items-center justify-center shadow-md border border-[#E8EDE5]">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 pt-4 space-y-1.5 sm:space-y-2">
                        <div className="text-xs font-bold text-[#105e3a] uppercase tracking-wider">
                          {pillar.subtitle}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#141A16]">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#57655B] leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 pt-0">
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
        <section className="py-16 sm:py-24 border-b border-[#E8EDE5]/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
              <span className="badge-glow inline-flex px-3.5 py-1.5 rounded-full text-[#105e3a] text-xs font-bold uppercase tracking-wider">
                Inovasi Teknologi
              </span>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#141A16] tracking-tight">
                Teknologi di Balik ReFeed
              </h2>
              <p className="text-xs sm:text-base text-[#57655B]">
                Memadukan kecerdasan buatan dan geolokasi mikro untuk penyelamatan makanan yang efisien.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {technologies.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={idx}
                    className="app-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-left space-y-2.5 sm:space-y-3"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#EBF5E4] text-[#105e3a] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#141A16]">
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
        <section className="py-16 sm:py-24 bg-white/85 border-b border-[#E8EDE5]/70">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
              <span className="badge-glow inline-flex px-3.5 py-1.5 rounded-full text-[#105e3a] text-xs font-bold uppercase tracking-wider">
                Prinsip Kami
              </span>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#141A16] tracking-tight">
                Nilai yang Kami Pegang Teguh
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="app-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-left space-y-1.5 sm:space-y-2"
                >
                  <span className="text-xl sm:text-2xl font-black text-[#105e3a]">
                    {val.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#141A16]">
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
        <section className="py-14 sm:py-20 bg-gradient-hero text-white text-center relative overflow-hidden">
          <div className="glow-orb -top-20 left-1/4 w-72 h-72 opacity-40" />
          <div className="glow-orb -bottom-24 right-1/4 w-80 h-80 opacity-30 [animation-delay:2.2s]" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black tracking-tight text-white">
              Jadilah Bagian dari Gerakan Food Hero
            </h2>
            <p className="text-xs sm:text-base text-[#EBF5E4]/90 max-w-lg mx-auto leading-relaxed">
              Unduh aplikasi ReFeed sekarang di Google Play atau daftarkan gerai kuliner Anda menjadi mitra resmi ReFeed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 pt-2">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-white text-[#105e3a] font-black text-xs sm:text-sm rounded-2xl shadow-lg flex items-center justify-center gap-2.5 hover:bg-[#FCFAF7] transition-all active:scale-98"
              >
                <GooglePlayIcon size={18} />
                <span>Unduh di Google Play</span>
              </a>

              <button
                onClick={() => setIsPartnerModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-2xl transition-all flex items-center justify-center gap-2 active:scale-98"
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
