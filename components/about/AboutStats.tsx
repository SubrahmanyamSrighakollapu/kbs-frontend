"use client";

import React, { useState, useEffect, useRef } from "react";
import { aboutStats } from "@/data/about";

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
    <section
      ref={sectionRef}
      className="bg-[#06131E] text-white py-12 sm:py-16 border-b border-slate-800"
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {aboutStats.map((item, idx) => {
            const displayVal = hasAnimated
              ? counts[item.id] || item.value
              : item.value;

            return (
              <div
                key={item.id}
                className={`flex flex-col items-center justify-center p-4 ${
                  idx !== aboutStats.length - 1
                    ? "md:border-r md:border-slate-800/80"
                    : ""
                }`}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-1">
                  {displayVal}
                  {item.suffix}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
