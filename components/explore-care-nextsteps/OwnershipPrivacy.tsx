"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ownershipRows = [
  {
    role: "Clinician",
    detail: "Clinical decisions and referral acceptance.",
  },
  {
    role: "Scheduling partner",
    detail: "Appointment confirmation or decline.",
  },
  {
    role: "Patient",
    detail: "Your choices, consent and follow-up.",
  },
  {
    role: "Zoiko Access",
    detail: "Coordination and status display — no shared master patient record.",
  },
];

const privacyRows = [
  {
    topic: "Consent",
    detail: "You decide what's shared, where applicable.",
  },
  {
    topic: "Caregivers",
    detail: "Need verified authority to act for you.",
  },
];

export default function OwnershipPrivacy() {
  return (
    <section className="w-full bg-[#F6F9FC] py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[70px]">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5">
          <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
            Ownership &amp; privacy
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] [font-family:var(--font-poppins)]">
          Every next action has an owner.
        </h2>

        {/* Two Panels Side by Side */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Panel 1: Who owns the next action? */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-[18px] border border-[#E3E8F2] bg-white p-7 shadow-[0px_14px_36px_0px_rgba(36,59,115,0.07)]"
          >
            <div>
              <h3 className="text-[17px] font-semibold leading-[22.95px] text-[#16245A] [font-family:var(--font-poppins)]">
                Who owns the next action?
              </h3>

              <div className="mt-5 flex flex-col">
                {ownershipRows.map((row, idx) => (
                  <div
                    key={row.role}
                    className={`flex flex-col py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${
                      idx > 0 ? "border-t border-[#E3E8F2]" : ""
                    }`}
                  >
                    <b className="text-[15px] font-semibold text-[#16245A] [font-family:var(--font-poppins)] sm:w-[170px] shrink-0">
                      {row.role}
                    </b>
                    <span className="mt-1 text-[14px] leading-[22.4px] text-[#5B6678] sm:mt-0 sm:text-right">
                      {row.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Panel 2: Protect information at every step */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-between rounded-[18px] border border-[#E3E8F2] bg-white p-7 shadow-[0px_14px_36px_0px_rgba(36,59,115,0.07)]"
          >
            <div>
              <h3 className="text-[17px] font-semibold leading-[22.95px] text-[#16245A] [font-family:var(--font-poppins)]">
                Protect information at every step
              </h3>

              <p className="mt-3 text-[15px] leading-[24px] text-[#5B6678]">
                Personal details are shared only inside verified partner pathways after you sign in. Never through public
                pages or web addresses.
              </p>

              <div className="mt-5 flex flex-col">
                {privacyRows.map((row, idx) => (
                  <div
                    key={row.topic}
                    className={`flex flex-col py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${
                      idx > 0 ? "border-t border-[#E3E8F2]" : ""
                    }`}
                  >
                    <b className="text-[15px] font-semibold text-[#16245A] [font-family:var(--font-poppins)] sm:w-[150px] shrink-0">
                      {row.topic}
                    </b>
                    <span className="mt-1 text-[14px] leading-[22.4px] text-[#5B6678] sm:mt-0 sm:text-right">
                      {row.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-2">
              <Link
                href="/privacy-permissions"
                className="inline-flex items-center justify-center rounded-[10px] border border-[#D9CFFB] bg-white px-5 py-2.5 text-[14.5px] font-semibold text-[#7657E8] shadow-sm transition-colors hover:bg-[#F6F9FC]"
              >
                Privacy &amp; permissions →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
