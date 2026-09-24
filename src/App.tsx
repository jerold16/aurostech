/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/marketing/Navbar';
import { Hero } from './components/marketing/Hero';
import { StatsStrip } from './components/marketing/StatsStrip';
import { ClientStrip } from './components/marketing/ClientStrip';
import { ServicesSection } from './components/marketing/ServicesSection';
import { IndustrySection } from './components/marketing/IndustrySection';
import { SaasPlatformShowcase } from './components/saas/SaasPlatformShowcase';
import { AboutSection } from './components/marketing/AboutSection';
import { TestimonialsSection } from './components/marketing/TestimonialsSection';
import { TrustSection } from './components/marketing/TrustSection';
import { CtaSection } from './components/marketing/CtaSection';
import { Footer } from './components/marketing/Footer';
import { ContactModal } from './components/modals/ContactModal';
import { VideoModal } from './components/modals/VideoModal';
import { ServiceModal } from './components/modals/ServiceModal';
import { ServiceItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactPrefill, setContactPrefill] = useState('');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactWithService = (serviceName: string) => {
    setContactPrefill(serviceName);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] flex flex-col selection:bg-[#007BFF]/20 selection:text-[#007BFF] font-['Inter',sans-serif]">
      {/* Marketing Header / Navigation */}
      <Navbar
        onOpenContact={() => {
          setContactPrefill('');
          setContactModalOpen(true);
        }}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onExploreSaas={() => scrollToSection('technologies')}
      />

      {/* Main Single-Landing Page Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onExploreServices={() => scrollToSection('services')}
          onWatchStory={() => setVideoModalOpen(true)}
          onExploreSaas={() => scrollToSection('technologies')}
          onOpenContact={() => {
            setContactPrefill('');
            setContactModalOpen(true);
          }}
        />

        {/* 2. Key Metrics Strip */}
        <StatsStrip />

        {/* 3. Trusted Enterprise Partners */}
        <ClientStrip />

        {/* 4. Core Services Grid */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onRequestProposal={() => {
            setContactPrefill('Custom Enterprise Proposal');
            setContactModalOpen(true);
          }}
        />

        {/* 5. Industry Vertical Solutions */}
        <IndustrySection
          onContactIndustry={(indTitle) => handleOpenContactWithService(indTitle)}
        />

        {/* 6. Complete Interactive SaaS Product Platform Showcase */}
        <SaasPlatformShowcase
          onOpenContact={() => {
            setContactPrefill('SaaS Platform Demo & License');
            setContactModalOpen(true);
          }}
        />

        {/* 7. About Section: Vision, Mission, Values & Leadership Team */}
        <AboutSection
          onLearnMore={() => {
            setContactPrefill('Company Background & Capabilities Inquiry');
            setContactModalOpen(true);
          }}
        />

        {/* 8. Client Testimonials & Case Study Highlights */}
        <TestimonialsSection />

        {/* 9. Trust & Enterprise Value Propositions */}
        <TrustSection />

        {/* 10. Closing Action Section */}
        <CtaSection
          onOpenContact={() => {
            setContactPrefill('New Project Engagement');
            setContactModalOpen(true);
          }}
        />
      </main>

      {/* 10. Dark Navy Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenContact={() => {
          setContactPrefill('');
          setContactModalOpen(true);
        }}
      />

      {/* Modals & Overlays */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        prefillInterest={contactPrefill}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestEngagement={(srv) => handleOpenContactWithService(srv)}
      />
    </div>
  );
}
