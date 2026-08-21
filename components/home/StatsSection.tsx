"use client";

import React, { useState, useEffect, useRef } from "react";
import { stats } from "@/data/home";
import { Calendar, PackageCheck, Users, Globe } from "lucide-react";

const iconMap = {
  Calendar: Calendar,
  PackageCheck: PackageCheck,
  Users: Users,
  Globe: Globe,
};

export default function StatsSection() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    founded: 0,
    products: 0,
    clients: 0,
    industries: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counts over 1.5 seconds
          const duration = 1500;
          const steps = 30;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounts({
              founded: Math.floor(2021 * progress),
              products: Math.floor(50 * progress),
              clients: Math.floor(100 * progress),
              industries: Math.floor(6 * progress),
            });

            if (currentStep >= steps) {
              setCounts({
                founded: 2021,
                products: 50,
                clients: 100,
                industries: 6,
              });
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#071421] text-white py-10 sm:py-14 border-y border-slate-800/80"
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((item) => {
            const Icon = iconMap[item.iconName];
            const displayVal = hasAnimated ? counts[item.id] || item.value : item.value;

            return (
              <div
                key={item.id}
                className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-xs hover:border-[#E52B2F]/30 transition-all duration-300"
              >
                {/* Red Icon Badge */}
                <div className="shrink-0 p-3 rounded-lg border border-[#E52B2F]/30 bg-[#E52B2F]/10 text-[#E52B2F]">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                {/* Content */}
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    {displayVal}
                    {item.suffix}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
