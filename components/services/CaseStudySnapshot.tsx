"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Activity, Zap } from "lucide-react";
import { caseStudyData } from "@/data/services";

export default function CaseStudySnapshot() {
  const icons = [ShieldCheck, Activity, Zap];

  return (
    <section className="bg-[#020B19] py-16 sm:py-20 text-white border-t border-[#101D34]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071427] rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#1688FF]/20 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#1688FF]/10 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy Column */}
            <div className="lg:col-span-6">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1688FF] mb-3 block">
                {caseStudyData.subtitle}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                {caseStudyData.title}
              </h2>
              <p className="text-base sm:text-lg text-[#AAB7CB] font-normal leading-relaxed mb-8">
                {caseStudyData.description}
              </p>
              <Link
                href={caseStudyData.href}
                className="inline-flex items-center text-sm sm:text-base font-bold text-[#1688FF] hover:text-white transition-colors group"
              >
                View Full Case Study
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Metrics Grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {caseStudyData.metrics.map((metric, idx) => {
                  const Icon = icons[idx % icons.length];

                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-[#101D34] border border-[#1688FF]/20 flex flex-col items-center text-center shadow-lg group hover:border-[#1688FF]/50 transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#1688FF]/15 text-[#1688FF] flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#1688FF] via-[#7A42FF] to-[#D437FF] bg-clip-text text-transparent mb-1">
                        {metric.value}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#AAB7CB]">
                        {metric.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
