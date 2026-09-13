'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ImpactStats from '@/components/ImpactStats';
import DualEcosystem from '@/components/DualEcosystem';
import ScenicStoryBanner from '@/components/ScenicStoryBanner';
import PartnerLogosStrip from '@/components/PartnerLogosStrip';
import FaqSection from '@/components/FaqSection';
import DownloadCta from '@/components/DownloadCta';
import Footer from '@/components/Footer';
import DownloadModal from '@/components/DownloadModal';
import PartnerModal from '@/components/PartnerModal';
import FloatingCta from '@/components/FloatingCta';

export default function HomePage() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#105e3a] selection:text-white">
      {/* 1. Minimal Header Navbar */}
      <Navbar
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
        onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 2. Hero Section with Mockup & Hero Sprout Mascot */}
        <HeroSection
          onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        />

        {/* 3. 4-Metric Floating Metrics Strip */}
        <ImpactStats />

        {/* 4. Langkah Kecil, Dampak Besar (3 Action Cards) */}
        <DualEcosystem
          onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        />

        {/* 5. Panoramic Nature Hero Banner ("Lebih dari Sekadar Makanan") */}
        <ScenicStoryBanner
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        />

        {/* 6. Pioneer Partner Invitation Section */}
        <PartnerLogosStrip
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        />

        {/* 7. Tanya Jawab & Panduan Umum (FAQ) */}
        <FaqSection />

        {/* 8. Bottom Mascot CTA Card ("Yuk, Mulai Selamatkan Makanan Hari Ini!") */}
        <DownloadCta
          onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        />
      </main>

      {/* 8. Minimalist Clean Footer */}
      <Footer
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
        onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
      />

      {/* Modals & Floating Action */}
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
