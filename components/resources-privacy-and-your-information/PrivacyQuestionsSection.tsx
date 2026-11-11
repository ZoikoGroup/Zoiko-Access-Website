"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

const privacyFaqs: FaqItem[] = [
  {
    question: "Does this page grant access to my medical records?",
    answer:
      "No. This page explains privacy categories and boundaries only; clinical records remain with the healthcare providers and source systems that hold them.",
  },
  {
    question: "Is this the legal privacy notice?",
    answer:
      "No. This is a plain-language educational guide. The legally operative privacy notice is published separately by its accountable legal owner for each region.",
  },
  {
    question: "Can I make a privacy request here?",
    answer:
      "No. Privacy request workflows become active only once verified for your region and accompanied by an approved legal notice.",
  },
  {
    question: "Do you decide my rights based on my location?",
    answer:
      "We never infer your rights from your IP address. Applicable statutory privacy rights depend on the law that governs your region and relationship.",
  },
  {
    question: "Can I request information about someone else?",
    answer:
      "Only with verified legal authority or documented patient consent for a defined representative or caregiver role under local rules.",
  },
  {
    question: "Does Zoiko Access own all my health records?",
    answer:
      "No. Healthcare providers and source systems retain ownership and clinical responsibility for the records they create and maintain.",
  },
];

export const PrivacyQuestionsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: 11 Questions */}
          <div className="lg:col-span-7">
            <span className="block text-[#6366f1] text-xs font-semibold tracking-wider mb-1">
              11
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
              Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-7">
              Direct answers first.
            </p>

            <div className="space-y-2.5">
              {privacyFaqs.map((faq, idx) => {
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

          {/* Right Column: Audience Raising Hands Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <Image
                src="/resources-privacy-and-your-information/pyi14.png"
                alt="People raising hands during a Q&A session"
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
