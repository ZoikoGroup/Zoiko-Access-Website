"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    id: "medical-care",
    question: "Does Zoiko Access provide medical care?",
    answer:
      "No. Zoiko Access is an educational and navigation platform that helps people discover healthcare options and understand care pathways. Zoiko Access does not provide medical care, diagnosis, treatment, or clinical recommendations. All clinical decisions remain exclusively with licensed healthcare professionals.",
  },
  {
    id: "book-appointment",
    question: "Can I book an appointment?",
    answer:
      "No direct booking takes place on this informational page. Where an authorized integration with a participating healthcare organization is available, you may be guided to their approved appointment-request pathway. Any appointment must be explicitly confirmed by the provider or organization.",
  },
  {
    id: "location-availability",
    question: "Is information available in every location?",
    answer:
      "No. Healthcare services, directory listings, and available pathways vary significantly by geographic location, regulatory jurisdiction, and participating local partners. Choosing a location adjusts context but does not guarantee service availability in that area.",
  },
  {
    id: "another-person",
    question: "Can I use it for another person?",
    answer:
      "You can explore published educational information on behalf of family members. However, taking operational actions, requesting appointments, or accessing health data requires verified legal authority (such as being a designated caregiver, guardian, or healthcare proxy) under applicable privacy laws.",
  },
  {
    id: "request-confirmation",
    question: "How do I know a request was confirmed?",
    answer:
      "A submitted inquiry or request is only confirmed when the responsible healthcare provider or organization explicitly issues an acceptance or confirmation through their authoritative workflow. A delivered message or notification alone does not constitute clinical review or confirmation.",
  },
  {
    id: "feature-unavailable",
    question: "What if a feature is unavailable?",
    answer:
      "Features and workflows depend on local partner authorization. If a digital pathway or directory is not supported in your chosen location, you will be guided to standard direct contact channels or local public health resources where available.",
  },
  {
    id: "data-residency",
    question: "Does choosing a location change eligibility or data residency?",
    answer:
      "No. Selecting a location only customizes the informational context displayed. It does not alter your legal residency, verify clinical eligibility, or change the data residency policies governed by specific authorized services.",
  },
  {
    id: "urgent-needs",
    question: "Where should I go for urgent medical needs?",
    answer:
      "Zoiko Access is not an emergency response service. If you or someone you are assisting has an urgent or life-threatening medical emergency, call your local emergency services (such as 911, 999, or 112) or go to the nearest emergency department immediately.",
  },
] as const;

export default function HowItWorksFaq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#F6F9FC] py-16 sm:py-20 lg:py-[76px] font-sans border-b border-[#DFE5F0]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          {/* Left Column: Heading */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2">
              <span
                className="block h-1.5 w-1.5 rounded-full bg-[#7657E8]"
                aria-hidden="true"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6547BF]">
                Questions, answered
              </span>
            </div>

            <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-[-0.0176em] text-[#243B73] sm:text-[34px] sm:leading-[40.8px]">
              Questions about how
              <br />
              Zoiko Access works.
            </h2>
          </div>

          {/* Right Column: Accordion */}
          <div className="divide-y divide-[#DFE5F0]">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-2">
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-[#4267D5]"
                  >
                    <span className="text-[16px] font-bold leading-normal text-[#243B73] sm:text-[18px]">
                      {faq.question}
                    </span>
                    <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#4267D5]">
                      {isOpen ? (
                        <Minus className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <Plus className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pt-1 text-[14px] font-normal leading-[1.8] text-[#5E6B7D] sm:text-[15px]">
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
    </section>
  );
}
