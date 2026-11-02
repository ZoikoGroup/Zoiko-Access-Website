"use client";

import { motion } from "framer-motion";

const capabilityLevels = [
  {
    code: "P0 · Information",
    description: "General guides, always readable.",
  },
  {
    code: "P1 · Local discovery",
    description: "Verified local listings, where published.",
  },
  {
    code: "P2 · Partner actions",
    description: "Requests with authorized partners only.",
  },
  {
    code: "PX · Paused",
    description: "Live options hidden; information stays.",
  },
];

export default function LocationEntitlement() {
  return (
    <section
      className="w-full py-16 lg:py-[70px]"
      style={{
        background:
          "linear-gradient(270deg, rgba(210, 199, 255, 1) 0%, rgba(246, 243, 255, 1) 100%), linear-gradient(180deg, rgba(246, 243, 255, 1) 0%, rgba(239, 234, 254, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[70px]">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5">
          <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
            Location &amp; entitlement
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] [font-family:var(--font-poppins)]">
          Availability depends on location and provider.
        </h2>

        {/* Lead */}
        <p className="mt-2.5 max-w-[760px] text-[16.5px] leading-[26.4px] text-[#5B6678]">
          The location you choose isn&apos;t an entitlement. Each capability level is verified separately; if it can&apos;t
          be verified, live options stay off.
        </p>

        {/* 4 Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityLevels.map((lvl, idx) => (
            <motion.div
              key={lvl.code}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex min-h-[111px] flex-col justify-center rounded-[14px] border border-[#E3E8F2] bg-white p-5 shadow-[0px_8px_20px_0px_rgba(36,59,115,0.04)] transition-all hover:shadow-[0px_12px_24px_0px_rgba(36,59,115,0.08)]"
            >
              <span className="text-[14px] font-bold leading-[22.4px] text-[#7657E8]">
                {lvl.code}
              </span>
              <p className="mt-1 text-[14px] leading-[22.4px] text-[#5B6678]">
                {lvl.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
