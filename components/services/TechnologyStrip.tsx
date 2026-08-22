"use client";

import React from "react";
import { techStack } from "@/data/services";
import { Code2, Server, Layers, Cpu, Cloud, Container } from "lucide-react";

export default function TechnologyStrip() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#0F2346]/10">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-2">
            TECHNOLOGIES WE USE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
            Powered by Enterprise Tech Stacks
          </h2>
        </div>

        {/* Logo Tiles Grid / Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.id}
              className="bg-white p-5 rounded-2xl border border-[#0F2346]/10 shadow-xs hover:shadow-lg hover:border-[#168BFF]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group"
            >
              {/* Tech Icon / Symbol Badge */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 font-black text-sm tracking-tighter transition-transform duration-300 group-hover:scale-110 shadow-2xs"
                style={{
                  backgroundColor: `${tech.brandColor}14`,
                  border: `1.5px solid ${tech.brandColor}30`,
                  color: tech.brandColor,
                }}
              >
                {tech.id === "react" && "⚛"}
                {tech.id === "nextjs" && "▲"}
                {tech.id === "nodejs" && "⬢"}
                {tech.id === "python" && "🐍"}
                {tech.id === "dotnet" && ".NET"}
                {tech.id === "aws" && "☁"}
                {tech.id === "docker" && "🐳"}
                {tech.id === "kubernetes" && "☸"}
              </div>

              {/* Name */}
              <span className="text-sm font-bold text-[#111827] tracking-tight group-hover:text-[#168BFF] transition-colors">
                {tech.name}
              </span>
              <span className="text-[11px] text-[#5B6475] font-medium mt-0.5">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
