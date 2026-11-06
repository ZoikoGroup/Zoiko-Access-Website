"use client";

import React, { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "Can Zoiko Access dispense medicine?",
    answer: "No. Only licensed pharmacies validate and dispense medicines.",
  },
  {
    id: 2,
    question: "Is stock guaranteed?",
    answer:
      "No. Stock belongs to the pharmacy and availability is never guaranteed until dispensed.",
  },
  {
    id: 3,
    question: 'Does "sent" mean the pharmacy accepted it?',
    answer:
      "No. Sent only means the routing request was transmitted. Acceptance requires pharmacist validation.",
  },
  {
    id: 4,
    question: "Can caregivers act for someone?",
    answer:
      "Yes, but only where legally permitted and explicitly delegated by the patient under applicable regulations.",
  },
  {
    id: 5,
    question: "Are all pharmacies connected?",
    answer:
      "No. Only pharmacies with verified, authorized connections participate in structured handoffs.",
  },
  {
    id: 6,
    question: "Where do I go with an urgent question?",
    answer:
      "Always contact a local licensed pharmacist, your prescribing clinician, or emergency services.",
  },
];

export const PlainLanguageFaq: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full bg-[#fbfbff] py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              PLAIN-LANGUAGE FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            The questions people ask most.
          </h2>
        </div>

        {/* 2 Column FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            const isFirstFeatured = faq.id === 1 && isOpen;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all overflow-hidden ${
                  isFirstFeatured
                    ? "bg-[#1c2294] text-white shadow-lg border border-[#2b33b8]"
                    : "bg-white text-slate-800 border border-slate-200/80 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-bold text-xs sm:text-sm md:text-base ${
                      isFirstFeatured ? "text-white" : "text-[#0f172a]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`text-base font-bold shrink-0 ${
                      isFirstFeatured ? "text-purple-200" : "text-slate-400"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    className={`px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm leading-relaxed ${
                      isFirstFeatured
                        ? "text-purple-100"
                        : "text-slate-600 border-t border-slate-100 pt-3"
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
