"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExceptionItem {
  title: string;
  description: string;
}

const exceptionList: ExceptionItem[] = [
  {
    title: "Destination unavailable",
    description:
      "If the target electronic gateway is offline or unreachable, outbound messages queue with retry policies and alert the sender of non-delivery within local operational limits.",
  },
  {
    title: "Recipient mismatch",
    description:
      "If the recipient’s credentials, role, or facility affiliation do not match the intended order, delivery is halted and flagged for sender review before re-routing.",
  },
  {
    title: "Revoked authorization",
    description:
      "When a participant’s credentials or role delegation expire or are revoked, pending and subsequent transmissions are immediately blocked at the permission layer.",
  },
  {
    title: "Delayed receipt",
    description:
      "If transport or intake acknowledgment exceeds predetermined thresholds, automated status warnings notify coordinating staff without assuming clinical default.",
  },
  {
    title: "Duplicate transmission",
    description:
      "Idempotency controls identify repeated or overlapping submissions to prevent double-intake or duplicated entries in receiving electronic health systems.",
  },
  {
    title: "Superseded message",
    description:
      "When amended orders or updated clinical notes are transmitted, earlier versions are linked and explicitly flagged as superseded rather than silently erased.",
  },
  {
    title: "Misdirected information",
    description:
      "Formal containment protocols isolate misrouted transmissions, alert the participating privacy officer, and initiate an audited retraction and logging procedure.",
  },
];

export default function ExceptionsAndEscalation() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24 border-b border-[#D9D3F5]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col max-w-[800px]"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              EXCEPTIONS, CORRECTIONS AND ESCALATION
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.02em] text-[#031974] leading-[1.18]">
            When something goes wrong
          </h2>
        </motion.div>

        {/* 7 Exception Accordion Items */}
        <div className="mt-10 flex flex-col gap-3">
          {exceptionList.map((item, idx) => {
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
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#7B3FF2] sm:block hidden">
                    {isOpen ? "Collapse" : "Details"}
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
                        <p className="text-[15px] sm:text-[15.5px] leading-[1.65] text-[#273444] max-w-[850px]">
                          {item.description}
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
    </section>
  );
}
