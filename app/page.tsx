import React from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import IndustryAccordion from "@/components/home/IndustryAccordion";
import WhatWeAreSection from "@/components/home/WhatWeAreSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import TrustedBrands from "@/components/home/TrustedBrands";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#E52B2F] selection:text-white">
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Dark Stats Bar */}
        <StatsSection />

        {/* 4. 5-Vertical Coverflow Carousel */}
        <IndustryAccordion />

        {/* 5. What We Are */}
        <WhatWeAreSection />

        {/* 6. What We Do */}
        <WhatWeDoSection />

        {/* 7. Trusted Organizations / Logo Strip */}
        <TrustedBrands />

        {/* 8. Dark CTA */}
        <CTASection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
