"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Does Zoiko Access dispense medicine?",
    answer:
      "No. Licensed pharmacies keep dispensing authority and professional judgment.",
  },
  {
    question: "Can I find a pharmacy or check stock here?",
    answer:
      "No. Displays show service descriptions and general coordination pathways only, not real-time inventory or stock availability.",
  },
  {
    question: "Does a sent prescription mean it was filled?",
    answer:
      "No. Transmission indicates a request was sent to a pharmacy system, but clinical verification and dispensing decisions remain with the licensed pharmacy.",
  },
  {
    question: "Who can act for someone else?",
    answer:
      "Only authorized guardians or caregivers with verified authority can act on behalf of another individual.",
  },
  {
    question: "Is this medical advice?",
    answer:
      "No. Zoiko Access provides organizational and workflow coordination tools only. Prescribers and pharmacies retain full clinical and dispensing responsibility.",
  },
];

export default function PharmacyFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Section Title */}
          <div className="lg:col-span-5">
            <div className="mb-3 inline-flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-[#7C3AED]"
                aria-hidden="true"
              />
              <span className="text-xs font-semibold tracking-wide text-[#7C3AED] sm:text-sm">
                Questions, answered
              </span>
            </div>
            <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
              Clear answers, with clear limits.
            </h2>
          </div>

          {/* Right Column - Accordion List */}
          <div className="divide-y divide-[#E2E8F0] lg:col-span-7">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-6 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between gap-4 text-left font-semibold text-[#1E1B4B] transition-colors hover:text-[#7C3AED]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[17px] sm:text-[18px]">
                      {faq.question}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[#7C3AED]">
                      {isOpen ? (
                        <Minus className="h-5 w-5 stroke-[2.5]" />
                      ) : (
                        <Plus className="h-5 w-5 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pr-8">
                      <p className="text-[14px] leading-[1.65] text-[#475569] sm:text-[15px]">
                        {faq.answer}
                      </p>
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
}
