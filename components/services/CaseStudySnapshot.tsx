"use client";

import React from "react";
import Link from "next/link";
import { caseStudyData } from "@/data/services";
import { ArrowRight } from "lucide-react";

export default function CaseStudySnapshot() {
  return (
    <section className="bg-[#F8FAFF] py-16 sm:py-24 border-b border-[#0F2346]/10">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-1">
            {caseStudyData.subtitle}
          </span>
        </div>

        {/* Case Study Grid Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Story Card */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-[#0F2346]/10 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mb-4">
                {caseStudyData.title}
              </h3>
              <p className="text-base text-[#5B6475] leading-relaxed font-normal mb-8">
                {caseStudyData.description}
              </p>
            </div>

            <Link
              href={caseStudyData.href}
              className="inline-flex items-center text-sm font-bold text-[#168BFF] hover:text-[#6657FF] transition-colors group"
            >
              View Full Case Study
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: 3 Metric Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {caseStudyData.metrics.map((metric, idx) => {
              const accentColors = ["#168BFF", "#6657FF", "#A52BFF"];
              const accentColor = accentColors[idx % accentColors.length];

              return (
                <div
                  key={metric.label}
                  className="bg-white p-8 rounded-3xl border border-[#0F2346]/10 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow"
                >
                  <div
                    className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-2"
                    style={{ color: accentColor }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#5B6475] font-semibold">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
