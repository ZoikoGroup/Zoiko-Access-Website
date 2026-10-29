"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FaqItem {
  question: string;
  hasNoPrefix?: boolean;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Does a submitted claim mean it has been approved?",
    hasNoPrefix: true,
    answer:
      "Submission confirms only an earlier step; the responsible payer determines the outcome.",
  },
  {
    question: "Does remittance advice prove payment was received?",
    hasNoPrefix: true,
    answer:
      "Providers must reconcile remittance information with settlement evidence.",
  },
  {
    question: "Does prior authorization guarantee reimbursement?",
    hasNoPrefix: true,
    answer:
      "Payment is governed by the payer's applicable contract, plan and claim review.",
  },
  {
    question: "Is my EOB a bill?",
    hasNoPrefix: true,
    answer:
      "An Explanation of Benefits describes how a claim was processed. Contact your plan with questions.",
  },
  {
    question: "How are adjustments and disputes handled?",
    hasNoPrefix: false,
    answer:
      "By the payer under its contract and plan rules. Follow the payer's official process.",
  },
  {
    question: "Who can view claim information?",
    hasNoPrefix: false,
    answer:
      "Only people and systems authorized for the particular purpose and jurisdiction.",
  },
];

export default function ClaimsFaq() {
  return (
    <section
      id="faq"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-[70px]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading + Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col gap-4 sm:gap-5"
          >
            <div className="inline-flex items-center rounded-[6px] bg-[#EEE9FD] px-2.5 py-1">
              <span className="text-[11.8px] font-semibold uppercase tracking-[0.1017em] text-[#7657E8]">
                Questions & direct answers
              </span>
            </div>

            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A]">
              Straight answers.
            </h2>

            {/* Photo Card with subtle gradient frame */}
            <div
              className="mt-3 relative w-full h-[280px] sm:h-[334px] rounded-[18px] p-2 overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.06)] group"
              style={{
                background:
                  "linear-gradient(143deg, rgba(220, 211, 251, 1) 0%, rgba(199, 211, 245, 1) 100%)",
              }}
            >
              <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                <Image
                  src="/claims-remittance/faq-operations-team.webp"
                  alt="Finance and operations team discussing records"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: 6 Q&A Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-[14px] bg-[#F6F9FC] p-5 sm:p-6 flex flex-col justify-between border border-[#E3E8F2]/60 hover:border-[#D9CFFB] transition-colors shadow-sm"
              >
                <dt className="font-poppins text-[16px] sm:text-[16.5px] font-semibold leading-[1.4] text-[#16245A] mb-3">
                  {faq.question}
                </dt>
                <dd className="text-[14px] sm:text-[15px] leading-[1.6] text-[#5B6678]">
                  {faq.hasNoPrefix && (
                    <strong className="font-bold text-[#7657E8] mr-1">
                      No.
                    </strong>
                  )}
                  {faq.answer}
                </dd>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
