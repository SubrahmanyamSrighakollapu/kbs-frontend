"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Bot, Landmark, Building2, GraduationCap, CheckCircle2 } from "lucide-react";

export default function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      id: "it",
      label: "IT & Software",
      title: "Custom Software Engineering & Cloud Platforms",
      subtitle: "KBS Information Technology",
      description:
        "We build scalable web applications, mobile apps, fintech platforms, and custom software systems designed around your real operational needs.",
      bullets: [
        "Websites & Full-Stack Web Applications",
        "Android & iOS Mobile Apps",
        "Cloud Architecture & AI Integration",
        "E-Commerce & Hyperlocal Marketplaces",
      ],
      image: "/It Services.png",
      link: "/verticals/it",
      accent: "#168BFF",
      icon: Cpu,
    },
    {
      id: "automation",
      label: "Automation & SaaS",
      title: "Workflow Automation & SaaS Products",
      subtitle: "KBS Business Automation & SaaS",
      description:
        "Turn repetitive manual processes into automated digital workflows. Save time, eliminate errors, and let your team focus on core growth.",
      bullets: [
        "WinWala Retail Loyalty & Engagement",
        "Creavo Self-Service Creative Studio",
        "AI Website Generator & Deployment",
        "SCADA Central Process Monitoring",
      ],
      image: "/Automation Tools.png",
      link: "/verticals/automation",
      accent: "#A52BFF",
      icon: Bot,
    },
    {
      id: "financial",
      label: "Fintech & Payments",
      title: "Payment Gateways & Business Financial Tools",
      subtitle: "KBS Financial Services",
      description:
        "Fintech solutions built for businesses. Collect payments seamlessly, disburse payouts, offer flexible BNPL financing, and access working capital.",
      bullets: [
        "Secure Payment Gateway Collection",
        "Automated Vendor & Recipient Payouts",
        "Retail Buy Now Pay Later (BNPL)",
        "Practical Business Working Capital",
      ],
      image: "/Financial services.png",
      link: "/verticals/financial",
      accent: "#00A8FF",
      icon: Landmark,
    },
    {
      id: "civil",
      label: "Civil & Infra",
      title: "Civil Engineering, Structural Design & AI Drawing",
      subtitle: "KBS Civil & Infrastructure",
      description:
        "Delivering quality construction, structural load analysis, BIM 3D drafting, SCADA monitoring, and AI-powered architectural drawing comparison.",
      bullets: [
        "Structural Engineering & RCC Design",
        "BIM 3D Drafting & Revit Workflows",
        "AI Drawing Difference Analysis",
        "Smart Infrastructure & Site Control",
      ],
      image: "/Civil Services.png",
      link: "/verticals/civil",
      accent: "#FF6B35",
      icon: Building2,
    },
    {
      id: "skill-hub",
      label: "Skill Hub",
      title: "Industry-Focused Workplace Software Training",
      subtitle: "KBS Skill Hub",
      description:
        "Bridging the gap between classrooms and careers. Hands-on IT software and Civil Engineering training guided by active working industry professionals.",
      bullets: [
        "Full-Stack Web & API Engineering",
        "AutoCAD, Revit & Structural Software",
        "Practitioner-Led Project Workflows",
        "Career-Ready Job Employability",
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
    <section className="py-24 sm:py-32 bg-slate-50 text-[#111827] relative overflow-hidden select-none border-b border-slate-200">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#168BFF] block mb-2">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight">
            Turning Complex Business Challenges Into Scalable Reality.
          </h2>
          <p className="text-sm sm:text-base text-[#5B6475] mt-4 font-normal">
            Explore our core operational streams across software, SaaS, fintech, civil engineering, and skill training.
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
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 border ${
                  isActive
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
        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
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

            <Link
              href={current.link}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base hover:opacity-95 active:scale-95 transition-all shadow-md group"
              style={{
                background: `linear-gradient(135deg, ${current.accent}, #03142B)`,
              }}
            >
              Explore {current.label} Vertical
              <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* Right Image Display */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200">
              <Image
                src={current.image}
                alt={current.title}
                fill
                priority
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03142B]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
