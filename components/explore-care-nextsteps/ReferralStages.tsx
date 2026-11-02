"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const referralStages = [
  { step: "1", title: "Created", role: "Clinician or you, where allowed" },
  { step: "2", title: "Dispatched", role: "Sending organization" },
  { step: "3", title: "Received", role: "Receiving organization" },
  { step: "4", title: "Reviewed", role: "Authorized professional" },
  { step: "5", title: "Accepted or declined", role: "Authorized professional" },
];

export default function ReferralStages() {
  return (
    <section id="referrals" className="w-full bg-[#F6F9FC] py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[70px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Panel with 5 stages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[18px] border border-[#E3E8F2] bg-white p-7 shadow-[0px_14px_36px_0px_rgba(36,59,115,0.07)]"
          >
            <h3 className="text-[17px] font-semibold leading-[22.95px] text-[#16245A] [font-family:var(--font-poppins)]">
              A referral, stage by stage
            </h3>

            {/* Flow list */}
            <ol className="mt-4 space-y-2.5">
              {referralStages.map((stage) => (
                <li
                  key={stage.step}
                  className="flex items-center justify-between rounded-[10px] border border-[#E3E8F2] bg-[#FBFAFF] px-3.5 py-2.5 transition-colors hover:border-[#D9CFFB]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#7657E8] text-[12px] font-bold text-white">
                      {stage.step}
                    </span>
                    <span className="text-[14.5px] font-medium leading-[23.2px] text-[#16245A]">
                      {stage.title}
                    </span>
                  </div>
                  <span className="text-[12px] leading-[19.2px] text-[#5B6678]">
                    {stage.role}
                  </span>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Right Column: Heading, description, CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-start"
          >
            {/* Kicker */}
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
              02 / Referrals
            </span>

            {/* Heading */}
            <h2 className="mt-3 text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] [font-family:var(--font-poppins)]">
              2. How referrals work.
            </h2>

            {/* Paragraphs */}
            <p className="mt-4 text-[16px] leading-[25.6px] text-[#273444]">
              Referrals usually start with a clinician. Some places also allow self-referral — local policy and authority
              decide.
            </p>

            <p className="mt-2 text-[15px] leading-[24px] text-[#5B6678]">
              Each stage is separate: sent isn&apos;t received, and received isn&apos;t accepted.
            </p>

            {/* Outline Button */}
            <div className="mt-6">
              <Link
                href="/how-referrals-work"
                className="inline-flex items-center justify-center rounded-[10px] border border-[#D9CFFB] bg-white px-5 py-2.5 text-[14.5px] font-semibold text-[#7657E8] shadow-sm transition-colors hover:bg-[#F6F9FC]"
              >
                How referrals work →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
