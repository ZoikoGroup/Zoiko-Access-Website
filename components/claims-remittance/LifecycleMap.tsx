"use client";

import { motion } from "framer-motion";

interface StepData {
  step: string;
  title: string;
  isOutsideScope?: boolean;
  responsible: string;
  evidence: string;
  doesNotEstablish: string;
  nextStep: string;
}

const lifecycleSteps: StepData[] = [
  {
    step: "01",
    title: "Prepare & submit",
    responsible: "Provider, clearinghouse or delegated claims originator",
    evidence: "Submission record",
    doesNotEstablish: "That the payer received or accepted it",
    nextStep: "Await transport acknowledgment",
  },
  {
    step: "02",
    title: "Accept for processing",
    responsible: "Payer intake",
    evidence: "Acceptance or intake rejection notice",
    doesNotEstablish: "Any decision on the claim",
    nextStep: "Correct and resubmit if rejected",
  },
  {
    step: "03",
    title: "Adjudicate",
    responsible: "Payer / administrator alone",
    evidence: "Payer-issued determination",
    doesNotEstablish: "That payment has been made",
    nextStep: "Payer issues remittance advice",
  },
  {
    step: "04",
    title: "Issue remittance advice",
    responsible: "Payer",
    evidence: "Remittance advice record",
    doesNotEstablish: "That funds moved",
    nextStep: "Payment instruction by payer",
  },
  {
    step: "05",
    title: "Transfer funds",
    isOutsideScope: true,
    responsible: "Payer and financial institutions on regulated rails",
    evidence: "Settlement confirmation",
    doesNotEstablish: "That records reconcile",
    nextStep: "Provider reconciles",
  },
  {
    step: "06",
    title: "Reconcile",
    responsible: "Provider and payer financial systems",
    evidence: "Remittance matched to settlement",
    doesNotEstablish: "That discrepancies can't occur",
    nextStep: "Raise unmatched items with the owner",
  },
];

export default function LifecycleMap() {
  return (
    <section
      id="lifecycle"
      className="relative w-full bg-[#F6F9FC] py-16 sm:py-20 lg:py-[100px]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-3.5"
          >
            <div className="inline-flex items-center rounded-[6px] bg-[#EEE9FD] px-2.5 py-1">
              <span className="text-[11.6px] font-semibold uppercase tracking-[0.1034em] text-[#7657E8]">
                Lifecycle map
              </span>
            </div>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A]">
              Six steps. None of them means the same thing.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center rounded-[6px] border border-dashed border-[#C5CBE0] px-3 py-1.5 self-start md:self-auto"
          >
            <span className="text-[12px] font-normal text-[#5B6678]">
              Proposed workflow · informational only
            </span>
          </motion.div>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-14 md:gap-x-6 lg:gap-x-8">
          {lifecycleSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-[16px] bg-white p-6 sm:p-7 pt-9 shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)] transition-all hover:shadow-[0px_16px_36px_rgba(36,59,115,0.12)] ${
                step.isOutsideScope
                  ? "border border-dashed border-[#C5CBE0]"
                  : "border border-[#E3E8F2]"
              }`}
            >
              {/* Floating Number Badge */}
              <div
                className={`absolute -top-5 left-6 flex h-[46px] w-[46px] items-center justify-center rounded-full border-4 border-[#F6F9FC] shadow-sm ${
                  step.isOutsideScope ? "bg-white" : "bg-[#243B73]"
                }`}
              >
                {step.isOutsideScope && (
                  <div className="absolute inset-[3px] rounded-full border-2 border-dashed border-[#9AA3B8]" />
                )}
                <span
                  className={`font-poppins text-[15px] font-semibold ${
                    step.isOutsideScope ? "text-[#5B6678]" : "text-white"
                  }`}
                >
                  {step.step}
                </span>
              </div>

              {/* Outside Scope Tag if applicable */}
              {step.isOutsideScope && (
                <div className="mb-3 inline-block rounded-[6px] bg-[#FFF4E0] px-2.5 py-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#7A4B00]">
                    Outside Zoiko Access scope
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="font-poppins text-[19px] font-semibold text-[#16245A] mb-4">
                {step.title}
              </h3>

              {/* Attributes List */}
              <dl className="flex flex-col gap-3 pt-1 border-t border-[#F0F4F8]">
                {/* 1. Responsible Party */}
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7657E8]">
                    Responsible party
                  </dt>
                  <dd className="mt-0.5 text-[14px] leading-[1.5] text-[#273444]">
                    {step.responsible}
                  </dd>
                </div>

                {/* 2. Evidence */}
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7657E8]">
                    Evidence
                  </dt>
                  <dd className="mt-0.5 text-[14px] leading-[1.5] text-[#273444]">
                    {step.evidence}
                  </dd>
                </div>

                {/* 3. Does Not Establish */}
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7657E8]">
                    Does not establish
                  </dt>
                  <dd className="mt-0.5 text-[14px] leading-[1.5] text-[#273444]">
                    {step.doesNotEstablish}
                  </dd>
                </div>

                {/* 4. Possible Next Step */}
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7657E8]">
                    Possible next step
                  </dt>
                  <dd className="mt-0.5 text-[14px] leading-[1.5] text-[#273444]">
                    {step.nextStep}
                  </dd>
                </div>
              </dl>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
