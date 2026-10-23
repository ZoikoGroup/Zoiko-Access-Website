"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "role",
    question: "What is the role of Zoiko Access for hospitals?",
    answer:
      "Zoiko Access provides a coordination and status-tracking layer across healthcare organizations. Participating hospitals and clinics retain full authority over their scheduling systems, clinical decisions, and source records.",
  },
  {
    id: "ehr",
    question: "Does Zoiko Access replace our EHR?",
    answer:
      "No. Zoiko Access does not replace your electronic health record (EHR) or clinical systems. It is designed to connect with existing systems via standard interfaces and authorized pathways without disrupting clinical documentation.",
  },
  {
    id: "confirm",
    question: "Who confirms appointments?",
    answer:
      "Only the participating hospital, clinic, or provider organization confirms appointments. An appointment request is not confirmed until authoritative approval is received directly from the facility's source scheduling system.",
  },
  {
    id: "clinical",
    question: "Who is responsible for clinical decisions?",
    answer:
      "Clinicians and healthcare organizations retain complete and exclusive authority over clinical decisions. Zoiko Access never provides automated clinical triage, diagnostic guidance, or medical direction.",
  },
  {
    id: "region",
    question: "Is integration available in every region?",
    answer:
      "Integration and specific workflows are available only where approved, validated, and contracted with participating regional healthcare networks and organizations.",
  },
];

export default function HospitalFaq() {
  const [openId, setOpenId] = useState<string | null>("role");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center justify-between gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading and Accordion List */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col lg:col-span-7"
          >
            {/* Eyebrow */}
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              FAQ
            </span>

            {/* Title */}
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
              Straight answers
            </h2>

            {/* Accordion List */}
            <div className="mt-8 flex flex-col gap-3">
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="overflow-hidden rounded-[14px] border border-[#D9D3F5] bg-white transition-all shadow-sm"
                  >
                    <button
                      onClick={() => toggle(faq.id)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-[#F8F9FE] cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[16px] font-semibold tracking-[-0.01em] text-[#031974] sm:text-[17px]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 text-[#031974] transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#7B3FF2]" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-[#F1EEFE] px-5 py-4 text-[15px] font-normal leading-[1.68] text-[#273444]">
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

          {/* Right Column: Doctor / Hospital Visual Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65 }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative h-[380px] sm:h-[480px] w-full max-w-[380px] overflow-hidden rounded-[20px] shadow-lg">
              <Image
                src="/hospitals-clinics/faq_hospital.png"
                alt="Hospital Staff Consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
