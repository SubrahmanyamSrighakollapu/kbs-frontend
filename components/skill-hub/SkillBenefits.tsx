"use client";

import React from "react";
import { skillBenefitsList } from "@/data/skill-hub";
import { Package, GraduationCap, Users } from "lucide-react";

const iconMap = {
  Package: Package,
  GraduationCap: GraduationCap,
  Users: Users,
};

export default function SkillBenefits() {
  return (
    <section className="relative z-30 -mt-12 sm:-mt-14 mb-12 sm:mb-16">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#0F2346]/10 shadow-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-0">
            {skillBenefitsList.map((item, idx) => {
              const Icon = iconMap[item.iconName as keyof typeof iconMap] || Package;
              const isLast = idx === skillBenefitsList.length - 1;

              return (
                <div
                  key={item.id}
                  className={`flex items-center space-x-4 sm:space-x-5 md:px-6 lg:px-8 ${
                    !isLast ? "md:border-r md:border-[#0F2346]/10" : ""
                  }`}
                >
                  {/* Soft Circular Icon Badge */}
                  <div
                    className="w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                    style={{
                      background: `linear-gradient(135deg, ${item.accentColor}18, ${item.accentColor}08)`,
                      border: `1.5px solid ${item.accentColor}40`,
                      color: item.accentColor,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#111827] tracking-tight mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B6475] leading-relaxed font-normal">
                      {item.description}
                    </p>
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
