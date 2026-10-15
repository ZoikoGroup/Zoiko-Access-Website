"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const PATHWAYS = [
  {
    title: "Inquiry",
    description:
      "A request for information through an approved contact process. It does not establish a care relationship or appointment.",
  },
  {
    title: "Referral",
    description:
      "A locally permitted care handoff. Delivery and acceptance by the receiving organization are separate events.",
  },
  {
    title: "Appointment request",
    description:
      "A request to a participating provider where scheduling is authorized. The provider must explicitly confirm an appointment.",
  },
] as const;

export default function Step3NextStep() {
  return (
    <section
      id="step-3"
      className="w-full py-16 sm:py-20 lg:py-[76px] font-sans border-b border-[#DFE5F0]"
      style={{
        background:
          "linear-gradient(111deg, rgba(242, 239, 255, 1) 0%, rgba(238, 234, 254, 1) 50%, rgba(217, 204, 255, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Heading & Guidance */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.1364em] text-[#6547BF]">
              03 / AUTHORIZED NEXT STEP
            </span>

            <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-[-0.0167em] text-[#243B73] sm:text-[36px] sm:leading-[43.2px]">
              3. Start an authorized next step.
            </h2>

            <p className="mt-5 text-[16px] font-normal leading-[1.75] text-[#5E6B7D] sm:text-[18px] sm:leading-[31.5px]">
              Where the service is approved and operating, follow the available
              inquiry, referral or appointment-request pathway. Your request is
              not confirmed until the responsible organization explicitly accepts
              or confirms it.
            </p>

            <p className="mt-4 text-[15px] font-normal leading-[1.75] text-[#5E6B7D] sm:text-[16px] sm:leading-[28px]">
              This educational page does not submit inquiries, referrals, or
              appointment requests. Operational actions require a separately
              approved service and, where applicable, verified identity and
              delegated authority.
            </p>

            <div className="mt-8">
              <Link
                href="#four-steps"
                className="inline-flex items-center justify-center rounded-[7px] border border-[#B9C7EB] bg-white px-5 py-[13px] text-[13px] font-semibold text-[#4267D5] shadow-sm transition-all hover:border-[#4267D5] hover:bg-[#F6F9FC] active:scale-[0.98]"
              >
                Understand care pathways →
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 3 Pathways Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[14px] border border-[#DFE5F0] bg-white p-7 shadow-sm sm:p-8"
          >
            <div className="divide-y divide-[#DFE5F0]">
              {PATHWAYS.map((p, idx) => (
                <div
                  key={p.title}
                  className={`py-5 ${idx === 0 ? "pt-0" : ""} ${
                    idx === PATHWAYS.length - 1 ? "pb-0" : ""
                  }`}
                >
                  <h3 className="text-[19px] font-bold leading-snug tracking-[-0.0316em] text-[#243B73]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13px] font-normal leading-[1.75] text-[#5E6B7D] sm:text-[14px] sm:leading-[24.5px]">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
