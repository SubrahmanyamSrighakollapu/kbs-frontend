"use client";

import React, { useState } from "react";
import { faqList } from "@/data/contact";
import { HelpCircle, Plus, Minus } from "lucide-react";

export default function ContactFAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#F8FAFF] py-16 sm:py-24 border-b border-[#0F2346]/10">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Have Questions? We Have Answers.
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] mx-auto mt-4" />
        </div>

        {/* Centered Accordion Container */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqList.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#168BFF]/40 shadow-md"
                    : "border-[#0F2346]/10 shadow-xs hover:border-[#168BFF]/25"
                }`}
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#168BFF]/10 text-[#168BFF] flex items-center justify-center shrink-0">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className="text-base sm:text-lg font-extrabold text-[#111827] tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  <div className="shrink-0 text-[#168BFF]">
                    {isOpen ? (
                      <Minus className="w-5 h-5 transition-transform duration-300" />
                    ) : (
                      <Plus className="w-5 h-5 transition-transform duration-300" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base text-[#5B6475] font-normal leading-relaxed border-t border-[#0F2346]/06"
                  >
                    <p className="pt-4 pl-12">{faq.answer}</p>
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
