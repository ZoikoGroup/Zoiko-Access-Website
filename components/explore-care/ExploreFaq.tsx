"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What is Zoiko Access?",
    answer:
      "Zoiko Access is a digital healthcare coordination platform designed to simplify service discovery, navigation, and administrative handoffs across independent care providers and organizations.",
  },
  {
    question: "Can I find care in my location?",
    answer:
      "Care availability varies depending on your chosen location, local regulatory permissions, and participating regional healthcare partners.",
  },
  {
    question: "Can Zoiko Access book appointments?",
    answer:
      "Appointment requests and scheduling capabilities are available where participating local providers and regional releases support authorized workflows.",
  },
  {
    question: "Does Zoiko Access provide medical advice?",
    answer:
      "No. Zoiko Access does not provide medical diagnoses, clinical advice, or triage. All clinical assessments are handled directly by qualified healthcare professionals.",
  },
  {
    question: "How do referrals work?",
    answer:
      "A locally permitted referral routes information or a request to another care organization. Receipt does not establish acceptance of clinical responsibility.",
  },
  {
    question: "How is my information handled?",
    answer:
      "Health information is safeguarded through limited role-based access, explicit permissions, region-specific data environments, and strict compliance with local privacy regulations.",
  },
];

export default function ExploreFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Left Column - Header */}
          <div className="flex flex-col">
            <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
              <span
                className="block h-2 w-2 rounded-full bg-[#7657E8]"
                aria-hidden="true"
              />
              Questions, answered
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
              Before you explore <br />
              your next step.
            </h2>
          </div>

          {/* Right Column - Accordion List */}
          <div className="flex flex-col divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-6 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-6 text-[18px] font-bold text-[#23327A] sm:text-[20px]">
                      {item.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#4267D5]">
                      {isOpen ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pr-12">
                      <p className="text-[15px] leading-[1.8] text-[#4B5563] sm:text-[16px]">
                        {item.answer}
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
}
