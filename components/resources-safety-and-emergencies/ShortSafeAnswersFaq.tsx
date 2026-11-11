"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

const safetyFaqs: FaqItem[] = [
  {
    question: "Can Zoiko Access send an ambulance?",
    answer:
      "No. Zoiko Access cannot dispatch emergency services or coordinate emergency response. Call your local emergency service directly.",
  },
  {
    question: "Can this site tell me if my symptoms are serious?",
    answer:
      "No. This website never performs clinical triage, symptom assessment, or medical diagnosis. If you are unsure, treat the situation as urgent and contact local services.",
  },
  {
    question: "Why don't you show an emergency number?",
    answer:
      "Emergency numbers vary by country and jurisdiction, and this site never guesses your location automatically. You can optionally select a country above to view reviewed public reference information.",
  },
  {
    question: "Can I report an emergency through support?",
    answer:
      "No. Support channels are never an emergency or urgent medical service. Always contact local emergency responders directly.",
  },
  {
    question: "Does this page track my location?",
    answer:
      "No. We never infer your location from your IP address or track what you search on safety pages.",
  },
];

export const ShortSafeAnswersFaq: React.FC = () => {
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
              Short, safe answers
            </h2>

            <div className="space-y-2.5">
              {safetyFaqs.map((faq, idx) => {
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

          {/* Right Column: Loft Workshop Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <Image
                src="/resources-safety-and-emergencies/rsae9.jpg"
                alt="Team discussion workshop"
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
