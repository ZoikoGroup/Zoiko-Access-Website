"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const pathways = [
  { title: "Eligibility & Benefits", href: "/care-pathways" },
  { title: "Prior Authorizations", href: "/for-clinicians" },
  { title: "Claims & Remittance Coordination", href: "/referral-coordination" },
  { title: "Payer Integrations & Governance", href: "/clinical-responsibility" },
  { title: "Implementation Approach", href: "/how-it-works" },
];

export default function RelatedPathways() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-[70px] border-b border-[#E3E8F2]/60">
      <div className="mx-auto flex flex-col items-center w-full max-w-[1360px] px-6 sm:px-10 lg:px-12 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] text-[#16245A] tracking-[-0.01em]"
        >
          Related pages.
        </motion.h2>

        {/* Pill Links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-[1000px]">
          {pathways.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <Link
                href={item.href}
                className="inline-flex items-center justify-center rounded-full border border-[#DCD3FB] bg-white px-6 py-3.5 text-[15px] sm:text-[16px] font-semibold leading-[25.6px] text-[#243B73] shadow-sm transition-all duration-200 hover:border-[#7657E8] hover:bg-[#F9F7FE] hover:shadow-md hover:-translate-y-0.5"
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
