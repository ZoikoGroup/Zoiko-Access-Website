"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
}

const onboardingFaqs: FaqItem[] = [
  {
    question: "Can I apply to become a partner now?",
    answer:
      "No. Partner intake is currently closed. Reading these pages does not start an application or create an onboarding commitment.",
  },
  {
    question: "Does submitting an application mean we are approved?",
    answer:
      "No. Submission only records interest for review once intake opens; every partnership requires separate diligence and formal authorization.",
  },
  {
    question: "Is the certification framework a certificate?",
    answer:
      "No. It describes the proposed assessment domains used to evaluate readiness, not an issued accreditation or endorsement.",
  },
  {
    question: "Does a pilot give us access?",
    answer:
      "No automatic access is granted. Any controlled pilot is bounded, monitored, and authorized separately by a sponsoring institution.",
  },
  {
    question: "Where is the developer documentation?",
    answer:
      "Developer documentation stays gated until audited public artifacts, examples, and a named owner are published in the registry.",
  },
  {
    question: "What should we never send?",
    answer:
      "Never send real patient details, clinical records, production credentials, or confidential financial data.",
  },
  {
    question: "Is approval permanent?",
    answer:
      "No. Approvals are scoped per version, market, and scope, and remain subject to retesting, security reviews, revocation, and scheduled renewal.",
  },
];

const relatedItems = [
  {
    imageSrc: "/partners-group-partner-onboarding/pgpo8.jpg",
    title: "Certification framework",
    category: "Partner onboarding",
    href: "/partners-certification-framework",
  },
  {
    imageSrc: "/partners-group-partner-onboarding/pgpo9.jpg",
    title: "Partner ecosystem",
    category: "Partners & Developers",
    href: "/partners-become-a-partner",
  },
  {
    imageSrc: "/partners-group-partner-onboarding/pgpo10.jpg",
    title: "Build & connect",
    category: "Partners & Developers",
    href: "/partners-group-build-and-connect",
  },
  {
    imageSrc: "/partners-group-partner-onboarding/pgpo11.jpg",
    title: "Company trust & privacy",
    category: "Company",
    href: "/privacy-permissions",
  },
];

export const OnboardingFaqAndRelated: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: 12 · FAQ */}
          <div className="lg:col-span-7">
            <span className="inline-block bg-[#f3f0ff] text-[#6366f1] text-xs font-semibold px-3 py-1 rounded-full mb-3">
              12 · FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-6">
              Onboarding questions
            </h2>

            <div className="space-y-3">
              {onboardingFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 hover:bg-slate-50/60 transition-colors"
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

          {/* Right Column: Related information */}
          <div className="lg:col-span-5">
            <span className="inline-block bg-[#f3f0ff] text-[#6366f1] text-xs font-semibold px-3 py-1 rounded-full mb-6">
              Related information
            </span>

            <div className="space-y-3 mb-4">
              {relatedItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="bg-white rounded-xl border border-slate-200/80 p-2.5 shadow-xs hover:shadow-md transition-all flex items-center gap-3.5 group"
                >
                  <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      sizes="64px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <span className="block font-bold text-xs sm:text-sm text-[#0f172a] group-hover:text-[#6366f1] transition-colors">
                      {item.title}
                    </span>
                    <span className="block text-[11px] text-slate-500">
                      {item.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Info Notice */}
            <div className="bg-white rounded-xl border border-slate-200/80 border-l-4 border-l-[#6366f1] px-4 py-3 shadow-xs flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-full bg-[#f3f0ff] text-[#6366f1] text-[10px] font-bold flex items-center justify-center shrink-0">
                i
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Links appear only for routes in the verified route registry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
