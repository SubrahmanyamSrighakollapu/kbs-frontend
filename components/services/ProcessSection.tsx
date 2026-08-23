"use client";

import React from "react";
import { processData } from "@/data/services";
import { 
  Search, 
  Compass, 
  PenTool, 
  Code, 
  CheckCircle2, 
  Rocket,
  ArrowRight
} from "lucide-react";

const processIconMap: Record<string, React.ElementType> = {
  Search,
  Compass,
  PenTool,
  Code,
  CheckCircle2,
  Rocket,
};

export default function ProcessSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#E52B2F] uppercase">
            OUR PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Build Software
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            A structured, engineering-first methodology ensuring rapid iteration and flawless execution.
          </p>
        </div>

        {/* Desktop Process Grid: Horizontal Flow */}
        <div className="hidden lg:grid grid-cols-6 gap-4 relative">
          {processData.map((proc, idx) => {
            const IconComponent = processIconMap[proc.iconName] || Search;
            const isLast = idx === processData.length - 1;

            return (
              <div key={proc.step} className="relative flex flex-col items-center text-center group">
                
                {/* Connecting Line Arrow */}
                {!isLast && (
                  <div className="absolute top-6 left-[60%] right-[-40%] z-0 h-0.5 bg-slate-200 group-hover:bg-[#E52B2F]/40 transition-colors flex items-center justify-end">
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#E52B2F] -mr-1" />
                  </div>
                )}

                {/* Circle Icon Badge */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 border-2 border-slate-200 text-[#E52B2F] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#E52B2F] group-hover:bg-[#E52B2F] group-hover:text-white">
                  <IconComponent className="h-5 w-5" />
                </div>

                {/* Number & Title */}
                <div className="mt-4 space-y-1">
                  <span className="text-[11px] font-bold font-mono tracking-widest text-[#E52B2F]">
                    {proc.number}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#E52B2F] transition-colors">
                    {proc.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-normal font-normal max-w-[160px]">
                    {proc.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Flow */}
        <div className="lg:hidden space-y-6 max-w-lg mx-auto">
          {processData.map((proc, idx) => {
            const IconComponent = processIconMap[proc.iconName] || Search;
            const isLast = idx === processData.length - 1;

            return (
              <div key={proc.step} className="relative flex items-start gap-4">
                
                {/* Connecting Vertical Line */}
                {!isLast && (
                  <div className="absolute top-10 left-5 bottom-[-24px] w-0.5 bg-slate-200" />
                )}

                {/* Circle Icon Badge */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 border border-red-100 text-[#E52B2F]">
                  <IconComponent className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="space-y-0.5 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono text-[#E52B2F]">
                      {proc.number}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      {proc.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {proc.description}
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
