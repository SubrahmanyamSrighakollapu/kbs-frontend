"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { caseStudyData } from "@/data/services";

export default function CaseStudySnapshot() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-left space-y-1">
          <span className="text-xs font-bold tracking-widest text-[#E52B2F] uppercase">
            CASE STUDY SNAPSHOT
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Real Impact & Production Metrics
          </h2>
        </div>

        {/* Case Study Feature Card */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Description */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100/80 px-3.5 py-1 text-xs font-semibold text-[#E52B2F]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{caseStudyData.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {caseStudyData.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {caseStudyData.description}
              </p>

              <div className="pt-2">
                <Link
                  href={caseStudyData.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#E52B2F] hover:text-[#c92226] group transition-colors"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3 Metric Columns */}
            <div className="lg:col-span-6 grid grid-cols-3 gap-4 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-8">
              {caseStudyData.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-1">
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-500">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
