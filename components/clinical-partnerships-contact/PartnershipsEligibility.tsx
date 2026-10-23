"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const whoThisIsFor = [
  "Hospital and clinic clinical leads.",
  "Independent licensed clinicians asking about participation.",
  "Care coordination administrators.",
  "Institutions looking at integration and escalation ownership.",
];

const whatItIsNotFor = [
  "Patient-specific medical questions.",
  "Urgent care or emergencies.",
  "Diagnosis or referral decisions.",
  "Technical or API support.",
];

export default function PartnershipsEligibility() {
  return (
    <section
      id="eligibility"
      className="relative w-full border-b border-[#E1DBF9] bg-[#FAF9FD] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Rail / Section Tag */}
        <div className="inline-flex items-center gap-3">
          <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
          <span className="text-[11.8px] font-semibold tracking-wide text-[#5B47D6]">
            Eligibility
          </span>
        </div>

        {/* Section Heading */}
        <div className="mt-3.5 max-w-[800px]">
          <h2 className="text-[28px] font-semibold leading-[1.18] tracking-tight text-[#1B1750] sm:text-[36.8px]">
            Who this is for, and what it is not for
          </h2>
        </div>

        {/* Two Panels */}
        <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Panel 1: Who this is for (Light Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-[16px] border border-[#E1DBF9] bg-white p-7 sm:p-9 shadow-sm"
          >
            <div>
              <h3 className="text-[17.6px] font-semibold text-[#1B1750]">Who this is for</h3>
              <p className="mt-2 text-[15.5px] leading-[1.65] text-[#575387]">
                Qualified professionals and organizations exploring a partnership conversation.
              </p>

              <ul className="mt-6 flex flex-col gap-3.5">
                {whoThisIsFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EFEBFE] mt-0.5">
                      <Image
                        src="/clinical-partnerships-contact/icon-check.svg"
                        alt=""
                        width={10}
                        height={10}
                        className="h-2.5 w-2.5"
                      />
                    </div>
                    <span className="text-[15.5px] leading-[1.6] text-[#575387]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Panel 2: What it is not for (Dark Indigo Gradient Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between rounded-[16px] bg-gradient-to-br from-[#282063] to-[#301FC0] p-7 sm:p-9 text-white shadow-md"
          >
            <div>
              <h3 className="text-[17.6px] font-semibold text-white">What it is not for</h3>
              <p className="mt-2 text-[15.5px] leading-[1.65] text-[#E6E1FF]">
                This is not a patient or emergency route. We never ask for identity documents or
                credentials here.
              </p>

              <ul className="mt-6 flex flex-col gap-3.5">
                {whatItIsNotFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 mt-0.5">
                      <Image
                        src="/clinical-partnerships-contact/icon-cross.svg"
                        alt=""
                        width={9}
                        height={9}
                        className="h-2.5 w-2.5"
                      />
                    </div>
                    <span className="text-[15.5px] leading-[1.6] text-[#E6E1FF]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
