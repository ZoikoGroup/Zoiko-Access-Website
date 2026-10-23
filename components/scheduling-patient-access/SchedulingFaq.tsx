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
    id: "confirms",
    question: "Who confirms an appointment?",
    answer:
      "Only the participating hospital or clinic source scheduling system confirms an appointment. Zoiko Access coordinates the request and relays status, but never confirms bookings directly.",
  },
  {
    id: "request",
    question: "What is an appointment request?",
    answer:
      "An appointment request is a structured, routed inquiry sent to the authoritative provider system with necessary clinical context and patient details. It is not an inventory reservation until accepted.",
  },
  {
    id: "waitlists",
    question: "Are waitlists supported?",
    answer:
      "Waitlists and queueing rules remain entirely within each provider's local scheduling authority. The platform relays availability updates and slot openings as published by the facility.",
  },
  {
    id: "referral",
    question: "Does a visit need a referral?",
    answer:
      "If the receiving specialty requires a clinical referral, the request waits until the referral is verified. Unverified requests are never advanced to confirmed status.",
  },
  {
    id: "cancellations",
    question: "What about cancellations?",
    answer:
      "Cancellations and rescheduling requests are transmitted directly to the source scheduler, maintaining clear audit trails with timestamps and originating party attribution.",
  },
  {
    id: "locally",
    question: "Is it available locally?",
    answer:
      "Availability depends on institutional partnership activation and verified recipient pathways in your healthcare district or provider network.",
  },
];

export default function SchedulingFaq() {
  const [openId, setOpenId] = useState<string | null>("confirms");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7E9F4]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end justify-between gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Heading and Accordion Items */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
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
                      className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-[#F8F9FD]"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[16.5px] font-semibold tracking-[-0.01em] text-[#031974]">
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
                        >
                          <div className="border-t border-[#F1EEFE] px-5 pb-5 pt-3 text-[15px] leading-[1.68] text-[#273444]">
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

          {/* Right Column: Arched Graphic & Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div
              className="relative h-[440px] w-full max-w-[460px] overflow-hidden rounded-tl-[240px] border border-[#D9D3F5] shadow-xl sm:h-[484px]"
              style={{
                background:
                  "linear-gradient(127deg, #E8E2FF 0%, #D5DCFF 100%)",
              }}
            >
              {/* Curve Backdrop SVG */}
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <Image
                  src="/scheduling-patient-access/faq-bg-curve.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Doctor / Specialist Photo */}
              <div className="relative h-full w-full">
                <Image
                  src="/scheduling-patient-access/faq-photo.png"
                  alt="Doctor reviewing care schedule"
                  fill
                  sizes="460px"
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
