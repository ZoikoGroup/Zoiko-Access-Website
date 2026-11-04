"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqsData: FAQItem[] = [
  {
    id: "Q01",
    question: "What is a Zoiko Access technology partner?",
    answer:
      "A potential technical collaborator whose services may support a defined, separately reviewed integration or information workflow. No status is assumed.",
  },
  {
    id: "Q02",
    question: "Does Zoiko Access have active technology integrations?",
    answer:
      "Integrations are established only following rigorous technical, legal, and security review. Any current status requires documented evidence and a named owner.",
  },
  {
    id: "Q03",
    question: "Can partners access health records?",
    answer:
      "No partner category or technology agreement alone confers direct access to live health records. Access requires lawful purpose, authorization, and strict role permissions.",
  },
  {
    id: "Q04",
    question: "Are partner products automatically certified?",
    answer:
      "No. All products, platforms, and services must go through a staged review process including security controls, testing, and contract verification.",
  },
  {
    id: "Q05",
    question: "What systems may be evaluated?",
    answer:
      "Technology vendors, core platform infrastructure, and supporting integrators that meet preliminary criteria may be evaluated under governed scopes.",
  },
  {
    id: "Q06",
    question: "How does an organization inquire?",
    answer:
      "Inquiries open only when specific intake forms, terms, and routing mechanisms are fully operational and staffed for review.",
  },
  {
    id: "Q07",
    question: "How are information handoffs governed?",
    answer:
      "Every handoff is treated as a distinct event—separating transmission, receipt, review, and acceptance with clear ownership at each step.",
  },
];

export default function AnswerFirstFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Layout */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
                Questions, answered
              </span>
            </div>
            <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
              Answer-first FAQs.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
              Straight answers about partnership, data and integration.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 flex flex-col gap-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="rounded-3xl border border-[#E2E8F0] bg-white transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left sm:p-8 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="rounded-lg bg-[#F1F5F9] px-2.5 py-1 font-mono text-[12px] font-semibold text-[#7C3AED]">
                      {faq.id}
                    </span>
                    <span className="text-[16px] font-bold text-[#1E1B4B] sm:text-[18px]">
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8FAFC] text-[#7C3AED] transition-colors">
                    {isOpen ? (
                      <Minus className="h-4 w-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="h-4 w-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8">
                    <div className="border-t border-[#F1F5F9] pt-4">
                      <p className="text-[15px] leading-[1.6] text-[#475569]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
