"use client";

import React from "react";
import { skillHubHeroData } from "@/data/skill-hub";
import { AlertCircle, Target, Eye, Award } from "lucide-react";

export default function GapAddressSection() {
  return (
    <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who We Are Intro Box */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-3">
            WHO WE ARE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-6">
            Industry-Led Skill Development
          </h2>
          <p className="text-base sm:text-lg text-[#5B6475] font-normal leading-relaxed">
            {skillHubHeroData.whoWeAre}
          </p>
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-[#03142B] text-white border border-[#82A0FF]/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#A52BFF]/20 text-[#A52BFF] flex items-center justify-center mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#A52BFF] mb-2 block">VISION</span>
              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
                {skillHubHeroData.vision}
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#03142B] text-white border border-[#82A0FF]/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#168BFF]/20 text-[#168BFF] flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#168BFF] mb-2 block">MISSION</span>
              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
                {skillHubHeroData.mission}
              </p>
            </div>
          </div>
        </div>

        {/* The Gap We Address Highlight Panel */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-[#03142B] to-[#0A1633] text-white border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF9F1C]/15 border border-[#FF9F1C]/30 text-[#FF9F1C] text-xs font-bold uppercase tracking-wider mb-6">
              <AlertCircle className="w-4 h-4" />
              THE GAP WE ADDRESS
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 text-white tracking-tight">
              Classroom Theory vs. Real Industry Workflows
            </h3>
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
              {skillHubHeroData.gapAddress}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
