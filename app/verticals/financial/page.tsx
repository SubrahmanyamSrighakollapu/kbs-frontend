import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  Landmark,
  CreditCard,
  Send,
  ShoppingBag,
  TrendingUp,
  ShieldCheck,
  Building2,
  Users,
  CheckCircle2,
  Store,
  Globe,
  Briefcase,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Services | KBS Group",
  description:
    "Financial Solutions Built for Business. Accept payments, manage payouts, offer flexible BNPL payment options, and access business finance.",
};

export default function FinancialPage() {
  const services = [
    {
      title: "Payment Gateway",
      subtitle: "Accept Payments. Grow With Confidence.",
      desc: "Give your customers convenient ways to pay while giving your business a reliable payment experience. Designed for secure collection and dependable scale.",
      icon: CreditCard,
      badge: "Payments",
      accent: "#168BFF",
    },
    {
      title: "Payouts",
      subtitle: "Move Money Where It Needs to Go.",
      desc: "Pay vendors, partners, employees, and business recipients through streamlined payout solutions. Reduce manual processing for disbursements.",
      icon: Send,
      badge: "Disbursements",
      accent: "#A52BFF",
    },
    {
      title: "Buy Now, Pay Later",
      subtitle: "Give Customers More Ways to Buy.",
      desc: "Flexible payment options for small and mid-sized retailers — helping them offer modern payment flexibility without custom financing code.",
      icon: ShoppingBag,
      badge: "Retail BNPL",
      accent: "#6657FF",
    },
    {
      title: "Business Finance",
      subtitle: "Capital for Your Next Move.",
      desc: "Access to working capital tailored around growing businesses, making access to business funding simple, practical, and fast.",
      icon: TrendingUp,
      badge: "Working Capital",
      accent: "#00A8FF",
    },
  ];

  const targetAudiences = [
    { title: "Retailers", desc: "Accept payments, offer flexible payment options, and improve customer experiences.", icon: Store },
    { title: "Online Businesses", desc: "Simplify digital payments and manage automated business payouts.", icon: Globe },
    { title: "Growing Businesses", desc: "Access financial tools that support everyday operations and expansion.", icon: TrendingUp },
    { title: "Marketplaces", desc: "Manage payments and payouts across multiple businesses and merchant partners.", icon: Layers },
    { title: "Enterprises", desc: "Build reliable financial workflows that scale with complex operations.", icon: Building2 },
  ];

  const steps = [
    { num: "01", title: "Understand", desc: "Tell us about your business and your financial workflow needs." },
    { num: "02", title: "Choose", desc: "Find the financial service or payment solution that fits your business model." },
    { num: "03", title: "Connect", desc: "Integrate the service seamlessly into your existing business workflow." },
    { num: "04", title: "Grow", desc: "Use better financial tools to serve customers, manage money, and expand." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#00A8FF] selection:text-white">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION WITH HERO-SECTION-DESIGN GRAPHIC */}
        <section className="relative w-full pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#03142B] text-white">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center lg:object-right pointer-events-none scale-[1.06] brightness-[1.08] contrast-[1.05] saturate-[1.1]"
            >
              <source src="/Financial Service Video.mp4" type="video/mp4" />
            </video>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(2, 12, 32, 0.98) 0%, rgba(3, 16, 42, 0.85) 35%, rgba(3, 16, 42, 0.2) 55%, transparent 75%)",
              }}
            />
          </div>

          <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl lg:max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-[#00A8FF] mb-6">
                <Landmark className="w-4 h-4 text-[#00A8FF]" />
                KBS FINANCIAL SERVICES
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Financial Solutions <br />
                <span className="bg-gradient-to-r from-[#168BFF] via-[#00A8FF] to-[#6657FF] bg-clip-text text-transparent inline-block">
                  Built for Business
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mb-8">
                Make payments easier. Manage money faster. Access the financial support your business needs to grow. KBS Financial Services builds practical fintech solutions for small, mid-sized, and growing businesses.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-[#168BFF] via-[#00A8FF] to-[#6657FF] text-white font-semibold text-sm sm:text-base hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-xl group"
                >
                  Talk to Our Team
                  <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/20 active:scale-95 transition-all"
                >
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>

          {/* Bottom-Left Hero Section Design Graphic */}
          <div
            className="absolute bottom-0 left-0 w-[550px] sm:w-[750px] md:w-[950px] lg:w-[1100px] max-w-full pointer-events-none z-[1] select-none mix-blend-screen opacity-85"
            style={{
              WebkitMaskImage: "radial-gradient(ellipse 85% 90% at 0% 100%, #000 40%, transparent 85%)",
              maskImage: "radial-gradient(ellipse 85% 90% at 0% 100%, #000 40%, transparent 85%)",
            }}
          >
            <Image
              src="/hero-section-design.png"
              alt=""
              width={2103}
              height={748}
              className="w-full h-auto object-contain object-bottom-left"
              priority
            />
          </div>
        </section>

        {/* SECTION: FINANCIAL SERVICES THAT UNDERSTAND BUSINESS */}
        <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00A8FF] block mb-3">
                REAL BUSINESS MONEY MANAGEMENT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-6">
                Financial Services That Understand Business
              </h2>
              <p className="text-base sm:text-lg text-[#5B6475] leading-relaxed mb-6 font-normal">
                Running a business means managing money every day. You need to collect payments, pay vendors, manage cash flow, serve customers, and find capital when it&apos;s time to grow.
              </p>
              <p className="text-base sm:text-lg text-[#111827] font-semibold leading-relaxed mb-8">
                KBS Financial Services brings these needs together through simple, reliable financial solutions designed around the way businesses actually operate. Less friction. More control. More opportunity.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: WHAT WE OFFER */}
        <section id="services" className="py-20 sm:py-28 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#168BFF] block mb-2">
                CORE FINTECH PRODUCT OFFERINGS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
                What We Offer
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-[#168BFF]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xs"
                          style={{ backgroundColor: `${s.accent}15`, color: s.accent }}
                        >
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white text-slate-700 border border-slate-200">
                          {s.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl font-extrabold text-[#111827] mb-2">{s.title}</h3>
                      <h4 className="text-base font-bold mb-4" style={{ color: s.accent }}>
                        {s.subtitle}
                      </h4>
                      <p className="text-sm sm:text-base text-[#5B6475] leading-relaxed mb-8 font-normal">
                        {s.desc}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-bold transition-colors group-hover:translate-x-1"
                      style={{ color: s.accent }}
                    >
                      Learn More About {s.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION: BUILT FOR BUSINESSES LIKE YOURS */}
        <section className="py-20 sm:py-28 bg-[#03142B] text-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00A8FF] block mb-2">
                TARGETED INDUSTRIES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Built for Businesses Like Yours
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {targetAudiences.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#00A8FF]/20 text-[#00A8FF] flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION: HOW IT WORKS */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#168BFF] block mb-2">
                SIMPLE INTEGRATION PROCESS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
                How It Works
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 relative flex flex-col justify-between hover:border-[#00A8FF]/40 transition-all"
                >
                  <div>
                    <span className="text-4xl font-black text-[#00A8FF] block mb-4">{s.num}</span>
                    <h3 className="text-xl font-extrabold text-[#111827] mb-3">{s.title}</h3>
                    <p className="text-sm text-[#5B6475] leading-relaxed font-normal">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="py-20 sm:py-24 bg-gradient-to-r from-[#03142B] via-[#061A36] to-[#03142B] text-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Ready to Put Financial Power Behind Your Business?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg mb-8 font-normal">
              Your business is growing. Your financial tools should grow with it. Let&apos;s build a simpler way to move money, serve customers, and grow your business.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#168BFF] via-[#00A8FF] to-[#6657FF] text-white font-semibold text-base hover:opacity-95 shadow-xl transition-all"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 ml-2.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
