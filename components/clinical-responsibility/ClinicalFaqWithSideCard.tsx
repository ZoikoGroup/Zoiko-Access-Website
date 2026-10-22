"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "Does Zoiko Access make clinical decisions?",
    answer:
      "No. Zoiko Access facilitates administrative and technical workflow coordination between authorized systems. All clinical decisions, diagnostic determinations, and care plans remain strictly with licensed medical professionals.",
  },
  {
    question: "Does delivered mean reviewed?",
    answer:
      "No. A status of 'delivered' confirms successful electronic transmission to a receiving endpoint. It does not imply that qualified medical personnel have opened, reviewed, or accepted the information.",
  },
  {
    question: "Does an accepted referral mean an appointment is booked?",
    answer:
      "Not automatically. Acceptance confirms that the receiving care organization has taken responsibility for processing the referral request. Appointment scheduling follows according to the provider's local intake procedures.",
  },
  {
    question: "Where do I escalate urgent care needs?",
    answer:
      "Zoiko Access is not an emergency response system. Urgent clinical concerns must be communicated directly via established primary provider contacts or local emergency channels.",
  },
];

export default function ClinicalFaqWithSideCard() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F1EEFE] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - FAQ Accordion List */}
          <div className="lg:col-span-7">
            {/* Header */}
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#7C3AED]">
              <span className="h-0.5 w-6 bg-[#7C3AED]" aria-hidden="true" />
              DIRECT ANSWERS
            </div>
            <h2 className="mt-3 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
              Frequently asked questions.
            </h2>

            {/* Accordions */}
            <div className="mt-10 flex flex-col space-y-4">
              {faqData.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-[#CBD5E1]"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#1E1B4B]" />
                        <span className="text-[16px] font-bold text-[#1E1B4B] sm:text-[18px]">
                          {faq.question}
                        </span>
                      </div>
                      <div className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F5F3FF] text-[#7C3AED] transition-transform duration-200">
                        {isOpen ? (
                          <Minus className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <Plus className="h-4 w-4" aria-hidden="true" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-[14px] leading-[1.7] text-[#475569] sm:text-[15px]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Side Information Card */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] sm:p-8">
              {/* Image Section */}
              <div className="relative h-[240px] w-full overflow-hidden rounded-2xl sm:h-[280px]">
                <Image
                  src="/cli/20.png"
                  alt="Doctor wearing lab coat smiling"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Information Content */}
              <div className="mt-6">
                <h3 className="text-[20px] font-bold text-[#1E1B4B]">
                  About this information
                </h3>

                <ul className="mt-4 flex flex-col space-y-3 text-[14px] leading-[1.6] text-[#475569] sm:text-[15px]">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475569]" />
                    <span>
                      <strong className="text-[#1E1B4B]">
                        Responsible owner:
                      </strong>{" "}
                      Product and Clinical Safety editorial team
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475569]" />
                    <span>
                      <strong className="text-[#1E1B4B]">
                        Company-level statement:
                      </strong>{" "}
                      linked when published.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
