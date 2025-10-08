import React from 'react';
import HeaderComponent from '@/components/HeaderComponent';
import ContactSection from '@/components/sections/ContactSection';
import PricingSection from '@/components/sections/PricingSection';
import FeatureSection from '@/components/sections/FeatureSection';
import ModulesSection from '@/components/sections/ModulesSection';
import FooterComponent from '@/components/FooterComponent';
import MainSection from '@/components/sections/MainSection';
import TrustSection from '@/components/sections/TrustSection';
import { enableTrustSection } from '@/lib/utils';

export default function LandingPage() {
  console.log(enableTrustSection());
  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-slate-900 antialiased'>
      <HeaderComponent />

      <main className='w-full'>
        <MainSection />
        {enableTrustSection() && <TrustSection />}
        <ModulesSection />
        <FeatureSection />
        <PricingSection />
        <ContactSection />
      </main>

      <FooterComponent />
    </div>
  );
}
