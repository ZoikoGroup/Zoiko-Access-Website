"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const integrationSteps = [
  {
    step: "1 · request",
    stepTagColor: "text-[#5B6678]",
    title: "Member-facing experience",
    titleColor: "text-[#16245A]",
    bgColor: "bg-white",
    borderColor: "border-[#DCD3FB]",
    strokeSvg: "/member-access/int-step-1-bg.svg",
    explanation: (
      <>
        <strong className="font-bold text-[#16245A]">Member-facing experience </strong>
        sends a request.
      </>
    ),
  },
  {
    step: "2 · fail closed",
    stepTagColor: "text-[#E9E3FF]",
    title: "Permission & jurisdiction checks",
    titleColor: "text-white",
    bgColor: "bg-[#7657E8]",
    borderColor: "border-transparent",
    strokeSvg: "/member-access/int-step-2-bg.svg",
    explanation: (
      <>
        <strong className="font-bold text-[#16245A]">Permission &amp; jurisdiction checks </strong>
        confirm identity, role, purpose and location — and stop if any fails.
      </>
    ),
  },
  {
    step: "3 · approved scope only",
    stepTagColor: "text-[#5B6678]",
    title: "Partner-governed API",
    titleColor: "text-[#16245A]",
    bgColor: "bg-white",
    borderColor: "border-[#DCD3FB]",
    strokeSvg: "/member-access/int-step-3-bg.svg",
    explanation: (
      <>
        <strong className="font-bold text-[#16245A]">Partner-governed API </strong>
        carries only the approved request.
      </>
    ),
  },
  {
    step: "4 · source of truth",
    stepTagColor: "text-[#C9D5F5]",
    title: "Payer authoritative records",
    titleColor: "text-white",
    bgColor: "bg-[#243B73]",
    borderColor: "border-transparent",
    strokeSvg: "/member-access/int-step-4-bg.svg",
    explanation: (
      <>
        <strong className="font-bold text-[#16245A]">Payer authoritative records </strong>
        answer and stay the source of truth.
      </>
    ),
  },
];

export default function ConceptIntegration() {
  return (
    <section
      id="concept-integration"
      className="w-full bg-white py-16 md:py-20 lg:py-[70px] border-y border-[#E3E8F2]/60"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto flex flex-col items-center text-center gap-4 max-w-[780px]">
          <div className="inline-flex items-center rounded-full bg-white px-4 py-1.5 border border-[#DCD3FB] shadow-[0px_4px_14px_0px_rgba(118,87,232,0.1)]">
            <span className="text-[13px] font-semibold leading-[20.8px] text-[#7657E8]">
              Concept integration
            </span>
          </div>

          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] text-[#16245A] tracking-[-0.01em]">
            How the pieces could connect.
          </h2>

          <p className="max-w-[640px] text-[16px] sm:text-[17px] font-normal leading-[27.2px] text-[#5B6678]">
            Conceptual drawing — no vendors, logos or certifications implied.
          </p>
        </div>

        {/* 4 Process Blocks Flow */}
        <div className="mt-14 relative">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {integrationSteps.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="flex flex-col gap-5"
              >
                {/* Block Card */}
                <div
                  className={`relative flex flex-col justify-center rounded-[20px] p-6 sm:p-7 shadow-[0px_10px_24px_0px_rgba(36,59,115,0.08)] border ${item.borderColor} ${item.bgColor} min-h-[142px] transition-all duration-200 hover:-translate-y-1`}
                >
                  <span
                    className={`font-inter text-[13.5px] font-normal leading-[22px] ${item.stepTagColor}`}
                  >
                    {item.step}
                  </span>
                  <h3
                    className={`mt-2 font-poppins text-[19px] sm:text-[20px] font-semibold leading-[26px] ${item.titleColor}`}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Sub-explanation list item */}
                <p className="text-[14.5px] font-normal leading-[23.2px] text-[#5B6678] px-1">
                  {item.explanation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
