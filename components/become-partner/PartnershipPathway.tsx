"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PathwayStage {
  badge: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const pathwayStages: PathwayStage[] = [
  {
    badge: "01",
    title: "Discover",
    description: "Understand goals and fit.",
    image: "/become-partner/pathway-stage-01-discover.png",
    alt: "Initial discovery and evaluation session",
  },
  {
    badge: "02",
    title: "Scope",
    description: "Agree areas to explore.",
    image: "/become-partner/pathway-stage-02-scope.png",
    alt: "Scoping integration boundaries and access models",
  },
  {
    badge: "03",
    title: "Diligence",
    description: "Legal, privacy, security, technical.",
    image: "/become-partner/pathway-stage-03-diligence.png",
    alt: "Legal and technical diligence review",
  },
  {
    badge: "04",
    title: "Authorized pilot",
    description: "Only with separate approval.",
    image: "/become-partner/pathway-stage-04-pilot.png",
    alt: "Authorized pilot implementation under institutional controls",
  },
  {
    badge: "05",
    title: "Release decision",
    description: "An explicit go / no-go.",
    image: "/become-partner/pathway-stage-05-release.png",
    alt: "Formal institutional release and go / no-go decision",
  },
];

export default function PartnershipPathway() {
  return (
    <section
      id="pathway"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#0A1A4B] via-[#102468] to-[#3550B8] py-16 sm:py-20 lg:py-[70px]"
    >
      {/* Radial ambient glow on top right */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[600px] w-[600px] rounded-full opacity-50 blur-3xl select-none"
        style={{
          background: "radial-gradient(circle at top right, #B700DC 0%, rgba(118,87,232,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5">
            <span className="h-[2px] w-[22px] rounded-full bg-[#BAC8EC]" aria-hidden="true" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#BAC8EC]">
              Illustrative evaluation pathway
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.2] tracking-tight text-white sm:text-[38px] lg:text-[40px]">
            Five stages, each a separate decision.
          </h2>

          {/* Ribbon */}
          <div className="mt-4">
            <span className="inline-flex items-center rounded-full bg-[#FFF4E0] px-3.5 py-1.5 text-[12px] font-semibold text-[#7A4B00] shadow-sm">
              ILLUSTRATIVE — NO STAGE IS GUARANTEED
            </span>
          </div>
        </motion.div>

        {/* 5 Cards Row */}
        <div className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {pathwayStages.map((stage, idx) => (
            <motion.article
              key={stage.badge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              className="flex flex-col overflow-hidden rounded-[14px] bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Media image with badge */}
              <div className="relative h-[147px] w-full bg-slate-100">
                <Image
                  src={stage.image}
                  alt={stage.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 flex h-[29px] items-center justify-center rounded-full bg-white px-2.5 shadow-sm">
                  <span className="text-[12px] font-semibold text-[#243B73]">
                    {stage.badge}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[19px] font-semibold leading-[26px] text-[#16245A]">
                  {stage.title}
                </h3>
                <p className="mt-2 text-[15px] font-normal leading-[24px] text-[#5B6678]">
                  {stage.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
