"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AudienceCard {
  title: string;
  image: string;
  description: string;
}

const audienceList: AudienceCard[] = [
  {
    title: "Outpatient clinics",
    image: "/outpatient-specialist-services/audience-outpatient-clinics.png",
    description: "Coordinate requests and follow-up for ambulatory visits.",
  },
  {
    title: "Specialist departments",
    image: "/outpatient-specialist-services/audience-specialist-departments.png",
    description: "Understand how referrals reach you and who owns the follow-up.",
  },
  {
    title: "Diagnostic-facing outpatient teams",
    image: "/outpatient-specialist-services/audience-diagnostic-teams.png",
    description: "Coordinate handoffs around diagnostic review.",
  },
  {
    title: "Referring organizations",
    image: "/outpatient-specialist-services/audience-referring-organizations.png",
    description: "See the status of a referral from the responsible organization.",
  },
  {
    title: "Patient-access and operations teams",
    image: "/outpatient-specialist-services/audience-operations-teams.png",
    description: "Keep handoffs between teams clear and accountable.",
  },
];

export default function AudienceSection() {
  return (
    <section id="audience" className="relative w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24 border-b border-[#E1DBF9]">
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
              Who this is for
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.01em] text-[#1B1750] leading-[1.18]">
            Built for the teams that coordinate outpatient care
          </h2>

          <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.65] text-[#575387]">
            Each card describes an administrative coordination task. None is a guaranteed product module.
          </p>
        </motion.div>

        {/* 5 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {audienceList.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="flex flex-col overflow-hidden rounded-[20px] border border-[#E1DBF9] bg-white shadow-[0px_10px_28px_0px_rgba(27,23,80,0.1)] transition-all"
            >
              <div className="relative w-full h-[150px] bg-gradient-to-br from-[#8E7BEF] to-[#08176D] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-5 sm:p-5.5 justify-between gap-2.5">
                <h3 className="text-[17px] font-semibold text-[#1B1750] leading-[1.25]">
                  {card.title}
                </h3>
                <p className="text-[14px] sm:text-[14.5px] leading-[1.55] text-[#575387]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
