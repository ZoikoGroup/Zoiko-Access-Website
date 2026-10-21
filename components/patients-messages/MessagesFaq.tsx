"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqData = [
  {
    question: "What is Zoiko Access messaging?",
    answer:
      "Where available, it lets you view secure messages and notifications from participating healthcare organizations about services they support.",
  },
  {
    question: "Will I see messages from all my providers?",
    answer:
      "No. You only see messages from organizations that are connected and run a secure messaging service in your care location.",
  },
  {
    question: "Does “delivered” mean my doctor read it?",
    answer:
      "No. Delivered means the organization’s system received it. Seen, where reported, means an authorized person opened it. Neither means a clinician has reviewed it.",
  },
  {
    question: "How fast will I get a reply?",
    answer:
      "Response times are set by each organization. If no response time has been published, none is shown, so contact the organization directly if your question is time-sensitive.",
  },
  {
    question: "Can I send attachments?",
    answer:
      "Only where the organization has enabled attachments for that conversation. The message box shows whether they are allowed.",
  },
  {
    question: "What if I need urgent care?",
    answer:
      "Do not use messaging for emergencies. Contact the emergency services appropriate to your location.",
  },
];

export default function MessagesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-gradient-to-r from-[#F3F1FE] via-[#E6E0FE] to-[#D3C8FD] py-[90px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,440fr)_minmax(0,672fr)] lg:gap-x-[64px] lg:px-[132px]">
        <SectionHeading
          badge="Questions, answered"
          title={
            <>
              What messaging can
              <br className="hidden sm:block" /> do, and what it can’t.
            </>
          }
        />

        <div>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-[#6B6E8E]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[76px] w-full items-center justify-between gap-6 py-5 text-left focus:outline-none"
                >
                  <span className="text-[16px] font-medium text-[#1D2A6B] [font-family:var(--font-poppins)]">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-[#8B5CF6]">
                    {isOpen ? <Minus className="h-4 w-4" aria-hidden="true" /> : <Plus className="h-4 w-4" aria-hidden="true" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 pr-10 text-[15px] leading-[25px] text-[#4A4F6A]">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
