"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, ShieldCheck, Cpu, Target, Sparkles, Building2 } from "lucide-react";

export default function WhatWeAreSection() {
  const identityPillars = [
    {
      id: "engineering-depth",
      title: "Engineering Depth",
      subtitle: "Deep Technical & Structural Expertise",
      description:
        "Built on cloud-native architectures, robust security, structural precision, and modern full-stack frameworks.",
      icon: Cpu,
      accent: "#168BFF",
      badge: "Tech Core",
    },
    {
      id: "product-mindset",
      title: "Product & SaaS Mindset",
      subtitle: "Software for Real Operations",
      description:
        "We build practical products and automation workflows that solve real business problems — not demo-ware.",
      icon: Target,
      accent: "#A52BFF",
      badge: "Real Impact",
    },
    {
      id: "cross-synergy",
      title: "Cross-Industry Synergies",
      subtitle: "Connected Ecosystem",
      description:
        "Uniting IT, SaaS automation, fintech payments, civil infrastructure, and skill development under one group.",
      icon: Layers,
      accent: "#00A8FF",
      badge: "Ecosystem",
    },
    {
      id: "group-backed",
      title: "Long-Term Ownership",
      subtitle: "One Group. Every Solution.",
      description:
        "Backed by the experience and stability of KBS Group, providing continuous support and long-term partnership.",
      icon: ShieldCheck,
      accent: "#FF9F1C",
      badge: "Reliability",
    },
  ];

  return (
    <section id="who-we-are" className="relative py-24 sm:py-32 bg-[#03142B] text-white overflow-hidden select-none border-t border-[#82A0FF]/15">
      {/* Dynamic Background Ambient Glow & Mesh Grid */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#168BFF]/15 via-[#6657FF]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#A52BFF]/15 via-transparent to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-[#168BFF] mb-4 backdrop-blur-md">
              <Building2 className="w-4 h-4 text-[#168BFF]" />
              WHO WE ARE
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              KBS Group <br />
              <span className="bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent inline-block">
                One Group. Every Solution.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6">
              KBS Group is a multi-vertical enterprise built on a simple belief: real transformation happens when engineering precision, digital innovation, financial access, and skilled talent come together under one roof. From structural and civil engineering to cutting-edge IT products, from business automation to accessible financial services, and from skill development to workforce readiness — we don&apos;t just serve industries, we power them end-to-end.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center text-sm font-bold text-[#168BFF] hover:text-white transition-colors group"
            >
              Learn More About KBS Group
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 4 Interactive Innovation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {identityPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/25 backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-300"
                      style={{
                        backgroundColor: `${pillar.accent}20`,
                        color: pillar.accent,
                        border: `1px solid ${pillar.accent}40`,
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-slate-300 border border-white/10">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-extrabold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs font-semibold mb-4" style={{ color: pillar.accent }}>
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                  <span>KBS Pillar</span>
                  <Sparkles className="w-4 h-4 text-slate-500 group-hover:text-[#168BFF] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
