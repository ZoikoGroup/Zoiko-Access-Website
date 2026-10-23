"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DecisionOption {
  id: string;
  label: string;
  detail: string;
  clinicalNote: string;
}

const options: DecisionOption[] = [
  {
    id: "accept",
    label: "Accept",
    detail: "The receiving professional confirms the referral falls within their service.",
    clinicalNote:
      "Initiates recipient care ownership, unlocks worklist triage, and enables appointment scheduling under institutional clinical protocol.",
  },
  {
    id: "decline",
    label: "Decline",
    detail:
      "The receiving professional returns a documented explanation indicating the condition is out of scope or service capacity is unavailable.",
    clinicalNote:
      "Promptly returns responsibility to the sending clinician with specific clinical rationale and alternate service suggestions.",
  },
  {
    id: "request-info",
    label: "Request information",
    detail:
      "The receiving professional requests specific additional clinical context or diagnostic tests before rendering a definitive decision.",
    clinicalNote:
      "Suspends triage clock while keeping ownership transparent; prevents premature rejection when key data is simply missing.",
  },
];

export default function ReceivingProviderDecision() {
  const [selectedId, setSelectedId] = useState<string>("accept");
  const selected = options.find((o) => o.id === selectedId) || options[0];

  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-b border-[#DBE5ED]"
      style={{
        background:
          "linear-gradient(162deg, rgba(2, 18, 95, 1) 0%, rgba(47, 66, 203, 1) 60%, rgba(123, 63, 242, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#C9B8FF] uppercase">
            RECEIVING-PROVIDER DECISION
          </span>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] sm:text-[38px] lg:text-[42px]">
            Only an authorized receiving professional accepts
          </h2>
        </motion.div>

        {/* Interactive Toggle Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {options.map((opt) => {
            const isActive = selectedId === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedId(opt.id)}
                className={`rounded-full px-6 py-3 text-[15px] font-semibold transition-all cursor-pointer border ${
                  isActive
                    ? "bg-[#031974] text-white border-[#D9D3F5] shadow-lg ring-2 ring-white/30 scale-[1.02]"
                    : "bg-white text-[#031974] border-[#D9D3F5] hover:bg-white/90 active:scale-[0.98]"
                }`}
                aria-pressed={isActive}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Decision Response Card */}
        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="rounded-[22px] border border-[#D9D3F5] bg-white p-6 sm:p-7 shadow-xl text-left"
            >
              <h3 className="text-[18px] font-bold text-[#031974] sm:text-[20px]">
                {selected.label}
              </h3>
              <p className="mt-2 text-[15px] font-normal leading-[1.65] text-[#273444] sm:text-[16px]">
                {selected.detail}
              </p>
              <div className="mt-3 border-t border-[#F1EEFE] pt-3 text-[13.5px] font-medium text-[#7657E8]">
                {selected.clinicalNote}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Legal / Illustrative Caption */}
          <p className="mt-3 text-[13.5px] font-normal leading-[1.6] text-[#C9D0FF]">
            Illustrated only. Real decisions need authorized sign-in and a documented response.
          </p>
        </div>
      </div>
    </section>
  );
}
