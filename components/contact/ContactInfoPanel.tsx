"use client";

import React from "react";
import { contactInfoList } from "@/data/contact";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const iconMap = {
  MapPin: MapPin,
  Mail: Mail,
  Phone: Phone,
  Clock: Clock,
};

export default function ContactInfoPanel() {
  return (
    <section className="relative z-30 -mt-12 sm:-mt-14 mb-12 sm:mb-16">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#0F2346]/10 shadow-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {contactInfoList.map((item, idx) => {
              const Icon = iconMap[item.iconName as keyof typeof iconMap] || MapPin;
              const isLast = idx === contactInfoList.length - 1;

              return (
                <div
                  key={item.id}
                  className={`flex items-start space-x-4 sm:space-x-5 lg:px-6 xl:px-8 ${
                    !isLast ? "lg:border-r lg:border-[#0F2346]/10" : ""
                  }`}
                >
                  {/* Soft Circular Icon Badge */}
                  <div
                    className="w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 shadow-xs mt-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${item.accentColor}18, ${item.accentColor}08)`,
                      border: `1.5px solid ${item.accentColor}40`,
                      color: item.accentColor,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#111827] tracking-tight mb-1">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-xs sm:text-sm font-semibold text-[#168BFF] hover:underline block leading-relaxed"
                      >
                        {item.lines.join(" ")}
                      </a>
                    ) : (
                      item.lines.map((line, i) => (
                        <p
                          key={i}
                          className="text-xs sm:text-sm text-[#5B6475] leading-relaxed font-normal"
                        >
                          {line}
                        </p>
                      ))
                    )}
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
