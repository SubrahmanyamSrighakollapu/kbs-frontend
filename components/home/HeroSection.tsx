"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[580px] lg:min-h-[660px] xl:min-h-[720px] w-full overflow-hidden flex items-center bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="KBS IT City Highway Background"
          fill
          priority
          className="object-cover object-center lg:object-right transition-transform duration-1000 scale-100"
        />
        {/* Soft White Gradient Overlay: Clear left text backing fading smoothly so city skyline and light trails stay sharp */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{
            background: "linear-gradient(to right, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.82) 32%, rgba(255, 255, 255, 0.25) 60%, rgba(255, 255, 255, 0) 100%)"
          }}
        />
        {/* Additional mobile bottom overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent md:hidden pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-800 bg-slate-100/80 backdrop-blur-xs px-3 py-1 rounded-md border border-slate-200/80">
              ONE GROUP. EVERY SOLUTION.
            </span>
          </div>

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Technology That <br />
              Moves Your <br />
              <span className="text-[#E52B2F] inline-block">
                Business Forward
              </span>
            </h1>
          </div>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 font-normal leading-relaxed max-w-xl mb-8 sm:mb-10">
            We design, build, and scale digital products — from fintech
            platforms to hyperlocal marketplaces — with the reliability of a
            group that&apos;s been solving hard technical problems since 2021.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#E52B2F] text-white text-sm sm:text-base font-semibold hover:bg-[#c92226] active:scale-95 transition-all shadow-md hover:shadow-lg group"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 border border-slate-300 text-sm sm:text-base font-semibold hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all shadow-xs"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
