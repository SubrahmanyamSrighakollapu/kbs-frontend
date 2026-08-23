"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SkillHubCTA() {
  return (
    <section className="relative w-full bg-[#06131E] py-20 lg:py-24 text-white overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#E52B2F]/15 blur-[140px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight">
          Unlock Your Potential
        </h2>

        <p className="text-base sm:text-lg font-medium text-slate-300 max-w-xl mx-auto">
          Start learning today and accelerate your career.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/skill-hub/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#E52B2F] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#E52B2F]/30 transition-all hover:bg-[#c92226] hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore All Courses
          </Link>

          <Link
            href="/skill-hub/paths"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-slate-900"
          >
            <span>View Learning Paths</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
