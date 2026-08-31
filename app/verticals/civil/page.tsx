import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  Building2,
  HardHat,
  FileSearch,
  CheckCircle2,
  Layers,
  Ruler,
  Cpu,
  FileText,
  Briefcase,
  Users,
  Compass,
  Sparkles,
  ShieldCheck,
  Zap,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Civil Engineering Services | KBS Group",
  description:
    "Specialized structural solutions including Tilt-Up construction, Light Gauge Steel Framing (LGSF), Precast, Pre-Engineered Buildings (PEMB), Structural Steel, and BIM services — engineered for speed, strength, and scale.",
};

export default function CivilPage() {
  const services = [
    {
      id: "structural",
      title: "Structural Engineering",
      tagline: "Strong Designs. Reliable Structures.",
      description:
        "We provide structural engineering solutions focused on safety, stability, functionality, and efficient use of materials. Our services support different stages of structural design, from initial concepts to detailed engineering.",
      cta: "Explore Structural Services",
      icon: Ruler,
      accent: "#FF6B35",
    },
    {
      id: "drawing-analysis",
      title: "Architectural & Structural Drawing Analysis",
      tagline: "Understand Drawings. Identify Issues Earlier.",
      description:
        "We review and compare architectural and structural drawings to identify differences, inconsistencies, and potential coordination issues. Our approach combines engineering expertise with technology to make drawing review faster and more efficient.",
      cta: "Learn More",
      icon: FileSearch,
      accent: "#A52BFF",
    },
    {
      id: "quantity-support",
      title: "Quantity & Engineering Support",
      tagline: "Better Information for Better Decisions.",
      description:
        "We support project teams with engineering information, measurements, documentation, and technical inputs needed for effective project planning and execution.",
      cta: "Explore Engineering Support",
      icon: Compass,
      accent: "#168BFF",
    },
    {
      id: "documentation",
      title: "Project Documentation",
      tagline: "Clear Documentation. Better Coordination.",
      description:
        "Accurate documentation helps teams stay aligned throughout a project. We support the preparation and review of technical documents, drawings, reports, and engineering information.",
      cta: "Explore Documentation Services",
      icon: FileText,
      accent: "#00A8FF",
    },
    {
      id: "coordination",
      title: "Drawing Coordination",
      tagline: "Connect Design With Execution.",
      description:
        "We help identify coordination issues between different drawings and disciplines before they become costly problems on site. Our goal is simple: Identify. Coordinate. Resolve.",
      cta: "Talk to Our Team",
      icon: Layers,
      accent: "#FF9F1C",
    },
  ];

  const whyUs = [
    {
      title: "Engineering Expertise",
      desc: "Solutions are developed with practical engineering knowledge and project understanding.",
      icon: HardHat,
    },
    {
      title: "Accuracy Focused",
      desc: "We pay close attention to drawings, documentation, coordination, and technical details.",
      icon: Target,
    },
    {
      title: "Technology Enabled",
      desc: "We use modern tools, AI, and automation where they can improve engineering workflows.",
      icon: Cpu,
    },
    {
      title: "Project Focused",
      desc: "Our work is designed around real project requirements, timelines, and challenges.",
      icon: Briefcase,
    },
    {
      title: "Better Coordination",
      desc: "We help teams identify issues earlier and improve communication between disciplines.",
      icon: ShieldCheck,
    },
    {
      title: "KBS Group Backed",
      desc: "Part of KBS Group — One Group. Every Solution.",
      icon: Building2,
    },
  ];

  const steps = [
    { num: "01", title: "Understand", desc: "We understand your project, requirements, drawings, and engineering challenges." },
    { num: "02", title: "Analyze", desc: "Our team reviews the available information and identifies key technical requirements." },
    { num: "03", title: "Design & Develop", desc: "We create engineering solutions, drawings, documentation, or analysis based on the project." },
    { num: "04", title: "Review", desc: "We carefully check the work for accuracy, coordination, and project requirements." },
    { num: "05", title: "Deliver", desc: "We provide clear, organized engineering deliverables that your team can use." },
    { num: "06", title: "Support", desc: "We remain available to support changes, coordination, and evolving project requirements." },
  ];

  const whoWeSupport = [
    {
      title: "Contractors",
      desc: "Engineering support that helps projects move smoothly from design to execution.",
      icon: HardHat,
      accent: "#FF6B35",
    },
    {
      title: "Developers",
      desc: "Reliable engineering inputs for residential, commercial, and infrastructure projects.",
      icon: Building2,
      accent: "#168BFF",
    },
    {
      title: "Engineering Consultants",
      desc: "Additional technical support for drawings, analysis, documentation, and coordination.",
      icon: Compass,
      accent: "#A52BFF",
    },
    {
      title: "Architects",
      desc: "Structural and technical coordination to connect architectural vision with engineering requirements.",
      icon: Layers,
      accent: "#FF9F1C",
    },
    {
      title: "Project Teams",
      desc: "Practical engineering support for complex and evolving project needs.",
      icon: Users,
      accent: "#00A8FF",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#FF6B35] selection:text-white">
      <Header />

      <main className="flex-grow">
        {/* 1. HERO SECTION WITH VIDEO BG & GRAPHIC */}
        <section className="relative w-full pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#03142B] text-white">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center lg:object-right pointer-events-none scale-[1.06] brightness-[1.08] contrast-[1.05] saturate-[1.1]"
            >
              <source src="/All Verticals video.mp4" type="video/mp4" />
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-[#FF6B35] mb-6">
                <Building2 className="w-4 h-4 text-[#FF6B35]" />
                KBS CIVIL ENGINEERING SERVICES
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Engineering Solutions <br />
                <span className="bg-gradient-to-r from-[#FF6B35] via-[#FF9F1C] to-[#A52BFF] bg-clip-text text-transparent inline-block">
                  Built for Real Projects
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mb-8">
                We provide practical Civil and Structural Engineering services that help projects move from drawings to execution with greater accuracy, clarity, and efficiency.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FF9F1C] to-[#A52BFF] text-white font-semibold text-sm sm:text-base hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-xl group"
                >
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/20 active:scale-95 transition-all"
                >
                  Talk to Our Engineers
                </Link>
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

        {/* 2. SECTION: ENGINEERING THAT SUPPORTS EVERY STAGE */}
        <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF6B35] block mb-3">
                END-TO-END PROJECT SUPPORT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-6">
                Engineering That Supports Every Stage of Your Project
              </h2>
              <p className="text-base sm:text-lg text-[#5B6475] leading-relaxed mb-6 font-normal">
                Successful projects need more than good construction. They need accurate drawings, reliable engineering, clear documentation, and the right decisions at every stage.
              </p>
              <p className="text-base sm:text-lg text-[#111827] font-semibold leading-relaxed mb-8">
                KBS Civil Engineering Services supports project teams with practical engineering solutions designed to improve accuracy, coordination, and project efficiency.
              </p>

              <div className="inline-block px-6 py-3 rounded-full bg-[#03142B] text-white text-sm sm:text-base font-extrabold tracking-wide shadow-md">
                Plan Better. Design Smarter. Build with Confidence.
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECTION: OUR SERVICES */}
        <section id="services" className="py-20 sm:py-28 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF6B35] block mb-2">
                WHAT WE PROVIDE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
                Our Engineering Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.id}
                    className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-[#FF6B35]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-xs"
                        style={{ backgroundColor: `${s.accent}15`, color: s.accent }}
                      >
                        <Icon className="w-7 h-7" />
                      </div>

                      <h3 className="text-2xl font-extrabold text-[#111827] mb-2">{s.title}</h3>
                      <h4 className="text-sm font-bold mb-4" style={{ color: s.accent }}>
                        {s.tagline}
                      </h4>
                      <p className="text-sm sm:text-base text-[#5B6475] leading-relaxed mb-8 font-normal">
                        {s.description}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-bold transition-colors group-hover:translate-x-1"
                      style={{ color: s.accent }}
                    >
                      {s.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. SECTION: AI-POWERED ENGINEERING SOLUTIONS */}
        <section className="py-20 sm:py-28 bg-[#03142B] text-white relative overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B35]/15 text-[#FF6B35] border border-[#FF6B35]/25 text-xs font-extrabold uppercase tracking-widest mb-4">
                  <Sparkles className="w-4 h-4" />
                  AI-POWERED ENGINEERING SOLUTIONS
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
                  Bringing Technology Into Engineering
                </h2>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
                  We combine engineering knowledge with AI and automation to simplify time-consuming tasks.
                </p>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 font-semibold">
                  Our technology initiatives include AI-powered drawing analysis that can compare architectural and structural drawings and assist in generating Requests for Information (RFIs). This helps project teams reduce manual review time and focus on critical engineering decisions.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FF9F1C] to-[#A52BFF] text-white font-semibold text-sm sm:text-base hover:opacity-95 transition-all shadow-lg group"
                >
                  Explore Engineering Technology
                  <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>

              <div className="lg:col-span-5">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center shrink-0">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">AI Drawing Comparison</h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Automatically spot discrepancies between architectural and structural blueprints.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#A52BFF]/20 text-[#A52BFF] flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Automated RFI Assistance</h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Assist in generating formal Requests for Information to resolve site questions faster.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#168BFF]/20 text-[#168BFF] flex items-center justify-center shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Reduced Manual Review Time</h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Free up senior engineers from tedious manual checks so they focus on high-impact decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SECTION: WHY KBS CIVIL ENGINEERING SERVICES? */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF6B35] block mb-2">
                THE KBS ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
                Why KBS Civil Engineering Services?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyUs.map((w, idx) => {
                const Icon = w.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-[#FF6B35]/30 shadow-xs hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#111827] mb-3">{w.title}</h3>
                    <p className="text-sm text-[#5B6475] leading-relaxed font-normal">{w.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. SECTION: HOW WE WORK (6 STEPS) */}
        <section className="py-20 sm:py-28 bg-slate-900 text-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF6B35] block mb-2">
                OUR METHODOLOGY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                How We Work
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FF6B35]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-extrabold text-[#FF6B35] block mb-4">
                      {step.num}
                    </span>
                    <h3 className="text-xl font-extrabold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. SECTION: WHO WE SUPPORT */}
        <section className="py-20 sm:py-28 bg-slate-50">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF6B35] block mb-2">
                TAILORED SOLUTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
                Who We Support
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whoWeSupport.map((w, idx) => {
                const Icon = w.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all flex items-start gap-5"
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${w.accent}15`, color: w.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#111827] mb-2">{w.title}</h3>
                      <p className="text-sm text-[#5B6475] leading-relaxed font-normal">{w.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. SECTION: ENGINEERING MEETS TECHNOLOGY */}
        <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-6">
              Engineering Meets Technology
            </h2>
            <p className="text-base sm:text-lg text-[#5B6475] leading-relaxed mb-8 font-normal">
              The future of engineering isn&apos;t just about better designs. It&apos;s about better ways of working. By combining engineering expertise with AI, automation, and digital workflows, we aim to reduce repetitive work, improve coordination, and help engineering teams make better decisions faster.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#03142B] text-white font-semibold text-base hover:bg-[#168BFF] transition-colors shadow-xl"
            >
              Explore Our Technology
              <ArrowRight className="w-5 h-5 ml-2.5" />
            </Link>
          </div>
        </section>

        {/* 9. CLOSING CTA BANNER */}
        <section className="py-20 sm:py-28 bg-[#03142B] text-white relative overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Built for Better Projects
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg mb-8 font-normal">
              Whether you need structural engineering, drawing analysis, project support, documentation, or engineering automation, KBS Civil Engineering Services is ready to help.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FF9F1C] to-[#A52BFF] text-white font-semibold text-base hover:opacity-95 shadow-xl transition-all"
              >
                Explore Our Services
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-base hover:bg-white/20 transition-all"
              >
                Talk to Our Engineers
              </Link>
            </div>

            {/* Bottom Final Callout Box */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md max-w-3xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Let&apos;s Build Better
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-4 font-normal">
                Have a project, drawing, or engineering challenge? Let&apos;s discuss how our team can support you.
              </p>
              <p className="text-base sm:text-lg font-extrabold text-[#FF6B35] mb-6">
                Better Engineering. Better Coordination. Better Projects.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#FF6B35] text-white font-bold text-sm sm:text-base hover:bg-[#FF9F1C] transition-colors"
              >
                Start a Conversation →
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-semibold tracking-wide uppercase mt-10">
              KBS Civil Engineering Services — Engineering expertise powered by technology.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
