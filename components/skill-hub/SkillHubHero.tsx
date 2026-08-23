"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SkillHubHero() {
  return (
    <section className="relative w-full bg-[#030A12] py-12 lg:py-16 text-white overflow-hidden min-h-[360px] lg:min-h-[430px] flex items-center">
      {/* Learner Image Background with Left-to-Right Dark Overlay Gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-40 lg:opacity-60"
        style={{ backgroundImage: `url('/skills-hub-bg.png')` }}
      />
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to right, rgba(3, 10, 18, 0.92) 0%, rgba(3, 10, 18, 0.70) 50%, rgba(3, 10, 18, 0.15) 100%)"
        }}
      />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-2xl space-y-4 animate-fade-in-up">
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-medium text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
            <span className="text-white font-semibold">Skill Hub</span>
          </div>

          {/* Heading & Subheading */}
          <div className="space-y-1 pt-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Skill Hub
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-[#E52B2F] tracking-wide">
              Learn. Grow. Succeed.
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-xl">
            Upskill yourself with industry-relevant courses, hands-on projects and certifications.
          </p>

        </div>
      </div>
    </section>
  );
}
