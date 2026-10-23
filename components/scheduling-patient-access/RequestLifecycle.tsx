"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OutcomeDetail {
  id: string;
  label: string;
  description: string;
}

const pipelineSteps = [
  { step: 1, title: "Draft" },
  { step: 2, title: "Submitted" },
  { step: 3, title: "Received" },
  { step: 4, title: "Under review" },
];

const outcomes: OutcomeDetail[] = [
  {
    id: "confirmed",
    label: "Confirmed",
    description:
      "The source scheduler confirmed. Only this event is a confirmation.",
  },
  {
    id: "declined",
    label: "Declined",
    description:
      "The source scheduler declined the request. The reason and facility source are noted.",
  },
  {
    id: "expired",
    label: "Expired",
    description:
      "No confirmation was received within the facility's time limit. The request expired.",
  },
  {
    id: "cancelled",
    label: "Cancelled",
    description:
      "The request was cancelled by the patient or requesting party before confirmation.",
  },
];

export default function RequestLifecycle() {
  const [activeOutcome, setActiveOutcome] = useState<string>("confirmed");

  const selectedOutcome =
    outcomes.find((o) => o.id === activeOutcome) || outcomes[0];

  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(150deg, #09176F 0%, #2B29C4 61%, #6D3EEB 100%)",
      }}
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading, Eyebrow & Context (matches Figma) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col lg:col-span-5"
          >
            {/* Eyebrow */}
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#C9B8FF] uppercase">
              EXAMPLE LIFECYCLE
            </span>

            {/* H2 Title */}
            <h2 className="mt-4 text-[36px] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-[44px]">
              One request,
              <br />
              from draft to
              <br />
              outcome
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-[16px] text-[#D8DCFF]">
              Select an outcome. Only the source can set it.
            </p>
          </motion.div>

          {/* Right Column: 4 Vertical Pipeline Steps + Outcomes Row + Result Box (matches Figma) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="flex flex-col lg:col-span-7"
          >
            {/* 4 Pipeline Steps */}
            <div className="flex flex-col gap-3">
              {pipelineSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex items-center justify-between rounded-[16px] border border-white/25 bg-white/[0.08] px-5 py-3.5 shadow-sm transition-colors hover:bg-white/[0.12]"
                >
                  <span className="text-[16px] font-semibold text-white">
                    {item.title}
                  </span>
                  <span className="text-[14px] font-bold text-white/80">
                    {item.step}
                  </span>
                </div>
              ))}
            </div>

            {/* Possible Outcomes Pills Row */}
            <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-2.5">
              {outcomes.map((outcome) => {
                const isActive = outcome.id === activeOutcome;
                return (
                  <button
                    key={outcome.id}
                    onClick={() => setActiveOutcome(outcome.id)}
                    className={`rounded-full px-5 py-2.5 text-[15px] font-semibold transition-all ${
                      isActive
                        ? "bg-white text-[#031974] shadow-md border border-white/50"
                        : "bg-transparent text-white border border-white/50 hover:bg-white/10"
                    }`}
                  >
                    {outcome.label}
                  </button>
                );
              })}
            </div>

            {/* Selected Outcome Detail Card */}
            <div className="mt-4 overflow-hidden rounded-[18px] bg-white p-5 shadow-lg sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedOutcome.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22 }}
                >
                  <h3 className="text-[16px] font-bold text-[#031974]">
                    {selectedOutcome.label}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-[1.65] text-[#273444] sm:text-[16px]">
                    {selectedOutcome.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
