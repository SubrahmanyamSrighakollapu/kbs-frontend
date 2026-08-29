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
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/80 shadow-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfoList.map((item) => {
              const Icon = iconMap[item.iconName as keyof typeof iconMap] || MapPin;

              return (
                <div
                  key={item.id}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-slate-300/80 shadow-xs hover:shadow-md transition-all duration-300 flex items-start space-x-4 h-full"
                >
                  {/* Icon Badge */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-xs"
                    style={{
                      background: `linear-gradient(135deg, ${item.accentColor}18, ${item.accentColor}08)`,
                      border: `1.5px solid ${item.accentColor}30`,
                      color: item.accentColor,
                    }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-extrabold text-[#111827] uppercase tracking-wider mb-1.5">
                      {item.title}
                    </h3>

                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-xs sm:text-sm font-semibold text-[#168BFF] hover:text-[#6657FF] transition-colors block break-words leading-relaxed"
                      >
                        {item.lines.join(" ")}
                      </a>
                    ) : (
                      item.lines.map((line, i) => (
                        <p
                          key={i}
                          className="text-xs sm:text-sm text-[#5B6475] leading-relaxed font-normal break-words"
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
