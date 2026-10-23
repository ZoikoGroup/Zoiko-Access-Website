"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SenderAndRecipient() {
  return (
    <section id="sender-recipient" className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7E9F4]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
              SENDER AND RECIPIENT
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.02em] text-[#031974] leading-[1.18]">
            What each side knows and owns
          </h2>
        </motion.div>

        {/* Two Columns Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Column 1: The Sender */}
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col overflow-hidden rounded-[26px] bg-white border border-[#D9D3F5] shadow-xs"
          >
            {/* Photo figure */}
            <div className="relative h-[260px] sm:h-[280px] w-full overflow-hidden bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF]">
              <Image
                src="/secure-communication/sender-photo.png"
                alt="Healthcare professional composing and sending communication"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="text-[22px] font-semibold tracking-tight text-[#031974]">
                The sender
              </h3>

              <div className="mt-6 flex flex-col gap-1">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#7B3FF2]">
                  What a sender knows
                </span>
                <p className="text-[15.5px] sm:text-[16px] leading-[1.65] text-[#273444]">
                  The transport result, and any receipt the source reports.
                </p>
              </div>

              <div className="mt-5 border-t border-[#EEF0F7] pt-5 flex flex-col gap-1">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#7B3FF2]">
                  Sender checks
                </span>
                <p className="text-[15.5px] sm:text-[16px] leading-[1.65] text-[#273444]">
                  The recipient is correct and the urgency pathway fits. No response time is promised.
                </p>
              </div>
            </div>
          </motion.article>

          {/* Column 2: The Recipient */}
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col overflow-hidden rounded-[26px] bg-white border border-[#D9D3F5] shadow-xs"
          >
            {/* Photo figure */}
            <div className="relative h-[260px] sm:h-[280px] w-full overflow-hidden bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF]">
              <Image
                src="/secure-communication/recipient-photo.png"
                alt="Receiving clinical team member reviewing intake queue"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="text-[22px] font-semibold tracking-tight text-[#031974]">
                The recipient
              </h3>

              <div className="mt-6 flex flex-col gap-1">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#7B3FF2]">
                  What a recipient is accountable for
                </span>
                <p className="text-[15.5px] sm:text-[16px] leading-[1.65] text-[#273444]">
                  Intake, review and acknowledgment, under the receiving organization’s local process.
                </p>
              </div>

              <div className="mt-5 border-t border-[#EEF0F7] pt-5 flex flex-col gap-1">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#7B3FF2]">
                  Not implied
                </span>
                <p className="text-[15.5px] sm:text-[16px] leading-[1.65] text-[#273444]">
                  That every message needs a response, or that any set response time exists.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
