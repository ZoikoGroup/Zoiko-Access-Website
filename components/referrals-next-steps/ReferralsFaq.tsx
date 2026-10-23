"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqData = [
  {
    question: "What do sent, delivered, acknowledged, accepted and reviewed mean?",
    answer:
      "Sent means transferred from the referring organization. Delivered means it reached a technical destination. Acknowledged means the destination recognized the request. Accepted means the responsible organization accepted it. Clinically reviewed means a qualified professional recorded a review.",
  },
  {
    question: "Does “delivered” mean a clinician has seen my referral?",
    answer:
      "No. Delivered only means the referral reached a technical destination. A clinical review is shown only when a qualified source records one.",
  },
  {
    question: "Does an accepted referral mean I have an appointment?",
    answer:
      "No. Acceptance means the responsible organization agreed to take the referral. An appointment is confirmed separately, by the organization that provides it.",
  },
  {
    question: "Why can’t I see all of my referrals?",
    answer:
      "Only referrals from participating organizations, for supported services and authorized accounts, appear here. Contact the responsible care organization if you expect one that isn’t shown.",
  },
  {
    question: "What if I need urgent care?",
    answer: "Do not use this page for emergencies. Use the emergency services appropriate to your location.",
  },
];

export default function ReferralsFaq() {
  // The first answer is open by default, as in the design.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="questions" className="w-full scroll-mt-24 bg-white py-[76px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Questions, answered"
          title={
            <>
              Know what each status
              <br className="hidden sm:block" /> means
            </>
          }
        />

        <div className="mt-4 border-t border-[#E4E0F7]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-[#E4E0F7]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[60px] w-full items-center justify-between gap-6 py-5 text-left focus:outline-none"
                >
                  <span className="text-[16px] font-medium text-[#1D1A5A] [font-family:var(--font-poppins)]">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-[#5B3FD1]">
                    {isOpen ? (
                      <Minus className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                    ) : (
                      <Plus className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="max-w-[660px] pb-6 text-[16px] leading-[26px] text-[#5B5880]">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
