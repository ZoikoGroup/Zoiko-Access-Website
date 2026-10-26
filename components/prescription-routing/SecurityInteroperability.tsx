"use client";

import { motion } from "framer-motion";

const flowSteps = [
  {
    title: "Source system",
    subtitle: "Prescriber's record",
  },
  {
    title: "Secure transport",
    subtitle: "Encrypted and authorized",
  },
  {
    title: "Approved endpoint",
    subtitle: "Pharmacy system",
  },
  {
    title: "Audit",
    subtitle: "Events are logged",
  },
];

const boundaryPills = [
  "Source stays authoritative",
  "No names, logos or guarantees",
  "Authorization",
  "Least data",
];

export default function SecurityInteroperability() {
  return (
    <section id="security" className="w-full bg-[#F6F9FC] py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-full max-w-[1344px] rounded-[24px] p-8 sm:p-12 lg:p-[48px] shadow-xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(165, 8, 189, 0.95) 0%, rgba(0, 36, 143, 0.95) 36%, rgba(1, 0, 63, 0.98) 100%)",
        }}
      >
        {/* Header Block */}
        <div className="flex flex-col gap-2.5 pb-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold leading-[21px] text-[#9A82F0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7657E8]" aria-hidden="true" />
            <span>Security and interoperability</span>
          </div>

          {/* Heading */}
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[36.8px] font-semibold leading-[1.12] text-white">
            Designed for accountable integration.
          </h2>

          {/* Paragraph */}
          <p className="max-w-[646px] pt-1 text-[16px] font-normal leading-[26px] text-[#CDD8F7]">
            Standards-based system connections may support controlled information exchange
            while participating clinical and pharmacy systems remain authoritative for their
            records and decisions.
          </p>
        </div>

        {/* Generic Data Flow Row */}
        <div className="pt-2 pb-6">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-3 sm:gap-4">
            {flowSteps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-3 sm:gap-4 flex-1 min-w-[200px]">
                <div className="w-full rounded-[14px] border border-white/20 bg-white/[0.08] p-4 py-3.5 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.12] hover:border-white/35">
                  <b className="block font-poppins text-[13.6px] font-bold leading-[22px] text-white">
                    {step.title}
                  </b>
                  <span className="block font-inter text-[13.6px] font-normal leading-[22px] text-[#CDD8F7]">
                    {step.subtitle}
                  </span>
                </div>

                {/* Arrow connecting to next box */}
                {idx < flowSteps.length - 1 && (
                  <span className="hidden lg:inline-block text-[20px] font-bold text-[#9A82F0] select-none shrink-0" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Boundary Guard Pills */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          {boundaryPills.map((pill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center rounded-full border border-white/30 px-3.5 py-1.5 font-inter text-[12.8px] font-normal leading-[21px] text-white backdrop-blur-sm"
            >
              {pill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
