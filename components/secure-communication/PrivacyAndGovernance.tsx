"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const governanceCards = [
  {
    title: "Audit provenance",
    description:
      "Events keep their source and time. Corrections are added, and earlier entries are never silently changed.",
    icon: "/secure-communication/icon-audit-provenance.svg",
  },
  {
    title: "Regional limits",
    description: "No care location selected. That is not authorization.",
    icon: "/secure-communication/icon-regional-limits.svg",
  },
  {
    title: "Least privilege",
    description: "Only what a role and purpose need.",
    icon: "/secure-communication/icon-least-privilege.svg",
  },
];

export default function PrivacyAndGovernance() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7E9F4]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col max-w-[800px]"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              PRIVACY AND LOCAL GOVERNANCE
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.02em] text-[#031974] leading-[1.18]">
            Local rules come first
          </h2>

          <p className="mt-4 text-[16px] sm:text-[18px] font-normal leading-[1.65] text-[#273444]">
            Processing can be limited by region. The recipient is accountable. Legal basis or
            consent applies as appropriate, delegated access is limited, and audit history is kept.
            This page makes no blanket compliance or data-residency claims.
          </p>
        </motion.div>

        {/* 3 Governance Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {governanceCards.map((card, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="flex flex-col rounded-[20px] bg-white p-6 sm:p-7 border border-[#D9D3F5] shadow-xs transition-all hover:shadow-md"
            >
              {/* Icon badge */}
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#F1EEFE]">
                <div className="relative h-[22px] w-[22px]">
                  <Image src={card.icon} alt="" fill className="object-contain" />
                </div>
              </div>

              <h3 className="mt-5 text-[18px] sm:text-[19px] font-semibold tracking-tight text-[#031974]">
                {card.title}
              </h3>

              <p className="mt-2 text-[15px] sm:text-[15.5px] leading-[1.6] text-[#273444]">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
