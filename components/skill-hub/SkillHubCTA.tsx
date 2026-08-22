"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SkillHubCTA() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-14 border border-[#82A0FF]/25 shadow-2xl text-center max-w-5xl mx-auto"
          style={{
            background:
              "linear-gradient(135deg, #03142B 0%, #091D3A 50%, #3B1979 100%)",
          }}
        >
          {/* Decorative Mesh Grid Pattern */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <svg viewBox="0 0 1000 300" fill="none" className="w-full h-full">
              <path
                d="M -50 200 Q 250 50, 600 180 T 1150 90"
                stroke="url(#skillCtaWave)"
                strokeWidth="3"
                strokeDasharray="6 8"
              />
              <defs>
                <linearGradient id="skillCtaWave" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#168BFF" />
                  <stop offset="50%" stopColor="#6657FF" />
                  <stop offset="100%" stopColor="#D82DFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Unlock Your Potential
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8">
              Start learning today and accelerate your career.
            </p>

            <a
              href="#courses"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-bold text-base hover:opacity-95 active:scale-95 transition-all shadow-xl hover:shadow-2xl group"
            >
              Explore All Courses
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
