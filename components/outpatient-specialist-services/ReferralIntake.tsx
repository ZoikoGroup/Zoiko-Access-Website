"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface StatusItem {
  num: string;
  title: string;
  desc: string;
  tag: string;
}

const statuses: StatusItem[] = [
  {
    num: "1",
    title: "Initiated",
    desc: "A referral was started.",
    tag: "The referring organization",
  },
  {
    num: "2",
    title: "Transmitted",
    desc: "It was sent.",
    tag: "The sending system",
  },
  {
    num: "3",
    title: "Received",
    desc: "It reached the destination.",
    tag: "The receiving system",
  },
  {
    num: "4",
    title: "Acknowledged",
    desc: "An authorized person at the receiver saw it.",
    tag: "The receiving organization",
  },
  {
    num: "5",
    title: "Clinically reviewed",
    desc: "A qualified professional looked at it.",
    tag: "The reviewing clinician",
  },
  {
    num: "6",
    title: "Accepted",
    desc: "The receiving provider accepted the referral.",
    tag: "The accepting provider",
  },
  {
    num: "7",
    title: "Declined or redirected",
    desc: "It was not accepted, or was sent elsewhere.",
    tag: "The responding provider",
  },
  {
    num: "8",
    title: "Appointment confirmed",
    desc: "A visit is booked.",
    tag: "The scheduling provider",
  },
];

export default function ReferralIntake() {
  return (
    <section id="referrals" className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E1DBF9]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col max-w-[800px]"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-[28px] rounded-full bg-[#6D4FE6]" aria-hidden="true" />
            <span className="text-[11.8px] sm:text-[12.5px] font-semibold tracking-[0.14em] text-[#6D4FE6] uppercase">
              Referrals and intake
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.01em] text-[#1B1750] leading-[1.18]">
            Eight statuses, eight different meanings
          </h2>

          <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.65] text-[#575387]">
            Delivered is not acknowledged. Acknowledged is not accepted. Accepted is not booked.
          </p>
        </motion.div>

        {/* 8 Cards Grid: 5 columns on desktop matching Figma */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {statuses.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="flex flex-col justify-between rounded-[20px] border border-[#E1DBF9] bg-white p-5 sm:p-5.5 shadow-[0px_10px_28px_0px_rgba(27,23,80,0.1)] transition-all min-h-[235px]"
            >
              <div>
                <span className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#F1EEFE] text-[14.4px] font-semibold text-[#6D4FE6]">
                  {item.num}
                </span>

                <h3 className="mt-4 text-[17.6px] font-semibold text-[#1B1750] leading-[1.25]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[14.5px] leading-[1.55] text-[#575387]">
                  {item.desc}
                </p>
              </div>

              {/* Tag pill spanning the bottom */}
              <div className="mt-5 w-full">
                <div className="flex h-[42px] w-full items-center rounded-full bg-[#F1EEFE] px-4">
                  <span className="text-[11.8px] font-semibold text-[#6D4FE6] truncate">
                    {item.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button aligned to the left below row 2 */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-8 flex justify-start"
        >
          <Link
            href="#scheduling"
            className="inline-flex items-center justify-center rounded-full bg-[#6D4FE6] px-8 py-3.5 text-[15.5px] sm:text-[16px] font-semibold text-white shadow-md shadow-[#6D4FE6]/25 transition-all hover:bg-[#5939D8] active:scale-[0.98]"
          >
            Understand referral intake
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
