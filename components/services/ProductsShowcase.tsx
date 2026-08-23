"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, ShieldCheck, Store, Trophy, Sparkles, Award } from "lucide-react";
import { productsData, ProductItem } from "@/data/services";

const productLogos: Record<string, React.ElementType> = {
  finjo: ShieldCheck,
  desidukan: Store,
  helyi: Layers,
  winwala: Trophy,
  creavo: Sparkles,
  "naya-leader": Award,
};

export default function ProductsShowcase() {
  const [activeProduct, setActiveProduct] = useState<ProductItem>(productsData[0]);

  return (
    <section className="w-full bg-[#06131E] py-16 lg:py-24 text-white overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 space-y-1">
          <span className="text-xs font-bold tracking-widest text-[#E52B2F] uppercase">
            OUR PRODUCTS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Proprietary SaaS & Enterprise Platforms
          </h2>
        </div>

        {/* Two Column Layout: Left Dark Product List | Right Dynamic Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Product List */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:p-6 backdrop-blur-md">
            <div className="divide-y divide-white/10 space-y-1">
              {productsData.map((prod) => {
                const isActive = activeProduct.id === prod.id;
                const IconComponent = productLogos[prod.id] || ShieldCheck;

                return (
                  <div
                    key={prod.id}
                    onMouseEnter={() => setActiveProduct(prod)}
                    onClick={() => setActiveProduct(prod)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                    className={`group cursor-pointer py-4 px-3 sm:px-4 rounded-xl transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? "bg-white/10 border-l-4 border-[#E52B2F] pl-4 shadow-lg"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4 max-w-md">
                      {/* Product Brand Icon/Badge */}
                      <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                        isActive 
                          ? "bg-[#E52B2F] text-white border-[#E52B2F]" 
                          : "bg-white/5 text-slate-300 border-white/10 group-hover:border-white/20"
                      }`}>
                        <IconComponent className="h-5 w-5" />
                      </div>

                      {/* Content */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                            {prod.name}
                          </h3>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/10 px-2 py-0.5 rounded-full">
                            {prod.tagline}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal">
                          {prod.description}
                        </p>
                      </div>
                    </div>

                    {/* Explore Link Arrow */}
                    <div className="shrink-0 ml-2">
                      <Link
                        href={prod.link}
                        className={`flex items-center gap-1 text-xs font-bold transition-all ${
                          isActive ? "text-[#E52B2F]" : "text-slate-400 group-hover:text-white"
                        }`}
                      >
                        <span className="hidden sm:inline">Explore</span>
                        <ArrowRight className={`w-4 h-4 transition-transform ${
                          isActive ? "translate-x-1 text-[#E52B2F]" : "group-hover:translate-x-1"
                        }`} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Mockup Image Preview */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="relative w-full rounded-2xl border border-white/15 bg-slate-900/90 p-4 sm:p-6 shadow-2xl shadow-black/80 flex flex-col items-center justify-center min-h-[380px] lg:min-h-[480px]">
              
              {/* Product Mockup Container */}
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-xl overflow-hidden border border-white/10 shadow-inner group">
                <Image
                  key={activeProduct.id}
                  src={activeProduct.image}
                  alt={`${activeProduct.name} Product Preview`}
                  fill
                  className="object-cover transition-all duration-500 animate-fade-in"
                  priority
                />
                
                {/* Dynamic Floating Badge */}
                <div className="absolute top-4 left-4 z-20 rounded-full bg-slate-950/80 px-4 py-1.5 backdrop-blur-md border border-white/20 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#E52B2F] animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-wide">
                    {activeProduct.name} Platform
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-xs font-medium text-slate-400">
                  Interactive Live Infrastructure Preview • Hover list items to switch
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
