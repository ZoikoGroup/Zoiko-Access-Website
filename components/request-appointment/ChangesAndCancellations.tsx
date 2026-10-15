"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const POLICY_ITEMS = [
  {
    title: "Need to change a request?",
    description:
      "Use the provider’s supported process or verified contact. Do not assume a request can be edited or rescheduled from this page.",
  },
  {
    title: "Provider declines or offers an alternative?",
    description:
      "Read the provider’s own guidance. No alternative is unilaterally accepted and no automatic clinical recommendation is made.",
  },
  {
    title: "Connection fails or the outcome is unclear?",
    description:
      "Do not treat a timeout as success or repeatedly submit. An operating service must reconcile the request before a safe retry.",
  },
];

export default function ChangesAndCancellations() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 font-sans">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[760px]"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2.5">
            <span
              className="h-2 w-2 rounded-full bg-[#8E7BEF]"
              aria-hidden="true"
            />
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5B49C8]">
              Changes, cancellations & uncertainty
            </span>
          </div>

          {/* Heading 2 */}
          <h2 className="mt-3.5 font-bold tracking-tight text-[#241C59] text-[28px] sm:text-[34px] lg:text-[37.6px] leading-[1.25]">
            Use the responsible provider’s
            <br />
            policy.
          </h2>

          {/* Description */}
          <p className="mt-4 text-[15px] font-normal leading-[1.65] text-[#5E5A86] sm:text-[16px]">
            Status, change, cancellation, and rescheduling controls require a
            separately authenticated and authorized workflow. None are connected
            to this informational file.
          </p>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[22px]">
          {POLICY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="rounded-[18px] border border-[#E3DEF8] bg-white p-6 shadow-[0_2px_12px_rgba(36,28,89,0.02)] transition-all hover:border-[#8E7BEF] hover:shadow-[0_4px_20px_rgba(36,28,89,0.05)]"
            >
              <h3 className="text-[17.3px] font-bold text-[#241C59]">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] font-normal leading-[1.6] text-[#5E5A86]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Diagram Illustration Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-10 overflow-hidden rounded-[18px] border border-[#E3DEF8] bg-white p-3 sm:p-4 shadow-[0_4px_24px_rgba(36,28,89,0.04)]"
        >
          <Image
            src="/request-appointment/changes-cancellations-diagram.webp"
            alt="Conceptual illustration showing location, published information, a request, and a separate response"
            width={1300}
            height={491}
            sizes="(max-width: 1440px) 100vw, 1300px"
            className="h-auto w-full rounded-[12px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
