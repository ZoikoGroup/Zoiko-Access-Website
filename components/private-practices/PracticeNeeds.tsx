"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pairs = [
  {
    image: "/private-practices/practice-needs-1.png",
    challengeTitle: "Patient inquiries and access",
    challengeDesc: "People ask how to reach the practice, and where.",
    approachTitle: "Patient inquiries and access",
    approachDesc:
      "Help people find published information and send an authorized request, which the practice answers itself.",
  },
  {
    image: "/private-practices/practice-needs-2.png",
    challengeTitle: "Referrals and follow-up",
    challengeDesc:
      "Referrals and the follow-up that comes after them are tracked in several places.",
    approachTitle: "Referrals and follow-up",
    approachDesc:
      "Show each referral’s status from the responsible organization, so next steps are clear.",
  },
  {
    image: "/private-practices/practice-needs-3.png",
    challengeTitle: "Administrative workload and handoffs",
    challengeDesc: "Small teams handle many handoffs by hand.",
    approachTitle: "Administrative workload and handoffs",
    approachDesc:
      "Make who owns each next step visible. No result is promised, and no staff-time figure is claimed.",
  },
];

export default function PracticeNeeds() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
            PRACTICE NEEDS
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#031974]">
            Three everyday pressures, and the intended design
          </h2>
          <p className="mt-4 max-w-[760px] text-[16px] sm:text-[18px] font-normal leading-[1.65] text-[#273444]">
            This shows intent, not results. No staff-time, wait-time,
            patient-count or outcome figures are claimed.
          </p>
        </motion.div>

        {/* Pairs list */}
        <div className="mt-12 flex flex-col gap-6 lg:gap-7">
          {pairs.map((item, idx) => (
            <motion.div
              key={item.challengeTitle}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-4"
            >
              {/* Left Challenge Card */}
              <div className="flex flex-1 flex-col sm:flex-row items-center overflow-hidden rounded-[24px] border border-[#D9D3F5] bg-white transition-all hover:shadow-md">
                {/* 150x150 Image */}
                <div className="relative h-[150px] w-full sm:w-[150px] shrink-0 bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF]">
                  <Image
                    src={item.image}
                    alt={item.challengeTitle}
                    fill
                    sizes="150px"
                    className="object-cover object-center"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col p-5 sm:p-6">
                  <span className="text-[11px] font-extrabold tracking-[0.08em] text-[#7B3FF2] uppercase">
                    CHALLENGE
                  </span>
                  <h3 className="mt-1.5 text-[19px] font-semibold tracking-[-0.02em] text-[#031974]">
                    {item.challengeTitle}
                  </h3>
                  <p className="mt-1 text-[15.5px] sm:text-[16px] leading-[1.6] text-[#273444]">
                    {item.challengeDesc}
                  </p>
                </div>
              </div>

              {/* Center Arrow */}
              <div className="hidden lg:flex w-[54px] shrink-0 items-center justify-center">
                <span className="text-[28px] font-bold text-[#7B3FF2]">→</span>
              </div>
              <div className="flex lg:hidden items-center justify-center py-1">
                <span className="text-[24px] font-bold text-[#7B3FF2]">↓</span>
              </div>

              {/* Right Designed Approach Card */}
              <div
                className="flex flex-1 flex-col justify-center rounded-[24px] p-6 sm:p-7 transition-all hover:shadow-md"
                style={{
                  background:
                    "linear-gradient(164deg, rgba(178, 157, 255, 1) 0%, rgba(221, 204, 255, 1) 100%)",
                }}
              >
                <span className="text-[11px] font-extrabold tracking-[0.08em] text-white uppercase">
                  DESIGNED APPROACH
                </span>
                <h3 className="mt-1.5 text-[19px] font-semibold tracking-[-0.02em] text-[#241C59]">
                  {item.approachTitle}
                </h3>
                <p className="mt-1 text-[15.5px] sm:text-[16px] leading-[1.6] text-[#241C59]">
                  {item.approachDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
