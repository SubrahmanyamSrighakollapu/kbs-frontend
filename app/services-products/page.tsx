import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProductsShowcase from "@/components/services/ProductsShowcase";
import TechnologyStrip from "@/components/services/TechnologyStrip";
import CaseStudySnapshot from "@/components/services/CaseStudySnapshot";
import ServicesCTA from "@/components/services/ServicesCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Services & Products | KBS Information Technology",
  description:
    "Explore KBS Information Technology services and products — engineering scalable software across fintech, marketplaces, AI automation, cloud DevOps, and enterprise solutions.",
};

export default function ServicesProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#168BFF] selection:text-white">
      {/* 1. Light Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* 2. Light Services Hero */}
        <ServicesHero />

        {/* 3. Service Capabilities Grid (7 Services) */}
        <ServicesGrid />

        {/* 4. Products Showcase & Process Grid (Dark Section) */}
        <ProductsShowcase />

        {/* 5. Technologies We Use */}
        <TechnologyStrip />

        {/* 6. Case Study Snapshot */}
        <CaseStudySnapshot />

        {/* 7. Closing CTA Panel */}
        <ServicesCTA />
      </main>

      {/* 8. Shared Footer */}
      <Footer />
    </div>
  );
}
