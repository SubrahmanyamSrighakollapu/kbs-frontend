"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative w-full bg-[#06131E] py-20 lg:py-28 text-white overflow-hidden">
      {/* Red & Blue Glow Overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-[#E52B2F]/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Ready to Build Your Product?
        </h2>

        <p className="text-base sm:text-xl font-medium text-slate-300 max-w-xl mx-auto">
          Let&apos;s make it happen.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contacts"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#E52B2F] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#E52B2F]/30 transition-all hover:bg-[#c92226] hover:shadow-[#E52B2F]/50 hover:scale-[1.02] active:scale-[0.98]"
          >
            Schedule a Consultation
          </Link>

          <Link
            href="/#products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-slate-900"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
