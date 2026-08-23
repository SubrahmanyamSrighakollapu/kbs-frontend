"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative w-full pt-32 sm:pt-36 pb-16 sm:pb-24 lg:pb-28 overflow-hidden bg-[#020B19] text-white flex items-center min-h-[640px] lg:min-h-[700px]">
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-[#1688FF]/15 via-[#7A42FF]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-gradient-to-bl from-[#D437FF]/12 via-[#7A42FF]/08 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Grid Pattern Background Texture */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-[#AAB7CB] mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-slate-600 font-bold">&gt;</span>
              <span className="text-[#1688FF] font-semibold">Services &amp; Products</span>
            </nav>

            {/* Eyebrow */}
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1688FF] mb-3 block">
              SERVICES ENGINEERING
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Scalable. Secure. <br />
              <span className="text-[#1688FF]">Engineered </span>
              <span className="bg-gradient-to-r from-[#7A42FF] to-[#D437FF] bg-clip-text text-transparent inline-block">
                for Impact.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#AAB7CB] font-normal leading-relaxed max-w-[560px] mb-8">
              We design and build software products that solve real problems, scale with your business, and deliver measurable outcomes.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1688FF] via-[#7A42FF] to-[#D437FF] text-white font-semibold text-sm sm:text-base hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-xl group"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#products-process"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#101D34]/80 border border-[#1688FF]/30 text-white font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-[#1688FF]/60 active:scale-95 transition-all shadow-xs"
              >
                Explore Our Solutions
                <ArrowRight className="w-4 h-4 ml-2 opacity-60 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D High-Tech Server Visual */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] max-w-[580px] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-[#1688FF]/20 group bg-[#071427]">
              <Image
                src="/services_hero_3d_server.png"
                alt="Services Engineering Platform Infrastructure"
                fill
                priority
                className="object-cover object-center group-hover:scale-103 transition-transform duration-1000 ease-out"
              />
              {/* Subtle Ambient Glow Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020B19] via-transparent to-transparent pointer-events-none opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020B19]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
