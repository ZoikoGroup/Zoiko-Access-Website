"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What counts as news?",
    answer:
      "Dated, reviewed updates on platform development, availability labels, accessibility progress, and healthcare navigation explainers—never marketing claims.",
  },
  {
    question: "Does an article mean a service is available where I live?",
    answer:
      "No. An article explains how a feature or boundary works conceptually or in a scoped pilot; local availability always depends on regional verification.",
  },
  {
    question: "How are corrections handled?",
    answer:
      "Corrections and updates are logged transparently in each article's revision timeline with the revision ID, date, what changed, and the accountable editor.",
  },
  {
    question: "Why do articles show a scope?",
    answer:
      "Because healthcare rules and supported services vary across jurisdictions. Showing the scope clarifies which region or program an article covers.",
  },
  {
    question: "Can I subscribe to updates?",
    answer:
      "Email subscriptions are not available yet. A subscription option opens only once verified consent workflows, delivery reliability, and retention rules are live.",
  },
];

export const NewsInsightsFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: FAQ */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#6366f1]" />
              <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-7">
              About news and insights
            </h2>

            <div className="space-y-2.5">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 hover:bg-slate-50/60 transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-xs sm:text-sm text-[#0f172a]">
                        {faq.question}
                      </span>
                      <span className="text-[#6366f1] font-bold text-base shrink-0 select-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                        <p className="pt-3">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Team Sticky Notes Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <Image
                src="/resources-news-and-insights/rnai15.jpg"
                alt="Editorial team planning articles with sticky notes"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
