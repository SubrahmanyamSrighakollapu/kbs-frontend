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
    <section ref={sectionRef} className="relative z-20 -mt-12 sm:-mt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1380px] mx-auto bg-[#061A36]/90 backdrop-blur-md border border-[#82A0FF]/25 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {stats.map((item, idx) => {
            const Icon = iconMap[item.iconName];
            const displayVal = hasAnimated ? counts[item.id] || item.value : item.value;
            const isLast = idx === stats.length - 1;

            return (
              <div
                key={item.id}
                className={`flex items-center space-x-4 sm:space-x-5 lg:px-8 ${
                  !isLast ? "lg:border-r lg:border-[#82A0FF]/20" : ""
                }`}
              >
                {/* Outlined Icon Badge */}
                <div className="shrink-0 p-3 sm:p-3.5 rounded-xl bg-gradient-to-br from-[#168BFF]/15 to-[#6657FF]/15 border border-[#168BFF]/30 text-[#00A8FF]">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                {/* Content */}
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    {displayVal}
                    {item.suffix}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5 whitespace-nowrap">
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

