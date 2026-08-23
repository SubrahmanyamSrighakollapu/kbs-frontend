"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative w-full bg-[#030A12] py-12 lg:py-16 text-white overflow-hidden min-h-[320px] lg:min-h-[380px] flex items-center">
      {/* Highway Night Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-50 lg:opacity-70 transition-transform duration-1000 scale-100"
        style={{ backgroundImage: `url('/contact-us-hero.png')` }}
      />
      
      {/* Gradient Overlay for Readability */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "linear-gradient(90deg, rgba(3, 10, 18, 0.90) 0%, rgba(3, 10, 18, 0.65) 45%, rgba(3, 10, 18, 0.20) 100%)"
        }}
      />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-2xl space-y-3.5 animate-fade-in-up">
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-medium text-slate-300">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
            <span className="text-white font-semibold">Contact Us</span>
          </div>

          {/* Eyebrow & Heading */}
          <div className="space-y-1 pt-1">
            <span className="text-xs font-bold tracking-widest text-[#E52B2F] uppercase">
              LET'S CONNECT
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Contact Us
            </h1>
          </div>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-xl">
            Have a question, project idea, or just want to say hello? Our team is ready to help.
          </p>

        </div>
      </div>
    </section>
  );
}
