"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface RoleCard {
  title: string;
  image: string;
  description: string;
}

const roles: RoleCard[] = [
  {
    title: "Referral sender",
    image: "/outpatient-specialist-services/role-referral-sender.png",
    description: "Starts the referral and stays accountable for what it sent.",
  },
  {
    title: "Specialist service",
    image: "/outpatient-specialist-services/role-specialist-service.png",
    description: "Receives, reviews and decides on acceptance.",
  },
  {
    title: "Scheduling provider",
    image: "/outpatient-specialist-services/role-scheduling-provider.png",
    description: "Owns the schedule and confirms any visit.",
  },
  {
    title: "Patient or caregiver",
    image: "/outpatient-specialist-services/role-patient-caregiver.png",
    description: "Takes part, and can be told the status in plain words.",
  },
  {
    title: "Platform coordination",
    image: "/outpatient-specialist-services/role-platform-coordination.png",
    description: "Carries status and metadata. Makes no clinical decisions.",
  },
];

export default function AccountabilityRoles() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E1DBF9]">
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
            <span className="h-[2px] w-[28px] rounded-full bg-[#6D4FE6]" aria-hidden="true" />
            <span className="text-[11.8px] sm:text-[12.5px] font-semibold tracking-[0.14em] text-[#6D4FE6] uppercase">
              Continuity and follow-through
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.01em] text-[#1B1750] leading-[1.18]">
            Who is responsible for what
          </h2>

          <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.65] text-[#575387]">
            Every step has a named accountable owner and a clear next action.
          </p>
        </motion.div>

        {/* 5 Arch-top Figure Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {roles.map((role, idx) => (
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="flex flex-col overflow-hidden rounded-[24px] border border-[#E1DBF9] bg-white shadow-[0px_12px_30px_0px_rgba(27,23,80,0.12)] transition-all"
            >
              {/* Arched Photo Frame */}
              <div className="relative w-full h-[220px] bg-gradient-to-br from-[#8E7BEF] to-[#08176D] rounded-t-[120px] overflow-hidden">
                <Image
                  src={role.image}
                  alt={role.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Caption */}
              <figcaption className="flex flex-col flex-1 p-5 text-center justify-between gap-2">
                <h3 className="text-[17.6px] font-semibold text-[#1B1750] leading-[1.25]">
                  {role.title}
                </h3>
                <p className="text-[14px] sm:text-[14.5px] leading-[1.55] text-[#575387]">
                  {role.description}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
