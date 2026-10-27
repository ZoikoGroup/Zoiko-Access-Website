"use client";

import { motion } from "framer-motion";

interface ExceptionItem {
  id: string;
  title: string;
  responsible: string;
  safeNextStep: string;
}

const exceptions: ExceptionItem[] = [
  {
    id: "could-not-deliver",
    title: "Could not deliver",
    responsible: "Responsible: issuing provider or system owner.",
    safeNextStep: "Safe next step: contact them through their established channel.",
  },
  {
    id: "pharmacy-unavailable",
    title: "Pharmacy unavailable",
    responsible: "Responsible: the pharmacy.",
    safeNextStep: "Safe next step: ask the prescriber's team about another approved route.",
  },
  {
    id: "eligibility-unconfirmed",
    title: "Eligibility or validity not confirmed",
    responsible: "Responsible: the receiving pharmacy.",
    safeNextStep: "Safe next step: speak to the pharmacy or prescriber.",
  },
  {
    id: "duplicate-correction",
    title: "Duplicate or correction",
    responsible: "Responsible: issuing provider.",
    safeNextStep: "Safe next step: let the provider resolve it. Do not resend.",
  },
  {
    id: "routing-withdrawn",
    title: "Routing withdrawn",
    responsible: "Responsible: the prescriber.",
    safeNextStep: "Safe next step: confirm the new plan with the prescriber.",
  },
  {
    id: "status-unknown",
    title: "System status unknown",
    responsible: "Responsible: the organization that owns the record.",
    safeNextStep: "Safe next step: shown as unknown, never assumed.",
  },
];

export default function ExceptionsRecovery() {
  return (
    <section id="exceptions" className="w-full bg-white py-[70px]">
      <div className="mx-auto w-full max-w-[1300px] px-6 sm:px-10 lg:px-0">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2.5 pb-8"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold leading-[21px] text-[#4267D5]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7657E8]" aria-hidden="true" />
            <span>Exceptions and recovery</span>
          </div>

          {/* Heading */}
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[36.8px] font-semibold leading-[1.12] text-[#243B73]">
            If routing does not go to plan.
          </h2>

          {/* Lede */}
          <p className="pt-1 text-[16.8px] font-normal leading-[28px] text-[#273444] max-w-[700px]">
            Do not retry a possibly duplicate regulated message yourself. Use the issuing
            provider&apos;s or pharmacy&apos;s established channel.
          </p>
        </motion.div>

        {/* 6 Exception Cards Grid (2 columns on md/lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-[15px]">
          {exceptions.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="flex flex-col gap-2 rounded-[16px] border border-[#DCD6F2] bg-white p-5 transition-all duration-200 hover:shadow-md hover:border-[#7657E8]/50"
            >
              <h3 className="font-poppins text-[16.3px] font-semibold leading-[22px] text-[#243B73]">
                {item.title}
              </h3>
              <p className="font-inter text-[14.1px] font-bold leading-[23px] text-[#243B73]">
                {item.responsible}
              </p>
              <p className="font-inter text-[14.1px] font-bold leading-[23px] text-[#243B73]/90">
                {item.safeNextStep}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
