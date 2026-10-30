"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const qualityLegend = [
  {
    term: "Publisher",
    def: "Who published it and is responsible for it.",
  },
  {
    term: "Verification date",
    def: "When it was last checked.",
  },
  {
    term: "Scope",
    def: "Which places and services it covers.",
  },
  {
    term: "Limitations",
    def: "What it can't confirm.",
  },
  {
    term: "Unknown",
    def: "Any missing status is never assumed.",
  },
];

export default function InformationQuality() {
  return (
    <section className="w-full bg-white py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Heading & Quality Legend */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
                04 / Information quality
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] sm:text-[40px] [font-family:var(--font-poppins)]">
              4. What you can rely on.
            </h2>

            {/* Description */}
            <p className="mt-3.5 text-[16px] leading-[25.6px] text-[#273444]">
              Check four things before relying on any published information.
            </p>

            {/* Legend Card */}
            <div className="mt-6 w-full rounded-[16px] border border-[#E3E8F2] bg-white p-6 shadow-sm sm:p-7">
              <h3 className="text-[16px] font-semibold leading-[21.6px] text-[#16245A] [font-family:var(--font-poppins)]">
                Information-quality legend
              </h3>
              <p className="mt-1 text-[12.5px] leading-[20px] text-[#5B6678]">
                If any detail is missing, it&apos;s shown as unknown.
              </p>

              {/* Definition List */}
              <dl className="mt-4 flex flex-col gap-3">
                {qualityLegend.map((item) => (
                  <div
                    key={item.term}
                    className="flex flex-col border-b border-[#F0F4F8] pb-2.5 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  >
                    <dt className="text-[14px] font-semibold text-[#16245A] sm:min-w-[130px]">
                      {item.term}
                    </dt>
                    <dd className="text-[14px] leading-[22.4px] text-[#5B6678]">
                      {item.def}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>

          {/* Right Column: Visual Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-[449px] rounded-[24px] p-3 shadow-[0px_20px_50px_0px_rgba(36,59,115,0.14)]"
              style={{
                background:
                  "linear-gradient(124deg, rgba(220, 211, 251, 1) 0%, rgba(199, 211, 245, 1) 100%)",
              }}
            >
              <div className="relative h-[380px] w-full overflow-hidden rounded-[20px] sm:h-[460px] lg:h-[520px]">
                <Image
                  src="/understand-your-options/reading-carefully.webp"
                  alt="Person reading healthcare information carefully"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
