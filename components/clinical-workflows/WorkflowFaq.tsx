"use client";

import React, { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer?: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What are clinical workflows on Zoiko Access?",
    answer:
      "Proposed views of tasks, result handoffs and secure messages — each with its own source and status.",
  },
  {
    id: 2,
    question: 'Does "result received" mean it was reviewed?',
    answer:
      "No. Receipt indicates arrival from the source system, while review requires explicit clinical action.",
  },
  {
    id: 3,
    question: "Does opening a message count as acknowledgment?",
    answer:
      "No. Opening or viewing a message does not constitute formal acknowledgment or agreement.",
  },
  {
    id: 4,
    question: "Does Zoiko Access interpret results?",
    answer:
      "No. All result interpretation and clinical evaluation are strictly performed by qualified professionals.",
  },
  {
    id: 5,
    question: "Who can see a worklist?",
    answer:
      "Access to worklists is restricted and governed by organizational permissions, roles, and security policies.",
  },
  {
    id: 6,
    question: "Is this available in my organization?",
    answer:
      "Availability depends on your local integration, institutional agreements, and regional deployment status.",
  },
];

export default function WorkflowFaq() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#FFFFFF] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Subtitle / Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#635BFF]"></span>
          <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
            QUESTIONS, ANSWERED
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-12 leading-[1.15]">
          Straight answers about clinical workflows.
        </h1>

        {/* Accordion / FAQ List */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-[#F9F8FF] border-[#635BFF] shadow-[0_4px_20px_rgba(99,91,255,0.08)]"
                    : "bg-white border-[#E6EBF1] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#635BFF]/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-[#0A2540] text-base md:text-lg">
                    <a
                      href="#"
                      className="hover:underline"
                      onClick={(e) => e.preventDefault()}
                    >
                      {item.question}
                    </a>
                  </span>
                  <span className="text-xl font-semibold shrink-0 text-[#635BFF]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && item.answer && (
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-sm md:text-base text-[#425466] leading-relaxed border-t border-[#E6EBF1]/60 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
