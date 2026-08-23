"use client";

import React from "react";
import { industriesServed } from "@/data/about";
import {
  CreditCard,
  ShoppingBag,
  Vote,
  Activity,
  Building2,
  GraduationCap,
} from "lucide-react";

const iconMap = {
  CreditCard: CreditCard,
  ShoppingBag: ShoppingBag,
  Vote: Vote,
  Activity: Activity,
  Building2: Building2,
  GraduationCap: GraduationCap,
};

export default function IndustriesWeServe() {
  return (
    <section className="bg-slate-50/60 py-16 sm:py-24 border-t border-slate-200/60">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-3">
            CROSS-INDUSTRY FLUENCY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg text-[#5B6475] font-normal leading-relaxed">
            From fintech to construction, we bring deep domain knowledge and patterns learned in one vertical to solve hard technical problems in another.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industriesServed.map((industry) => {
            const Icon = iconMap[industry.iconName as keyof typeof iconMap] || Building2;

            return (
              <div
                key={industry.id}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Badge */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${industry.accentColor}15`,
                      color: industry.accentColor,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#111827] mb-3 group-hover:text-[#168BFF] transition-colors">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#5B6475] font-normal leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Accent Line */}
                <div
                  className="w-12 h-1 rounded-full mt-6 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: industry.accentColor }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
