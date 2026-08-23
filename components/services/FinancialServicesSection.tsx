"use client";

import React from "react";
import { financialServicesData } from "@/data/services";
import {
  ShieldCheck,
  Send,
  Sparkles,
  Banknote,
  CheckCircle2,
  Zap,
  Layers,
  RefreshCw,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const offerIconMap = {
  ShieldCheck: ShieldCheck,
  Send: Send,
  Sparkles: Sparkles,
  Banknote: Banknote,
};

const whyIconMap = {
  CheckCircle2: CheckCircle2,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Layers: Layers,
  RefreshCw: RefreshCw,
};

export default function FinancialServicesSection() {
  return (
    <section id="financial-services" className="py-16 sm:py-24 bg-white text-[#111827] relative">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-3">
            FINTECH VERTICAL (FINJO)
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            {financialServicesData.heroTitlePrefix}{" "}
            <span className="bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent inline-block">
              {financialServicesData.heroTitleHighlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5B6475] font-normal leading-relaxed mb-6">
            {financialServicesData.heroDescription}
          </p>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-sm sm:text-base text-[#5B6475] font-normal leading-relaxed">
              {financialServicesData.whoWeAre}
            </p>
          </div>
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-8 rounded-2xl bg-[#03142B] text-white border border-[#82A0FF]/20 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A52BFF] mb-2 block">VISION</span>
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
              {financialServicesData.vision}
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-[#03142B] text-white border border-[#82A0FF]/20 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#168BFF] mb-2 block">MISSION</span>
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
              {financialServicesData.mission}
            </p>
          </div>
        </div>

        {/* What We Offer Grid */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-8">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {financialServicesData.offers.map((offer) => {
              const Icon = offerIconMap[offer.iconName as keyof typeof offerIconMap] || ShieldCheck;

              return (
                <div
                  key={offer.id}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-[#168BFF]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${offer.accentColor}15`,
                        color: offer.accentColor,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-extrabold mb-3 text-[#111827]">{offer.title}</h4>
                    <p className="text-sm sm:text-base text-[#5B6475] font-normal leading-relaxed">
                      {offer.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* What's Next Roadmap Card */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-[#03142B] via-[#061C3C] to-[#0A1633] text-white border border-[#82A0FF]/20 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-[#A52BFF]/20 text-[#A52BFF] flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-extrabold">What&apos;s Next in Financial Services</h4>
          </div>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-3xl">
            {financialServicesData.whatsNext}
          </p>
        </div>

        {/* Why Us Pillars */}
        <div className="pt-8 border-t border-slate-200">
          <h3 className="text-2xl font-extrabold mb-8">Why KBS Financial Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {financialServicesData.whyUs.map((pillar) => {
              const Icon = whyIconMap[pillar.iconName as keyof typeof whyIconMap] || CheckCircle2;

              return (
                <div
                  key={pillar.id}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${pillar.accentColor}15`,
                      color: pillar.accentColor,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold mb-2 text-[#111827]">{pillar.title}</h4>
                  <p className="text-xs text-[#5B6475] font-normal leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#168BFF]/10 via-[#6657FF]/10 to-[#A52BFF]/10 border border-[#168BFF]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl sm:text-2xl font-extrabold mb-2 text-[#111827]">{financialServicesData.closingCtaTitle}</h4>
            <p className="text-sm sm:text-base text-[#5B6475] font-normal">{financialServicesData.closingCtaDescription}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-semibold text-sm hover:opacity-95 transition-all shadow-lg whitespace-nowrap shrink-0 group"
          >
            Talk to Our Team
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
