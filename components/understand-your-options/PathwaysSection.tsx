"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const flowItems = [
  {
    num: "1",
    entity: "You or your clinician",
    action: "Starts the request",
  },
  {
    num: "2",
    entity: "Zoiko Access",
    action: "Coordinates information",
  },
  {
    num: "3",
    entity: "Receiving organization",
    action: "Receives it",
  },
  {
    num: "4",
    entity: "Authorized professional",
    action: "Accepts or declines",
  },
];

export default function PathwaysSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Responsibilities Panel */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[18px] border border-[#E3E8F2] bg-white p-6 shadow-[0px_14px_36px_0px_rgba(36,59,115,0.07)] sm:p-8"
          >
            <h3 className="text-[17px] font-semibold leading-[22.95px] text-[#16245A] [font-family:var(--font-poppins)]">
              Who is responsible along the way
            </h3>

            {/* Flow List */}
            <ol className="mt-5 flex flex-col gap-3">
              {flowItems.map((item) => (
                <li
                  key={item.num}
                  className="flex items-center justify-between rounded-[12px] border border-[#E3E8F2] bg-[#FBFAFF] px-4 py-3 transition-colors hover:border-[#D2C7FF]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7657E8] text-[12px] font-bold text-white">
                      {item.num}
                    </span>
                    <span className="text-[14.5px] font-medium leading-[23.2px] text-[#16245A]">
                      {item.entity}
                    </span>
                  </div>

                  <span className="text-[12px] text-[#5B6678]">
                    {item.action}
                  </span>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Right Column: Information & Link */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
                02 / Pathways
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] sm:text-[40px] [font-family:var(--font-poppins)]">
              2. Understand care pathways.
            </h2>

            {/* Description */}
            <p className="mt-4 text-[16px] leading-[25.6px] text-[#273444]">
              A care pathway is how information and responsibility move between
              organizations. Coordinating information is different from providing
              care.
            </p>

            {/* Muted subtext */}
            <p className="mt-3 text-[15px] leading-[24px] text-[#5B6678]">
              Referrals are accepted only by authorized professionals.
            </p>

            {/* Link */}
            <div className="mt-7">
              <Link
                href="/care-pathways"
                className="inline-flex items-center text-[14.5px] font-semibold text-[#7657E8] transition-colors hover:text-[#5d3ec9]"
              >
                Care pathways explained →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
