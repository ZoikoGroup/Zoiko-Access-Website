"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ControlItem {
  title: string;
  icon: string;
}

const controls: ControlItem[] = [
  {
    title: "Verified recipient",
    icon: "/referral-intake-routing/icon-verified-recipient.svg",
  },
  {
    title: "Least privilege",
    icon: "/referral-intake-routing/icon-least-privilege.svg",
  },
  {
    title: "Event integrity",
    icon: "/referral-intake-routing/icon-event-integrity.svg",
  },
  {
    title: "Retry",
    icon: "/referral-intake-routing/icon-retry.svg",
  },
  {
    title: "Audit",
    icon: "/referral-intake-routing/icon-audit.svg",
  },
  {
    title: "Breach response",
    icon: "/referral-intake-routing/icon-breach-response.svg",
  },
];

export default function RiskControls() {
  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24 text-white overflow-hidden border-b border-[#DBE5ED]"
      style={{
        background:
          "linear-gradient(160deg, rgba(2, 18, 95, 1) 0%, rgba(47, 66, 203, 1) 59%, rgba(123, 63, 242, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#C9B8FF] uppercase">
            RISK CONTROLS
          </span>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] sm:text-[38px] lg:text-[42px]">
            Connected care needs permissions, clarity and
            <br />
            reliability
          </h2>
        </motion.div>

        {/* 3x2 Grid of Risk Control Cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {controls.map((ctrl, idx) => (
            <motion.div
              key={ctrl.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="flex h-[76px] items-center gap-3.5 rounded-[18px] border border-white/28 bg-white/10 px-4 py-3 backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/40"
            >
              {/* Icon Badge */}
              <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-[12px] bg-white p-2.5 shadow-sm">
                <Image
                  src={ctrl.icon}
                  alt=""
                  width={22}
                  height={22}
                  className="h-5 w-5 object-contain"
                />
              </div>

              {/* Title */}
              <span className="text-[15.5px] font-semibold tracking-[-0.01em] text-white">
                {ctrl.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
