"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative w-full pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-white text-[#111827]">
      {/* Subtle Radial Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#168BFF]/10 via-[#6657FF]/08 to-[#A52BFF]/05 blur-3xl pointer-events-none rounded-full" />

      {/* Decorative Network Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none opacity-30 z-0 overflow-hidden">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-full">
          <path
            d="M-100 80 Q 200 10, 500 60 T 1100 30 T 1500 70"
            stroke="url(#heroServicesWave)"
            strokeWidth="2.5"
            strokeDasharray="5 7"
          />
          <defs>
            <linearGradient id="heroServicesWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#168BFF" />
              <stop offset="50%" stopColor="#6657FF" />
              <stop offset="100%" stopColor="#D82DFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[460px]">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-[#5B6475] mb-6">
              <Link href="/" className="hover:text-[#111827] transition-colors">
                Home
              </Link>
              <span className="text-slate-400 font-bold">&gt;</span>
              <span className="text-[#168BFF] font-semibold">Services &amp; Products</span>
            </nav>

            {/* Primary Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-4">
              Services Engineering
            </h1>

            {/* Subtitle with Gradient */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent">
                Scalable. Secure
              </span>{" "}
              <span className="text-[#111827]">and powerful products</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#5B6475] font-normal leading-relaxed max-w-lg mb-8">
              We build software products that solve real problems and scale with
              your business.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-semibold text-sm sm:text-base hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-xl group"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full bg-white border border-[#0F2346]/15 text-[#111827] font-semibold text-sm sm:text-base hover:bg-slate-50 hover:border-[#168BFF]/40 active:scale-95 transition-all shadow-xs"
              >
                Explore Our Solutions
              </a>
            </div>
          </div>

          {/* Right Column: Code/IDE Monitor Image */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-[#0F2346]/10 group bg-slate-900">
              <Image
                src="/it.png"
                alt="Product Engineering & Code IDE Monitor"
                fill
                priority
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              {/* Subtle Blue/Purple Ambient Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
