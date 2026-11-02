"use client";

import { motion } from "framer-motion";

export default function ComparisonSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
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
              Information vs action
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] sm:text-[40px] [font-family:var(--font-poppins)]">
            Information is not a booking.
          </h2>
        </motion.div>

        {/* Comparison Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-9 overflow-hidden rounded-[18px] border border-[#E3E8F2] bg-white shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Information */}
            <div className="p-6 sm:p-8">
              <h3 className="text-[18px] font-semibold leading-[24.3px] text-[#16245A] [font-family:var(--font-poppins)]">
                Information
              </h3>

              <ul className="mt-4 flex flex-col gap-3">
                <li className="flex items-start gap-2.5 text-[14.5px] leading-[23.2px] text-[#273444]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7657E8]" />
                  <span>
                    <strong className="font-bold text-[#273444]">Published</strong> —
                    described on the site
                  </span>
                </li>

                <li className="flex items-start gap-2.5 text-[14.5px] leading-[23.2px] text-[#273444]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7657E8]" />
                  <span>
                    <strong className="font-bold text-[#273444]">Available</strong> —
                    offered in a location, where verified
                  </span>
                </li>

                <li className="flex items-start gap-2.5 text-[14.5px] leading-[23.2px] text-[#273444]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7657E8]" />
                  <span>Always readable, even when live services are off</span>
                </li>
              </ul>
            </div>

            {/* Right: Action */}
            <div className="border-t border-[#E3E8F2] bg-[#FBFAFF] p-6 sm:p-8 md:border-l md:border-t-0">
              <h3 className="text-[18px] font-semibold leading-[24.3px] text-[#16245A] [font-family:var(--font-poppins)]">
                Action
              </h3>

              <ul className="mt-4 flex flex-col gap-3">
                <li className="flex items-start gap-2.5 text-[14.5px] leading-[23.2px] text-[#273444]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7657E8]" />
                  <span>
                    <strong className="font-bold text-[#273444]">Request sent</strong> —
                    delivered to an organization
                  </span>
                </li>

                <li className="flex items-start gap-2.5 text-[14.5px] leading-[23.2px] text-[#273444]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7657E8]" />
                  <span>
                    <strong className="font-bold text-[#273444]">Confirmed</strong> —
                    explicitly accepted by the responsible provider
                  </span>
                </li>

                <li className="flex items-start gap-2.5 text-[14.5px] leading-[23.2px] text-[#273444]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7657E8]" />
                  <span>Only through approved, active pathways</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
