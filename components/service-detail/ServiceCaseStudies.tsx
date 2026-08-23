"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CaseStudyItem {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

interface ServiceCaseStudiesProps {
  caseStudies: CaseStudyItem[];
}

export default function ServiceCaseStudies({ caseStudies }: ServiceCaseStudiesProps) {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest text-[#E52B2F] uppercase">
              OUR WORK
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Solutions we&apos;ve built. Impact we&apos;ve delivered.
            </h2>
          </div>

          <Link
            href="/case-studies"
            className="group flex items-center gap-1 text-sm font-bold text-[#E52B2F] hover:text-[#c92226] transition-colors"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {caseStudies.map((cs, idx) => (
            <Link
              key={idx}
              href={cs.link}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#E52B2F]/40"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-white/20">
                    {cs.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#E52B2F] transition-colors leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                    {cs.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-[#E52B2F]">
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
