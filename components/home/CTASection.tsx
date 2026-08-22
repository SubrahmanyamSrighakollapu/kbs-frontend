"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-14 border border-[#82A0FF]/25 shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #03142B 0%, #091D3A 50%, #3B1979 100%)"
          }}
        >
          {/* Decorative Network Grid Overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <Image
              src="/hero-bg.png"
              alt="CTA Pattern"
              fill
              className="object-cover object-center mix-blend-overlay"
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Ready to Build Something That Lasts?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Let&apos;s join forces to turn challenges into powerful solutions and build a future-ready business together.
              </p>
            </div>

            {/* Right Button */}
            <div className="shrink-0 w-full lg:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white text-base font-semibold hover:opacity-95 hover:-translate-y-0.5 active:scale-95 transition-all shadow-xl group"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

