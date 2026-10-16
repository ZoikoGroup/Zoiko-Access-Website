"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What is the difference between primary care and specialist care?",
    answer:
      "Primary care is often a first point of contact for general needs and ongoing coordination. Specialist care focuses on particular areas of care or expertise. How people move between them depends on local rules and the organizations involved.",
  },
  {
    question: "Do all healthcare professionals need a referral?",
    answer:
      "No single rule applies everywhere. Whether a referral is needed depends on the service, health system, coverage, and local rules — ask the responsible organization.",
  },
  {
    question: "Does Zoiko Access verify every healthcare professional?",
    answer:
      "No. This guide is general education. Qualifications, licensing, and credentialing are confirmed through the relevant official or organization-authoritative source in your location.",
  },
  {
    question: "Can a professional title tell me which care I need?",
    answer:
      "No. A title alone does not describe what a person may provide, and it is not a recommendation. Care decisions belong to qualified professionals.",
  },
  {
    question: "Can a caregiver act on behalf of another person?",
    answer:
      "Only within valid delegated or legal authority, after appropriate verification and under local rules.",
  },
];

export default function ProfessionalsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-[#F5F8FC]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,403fr)_minmax(0,813fr)] lg:gap-x-16">
          {/* Left Column - Header */}
          <div>
            <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase leading-4 tracking-wider text-[#6A44D4]">
              <span
                className="block h-1.5 w-1.5 rounded-full bg-[#6A44D4]"
                aria-hidden="true"
              />
              Questions, answered
            </p>

            <h2 className="mt-5 max-w-[380px] text-[30px] font-bold leading-[1.2] tracking-[-0.04em] text-[#23327A] sm:text-[36px] sm:leading-10">
              Professional roles, without assumptions.
            </h2>
          </div>

          {/* Right Column - Accordion List */}
          <div className="flex flex-col divide-y divide-[#E5E7EB] border-b border-[#E5E7EB]">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className="py-6 first:pt-2">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-6 text-[15px] font-semibold text-[#23327A] sm:text-[16px]">
                      {item.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#4267D5]">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-3 pr-12 text-[14px] leading-[1.8] text-[#4B5563] sm:text-[15px]">
                      {item.answer}
                    </p>
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
