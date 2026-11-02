"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Does Zoiko Access provide medical care?",
    answer:
      "No. It helps you understand options and coordinate approved next steps. Licensed providers deliver care.",
  },
  {
    question: "Can this page tell me which service I need?",
    answer:
      "No. This page is educational only. It describes service types and settings to help you ask informed questions, but clinical decisions require consultation with a licensed healthcare provider.",
  },
  {
    question: "Is every service available everywhere?",
    answer:
      "No. Availability depends entirely on your care location and what local healthcare organizations have published and verified. If a service is not published for your region, it cannot be requested here.",
  },
  {
    question: "Does choosing a location make me eligible?",
    answer:
      "No. Selecting a location only customizes the informational view. Eligibility, identity verification, and permissions are assessed independently by authorized providers before any care can be delivered.",
  },
  {
    question: "Can I use this for someone else?",
    answer:
      "You can freely read this educational guide for someone else. However, submitting requests or taking actions on their behalf requires verified consent or legal caregiver authority.",
  },
  {
    question: "Where should I go for urgent medical needs?",
    answer:
      "For immediate medical emergencies or severe, life-threatening symptoms, always call your local emergency services (such as 999 or 911) or visit the nearest emergency department immediately.",
  },
];

export default function FaqSection() {
  // First item open by default as shown in the Figma design
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-white py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-14">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
                Questions, answered
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] sm:text-[40px] [font-family:var(--font-poppins)]">
              Common questions.
            </h2>
          </motion.div>

          {/* Right Column: Accordion list */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col"
          >
            {faqs.map((faq, idx) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div key={faq.question} className="border-b border-[#E3E8F2] py-5">
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    className="flex w-full items-center justify-between gap-4 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[16px] font-semibold leading-[25.6px] text-[#16245A]">
                      {faq.question}
                    </span>
                    <span
                      className={`text-[18px] font-semibold text-[#7657E8] transition-transform duration-200 select-none ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ⌄
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-2.5 text-[15px] leading-[24px] text-[#5B6678]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
