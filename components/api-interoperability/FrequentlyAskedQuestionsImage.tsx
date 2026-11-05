"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer?: string;
}

const faqItems: FAQItem[] = [
  {
    id: "api-live",
    question: "Are Zoiko Access APIs live?",
    answer:
      "No API has an approved live status today. Status will be shown only from the approved registry.",
  },
  {
    id: "fhir-supported",
    question: "Is FHIR supported?",
    answer:
      "Standard integration profiles and FHIR support are evaluated per technical registry review. No pre-certified capability is assumed.",
  },
  {
    id: "who-owns",
    question: "Who owns the records?",
    answer:
      "Records remain under the governance and legal ownership of their respective source authorities and authorized custodians.",
  },
  {
    id: "receipt-reviewed",
    question: "Does receipt mean someone reviewed it?",
    answer:
      "No. Receipt proves automated transport only; formal human review and acceptance are distinct subsequent steps.",
  },
  {
    id: "access-approved",
    question: "How is access approved?",
    answer:
      "Access is granted strictly through staged governance reviews, verified purpose definition, and explicit policy decisions.",
  },
];

export default function FrequentlyAskedQuestionsImage() {
  const [openId, setOpenId] = useState<string>("api-live");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="rounded-md bg-[#F1F0FE] px-2.5 py-1 font-mono text-[12px] font-semibold text-[#7C3AED]">
              // faq
            </span>
          </div>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Frequently asked questions.
          </h2>
        </div>

        {/* 2-Column Layout: Left Accordion List, Right Image */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Accordion Items */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "border-[#7C3AED] bg-white shadow-[0_4px_20px_rgba(124,58,237,0.08)]"
                      : "border-[#E2E8F0] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:border-[#CBD5E1]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="flex w-full items-center justify-between p-5 text-left sm:p-6 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#7C3AED]">
                        {isOpen ? (
                          <ChevronDown className="h-5 w-5 stroke-[2.5]" />
                        ) : (
                          <ChevronRight className="h-5 w-5 stroke-[2.5]" />
                        )}
                      </span>
                      <span className="text-[16px] font-bold text-[#0E1646] sm:text-[17px]">
                        {item.question}
                      </span>
                    </div>
                  </button>

                  {isOpen && item.answer && (
                    <div className="px-5 pb-6 pt-0 sm:px-6 sm:pb-6">
                      <div className="border-t border-[#F1F5F9] pt-3">
                        <p className="text-[14px] leading-[1.6] text-[#475569] sm:text-[15px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Image (/api/5.png) */}
          <div className="relative min-h-[460px] overflow-hidden rounded-3xl shadow-xl lg:col-span-5">
            <Image
              src="/api/5.png"
              alt="Crumpled paper with a question mark illustrating FAQ"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
