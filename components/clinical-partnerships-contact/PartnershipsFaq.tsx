"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Who can contact the clinical partnerships team?",
    answer:
      "Qualified clinicians, healthcare delivery organizations and authorized professional representatives, where an authorized channel exists.",
  },
  {
    question: "Is this clinical support?",
    answer:
      "No. This channel is administrative and exploratory. It does not provide clinical care, patient advice, diagnosis, or medical triage.",
  },
  {
    question: "Is my inquiry an onboarding application?",
    answer:
      "No. An exploratory conversation is never an application, credentialing submission, or binding commitment.",
  },
  {
    question: "Can patients send medical information here?",
    answer:
      "No. Patients and caregivers should use verified patient navigation routes or emergency services appropriate to their area.",
  },
  {
    question: "Which markets are served?",
    answer:
      "Service regions and authorized partnerships channels are rolled out selectively based on jurisdiction, regulatory alignment, and regional operational readiness.",
  },
  {
    question: "How is data handled?",
    answer:
      "Inquiries submitted through live channels are stored in secure, compliance-ready infrastructure in accordance with published privacy standards. No patient data should be transmitted.",
  },
];

export default function PartnershipsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default like Figma

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative w-full border-b border-[#E1DBF9] bg-gradient-to-b from-[#F8F6FF] to-[#EFEAFF] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Rail / Section Tag */}
        <div className="inline-flex items-center gap-3">
          <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
          <span className="text-[11.8px] font-semibold tracking-wide text-[#5B47D6]">
            Questions
          </span>
        </div>

        {/* Section Heading */}
        <div className="mt-3.5 max-w-[800px]">
          <h2 className="text-[28px] font-semibold leading-[1.18] tracking-tight text-[#1B1750] sm:text-[36.8px]">
            Straight answers
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-10 divide-y divide-[#E1DBF9] border-y border-[#E1DBF9]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between py-5 text-left cursor-pointer focus:outline-none"
                >
                  <span className="text-[16px] sm:text-[16.3px] font-semibold text-[#1B1750] pr-6">
                    {faq.question}
                  </span>
                  <span className="text-[24px] font-semibold text-[#5B47D6] shrink-0 leading-none select-none">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pt-1 text-[15.5px] leading-[1.65] text-[#575387] max-w-[720px]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
