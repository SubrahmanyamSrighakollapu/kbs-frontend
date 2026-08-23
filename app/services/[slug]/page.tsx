import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/service-detail/ServiceHero";
import ServiceCapabilities from "@/components/service-detail/ServiceCapabilities";
import ServiceOfferings from "@/components/service-detail/ServiceOfferings";
import ServiceProcess from "@/components/service-detail/ServiceProcess";
import ServiceCaseStudies from "@/components/service-detail/ServiceCaseStudies";
import ServiceTechnologies from "@/components/service-detail/ServiceTechnologies";
import WhyKBS from "@/components/service-detail/WhyKBS";
import ServiceCTA from "@/components/service-detail/ServiceCTA";
import { detailedServicesMap } from "@/data/services";

// Helper slug normalizer map for aliases like product-engineering, ui-ux-design, software-development, qa-testing, cloud-devops, data-analytics, ai-automation, support-maintenance
const slugAliasMap: Record<string, string> = {
  "product-engineering": "product-engineering",
  "ui-ux-design": "ui-ux-design",
  "software-development": "software-development",
  "engineering": "software-development",
  "qa-testing": "qa-testing",
  "cloud-devops": "cloud-devops",
  "data-analytics": "data-analytics",
  "ai-automation": "ai-automation",
  "support-maintenance": "support-maintenance",
  "end-to-end-support": "support-maintenance",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const targetSlug = slugAliasMap[slug] || slug;
  const service = detailedServicesMap[targetSlug];

  if (!service) {
    return { title: "Service Not Found | KBS Information Technology" };
  }

  return {
    title: `${service.title} | KBS Information Technology`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const targetSlug = slugAliasMap[slug] || slug;
  const service = detailedServicesMap[targetSlug];

  if (!service) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-[#E52B2F] selection:text-white">
      {/* 1. Shared Header */}
      <Header />

      {/* Main Service Detail Content Flow */}
      <main className="w-full overflow-hidden">
        {/* 2. Hero */}
        <ServiceHero service={service} />

        {/* 3. Service Capabilities / Our Services */}
        <ServiceCapabilities service={service} />

        {/* 4. Detailed Service Offerings */}
        <ServiceOfferings service={service} />

        {/* 5. Our Process */}
        <ServiceProcess processSteps={service.process} />

        {/* 6. Relevant Work / Case Studies */}
        <ServiceCaseStudies caseStudies={service.caseStudies} />

        {/* 7. Technologies We Use */}
        <ServiceTechnologies technologies={service.technologies} />

        {/* 8. Why Choose KBS */}
        <WhyKBS items={service.whyKBS} />

        {/* 9. Service CTA */}
        <ServiceCTA />
      </main>

      {/* 10. Shared Footer */}
      <Footer />
    </div>
  );
}
