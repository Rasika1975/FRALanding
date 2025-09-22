 import React from 'react';
import Navigation from '../../components/Navigation';
import HeroSection from '../../components/HeroSection';
import FeaturesSection from '../../components/FeaturesSection';
import HowItWorksSection from '../../components/HowItWorksSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0B0C0F]">
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;