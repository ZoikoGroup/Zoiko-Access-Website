"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="relative w-full border-b border-[#E1DBF9] bg-[#FAF9FD] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Rail / Section Tag */}
        <div className="inline-flex items-center gap-3">
          <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
          <span className="text-[11.8px] font-semibold tracking-wide text-[#5B47D6]">
            Trust
          </span>
        </div>

        {/* Section Heading */}
        <div className="mt-3.5 max-w-[800px]">
          <h2 className="text-[28px] font-semibold leading-[1.18] tracking-tight text-[#1B1750] sm:text-[36.8px]">
            Who is responsible for what
          </h2>
        </div>

        {/* Two Columns */}
        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[260px] sm:min-h-[300px] w-full overflow-hidden rounded-[16px] border border-[#E1DBF9] bg-gradient-to-br from-[#7160D5] to-[#031462] shadow-sm lg:col-span-5"
          >
            <Image
              src="/clinical-partnerships-contact/trust-meeting.png"
              alt="Healthcare leadership care team in clinical meeting"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </motion.div>

          {/* Right Column: Statement Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="flex flex-col justify-center rounded-[16px] bg-gradient-to-br from-[#282063] to-[#301FC0] p-8 sm:p-10 text-white shadow-md lg:col-span-7"
          >
            <h3 className="text-[22px] sm:text-[24px] font-semibold text-white">
              Clinical decisions stay with clinicians
            </h3>
            <p className="mt-4 text-[17px] sm:text-[20px] font-normal leading-[1.65] text-[#E6E1FF]">
              Decisions remain with appropriately authorized clinicians and institutions. Zoiko
              Access is a digital healthcare access and coordination ecosystem. It is not a
              healthcare provider or an emergency service, and it makes no claim about anyone’s
              licensing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
