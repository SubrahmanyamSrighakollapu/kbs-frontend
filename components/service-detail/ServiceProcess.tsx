"use client";

import React from "react";
import { 
  Search, 
  Compass, 
  PenTool, 
  Code, 
  CheckCircle2, 
  Rocket, 
  ArrowRight 
} from "lucide-react";
import { ProcessStep } from "@/data/services";

const processIconMap: Record<string, React.ElementType> = {
  Search,
  Compass,
  PenTool,
  Code,
  CheckCircle2,
  Rocket,
};

interface ServiceProcessProps {
  processSteps: ProcessStep[];
}

export default function ServiceProcess({ processSteps }: ServiceProcessProps) {
  return (
    <section className="w-full bg-[#06131E] py-16 lg:py-24 text-white overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#E52B2F] uppercase">
            OUR PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            A proven process to deliver exceptional products.
          </h2>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:grid grid-cols-6 gap-4 relative">
          {processSteps.map((proc, idx) => {
            const IconComponent = processIconMap[proc.iconName] || Search;
            const isLast = idx === processSteps.length - 1;

            return (
              <div key={proc.step} className="relative flex flex-col items-center text-center group">
                
                {/* Thin Connector Line */}
                {!isLast && (
                  <div className="absolute top-6 left-[60%] right-[-40%] z-0 h-0.5 bg-white/20 group-hover:bg-[#E52B2F] transition-colors flex items-center justify-end">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E52B2F] -mr-1" />
                  </div>
                )}

                {/* Circle Icon Badge */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border-2 border-white/20 text-[#E52B2F] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-[#E52B2F] group-hover:bg-[#E52B2F] group-hover:text-white">
                  <IconComponent className="h-5 w-5" />
                </div>

                {/* Number, Title & Description */}
                <div className="mt-4 space-y-1">
                  <span className="text-[11px] font-bold font-mono tracking-widest text-[#E52B2F]">
                    {proc.number}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-[#E52B2F] transition-colors">
                    {proc.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal max-w-[160px]">
                    {proc.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Flow */}
        <div className="lg:hidden space-y-6 max-w-lg mx-auto">
          {processSteps.map((proc, idx) => {
            const IconComponent = processIconMap[proc.iconName] || Search;
            const isLast = idx === processSteps.length - 1;

            return (
              <div key={proc.step} className="relative flex items-start gap-4">
                {!isLast && (
                  <div className="absolute top-10 left-5 bottom-[-24px] w-0.5 bg-white/20" />
                )}

                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 border border-white/20 text-[#E52B2F]">
                  <IconComponent className="h-5 w-5" />
                </div>

                <div className="space-y-0.5 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono text-[#E52B2F]">
                      {proc.number}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {proc.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-300">
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
