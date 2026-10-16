"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MODES = [
  {
    image: "/request-appointment/mode-appointment-request.webp",
    alt: "Illustrative general healthcare information scenario showing appointment request concepts",
    title: "Appointment request",
    description:
      "You ask a participating provider for an appointment. Your preferred timing is not a held or guaranteed slot. The provider must communicate its decision.",
    badge: "Provider decision pending",
  },
  {
    image: "/request-appointment/mode-confirmed-booking.webp",
    alt: "Illustrative general healthcare information scenario showing provider confirmed booking concepts",
    title: "Provider-confirmed booking",
    description:
      "A supported booking service uses source-backed inventory and an authoritative provider response. A visible slot or request receipt alone is not confirmation.",
    badge: "Provider confirmation required",
  },
];

export default function AppointmentModes() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 font-sans">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[720px]"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2.5">
            <span
              className="h-2 w-2 rounded-full bg-[#8E7BEF]"
              aria-hidden="true"
            />
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5B49C8]">
              Understand appointment modes
            </span>
          </div>

          {/* Heading 2 */}
          <h2 className="mt-3.5 font-bold tracking-tight text-[#241C59] text-[28px] sm:text-[34px] lg:text-[37.6px] leading-[1.25]">
            A request and a confirmed
            <br />
            booking are different.
          </h2>

          {/* Description */}
          <p className="mt-4 text-[15px] font-normal leading-[1.65] text-[#5E5A86] sm:text-[16px]">
            These cards explain concepts. They are not active mode selectors;
            unavailable modes are not offered as transactional controls.
          </p>
        </motion.div>

        {/* 2 Big Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-8">
          {MODES.map((mode, idx) => (
            <motion.article
              key={mode.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="group flex flex-col overflow-hidden rounded-[18px] border border-[#E3DEF8] bg-white shadow-[0_4px_24px_rgba(36,28,89,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(36,28,89,0.08)]"
            >
              {/* Image Frame */}
              <div className="relative h-[260px] sm:h-[300px] w-full overflow-hidden bg-gray-100">
                <Image
                  src={mode.image}
                  alt={mode.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 625px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Text Body */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <h3 className="text-[18px] font-bold text-[#241C59]">
                    {mode.title}
                  </h3>
                  <p className="mt-3 text-[15.2px] font-normal leading-[1.6] text-[#5E5A86]">
                    {mode.description}
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  <span className="inline-flex items-center rounded-full bg-[#E8E8F8] px-3.5 py-1 text-[12.5px] font-semibold text-[#5B49C8]">
                    {mode.badge}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
