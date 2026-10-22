"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Care-coordination use cases",
    description:
      "Explore how coordination between independent organizations is designed to work, where it is authorized.",
    image: "/clinical-partnerships-contact/covers-care-coordination.png",
    imageAlt: "Care coordination workflows and independent healthcare integration",
    imageSide: "left" as const,
  },
  {
    title: "Institutional readiness",
    description:
      "Talk about what an organization would need in place, including roles, processes and approvals.",
    image: "/clinical-partnerships-contact/covers-readiness.png",
    imageAlt: "Healthcare leadership reviewing clinical governance readiness",
    imageSide: "right" as const,
  },
  {
    title: "Governance and integrations",
    description:
      "Understand who owns integration and escalation, and how governance is designed to work.",
    image: "/clinical-partnerships-contact/covers-governance.png",
    imageAlt: "Security, escalation channels, and data governance architecture",
    imageSide: "left" as const,
  },
];

export default function WhatItCovers() {
  return (
    <section
      id="what-it-covers"
      className="relative w-full border-y border-[#E1DBF9] bg-gradient-to-b from-[#F8F6FF] to-[#EFEAFF] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Rail / Section Tag */}
        <div className="inline-flex items-center gap-3">
          <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
          <span className="text-[11.8px] font-semibold tracking-wide text-[#5B47D6]">
            What to discuss
          </span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="mt-3.5 max-w-[780px]">
          <h2 className="text-[28px] font-semibold leading-[1.18] tracking-tight text-[#1B1750] sm:text-[36.8px]">
            What a conversation may cover
          </h2>
          <p className="mt-3 text-[15px] font-normal leading-[1.65] text-[#575387] sm:text-[16px]">
            Every description is conditioned on authorized capability. It uses neutral language, and
            there are no logos or results.
          </p>
        </div>

        {/* 3 Alternating Cards */}
        <div className="mt-10 flex flex-col gap-6 lg:gap-7">
          {cards.map((card, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="grid grid-cols-1 overflow-hidden rounded-[16px] border border-[#E1DBF9] bg-white shadow-sm lg:grid-cols-12 items-center"
            >
              {card.imageSide === "left" ? (
                <>
                  {/* Image Column */}
                  <div className="relative h-[220px] sm:h-[240px] w-full bg-gradient-to-br from-[#7160D5] to-[#031462] lg:col-span-5">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                    />
                  </div>
                  {/* Content Column */}
                  <div className="p-7 sm:p-9 lg:col-span-7">
                    <h3 className="text-[17.6px] font-semibold text-[#1B1750]">{card.title}</h3>
                    <p className="mt-2.5 max-w-[580px] text-[15.5px] leading-[1.65] text-[#575387]">
                      {card.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Content Column (Left on Desktop) */}
                  <div className="order-2 lg:order-1 p-7 sm:p-9 lg:col-span-7">
                    <h3 className="text-[17.6px] font-semibold text-[#1B1750]">{card.title}</h3>
                    <p className="mt-2.5 max-w-[580px] text-[15.5px] leading-[1.65] text-[#575387]">
                      {card.description}
                    </p>
                  </div>
                  {/* Image Column (Right on Desktop) */}
                  <div className="order-1 lg:order-2 relative h-[220px] sm:h-[240px] w-full bg-gradient-to-br from-[#7160D5] to-[#031462] lg:col-span-5">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                    />
                  </div>
                </>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
