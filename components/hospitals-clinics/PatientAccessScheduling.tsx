"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function PatientAccessScheduling() {
  const points = [
    "Requests describe what a person is asking for.",
    "Availability is validated by the facility.",
    "Only the responsible facility confirms.",
  ];

  return (
    <section
      id="scheduling"
      className="relative w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading, Description & Evidenced Points */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col lg:col-span-6"
          >
            {/* Eyebrow */}
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              PATIENT ACCESS AND SCHEDULING
            </span>

            {/* H2 */}
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
              Clarity before an
              <br className="hidden sm:inline" />
              appointment is confirmed.
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-[600px] text-[16px] font-normal leading-[1.68] text-[#273444] sm:text-[17px]">
              A request is not an appointment. Validated availability, the
              scheduler’s authority and the responsible facility’s confirmation
              each come from the source.
            </p>

            {/* Bullet Points */}
            <ul className="mt-6 flex flex-col gap-3.5">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#7B3FF2]/10 text-[#7B3FF2]">
                    <CheckCircle2 className="h-4 w-4 text-[#7B3FF2]" />
                  </div>
                  <span className="text-[15.5px] font-medium text-[#273444]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Visual Card with Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65 }}
            className="flex justify-center lg:col-span-6"
          >
            <div className="relative h-[280px] sm:h-[340px] w-full max-w-[620px] overflow-hidden rounded-[32px] shadow-[0px_24px_50px_0px_rgba(47,66,203,0.2)] bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF]">
              {/* Decorative Frame */}
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <Image
                  src="/hospitals-clinics/scheduling_frame.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Consultation Image */}
              <div className="relative h-full w-full">
                <Image
                  src="/hospitals-clinics/scheduling_consultation.png"
                  alt="Patient Scheduling Consultation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
