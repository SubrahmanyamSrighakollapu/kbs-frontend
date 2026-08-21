"use client";

import React from "react";
import { timelineMilestones } from "@/data/about";

export default function JourneyTimeline() {
  return (
    <section className="bg-[#F7F8FA] py-16 sm:py-24 lg:py-28 border-b border-slate-200/60">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#E52B2F] tracking-widest uppercase block mb-2">
            OUR JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            From 2021 to the Future
          </h2>
        </div>

        {/* DESKTOP TIMELINE (>= 768px) */}
        <div className="hidden md:block relative">
          {/* Horizontal Connecting Line */}
          <div className="absolute top-4 left-[12%] right-[12%] h-0.5 bg-slate-300 z-0" />

          {/* 4 Stage Columns */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {timelineMilestones.map((milestone) => (
              <div
                key={milestone.year}
                className="flex flex-col items-center text-center group"
              >
                {/* Milestone Dot Indicator */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-4 bg-white transition-all duration-300 mb-6 ${
                    milestone.isLatest
                      ? "border-[#E52B2F] shadow-md scale-110"
                      : "border-slate-400 group-hover:border-[#E52B2F]"
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      milestone.isLatest ? "bg-[#E52B2F]" : "bg-slate-500 group-hover:bg-[#E52B2F]"
                    }`}
                  />
                </div>

                {/* Milestone Content Card */}
                <div className="w-full bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs group-hover:shadow-md group-hover:border-[#E52B2F]/30 transition-all duration-300 text-center">
                  <span className="text-2xl font-black text-slate-900 block mb-1">
                    {milestone.year}
                  </span>
                  <h3 className="text-base font-bold text-[#E52B2F] mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE TIMELINE (< 768px) */}
        <div className="md:hidden relative pl-6 border-l-2 border-slate-300 space-y-8 ml-4">
          {timelineMilestones.map((milestone) => (
            <div key={milestone.year} className="relative group">
              {/* Dot */}
              <div
                className={`absolute -left-[31px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 bg-white ${
                  milestone.isLatest
                    ? "border-[#E52B2F]"
                    : "border-slate-400"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    milestone.isLatest ? "bg-[#E52B2F]" : "bg-slate-500"
                  }`}
                />
              </div>

              {/* Card */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xl font-black text-slate-900 block mb-1">
                  {milestone.year}
                </span>
                <h3 className="text-sm font-bold text-[#E52B2F] mb-2">
                  {milestone.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
