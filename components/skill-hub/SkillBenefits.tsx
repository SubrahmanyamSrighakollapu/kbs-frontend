"use client";

import React from "react";
import { whyKbsSkillHubList } from "@/data/skill-hub";
import { UserCheck, Building2, Layers, ShieldCheck, Briefcase } from "lucide-react";

const iconMap = {
  UserCheck: UserCheck,
  Building2: Building2,
  Layers: Layers,
  ShieldCheck: ShieldCheck,
  Briefcase: Briefcase,
};

export default function SkillBenefits() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-2">
            WHY KBS SKILL HUB
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
            Built for Employability. Taught by Practitioners.
          </h2>
        </div>

        {/* 5 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyKbsSkillHubList.map((item) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap] || UserCheck;

            return (
              <div
                key={item.id}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-[#0F2346]/10 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Soft Colored Icon Badge */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-xs"
                  style={{
                    backgroundColor: `${item.accentColor}15`,
                    border: `1px solid ${item.accentColor}30`,
                    color: item.accentColor,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-extrabold text-[#111827] mb-2 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5B6475] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
