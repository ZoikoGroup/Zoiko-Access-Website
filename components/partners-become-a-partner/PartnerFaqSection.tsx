"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Who can enquire?",
    answer:
      "Technology providers, systems integrators and other institutions exploring a permitted collaboration, once intake opens.",
  },
  {
    question: "Is acceptance guaranteed?",
    answer:
      "No. Expressing interest is never approval, and no partnership or timeline is assumed or guaranteed.",
  },
  {
    question: "Is an API available?",
    answer:
      "No live API is available today. Conceptual guidance is published to clarify integration architecture prior to operational availability.",
  },
  {
    question: "What reviews apply?",
    answer:
      "Technical validation, clinical governance, lawful purpose, source data ownership, and organization due diligence apply to all routes.",
  },
  {
    question: "What happens to my data?",
    answer:
      "Any information submitted once intake opens is handled strictly per lawful basis and minimization principles. Source systems retain ownership of their records.",
  },
];

export const PartnerFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gradient-to-br from-white via-[#fcfbff] to-[#f4f2ff] py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#6366f1]" />
              <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-8">
              Before you reach out.
            </h2>

            {/* Accordion List */}
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50/50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-xs sm:text-sm md:text-base text-[#0f172a]">
                        {faq.question}
                      </span>
                      <span className="w-6 h-6 rounded-full bg-[#f1effd] text-[#6366f1] flex items-center justify-center font-bold text-xs shrink-0 select-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100">
                        <p className="pt-3">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Office presentation photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-slate-100">
              <Image
                src="/partners-become-a-partner/bap7.jpg"
                alt="Colleagues discussing ideas in workshop room"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
