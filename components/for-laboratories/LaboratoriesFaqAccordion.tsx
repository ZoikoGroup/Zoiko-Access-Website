"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const laboratoryFaqList: FaqItem[] = [
  {
    question: "Does Zoiko Access perform laboratory tests?",
    answer:
      "No. Laboratories perform tests and remain responsible for their accuracy and source records.",
  },
  {
    question: "Does a sent result mean a clinician reviewed it?",
    answer:
      "No. Delivery is a technical transfer of information. Clinical review is a separate professional duty that must be confirmed independently.",
  },
  {
    question: "Is my laboratory integrated?",
    answer:
      "Integration requires verified organizational agreements, technical alignment with local LIS endpoints, and governed data-handling agreements.",
  },
  {
    question: "Can patients view results here?",
    answer:
      "No. This page provides public structural guidance only. Patient-facing result views are governed by treating provider portals and applicable regional health information regulations.",
  },
];

export const LaboratoriesFaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Heading & Eyebrow */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#6d5ae6]" />
              <span className="text-[#6d5ae6] font-semibold text-xs sm:text-sm tracking-wide">
                Questions, answered
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.2] max-w-md">
              Clear answers, with clear limits.
            </h2>
          </div>

          {/* Right Column: 4 Accordion Questions */}
          <div className="lg:col-span-7 divide-y divide-purple-100/70 border-t border-purple-100/70">
            {laboratoryFaqList.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-2">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-3.5 flex items-center justify-between text-left group gap-4 transition-colors"
                  >
                    <span className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#6d5ae6] transition-colors leading-snug">
                      {item.question}
                    </span>
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-[#6d5ae6] shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
