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
    question: "What is Zoiko Access for clinicians?",
    answer:
      "It is a proposed coordination layer designed to help qualified clinicians understand referrals, handoffs and follow-up across participating organizations. Local availability and integrations must be confirmed.",
  },
  {
    id: 2,
    question: "Does it replace a clinical record system?",
    answer:
      "No. Zoiko Access is a coordination layer and does not replace primary clinical record systems (EHRs/EMRs).",
  },
  {
    id: 3,
    question: "Does a referral sent mean it was accepted?",
    answer:
      "No. A sent referral indicates transmission only. Acceptance requires explicit acknowledgment and review by the receiving team.",
  },
  {
    id: 4,
    question: "Can Zoiko Access review or interpret test results?",
    answer:
      "No. Clinical decisions, interpretations, and reviews remain strictly with licensed health professionals.",
  },
  {
    id: 5,
    question: "Can a caregiver or another clinician view patient details?",
    answer:
      "Access is strictly governed by local regulations, patient consent, and role-based permissions.",
  },
  {
    id: 6,
    question: "Is the service available in my country?",
    answer:
      "Availability varies by country, legal framework, and partner healthcare provider network.",
  },
];

export default function CliniciansFaq() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#FFFFFF] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column Content */}
        <div className="flex flex-col justify-center">
          {/* Subtitle / Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#635BFF]"></span>
            <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
              QUESTIONS, ANSWERED
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-8 leading-[1.15]">
            Straight answers for clinicians.
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
                    <span
                      className={`text-xl font-semibold shrink-0 transition-transform ${
                        isOpen ? "text-[#635BFF]" : "text-[#635BFF]"
                      }`}
                    >
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

        {/* Right Column Image */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full max-w-lg lg:max-w-none h-[500px] lg:h-[620px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-[#02125F]">
            <img
              src="/cor/15.png"
              alt="Question mark speech bubbles with notebook and pen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
