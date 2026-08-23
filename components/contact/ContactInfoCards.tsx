"use client";

import React from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { contactInfoCards } from "@/data/contact";

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Mail,
  Phone,
  Clock,
};

export default function ContactInfoCards() {
  return (
    <section className="w-full bg-white py-12 lg:py-16 border-b border-slate-100">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {contactInfoCards.map((card) => {
            const IconComp = iconMap[card.iconName] || MapPin;
            const isLink = Boolean(card.href);

            const CardContent = (
              <div className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#E52B2F]/40 hover:shadow-xl hover:shadow-slate-200/50 min-h-[160px]">
                <div className="space-y-4">
                  {/* Red Outline Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 border border-red-100 text-[#E52B2F] transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#E52B2F] group-hover:text-white">
                    <IconComp className="h-6 w-6 stroke-[1.75]" />
                  </div>

                  {/* Title & Values */}
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#E52B2F] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-800 leading-snug">
                      {card.value}
                    </p>
                    {card.subValue && (
                      <p className="text-xs text-slate-500 font-medium">
                        {card.subValue}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );

            if (isLink && card.href) {
              return (
                <a 
                  key={card.id} 
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {CardContent}
                </a>
              );
            }

            return <div key={card.id}>{CardContent}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
