"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="w-full bg-[#06131E] py-8 lg:py-12 overflow-hidden text-white relative">
      {/* Background Red/Blue Particle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('/services-bg.png')` }}
      />
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-[#E52B2F]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[340px] lg:min-h-[380px]">
          
          {/* Left Dark Content Panel */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4 animate-fade-in-up">
            
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-xs font-medium text-slate-300 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
              <Link href="/services" className="hover:text-white transition-colors">
                Services & Products
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
              <span className="text-white font-semibold">Product Engineering</span>
            </div>

            {/* Eyebrow & Main Heading */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold tracking-widest text-[#E52B2F] uppercase">
                OUR SERVICE
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Services Engineering
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg font-semibold text-slate-200 tracking-wide">
              Scalable. Secure. Powerful products.
            </p>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-xl font-normal">
              We build software products that solve real problems and scale with your business.
            </p>

          </div>

          {/* Right Code Image Panel */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/50 group">
              <div className="relative aspect-[16/10] w-full bg-slate-900">
                <Image
                  src="/services-ui-desing.png"
                  alt="Code Editor & Product Engineering IDE"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Subtle glass accent overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06131E]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
