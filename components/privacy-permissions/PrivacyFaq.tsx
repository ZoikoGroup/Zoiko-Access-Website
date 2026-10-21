"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function PrivacyFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "Does being a caregiver let me see someone's health information?",
      answer:
        "No. A caregiver relationship does not automatically provide access. Verified representation may be required, and permitted actions may be limited or time-bound.",
    },
    {
      question: "Does choosing my care location mean I have consented?",
      answer:
        "No. Choosing a care location only helps display localized availability and applicable rules. It never reveals your identity or implies consent.",
    },
    {
      question: "Does Zoiko Access hold my medical records?",
      answer:
        "No. Medical records remain with their respective healthcare institutions and providers. Zoiko Access facilitates navigation and does not hold a universal medical record.",
    },
    {
      question: "Can I ask for my information to be deleted?",
      answer:
        "You can request deletion subject to legal limits, regulatory retention mandates, and the verification processes of the responsible organization.",
    },
    {
      question: 'Does "request sent" mean it was approved?',
      answer:
        'No. "Request sent" confirms receipt for review. Every request must be verified and actioned by the responsible organization before any outcome is decided.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f4f1ff] py-16 lg:py-24 border-t border-[#eee9ff]">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
              <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#6d5ae6]" />
              <span>QUESTIONS, ANSWERED</span>
            </div>

            <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[32px] sm:text-[38px] lg:text-[42px] [font-family:var(--font-poppins)]">
              Know before you decide
            </h2>

            <p className="max-w-[440px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
              Direct answers, with no legal opinion and no medical advice.
            </p>
          </div>

          {/* Right Column (Accordion List) */}
          <div className="flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border-b border-[#e5defb] py-5 first:pt-0 last:border-b-0"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-start justify-between gap-4 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] sm:text-[16px] font-semibold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[#6d5ae6]">
                      {isOpen ? (
                        <Minus className="h-4 w-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="h-4 w-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8">
                      <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-slate-600">
                        {faq.answer}
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
