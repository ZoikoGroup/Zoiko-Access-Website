"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is a clinical worklist?",
    answer:
      "An organized view of work assigned to authorized team members. Each task needs an accountable owner, a permitted purpose and a status supported by evidence.",
  },
  {
    question: "Who owns a task?",
    answer:
      "An individual clinician or a designated role within the responsible care team is explicitly recorded as the owner.",
  },
  {
    question: 'Does "sent" mean accepted?',
    answer:
      "No. Delivery is technical; acceptance requires explicit human confirmation from the receiving clinician or team.",
  },
  {
    question: "Does Zoiko Access replace my EHR?",
    answer:
      "No. Zoiko Access coordinates across teams and workflows while the primary EHR remains the definitive legal system of record.",
  },
  {
    question: "Is this available where I work?",
    answer:
      "Availability depends on organizational agreements, regional deployment phases, and governed integration standards.",
  },
];

export const ClinicianFaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f8f6fd] py-16 md:py-24 border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Title */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#6d5ae6]" />
            <span className="text-[#6d5ae6] font-semibold text-xs md:text-sm uppercase tracking-wider">
              QUESTIONS, ANSWERED
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Straight answers for clinicians
          </h2>
        </div>

        {/* 2 Columns: Image & Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-purple-950/10 ring-1 ring-purple-100">
              <Image
                src="/task-worklist-experience/twe20.jpg"
                alt="Clinician in laboratory inspecting diagnostic test slides"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Accordion Questions */}
          <div className="lg:col-span-6 space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-4 px-2 flex items-center justify-between text-left group gap-4 border-b border-purple-100"
                  >
                    <span className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#6d5ae6] transition-colors">
                      {item.question}
                    </span>
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-[#6d5ae6] shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="py-3 px-2 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
