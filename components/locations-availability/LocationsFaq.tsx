"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqData = [
  {
    question: "Does selecting my care location create an account?",
    answer:
      "No. It changes the public information displayed. Any account flow is separate and appears only when authorized.",
  },
  {
    question: "Are appointments available wherever a location is listed?",
    answer:
      "No. A listed location may only have informational content. Appointment requests appear only where they are confirmed to be enabled, and a request is not a confirmed appointment.",
  },
  {
    question: "Does selecting a location change where my health data is stored?",
    answer:
      "No. Choosing a care location only changes the public information shown on this website. It does not move medical records or change data residency.",
  },
  {
    question: "Can I use Zoiko Access for an emergency?",
    answer:
      "No. Do not treat this website as an urgent-care or emergency service. Use the emergency services appropriate to your location.",
  },
];

export default function LocationsFaq() {
  // The first answer is open by default, as in the design.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#F6F3FF] via-[#E6DFFE] to-[#D3C8FD] py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,560fr)_minmax(0,628fr)] lg:gap-x-[112px] lg:px-[70px]">
        <SectionHeading
          badge="Questions, answered"
          title={
            <>
              Know before you take the
              <br className="hidden sm:block" /> next step
            </>
          }
          description="Plain-language guidance about locations and availability."
        />

        <div className="flex flex-col gap-2">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-xl border border-[#E6E3F5] bg-white px-5"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex min-h-[60px] w-full items-center justify-between gap-6 py-3 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] font-semibold leading-6 text-[#211A5A] [font-family:var(--font-sora)]">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-[#4F3FC8]">
                    {isOpen ? (
                      <Minus className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Plus className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-[15px] leading-[26px] text-[#615D7E]">
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
