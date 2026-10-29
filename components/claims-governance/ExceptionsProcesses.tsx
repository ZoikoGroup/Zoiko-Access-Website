"use client";

import { motion } from "framer-motion";

const exceptionCards = [
  {
    status: "Denial",
    dotColor: "#C2413B",
    description: "Follow the payer's official notice.",
  },
  {
    status: "Resubmission",
    dotColor: "#4267D5",
    description: "A corrected claim sent again.",
  },
  {
    status: "Reconsideration",
    dotColor: "#7657E8",
    description: "A payer re-review on request.",
  },
  {
    status: "Appeal",
    dotColor: "#7657E8",
    description: "A formal process under plan and local rules.",
  },
  {
    status: "Adjustment",
    dotColor: "#B7791F",
    description: "A payer change to an outcome.",
  },
  {
    status: "Reversal",
    dotColor: "#B7791F",
    description: "A prior outcome is undone.",
  },
  {
    status: "Duplicate",
    dotColor: "#8A94A6",
    description: "The same claim sent more than once.",
  },
];

export default function ExceptionsProcesses() {
  return (
    <section
      id="exceptions"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background: `
          radial-gradient(circle at 100% 0%, rgba(183, 0, 220, 0.95) 0%, rgba(118, 87, 232, 0) 60%),
          linear-gradient(161deg, rgba(10, 26, 75, 1) 52%, rgba(53, 80, 184, 1) 100%)
        `,
      }}
    >
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
              className="h-[2px] w-[22px] rounded-full bg-[#DED6EF]"
              aria-hidden="true"
            />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#DED6EF]">
              Denied, corrected &amp; reversed
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[40px]">
            Different exceptions, different processes.
          </h2>

          <p className="mt-3 max-w-[760px] text-[16px] font-normal leading-[1.6] text-[#CDD8F7] sm:text-[17px]">
            Each pathway differs by the authorized payer and its process.
            Reconsideration, appeal and correction are not the same thing.
          </p>
        </motion.div>

        {/* 8 Cards Grid (4 cols x 2 rows) */}
        <div className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {exceptionCards.map((card, idx) => (
            <motion.div
              key={card.status}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="flex flex-col rounded-[14px] border border-white/15 bg-white/[0.08] p-[26px] backdrop-blur-sm shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)] transition-all hover:-translate-y-1 hover:bg-white/[0.12] hover:shadow-lg"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="h-[9px] w-[9px] shrink-0 rounded-[4.5px]"
                  style={{ backgroundColor: card.dotColor }}
                  aria-hidden="true"
                />
                <strong className="text-[15px] font-semibold leading-[23px] text-[#FFF7E8]">
                  {card.status}
                </strong>
              </div>

              <p className="mt-3 text-[14.5px] font-normal leading-[1.6] text-[#CDD8F7]">
                {card.description}
              </p>
            </motion.div>
          ))}

          {/* Always Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col justify-between rounded-[14px] border border-[#D9CFFB] bg-[#EEE9FD] p-[26px] shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)] transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#7657E8]" />
                <h3 className="text-[19px] font-semibold leading-[1.35] text-[#16245A]">
                  Always
                </h3>
              </div>

              <p className="mt-3 text-[15px] font-medium leading-[1.6] text-[#273444]">
                Verify with the responsible payer or provider.
              </p>
            </div>
            <p className="text-[12px] text-[#5B6678] font-normal mt-4">
              Authorized contractual guidance takes precedence in all cases.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
