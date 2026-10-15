"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What are healthcare service categories?",
    answer:
      "They are general groupings, such as primary care or diagnostics, used to explain kinds of support. A category describes a concept; it is not a provider or a confirmed service.",
  },
  {
    question: "Does a category mean care is available near me?",
    answer:
      "No. Availability depends on your location, participating organizations, and current authorization. This page does not check or confirm local availability.",
  },
  {
    question: "Can this page tell me which specialist I need?",
    answer:
      "No. Choosing a specialty, diagnosing, or recommending treatment belongs to qualified healthcare professionals.",
  },
  {
    question: "How can I learn about booking?",
    answer:
      "Booking or requesting appointments is a separate capability that requires its own identity, permissions, scheduling, and partner checks. A request is not a confirmed appointment.",
  },
  {
    question: "How is information reviewed?",
    answer:
      "Category descriptions are candidate editorial definitions. Clinical, legal, and editorial review is required before publication.",
  },
];

export default function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-white">
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
              Service education, with clear limits.
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
