"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InteroperabilityBoundary() {
  return (
    <section className="relative w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24 border-b border-[#D9D3F5]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col max-w-[800px]"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              INTEROPERABILITY BOUNDARY
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.02em] text-[#031974] leading-[1.18]">
            Separate organizations, one permissioned layer
          </h2>

          <p className="mt-4 text-[16px] sm:text-[18px] font-normal leading-[1.65] text-[#273444]">
            Each organization keeps its own system. Only partner-authorized integrations are used.
          </p>
        </motion.div>

        {/* Interoperability Architecture Hub */}
        <div className="mt-14 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
          {/* Left Column: Source & Receiving */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-4 w-full lg:max-w-[420px]"
          >
            {/* Source organization */}
            <div className="flex items-center gap-4 rounded-[20px] bg-white p-5 shadow-xs border-l-[5px] border-l-[#2D00FF] border-y border-r border-[#D9D3F5]">
              <div className="relative h-[54px] w-[54px] shrink-0">
                <Image
                  src="/secure-communication/icon-source-org.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-semibold text-[#031974]">
                  Source organization
                </span>
                <span className="text-[14.5px] text-[#273444]">Keeps its own record</span>
              </div>
            </div>

            {/* Receiving organization */}
            <div className="flex items-center gap-4 rounded-[20px] bg-white p-5 shadow-xs border-l-[5px] border-l-[#2BA471] border-y border-r border-[#D9D3F5]">
              <div className="relative h-[54px] w-[54px] shrink-0">
                <Image
                  src="/secure-communication/icon-receiving-org.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-semibold text-[#031974]">
                  Receiving organization
                </span>
                <span className="text-[14.5px] text-[#273444]">Decides its own intake</span>
              </div>
            </div>
          </motion.div>

          {/* Central Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative flex items-center justify-center my-4 lg:my-0"
          >
            {/* Glowing Ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#2F42CB]/30 to-[#7B3FF2]/30 blur-lg" />

            <div
              className="relative flex h-[170px] w-[170px] flex-col items-center justify-center rounded-full text-center p-4 shadow-xl border-2 border-white/60 text-white"
              style={{
                background: "linear-gradient(135deg, #02125F 0%, #2F42CB 55%, #4267D5 100%)",
              }}
            >
              <span className="whitespace-pre-line text-[14px] font-semibold leading-[1.3] text-white">
                Permissioned{"\n"}orchestration +{"\n"}status evidence
              </span>
            </div>
          </motion.div>

          {/* Right Column: Partner & Local Rules */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-4 w-full lg:max-w-[420px]"
          >
            {/* Partner system */}
            <div className="flex items-center gap-4 rounded-[20px] bg-white p-5 shadow-xs border-r-[5px] border-r-[#A100FF] border-y border-l border-[#D9D3F5]">
              <div className="relative h-[54px] w-[54px] shrink-0">
                <Image
                  src="/secure-communication/icon-partner-system.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-semibold text-[#031974]">
                  Partner system
                </span>
                <span className="text-[14.5px] text-[#273444]">Only where authorized</span>
              </div>
            </div>

            {/* Local rules */}
            <div className="flex items-center gap-4 rounded-[20px] bg-white p-5 shadow-xs border-r-[5px] border-r-[#00CE9E] border-y border-l border-[#D9D3F5]">
              <div className="relative h-[54px] w-[54px] shrink-0">
                <Image
                  src="/secure-communication/icon-local-rules.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-semibold text-[#031974]">
                  Local rules
                </span>
                <span className="text-[14.5px] text-[#273444]">Set the limits</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
