import Header from "@/components/layout/Header";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProductsShowcase from "@/components/services/ProductsShowcase";
import ProcessSection from "@/components/services/ProcessSection";
import TechnologiesStrip from "@/components/services/TechnologiesStrip";
import CaseStudySnapshot from "@/components/services/CaseStudySnapshot";
import ServicesCTA from "@/components/services/ServicesCTA";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Services & Products | KBS Information Technology",
  description: "Scalable. Secure. Powerful software products and enterprise IT engineering solutions built by KBS Group IT.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-[#E52B2F] selection:text-white">
      {/* 1. Shared Header */}
      <Header />

      {/* Main Services & Products Content Flow */}
      <main className="w-full overflow-hidden">
        {/* 2. Services & Products Hero */}
        <ServicesHero />

        {/* 3. Services / Capabilities Grid */}
        <ServicesGrid />

        {/* 4. Products Showcase */}
        <ProductsShowcase />

        {/* 5. Process Section */}
        <ProcessSection />

        {/* 6. Technologies We Use */}
        <TechnologiesStrip />

        {/* 7. Case Study Snapshot */}
        <CaseStudySnapshot />

        {/* 8. Closing CTA */}
        <ServicesCTA />
      </main>

      {/* 9. Shared Footer */}
      <Footer />
    </div>
  );
}
