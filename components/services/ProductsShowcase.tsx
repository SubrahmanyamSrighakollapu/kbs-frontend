"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { showcaseProducts, processSteps } from "@/data/services";
import {
  ArrowRight,
  Search,
  FileText,
  Palette,
  Code,
  ShieldCheck,
  Rocket,
  Shield,
  Store,
  MapPin,
  Trophy,
  Sparkles,
  Award,
} from "lucide-react";

const processIconMap = {
  Search: Search,
  FileText: FileText,
  Palette: Palette,
  Code: Code,
  ShieldCheck: ShieldCheck,
  Rocket: Rocket,
};

const productIconMap: Record<string, React.ElementType> = {
  shield: Shield,
  store: Store,
  map: MapPin,
  trophy: Trophy,
  sparkles: Sparkles,
  award: Award,
};

export default function ProductsShowcase() {
  const [activeProductId, setActiveProductId] = useState<string>("finjo");
  const activeProduct =
    showcaseProducts.find((p) => p.id === activeProductId) || showcaseProducts[0];

  return (
    <section className="bg-[#03142B] text-white py-16 sm:py-24 border-y border-[#82A0FF]/15 relative overflow-hidden">
      {/* Background Decorative Mesh Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#168BFF]/10 via-[#6657FF]/08 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN: Dark Product List (~52%) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Header */}
            <div className="mb-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#168BFF] block mb-2">
                OUR PRODUCTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Software Solutions Built for Market Impact
              </h2>
            </div>

            {/* Product Rows */}
            <div className="space-y-3">
              {showcaseProducts.map((product) => {
                const isSelected = product.id === activeProductId;
                const ProductIcon = productIconMap[product.iconType] || Shield;

                return (
                  <div
                    key={product.id}
                    onClick={() => setActiveProductId(product.id)}
                    onMouseEnter={() => setActiveProductId(product.id)}
                    className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer group flex items-center justify-between gap-4 ${
                      isSelected
                        ? "bg-[#061C38] border-[#168BFF]/60 shadow-lg shadow-[#168BFF]/10"
                        : "bg-white/[0.04] border-white/10 hover:bg-white/[0.08] hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Product Icon Badge */}
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          backgroundColor: `${product.accentColor}20`,
                          border: `1px solid ${product.accentColor}40`,
                          color: product.accentColor,
                        }}
                      >
                        <ProductIcon className="w-5.5 h-5.5" />
                      </div>

                      {/* Product Text & Pill */}
                      <div>
                        <div className="flex items-center gap-2.5 mb-1">
                          <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#168BFF] transition-colors">
                            {product.name}
                          </h3>
                          <span
                            className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full text-slate-300 bg-white/10 border border-white/10"
                          >
                            {product.category}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-md">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Explore Link */}
                    <Link
                      href={product.href}
                      className={`hidden sm:flex items-center text-xs font-semibold shrink-0 transition-all ${
                        isSelected ? "text-[#168BFF] translate-x-1" : "text-slate-400 group-hover:text-white group-hover:translate-x-1"
                      }`}
                    >
                      Explore <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Laptop Preview Card & Process Grid (~48%) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Laptop Preview Card (Light/White Surround Card) */}
            <div className="bg-white p-4 sm:p-5 rounded-3xl border border-white/20 shadow-2xl transition-all duration-500">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={activeProduct.image}
                  alt={`${activeProduct.name} Dashboard Preview`}
                  fill
                  className="object-cover object-center transition-all duration-500"
                />
              </div>
            </div>

            {/* OUR PROCESS Section */}
            <div className="bg-white/[0.035] backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
              <div className="mb-6">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-1">
                  OUR PROCESS
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  How We Engineer Success
                </h3>
              </div>

              {/* 2x3 Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {processSteps.map((step) => {
                  const StepIcon = processIconMap[step.iconName as keyof typeof processIconMap] || Search;

                  return (
                    <div
                      key={step.id}
                      className="bg-white/[0.04] p-4 rounded-xl border border-white/10 hover:border-[#168BFF]/40 hover:bg-white/[0.07] transition-all duration-300 group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `${step.accentColor}20`,
                          border: `1px solid ${step.accentColor}40`,
                          color: step.accentColor,
                        }}
                      >
                        <StepIcon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1 tracking-tight">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 leading-snug font-normal">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
