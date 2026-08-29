import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  Cpu,
  Globe,
  Smartphone,
  Bot,
  Landmark,
  ShoppingCart,
  Layers,
  CheckCircle2,
  Sparkles,
  Award,
  HardHat,
  Trophy,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Information Technology | KBS Group",
  description:
    "We Build Technology That Helps Businesses Grow. Websites, mobile apps, AI-powered platforms, and enterprise software engineering.",
};

export default function ITPage() {
  const capabilities = [
    { title: "Websites & Web Applications", desc: "Modern, responsive websites and powerful web applications designed around your business goals.", icon: Globe, accent: "#168BFF" },
    { title: "Mobile Applications", desc: "Easy-to-use Android and iOS applications that connect your business with your customers.", icon: Smartphone, accent: "#A52BFF" },
    { title: "AI & Automation", desc: "Use AI and automation to reduce repetitive work, improve productivity, and make smarter decisions.", icon: Bot, accent: "#6657FF" },
    { title: "Fintech Solutions", desc: "Payment, lending, payout, and financial technology platforms built for secure and scalable operations.", icon: Landmark, accent: "#00A8FF" },
    { title: "E-Commerce & Marketplaces", desc: "Build online stores, multi-vendor marketplaces, and hyperlocal platforms connecting local businesses.", icon: ShoppingCart, accent: "#FF9F1C" },
    { title: "Business Platforms", desc: "Custom software that brings your business operations, customers, teams, and data together in one place.", icon: Layers, accent: "#D82DFF" },
  ];

  const products = [
    { title: "Finjo", subtitle: "Fintech Platform", desc: "Financial technology solutions for payments, payouts, lending, and business finance.", icon: Shield },
    { title: "Desi Dukan & Helyi", subtitle: "Hyperlocal Commerce", desc: "Hyperlocal marketplace platforms connecting local stores, services, and customers.", icon: ShoppingCart },
    { title: "WinWala", subtitle: "Engagement & Loyalty", desc: "Customer loyalty and engagement technology that helps retailers increase repeat business.", icon: Trophy },
    { title: "Creavo", subtitle: "Creative Studio", desc: "A simple creative platform helping businesses create marketing content and social media designs.", icon: Sparkles },
    { title: "Naya Leader", subtitle: "Civic Network", desc: "A digital platform designed to improve communication between leaders and communities.", icon: Award },
    { title: "AI Construction Platform", subtitle: "PropTech & BIM AI", desc: "AI-powered drawing analysis that helps construction teams compare plans and reduce manual review.", icon: HardHat },
  ];

  const steps = [
    { num: "01", title: "Understand", desc: "We first understand your business, users, challenges, and goals." },
    { num: "02", title: "Plan", desc: "We create a clear technology strategy and roadmap for your project." },
    { num: "03", title: "Design", desc: "We design simple, intuitive experiences that users can understand easily." },
    { num: "04", title: "Build", desc: "Our team develops, tests, and integrates your technology." },
    { num: "05", title: "Launch", desc: "We help take your product from development to the real world." },
    { num: "06", title: "Improve", desc: "We continue supporting and improving your product as your business grows." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#168BFF] selection:text-white">
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
              <source src="/IT Services Video.mp4" type="video/mp4" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-[#168BFF] mb-6">
                <Cpu className="w-4 h-4 text-[#168BFF]" />
                KBS INFORMATION TECHNOLOGY
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                We Build Technology <br />
                <span className="bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent inline-block">
                  That Helps Businesses Grow
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mb-8">
                From websites and mobile apps to AI-powered platforms and business automation, we create simple, reliable technology solutions for real business needs.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-semibold text-sm sm:text-base hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-xl group"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="#build"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/20 active:scale-95 transition-all"
                >
                  Explore Our Solutions
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

        {/* TECHNOLOGY MADE FOR BUSINESS */}
        <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#168BFF] block mb-3">
              ENGINEERING REAL IMPACT SINCE 2021
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-6">
              Technology Made for Business
            </h2>
            <p className="text-base sm:text-lg text-[#5B6475] leading-relaxed mb-6 font-normal">
              At KBS Information Technology, we turn ideas and business challenges into practical digital solutions. As part of KBS Group, we have been building and improving technology solutions since 2021 across finance, retail, commerce, healthcare, education, civic technology, and construction.
            </p>
            <p className="text-base sm:text-lg text-[#111827] font-semibold leading-relaxed">
              Whether you are starting something new or improving an existing system, we help you move from idea &rarr; product &rarr; growth.
            </p>
          </div>
        </section>

        {/* WHAT WE CAN BUILD FOR YOU */}
        <section id="build" className="py-20 sm:py-28 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#A52BFF] block mb-2">
                FULL-STACK DIGITAL CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
                What We Can Build for You
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-[#168BFF]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-xs"
                        style={{ backgroundColor: `${c.accent}15`, color: c.accent }}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-extrabold text-[#111827] mb-3">{c.title}</h3>
                      <p className="text-sm text-[#5B6475] leading-relaxed mb-6 font-normal">
                        {c.desc}
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-xs font-bold transition-colors group-hover:translate-x-1"
                      style={{ color: c.accent }}
                    >
                      Start Building
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OUR DIGITAL PRODUCTS */}
        <section className="py-20 sm:py-28 bg-[#03142B] text-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#168BFF] block mb-2">
                PROVEN DIGITAL ECOSYSTEM
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Our Digital Products
              </h2>
              <p className="text-slate-300 mt-4 text-base">
                We don&apos;t just advise businesses on technology. We build and operate real products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#168BFF]/20 text-[#168BFF] flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{p.title}</h3>
                      <p className="text-xs font-semibold text-[#A52BFF] mb-4">{p.subtitle}</p>
                      <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                        {p.desc}
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-xs font-bold text-[#168BFF] hover:text-white transition-colors"
                    >
                      View Product
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW WE WORK (6 STEPS) */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#6657FF] block mb-2">
                CLEAR &amp; STRUCTURED ROADMAP
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
                How We Work
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {steps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:border-[#6657FF]/40 transition-all"
                >
                  <div>
                    <span className="text-3xl font-black text-[#6657FF] block mb-3">{s.num}</span>
                    <h3 className="text-base font-extrabold text-[#111827] mb-2">{s.title}</h3>
                    <p className="text-xs text-[#5B6475] leading-relaxed font-normal">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="py-20 sm:py-24 bg-slate-900 text-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Let&apos;s Build What&apos;s Next
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-base sm:text-lg mb-8">
              Your business has a goal. We can build the technology to help you reach it. Tell us what you&apos;re trying to build, improve, or automate.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-semibold text-base hover:opacity-95 shadow-xl transition-all"
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
