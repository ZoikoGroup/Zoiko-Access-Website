"use client";

import { motion } from "framer-motion";

export default function AvailabilityNotice() {
  return (
    <section className="relative w-full bg-[#FFF8EA] border-y border-[#F0D49A] py-4 sm:py-4.5 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[1200px] text-center"
      >
        <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-[#4A3500]">
          <strong className="font-bold text-[#4A3500]">Availability:</strong>{" "}
          capabilities vary by market, contract and qualified partner. This
          page is informational only; no transactional services are offered
          here.
        </p>
      </motion.div>
    </section>
  );
}
