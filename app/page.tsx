'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PartnerMarquee from '@/components/PartnerMarquee';
import DualEcosystem from '@/components/DualEcosystem';
import HowItWorks from '@/components/HowItWorks';
import AppSimulator from '@/components/AppSimulator';
import ImpactStats from '@/components/ImpactStats';
import PartnerCalculator from '@/components/PartnerCalculator';
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
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] selection:bg-[#105e3a] selection:text-white">
      {/* 1. Sticky Minimal Navbar */}
      <Navbar
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
        onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
      />

      <main className="flex-grow">
        {/* 2. Crisp, Light, Breathtaking Hero Section */}
        <HeroSection
          onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        />

        {/* 3. Subtle Category Partner Marquee */}
        <PartnerMarquee />

        {/* 4. The 2 Core Solutions (Marketplace & Waste Hub) */}
        <DualEcosystem
          onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        />

        {/* 5. 3-Step Simple Flow */}
        <HowItWorks
          onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        />

        {/* 6. Clean 5-Screen Interactive App Showcase */}
        <AppSimulator />

        {/* 7. High-Impact Environmental Metrics */}
        <ImpactStats />

        {/* 8. Merchant B2B Partnership & ROI */}
        <PartnerCalculator
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        />

        {/* 9. Clean FAQ Accordion */}
        <FaqSection />

        {/* 10. Focused Download Banner */}
        <DownloadCta
          onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        />
      </main>

      {/* 11. Minimal Footer */}
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
