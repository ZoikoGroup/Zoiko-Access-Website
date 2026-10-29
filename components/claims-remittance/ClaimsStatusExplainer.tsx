"use client";

import { motion } from "framer-motion";

interface StatusCode {
  code: string;
  description: string;
  type?: "default" | "reject" | "success" | "muted";
}

const statusCodes: StatusCode[] = [
  {
    code: "DRAFT",
    description: "Being prepared; not sent.",
    type: "default",
  },
  {
    code: "SUBMITTED",
    description: "Originated by an authorized submitter.",
    type: "default",
  },
  {
    code: "TRANSPORT_ACK",
    description: "The transport endpoint received the payload.",
    type: "default",
  },
  {
    code: "INTAKE_REJECTED",
    description: "Not accepted for payer processing.",
    type: "reject",
  },
  {
    code: "ACCEPTED",
    description: "Eligible for the processing queue only.",
    type: "default",
  },
  {
    code: "IN_REVIEW",
    description: "Payer-owned evaluation.",
    type: "default",
  },
  {
    code: "ADJUDICATED",
    description: "A determination was issued.",
    type: "success",
  },
  {
    code: "ADJUSTED",
    description: "Payer-issued outcome — not a payment result.",
    type: "default",
  },
  {
    code: "DENIED",
    description: "Payer-issued outcome — not a payment result.",
    type: "reject",
  },
  {
    code: "STALE",
    description: "Information is out of date. Always permitted.",
    type: "muted",
  },
  {
    code: "UNKNOWN",
    description: "No reliable status. Always permitted.",
    type: "muted",
  },
];

export default function ClaimsStatusExplainer() {
  return (
    <section
      id="status"
      className="relative w-full py-16 sm:py-20 lg:py-[70px]"
      style={{
        background: `
          radial-gradient(circle at 85% 20%, rgba(183, 0, 220, 0.9) 0%, rgba(118, 87, 232, 0) 60%),
          linear-gradient(193deg, rgba(10, 26, 75, 1) 53%, rgba(53, 80, 184, 1) 100%),
          #0F1A44
        `,
      }}
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-3.5"
          >
            <div
              className="inline-flex items-center rounded-[6px] px-2.5 py-1"
              style={{ backgroundColor: "rgba(183, 166, 255, 0.15)" }}
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#C9BDFB]">
                Claims status explainer
              </span>
            </div>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-white">
              Read every status literally.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center rounded-[6px] bg-white border border-dashed border-white/30 px-3 py-1.5 self-start md:self-auto shadow-sm"
          >
            <span className="text-[12px] font-normal text-[#0A1244]">
              Concept labels · not a deployed dashboard
            </span>
          </motion.div>
        </div>

        {/* 11 Status Codes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 rounded-[16px] overflow-hidden p-[1px] shadow-[0px_14px_30px_rgba(0,0,0,0.2)]">
          {statusCodes.map((item, idx) => {
            const isReject = item.type === "reject";
            const isSuccess = item.type === "success";
            const isMuted = item.type === "muted";

            return (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[#13204F] p-5 sm:p-6 flex flex-col justify-between min-h-[140px] transition-colors hover:bg-[#16275c]"
              >
                <div>
                  {/* Status Badge */}
                  <div className="inline-block mb-3">
                    {isSuccess ? (
                      <span className="inline-flex rounded-[8px] bg-white/12 border border-[#58C79A] px-3 py-1 text-[13px] sm:text-[13.5px] font-semibold tracking-[0.04em] text-[#9BF0C9]">
                        {item.code}
                      </span>
                    ) : isReject ? (
                      <span className="inline-flex rounded-[8px] bg-white/12 border border-[#FFC2BD]/40 px-3 py-1 text-[13px] sm:text-[13.5px] font-semibold tracking-[0.04em] text-[#FFC2BD]">
                        {item.code}
                      </span>
                    ) : isMuted ? (
                      <span className="inline-flex rounded-[8px] bg-white/12 border border-dashed border-white/25 px-3 py-1 text-[13px] sm:text-[13.5px] font-semibold tracking-[0.04em] text-white/65">
                        {item.code}
                      </span>
                    ) : (
                      <span className="inline-flex rounded-[8px] bg-white/12 border border-white/25 px-3 py-1 text-[13px] sm:text-[13.5px] font-semibold tracking-[0.04em] text-white">
                        {item.code}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-[13.5px] sm:text-[14px] leading-[1.5] text-white/75">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
