import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { FeatureGallery } from './components/FeatureGallery';
import { ScheduleSection } from './components/ScheduleSection';
import { PricingSection } from './components/PricingSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProgramForBooking, setSelectedProgramForBooking] = useState('');

  const handleOpenBooking = (programName?: string) => {
    setSelectedProgramForBooking(programName || '1-Day Free Trial Pass');
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#08090c] text-[#e3e7ee] flex flex-col font-sans selection:bg-[#ccff00] selection:text-black">
      {/* Top Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking('1-Day Free Trial Pass')} />

        {/* Core Programs (Strength & Conditioning, Cardio & Group Fitness, Dance & Wellness, Health & Diet) */}
        <ServicesSection onSelectServiceForBooking={handleOpenBooking} />

        {/* Facility & Workout Area Gallery (Featuring both user-provided photos) */}
        <FeatureGallery />

        {/* Interactive Weekly Class Timetable (HIIT, CrossFit, Zumba, Kickboxing, Yoga) */}
        <ScheduleSection onOpenBooking={handleOpenBooking} />

        {/* Membership Plans & Pricing Preview */}
        <PricingSection onOpenBooking={handleOpenBooking} />

        {/* Customer Reviews (Rated 4.9★ Across 1.3k+ Google Reviews with required quotes) */}
        <ReviewsSection />

        {/* Location & Map (SCO 34, 35, 36, 37, Madhya Marg, Sector 9D, Chandigarh) */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Persistent Floating WhatsApp & Call Button */}
      <FloatingWhatsApp />

      {/* Interactive Reservation & Free Pass Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedProgramForBooking}
      />
    </div>
  );
};

export default App;
