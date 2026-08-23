"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinancialCTA() {
  return (
    <section className="bg-[#020B19] py-10 sm:py-14 text-white">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl p-8 sm:p-12 border border-[#1688FF]/30 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background: "linear-gradient(135deg, #071427 0%, #101D34 55%, #1D0A3D 100%)",
          }}
        >
          {/* Subtle Ambient Particle Wave Background Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
            <svg viewBox="0 0 1200 200" fill="none" className="w-full h-full object-cover">
              <path
                d="M -100 150 Q 300 50, 600 120 T 1300 80"
                stroke="url(#financialCtaWave)"
                strokeWidth="2.5"
                strokeDasharray="6 8"
              />
              <defs>
                <linearGradient id="financialCtaWave" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1688FF" />
                  <stop offset="50%" stopColor="#7A42FF" />
                  <stop offset="100%" stopColor="#D437FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
              Ready to put financial power behind your business?
            </h3>
            <p className="text-base sm:text-lg text-slate-300 font-normal">
              Let&apos;s talk about the right solution for your growth.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#1688FF] via-[#7A42FF] to-[#D437FF] text-white font-semibold text-base hover:opacity-95 active:scale-95 transition-all shadow-xl group"
            >
              Talk to Our Team
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
