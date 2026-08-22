"use client";

import React from "react";
import { impactItems } from "@/data/home";
import { Palette, Cloud, PieChart, Bot, ShieldCheck, Headphones } from "lucide-react";

const iconMap = {
  Palette: Palette,
  Cloud: Cloud,
  PieChart: PieChart,
  Bot: Bot,
  ShieldCheck: ShieldCheck,
  Headphones: Headphones,
};

export default function ImpactSection() {
  return (
    <section className="bg-[#F8FAFF] py-16 sm:py-24 border-y border-[#0F2346]/10">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-2">
            HOW WE CREATE IMPACT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
            Different Expertise. Shared Possibilities.
          </h2>
        </div>

        {/* 6 Minimal Icon Columns Horizontal */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-0">
          {impactItems.map((item, idx) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap] || Palette;
            const isLast = idx === impactItems.length - 1;

            return (
              <div
                key={item.id}
                className={`flex flex-col items-center text-center p-4 lg:px-6 transition-all duration-300 group ${
                  !isLast ? "lg:border-r lg:border-[#0F2346]/10" : ""
                }`}
              >
                {/* Gradient Outlined Icon Circle */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${item.accentColor}15, ${item.accentColor}05)`,
                    border: `1px solid ${item.accentColor}35`,
                    color: item.accentColor,
                  }}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-2 tracking-tight">
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

