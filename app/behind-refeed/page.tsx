'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ShieldCheck,
  Zap,
  HeartHandshake,
  ShoppingBag,
  Cpu,
  BarChart3,
  Store,
  Compass,
  CheckCircle2,
  Users,
  GraduationCap,
  Code2,
  Palette,
  Layers,
  Database,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DownloadModal from '@/components/DownloadModal';
import PartnerModal from '@/components/PartnerModal';
import FloatingCta from '@/components/FloatingCta';
import { GooglePlayIcon } from '@/components/BrandLogo';

function LinkedinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0-.01 3.32 1.66 1.66 0 0 0 .01-3.32Z" />
    </svg>
  );
}

export default function BehindReFeedPage() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  // Official Team Members (2000x2500 portrait cutouts)
  const teamMembers = [
    {
      name: 'Ocean Charlie Gunawan',
      slug: 'ocean-charlie-gunawan',
      role: 'Front End Developer',
      image: '/images/ocean.webp',
      icon: Code2,
      skills: ['React Native', 'NextJs', 'Expo', 'Tailwind CSS'],
      bio: 'Mengembangkan antarmuka interaktif yang responsif, performa tinggi, dan ramah pengguna.',
      linkedin: 'https://www.linkedin.com/in/oceancharliegunawan/',
    },
    {
      name: 'Chandra Wijaya',
      slug: 'chandra-wijaya',
      role: 'UI/UX Designer',
      image: '/images/chandra.webp',
      icon: Palette,
      skills: ['Figma', 'Design System', 'User Flow'],
      bio: 'Merancang identitas visual sistemik, estetika sirkular, dan kenyamanan navigasi aplikasi.',
      linkedin: 'https://www.linkedin.com/in/chandra-wijaya',
    },
    {
      name: 'Jessica',
      slug: 'jessica',
      role: 'Project Manager',
      image: '/images/jes.webp',
      icon: Sparkles,
      skills: ['Product Roadmap', 'Agile', 'Operations'],
      bio: 'Mengorkestrasi milestone riset, koordinasi lintas fungsi, dan manajemen eksekusi ekosistem.',
      linkedin: 'https://www.linkedin.com/in/jessica-jessica',
    },
    {
      name: 'Akemi Belva Sutanto',
      slug: 'akemi-belva-sutanto',
      role: 'Integration Engineer',
      image: '/images/akemi.webp',
      icon: Layers,
      skills: ['API Pipeline', 'Cloud Services', 'Data Sync'],
      bio: 'Menghubungkan arsitektur frontend dengan pipeline integrasi data analitik dan backend.',
      linkedin: 'https://www.linkedin.com/in/akemi-belva-sutanto-064061296/',
    },
    {
      name: 'Danniel',
      slug: 'danniel',
      role: 'Back End Developer',
      image: '/images/danniel.webp',
      icon: Database,
      skills: ['Spring Boot', 'MySQL', 'REST API'],
      bio: 'Membangun arsitektur backend Spring Boot, basis data MySQL efisien, dan keamanan endpoint.',
      linkedin: 'https://www.linkedin.com/in/danniel-a5a918252/',
    },
  ];

  const advisor = {
    name: 'Tony, Ph.D.',
    slug: 'tony-lie',
    role: 'Strategic Advisor',
    faculty: 'Fakultas Teknologi Informasi',
    university: 'Universitas Tarumanagara (UNTAR)',
    image: '/images/tony.webp',
    linkedin: 'https://www.linkedin.com/in/tony-lie-b57a195/',
  };

  const pillars = [
    {
      roleName: 'Food Rescue Hero',
      title: 'Pilar 1: Surplus Food Marketplace',
      subtitle: 'Pencegahan di Hulu',
      icon: ShoppingBag,
      tag: 'Ekonomi Sirkular',
      badgeColor: 'bg-[#EBF5E4] text-[#105e3a] border-[#C8D9C2]',
      desc: 'Garda terdepan penyelamat surplus makanan segar yang siap santap langsung dari produsen sebelum jam operasional gerai ditutup.',
      asset: '/images/food-hero.webp',
      responsibilities: [
        {
          label: 'Penyelamatan Surplus Pangan',
          detail: 'Menghubungkan restoran, bakery, kafe, dan supermarket untuk menjual surplus makanan segar berlebih.',
        },
        {
          label: 'Flash Sale Terjangkau',
          detail: 'Menjual makanan berkualitas prima ke masyarakat sekitar dengan diskon 50–70% via aplikasi ReFeed.',
        },
        {
          label: 'Pencegahan Kerugian Mitra',
          detail: 'Mengubah potensi kerugian merchant menjadi pendapatan alternatif serta menekan jejak karbon hulu.',
        },
      ],
      impactHighlight: 'Diskon 50-70% & Zero Food Loss di Hulu',
      focusArea: 'Restoran, Bakery, Supermarket & Konsumen',
    },
    {
      roleName: 'Eco-Energy Transformer',
      title: 'Pilar 2: Waste-to-Energy Hub',
      subtitle: 'Pengolahan di Hilir',
      icon: Zap,
      tag: 'Energi Terbarukan',
      badgeColor: 'bg-[#FEF5ED] text-[#E05300] border-[#FBD9C2]',
      desc: 'Inovator hijau yang mengonversi sisa bahan makanan tak layak konsumsi menjadi energi baru terbarukan dan nutrisi tanah.',
      asset: '/images/energy.webp',
      responsibilities: [
        {
          label: 'Pengumpulan Residu Organik',
          detail: 'Menampung kulit buah, sisa sayuran, ampas kopi, dan bahan organik non-konsumsi dari dapur mitra resto.',
        },
        {
          label: 'Konversi Biogas & Listrik',
          detail: 'Mengolah biomassa via anaerobic digester menjadi energi biogas ramah lingkungan dan pasokan listrik mandiri.',
        },
        {
          label: 'Produksi Pupuk Kompos',
          detail: 'Menghasilkan pupuk organik cair dan padat untuk menyuburkan kembali tanah pertanian dan perkebunan lokal.',
        },
      ],
      impactHighlight: 'Reduksi Gas Metana (CH₄) & Energi Bersih',
      focusArea: 'Waste Hub, Biodigester & Lahan Tani',
    },
    {
      roleName: 'Food Bank Ambassador',
      title: 'Pilar 3: Food Bank & Donasi Sosial',
      subtitle: 'Solidaritas Sosial',
      icon: HeartHandshake,
      tag: 'Aksi Kemanusiaan',
      badgeColor: 'bg-[#EBF3FE] text-[#0A66C2] border-[#C5DCFA]',
      desc: 'Duta solidaritas sosial yang menjembatani kebaikan donasi makanan berlebih layak santap bagi mereka yang membutuhkan.',
      asset: '/images/drop-point.webp',
      responsibilities: [
        {
          label: 'Mobilisasi Donasi Pangan',
          detail: 'Memfasilitasi penyerahan donasi makanan layak konsumsi dari katering pesta, hotel, korporasi, dan perorangan.',
        },
        {
          label: 'Uji Kelayakan & Higienitas',
          detail: 'Memverifikasi keamanan pangan, standar kebersihan, serta pengemasan higienis sebelum disalurkan.',
        },
        {
          label: 'Distribusi Tepat Sasaran',
          detail: 'Menyalurkan paket makanan bernutrisi secara cepat ke panti asuhan, yayasan sosial, dan warga prasejahtera.',
        },
      ],
      impactHighlight: 'Pemberantasan Kelaparan & Keadilan Pangan',
      focusArea: 'Katering, Yayasan Sosial & Komunitas',
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
                <a
                  href="https://www.kemendikdasmen.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-8 sm:h-9 w-8 sm:w-9 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
                  title="Kementerian Pendidikan Dasar dan Menengah / Kemendikbudristek"
                >
                  <Image
                    src="/images/Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg.webp"
                    alt="Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </a>

                {/* DIKTI */}
                <a
                  href="https://dikti.kemdikbud.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-8 sm:h-9 w-28 sm:w-32 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
                  title="Direktorat Jenderal Pendidikan Tinggi (DIKTI)"
                >
                  <Image
                    src="/images/dikti.webp"
                    alt="Diktisaintek Berdampak - Kemendikbudristek"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </a>

                {/* SIMBelmawa */}
                <a
                  href="https://simbelmawa.kemdikbud.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-8 sm:h-9 w-20 sm:w-24 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
                  title="Sistem Informasi Pembelajaran dan Kemahasiswaan (SIMBelmawa)"
                >
                  <Image
                    src="/images/logo-simbelmawa.webp"
                    alt="SIMBelmawa"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </a>

                {/* PKM */}
                <a
                  href="https://simbelmawa.kemdikbud.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-8 sm:h-9 w-16 sm:w-20 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
                  title="Program Kreativitas Mahasiswa (PKM)"
                >
                  <Image
                    src="/images/Logo PKM Hor - Warna.9d2ca75b.webp"
                    alt="Program Kreativitas Mahasiswa (PKM)"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </a>

                {/* UNTAR */}
                <a
                  href="https://untar.ac.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-8 sm:h-9 w-28 sm:w-32 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
                  title="Universitas Tarumanagara (UNTAR)"
                >
                  <Image
                    src="/images/Logo-Untar-new.webp"
                    alt="Universitas Tarumanagara (UNTAR)"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </a>
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

            {/* Dosen Pembimbing (Tony, Ph.D.) */}
            <div className="pt-8 sm:pt-12">
              <div className="text-center mb-8 sm:mb-10">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#105e3a]">
                  Dosen Pembimbing
                </span>
              </div>

              <div className="flex justify-center">
                <a
                  id={advisor.slug}
                  itemScope
                  itemType="https://schema.org/Person"
                  href={advisor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group cursor-pointer max-w-[190px] xs:max-w-[210px] sm:max-w-[220px] w-full text-center"
                  title={`Kunjungi profil LinkedIn ${advisor.name}`}
                >
                  <div className="relative w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#EEF4E8] to-[#DFE9DA] mb-3 shadow-xs border border-[#D5E2CE]/60 transition-all duration-300 group-hover:shadow-md group-hover:border-[#105e3a]/40">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      itemProp="image"
                      fill
                      priority
                      unoptimized
                      className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {/* LinkedIn badge top-left */}
                    <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl bg-white/90 backdrop-blur-sm text-[#0A66C2] flex items-center gap-1 shadow-xs border border-white group-hover:bg-[#0A66C2] group-hover:text-white transition-all text-[10px] sm:text-[11px] font-bold">
                      <LinkedinIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="hidden xs:inline">In</span>
                    </div>
                    {/* Role icon top-right */}
                    <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-white/90 backdrop-blur-sm text-[#105e3a] flex items-center justify-center shadow-xs border border-white">
                      <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    {/* Bio reveal on hover (desktop) */}
                    <div className="absolute inset-x-0 bottom-0 p-3 pt-8 bg-gradient-to-t from-[#0b4d2e]/95 via-[#105e3a]/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                      <p className="text-[10px] sm:text-[11px] text-white leading-snug text-left">
                        Dosen Pembimbing & Penasihat Strategis, Fakultas Teknologi Informasi UNTAR.
                      </p>
                      <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-[#8fc22a]">
                        <span>Buka LinkedIn</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1 w-full px-0.5">
                    <div className="flex items-center justify-center gap-1">
                      <h4 itemProp="name" className="text-xs xs:text-sm sm:text-base font-black text-[#141A16] tracking-tight group-hover:text-[#0A66C2] transition-colors leading-snug">
                        {advisor.name}
                      </h4>
                      <ExternalLink className="w-3 h-3 text-[#57655B] group-hover:text-[#0A66C2] shrink-0" />
                    </div>
                    <p itemProp="jobTitle" className="text-[11px] sm:text-sm font-bold text-[#105e3a]">
                      {advisor.role}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-1 pt-0.5">
                      <span className="text-[9px] sm:text-[10px] font-semibold text-[#57655B] bg-[#F4F9F0] border border-[#E8EDE5] px-1.5 py-0.5 rounded-full">
                        FTI UNTAR
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-semibold text-[#57655B] bg-[#F4F9F0] border border-[#E8EDE5] px-1.5 py-0.5 rounded-full">
                        Dosen Pembimbing
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Elegant Soft Divider between Advisor and Students */}
            <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-[#C8D9C2] to-transparent my-12 sm:my-16" />

            {/* Tim Pengembang Mahasiswa (5 Anggota) */}
            <div>
              <div className="text-center mb-8 sm:mb-12">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#105e3a]">
                  Tim Pengembang Mahasiswa
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-5 gap-3.5 xs:gap-4 sm:gap-6 lg:gap-7 items-start text-center">
                {teamMembers.map((member, idx) => {
                  const Icon = member.icon;
                  const isLastOddItem = idx === 4;
                  const isSecondRowStartSm = idx === 3;
                  return (
                    <a
                      key={idx}
                      id={member.slug}
                      itemScope
                      itemType="https://schema.org/Person"
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center group cursor-pointer ${
                        isLastOddItem
                          ? 'col-span-2 sm:col-span-2 sm:col-start-auto lg:col-span-1 max-w-[190px] xs:max-w-[210px] sm:max-w-none mx-auto w-full'
                          : isSecondRowStartSm
                          ? 'col-span-1 sm:col-span-2 sm:col-start-2 lg:col-span-1 lg:col-start-auto w-full'
                          : 'col-span-1 sm:col-span-2 lg:col-span-1 w-full'
                      }`}
                      title={`Kunjungi profil LinkedIn ${member.name}`}
                    >
                      <div className="relative w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#EEF4E8] to-[#DFE9DA] mb-3 shadow-xs border border-[#D5E2CE]/60 transition-all duration-300 group-hover:shadow-md group-hover:border-[#105e3a]/40">
                        <Image
                          src={member.image}
                          alt={member.name}
                          itemProp="image"
                          fill
                          unoptimized
                          className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        {/* LinkedIn badge top-left */}
                        <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl bg-white/90 backdrop-blur-sm text-[#0A66C2] flex items-center gap-1 shadow-xs border border-white group-hover:bg-[#0A66C2] group-hover:text-white transition-all text-[10px] sm:text-[11px] font-bold">
                          <LinkedinIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span className="hidden xs:inline">In</span>
                        </div>
                        {/* Role icon top-right */}
                        <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-white/90 backdrop-blur-sm text-[#105e3a] flex items-center justify-center shadow-xs border border-white">
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        {/* Bio reveal on hover (desktop) */}
                        <div className="absolute inset-x-0 bottom-0 p-3 pt-8 bg-gradient-to-t from-[#0b4d2e]/95 via-[#105e3a]/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                          <p className="text-[10px] sm:text-[11px] text-white leading-snug text-left">
                            {member.bio}
                          </p>
                          <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-[#8fc22a]">
                            <span>Buka LinkedIn</span>
                            <ExternalLink className="w-3 h-3" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1 w-full px-0.5">
                        <div className="flex items-center justify-center gap-1">
                          <h4 itemProp="name" className="text-xs xs:text-sm sm:text-base font-black text-[#141A16] tracking-tight group-hover:text-[#0A66C2] transition-colors leading-snug">
                            {member.name}
                          </h4>
                          <ExternalLink className="w-3 h-3 text-[#57655B] group-hover:text-[#0A66C2] shrink-0" />
                        </div>
                        <p itemProp="jobTitle" className="text-[11px] sm:text-sm font-bold text-[#105e3a]">
                          {member.role}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-1 pt-0.5">
                          {member.skills.slice(0, 2).map((skill) => (
                            <span
                              key={skill}
                              className="text-[9px] sm:text-[10px] font-semibold text-[#57655B] bg-[#F4F9F0] border border-[#E8EDE5] px-1.5 py-0.5 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
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

        {/* 4. Tiga Pilar Ekosistem & Peran Karakter */}
        <section className="py-20 sm:py-28 bg-[#FCFDFB] border-b border-[#E8EDE5]/70 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-2.5 sm:space-y-3">
              <span className="badge-glow inline-flex px-3.5 py-1.5 rounded-full text-[#105e3a] text-xs font-bold uppercase tracking-wider">
                Model Ekosistem Sirkular
              </span>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#141A16] tracking-tight">
                Tiga Pilar Penyelamatan Pangan
              </h2>
              <p className="text-xs sm:text-base text-[#57655B] leading-relaxed max-w-2xl mx-auto">
                Solusi menyeluruh dari hulu ke hilir dengan peran strategis setiap karakter untuk memastikan tidak ada makanan yang terbuang sia-sia.
              </p>
            </div>

            {/* Grid 3 Kolom: Gambar di atas (unboxed, full render), teks di bawah menjelaskan role */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 max-w-6xl mx-auto items-start">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex flex-col items-center text-center sm:text-left transition-all duration-300"
                  >
                    {/* Visual Mascot di Atas (Bukan Card, Full View, Ambient Halo Glow) */}
                    <div className="relative w-full max-w-[260px] xs:max-w-[280px] sm:max-w-[300px] aspect-square mx-auto mb-6 sm:mb-7 flex items-center justify-center">
                      {/* Ambient soft background halo */}
                      <div className="absolute inset-2 sm:inset-3 rounded-full bg-gradient-to-b from-[#EEF6EC] via-[#E8F3E4] to-[#DFECDB]/50 -z-10 border border-[#D5E2CE]/70 shadow-xs group-hover:scale-105 group-hover:border-[#105e3a]/35 group-hover:shadow-md transition-all duration-500 ease-out" />

                      {/* 3D Mascot Image with subtle hover float */}
                      <div className="relative w-full h-full p-3 sm:p-4 flex items-center justify-center">
                        <Image
                          src={pillar.asset}
                          alt={`${pillar.roleName} - ${pillar.title}`}
                          fill
                          priority={idx === 0}
                          unoptimized
                          className="object-contain object-center drop-shadow-sm group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-500 ease-out"
                        />
                      </div>

                      {/* Domain Badge Pill */}
                      <div className="absolute -bottom-2.5 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-xs border border-[#C8D9C2] flex items-center gap-1.5 text-[11px] font-bold text-[#141A16] group-hover:border-[#105e3a]/50 transition-colors">
                        <Icon className="w-3.5 h-3.5 text-[#105e3a]" />
                        <span>{pillar.tag}</span>
                      </div>
                    </div>

                    {/* Teks di Bawah: Menjelaskan Role Karakter & Pilar */}
                    <div className="w-full space-y-3.5 sm:space-y-4 px-1">
                      {/* Header Role & Pilar */}
                      <div className="space-y-1 text-center sm:text-left">
                        <div className="inline-block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#105e3a]">
                          {pillar.subtitle}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-[#141A16] tracking-tight leading-snug">
                          {pillar.roleName}
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-[#57655B]">
                          {pillar.title}
                        </p>
                      </div>

                      {/* Deskripsi Ringkas Misi Role */}
                      <p className="text-xs sm:text-sm text-[#57655B] leading-relaxed text-left">
                        {pillar.desc}
                      </p>

                      {/* Rincian Tugas & Peran di Ekosistem */}
                      <div className="pt-3 border-t border-[#E8EDE5] text-left space-y-2.5">
                        <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#105e3a] block">
                          Tugas & Peran di Ekosistem:
                        </span>
                        <div className="space-y-2">
                          {pillar.responsibilities.map((resp, rIdx) => (
                            <div key={rIdx} className="flex items-start gap-2 text-xs leading-relaxed text-[#57655B]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#105e3a] mt-1.5 shrink-0" />
                              <div>
                                <strong className="text-[#141A16] font-bold">{resp.label}: </strong>
                                <span>{resp.detail}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Dampak Langsung */}
                      <div className="pt-1 text-left">
                        <div className="p-2.5 rounded-xl bg-[#F4F9F0] border border-[#E8EDE5] text-[11px] flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#105e3a] shrink-0" />
                          <span className="text-[#57655B] leading-tight">
                            <strong className="text-[#105e3a]">Dampak:</strong> {pillar.impactHighlight}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
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
