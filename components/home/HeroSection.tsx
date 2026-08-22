"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-28 lg:pb-32 w-full overflow-hidden flex items-center bg-[#03142B] text-white">
      {/* Background Futuristic City Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="KBS Group Futuristic City & Infrastructure"
          fill
          priority
          className="object-cover object-center lg:object-right transition-transform duration-1000 scale-100"
        />
        
        {/* Primary Navy Overlay: Left-to-Right Fade */}
        <div 
          className="absolute inset-0" 
          style={{
            background: "linear-gradient(90deg, rgba(2, 12, 32, 0.98) 0%, rgba(3, 18, 48, 0.90) 34%, rgba(4, 22, 55, 0.55) 60%, rgba(4, 15, 35, 0.15) 100%)"
          }}
        />

        {/* Mobile/Tablet Bottom Gradient for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03142B] via-transparent to-transparent md:hidden" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent">
              ONE GROUP. MANY POSSIBILITIES.
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Building Today. <br />
            <span className="bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#B72CFF] bg-clip-text text-transparent inline-block">
              Creating a Better Tomorrow.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-xl mb-8 sm:mb-10">
            KBS Group unites innovation, construction, creativity and technology across diverse verticals to deliver real-world impact.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="#verticals"
              className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white text-sm sm:text-base font-semibold hover:opacity-95 hover:-translate-y-0.5 active:scale-95 transition-all shadow-lg hover:shadow-xl group"
            >
              Explore Our Verticals
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-xl bg-white/5 backdrop-blur-md text-white border border-white/20 text-sm sm:text-base font-semibold hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all"
            >
              About KBS Group
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

