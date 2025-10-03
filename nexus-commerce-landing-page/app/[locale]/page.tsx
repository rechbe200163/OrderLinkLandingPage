import React from 'react';
import HeaderComponent from '@/components/HeaderComponent';
import ContactSection from '@/components/sections/ContactSection';
import PricingSection from '@/components/sections/PricingSection';
import FeatureSection from '@/components/sections/FeatureSection';
import ModulesSection from '@/components/sections/ModulesSection';
import FooterComponent from '@/components/FooterComponent';
import MainSection from '@/components/sections/MainSection';

export default function LandingPage() {
  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950/50 to-emerald-950/30 text-white overflow-x-hidden'>
      <HeaderComponent />

      <main className='w-full'>
        <MainSection />
        <ModulesSection />
        <FeatureSection />
        <ContactSection />
        <PricingSection />
      </main>

      <FooterComponent />
    </div>
  );
}
