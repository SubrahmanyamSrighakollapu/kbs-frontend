"use client";

import React from "react";
import { whatWeOfferList } from "@/data/skill-hub";
import { Code, HardHat, Users, Target } from "lucide-react";

const iconMap = {
  Code: Code,
  HardHat: HardHat,
  Users: Users,
  Target: Target,
};

export default function WhatWeOfferSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-3">
            CURRICULUM BUILT FOR EMPLOYABILITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            What We Offer
          </h2>
          <p className="text-base sm:text-lg text-[#5B6475] font-normal leading-relaxed">
            Focused, subject-oriented training led by working industry experts on real tools and live project workflows.
          </p>
        </div>

        {/* 4 Offer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whatWeOfferList.map((offer) => {
            const Icon = iconMap[offer.iconName as keyof typeof iconMap] || Code;

            return (
              <div
                key={offer.id}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${offer.accentColor}15`,
                        color: offer.accentColor,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {offer.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#111827] mb-3 group-hover:text-[#168BFF] transition-colors">
                    {offer.title}
                  </h3>

                  <p className="text-base text-[#5B6475] font-normal leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                <div
                  className="w-full h-1 rounded-full mt-6"
                  style={{ backgroundColor: `${offer.accentColor}30` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
