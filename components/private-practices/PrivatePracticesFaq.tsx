"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a private-practice pathway?",
    answer:
      "A private-practice pathway is an authorized digital route designed to connect independent practices with referring providers, diagnostic partners, and patients. It allows structured request delivery, status visibility, and transition tracking while keeping clinical autonomy squarely with the practice.",
  },
  {
    question: "Does Zoiko Access replace our EHR?",
    answer:
      "No. Zoiko Access is a care navigation and coordination platform, not an electronic health record. Your existing EHR remains the authoritative source of truth for patient medical records, clinical notes, and billing.",
  },
  {
    question: "Who confirms appointments?",
    answer:
      "The practice confirms appointments directly. Requests submitted through Zoiko Access are digital intake requests, not confirmed bookings. Only the practice's authorized scheduling staff or clinician reviews and confirms appointment times.",
  },
  {
    question: "Are referrals automatically accepted?",
    answer:
      "No. Electronic delivery of a referral is never equivalent to clinical acceptance. Referrals remain in a pending state until a licensed professional or authorized reviewer at the receiving practice reviews and formally accepts responsibility.",
  },
  {
    question: "Is it available in my area?",
    answer:
      "Availability depends on active regional partnerships and verified clinical networks in your jurisdiction. Zoiko Access operates according to clear service gates (P0 through P2), ensuring pathways are only presented where approved endpoints and agreements exist.",
  },
  {
    question: "How is patient information protected?",
    answer:
      "All transactions adhere to strict minimum necessary intake principles, end-to-end encryption, and role-based access controls. Data is handled only for permitted care coordination purposes, and participating practices maintain full control of their source records.",
  },
];

export default function PrivatePracticesFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Heading & FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col lg:col-span-7"
          >
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              FAQ
            </span>
            <h2 className="mt-3 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#031974]">
              Straight answers
            </h2>

            {/* Accordion List */}
            <div className="mt-8 flex flex-col gap-3">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-[14px] border border-[#D9D3F5] bg-white shadow-xs transition-all duration-200"
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="flex w-full items-center justify-between p-4.5 text-left transition-colors hover:bg-[#F1EEFE]/40 cursor-pointer"
                    >
                      <span className="text-[16px] sm:text-[16.5px] font-semibold text-[#031974]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#7B3FF2] transition-transform duration-250 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="border-t border-[#F1EEFE] px-5 pt-3 pb-5 text-[15px] leading-[1.65] text-[#273444]">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: FAQ Doctor Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative h-[480px] sm:h-[514px] w-full max-w-[480px] overflow-hidden rounded-[26px] shadow-lg border border-[#D9D3F5] bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF]">
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <Image
                  src="/private-practices/faq-bg-frame.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-full w-full">
                <Image
                  src="/private-practices/faq-doctor.png"
                  alt="Doctor consulting with medical colleagues"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
