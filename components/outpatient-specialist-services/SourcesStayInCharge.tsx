"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SourcesStayInCharge() {
  return (
    <section
      id="integration"
      className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#2D2BC9]"
      style={{
        background: "linear-gradient(148deg, #08176D 0%, #2D2BC9 57%, #6F3FEC 100%)",
      }}
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col max-w-[800px]"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-[28px] rounded-full bg-[#CFC4FF]" aria-hidden="true" />
            <span className="text-[11.8px] sm:text-[12.5px] font-semibold tracking-[0.14em] text-[#CFC4FF] uppercase">
              Technology, privacy and integration
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.01em] text-white leading-[1.18]">
            Sources stay in charge
          </h2>

          <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.65] text-[#E6E1FF]">
            Source systems keep the records and the clinical decisions.
          </p>
        </motion.div>

        {/* Conceptual Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative mt-12 sm:mt-14 lg:mt-16"
        >
          {/* 3 Main Architecture Nodes with Connecting Arrows */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-5">
            {/* Left Node: Source Systems */}
            <motion.div
              whileHover={{ y: -4 }}
              className="relative w-full md:flex-1 flex flex-col items-center justify-center rounded-[24px] border border-white/40 bg-white/10 backdrop-blur-md p-7 sm:p-8 text-center min-h-[210px] sm:min-h-[225px] shadow-[0px_16px_36px_0px_rgba(8,23,109,0.3)] transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src="/outpatient-specialist-services/arch-source-systems.svg"
                  alt="Source systems icon"
                  width={42}
                  height={42}
                  className="w-auto h-10 object-contain"
                />
              </div>
              <h3 className="mt-3.5 text-[20px] sm:text-[21px] font-bold text-white leading-[1.25]">
                Source systems
              </h3>
              <p className="mt-2 text-[14px] sm:text-[14.5px] leading-[1.45] text-[#DCD6FF]">
                Records and
                <br />
                clinical decisions stay here
              </p>
            </motion.div>

            {/* Desktop Connector 1 */}
            <div className="hidden md:flex items-center justify-center w-10 lg:w-16 shrink-0" aria-hidden="true">
              <svg
                className="w-full h-5 overflow-visible"
                viewBox="0 0 60 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="2"
                  y1="10"
                  x2="50"
                  y2="10"
                  stroke="#B49CFA"
                  strokeWidth="2.4"
                  strokeDasharray="5 4"
                  strokeLinecap="round"
                />
                <path
                  d="M44 4L52 10L44 16"
                  stroke="#B49CFA"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Mobile Connector 1 */}
            <div className="flex md:hidden items-center justify-center h-8 my-0.5" aria-hidden="true">
              <svg
                className="w-5 h-8 overflow-visible"
                viewBox="0 0 20 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="10"
                  y1="2"
                  x2="10"
                  y2="24"
                  stroke="#B49CFA"
                  strokeWidth="2.4"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                />
                <path
                  d="M4 18L10 26L16 18"
                  stroke="#B49CFA"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Center Node: Coordination Layer (Featured) */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative w-full md:flex-1 flex flex-col items-center justify-center rounded-[24px] border border-white/60 bg-gradient-to-br from-[#7F65E8] to-[#5540D8] p-7 sm:p-8 text-center min-h-[220px] sm:min-h-[235px] shadow-[0px_20px_48px_0px_rgba(0,0,0,0.32)] ring-1 ring-white/30 z-10 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src="/outpatient-specialist-services/arch-coordination-layer.svg"
                  alt="Coordination layer icon"
                  width={46}
                  height={44}
                  className="w-auto h-10 object-contain"
                />
              </div>
              <h3 className="mt-3.5 text-[20px] sm:text-[21px] font-bold text-white leading-[1.25]">
                Coordination layer
              </h3>
              <p className="mt-2 text-[14px] sm:text-[14.5px] leading-[1.45] text-[#DCD6FF]">
                Permitted metadata
                <br />
                and status only
              </p>
            </motion.div>

            {/* Desktop Connector 2 */}
            <div className="hidden md:flex items-center justify-center w-10 lg:w-16 shrink-0" aria-hidden="true">
              <svg
                className="w-full h-5 overflow-visible"
                viewBox="0 0 60 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="2"
                  y1="10"
                  x2="50"
                  y2="10"
                  stroke="#B49CFA"
                  strokeWidth="2.4"
                  strokeDasharray="5 4"
                  strokeLinecap="round"
                />
                <path
                  d="M44 4L52 10L44 16"
                  stroke="#B49CFA"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Mobile Connector 2 */}
            <div className="flex md:hidden items-center justify-center h-8 my-0.5" aria-hidden="true">
              <svg
                className="w-5 h-8 overflow-visible"
                viewBox="0 0 20 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="10"
                  y1="2"
                  x2="10"
                  y2="24"
                  stroke="#B49CFA"
                  strokeWidth="2.4"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                />
                <path
                  d="M4 18L10 26L16 18"
                  stroke="#B49CFA"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Right Node: Participating Organizations */}
            <motion.div
              whileHover={{ y: -4 }}
              className="relative w-full md:flex-1 flex flex-col items-center justify-center rounded-[24px] border border-white/40 bg-white/10 backdrop-blur-md p-7 sm:p-8 text-center min-h-[210px] sm:min-h-[225px] shadow-[0px_16px_36px_0px_rgba(8,23,109,0.3)] transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src="/outpatient-specialist-services/arch-participating-orgs.svg"
                  alt="Participating organizations icon"
                  width={46}
                  height={40}
                  className="w-auto h-10 object-contain"
                />
              </div>
              <h3 className="mt-3.5 text-[20px] sm:text-[21px] font-bold text-white leading-[1.25]">
                Participating organizations
              </h3>
              <p className="mt-2 text-[14px] sm:text-[14.5px] leading-[1.45] text-[#DCD6FF]">
                Clinics, specialists
                <br />
                and referrers
              </p>
            </motion.div>
          </div>

          {/* 3 Bottom Guarantees / Capsule Pills */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
            <div className="flex items-center justify-center rounded-full border border-white/40 bg-white/12 px-6 py-3.5 sm:py-4 text-center backdrop-blur-sm shadow-sm">
              <span className="text-[14px] sm:text-[15.5px] font-semibold text-white tracking-[-0.01em]">
                Identity verification and least privilege
              </span>
            </div>
            <div className="flex items-center justify-center rounded-full border border-white/40 bg-white/12 px-6 py-3.5 sm:py-4 text-center backdrop-blur-sm shadow-sm">
              <span className="text-[14px] sm:text-[15.5px] font-semibold text-white tracking-[-0.01em]">
                Standards-based connectors where approved
              </span>
            </div>
            <div className="flex items-center justify-center rounded-full border border-white/40 bg-white/12 px-6 py-3.5 sm:py-4 text-center backdrop-blur-sm shadow-sm">
              <span className="text-[14px] sm:text-[15.5px] font-semibold text-white tracking-[-0.01em]">
                No worldwide medical record
              </span>
            </div>
          </div>

          {/* Conceptual Disclaimer */}
          <p className="mt-8 text-center text-[13.5px] sm:text-[14.5px] text-[#DCD6FF] tracking-[0.01em]">
            A conceptual diagram. It is not a statement about any live integration.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
