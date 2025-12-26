'use client';

import { HomeNavbar } from '@/components/homepage/HomeNavbar';
import { HeroSection } from '@/components/homepage/sections/HeroSection';
import { WhyUsSection } from '@/components/homepage/sections/WhyUsSection';
import { StatsSection } from '@/components/homepage/sections/StatsSection';
import { TestimonialsSection } from '@/components/homepage/sections/TestimonialsSection';
import { FAQSection } from '@/components/homepage/sections/FAQSection';
import { ContactSection } from '@/components/homepage/sections/ContactSection';
import { ProductsSection } from '@/components/homepage/sections/ProductsSection'; 
import { Footer } from '@/components/homepage/sections/Footer';
import { StructuredData } from '@/components/seo/StructuredData';


export default function HomePage() {
  return (
    <>
      <StructuredData />
      <HomeNavbar />
      <div className="flex flex-col bg-[#0a0a0f] pt-16">
        <HeroSection />
        <WhyUsSection />
        <StatsSection />
        <ProductsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
