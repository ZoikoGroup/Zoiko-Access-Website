"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqData = [
  {
    question: "Where can I create an account?",
    answer:
      "Only where local enrollment has been approved. If your selected care location is not supported, this page explains how Zoiko Access is designed to work instead.",
  },
  {
    question: "Is an account the same as my health records?",
    answer:
      "No. Healthcare records stay with the organizations responsible for them and are not connected just because an account exists.",
  },
  {
    question: "Who is eligible?",
    answer:
      "Eligibility is decided by the service for each location, based on its approved rules. This page does not decide eligibility.",
  },
  {
    question: "Can I set up an account for a family member?",
    answer:
      "Not through self-enrollment. Acting for someone else needs separately verified authority. Read the caregiver guidance for how delegated access works.",
  },
  {
    question: "I think I already have an account. What should I do?",
    answer:
      "Use sign-in or account recovery. For your security, we never confirm whether an account exists.",
  },
  {
    question: "How is my information protected?",
    answer:
      "Only the minimum information needed is requested, sensitive fields are cleared when a session ends, and credentials are never shown in messages.",
  },
  {
    question: "What if I need urgent medical help?",
    answer:
      "Do not use this page for emergencies. Contact the emergency services appropriate to your location.",
  },
];

export default function AccountFaq() {
  // The first answer is open by default, as in the design.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-[84px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Questions, answered"
          title={
            <>
              Know what you can do. Understand
              <br className="hidden sm:block" /> what it means.
            </>
          }
        />

        <div className="mt-10 flex flex-col gap-3.5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`rounded-xl border bg-white px-[22px] ${
                  isOpen ? "border-[#7C3AED]" : "border-[#DCD6F5]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[56px] w-full items-center justify-between gap-6 py-4 text-left focus:outline-none"
                >
                  <span className="text-[16px] font-semibold text-[#0E1E6E]">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-[#7C3AED]">
                    {isOpen ? (
                      <Minus className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
                    ) : (
                      <Plus className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="max-w-[770px] pb-5 text-[15px] leading-[25px] text-[#2C3352]">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
