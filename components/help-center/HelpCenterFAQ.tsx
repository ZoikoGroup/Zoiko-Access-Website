"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

interface HelpFAQItem {
  question: string;
  answer: string;
}

const helpFAQData: HelpFAQItem[] = [
  {
    question: "Is the Help Center medical advice?",
    answer:
      "No. All articles provide public educational guidance about system mechanics, permissions, and workflow structures only. They do not constitute medical advice or clinical triage.",
  },
  {
    question: "Do I need to sign in to read help?",
    answer:
      "No. Access to public educational content is open to everyone (P0 state) and does not require authentication or user accounts.",
  },
  {
    question: "Can I contact support from here?",
    answer:
      "Direct support channels appear only once a staffed, verified team is in place for your specific market. Unstaffed channels are not presented as active options.",
  },
  {
    question: "Why can’t I find a feature mentioned elsewhere?",
    answer:
      "Features are gated by readiness state (P0–P2) and regional compliance. If a feature is not verified for your market, it will not be shown in the Help Center.",
  },
  {
    question: "Is my search saved?",
    answer:
      "No. Browsing and searching the Help Center is entirely anonymous and un-tracked. We do not store personal search histories or medical context.",
  },
  {
    question: "What if I have an emergency?",
    answer:
      "Zoiko Access is not an emergency response service. If you or someone else is in immediate danger or needs urgent care, please contact your local emergency services directly.",
  },
];

export default function HelpCenterFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F6F9FC] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
              — FAQ
            </span>
          </div>

          <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Questions about the{" "}
            <span className="text-[#7C3AED]">Help center</span>
          </h2>
        </div>

        {/* Layout Grid: FAQ Accordion (Left) + Image Container (Right) */}
        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Accordions */}
          <div className="space-y-4 lg:col-span-7">
            {helpFAQData.map((faq, index) => {
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

          {/* Right Column: High-Impact Image Container using /help/17.png */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#E2E8F0] shadow-xl sm:aspect-[11/11]">
              <Image
                src="/help/23.png"
                alt="Help Center team collaboration"
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
