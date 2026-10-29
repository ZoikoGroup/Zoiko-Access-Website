"use client";

import { motion } from "framer-motion";

const decisions = [
  {
    role: "Payer",
    roleBg: "bg-[#E7EEFC]",
    roleText: "text-[#243B73]",
    title: "Eligibility check",
    doesNotMean: "a service is authorized or covered.",
  },
  {
    role: "Payer",
    roleBg: "bg-[#E7EEFC]",
    roleText: "text-[#243B73]",
    title: "Prior authorization",
    doesNotMean: "treatment is right for you, or payment.",
  },
  {
    role: "Provider",
    roleBg: "bg-[#E7F5F0]",
    roleText: "text-[#14653F]",
    title: "Treatment decision",
    doesNotMean: "the plan will pay.",
  },
  {
    role: "Payer",
    roleBg: "bg-[#E7EEFC]",
    roleText: "text-[#243B73]",
    title: "Claim adjudication",
    doesNotMean: "funds have moved.",
  },
  {
    role: "Payer & bank",
    roleBg: "bg-[#E7EEFC]",
    roleText: "text-[#243B73]",
    title: "Payment",
    doesNotMean: "nothing else is owed.",
  },
];

export default function SeparateDecisions() {
  return (
    <section
      id="separate-decisions"
      className="w-full bg-[#FBFAFF] py-16 md:py-20 lg:py-[70px]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-[780px]">
          <div className="inline-flex w-fit items-center rounded-full bg-white px-4 py-1.5 border border-[#DCD3FB] shadow-[0px_4px_14px_0px_rgba(118,87,232,0.1)]">
            <span className="text-[13px] font-semibold leading-[20.8px] text-[#7657E8]">
              Separate decisions
            </span>
          </div>

          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] text-[#16245A] tracking-[-0.01em]">
            There&apos;s no single “approved.”
          </h2>
        </div>

        {/* Chain of 5 Cards with ≠ between them */}
        <div className="mt-12 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 lg:gap-2">
          {decisions.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col lg:flex-row items-center flex-1 w-full gap-3 lg:gap-2"
            >
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col justify-between w-full rounded-[24px] bg-white p-5 sm:p-6 shadow-[0px_10px_24px_0px_rgba(36,59,115,0.06)] border border-[#E3E8F2] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-h-[170px]"
              >
                <div>
                  <span
                    className={`inline-block rounded-full ${item.roleBg} px-2.5 py-1 text-[11.5px] font-semibold leading-[18.4px] ${item.roleText}`}
                  >
                    {item.role}
                  </span>
                  <h3 className="mt-3 font-poppins text-[17px] font-semibold leading-[23px] text-[#16245A]">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-3 text-[14px] leading-[22px] text-[#5B6678]">
                  <strong className="font-bold text-[#8A2A24]">Does not mean: </strong>
                  {item.doesNotMean}
                </p>
              </motion.div>

              {/* Separator Symbol ≠ (only between cards, not after the last card) */}
              {index < decisions.length - 1 && (
                <div
                  className="flex items-center justify-center shrink-0 w-8 h-8 text-[#7657E8] font-poppins font-bold text-2xl select-none"
                  aria-hidden="true"
                >
                  ≠
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
