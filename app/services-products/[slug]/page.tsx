import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, RefreshCw, ArrowLeft } from "lucide-react";
import { financialServicesData, automationSaaSData } from "@/data/services";

interface DetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "financial-services") {
    return {
      title: "Financial Services (Finjo) | KBS Information Technology",
      description: financialServicesData.heroDescription,
    };
  } else if (slug === "business-automation-saas") {
    return {
      title: "Business Automation & SaaS Products | KBS Information Technology",
      description: automationSaaSData.heroDescription,
    };
  }
  return {
    title: `${slug.replace(/-/g, " ").toUpperCase()} | KBS Information Technology`,
    description: "Engineering scalable digital products and enterprise software.",
  };
}

export default async function ServiceDetailPage({ params }: DetailPageProps) {
  const { slug } = await params;

  if (slug === "financial-services") {
    const data = financialServicesData;
    return (
      <div className="min-h-screen flex flex-col bg-white text-[#111827]">
        <Header />
        <main className="flex-grow pt-28 sm:pt-32 pb-20">
          {/* Detail Hero */}
          <section className="bg-[#03142B] text-white py-16 sm:py-20 relative overflow-hidden">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <Link href="/services-products" className="inline-flex items-center text-sm font-semibold text-slate-300 hover:text-white mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services &amp; Products
              </Link>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                {data.title}
              </h1>
              <p className="text-xl sm:text-2xl text-[#82A0FF] font-semibold mb-6">
                {data.heroTitlePrefix} {data.heroTitleHighlight}
              </p>
              <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed mb-8">
                {data.heroDescription}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-semibold text-sm hover:opacity-95 shadow-lg group"
                >
                  Talk to Our Fintech Team
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>

          {/* Deep Content */}
          <section className="py-16">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-12">
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Who We Are</h2>
                <p className="text-base sm:text-lg text-[#5B6475] leading-relaxed">{data.whoWeAre}</p>
              </div>

              {/* Offers Grid */}
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {data.offers.map((offer) => (
                  <div key={offer.id} className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="text-xl font-extrabold mb-3 text-[#111827]">{offer.title}</h3>
                    <p className="text-sm sm:text-base text-[#5B6475] leading-relaxed">{offer.description}</p>
                  </div>
                ))}
              </div>

              {/* What's Next */}
              <div className="p-8 rounded-2xl bg-[#03142B] text-white mb-16">
                <h3 className="text-xl font-extrabold mb-3 text-[#A52BFF]">What&apos;s Next in Financial Services</h3>
                <p className="text-base text-slate-200 leading-relaxed">{data.whatsNext}</p>
              </div>

              {/* Why Us */}
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">Why KBS Financial Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {data.whyUs.map((pillar) => (
                  <div key={pillar.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 className="text-base font-bold mb-2 text-[#111827]">{pillar.title}</h4>
                    <p className="text-xs text-[#5B6475] leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  } else if (slug === "business-automation-saas") {
    const data = automationSaaSData;
    return (
      <div className="min-h-screen flex flex-col bg-white text-[#111827]">
        <Header />
        <main className="flex-grow pt-28 sm:pt-32 pb-20">
          {/* Detail Hero */}
          <section className="bg-[#03142B] text-white py-16 sm:py-20 relative overflow-hidden">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <Link href="/services-products" className="inline-flex items-center text-sm font-semibold text-slate-300 hover:text-white mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services &amp; Products
              </Link>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                {data.title}
              </h1>
              <p className="text-xl sm:text-2xl text-[#D82DFF] font-semibold mb-6">
                {data.heroTitlePrefix} {data.heroTitleHighlight}
              </p>
              <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed mb-8">
                {data.heroDescription}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D82DFF] to-[#168BFF] text-white font-semibold text-sm hover:opacity-95 shadow-lg group"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>

          {/* Deep Content */}
          <section className="py-16">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-12">
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Who We Are</h2>
                <p className="text-base sm:text-lg text-[#5B6475] leading-relaxed">{data.whoWeAre}</p>
              </div>

              {/* Categories */}
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">SaaS &amp; Automation Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {data.categories.map((cat) => (
                  <div key={cat.id} className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="text-xl font-extrabold mb-4 text-[#111827]">{cat.categoryTitle}</h3>
                    <div className="space-y-4">
                      {cat.items.map((item, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200">
                          <h4 className="text-base font-bold text-[#111827] mb-1">{item.name}</h4>
                          <p className="text-sm text-[#5B6475] leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Us */}
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">Why KBS Automation &amp; SaaS</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {data.whyUs.map((pillar) => (
                  <div key={pillar.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 className="text-base font-bold mb-2 text-[#111827]">{pillar.title}</h4>
                    <p className="text-xs text-[#5B6475] leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  // Fallback for generic service detail
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827]">
      <Header />
      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services-products" className="inline-flex items-center text-sm font-semibold text-[#168BFF] mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services &amp; Products
          </Link>
          <h1 className="text-4xl font-extrabold capitalize mb-4">{slug.replace(/-/g, " ")}</h1>
          <p className="text-lg text-[#5B6475] mb-8">
            Engineering scalable digital products, cloud architectures, and automation solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#168BFF] to-[#6657FF] text-white font-semibold text-sm"
          >
            Contact Our Team
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
