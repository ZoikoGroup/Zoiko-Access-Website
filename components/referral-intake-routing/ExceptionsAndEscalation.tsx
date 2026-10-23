"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ExceptionItem {
  title: string;
  icon: string;
  desc: string;
}

const exceptions: ExceptionItem[] = [
  {
    title: "Missing information",
    icon: "/referral-intake-routing/icon-missing-info.svg",
    desc: "Shown with an owner and a safe route to resolve it. Details stay private.",
  },
  {
    title: "Invalid destination",
    icon: "/referral-intake-routing/icon-invalid-destination.svg",
    desc: "Shown with an owner and a safe route to resolve it. Details stay private.",
  },
  {
    title: "Recipient unavailable",
    icon: "/referral-intake-routing/icon-recipient-unavailable.svg",
    desc: "Shown with an owner and a safe route to resolve it. Details stay private.",
  },
  {
    title: "Duplicate",
    icon: "/referral-intake-routing/icon-duplicate.svg",
    desc: "Shown with an owner and a safe route to resolve it. Details stay private.",
  },
  {
    title: "Rejected",
    icon: "/referral-intake-routing/icon-rejected.svg",
    desc: "Shown with an owner and a safe route to resolve it. Details stay private.",
  },
  {
    title: "Expired or stale",
    icon: "/referral-intake-routing/icon-expired-stale.svg",
    desc: "Shown with an owner and a safe route to resolve it. Details stay private.",
  },
  {
    title: "Source unavailable",
    icon: "/referral-intake-routing/icon-source-unavailable.svg",
    desc: "Shown with an owner and a safe route to resolve it. Details stay private.",
  },
  {
    title: "Disputed status",
    icon: "/referral-intake-routing/icon-disputed-status.svg",
    desc: "Shown with an owner and a safe route to resolve it. Details stay private.",
  },
];

export default function ExceptionsAndEscalation() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
            EXCEPTIONS AND ESCALATION
          </span>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            When a referral cannot move forward
          </h2>
          <p className="mt-3 max-w-[760px] text-[16px] font-normal leading-[1.65] text-[#273444] sm:text-[18px]">
            The responsible organization must have a safe way to resolve it. Nothing resolves
            itself falsely, and private details are never shown publicly.
          </p>
        </motion.div>

        {/* 4x2 Grid of Exception Cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {exceptions.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="flex flex-col rounded-[20px] border border-[#D9D3F5] bg-white p-5 shadow-[0px_10px_20px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon Badge */}
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[12px] bg-[#F1EEFE] p-2.5">
                <Image
                  src={item.icon}
                  alt=""
                  width={22}
                  height={22}
                  className="h-5 w-5 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.02em] text-[#031974] sm:text-[16.5px]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-[14px] font-normal leading-[1.6] text-[#273444]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
