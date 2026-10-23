"use client";

import { motion } from "framer-motion";

const codeLines = [
  { keyword: "events", comment: "// controlled, named" },
  { keyword: "idempotency", comment: "// duplicates do not repeat" },
  { keyword: "timestamps", comment: "// from the source" },
  { keyword: "partner state", comment: "// signed" },
  { keyword: "observability", comment: "// audit trail" },
  { keyword: "stale capacity", comment: "// never shown as live" },
];

export default function TechnicalBoundaries() {
  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(90deg, #081770 0%, #2A29C1 50%, #6C3EEB 100%)",
      }}
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Heading and Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3 lg:col-span-6"
          >
            {/* Eyebrow */}
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#C9B8FF] uppercase">
              TECHNICAL INTEGRATION BOUNDARIES
            </span>

            {/* Heading */}
            <h2 className="text-[34px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[42px]">
              Controlled events, not
              <br />
              shared control
            </h2>

            {/* Description */}
            <p className="mt-2 text-[16px] leading-[1.68] text-[#D8DCFF]">
              A proposed, standards-based approach. It needs partner and market
              activation and makes no claim about named systems.
            </p>
          </motion.div>

          {/* Right Column: Code Snippet Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex flex-col lg:col-span-6"
          >
            <div className="rounded-[22px] border border-white/15 bg-[#02125F]/60 p-7 shadow-2xl backdrop-blur-md sm:p-8">
              <div className="flex flex-col gap-3 font-mono">
                {codeLines.map((line, idx) => (
                  <div
                    key={idx}
                    className="flex flex-wrap items-baseline gap-2.5 text-[15px] sm:text-[16px]"
                  >
                    <span className="font-bold text-[#C9B8FF]">
                      {line.keyword}
                    </span>
                    <span className="font-normal text-[#D8DCFF]/85">
                      {line.comment}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
