"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Trophy,
  Sparkles,
  Store,
  Landmark,
  HardHat,
  ArrowRight,
  Search,
  FileText,
  Palette,
  Code,
  Rocket,
  Cpu,
} from "lucide-react";
import { showcaseProducts } from "@/data/services";

const productIconMap = {
  shield: ShieldCheck,
  trophy: Trophy,
  sparkles: Sparkles,
  store: Store,
  award: Landmark,
  map: HardHat,
};

const processStages = [
  {
    id: "01",
    title: "Discovery",
    desc: "Understand real problems and technical challenges.",
    icon: Search,
    color: "#1688FF",
    position: "top-left",
  },
  {
    id: "02",
    title: "Strategy",
    desc: "Define architecture roadmap and key business outcomes.",
    icon: FileText,
    color: "#7A42FF",
    position: "top-right",
  },
  {
    id: "03",
    title: "Design",
    desc: "Create human-centered experiences that delight.",
    icon: Palette,
    color: "#00A8FF",
    position: "mid-right",
  },
  {
    id: "04",
    title: "Development",
    desc: "Build scalable, secure digital platforms.",
    icon: Code,
    color: "#D437FF",
    position: "bottom-right",
  },
  {
    id: "05",
    title: "Testing",
    desc: "Quality engineering for reliability and performance.",
    icon: ShieldCheck,
    color: "#00C9A7",
    position: "bottom-left",
  },
  {
    id: "06",
    title: "Launch & Support",
    desc: "Deploy and iterate for continuous growth.",
    icon: Rocket,
    color: "#FF9F1C",
    position: "mid-left",
  },
];

export default function ProductsProcess() {
  const [activeStage, setActiveStage] = useState<string>("01");

  return (
    <section id="products-process" className="bg-[#020B19] py-16 sm:py-24 text-white border-t border-[#101D34]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071427] rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#1688FF]/20 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background Glow */}
          <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-[#7A42FF]/10 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: OUR PRODUCTS */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1688FF] mb-3 block">
                  OUR PRODUCTS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">
                  Solutions built for market impact
                </h2>

                {/* Vertically Stacked Product Rows */}
                <div className="divide-y divide-white/10 border-t border-b border-white/10">
                  {showcaseProducts.map((prod) => {
                    const Icon = productIconMap[prod.iconType as keyof typeof productIconMap] || ShieldCheck;

                    return (
                      <Link
                        key={prod.id}
                        href={prod.href}
                        className="py-4 sm:py-5 flex items-center justify-between group hover:bg-[#101D34]/80 px-4 rounded-xl transition-all duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          {/* Product Icon */}
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                            style={{
                              backgroundColor: `${prod.accentColor}20`,
                              color: prod.accentColor,
                              border: `1px solid ${prod.accentColor}40`,
                            }}
                          >
                            <Icon className="w-5 h-5" />
                          </div>

                          <div>
                            <div className="flex items-center space-x-2.5">
                              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#1688FF] transition-colors">
                                {prod.name}
                              </h3>
                              <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/15">
                                {prod.category}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-[#AAB7CB] font-normal line-clamp-1 mt-0.5">
                              {prod.description}
                            </p>
                          </div>
                        </div>

                        <ArrowRight className="w-5 h-5 text-[#1688FF] shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: OUR PROCESS (Connected Hexagonal/Circular Diagram) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#7A42FF] mb-3 block">
                  OUR PROCESS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">
                  How we engineer success
                </h2>

                {/* Hexagonal / Circular Interactive Engineering Diagram */}
                <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center p-4">
                  {/* Central Glowing KBS 3D Node */}
                  <div className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-[#1688FF] via-[#7A42FF] to-[#D437FF] p-0.5 shadow-2xl flex items-center justify-center animate-pulse">
                    <div className="w-full h-full bg-[#03142B] rounded-[14px] flex flex-col items-center justify-center p-2 text-center">
                      <Cpu className="w-8 h-8 text-[#1688FF] mb-1" />
                      <span className="text-[10px] font-extrabold text-white tracking-widest uppercase">
                        KBS ENGINE
                      </span>
                    </div>
                  </div>

                  {/* Connected Stage Nodes */}
                  <div className="absolute inset-0 z-10 grid grid-cols-2 gap-4 p-2 items-center">
                    {processStages.map((stage) => {
                      const Icon = stage.icon;
                      const isActive = activeStage === stage.id;

                      return (
                        <div
                          key={stage.id}
                          onMouseEnter={() => setActiveStage(stage.id)}
                          className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                            isActive
                              ? "bg-[#101D34] border-[#1688FF] shadow-lg scale-102"
                              : "bg-[#0B1830]/90 border-white/10 hover:border-white/30"
                          }`}
                        >
                          <div className="flex items-center space-x-3 mb-1.5">
                            <span
                              className="text-xs font-extrabold px-2 py-0.5 rounded-md"
                              style={{
                                backgroundColor: `${stage.color}25`,
                                color: stage.color,
                              }}
                            >
                              {stage.id}
                            </span>
                            <Icon className="w-4 h-4" style={{ color: stage.color }} />
                            <h4 className="text-xs sm:text-sm font-bold text-white">{stage.title}</h4>
                          </div>
                          <p className="text-[11px] sm:text-xs text-[#AAB7CB] leading-tight font-normal">
                            {stage.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
