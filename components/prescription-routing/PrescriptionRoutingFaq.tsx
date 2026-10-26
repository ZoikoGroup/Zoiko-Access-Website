"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "ready",
    question: "Does routing mean my medicine is ready?",
    answer:
      "No. Routing sends information. The pharmacy decides separately whether and when to dispense.",
  },
  {
    id: "prescribe-substitute",
    question: "Can Zoiko Access prescribe or substitute medicine?",
    answer:
      "No. Zoiko Access is not a prescriber and does not make clinical decisions. Only licensed prescribers authorize prescriptions, and receiving pharmacies independently evaluate and dispense.",
  },
  {
    id: "pharmacy-electronic",
    question: "Can every pharmacy receive electronic prescriptions?",
    answer:
      "No. Participation depends on jurisdictional rules, local pharmacy capabilities, and supported routing pathways. Check with your care location or provider.",
  },
  {
    id: "who-confirms",
    question: "Who confirms a prescription can be dispensed?",
    answer:
      "The receiving pharmacy independently confirms whether a prescription meets clinical, safety, and legal requirements before dispensing.",
  },
];

export default function PrescriptionRoutingFaq() {
  // First item open by default matching Figma state
  const [openIds, setOpenIds] = useState<string[]>(["ready"]);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="w-full bg-white py-[70px] border-b border-[#DCD6F2]">
      <div className="mx-auto w-full max-w-[1300px] px-6 sm:px-10 lg:px-0">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2.5 pb-8"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold leading-[21px] text-[#4267D5]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7657E8]" aria-hidden="true" />
            <span>Frequently asked questions</span>
          </div>

          {/* Heading */}
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[36.8px] font-semibold leading-[1.12] text-[#243B73]">
            Clear answers, with clear limits.
          </h2>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-[#DCD6F2] border-t border-[#DCD6F2]">
          {faqs.map((faq, idx) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="py-5"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="flex w-full items-center justify-between gap-6 text-left transition-colors hover:text-[#7657E8] focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-poppins text-[17.3px] font-semibold leading-[29px] text-[#243B73]">
                    {faq.question}
                  </span>
                  <span
                    className="font-poppins text-[22.4px] font-semibold leading-[22px] text-[#7657E8] shrink-0 w-6 text-center select-none"
                    aria-hidden="true"
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 max-w-[850px] font-inter text-[15.2px] font-normal leading-[25px] text-[#273444]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
