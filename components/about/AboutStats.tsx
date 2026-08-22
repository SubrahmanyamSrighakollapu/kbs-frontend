"use client";

import React, { useState, useEffect, useRef } from "react";
import { aboutStats } from "@/data/about";
import { PackageCheck, Users, Globe, MapPin } from "lucide-react";

const iconMap = {
  PackageCheck: PackageCheck,
  Users: Users,
  Globe: Globe,
  MapPin: MapPin,
};

export default function AboutStats() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    products: 0,
    clients: 0,
    industries: 0,
    cities: 0,
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
              products: Math.floor(50 * progress),
              clients: Math.floor(100 * progress),
              industries: Math.floor(6 * progress),
              cities: Math.floor(20 * progress),
            });

            if (currentStep >= steps) {
              setCounts({
                products: 50,
                clients: 100,
                industries: 6,
                cities: 20,
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
    <section ref={sectionRef} className="bg-white py-12 sm:py-16">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#061A36] border border-[#82A0FF]/25 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {aboutStats.map((item, idx) => {
              const Icon = iconMap[item.iconName as keyof typeof iconMap] || PackageCheck;
              const displayVal = hasAnimated ? counts[item.id] || item.value : item.value;
              const isLast = idx === aboutStats.length - 1;

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
      </div>
    </section>
  );
}

