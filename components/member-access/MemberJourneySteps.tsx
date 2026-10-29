"use client";

import { motion } from "framer-motion";

const steps = [
  {
    stepNumber: "1",
    title: "Identify your plan and its authorized contact",
    owner: "Member, with the plan",
    proofNeeded: "Plan membership details from the plan",
    notProven: "Coverage for any service",
    next: "Check approved benefits information",
  },
  {
    stepNumber: "2",
    title: "Check source-approved benefits information",
    owner: "Payer / administrator",
    proofNeeded: "Plan's own documents and terms",
    notProven: "Authorization or payment",
    next: "Start an allowed request",
  },
  {
    stepNumber: "3",
    title: "Start an allowed request with the responsible organization",
    owner: "The organization responsible",
    proofNeeded: "Identity, permission and purpose",
    notProven: "Any decision or outcome",
    next: "Follow up with that organization",
  },
  {
    stepNumber: "4",
    title: "Follow up using that organization's verified status",
    owner: "The issuing organization",
    proofNeeded: "Issuer and verified timestamp",
    notProven: "Anything beyond the stated status",
    next: "Act on the issuer's guidance",
  },
];

export default function MemberJourneySteps() {
  return (
    <section
      id="journey"
      className="relative w-full overflow-hidden py-16 md:py-20 lg:py-[70px]"
      style={{
        background: `
          radial-gradient(circle at 85% 20%, rgba(183, 0, 220, 0.45) 0%, rgba(118, 87, 232, 0) 60%),
          linear-gradient(135deg, rgba(10, 26, 75, 1) 51%, rgba(53, 80, 184, 1) 100%),
          linear-gradient(180deg, rgba(247, 244, 255, 0.08) 0%, rgba(238, 243, 253, 0.04) 100%)
        `,
      }}
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-[780px]">
          <div className="inline-flex w-fit items-center rounded-full bg-white px-4 py-1.5 shadow-[0px_4px_14px_0px_rgba(118,87,232,0.1)]">
            <span className="text-[13px] font-semibold leading-[20.8px] text-[#7657E8]">
              The member journey
            </span>
          </div>

          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] text-white tracking-[-0.01em]">
            Four steps, each with a clear owner.
          </h2>

          <p className="max-w-[640px] text-[16px] sm:text-[17px] font-normal leading-[27.2px] text-white/90">
            A conceptual journey — no real member statuses or completion are shown.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <motion.div
              key={item.stepNumber}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-between rounded-[24px] p-6 sm:p-7 border border-white/20 shadow-[0px_12px_30px_0px_rgba(36,59,115,0.12)] transition-all duration-300 hover:border-white/40 hover:-translate-y-1"
              style={{
                background: "rgba(154, 156, 249, 0.28)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div>
                {/* Step Number Circle */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 border border-white/30 text-white font-poppins text-[24px] font-semibold">
                  {item.stepNumber}
                </div>

                {/* Step Title */}
                <h3 className="mt-5 font-poppins text-[17.5px] font-semibold leading-[23.6px] text-white min-h-[48px]">
                  {item.title}
                </h3>
              </div>

              {/* Definition list */}
              <dl className="mt-6 flex flex-col gap-3.5 border-t border-white/15 pt-5">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#A58BF5]">
                    Owner
                  </dt>
                  <dd className="mt-0.5 text-[14px] leading-[21px] text-white/95">
                    {item.owner}
                  </dd>
                </div>

                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#A58BF5]">
                    Proof needed
                  </dt>
                  <dd className="mt-0.5 text-[14px] leading-[21px] text-white/95">
                    {item.proofNeeded}
                  </dd>
                </div>

                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#A58BF5]">
                    Not proven
                  </dt>
                  <dd className="mt-0.5 text-[14px] leading-[21px] text-white/95">
                    {item.notProven}
                  </dd>
                </div>

                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#A58BF5]">
                    Next
                  </dt>
                  <dd className="mt-0.5 text-[14px] leading-[21px] text-white/95">
                    {item.next}
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
