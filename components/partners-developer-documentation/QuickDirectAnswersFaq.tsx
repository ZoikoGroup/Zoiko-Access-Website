"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  directAnswer?: string;
  answer: string;
}

const leftFaqs: FaqItem[] = [
  {
    id: "live-api",
    question: "Is there a live API?",
    directAnswer: "No. Only conceptual guidance is published today.",
    answer:
      "All documentation on this site is currently architectural and educational. No production API endpoints, keys, or live patient data routing exist for anonymous visitors.",
  },
  {
    id: "sandbox",
    question: "Is there a sandbox?",
    directAnswer: "No live sandbox is operational today.",
    answer:
      "Conceptual sandbox guides illustrate how testing with synthetic data will function once a governed developer environment is released to authorized partners.",
  },
  {
    id: "clinical-decisions",
    question: "Who is responsible for clinical decisions?",
    directAnswer: "Licensed clinicians and healthcare organizations.",
    answer:
      "Zoiko Access is a coordination layer and never makes clinical decisions, delivers medical diagnoses, or supersedes the professional judgment of qualified care teams.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    id: "access-docs",
    question: "Can I get access to documentation?",
    directAnswer: "Public guides are open; controlled specs require authorization.",
    answer:
      "All general conceptual architecture and security principles are publicly available on this site. Detailed technical endpoints and SDKs are shared exclusively with authorized partners.",
  },
  {
    id: "patient-data",
    question: "Does integrating give access to patient data?",
    directAnswer: "Never by default or without strict authorization.",
    answer:
      "Integration requires explicit organizational agreements, patient consent models, regional governance approvals, and purpose-bound access with minimal necessary disclosure.",
  },
  {
    id: "security-handled",
    question: "How is security handled?",
    directAnswer: "Through defense-in-depth, least privilege, and cryptographic audit.",
    answer:
      "Every connection enforces mTLS, scoped credentials, role-based delegation, separate testing environments, and immutable audit logs.",
  },
];

export const QuickDirectAnswersFaq: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(["live-api"]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full bg-[#fafbfc] py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Quick, direct answers.
          </h2>
        </div>

        {/* 2-Column FAQ Accordion Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
          {/* Left Column */}
          <div className="space-y-4">
            {leftFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left group gap-4"
                  >
                    <span className="font-bold text-base text-slate-900 group-hover:text-[#6366f1] transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-slate-400 group-hover:text-[#6366f1] shrink-0 transition-colors">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-slate-100 animate-fadeIn">
                      {faq.directAnswer && (
                        <div className="mb-2">
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-[#6366f1] mb-1">
                            DIRECT ANSWER
                          </span>
                          <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                            {faq.directAnswer}
                          </p>
                        </div>
                      )}
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left group gap-4"
                  >
                    <span className="font-bold text-base text-slate-900 group-hover:text-[#6366f1] transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-slate-400 group-hover:text-[#6366f1] shrink-0 transition-colors">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-slate-100 animate-fadeIn">
                      {faq.directAnswer && (
                        <div className="mb-2">
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-[#6366f1] mb-1">
                            DIRECT ANSWER
                          </span>
                          <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                            {faq.directAnswer}
                          </p>
                        </div>
                      )}
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
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
