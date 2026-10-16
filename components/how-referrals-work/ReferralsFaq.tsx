"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What is a healthcare referral?",
    answer:
      "A request or recommendation from a healthcare professional or another locally permitted source for assessment or services by a different professional or organization.",
  },
  {
    question: "Is a sent referral approved?",
    answer:
      "No. Sending only means the request was dispatched. Receipt, review, and acceptance are separate steps reported by the receiving organization.",
  },
  {
    question: "Can I refer myself?",
    answer:
      "Some systems and services permit self-referral, but not all. Ask the appropriate local organization which route applies to you.",
  },
  {
    question: "Does a referral guarantee an appointment?",
    answer:
      "No. An appointment is confirmed only when the responsible service issues a separate, explicit appointment confirmation.",
  },
  {
    question: "Can a caregiver manage my referral?",
    answer:
      "A caregiver may act only with appropriate legal authority and supported permissions, under local rules.",
  },
  {
    question: "Who can tell me the current status?",
    answer:
      "The originating care team or the receiving organization, through its official channel. This page does not show live referral status.",
  },
];

export default function ReferralsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20">
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

            <h2 className="mt-5 max-w-[400px] text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-[#23327A] [font-family:var(--font-poppins)] sm:text-[34px] sm:leading-10">
              Understand the handoff.
              <br />
              Keep the decision clear.
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
