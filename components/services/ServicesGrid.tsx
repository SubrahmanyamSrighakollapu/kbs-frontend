"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { 
  Code2, 
  Bot, 
  Cloud, 
  LifeBuoy, 
  BarChart3, 
  Layout, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Bot,
  Cloud,
  LifeBuoy,
  BarChart3,
  Layout,
  ShieldCheck,
};

export default function ServicesGrid() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-left space-y-2">
          <span className="text-xs font-bold tracking-widest text-[#E52B2F] uppercase">
            OUR CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            What We Deliver
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal">
            End-to-end digital capabilities designed for performance, resilience, and enterprise scale.
          </p>
        </div>

        {/* 8 Services Grid (4 per row on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code2;
            const targetUrl = `/services-products/${service.slug || service.id}`;

            return (
              <Link
                key={service.id}
                href={targetUrl}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#E52B2F]/40 hover:shadow-xl hover:shadow-slate-200/50 min-h-[220px]"
              >
                <div className="space-y-4">
                  {/* Red Outline Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50/80 border border-red-100 text-[#E52B2F] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#E52B2F] group-hover:text-white">
                    <IconComponent className="h-6 w-6 stroke-[1.75]" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#E52B2F] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>
                </div>

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
