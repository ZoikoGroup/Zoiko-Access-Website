"use client";

import { motion } from "framer-motion";

const terms = [
  {
    term: "Member eligibility",
    definition: "Whether you're enrolled in a plan for a given date.",
    bgColor: "bg-[#EEE9FD]",
  },
  {
    term: "Covered service",
    definition: "A service the plan describes as included, subject to its rules.",
    bgColor: "bg-[#E6EEFC]",
  },
  {
    term: "Network",
    definition: "Providers and facilities a plan has arrangements with.",
    bgColor: "bg-[#E7F5F0]",
  },
  {
    term: "Deductible",
    definition: "An amount some plans require before they share costs.",
    bgColor: "bg-[#FFF3E6]",
  },
  {
    term: "Copay / coinsurance",
    definition: "Your share of a service cost — a fixed amount or a percentage.",
    bgColor: "bg-[#FCEBF2]",
  },
  {
    term: "Out-of-pocket limit",
    definition: "A cap some plans set on what you pay in a period.",
    bgColor: "bg-[#EAF2FB]",
  },
];

export default function BenefitGlossary() {
  return (
    <section
      id="glossary"
      className="w-full bg-white py-16 md:py-20 lg:py-[70px] border-b border-[#E3E8F2]/60"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading & Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 lg:col-span-5"
          >
            <div className="inline-flex w-fit items-center rounded-full bg-white px-4 py-1.5 border border-[#DCD3FB] shadow-[0px_4px_14px_0px_rgba(118,87,232,0.1)]">
              <span className="text-[13px] font-semibold leading-[20.8px] text-[#7657E8]">
                Benefit vocabulary
              </span>
            </div>

            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] text-[#16245A] tracking-[-0.01em]">
              Six words worth knowing.
            </h2>

            <p className="max-w-[480px] text-[15.5px] font-normal leading-[25px] text-[#5B6678]">
              Short, general definitions. Your plan&apos;s own terms are
              authoritative — benefit designs, exclusions and regulations vary.
            </p>
          </motion.div>

          {/* Right Column: 6 Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 xl:grid-cols-3">
            {terms.map((item, index) => (
              <motion.div
                key={item.term}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`flex flex-col justify-between rounded-[24px] ${item.bgColor} p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 min-h-[145px]`}
              >
                <dt className="font-poppins text-[17px] font-semibold leading-[23px] text-[#16245A]">
                  {item.term}
                </dt>
                <dd className="mt-3 text-[14px] sm:text-[14.5px] font-normal leading-[23px] text-[#273444]">
                  {item.definition}
                </dd>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
