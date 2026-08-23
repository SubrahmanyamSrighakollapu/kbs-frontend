"use client";

import React from "react";
import { automationSaaSData } from "@/data/services";
import {
  ShoppingBag,
  Globe,
  Activity,
  FileCode,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Layers,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  ShoppingBag: ShoppingBag,
  Globe: Globe,
  Activity: Activity,
  FileCode: FileCode,
};

const whyIconMap = {
  CheckCircle2: CheckCircle2,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Layers: Layers,
  RefreshCw: RefreshCw,
};

export default function AutomationSaaSSection() {
  return (
    <section id="automation-saas" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#D82DFF]/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#168BFF]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#D82DFF] via-[#168BFF] to-[#00C9A7] bg-clip-text text-transparent block mb-3">
            BUSINESS AUTOMATION & SAAS VERTICAL
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            {automationSaaSData.heroTitlePrefix}{" "}
            <span className="bg-gradient-to-r from-[#D82DFF] via-[#168BFF] to-[#00C9A7] bg-clip-text text-transparent inline-block">
              {automationSaaSData.heroTitleHighlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6">
            {automationSaaSData.heroDescription}
          </p>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
              {automationSaaSData.whoWeAre}
            </p>
          </div>
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-8 rounded-2xl bg-[#03142B] border border-[#82A0FF]/20 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D82DFF] mb-2 block">VISION</span>
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
              {automationSaaSData.vision}
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-[#03142B] border border-[#82A0FF]/20 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#168BFF] mb-2 block">MISSION</span>
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
              {automationSaaSData.mission}
            </p>
          </div>
        </div>

        {/* What We've Built Grid */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-8">
            What We&apos;ve Built in SaaS & Automation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationSaaSData.categories.map((cat) => {
              const Icon = iconMap[cat.iconName as keyof typeof iconMap] || ShoppingBag;

              return (
                <div
                  key={cat.id}
                  className="bg-[#03142B] p-8 rounded-2xl border border-white/10 hover:border-[#D82DFF]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${cat.accentColor}25`,
                          color: cat.accentColor,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-xl font-extrabold text-white">{cat.categoryTitle}</h4>
                    </div>

                    <div className="space-y-6">
                      {cat.items.map((prod, idx) => (
                        <div key={idx} className="p-5 rounded-xl bg-white/5 border border-white/5">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-lg font-bold text-white">{prod.name}</h5>
                            {prod.badge && (
                              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#D82DFF]/20 text-[#D82DFF] border border-[#D82DFF]/30 font-semibold">
                                {prod.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-slate-300 font-normal leading-relaxed">
                            {prod.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Us Pillars */}
        <div className="pt-8 border-t border-white/10">
          <h3 className="text-2xl font-extrabold mb-8">Why KBS Automation & SaaS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {automationSaaSData.whyUs.map((pillar) => {
              const Icon = whyIconMap[pillar.iconName as keyof typeof whyIconMap] || CheckCircle2;

              return (
                <div
                  key={pillar.id}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${pillar.accentColor}20`,
                      color: pillar.accentColor,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold mb-2 text-white">{pillar.title}</h4>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#168BFF]/20 via-[#6657FF]/20 to-[#D82DFF]/20 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl sm:text-2xl font-extrabold mb-2">{automationSaaSData.closingCtaTitle}</h4>
            <p className="text-sm sm:text-base text-slate-300 font-normal">{automationSaaSData.closingCtaDescription}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D82DFF] to-[#168BFF] text-white font-semibold text-sm hover:opacity-95 transition-all shadow-lg whitespace-nowrap shrink-0 group"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
