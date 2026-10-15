"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STATUS_GLOSSARY = [
  {
    status: "Submitted",
    definition: "A request has been sent through the authorized workflow.",
  },
  {
    status: "Received",
    definition:
      "The destination acknowledges receipt. Clinical review is separate.",
  },
  {
    status: "Accepted / confirmed",
    definition:
      "The responsible organization explicitly accepts or confirms the relevant action.",
  },
  {
    status: "Follow-up needed",
    definition:
      "The responsible team requires another permitted step or clarification.",
  },
  {
    status: "Closed / canceled",
    definition:
      "The source reports closure or cancellation; its meaning depends on that workflow.",
  },
] as const;

export default function Step4Status() {
  return (
    <section
      id="step-4"
      className="w-full bg-white py-16 sm:py-20 lg:py-[76px] font-sans border-b border-[#DFE5F0]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Heading + Status Table */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.1364em] text-[#6547BF]">
              04 / RESPONSIBILITY & STATUS
            </span>

            <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-[-0.0167em] text-[#243B73] sm:text-[36px] sm:leading-[43.2px]">
              4. Understand what happens next.
            </h2>

            <p className="mt-5 text-[16px] font-normal leading-[1.75] text-[#5E6B7D] sm:text-[18px] sm:leading-[31.5px]">
              Where supported, follow the status provided by the responsible
              organization and understand who owns the next action. A delivered
              message is not proof that a clinician has reviewed it.
            </p>

            <p className="mt-4 text-[15px] font-normal leading-[1.75] text-[#5E6B7D] sm:text-[16px] sm:leading-[28px]">
              Statuses below are definitions, not a patient timeline or the
              state of an actual request. Each real update needs an authoritative
              source and clear responsibility.
            </p>

            {/* Status Glossary Card */}
            <div className="mt-8 w-full rounded-[14px] border border-[#DFE5F0] bg-white p-6 sm:p-7 shadow-sm">
              <h3 className="text-[19px] font-bold leading-snug tracking-[-0.0316em] text-[#243B73]">
                A plain-language status glossary.
              </h3>
              <p className="mt-1 text-[12px] font-normal text-[#5E6B7D]">
                Illustrative meanings—not live case information
              </p>

              <div className="mt-5 divide-y divide-[#DFE5F0]">
                {STATUS_GLOSSARY.map((row) => (
                  <div
                    key={row.status}
                    className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-[190px_1fr] sm:gap-4 sm:items-baseline"
                  >
                    <span className="text-[13px] font-bold text-[#243B73]">
                      {row.status}
                    </span>
                    <span className="text-[13px] leading-[22.75px] text-[#5E6B7D]">
                      {row.definition}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Healthcare Consultation Photo */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex w-full justify-center lg:justify-end"
          >
            <div className="relative h-[480px] w-full max-w-[560px] overflow-hidden rounded-[14px] border border-[#DFE5F0] shadow-md sm:h-[580px] lg:h-[700px]">
              <Image
                src="/how-it-works/healthcare-consultation.png"
                alt="Stock photo — healthcare consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
