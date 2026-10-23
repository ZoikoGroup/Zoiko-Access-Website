"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DirectAnswer() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          {/* Eyebrow */}
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
            DIRECT ANSWER
          </span>

          {/* Heading */}
          <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.021em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            What is patient access and scheduling coordination?
          </h2>

          {/* Core Answer */}
          <p className="mt-2 text-[20px] font-medium leading-[1.62] text-[#031974] sm:text-[23px] lg:text-[24px]">
            It separates five different things: finding an access point, sending a
            request, scheduling by the source system, confirmation by the provider,
            and follow-up. Only the source scheduler can confirm an appointment.
          </p>

          {/* Banner Graphic */}
          <div className="relative mt-6 h-[180px] w-full overflow-hidden rounded-2xl border border-[#E2E8F0] shadow-sm sm:h-[220px] lg:h-[263px]">
            <Image
              src="/scheduling-patient-access/direct-answer-banner.png"
              alt="Patient access and scheduling coordination architecture banner"
              fill
              sizes="(max-width: 1340px) 100vw, 1340px"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
