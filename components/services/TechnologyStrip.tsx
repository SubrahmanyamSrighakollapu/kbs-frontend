"use client";

import React from "react";
import { techStack } from "@/data/services";

export default function TechnologyStrip() {
  return (
    <section className="bg-[#020B19] py-16 sm:py-20 text-white border-t border-[#101D34]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1688FF] mb-3 block">
            TECHNOLOGIES WE USE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Powered by enterprise tech stacks
          </h2>
        </div>

        {/* Dark Horizontal Slider Strip */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
          {techStack.map((tech) => (
            <div
              key={tech.id}
              className="px-6 py-4 rounded-xl bg-[#101D34] border border-[#1688FF]/20 hover:border-[#1688FF]/50 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 shadow-md"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: tech.brandColor || "#1688FF" }}
              />
              <span className="text-sm font-bold text-slate-100">{tech.name}</span>
              <span className="text-[10px] uppercase tracking-wider font-medium text-slate-400">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
