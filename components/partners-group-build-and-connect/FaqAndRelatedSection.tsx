"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
}

const developerFaqs: FaqItem[] = [
  {
    question: "Are these live API endpoints?",
    answer:
      "No. These pages describe standards-oriented concepts, contract boundaries and readiness requirements. Live endpoints require formal authorization and market-specific release.",
  },
  {
    question: "Can I get developer keys or sandbox access?",
    answer:
      "No. Developer credentials and sandbox environments remain gated until partner intake opens and audited access policies are published.",
  },
  {
    question: 'Does "delivered" mean a clinician has seen it?',
    answer:
      "No. Transport delivery and acknowledgment only confirm technical receipt by the receiving system—never clinical acceptance, review, or action.",
  },
  {
    question: "Which standards are supported?",
    answer:
      "Specific profiles and versions are finalized per approved partner contract and regional governance requirements rather than assumed globally.",
  },
  {
    question: "What happens when delivery fails?",
    answer:
      "Events follow idempotent retries, move to a guarded dead-letter state rather than being silently dropped, and require authorized, logged replay.",
  },
  {
    question: "Can I send test data with real patient details?",
    answer:
      "Never. Only synthetic, non-sensitive test payloads may be used in validation environments; PHI is strictly prohibited outside authorized production scopes.",
  },
];

const relatedLinks = [
  {
    eyebrow: "BUILD & CONNECT",
    title: "API overview",
    href: "/partners-developer-documentation",
  },
  {
    eyebrow: "BUILD & CONNECT",
    title: "SDKs & events",
    href: "/partners-sdks-webhooks-events",
  },
  {
    eyebrow: "BUILD & CONNECT",
    title: "Integration security",
    href: "/partners-integration-security",
  },
  {
    eyebrow: "PARTNERS",
    title: "Partner ecosystem",
    href: "/partners-become-a-partner",
  },
];

export const FaqAndRelatedSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#fbfaff] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: 13 / FAQ */}
          <div className="lg:col-span-6">
            <span className="block text-[#6366f1] text-xs font-semibold tracking-wider uppercase mb-2">
              13 / FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-6">
              Developer questions
            </h2>

            <div className="space-y-3">
              {developerFaqs.map((faq, idx) => {
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

          {/* Right Column: 14 / RELATED */}
          <div className="lg:col-span-6">
            <span className="block text-[#6366f1] text-xs font-semibold tracking-wider uppercase mb-2">
              14 / RELATED
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-6">
              Related information
            </h2>

            <div className="space-y-3 mb-4">
              {relatedLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="bg-white rounded-xl border border-slate-200/80 px-5 py-3.5 shadow-xs hover:shadow-md transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="block text-[10px] font-bold tracking-wider uppercase text-[#6366f1] mb-0.5">
                      {item.eyebrow}
                    </span>
                    <span className="block font-bold text-sm text-[#0f172a] group-hover:text-[#4f46e5] transition-colors">
                      {item.title}
                    </span>
                  </div>
                  <span
                    className="text-slate-400 group-hover:text-[#6366f1] group-hover:translate-x-0.5 transition-all text-sm font-semibold"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* Bottom Disclaimer Bar */}
            <div className="bg-white rounded-xl border border-slate-200/80 border-l-4 border-l-[#6366f1] px-5 py-3.5 shadow-xs flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-[#f3f0ff] text-[#6366f1] text-[10px] font-bold flex items-center justify-center shrink-0">
                i
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Not for emergencies. Delivery of information is not clinical review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
