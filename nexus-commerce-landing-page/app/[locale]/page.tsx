import React from 'react';
import HeaderComponent from '@/components/HeaderComponent';
import ContactSection from '@/components/sections/ContactSection';
import PricingSection from '@/components/sections/PricingSection';
import FeatureSection from '@/components/sections/FeatureSection';
import ModulesSection from '@/components/sections/ModulesSection';
import FooterComponent from '@/components/FooterComponent';

export default function LandingPage() {
  return (
    <div className='min-h-screen w-full bg-background text-foreground overflow-x-hidden'>
      <HeaderComponent />

      <main className='w-full'>
        <ModulesSection />
        <FeatureSection />
        <ContactSection />
        <PricingSection />
      </main>

      <FooterComponent />
    </div>
  );
}
