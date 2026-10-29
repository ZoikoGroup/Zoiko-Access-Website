"use client";

import { motion } from "framer-motion";

const terms = [
  {
    num: "01",
    title: "Claim",
    description:
      "A request for payment for services, submitted by a billing party.",
  },
  {
    num: "02",
    title: "Covered benefit",
    description:
      "A service the plan describes as included, subject to its rules.",
  },
  {
    num: "03",
    title: "Eligible member",
    description: "A person enrolled in a plan on a given date.",
  },
  {
    num: "04",
    title: "Prior authorization",
    description: "A separate payer decision before certain services.",
  },
  {
    num: "05",
    title: "Adjudication",
    description: "The payer's determination on a submitted claim.",
  },
  {
    num: "06",
    title: "Explanation of benefits",
    description:
      "A member-facing description of how a claim was processed.",
  },
  {
    num: "07",
    title: "Remittance",
    description:
      "Provider-facing explanation of adjudicated amounts — not proof of payment.",
  },
];

export default function ClaimVocabulary() {
  return (
    <section id="vocabulary" className="w-full bg-[#F6F9FC] py-16 sm:py-20 lg:py-24">
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
              Claim vocabulary
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.15] tracking-tight text-[#16245A] sm:text-[40px]">
            Seven terms that are never interchangeable.
          </h2>
        </motion.div>

        {/* 8 Cards Grid (4 cols x 2 rows) */}
        <div className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {terms.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="flex flex-col rounded-[14px] border border-[#E3E8F2] bg-white p-[26px] shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-[12px] font-semibold tracking-[0.06em] text-[#7657E8]">
                {item.num}
              </span>

              <h3 className="mt-2 text-[19px] font-semibold leading-[1.35] text-[#16245A]">
                {item.title}
              </h3>

              <p className="mt-2 text-[15px] font-normal leading-[1.6] text-[#5B6678]">
                {item.description}
              </p>
            </motion.div>
          ))}

          {/* Highlight card: Not the same */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col justify-between rounded-[14px] border border-[#D9CFFB] bg-[#EEE9FD] p-[26px] shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)] transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <span className="inline-block h-2 w-2 rounded-full bg-[#7657E8] mb-1" />
              <h3 className="text-[19px] font-semibold leading-[1.35] text-[#16245A]">
                Not the same
              </h3>

              <p className="mt-2 text-[15px] font-medium leading-[1.6] text-[#16245A]">
                Eligibility ≠ authorization ≠ adjudication ≠ payment.
              </p>
            </div>
            <p className="text-[12px] text-[#5B6678] font-normal mt-4">
              Each stage follows distinct rules, systems, and governing entities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
