"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-[#071421] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-slate-800">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="CTA Background"
          fill
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071421] via-[#071421]/95 to-[#071421]/80" />
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 bg-slate-900/60 border border-slate-800/80 p-8 sm:p-12 lg:p-14 rounded-3xl backdrop-blur-md shadow-2xl">
          {/* Left Content */}
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Ready to Build Something That Lasts?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Let&apos;s talk about where technology can remove friction from
              your business — a new product, a platform overhaul, or
              infrastructure that&apos;s overdue for an upgrade.
            </p>
          </div>

          {/* Right Button */}
          <div className="shrink-0 w-full lg:w-auto">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#E52B2F] text-white text-base font-semibold hover:bg-[#c92226] active:scale-95 transition-all shadow-lg hover:shadow-xl group"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
