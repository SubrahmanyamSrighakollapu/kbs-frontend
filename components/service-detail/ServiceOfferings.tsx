"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { ServiceDetailConfig } from "@/data/services";

interface ServiceOfferingsProps {
  service: ServiceDetailConfig;
}

export default function ServiceOfferings({ service }: ServiceOfferingsProps) {
  return (
    <section className="w-full bg-slate-50/50 py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 space-y-2 text-left">
          <span className="text-xs font-bold tracking-widest text-[#E52B2F] uppercase">
            DETAILED OFFERINGS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Execute {service.shortTitle}
          </h2>
        </div>

        {/* Offerings Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.offerings.map((offering, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-all space-y-4"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {offering.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {offering.description}
              </p>

              <div className="pt-2 space-y-2 border-t border-slate-100">
                {offering.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2.5 text-xs font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#E52B2F] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
