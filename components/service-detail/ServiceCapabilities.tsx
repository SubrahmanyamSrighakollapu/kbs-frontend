"use client";

import React from "react";
import Link from "next/link";
import { 
  Target, 
  Layout, 
  Code2, 
  ShieldCheck, 
  Cloud, 
  BarChart3, 
  Bot, 
  LifeBuoy, 
  ArrowRight 
} from "lucide-react";
import { ServiceDetailConfig } from "@/data/services";

const capabilityIconMap: Record<string, React.ElementType> = {
  Target,
  Layout,
  Code2,
  ShieldCheck,
  Cloud,
  BarChart3,
  Bot,
  LifeBuoy,
};

interface ServiceCapabilitiesProps {
  service: ServiceDetailConfig;
}

export default function ServiceCapabilities({ service }: ServiceCapabilitiesProps) {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-left space-y-2 max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-[#E52B2F] uppercase">
            OUR SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {service.capabilitiesHeading}
          </h2>
        </div>

        {/* 8 Capability Cards Grid (4x2 on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {service.capabilities.map((cap, idx) => {
            const IconComp = capabilityIconMap[cap.iconName] || Target;
            const targetUrl = `/services-products/${cap.slug}`;

            return (
              <Link
                key={idx}
                href={targetUrl}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#E52B2F]/40 hover:shadow-xl hover:shadow-slate-200/50 min-h-[220px]"
              >
                <div className="space-y-4">
                  {/* Red Outline Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50/80 border border-red-100 text-[#E52B2F] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#E52B2F] group-hover:text-white">
                    <IconComp className="h-6 w-6 stroke-[1.75]" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#E52B2F] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {cap.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Link */}
                <div className="pt-4 flex justify-end">
                  <ArrowRight className="w-4 h-4 text-[#E52B2F] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
