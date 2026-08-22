import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesCTA from "@/components/services/ServicesCTA";
import { servicesList } from "@/data/services";
import { ArrowRight, CheckCircle2, Cpu } from "lucide-react";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesList.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesList.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | KBS Information Technology",
    };
  }

  return {
    title: `${service.title} | KBS Information Technology`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesList.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesList.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#168BFF] selection:text-white">
      {/* Header */}
      <Header />

      <main className="flex-grow pt-28 sm:pt-32 pb-16">
        {/* Service Hero */}
        <section className="bg-[#F8FAFF] py-12 sm:py-16 border-b border-[#0F2346]/10">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-[#5B6475] mb-6">
              <Link href="/" className="hover:text-[#111827] transition-colors">
                Home
              </Link>
              <span className="text-slate-400 font-bold">&gt;</span>
              <Link href="/services-products" className="hover:text-[#111827] transition-colors">
                Services &amp; Products
              </Link>
              <span className="text-slate-400 font-bold">&gt;</span>
              <span className="text-[#168BFF] font-semibold">{service.title}</span>
            </nav>

            <div className="max-w-3xl">
              <div
                className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold mb-4"
                style={{
                  backgroundColor: service.badgeBg,
                  color: service.accentColor,
                }}
              >
                Service Specialization
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-4">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl text-[#5B6475] font-normal leading-relaxed mb-8">
                {service.description}
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-semibold text-sm hover:opacity-95 transition-all shadow-md group"
              >
                Request Proposal
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 sm:py-20 border-b border-[#0F2346]/10">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#168BFF] block mb-2">
                WHAT WE DELIVER
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                Enterprise Capabilities for {service.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Custom Solutions & Architecture",
                  desc: "Tailored engineering aligned with real business goals and legacy integration.",
                },
                {
                  title: "Scalable Infrastructure & Security",
                  desc: "Built to handle enterprise volume, high uptime, and zero compromise on security.",
                },
                {
                  title: "Continuous Optimization & Support",
                  desc: "Post-launch maintenance, SLAs, performance monitoring, and iterative scaling.",
                },
              ].map((cap, i) => (
                <div
                  key={i}
                  className="bg-white p-7 rounded-2xl border border-[#0F2346]/10 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <CheckCircle2 className="w-7 h-7 text-[#168BFF] mb-4" />
                    <h3 className="text-lg font-bold text-[#111827] mb-2 tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-[#5B6475] leading-relaxed font-normal">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 sm:py-20 bg-[#F8FAFF]">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#168BFF] block mb-1">
                EXPLORE FURTHER
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                Related Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  href={rel.href}
                  className="bg-white p-6 rounded-2xl border border-[#0F2346]/10 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-[#111827] mb-2 group-hover:text-[#168BFF] transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B6475] leading-relaxed mb-4">
                      {rel.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#168BFF] inline-flex items-center group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <ServicesCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
