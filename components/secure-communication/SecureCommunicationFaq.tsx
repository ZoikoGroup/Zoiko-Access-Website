"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is secure clinical communication?",
    answer:
      "Identity-checked, permission-scoped message exchange designed for authorized healthcare professionals and care-team delegates across independent organizations. It provides verifiable transport records and separate accountability at every stage.",
  },
  {
    question: "Is sending confirmation of review?",
    answer:
      "No. A successful transport or gateway delivery result confirms that the message reached the receiving organization’s boundary. It is never treated as clinical triage, professional review, or medical acceptance.",
  },
  {
    question: "Who can see communications?",
    answer:
      "Only verified, credentialed healthcare professionals and assigned delegates with active role authorization and lawful proxy for the specific clinical context. Access is denied by default and reviewed in context.",
  },
  {
    question: "Can patients or caregivers see them?",
    answer:
      "Inter-organizational professional communications are restricted to healthcare teams. Patients and caregivers coordinate care through dedicated, verified patient navigation portals where available.",
  },
  {
    question: "Is it available in my region?",
    answer:
      "Professional communication features depend on regional deployment, participating organizational partnerships, and local health governance rules. Unselected regions have no active routing.",
  },
  {
    question: "Is this an emergency channel?",
    answer:
      "No. Zoiko Access communication pathways are never intended for emergency care, acute symptoms, or time-critical alerts. Always use standard local emergency response routes (e.g., 911 / 999).",
  },
];

export default function SecureCommunicationFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7E9F4]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: FAQ Accordion */}
          <div className="flex flex-col lg:col-span-7 xl:col-span-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
              <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.02em] text-[#031974] leading-[1.18]">
              Short answers
            </h2>

            {/* Accordion list */}
            <div className="mt-10 flex flex-col gap-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
                    className="overflow-hidden rounded-[14px] border border-[#D9D3F5] bg-white transition-all shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="flex w-full items-center justify-between px-6 py-4.5 text-left cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[15px] font-bold text-[#7B3FF2] select-none">
                          {isOpen ? "−" : "+"}
                        </span>
                        <span className="text-[16px] sm:text-[17px] font-semibold text-[#031974]">
                          {faq.question}
                        </span>
                      </div>
                      <span className="text-[12px] font-semibold uppercase tracking-wider text-[#7B3FF2] sm:block hidden">
                        {isOpen ? "Close" : "Open"}
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
                          <div className="border-t border-[#EEF0F7] px-6 py-4 bg-[#FAF9FE]">
                            <p className="text-[15px] sm:text-[15.5px] leading-[1.65] text-[#273444]">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Illustration Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center lg:col-span-5 xl:col-span-4"
          >
            <div className="relative h-[480px] sm:h-[540px] w-full max-w-[390px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF] p-2.5 shadow-lg border border-[#D9D3F5]">
              <div className="relative h-full w-full overflow-hidden rounded-[20px]">
                <Image
                  src="/secure-communication/faq-illustration.png"
                  alt="Clinical professionals consulting secure guidelines"
                  fill
                  sizes="(max-width: 640px) 100vw, 390px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
