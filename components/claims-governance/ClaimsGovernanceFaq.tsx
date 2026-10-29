"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Does receipt mean a claim is approved?",
    answer:
      "No. Receipt only confirms delivery; the payer decides the outcome.",
  },
  {
    question: "Does remittance mean I've been paid?",
    answer:
      "No. Remittance explains the outcome; funds move separately and must be reconciled.",
  },
  {
    question: "Who decides a claim?",
    answer: "The responsible payer, under its plan and contracts.",
  },
  {
    question: "Can I appeal?",
    answer:
      "Appeal and reconsideration rights depend on the plan and local rules. Follow the payer's official notice.",
  },
  {
    question: "Which information is authoritative?",
    answer:
      "The record held by the organization that made the decision.",
  },
];

export default function ClaimsGovernanceFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full bg-[#F6F9FC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2.5">
              <span
                className="h-[2px] w-[22px] rounded-full bg-[#7657E8]"
                aria-hidden="true"
              />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
                Questions, answered
              </span>
            </div>

            <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.15] tracking-tight text-[#16245A] sm:text-[40px]">
              Common claims
              <br />
              questions.
            </h2>
          </motion.div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col divide-y divide-[#E3E8F2] lg:col-span-7">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between gap-4 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[17px] font-semibold leading-[27px] text-[#16245A] transition-colors group-hover:text-[#7657E8]">
                      {faq.question}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[22px] font-semibold leading-none text-[#7657E8] transition-transform duration-200">
                      {isOpen ? "–" : "+"}
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
                        <p className="pt-3 text-[15px] font-normal leading-[1.6] text-[#5B6678]">
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
      </div>
    </section>
  );
}
