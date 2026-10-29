"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Policy applicability",
    description: "Which versioned policy applies, and where.",
  },
  {
    title: "Access approvals",
    description: "Least-privilege access, approved per role.",
  },
  {
    title: "Change control",
    description: "Every change is reviewed and recorded.",
  },
  {
    title: "Retention",
    description: "Records kept only as long as required.",
  },
  {
    title: "Audit",
    description: "Attributable access and actions.",
  },
  {
    title: "Correction ownership",
    description: "A named owner corrects each record.",
  },
];

export default function GovernancePrinciples() {
  return (
    <section id="governance" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <div className="inline-flex items-center gap-2.5">
            <span
              className="h-[2px] w-[22px] rounded-full bg-[#7657E8]"
              aria-hidden="true"
            />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
              Governance principles
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.15] tracking-tight text-[#16245A] sm:text-[40px]">
            Governed by policy, audit and least privilege.
          </h2>

          <p className="mt-3 max-w-[760px] text-[16px] font-normal leading-[1.6] text-[#5B6678] sm:text-[17px]">
            All principles depend on the actual contractual and legal context.
          </p>
        </motion.div>

        {/* 6 Cards Grid (3 cols x 2 rows) */}
        <div className="mt-11 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col rounded-[14px] border border-[#E3E8F2] bg-white p-[26px] shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-[19px] font-semibold leading-[1.35] text-[#16245A]">
                {item.title}
              </h3>

              <p className="mt-2 text-[15px] font-normal leading-[1.6] text-[#5B6678]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
