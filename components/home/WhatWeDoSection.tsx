"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Bot, Landmark, Building2, GraduationCap, CheckCircle2 } from "lucide-react";

export default function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      id: "civil",
      label: "Civil Engineering",
      title: "Civil Engineering Services",
      subtitle: "KBS Infrastructure & Engineering",
      description:
        "Specialized structural solutions including Tilt-Up construction, Light Gauge Steel Framing, Precast, Pre-Engineered Buildings (PEMB), Structural Steel, and BIM services — engineered for speed, strength, and scale.",
      bullets: [
        "Tilt-Up & Precast Construction",
        "Light Gauge Steel Framing (LGSF)",
        "Pre-Engineered Buildings (PEMB)",
        "Structural Steel & BIM Services",
      ],
      image: "/Civil Services.png",
      link: "/verticals/civil",
      accent: "#FF6B35",
      icon: Building2,
    },
    {
      id: "it",
      label: "Information Technology",
      title: "Information Technology",
      subtitle: "KBS Information Technology",
      description:
        "Since 2021, we've been building digital products and platforms that solve real business problems, from custom software to scalable digital ecosystems.",
      bullets: [
        "Custom Software Development",
        "Scalable Digital Ecosystems",
        "Websites & Mobile Applications",
        "Cloud Architecture & AI Products",
      ],
      image: "/It Services.png",
      link: "/verticals/it",
      accent: "#168BFF",
      icon: Cpu,
    },
    {
      id: "automation",
      label: "Business Automation",
      title: "Business Automation Tools",
      subtitle: "KBS Business Automation & SaaS",
      description:
        "Smart, streamlined systems that help businesses eliminate manual bottlenecks and operate at their full potential.",
      bullets: [
        "WinWala Retail Loyalty Platform",
        "Creavo Self-Service Creative Studio",
        "AI Website Generator & Automation",
        "SCADA Central System Monitoring",
      ],
      image: "/Automation Tools.png",
      link: "/verticals/automation",
      accent: "#A52BFF",
      icon: Bot,
    },
    {
      id: "financial",
      label: "Finance Services",
      title: "Finance Services",
      subtitle: "KBS Financial Services",
      description:
        "Payment gateways, payouts, BNPL, and business lending solutions designed to make capital and transactions frictionless for businesses of every size.",
      bullets: [
        "Secure Payment Gateways",
        "Automated Recipient Payouts",
        "Retail Buy Now Pay Later (BNPL)",
        "Practical Business Lending",
      ],
      image: "/Financial services.png",
      link: "/verticals/financial",
      accent: "#00A8FF",
      icon: Landmark,
    },
    {
      id: "skill-hub",
      label: "Skill Services",
      title: "Skill Services",
      subtitle: "KBS Skill Hub",
      description:
        "Talent development and training programs that build the workforce of tomorrow, bridging the gap between industry needs and employable skills.",
      bullets: [
        "Industry-Oriented Software Training",
        "IT & Civil Tool-Level Mastery",
        "Practitioner-Led Instruction",
        "Job-Ready Talent Development",
      ],
      image: "/Skill Hub.png",
      link: "/skill-hub",
      accent: "#6657FF",
      icon: GraduationCap,
    },
  ];

  const current = capabilities[activeTab];
  const Icon = current.icon;

  return (
    <section id="what-we-do" className="py-24 sm:py-32 bg-slate-50 text-[#111827] relative overflow-hidden select-none border-b border-slate-200">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#168BFF] block mb-2">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
            One Group. Every Solution.
          </h2>
          <p className="text-sm sm:text-base text-[#5B6475] mt-4 font-normal">
            Explore our core operational verticals across engineering, technology, automation, finance, and skill development.
          </p>
        </div>

        {/* Interactive Tab Navigation Strip */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {capabilities.map((cap, idx) => {
            const TabIcon = cap.icon;
            const isActive = idx === activeTab;

            return (
              <button
                key={cap.id}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 border ${isActive
                    ? "bg-[#03142B] text-white border-[#03142B] shadow-lg scale-105"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                  }`}
              >
                <TabIcon
                  className="w-4 h-4"
                  style={{ color: isActive ? cap.accent : "currentColor" }}
                />
                <span>{cap.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Highlight Showcase Card */}
        <Link href={current.link} className="block rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Text & Bullets */}
            <div className="lg:col-span-7">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                style={{ backgroundColor: `${current.accent}15`, color: current.accent }}
              >
                <Icon className="w-4 h-4" />
                {current.subtitle}
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-4 leading-tight">
                {current.title}
              </h3>

              <p className="text-base text-[#5B6475] font-normal leading-relaxed mb-8">
                {current.description}
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {current.bullets.map((item, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${current.accent}15`, color: current.accent }}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-[#111827]">{item}</span>
                  </div>
                ))}
              </div>

              <div
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base hover:opacity-95 active:scale-95 transition-all shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${current.accent}, #03142B)`,
                }}
              >
                Explore {current.label} Vertical
                <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>

            {/* Right Image Display */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03142B]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </Link>

        {/* Why KBS Group Showcase Card */}
        <div className="mt-16 bg-[#061A36] rounded-3xl p-8 sm:p-12 text-white border border-[#82A0FF]/20 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#168BFF] block mb-2">
              WHY KBS GROUP
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Infrastructure &amp; Innovation Unified.
            </h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-6">
              We operate at the intersection of infrastructure and innovation — where a construction site, a codebase, a credit line, and a classroom are all part of the same growth story. Headquartered in Hyderabad, we bring together diverse expertise to deliver integrated, reliable, and forward-thinking solutions across sectors.
            </p>
            <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-extrabold text-sm sm:text-base shadow-lg">
              One Group. Every Solution. That&apos;s KBS.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
