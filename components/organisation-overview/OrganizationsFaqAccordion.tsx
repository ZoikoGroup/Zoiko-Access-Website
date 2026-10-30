"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What is Zoiko Access for organizations?",
    answer:
      "A coordination approach designed to help responsible organizations explore healthcare access, subject to local permissions, partner readiness and clear professional responsibility.",
  },
  {
    question: "Can employers view employee health records?",
    answer:
      "No. Employer sponsorship does not create access to employee clinical information.",
  },
  {
    question: "Is it available in my country?",
    answer:
      "Services and participation vary by location. These pages describe possible approaches, not confirmation that a program is active.",
  },
  {
    question: "Does Zoiko Access make clinical decisions?",
    answer:
      "No. Participating healthcare providers keep responsibility for diagnosis and treatment.",
  },
  {
    question: "How can our organization discuss a program?",
    answer:
      "Start with the program implementation overview. A program discussion opens only where a verified receiving team is in place.",
  },
];

export default function OrganizationsFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Section Heading */}
          <div className="lg:col-span-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
                Questions, answered
              </span>
            </div>
            <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
              Direct answers for organizations.
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
