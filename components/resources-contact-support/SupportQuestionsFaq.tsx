"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

const supportFaqs: FaqItem[] = [
  {
    question: "Can support help with a medical emergency?",
    answer:
      "No. Support cannot triage or help with medical emergencies. Contact local emergency services immediately.",
  },
  {
    question: "Why can't I submit a request?",
    answer:
      "Support requests open only once a staffed channel, secure handling, and accurate confirmation workflows are verified and active.",
  },
  {
    question: "Is there chat or phone support?",
    answer:
      "Live chat and phone support are not offered at this stage. Please use the Help Center and FAQ pages for reviewed guidance.",
  },
  {
    question: "Where do privacy requests go?",
    answer:
      "Privacy and data rights requests follow the dedicated Privacy and Your Information route rather than general support.",
  },
  {
    question: "Should I attach screenshots or documents?",
    answer:
      "No. File attachments are off by default to protect sensitive information, and you should never send medical or personal health documents.",
  },
];

export const SupportQuestionsFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#f8f9fe] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: FAQ */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#6366f1]" />
              <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-7">
              Support questions
            </h2>

            <div className="space-y-2.5">
              {supportFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 hover:bg-slate-50/60 transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-xs sm:text-sm text-[#0f172a]">
                        {faq.question}
                      </span>
                      <span className="text-[#6366f1] font-bold text-base shrink-0 select-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                        <p className="pt-3">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Support Team Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <Image
                src="/resources-contact-support/rcs13.jpg"
                alt="Team collaborating around a wooden table"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
