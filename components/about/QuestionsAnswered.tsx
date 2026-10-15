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
    question: "Who is Zoiko Access for?",
    answer:
      "Zoiko Access supports patients, caregivers, clinicians, care networks, diagnostic providers, pharmacies, insurers, and organizational partners across the healthcare ecosystem.",
  },
  {
    question: "Is Zoiko Access a healthcare provider?",
    answer:
      "No. Zoiko Access provides coordination and digital infrastructure. Independent healthcare providers, clinics, and professionals remain responsible for clinical care and medical decisions.",
  },
  {
    question: "Can I book an appointment on Zoiko Access?",
    answer:
      "Appointment discovery and request capabilities are available where participating local providers and regional releases support authorized scheduling workflows.",
  },
  {
    question: "Can Zoiko Access give me a diagnosis or medical advice?",
    answer:
      "No. Zoiko Access does not provide medical diagnoses, clinical advice, or triage. All clinical assessments are handled directly by qualified healthcare professionals.",
  },
  {
    question: "Does Zoiko Access keep one global medical record for everyone?",
    answer:
      "No. Zoiko Access works alongside existing, independent healthcare systems. Source records remain with their respective providers, laboratories, and health institutions.",
  },
  {
    question: "Which countries can use Zoiko Access?",
    answer:
      "Features and availability depend on location, participating regional partners, local regulatory approvals, and specific market releases.",
  },
  {
    question: "How do you protect health information?",
    answer:
      "Health information is safeguarded through limited role-based access, explicit permissions, region-specific data environments, and strict compliance with local privacy regulations.",
  },
  {
    question: "How can a healthcare organization work with Zoiko Access?",
    answer:
      "Organizations can partner with Zoiko Access through defined integration standards, governed APIs, and verified administrative workflow connections.",
  },
  {
    question: "What should I do in a medical emergency?",
    answer:
      "Zoiko Access is not an emergency response service. If you or someone else needs urgent medical care, please contact your local emergency services immediately.",
  },
];

export default function QuestionsAnswered() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
            <span
              className="block h-2 w-2 rounded-full bg-[#7657E8]"
              aria-hidden="true"
            />
            Questions, answered
          </p>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
            Understand the purpose. <br />
            Know the boundaries.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6">
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
    </section>
  );
}
