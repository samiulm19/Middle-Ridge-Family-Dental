/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TreatmentFinder } from './components/TreatmentFinder';
import { NewPatientSpecial } from './components/NewPatientSpecial';
import { ServicesBento } from './components/ServicesBento';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { NervousCareSection } from './components/NervousCareSection';
import { TeamSection } from './components/TeamSection';
import { ReviewsSection } from './components/ReviewsSection';
import { PaymentFundsSection } from './components/PaymentFundsSection';
import { VisitLocationSection } from './components/VisitLocationSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { BookingModal } from './components/BookingModal';
import { PitchConceptModal } from './components/PitchConceptModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preSelectedDoctor, setPreSelectedDoctor] = useState('');
  const [preSelectedService, setPreSelectedService] = useState('');
  const [isPitchModalOpen, setIsPitchModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setPreSelectedDoctor('');
    setPreSelectedService('');
    setIsBookingOpen(true);
  };

  const handleSelectDoctorToBook = (doctorName: string) => {
    setPreSelectedDoctor(doctorName);
    setPreSelectedService('');
    setIsBookingOpen(true);
  };

  const handleSelectServiceToBook = (serviceTitle: string) => {
    setPreSelectedService(serviceTitle);
    setPreSelectedDoctor('');
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8FC] text-[#1F172C] font-sans selection:bg-[#533675]/20 selection:text-[#2C2A4A]">
      
      {/* Skip to Content for Accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#533675] focus:text-white focus:rounded-lg"
      >
        Skip to content
      </a>

      {/* 00. Top Contact & Location Bar */}
      <TopBar onOpenPitchModal={() => setIsPitchModalOpen(true)} />

      {/* 01. Sticky Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Page Flow */}
      <main id="main" className="flex-1">
        
        {/* 02. Emotionally Engaging Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 03. Interactive Treatment Finder (with Sticky Sidebar) */}
        <TreatmentFinder
          onOpenBooking={handleOpenBooking}
          onSelectServiceToBook={handleSelectServiceToBook}
        />

        {/* 04. Verified $249 New Patient Special */}
        <NewPatientSpecial onOpenBooking={handleOpenBooking} />

        {/* 05. Services Bento Grid */}
        <ServicesBento onSelectServiceToBook={handleSelectServiceToBook} />

        {/* 06. Interactive Horizontal Before & After Smile Gallery */}
        <BeforeAfterGallery onOpenBooking={handleOpenBooking} />

        {/* 07. Nervous Patients Sanctuary (Calm Deep Atmosphere) */}
        <NervousCareSection onOpenBooking={handleOpenBooking} />

        {/* 08. Our Dentists & Team */}
        <TeamSection onSelectDoctorToBook={handleSelectDoctorToBook} />

        {/* 09. Patient Reviews Quotation Wall */}
        <ReviewsSection />

        {/* 10. Payment & Health Funds */}
        <PaymentFundsSection onOpenBooking={handleOpenBooking} />

        {/* 11. Visit Location & Real-Time Hours Table */}
        <VisitLocationSection onOpenBooking={handleOpenBooking} />

      </main>

      {/* 12. Footer */}
      <Footer onOpenPitchModal={() => setIsPitchModalOpen(true)} />

      {/* 13. Mobile Sticky Bottom Quick-Action Bar */}
      <MobileBottomBar onOpenBooking={handleOpenBooking} />

      {/* Interactive Triage Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedDoctor={preSelectedDoctor}
        preSelectedService={preSelectedService}
      />

      {/* Pitch Strategy & Transformation Deck Modal */}
      <PitchConceptModal
        isOpen={isPitchModalOpen}
        onClose={() => setIsPitchModalOpen(false)}
      />

    </div>
  );
}
