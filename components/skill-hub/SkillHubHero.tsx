"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { skillHubHeroData } from "@/data/skill-hub";

export default function SkillHubHero() {
  return (
    <section className="relative w-full pt-28 sm:pt-32 pb-20 sm:pb-24 overflow-hidden flex items-center bg-[#03142B] text-white">
      {/* Background High-Resolution Photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/skills-hub-bg-2.png"
          alt="KBS Skill Hub Learner"
          fill
          priority
          className="object-cover object-center lg:object-right transition-transform duration-1000 scale-100"
        />

        {/* Left-to-Right Navy Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(2, 12, 32, 0.96) 0%, rgba(3, 17, 43, 0.88) 38%, rgba(4, 20, 48, 0.55) 60%, rgba(4, 15, 35, 0.10) 84%)",
          }}
        />

        {/* Mobile Gradient Fallback Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03142B] via-[#03142B]/70 to-transparent md:hidden" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-500 font-bold">&gt;</span>
            <span className="text-[#A52BFF] font-semibold">Skill Hub</span>
          </nav>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            {skillHubHeroData.titlePrefix} <br />
            <span className="bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#B72CFF] bg-clip-text text-transparent inline-block">
              {skillHubHeroData.titleHighlight}
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-xl mb-8">
            {skillHubHeroData.description}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#courses"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-semibold text-sm sm:text-base hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-xl group"
            >
              {skillHubHeroData.primaryCtaText}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full bg-[#061A36]/80 backdrop-blur-md border border-[#82A0FF]/25 text-white font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all shadow-xs"
            >
              {skillHubHeroData.secondaryCtaText}
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
  );
}
