"use client";

import React from "react";
import { timelineMilestones } from "@/data/about";

export default function JourneyTimeline() {
  return (
    <section className="bg-[#F8FAFF] py-16 sm:py-24 border-b border-[#0F2346]/10">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-2">
            OUR JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
            From 2021 to the Future
          </h2>
        </div>

        {/* DESKTOP TIMELINE (>= 768px) */}
        <div className="hidden md:block relative pt-4">
          {/* Horizontal Gradient Connecting Line */}
          <div className="absolute top-8 left-[12%] right-[12%] h-1 bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] rounded-full z-0 opacity-80" />

          {/* 4 Stage Columns */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {timelineMilestones.map((milestone, idx) => {
              const nodeColors = ["#168BFF", "#6657FF", "#A52BFF", "#D82DFF"];
              const nodeColor = nodeColors[idx % nodeColors.length];

              return (
                <div
                  key={milestone.year}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Milestone Circular Node Dot */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center border-4 bg-white transition-transform duration-300 mb-8 shadow-sm group-hover:scale-110"
                    style={{
                      borderColor: nodeColor,
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: nodeColor }}
                    />
                  </div>

                  {/* Milestone Content Card */}
                  <div className="w-full bg-white p-6 sm:p-7 rounded-2xl border border-[#0F2346]/10 shadow-sm group-hover:shadow-xl group-hover:border-[#6657FF]/30 transition-all duration-300 text-center">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#111827] block mb-1">
                      {milestone.year}
                    </span>
                    <h3
                      className="text-base font-bold mb-2"
                      style={{ color: nodeColor }}
                    >
                      {milestone.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B6475] leading-relaxed font-normal">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE TIMELINE (< 768px) */}
        <div className="md:hidden relative pl-6 border-l-2 border-[#168BFF]/40 space-y-8 ml-4">
          {timelineMilestones.map((milestone, idx) => {
            const nodeColors = ["#168BFF", "#6657FF", "#A52BFF", "#D82DFF"];
            const nodeColor = nodeColors[idx % nodeColors.length];

            return (
              <div key={milestone.year} className="relative group">
                {/* Dot */}
                <div
                  className="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 bg-white"
                  style={{ borderColor: nodeColor }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: nodeColor }}
                  />
                </div>

                {/* Card */}
                <div className="bg-white p-6 rounded-xl border border-[#0F2346]/10 shadow-xs">
                  <span className="text-xl font-extrabold text-[#111827] block mb-1">
                    {milestone.year}
                  </span>
                  <h3 className="text-sm font-bold mb-2" style={{ color: nodeColor }}>
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-[#5B6475] leading-relaxed font-normal">
                    {milestone.description}
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
