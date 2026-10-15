"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    id: "book-or-request",
    question: "Can I book or request an appointment from this page?",
    answer:
      "No. This page is educational and explanatory. No live booking or request service operates directly on this public page. It helps you understand how authorized appointment requests and confirmed bookings work when supported by participating healthcare providers.",
  },
  {
    id: "confirmed-appointment",
    question: "Is an appointment request a confirmed appointment?",
    answer:
      "No. An appointment request indicates that your interest or timing preference has been submitted to a participating provider. It is not confirmed until the responsible provider reviews capacity, schedules the slot, and explicitly issues an authoritative confirmation.",
  },
  {
    id: "location-eligibility",
    question: "Does choosing a care location make me eligible?",
    answer:
      "No. Choosing a care location provides regional informational context only. It does not establish clinical eligibility, verify insurance or payer coverage, validate caregiver authority, or create a patient record.",
  },
  {
    id: "guaranteed-slots",
    question: "Are requested dates guaranteed slots?",
    answer:
      "No. In request mode, preferred dates and time windows represent preferences only. They are not held, reserved, or guaranteed inventory until an authorized booking integration is confirmed by the provider.",
  },
  {
    id: "another-person",
    question: "Can I request for another person?",
    answer:
      "You can read and learn about care pathways for others. However, submitting an appointment request or managing care on behalf of another person in an operating service requires lawful representation authority (such as legal guardianship or authorized caregiver status) and proper authentication.",
  },
  {
    id: "cancel-reschedule",
    question: "Can I cancel or reschedule here?",
    answer:
      "No. Status tracking, cancellations, and rescheduling must be performed directly through the responsible provider's authorized channels or designated patient portal according to their specific policies.",
  },
  {
    id: "service-unavailable",
    question: "What happens if a service is unavailable?",
    answer:
      "If appointment requests are not enabled for your location or chosen provider, the service remains purely informational. You will need to contact the provider directly using their published contact information or standard intake methods.",
  },
];

export default function AppointmentFaq() {
  const [openId, setOpenId] = useState<string | null>("book-or-request");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="w-full py-16 sm:py-20 lg:py-24 font-sans"
      style={{
        background:
          "linear-gradient(180deg, rgba(246, 243, 255, 1) 0%, rgba(236, 231, 255, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-11">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:col-span-5"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2.5">
              <span
                className="h-2 w-2 rounded-full bg-[#8E7BEF]"
                aria-hidden="true"
              />
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5B49C8]">
                Questions, answered
              </span>
            </div>

            {/* Heading 2 */}
            <h2 className="mt-3.5 font-bold tracking-tight text-[#241C59] text-[28px] sm:text-[34px] lg:text-[37.6px] leading-[1.25]">
              Know before you take the
              <br />
              next step.
            </h2>

            {/* Description */}
            <p className="mt-4 text-[15px] font-normal leading-[1.65] text-[#5E5A86] sm:text-[16px]">
              Clear distinctions between learning, requesting, receiving, and
              holding a confirmed appointment.
            </p>
          </motion.div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#E3DEF8] border-y border-[#E3DEF8]">
              {FAQS.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id} className="py-4 sm:py-5">
                    <button
                      type="button"
                      onClick={() => toggle(faq.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 text-left group"
                    >
                      <span className="text-[16px] sm:text-[17px] font-semibold text-[#241C59] group-hover:text-[#4267D5] transition-colors">
                        {faq.question}
                      </span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8E8F8] text-[20px] font-medium text-[#5B49C8] transition-transform duration-200">
                        {isOpen ? "−" : "+"}
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
                          <p className="mt-3 text-[14.8px] sm:text-[15.2px] font-normal leading-[1.65] text-[#5E5A86] pr-8">
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
      </div>
    </section>
  );
}
