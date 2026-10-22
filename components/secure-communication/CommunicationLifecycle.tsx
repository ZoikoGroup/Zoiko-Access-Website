"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LifecycleStep {
  id: number;
  label: string;
  headline: string;
  description: string;
  notImplied: string;
}

const lifecycleSteps: LifecycleStep[] = [
  {
    id: 1,
    label: "Compose under\npolicy",
    headline: "1. Compose under policy",
    description: "Only to an eligible recipient, for a permitted purpose.",
    notImplied: "Does not imply: That it was composed correctly. (Illustrative stage.)",
  },
  {
    id: 2,
    label: "Route / submit",
    headline: "2. Route / submit",
    description: "Transmission initiation across verified system gateways.",
    notImplied: "Does not imply: That the message has reached the recipient yet.",
  },
  {
    id: 3,
    label: "Transport result",
    headline: "3. Transport result",
    description: "Network and gateway transfer status confirmed by sender infrastructure.",
    notImplied: "Does not imply: Acceptance into the receiving electronic record system.",
  },
  {
    id: 4,
    label: "Destination receipt",
    headline: "4. Destination receipt",
    description: "Arrival at the receiving organization’s intake queue or inbox.",
    notImplied: "Does not imply: That any clinician or staff member has opened or viewed it.",
  },
  {
    id: 5,
    label: "Authorized recipient\nreview",
    headline: "5. Authorized recipient review",
    description: "Access by credentialed care-team member within scope of their role.",
    notImplied: "Does not imply: Clinical endorsement, triage completion or action taken.",
  },
  {
    id: 6,
    label: "Clinical\nacknowledgment or\ndecision",
    headline: "6. Clinical acknowledgment or decision",
    description: "Formal recording of clinical review, decision, or care response.",
    notImplied: "Does not imply: Care pathway completion or resolution of the underlying episode.",
  },
  {
    id: 7,
    label: "Next-step resolution",
    headline: "7. Next-step resolution",
    description: "Follow-up workflow execution, referral outcome, or handoff closure recorded.",
    notImplied: "Does not imply: Indefinite real-time monitoring across organizations.",
  },
];

export default function CommunicationLifecycle() {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const currentStep = lifecycleSteps.find((s) => s.id === activeStepId) || lifecycleSteps[0];

  return (
    <section
      id="communication-lifecycle"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 text-white"
      style={{
        background: "linear-gradient(156deg, #02125F 0%, #2F42CB 58%, #4267D5 100%)",
      }}
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col max-w-[800px]"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-[28px] rounded-full bg-[#C9B8FF]" aria-hidden="true" />
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#C9B8FF] uppercase">
              COMMUNICATION LIFECYCLE
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.02em] text-white leading-[1.18]">
            Seven steps, seven different facts
          </h2>

          <p className="mt-3 text-[16px] sm:text-[17px] font-normal leading-[1.6] text-[#E6E9FF]">
            Select a step. A “delivered” message is never treated as “reviewed”.
          </p>
        </motion.div>

        {/* Seven Steps Interactive Timeline */}
        <div className="relative mt-12 overflow-x-auto pb-4 pt-2">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[60px] right-[60px] h-[3px] bg-white/35 z-0" />

          <ol className="relative z-10 flex min-w-[880px] lg:min-w-0 justify-between items-start gap-4">
            {lifecycleSteps.map((step) => {
              const isActive = step.id === activeStepId;
              return (
                <li key={step.id} className="flex-1 flex flex-col items-center text-center">
                  <button
                    type="button"
                    onClick={() => setActiveStepId(step.id)}
                    className="group flex flex-col items-center focus:outline-none cursor-pointer w-full"
                  >
                    {/* Circle badge */}
                    <div
                      className={`flex h-[46px] w-[46px] items-center justify-center rounded-full border-3 border-[#C9B8FF] transition-all duration-200 ${
                        isActive
                          ? "bg-[#7B3FF2] scale-110 shadow-lg ring-4 ring-[#7B3FF2]/30"
                          : "bg-white group-hover:scale-105"
                      }`}
                    >
                      <span
                        className={`text-[17px] font-bold ${
                          isActive ? "text-white" : "text-[#031974]"
                        }`}
                      >
                        {step.id}
                      </span>
                    </div>

                    {/* Step Title */}
                    <b className="mt-3.5 block whitespace-pre-line text-[13.5px] sm:text-[14px] font-semibold text-white leading-[1.3] min-h-[38px]">
                      {step.label}
                    </b>

                    {/* Illustrative tag */}
                    <em className="mt-2 inline-flex items-center justify-center rounded-full border border-dashed border-[#C9B8FF] px-2.5 py-0.5 text-[10px] font-bold tracking-[0.07em] uppercase text-white not-italic">
                      ILLUSTRATIVE
                    </em>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Selected Step Detail Card */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-[22px] bg-white p-7 sm:p-9 shadow-lg text-left"
            >
              <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-[#031974]">
                {currentStep.headline}
              </h3>

              <p className="mt-2 text-[16px] sm:text-[17px] leading-[1.6] text-[#273444]">
                {currentStep.description}
              </p>

              <p className="mt-4 border-t border-[#EEF0F7] pt-3 text-[14px] sm:text-[14.5px] leading-[1.6] text-[#607185]">
                {currentStep.notImplied}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
