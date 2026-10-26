"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "Does Zoiko Access perform diagnostic tests?",
    answer:
      "Zoiko Access is designed as a digital navigation and coordination layer. Diagnostic services and the accuracy of their test results remain the responsibility of authorized laboratories and other qualified providers.",
  },
  {
    question: "Does receiving a result mean a clinician reviewed it?",
    answer:
      "No. Delivering a result to an inbox or portal is a technical transmission event. Clinical review and clinical judgment are independent professional actions that must be separately confirmed.",
  },
  {
    question: "Can Zoiko Access dispense prescriptions?",
    answer:
      "No. Dispensing medications, checking interactions, and counseling patients are the exclusive legal and professional duties of licensed pharmacies and qualified pharmacists.",
  },
  {
    question: "Are all laboratories and pharmacies connected?",
    answer:
      "No. Participation is subject to organizational agreements, verified technical capabilities, and jurisdictional compliance. Connectivity is never universal or guaranteed.",
  },
  {
    question: "What is the role of interoperability?",
    answer:
      "Interoperability allows governed transmission of discrete records and summaries between authorized entities while preserving the legal provenance and authority of the primary source systems.",
  },
  {
    question: "How can an institution explore participation?",
    answer:
      "Healthcare organizations, imaging centers, laboratories, and pharmacy groups can initiate an exploratory assessment through our governed partnership pathway.",
  },
];

export const LabsFaqAccordion: React.FC = () => {
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
              Know what it can do. Understand what it means.
            </h2>
          </div>

          {/* Right Column: 6 Accordion Questions */}
          <div className="lg:col-span-7 divide-y divide-purple-100/70 border-t border-purple-100/70">
            {faqList.map((item, idx) => {
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
