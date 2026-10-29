"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Pathway {
  number: string;
  title: string;
  href: string;
}

const pathways: Pathway[] = [
  {
    number: "02",
    title: "Eligibility & Benefits",
    href: "/explore-care",
  },
  {
    number: "03",
    title: "Prior Authorizations",
    href: "/referral-intake-routing",
  },
  {
    number: "06",
    title: "Payer Integrations & Governance",
    href: "/clinical-partnerships-contact",
  },
];

export default function RelatedPathways() {
  return (
    <section
      id="pathways"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-[100px]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-3.5 mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center rounded-[6px] bg-[#EEE9FD] px-2.5 py-1">
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#7657E8]">
              Institutional decision pathways
            </span>
          </div>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A]">
            Where to go next.
          </h2>
        </motion.div>

        {/* 3 Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {pathways.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link
                href={item.href}
                className="group flex items-center justify-between gap-4 rounded-[16px] border border-[#E3E8F2] bg-white p-6 sm:p-6.5 shadow-sm transition-all hover:border-[#7657E8]/40 hover:shadow-[0px_10px_30px_rgba(36,59,115,0.08)] hover:-translate-y-1"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[13px] font-medium text-[#7657E8]">
                    {item.number}
                  </span>
                  <h3 className="font-poppins text-[16.5px] sm:text-[17px] font-semibold text-[#16245A] group-hover:text-[#7657E8] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full bg-[#243B73] text-white transition-all group-hover:bg-[#7657E8] group-hover:translate-x-1">
                  <span className="text-[16px] font-medium">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
