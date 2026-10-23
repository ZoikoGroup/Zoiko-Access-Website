"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What is Zoiko Access for clinicians?",
    answer:
      "It is a proposed digital coordination layer designed to make permitted referrals, handoffs and follow-up steps easier to understand across participating organizations. Local availability and integrations must be confirmed.",
  },
  {
    question: "Does it replace a clinical record system?",
    answer:
      "No. Zoiko Access is not an electronic health record (EHR) and does not replace primary clinical documentation. Each participating organization remains the authoritative record holder for its patients.",
  },
  {
    question: "Does a referral sent mean a referral was accepted?",
    answer:
      "No. A 'Sent' or 'Delivered' status only confirms technical transmission. A referral is only accepted when an authorized clinician or team at the receiving organization explicitly accepts responsibility.",
  },
  {
    question: "Can Zoiko Access review or interpret test results?",
    answer:
      "No. Zoiko Access never performs diagnostic review, automated triage, or clinical interpretation. All results must be evaluated and acted upon by licensed healthcare professionals.",
  },
  {
    question: "Can a caregiver or another clinician view patient details?",
    answer:
      "Only where valid patient authorization, professional role scope, and jurisdictional permissions exist. Access is denied by default and restricted to confirmed care team members.",
  },
  {
    question: "Is the service available in my country?",
    answer:
      "Availability depends on local regulatory compliance, active provider integrations, and regional partner rollouts. Please consult the care-location selector or your institution's administrator.",
  },
];

export default function CliniciansFaq() {
  // First item open by default to match screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-semibold text-[#6d5ae6]">
          <span className="h-0.5 w-3.5 bg-[#6d5ae6]" />
          <span>Questions, answered</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-10 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          Straight answers for clinicians
        </h2>

        {/* Accordion Stack */}
        <div className="space-y-3.5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? "border-[#c7d2fe] bg-[#fafbff] shadow-xs"
                    : "border-slate-200/90 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] sm:text-[16px] font-bold text-slate-900 [font-family:var(--font-poppins)] pr-4">
                    {item.question}
                  </span>
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-400">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-[#3b82f6]" />
                    ) : (
                      <Plus className="h-4 w-4 text-[#3b82f6]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-0 sm:px-6">
                    <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-slate-600 max-w-[960px]">
                      {item.answer}
                    </p>
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
