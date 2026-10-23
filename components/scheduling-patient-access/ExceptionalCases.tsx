"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ExceptionalCase {
  icon: string;
  title: string;
  description: string;
}

const cases: ExceptionalCase[] = [
  {
    icon: "/scheduling-patient-access/icon-offline.svg",
    title: "Scheduling system offline",
    description: "The request is held or flagged. No status is guessed.",
  },
  {
    icon: "/scheduling-patient-access/icon-withdrawn.svg",
    title: "Withdrawn slot",
    description:
      "The source withdrew availability. The change is shown with its source.",
  },
  {
    icon: "/scheduling-patient-access/icon-duplicate.svg",
    title: "Duplicate requests",
    description:
      "Repeats are recognized and not turned into two bookings.",
  },
  {
    icon: "/scheduling-patient-access/icon-mismatch.svg",
    title: "Identity mismatch",
    description: "The source resolves it. Nothing is merged silently.",
  },
  {
    icon: "/scheduling-patient-access/icon-missing-ref.svg",
    title: "Missing referral",
    description: "The request waits on the referral. It is not confirmed.",
  },
  {
    icon: "/scheduling-patient-access/icon-out-of-hours.svg",
    title: "Out-of-hours change",
    description: "Handled by the facility’s own rules.",
  },
];

export default function ExceptionalCases() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7E9F4]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-2.5"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
            EXCEPTIONAL AND DEGRADED CASES
          </span>

          <h2 className="text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            When the plan does not hold
          </h2>
        </motion.div>

        {/* 2-Column Section: 6 Cards on Left, Diagram Flow on Right */}
        <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left: 6 Degraded Cases Cards in 3 Rows */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:col-span-7">
            {cases.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="flex flex-col rounded-[18px] border border-[#D9D3F5] bg-[#EAE4FF] p-5 transition-all hover:-translate-y-0.5 hover:shadow-sm"
              >
                {/* White Icon Badge */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm border border-[#E0D7FA]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px]"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-3.5 text-[16px] font-semibold tracking-[-0.02em] text-[#031974]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-[14px] leading-[1.6] text-[#273444]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: Uncropped Diagram Illustration (Matches Figma) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:col-span-5"
          >
            <div className="relative flex w-full items-center justify-center">
              <Image
                src="/scheduling-patient-access/exceptional-cases.png"
                alt="Process flow diagram for exceptions: Location, Routing, Hold, Resolution"
                width={604}
                height={562}
                priority
                className="h-auto w-full max-w-[540px] object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
