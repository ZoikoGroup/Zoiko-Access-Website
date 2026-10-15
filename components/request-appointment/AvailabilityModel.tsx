"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    icon: "i",
    title: "Informational",
    description:
      "Read how appointments and care pathways work. No transaction is created.",
    badge: "Current preview",
  },
  {
    icon: "→",
    title: "Request authorized",
    description:
      "A request may be sent only through an approved operating service. The provider must decide.",
    badge: "Requires separate activation",
  },
  {
    icon: "◇",
    title: "Booking authorized",
    description:
      "A source-backed slot can be confirmed only after the responsible provider responds authoritatively.",
    badge: "Requires distinct authorization",
  },
];

export default function AvailabilityModel() {
  return (
    <section
      id="availability-model"
      className="w-full py-16 sm:py-20 lg:py-24 font-sans"
      style={{
        background:
          "linear-gradient(180deg, rgba(246, 243, 255, 1) 0%, rgba(236, 231, 255, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[720px]"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2.5">
            <span
              className="h-2 w-2 rounded-full bg-[#8E7BEF]"
              aria-hidden="true"
            />
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5B49C8]">
              Availability model
            </span>
          </div>

          {/* Heading 2 */}
          <h2 className="mt-3.5 font-bold tracking-tight text-[#241C59] text-[28px] sm:text-[34px] lg:text-[37.6px] leading-[1.25]">
            Availability is checked before
            <br />
            a request is offered.
          </h2>

          {/* Description */}
          <p className="mt-4 text-[15px] font-normal leading-[1.65] text-[#5E5A86] sm:text-[16px]">
            Care location, participating provider, exact appointment mode,
            permissions, release approval, and operational health are separate
            conditions.
          </p>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[22px]">
          {CARDS.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="flex flex-col justify-between rounded-[18px] border border-[#E3DEF8] bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(36,28,89,0.03)] transition-all duration-200 hover:shadow-[0_8px_30px_rgba(36,28,89,0.06)]"
            >
              <div>
                {/* Icon box */}
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-[#E8E8F8] text-[22px] font-semibold text-[#5B49C8]">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[17.3px] font-bold text-[#241C59]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-[15.2px] font-normal leading-[1.6] text-[#5E5A86]">
                  {card.description}
                </p>
              </div>

              {/* Badge */}
              <div className="mt-6 pt-2">
                <span className="inline-flex items-center rounded-full bg-[#E8E8F8] px-3.5 py-1 text-[12.5px] font-semibold text-[#5B49C8]">
                  {card.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
