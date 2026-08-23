"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="bg-[#020B19] py-16 sm:py-24 text-white border-t border-[#101D34]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl p-8 sm:p-14 lg:p-16 border border-white/20 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background: "linear-gradient(135deg, #1688FF 0%, #7A42FF 50%, #D437FF 100%)",
          }}
        >
          {/* Subtle Ambient Particle Wave Background Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
            <svg viewBox="0 0 1200 200" fill="none" className="w-full h-full object-cover">
              <path
                d="M -100 150 Q 300 50, 600 120 T 1300 80"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeDasharray="6 8"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
              Ready to build your product?
            </h2>
            <p className="text-base sm:text-xl text-slate-100 font-normal leading-relaxed">
              Let&apos;s turn your idea into a scalable, secure, and high-impact product.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#020B19] border border-white/30 text-white font-semibold text-base hover:bg-white/10 active:scale-95 transition-all shadow-xl group"
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
