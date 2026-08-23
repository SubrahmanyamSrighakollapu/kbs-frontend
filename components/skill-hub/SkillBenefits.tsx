"use client";

import React from "react";
import { Briefcase, Code2, UserCheck } from "lucide-react";

export default function SkillBenefits() {
  const benefits = [
    {
      title: "Industry Relevant",
      description: "Courses aligned with real-world needs.",
      icon: Briefcase,
    },
    {
      title: "Hands-on Learning",
      description: "Practical projects and case studies.",
      icon: Code2,
    },
    {
      title: "Expert Mentors",
      description: "Learn from experienced professionals.",
      icon: UserCheck,
    },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-16 border-b border-slate-100">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#E52B2F]/40 hover:shadow-xl hover:shadow-slate-200/50"
              >
                {/* Red Outline Icon Container */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 border border-red-100 text-[#E52B2F] transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#E52B2F] group-hover:text-white">
                  <IconComp className="h-6 w-6 stroke-[1.75]" />
                </div>

                {/* Content */}
                <div className="space-y-1 pt-0.5">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#E52B2F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
