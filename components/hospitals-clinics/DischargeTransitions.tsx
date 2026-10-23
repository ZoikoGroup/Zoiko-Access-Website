"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DischargeTransitions() {
  const roles = [
    {
      title: "Sending team",
      desc: "Prepares and hands off.",
      image: "/hospitals-clinics/discharge_team_sending.png",
    },
    {
      title: "Receiving service",
      desc: "Reviews and decides.",
      image: "/hospitals-clinics/discharge_team_receiving.png",
    },
    {
      title: "Patient or caregiver",
      desc: "Is kept informed by the responsible team.",
      image: "/hospitals-clinics/discharge_team_patient.png",
    },
    {
      title: "Next-action owner",
      desc: "Is named for the next step.",
      image: "/hospitals-clinics/discharge_team_owner.png",
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7E9F4]">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
            DISCHARGE AND TRANSITIONS
          </span>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            Keep next-step ownership explicit.
          </h2>
          <p className="mt-3 max-w-[760px] text-[16px] font-normal leading-[1.68] text-[#273444] sm:text-[17.5px]">
            Illustrative roles. There is no automated discharge advice. A failed
            or unresolved transfer is shown as an exception, and nothing is
            “completed” without evidence.
          </p>
        </motion.div>

        {/* 4 Circular Role Figures */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, idx) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Circular Avatar Container with Decorative Ring */}
              <div className="relative h-[150px] w-[150px] sm:h-[160px] sm:w-[160px] rounded-full p-1.5 shadow-md bg-gradient-to-tr from-[#E8E2FF] to-[#D5DCFF]">
                {/* SVG Decorative Frame Ring */}
                <div className="pointer-events-none absolute inset-0 opacity-60">
                  <Image
                    src="/hospitals-clinics/circle_frame.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={role.image}
                    alt={role.title}
                    fill
                    sizes="160px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.02em] text-[#031974]">
                {role.title}
              </h3>

              {/* Description */}
              <p className="mt-1.5 text-[14.5px] font-normal leading-[1.6] text-[#273444]">
                {role.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
