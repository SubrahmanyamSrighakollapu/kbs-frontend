import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  Bot,
  Zap,
  CheckCircle2,
  Clock,
  ShieldCheck,
  BarChart3,
  TrendingUp,
  DollarSign,
  Maximize2,
  Layers,
  Sparkles,
  Store,
  Layout,
  Activity,
  CheckSquare,
  FileSearch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Automation Tools | KBS Group",
  description:
    "Systems that work while you unwind. Smart, streamlined business automation tools and SaaS products that help businesses eliminate manual bottlenecks and operate at their full potential.",
};

export default function AutomationPage() {
  const products = [
    {
      title: "Retail Automation",
      subtitle: "WinWala",
      desc: "An automated loyalty and gamification platform for retailers. Create rewards, spin wheels, stamp cards, VIP tiers, and customer engagement campaigns — all in one place.",
      icon: Store,
      badge: "Retail & Loyalty",
      accent: "#A52BFF",
      link: "#winwala",
    },
    {
      title: "Marketing Automation",
      subtitle: "Creavo",
      desc: "A self-service creative platform that helps businesses create posters, social media content, greetings, and promotional designs in minutes without a designer.",
      icon: Sparkles,
      badge: "Creative Tech",
      accent: "#168BFF",
      link: "#creavo",
    },
    {
      title: "Website Automation",
      subtitle: "AI Website Builder",
      desc: "Create and launch professional websites faster with AI-powered website generation and automated deployment and page maintenance.",
      icon: Layout,
      badge: "AI Generation",
      accent: "#6657FF",
      link: "#ai-website",
    },
    {
      title: "Operations & Monitoring",
      subtitle: "Central Monitoring & SCADA",
      desc: "Monitor operational systems and critical processes from a centralized environment. Get better visibility, identify issues faster, and make informed decisions.",
      icon: Activity,
      badge: "SCADA & Operations",
      accent: "#00A8FF",
      link: "#scada",
    },
    {
      title: "Project Management Automation",
      subtitle: "Workflow Tracker",
      desc: "Bring projects, tasks, teams, deadlines, and progress into one structured system. Reduce follow-ups and give everyone a clear view of project status.",
      icon: CheckSquare,
      badge: "Project Control",
      accent: "#FF9F1C",
      link: "#projects",
    },
    {
      title: "Engineering & Document Automation",
      subtitle: "AI Drawing Analysis",
      desc: "Review architectural and structural drawings faster with AI. Our platform compares drawings, identifies differences, and generates RFIs — reducing hours of manual review.",
      icon: FileSearch,
      badge: "AI Drawing Review",
      accent: "#D82DFF",
      link: "#ai-drawing",
    },
  ];

  const benefits = [
    { title: "Save Time", desc: "Let automation handle repetitive tasks so your team can focus on important decisions.", icon: Clock },
    { title: "Reduce Errors", desc: "Automated processes reduce mistakes that often happen during repetitive manual work.", icon: ShieldCheck },
    { title: "Improve Visibility", desc: "Get clearer information about customers, operations, projects, and performance.", icon: BarChart3 },
    { title: "Work Faster", desc: "Move tasks from manual processes to streamlined digital workflows.", icon: TrendingUp },
    { title: "Reduce Operational Costs", desc: "Spend less time and resources on repetitive work.", icon: DollarSign },
    { title: "Scale With Ease", desc: "Build processes that handle growth without increasing manual effort at the same rate.", icon: Maximize2 },
  ];

  const steps = [
    { num: "01", title: "Find the Problem", desc: "We understand your current process and identify repetitive or time-consuming tasks." },
    { num: "02", title: "Design the Workflow", desc: "We map the process and identify where automation creates the biggest impact." },
    { num: "03", title: "Build the Solution", desc: "We develop a SaaS product, automation workflow, or custom system around your requirements." },
    { num: "04", title: "Connect & Launch", desc: "We integrate the solution with your existing tools and put it into operation." },
    { num: "05", title: "Improve", desc: "We monitor, learn, and continuously improve the system as your business grows." },
  ];

  const automations = [
    "Customer Engagement",
    "Marketing",
    "Sales",
    "Operations",
    "Project Management",
    "Document Processing",
    "Monitoring",
    "Reporting",
    "Data Management",
    "Business Workflows",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#A52BFF] selection:text-white">
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
              <source src="/Automation Tools Video.mp4" type="video/mp4" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-[#A52BFF] mb-6">
                <Bot className="w-4 h-4 text-[#A52BFF]" />
                KBS BUSINESS AUTOMATION &amp; SAAS
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Systems That Work <br />
                <span className="bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent inline-block">
                  While You Unwind
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mb-8">
                Automate repetitive tasks, simplify daily operations, and give your team more time to focus on what matters. We build practical SaaS products and automation solutions that help businesses save time, reduce errors, and work smarter.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#what-we-build"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-semibold text-sm sm:text-base hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-xl group"
                >
                  Explore Our Products
                  <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/20 active:scale-95 transition-all"
                >
                  Talk to Our Team
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

        {/* SECTION: LESS MANUAL WORK. MORE BUSINESS */}
        <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#A52BFF] block mb-3">
                  PRACTICAL WORKFLOW AUTOMATION
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-6">
                  Less Manual Work. <br />
                  <span className="bg-gradient-to-r from-[#168BFF] to-[#6657FF] bg-clip-text text-transparent">
                    More Business.
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-[#5B6475] leading-relaxed mb-6">
                  Every business has tasks that are repeated every day. Data entry. Customer follow-ups. Marketing updates. Project tracking. Document checking. Reports and monitoring.
                </p>
                <p className="text-base sm:text-lg text-[#111827] font-semibold leading-relaxed mb-8">
                  These tasks take time — and time costs money. KBS Business Automation &amp; SaaS helps turn repetitive processes into simple, automated workflows.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm sm:text-base font-bold text-[#A52BFF] hover:text-[#6657FF] transition-colors group"
                >
                  Find What You Can Automate
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>

              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Data Entry & Syncing",
                    "Customer Follow-Ups",
                    "Marketing Updates",
                    "Project Tracking",
                    "Document Checking",
                    "Reports & Monitoring",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#A52BFF]/10 text-[#A52BFF] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-sm sm:text-base text-[#111827]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: WHAT WE BUILD */}
        <section id="what-we-build" className="py-20 sm:py-28 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#168BFF] block mb-2">
                SOLUTIONS &amp; SAAS PRODUCTS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
                What We Build
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    id={p.link.replace("#", "")}
                    className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center"
                          style={{ backgroundColor: `${p.accent}15`, color: p.accent }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                          {p.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-[#111827] mb-1">{p.title}</h3>
                      <h4 className="text-sm font-bold mb-4" style={{ color: p.accent }}>
                        {p.subtitle}
                      </h4>
                      <p className="text-sm text-[#5B6475] leading-relaxed mb-6 font-normal">
                        {p.desc}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center text-xs font-bold transition-colors group-hover:translate-x-1"
                      style={{ color: p.accent }}
                    >
                      Explore Solution
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION: WHY AUTOMATE YOUR BUSINESS */}
        <section className="py-20 sm:py-28 bg-[#03142B] text-white relative overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#A52BFF] block mb-2">
                MEASURABLE ROI &amp; EFFICIENCY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Why Automate Your Business?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#168BFF] to-[#A52BFF] flex items-center justify-center text-white mb-5 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION: HOW IT WORKS (5 STEPS) */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#168BFF] block mb-2">
                OUR METHODOLOGY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
                How It Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {steps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 relative flex flex-col justify-between hover:border-[#168BFF]/40 transition-all"
                >
                  <div>
                    <span className="text-3xl font-black text-[#168BFF] block mb-3">{s.num}</span>
                    <h3 className="text-base font-extrabold text-[#111827] mb-2">{s.title}</h3>
                    <p className="text-xs text-[#5B6475] leading-relaxed font-normal">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: WHAT CAN WE AUTOMATE GRID */}
        <section className="py-20 sm:py-24 bg-slate-900 text-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              What Can We Automate?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base mb-10">
              You don&apos;t need to know the technology. Just tell us what your team does manually.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto mb-12">
              {automations.map((item, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-white hover:bg-[#168BFF] hover:border-[#168BFF] transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-semibold text-sm sm:text-base hover:opacity-95 shadow-xl transition-all"
            >
              Talk to an Automation Expert
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
