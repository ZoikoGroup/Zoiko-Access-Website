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
    id: "faq-1",
    question: "Does an enquiry mean we're approved as a partner?",
    answer: "No. An enquiry starts a conversation; approval requires separate institutional review.",
  },
  {
    id: "faq-2",
    question: "Is partnership available in our location?",
    answer: "Availability depends on market, local authorization and review. No location is assumed.",
  },
  {
    id: "faq-3",
    question: "Does a partnership affect clinical care?",
    answer: "No. Clinical decisions stay with licensed care professionals.",
  },
  {
    id: "faq-4",
    question: "What happens to member data?",
    answer: "Only what an approved purpose requires, under agreed roles, consent and retention rules.",
  },
  {
    id: "faq-5",
    question: "How long does it take?",
    answer: "Timing depends on scope and reviews. No timeline is promised.",
  },
];

export default function BecomePartnerFaq() {
  // Initialize with the first FAQ open by default like Figma preview
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-1": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="w-full bg-white py-16 sm:py-20 lg:py-[70px]">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Title & Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col lg:col-span-5"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
                Questions, answered
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.2] tracking-tight text-[#16245A] sm:text-[38px] lg:text-[40px]">
              Partnership
              <br />
              questions.
            </h2>
          </motion.div>

          {/* Right Column: FAQ Accordion List */}
          <div className="flex flex-col divide-y divide-[#E3E8F2] lg:col-span-7">
            {faqs.map((item, idx) => {
              const isOpen = !!openItems[item.id];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
                  className="py-5"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="flex w-full items-start justify-between gap-4 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[16.5px] sm:text-[17px] font-semibold leading-[27px] text-[#16245A]">
                      {item.question}
                    </span>
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center text-[20px] font-semibold text-[#7657E8] select-none leading-none"
                      aria-hidden="true"
                    >
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-2.5 text-[15px] font-normal leading-[24px] text-[#5B6678]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
