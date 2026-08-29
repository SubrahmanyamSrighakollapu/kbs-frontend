import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Briefcase, Users, Zap, ShieldCheck, Heart, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | KBS Group",
  description:
    "Join KBS Group. Explore career opportunities in technology, software engineering, fintech, civil engineering, and business automation.",
};

export default function CareersPage() {
  const perks = [
    { title: "Real-World Impact", desc: "Work on products and software used by real businesses across diverse verticals.", icon: Zap, accent: "#168BFF" },
    { title: "Cross-Industry Growth", desc: "Gain experience across IT, SaaS automation, fintech, civil engineering, and skill training.", icon: Sparkles, accent: "#A52BFF" },
    { title: "Ownership & Mastery", desc: "We value ownership, technical depth, and practical solutions over bureaucracy.", icon: ShieldCheck, accent: "#6657FF" },
    { title: "Collaborative Team", desc: "Learn alongside passionate developers, designers, engineers, and domain experts.", icon: Users, accent: "#00A8FF" },
  ];

  const positions = [
    { title: "Full Stack Engineer (React / Next.js / Node.js)", department: "IT & SaaS", location: "Hyderabad, India", type: "Full-Time" },
    { title: "Fintech Product Manager", department: "Financial Services", location: "Hyderabad, India", type: "Full-Time" },
    { title: "Civil & Structural Engineer (BIM / Revit)", department: "Civil Engineering", location: "Hyderabad, India", type: "Full-Time" },
    { title: "Technical Trainer & Mentor (IT / Civil)", department: "Skill Hub", location: "Hyderabad / Remote", type: "Full-Time / Part-Time" },
    { title: "AI / Automation Engineer", department: "Business Automation", location: "Hyderabad, India", type: "Full-Time" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#168BFF] selection:text-white">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION WITH HERO-SECTION-DESIGN GRAPHIC */}
        <section className="relative w-full pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#03142B] text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/about-us-bg.png"
              alt="Careers at KBS Group"
              fill
              priority
              className="object-cover object-center opacity-30"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(2, 12, 32, 0.98) 0%, rgba(3, 17, 43, 0.92) 40%, rgba(4, 20, 48, 0.60) 70%, rgba(4, 15, 35, 0.3) 100%)",
              }}
            />
          </div>

          <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl lg:max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-[#168BFF] mb-6">
                <Briefcase className="w-4 h-4 text-[#168BFF]" />
                CAREERS AT KBS GROUP
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Build Today. <br />
                <span className="bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent inline-block">
                  Shape Tomorrow.
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mb-8">
                Join a multi-vertical group engineered for real impact. We are looking for builders, engineers, designers, and innovators who solve real problems.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#openings"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-semibold text-sm sm:text-base hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-xl group"
                >
                  View Openings
                  <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/20 active:scale-95 transition-all"
                >
                  Contact HR Team
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

        {/* WHY JOIN US */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#168BFF] block mb-2">
                LIFE AT KBS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
                Why Work With Us?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {perks.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${p.accent}15`, color: p.accent }}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-extrabold text-[#111827] mb-3">{p.title}</h3>
                      <p className="text-sm text-[#5B6475] leading-relaxed font-normal">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OPEN POSITIONS */}
        <section id="openings" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#A52BFF] block mb-2">
                CURRENT OPPORTUNITIES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
                Open Positions
              </h2>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {positions.map((pos, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#168BFF] block mb-1">
                      {pos.department} • {pos.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#111827]">{pos.title}</h3>
                    <span className="text-xs text-slate-500 font-medium">{pos.location}</span>
                  </div>

                  <Link
                    href={`/contact?apply=${encodeURIComponent(pos.title)}`}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#03142B] text-white font-semibold text-xs sm:text-sm hover:bg-[#168BFF] transition-colors shrink-0"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
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
