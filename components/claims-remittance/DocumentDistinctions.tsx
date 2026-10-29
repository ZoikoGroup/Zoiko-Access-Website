"use client";

import { motion } from "framer-motion";

interface DocumentSlip {
  id: string;
  title: string;
  audience: string;
  description: string;
  warning: string;
}

const documents: DocumentSlip[] = [
  {
    id: "DOC 01",
    title: "Explanation of Benefits",
    audience: "Member-facing",
    description: "Describes how a claim was processed under the member's plan.",
    warning: "Not a bill and not proof of payment.",
  },
  {
    id: "DOC 02",
    title: "Remittance Advice",
    audience: "Provider-facing",
    description:
      "Reconciliation information explaining adjudicated amounts.",
    warning: "Never labelled “Paid” without settlement evidence.",
  },
  {
    id: "DOC 03",
    title: "Payment instruction",
    audience: "Payer / bank action",
    description:
      "The payer's instruction to move funds through financial rails.",
    warning: "An instruction is not a completed transfer.",
  },
  {
    id: "DOC 04",
    title: "Settlement confirmation",
    audience: "Financial owner",
    description:
      "Evidence received by the financial owner that funds settled.",
    warning: "Still needs reconciling against remittance.",
  },
];

export default function DocumentDistinctions() {
  return (
    <section
      id="documents"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-[70px]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-3.5 mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center rounded-[6px] bg-[#EEE9FD] px-2.5 py-1">
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#7657E8]">
              Remittance & payment distinctions
            </span>
          </div>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A]">
            Four documents. Four different truths.
          </h2>
        </motion.div>

        {/* 4 Document Slips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {documents.map((doc, idx) => (
            <motion.article
              key={doc.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col justify-between rounded-t-[4px] rounded-b-[14px] border border-[#E3E8F2] bg-white p-6 sm:p-7 pt-9 shadow-[0px_14px_30px_0px_rgba(36,59,115,0.08)] transition-all hover:shadow-[0px_18px_36px_rgba(36,59,115,0.12)] hover:-translate-y-1"
            >
              {/* Receipt top perforation / cut-edge styling */}
              <div
                className="absolute top-0 left-0 right-0 h-[6px] rounded-t-[3px]"
                style={{
                  background:
                    "radial-gradient(circle at 10px -2px, transparent 4px, #E3E8F2 4.5px, #E3E8F2 6px) repeat-x",
                  backgroundSize: "16px 6px",
                }}
              />

              <div>
                {/* Doc ID */}
                <span className="text-[11px] font-normal uppercase tracking-[0.1em] text-[#5B6678]">
                  {doc.id}
                </span>

                {/* Title */}
                <h3 className="font-poppins text-[18px] font-semibold text-[#16245A] mt-2 mb-1.5">
                  {doc.title}
                </h3>

                {/* Audience Pill */}
                <p className="text-[12.5px] font-semibold text-[#4267D5] mb-4">
                  {doc.audience}
                </p>

                {/* Description */}
                <p className="text-[14.5px] leading-[1.6] text-[#5B6678]">
                  {doc.description}
                </p>
              </div>

              {/* Warning note */}
              <div className="mt-6 pt-4 border-t border-[#F0F4F8]">
                <p className="text-[14px] sm:text-[14.5px] font-medium leading-[1.5] text-[#8A2A24]">
                  {doc.warning}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
