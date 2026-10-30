"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is a submitted request the same as a booking?",
    answer: "No. A booking exists only when the responsible provider explicitly confirms it.",
  },
  {
    question: "Who is responsible for my referral?",
    answer:
      "The referring clinician or authorized sending organization initiates the referral, while the receiving healthcare organization is responsible for reviewing and accepting or declining it.",
  },
  {
    question: "How do I know a request was confirmed?",
    answer:
      "You will receive an explicit confirmation status from the responsible provider through verified communication channels. A simple receipt only confirms delivery, not provider acceptance.",
  },
  {
    question: "Can I track my request?",
    answer:
      "Yes. You can follow your request through plain-language stages—from submitted and delivered to under review and final provider decision—where tracking is supported.",
  },
  {
    question: "Can support give me medical advice?",
    answer:
      "No. Platform support can assist with account access, navigation, and technical questions, but never provides clinical assessment, diagnosis, or medical recommendations.",
  },
  {
    question: "What if the option I need isn't available?",
    answer:
      "Capability and live booking depend on verified local integrations. If an option is paused or unavailable, informative guidance remains accessible, and you should contact the provider or your local health service directly.",
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
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[70px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-14">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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
            <h2 className="mt-3 text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] [font-family:var(--font-poppins)]">
              Questions about
              <br />
              next steps.
            </h2>
          </motion.div>

          {/* Right Column: Accordion list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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
