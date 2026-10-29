"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const chips = [
  "Owner",
  "Applicability",
  "Last verification",
  "Entitlement",
  "Fallback",
];

export default function ExchangePrivacyVariance() {
  return (
    <section
      id="exchange"
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(180deg, rgba(243, 239, 254, 1) 0%, rgba(233, 227, 252, 1) 100%)",
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
              className="h-[2px] w-[22px] rounded-full bg-[#7657E8]"
              aria-hidden="true"
            />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
              Exchange, privacy &amp; variance
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.15] tracking-tight text-[#16245A] sm:text-[40px]">
            Authorized exchange. No public claims data.
          </h2>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Card 1: Information exchange */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group flex flex-col overflow-hidden rounded-[14px] border border-[#E3E8F2] bg-white shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)] transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-[255px] w-full overflow-hidden bg-gradient-to-br from-[#DCD3FB] to-[#C7D3F5]">
              <Image
                src="/claims-governance/exchange-infrastructure.png"
                alt="Integration infrastructure"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4267D5]">
                Information exchange
              </span>

              <h3 className="mt-2 text-[19px] font-semibold leading-[1.35] text-[#16245A]">
                Evaluation categories, not badges
              </h3>

              <p className="mt-2 text-[15px] font-normal leading-[1.6] text-[#5B6678]">
                Potential technical standards are assessed with authorization
                and partner validation — never shown as live compatibility.
              </p>
            </div>
          </motion.article>

          {/* Card 2: Privacy & sensitive data */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group flex flex-col overflow-hidden rounded-[14px] border border-[#E3E8F2] bg-white shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)] transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-[255px] w-full overflow-hidden bg-gradient-to-br from-[#DCD3FB] to-[#C7D3F5]">
              <Image
                src="/claims-governance/exchange-privacy.png"
                alt="Data privacy"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4267D5]">
                Privacy &amp; sensitive data
              </span>

              <h3 className="mt-2 text-[19px] font-semibold leading-[1.35] text-[#16245A]">
                Nothing personal here
              </h3>

              <p className="mt-2 text-[15px] font-normal leading-[1.6] text-[#5B6678]">
                No claim ID, policy or member number, diagnosis, clinical note
                or attachment appears on this page.
              </p>
            </div>
          </motion.article>

          {/* Card 3: Market & plan variance with Chips */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group flex flex-col overflow-hidden rounded-[14px] border border-[#E3E8F2] bg-white shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)] transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-[255px] w-full overflow-hidden bg-gradient-to-br from-[#DCD3FB] to-[#C7D3F5]">
              <Image
                src="/claims-governance/exchange-documents.png"
                alt="Plan documents"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4267D5]">
                Market &amp; plan variance
              </span>

              <h3 className="mt-2 text-[19px] font-semibold leading-[1.35] text-[#16245A]">
                Every detail is qualified
              </h3>

              <div className="mt-4 flex flex-wrap gap-2 pt-2">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border border-[#E3E8F2] bg-[#F6F9FC] px-3.5 py-1 text-[13px] font-medium text-[#243B73]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
