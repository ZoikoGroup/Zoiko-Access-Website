"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "delivery",
    question: "Does delivery mean acceptance?",
    answer:
      "No. Electronic delivery confirms that the encrypted referral payload has been successfully received and logged by the destination's intake gateway. Clinical acceptance occurs only when an authorized receiving clinician explicitly accepts responsibility for the care.",
  },
  {
    id: "suitability",
    question: "Who reviews suitability?",
    answer:
      "Suitability is evaluated exclusively by authorized clinicians or clinical triage specialists within the receiving healthcare organization. Zoiko Access never performs automated clinical determinations or triage prioritization.",
  },
  {
    id: "patient-status",
    question: "Can a patient see referral status?",
    answer:
      "Patients and designated caregivers only see high-level confirmed milestone events (such as 'Request sent', 'Provider reviewing', or 'Appointment confirmed') once explicitly released by participating organizations. Private clinical notes, internal queues, and reviewer identities remain confidential.",
  },
  {
    id: "guarantee",
    question: "Does a referral guarantee an appointment?",
    answer:
      "No. A referral constitutes an administrative and clinical request for care. An appointment is only confirmed when the receiving institution's authoritative scheduling system returns a validated booking confirmation with time and location.",
  },
  {
    id: "urgency",
    question: "Does Zoiko Access prioritize by urgency?",
    answer:
      "No. Zoiko Access is not an emergency triage or clinical decision system. Clinical urgency markers originate from the sending clinician and are evaluated solely by receiving clinical professionals under established regional protocols.",
  },
  {
    id: "availability",
    question: "Is it live in my area?",
    answer:
      "Capabilities, participating networks, and active integration pathways vary by geographic jurisdiction and organizational contracts. Public pages provide informational overviews; operational features require verified organizational participation.",
  },
];

export default function ReferralFaq() {
  const [openId, setOpenId] = useState<string | null>("delivery");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Eyebrow, H2, FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col lg:col-span-7"
          >
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              FAQ
            </span>
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
              Straight answers
            </h2>

            {/* Accordion List */}
            <div className="mt-8 flex flex-col gap-2.5">
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
                      <span className="text-[16px] font-semibold tracking-[-0.01em] text-[#031974] sm:text-[16.5px]">
                        {faq.question}
                      </span>
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F1EEFE] text-[#7B3FF2] flex-shrink-0 ml-4">
                        {isOpen ? (
                          <Minus className="h-3.5 w-3.5" />
                        ) : (
                          <Plus className="h-3.5 w-3.5" />
                        )}
                      </div>
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
                          <div className="border-t border-[#F1EEFE] px-5 py-3.5 text-[15px] font-normal leading-[1.68] text-[#273444]">
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

          {/* Right Column: Doctor Visual Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65 }}
            className="flex justify-center lg:col-span-5"
          >
            <div
              className="relative h-[480px] sm:h-[500px] w-full max-w-[370px] overflow-hidden rounded-[26px] shadow-xl border border-white/60"
              style={{
                background:
                  "linear-gradient(127deg, rgba(232, 226, 255, 1) 0%, rgba(213, 220, 255, 1) 100%)",
              }}
            >
              {/* Background Frame SVG */}
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <Image
                  src="/referral-intake-routing/faq-bg.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Main Doctor Photo */}
              <Image
                src="/referral-intake-routing/faq-doctor-photo.png"
                alt="Healthcare Consultation Specialist"
                fill
                sizes="(max-width: 1024px) 100vw, 370px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
