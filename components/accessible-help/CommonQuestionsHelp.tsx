"use client";

import React, { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer?: string;
}

const helpFaqs: FaqItem[] = [
  {
    id: 1,
    question: "Can I talk to a person?",
    answer:
      "Where a staffed support team is approved for your location. Otherwise, use the Help Center.",
  },
  {
    id: 2,
    question: "Can support give medical advice?",
    answer:
      "No. Support staff provide technical assistance for the platform only and cannot offer medical advice or clinical decisions.",
  },
  {
    id: 3,
    question: "How do I report an accessibility problem?",
    answer:
      "Use the feedback link in the footer or email our accessibility team directly to report barriers or request assistance.",
  },
  {
    id: 4,
    question: "Can I get information in another format?",
    answer:
      "Yes. Alternative formats including large print, plain text, and audio-compatible resources are available upon request.",
  },
  {
    id: 5,
    question: "What if I need urgent help?",
    answer:
      "This platform is not an emergency service. Please contact your local emergency services or healthcare provider immediately.",
  },
];

export default function CommonQuestionsHelp() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Content & Accordion */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Subtitle / Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#2F4DC0]"></span>
            <span className="text-xs font-bold tracking-wider text-[#2F4DC0] uppercase">
              QUESTIONS, ANSWERED
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-8 leading-[1.15]">
            Common questions about help.
          </h1>

          {/* Accordion List */}
          <div className="space-y-4">
            {helpFaqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? "bg-white border-[#E6EBF1] shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
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
                    <span className="text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9CFFB] text-[#2F4DC0] hover:bg-[#E0E7FF] transition-colors shrink-0">
                      {isOpen ? "Hide" : "Show"}
                    </span>
                  </button>

                  {isOpen && item.answer && (
                    <div className="px-5 pb-6 md:px-6 md:pb-6 text-sm md:text-base text-[#425466] leading-relaxed pt-1">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column Image */}
        <div className="lg:col-span-5 w-full h-full flex justify-center items-center">
          <div className="w-full max-w-lg lg:max-w-none h-[500px] lg:h-[620px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-[#02125F]">
            <img
              src="/acc/6.png"
              alt="People raising hands in a group setting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
