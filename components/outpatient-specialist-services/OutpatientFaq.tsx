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
    question: "What are outpatient and specialist services?",
    answer:
      "Care delivered without an overnight stay, including visits with specialists. This page explains how they can be coordinated. It does not list services near you.",
  },
  {
    question: "Can Zoiko Access book my appointment?",
    answer:
      "No. The provider owns the schedule and makes all booking decisions in their own system of record. Zoiko Access facilitates service coordination and authorized handoffs, but does not book visits directly.",
  },
  {
    question: "Does the platform decide clinical priority?",
    answer:
      "No. Clinical triage, urgency assessment, and priority determinations remain strictly with the responsible healthcare providers and clinicians. The platform never makes automated clinical determinations.",
  },
  {
    question: "Who owns results?",
    answer:
      "The originating source system and provider organization maintain full legal and clinical ownership of diagnostic results and medical records. Zoiko Access does not maintain a central medical record.",
  },
  {
    question: "Can my clinic participate?",
    answer:
      "Participation is evaluated based on regional availability, approved organizational partnerships, and governance alignment with local healthcare privacy regulations.",
  },
  {
    question: "Is it in my region?",
    answer:
      "Availability is established by authorized regional healthcare partnerships. When institutional pathways and service discovery are published for your jurisdiction, they will be listed on this platform.",
  },
];

export default function OutpatientFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#C8B9FF]"
      style={{
        background: "linear-gradient(90deg, #EBE7FF 0%, #C8B9FF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-12 lg:gap-14">
          {/* Left: Heading & Accordion List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:col-span-7"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-[28px] rounded-full bg-[#6D4FE6]" aria-hidden="true" />
              <span className="text-[11.8px] sm:text-[12.5px] font-semibold tracking-[0.14em] text-[#6D4FE6] uppercase">
                Plain answers
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.01em] text-[#1B1750] leading-[1.18]">
              Straight answers
            </h2>

            {/* FAQ Accordion List */}
            <div className="mt-8 flex flex-col border-t border-[#E1DBF9]">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border-b border-[#2336B0]/30 py-4 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="flex w-full items-center justify-between py-1 text-left cursor-pointer focus:outline-none"
                    >
                      <span className="text-[16px] sm:text-[17px] font-semibold text-[#1B1750]">
                        {faq.question}
                      </span>
                      <span className="text-[22px] font-semibold text-[#6D4FE6] leading-none shrink-0 ml-4 select-none">
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
                          <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-[1.65] text-[#575387]">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Big Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[460px] h-[520px] rounded-[26px] overflow-hidden bg-gradient-to-br from-[#8E7BEF] to-[#08176D] p-3.5 shadow-[0px_24px_56px_0px_rgba(27,23,80,0.25)]">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                <Image
                  src="/outpatient-specialist-services/faq-clinician.png"
                  alt="Clinical professionals consulting straightforward guidelines"
                  fill
                  sizes="(max-width: 640px) 100vw, 460px"
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
