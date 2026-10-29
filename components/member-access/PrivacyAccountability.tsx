"use client";

import { motion } from "framer-motion";

export default function PrivacyAccountability() {
  return (
    <section
      id="privacy-accountability"
      className="w-full bg-[#FBFAFF] py-16 md:py-20 lg:py-[70px]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-[780px]">
          <div className="inline-flex w-fit items-center rounded-full bg-white px-4 py-1.5 border border-[#DCD3FB] shadow-[0px_4px_14px_0px_rgba(118,87,232,0.1)]">
            <span className="text-[13px] font-semibold leading-[20.8px] text-[#7657E8]">
              Privacy &amp; accountability
            </span>
          </div>

          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] text-[#16245A] tracking-[-0.01em]">
            Everyone keeps their own role.
          </h2>
        </div>

        {/* Quad Grid with Center Hub */}
        <div className="mt-12 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Top-Left / Box 1: Payer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-center rounded-[24px] bg-white p-6 sm:p-7 shadow-[0px_10px_20px_0px_rgba(36,59,115,0.08)] border border-[#E3E8F2] min-h-[135px] transition-all hover:shadow-md"
          >
            <h3 className="font-poppins text-[18px] font-semibold leading-[28.8px] text-[#16245A]">
              Payer
            </h3>
            <p className="mt-1 text-[15px] font-normal leading-[24px] text-[#5B6678]">
              Administers the plan, its terms and communications.
            </p>
          </motion.div>

          {/* Center Hub: Zoiko Access (Visible on Desktop in middle, centered) */}
          <div className="hidden lg:flex row-span-2 items-center justify-center py-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex h-[200px] w-[200px] flex-col items-center justify-center rounded-full text-center text-white shadow-[0px_20px_40px_0px_rgba(118,87,232,0.3)] ring-[14px] ring-[#F1EDFE]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(118, 87, 232, 1) 0%, rgba(66, 103, 213, 1) 100%)",
              }}
            >
              <b className="font-poppins text-[24px] font-semibold leading-[26.4px]">
                Zoiko
                <br />
                Access
              </b>
              <small className="mt-2 block max-w-[140px] text-[13px] leading-[18px] text-white/90">
                may help coordinate authorized steps
              </small>
            </motion.div>
          </div>

          {/* Top-Right / Box 2: Provider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col justify-center rounded-[24px] bg-white p-6 sm:p-7 shadow-[0px_10px_20px_0px_rgba(36,59,115,0.08)] border border-[#E3E8F2] min-h-[135px] transition-all hover:shadow-md"
          >
            <h3 className="font-poppins text-[18px] font-semibold leading-[28.8px] text-[#16245A]">
              Provider
            </h3>
            <p className="mt-1 text-[15px] font-normal leading-[24px] text-[#5B6678]">
              Makes clinical decisions and keeps clinical records.
            </p>
          </motion.div>

          {/* Mobile Center Hub fallback */}
          <div className="flex lg:hidden items-center justify-center py-4">
            <div
              className="relative flex h-[190px] w-[190px] flex-col items-center justify-center rounded-full text-center text-white shadow-[0px_20px_40px_0px_rgba(118,87,232,0.3)] ring-[12px] ring-[#F1EDFE]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(118, 87, 232, 1) 0%, rgba(66, 103, 213, 1) 100%)",
              }}
            >
              <b className="font-poppins text-[22px] font-semibold leading-[26px]">
                Zoiko
                <br />
                Access
              </b>
              <small className="mt-2 block max-w-[130px] text-[12px] leading-[17px] text-white/90">
                may help coordinate authorized steps
              </small>
            </div>
          </div>

          {/* Bottom-Left / Box 3: Member */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col justify-center rounded-[24px] bg-white p-6 sm:p-7 shadow-[0px_10px_20px_0px_rgba(36,59,115,0.08)] border border-[#E3E8F2] min-h-[135px] transition-all hover:shadow-md"
          >
            <h3 className="font-poppins text-[18px] font-semibold leading-[28.8px] text-[#16245A]">
              Member
            </h3>
            <p className="mt-1 text-[15px] font-normal leading-[24px] text-[#5B6678]">
              Exercises the choices that apply to them.
            </p>
          </motion.div>

          {/* Bottom-Right / Box 4: Funding ≠ access */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col justify-center rounded-[24px] bg-[#FFF8EA] p-6 sm:p-7 shadow-[0px_10px_20px_0px_rgba(36,59,115,0.08)] border border-[#F0D49A] min-h-[135px] transition-all hover:shadow-md"
          >
            <h3 className="font-poppins text-[18px] font-semibold leading-[28.8px] text-[#16245A]">
              Funding ≠ access
            </h3>
            <p className="mt-1 text-[15px] font-normal leading-[24px] text-[#5B6678]">
              Paying for benefits never grants a payer the provider&apos;s
              clinical record.
            </p>
          </motion.div>
        </div>

        {/* Accessible Assistance Bottom Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 flex flex-col gap-4 rounded-[24px] bg-[#243B73] p-6 sm:p-8 text-white shadow-[0px_16px_36px_0px_rgba(36,59,115,0.15)]"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <h3 className="font-poppins text-[18px] font-semibold leading-[24.3px] shrink-0 text-white">
              Accessible assistance
            </h3>

            {/* Pill badges */}
            <div className="flex flex-wrap items-center gap-3">
              {[
                "Plain-language reading level",
                "Meaningful language selection",
                "Visible glossary",
                "Adjustable text & contrast",
              ].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full bg-white px-3.5 py-1.5 text-[13px] sm:text-[14px] font-normal leading-[22px] text-[#273444] shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <p className="text-[14px] leading-[22px] text-white/90 pt-1 border-t border-white/15">
            Support guidance appears only where a staffed service is actually deployed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
