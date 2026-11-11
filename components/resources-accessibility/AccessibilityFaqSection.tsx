"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is Zoiko Access fully accessible?",
    answer:
      "We design toward WCAG 2.2 AA and publish what is tested versus planned. Specific verified configurations and any known limitations are documented openly before launch.",
  },
  {
    question: "How do I report an accessibility problem?",
    answer:
      "Dedicated accessibility reporting opens once it has an accountable owner and tested triage route. Meanwhile, general navigation help is available through the Help Center.",
  },
  {
    question: "Can I get information in another format?",
    answer:
      "Alternative formats such as large print, plain-language summaries, text-only pages, and captions appear once each option is verified and staffed.",
  },
  {
    question: "Which assistive technologies do you support?",
    answer:
      "Pages are designed using semantic HTML, landmarks, keyboard-only navigation, and clear focus states to work with standard desktop and mobile screen readers and magnifiers.",
  },
  {
    question: "Should I include medical details in a report?",
    answer:
      "Never. Accessibility feedback only requires the page, barrier description, and device context—never patient or medical information.",
  },
  {
    question: "Can this page help in an emergency?",
    answer:
      "No. Zoiko Access does not provide triage or emergency care. Contact local emergency services immediately in an urgent medical situation.",
  },
];

export const AccessibilityFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
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
              Accessibility questions,{" "}
              <span className="text-[#7c5cff]">answered first</span>
            </h2>

            <div className="space-y-2.5">
              {faqs.map((faq, idx) => {
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

          {/* Right Column: Arched-top Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-[4/4.3] rounded-t-[160px] rounded-b-2xl overflow-hidden shadow-lg bg-slate-100">
              <Image
                src="/resources-accessibility/ara15.jpg"
                alt="Team discussion workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
