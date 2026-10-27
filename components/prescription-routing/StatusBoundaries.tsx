"use client";

import { motion } from "framer-motion";

interface StatusItem {
  id: string;
  term: string;
  definition: string;
  isNegative?: boolean;
}

const statusList: StatusItem[] = [
  {
    id: "created",
    term: "Created",
    definition: "Authorized source recorded it.",
  },
  {
    id: "submitted",
    term: "Submitted",
    definition: "Submitted to the transport.",
  },
  {
    id: "delivered",
    term: "Delivered",
    definition: "Technical receipt at the endpoint.",
  },
  {
    id: "acknowledged",
    term: "Acknowledged",
    definition: "The relevant organization confirms receipt.",
  },
  {
    id: "validation-pending",
    term: "Validation pending",
    definition: "Eligibility or safety checks are incomplete.",
  },
  {
    id: "accepted",
    term: "Accepted",
    definition: "An authorized pharmacy accepts, under local rules.",
  },
  {
    id: "declined",
    term: "Declined",
    definition: "No acceptance.",
    isNegative: true,
  },
  {
    id: "dispensed",
    term: "Dispensed",
    definition: "The pharmacy's own supply event.",
  },
];

export default function StatusBoundaries() {
  return (
    <section id="status" className="w-full bg-white py-[70px] border-b border-[#DCD6F2]">
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
            <span>Status legend and proof boundaries</span>
          </div>

          {/* Heading */}
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.08] text-[#243B73]">
            Each status has an owner, a source and
            <br />
            evidence.
          </h2>

          {/* Lede */}
          <p className="pt-1 text-[16.8px] font-normal leading-[28px] text-[#273444]">
            Never infer a later status from an earlier event.
          </p>
        </motion.div>

        {/* 8 Status Cards Grid (2 columns on md/lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-[15px]">
          {statusList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`flex flex-col justify-center rounded-[12px] p-4 px-5 transition-all duration-200 border-l-[4px] ${
                item.isNegative
                  ? "bg-[#FEF4F5] border-l-[#D65668] border-y border-r border-[#F8D2D7]"
                  : "bg-[#F6F3FE] border-l-[#7657E8] border-y border-r border-[#E8E2FA] hover:bg-[#F2EDFD]"
              }`}
            >
              <dt className="font-poppins text-[16px] font-semibold leading-[26px] text-[#243B73]">
                {item.term}
              </dt>
              <dd className="pt-0.5 text-[14.1px] font-normal leading-[23px] text-[#273444]">
                {item.definition}
              </dd>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
