"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCTA() {
  return (
    <section className="relative w-full bg-[#06131E] py-16 lg:py-20 text-white overflow-hidden">
      {/* Network Particle Glow Overlay */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#E52B2F]/15 blur-[140px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="space-y-2 max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Have a project in mind?
            </h2>
            <p className="text-base sm:text-xl font-medium text-slate-300">
              Let&apos;s build something great together.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
            <Link
              href="/contacts"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#E52B2F] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E52B2F]/30 transition-all hover:bg-[#c92226] hover:scale-[1.02] active:scale-[0.98]"
            >
              Schedule a Consultation
            </Link>

            <Link
              href="/case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-slate-900"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
