"use client";

import { motion } from "framer-motion";

const supportPaths = [
  {
    title: "Help Center",
    description: "Self-service guidance, always available.",
  },
  {
    title: "Staffed contact",
    description: "Shown only where an approved team is available.",
  },
  {
    title: "Care questions",
    description: "Ask your healthcare provider.",
  },
  {
    title: "Emergencies",
    description: "Contact local emergency services.",
  },
];

export default function SupportPlatform() {
  return (
    <section
      className="w-full py-16 lg:py-[70px]"
      style={{
        background:
          "linear-gradient(270deg, rgba(210, 199, 255, 1) 0%, rgba(246, 243, 255, 1) 100%), linear-gradient(180deg, rgba(246, 243, 255, 1) 0%, rgba(239, 234, 254, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[70px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Heading and description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            {/* Kicker */}
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
              03 / Support
            </span>

            {/* Heading */}
            <h2 className="mt-3 text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] [font-family:var(--font-poppins)]">
              3. Talk to support about the
              <br />
              platform.
            </h2>

            {/* Paragraphs */}
            <p className="mt-4 text-[16px] leading-[25.6px] text-[#273444]">
              Support helps with using Zoiko Access — accounts, pages and how things work.
            </p>

            <p className="mt-2 text-[15px] leading-[24px] text-[#5B6678]">
              It isn&apos;t clinical advice or emergency response.
            </p>
          </motion.div>

          {/* Right Column: Safe support paths panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-[18px] border border-[#E3E8F2] bg-white p-7 shadow-[0px_14px_36px_0px_rgba(36,59,115,0.07)]"
          >
            <h3 className="text-[17px] font-semibold leading-[22.95px] text-[#16245A] [font-family:var(--font-poppins)]">
              Safe support paths
            </h3>

            {/* Support Paths List */}
            <div className="mt-4 flex flex-col">
              {supportPaths.map((path, idx) => (
                <div
                  key={path.title}
                  className={`flex flex-col py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${
                    idx > 0 ? "border-t border-[#E3E8F2]" : ""
                  }`}
                >
                  <b className="text-[15px] font-semibold text-[#16245A] [font-family:var(--font-poppins)]">
                    {path.title}
                  </b>
                  <span className="mt-1 text-[14px] leading-[22.4px] text-[#5B6678] sm:mt-0 sm:text-right">
                    {path.description}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
