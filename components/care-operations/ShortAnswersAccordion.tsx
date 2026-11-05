"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Who confirms an appointment?",
    answer:
      "Only the clinic, through its own scheduling system. A request is never a confirmation.",
  },
  {
    question: "Is a referral accepted once it is received?",
    answer:
      "No. Receipt acknowledges delivery to the destination system. Clinical review and acceptance require human action by an authorized reviewer.",
  },
  {
    question: "What is a handoff?",
    answer:
      "A handoff is the explicit transfer of responsibility for a care task or transition stage, requiring acceptance by a named recipient.",
  },
  {
    question: "What if the receiving team declines?",
    answer:
      "The item stays with the current owner. The sender is notified immediately with recorded evidence, and alternative routes are sought.",
  },
  {
    question: "Does Zoiko Access make clinical decisions?",
    answer:
      "No. Zoiko Access is a permissioned coordination layer. All clinical decisions, triage, and diagnoses remain entirely with human providers.",
  },
  {
    question: "Is this for emergencies?",
    answer:
      "No. Zoiko Access is for routine, permissioned care coordination and structured handoffs. Emergency response routes operate independently.",
  },
];

export default function ShortAnswersAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="max-w-xl">
          <div className="mb-3">
            <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
              — QUESTIONS, ANSWERED
            </span>
          </div>

          <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Short answers first.
          </h2>
        </div>

        {/* Layout Grid: FAQ Accordion (Left) + Image Container (Right) */}
        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Accordions */}
          <div className="space-y-4 lg:col-span-7">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "border-[#7C3AED] bg-white ring-1 ring-[#7C3AED]/30 shadow-md"
                      : "border-[#E2E8F0] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  >
                    <span className="text-[16px] font-bold text-[#0E1646] sm:text-[17px]">
                      {faq.question}
                    </span>
                    <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#7C3AED]">
                      {isOpen ? (
                        <Minus className="h-4 w-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="h-4 w-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-0">
                      <p className="text-[14px] leading-[1.65] text-[#475569] sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Clean Visual Image with /care/6.png */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-[#E2E8F0] shadow-xl">
              <Image
                src="/care/6.png"
                alt="Questions answered illustration"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
