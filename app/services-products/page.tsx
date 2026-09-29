import React from "react";
import { constructMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import ServicesHero from "@/components/services/ServicesHero";
import VisionMissionStrip from "@/components/services/VisionMissionStrip";
import FinancialOfferings from "@/components/services/FinancialOfferings";
import FinancialFuture from "@/components/services/FinancialFuture";
import WhyKBSFinancial from "@/components/services/WhyKBSFinancial";
import FinancialCTA from "@/components/services/FinancialCTA";
import ProductsProcess from "@/components/services/ProductsProcess";
import TechnologyStrip from "@/components/services/TechnologyStrip";
import CaseStudySnapshot from "@/components/services/CaseStudySnapshot";
import ServicesCTA from "@/components/services/ServicesCTA";
import Footer from "@/components/layout/Footer";

export const metadata = constructMetadata({
  title: "Services & Products | KBS Group",
  description: "Explore KBS services and products including Vividuss, Build Right Tec, Helyi, Creavo, Finjo, WinWala, Desi Dukan, Naya Leader, AI, cloud, and BIM solutions.",
  path: "/services-products",
  keywords: ["KBS Group services", "KBS Group products", "software products Hyderabad", "enterprise solutions", "Vividuss", "Build Right Tec", "Helyi", "Creavo", "Finjo", "WinWala"],
  image: "/services-ui-desing.png",
});

export default function ServicesProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#020B19] text-white selection:bg-[#1688FF] selection:text-white">
      {/* 1. Shared Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Immersive 3D Dark Hero */}
        <ServicesHero />

        {/* 3. Horizontal Vision & Mission Strip */}
        <VisionMissionStrip />

        {/* 4. Financial Offerings (4 Horizontal Columns) */}
        <FinancialOfferings />

        {/* 5. What's Next in Financial Services (Editorial Split) */}
        <FinancialFuture />

        {/* 6. Why KBS Financial Services (5 Columns) */}
        <WhyKBSFinancial />

        {/* 7. Financial Services CTA Strip */}
        <FinancialCTA />

        {/* 8. Combined Products + Connected Process Experience */}
        <ProductsProcess />

        {/* 9. Enterprise Technology Stack Slider */}
        <TechnologyStrip />

        {/* 10. Case Study Snapshot Container */}
        <CaseStudySnapshot />

        {/* 11. Final Gradient Call To Action */}
        <ServicesCTA />
      </main>

      {/* 12. Shared Site Footer */}
      <Footer />
    </div>
  );
}
