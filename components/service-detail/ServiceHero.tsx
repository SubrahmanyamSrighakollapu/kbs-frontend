"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { ServiceDetailConfig } from "@/data/services";

interface ServiceHeroProps {
  service: ServiceDetailConfig;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative w-full bg-[#030A12] py-12 lg:py-16 text-white overflow-hidden min-h-[430px] lg:min-h-[500px] flex items-center">
      {/* Background Particle Network Glow Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-30 lg:opacity-40"
        style={{ backgroundImage: `url('/services-bg.png')` }}
      />
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[#E52B2F]/15 blur-[140px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Service Content Panel */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 animate-fade-in-up">
            
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
              <span className="text-white font-semibold">{service.shortTitle}</span>
            </div>

            {/* Title & Description */}
            <div className="space-y-3 pt-1">
              <span className="text-xs font-bold tracking-widest text-[#E52B2F] uppercase">
                {service.eyebrow}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
                {service.description}
              </p>
            </div>

            {/* Action CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/contacts"
                className="group flex items-center justify-center gap-2 rounded-full bg-[#E52B2F] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E52B2F]/30 transition-all duration-300 hover:bg-[#c92226] hover:shadow-[#E52B2F]/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900"
              >
                Explore Our Solutions
              </Link>
            </div>

          </div>

          {/* Right Service Photography Panel */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl shadow-black/70 group">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#030A12]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
