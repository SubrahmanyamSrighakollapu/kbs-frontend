"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { contactFAQs } from "@/data/contact";

export default function ContactFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#E52B2F] uppercase">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {contactFAQs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const contentId = `faq-content-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-slate-900 bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                    isOpen ? "bg-[#E52B2F] text-white rotate-180" : "bg-slate-100 text-slate-600"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="p-5 sm:p-6 pt-0 border-t border-slate-100 bg-white animate-fade-in"
                  >
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
