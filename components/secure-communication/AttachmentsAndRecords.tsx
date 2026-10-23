"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AttachmentsAndRecords() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7E9F4]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col lg:col-span-7 xl:col-span-7"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
              <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
                ATTACHMENTS AND SOURCE RECORDS
              </span>
            </div>

            {/* H2 Title */}
            <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.02em] text-[#031974] leading-[1.18]">
              Metadata first, and only what
              <br />
              is needed
            </h2>

            {/* Description */}
            <p className="mt-5 text-[16px] sm:text-[17px] font-normal leading-[1.68] text-[#273444] max-w-[640px]">
              Messages may point to source-held results, referral documents or supporting files,
              and carry only limited, permitted metadata. Scanning, size limits and retention apply
              only in services that are actually active.
            </p>

            {/* Note Callout (Left Purple Border 4px, rounded right 12px) */}
            <div className="mt-8 rounded-r-[12px] border-l-4 border-[#7B3FF2] bg-[#F9F7FE] py-3.5 px-5 shadow-xs max-w-[620px]">
              <p className="text-[14.5px] sm:text-[15px] font-medium leading-[1.55] text-[#273444]">
                Editorial illustration only. There is no download demo of protected content.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Rounded Figure with Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center lg:col-span-5 xl:col-span-5"
          >
            <div className="relative h-[420px] sm:h-[480px] w-full max-w-[398px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF] p-2.5 shadow-lg border-2 border-white">
              <div className="relative h-full w-full overflow-hidden rounded-[22px]">
                <Image
                  src="/secure-communication/attachments-photo.png"
                  alt="Clinical documents and source-held referral records inspection"
                  fill
                  sizes="(max-width: 640px) 100vw, 398px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
