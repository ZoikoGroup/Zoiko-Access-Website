"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

interface QuickFAQItem {
  question: string;
  answer: string;
}

const quickFAQData: QuickFAQItem[] = [
  {
    question: "Is this guide medical advice?",
    answer:
      "No. This guide provides public educational information about navigation and access principles. It does not replace medical assessment or diagnosis by a licensed professional.",
  },
  {
    question: "Does sending a request mean I have an appointment?",
    answer:
      "No. A request only means your message reached the provider's system. An appointment or service is only confirmed when the provider explicitly issues a confirmed state.",
  },
  {
    question: "Can Zoiko Access tell me which service I need?",
    answer:
      "No. Zoiko Access helps you understand care pathways and service types, but determining specific clinical needs remains the role of qualified healthcare professionals.",
  },
  {
    question: "What if nothing is available where I live?",
    answer:
      "Services are displayed strictly based on verified market availability. If a region has no active published providers, defensive UI prevents presenting unavailable paths.",
  },
  {
    question: "Where are the full FAQs?",
    answer:
      "The full registry of reviewed, versioned questions and detailed answers can be accessed via the main FAQ section on our published resource index.",
  },
];

export default function QuickAnswersFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
              — COMMON QUESTIONS
            </span>
          </div>

          <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Quick answers
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#64748B] sm:text-[16px]">
            Short answers for this guide. The full, reviewed answers live on the
            FAQ page.
          </p>
        </div>

        {/* Layout Grid: FAQ Accordions + Defensive Banner (Left) + Image (Right) */}
        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Accordions & Defensive Support Banner */}
          <div className="space-y-4 lg:col-span-7">
            {quickFAQData.map((faq, index) => {
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

            {/* Defensive State Support Status Banner */}
            <div className="flex items-start gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
              <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full border border-[#94A3B8] bg-transparent" />
              <div className="text-[13px] leading-[1.5] text-[#475569] sm:text-[14px]">
                <strong className="font-bold text-[#0E1646]">
                  Contact support is not active yet.
                </strong>{" "}
                It appears only once a staffed channel and real ticketing are in
                place.
              </div>
            </div>
          </div>

          {/* Right Column: Edge-to-Edge Container Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#E2E8F0] shadow-xl sm:aspect-[16/11]">
              <Image
                src="/help/10.png"
                alt="Common questions team session"
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
