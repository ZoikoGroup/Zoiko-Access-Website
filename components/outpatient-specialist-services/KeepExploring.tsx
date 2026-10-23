"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ExploringTile {
  title: string;
  image: string;
  description: string;
  href: string;
}

const tiles: ExploringTile[] = [
  {
    title: "Scheduling & patient access",
    image: "/outpatient-specialist-services/tile-scheduling.png",
    description: "Who owns the schedule. Linked only when published.",
    href: "/request-appointment",
  },
  {
    title: "Referral intake & routing",
    image: "/outpatient-specialist-services/tile-referral.png",
    description: "Who accepts a referral. Linked only when published.",
    href: "/how-referrals-work",
  },
  {
    title: "Discharge & transition support",
    image: "/outpatient-specialist-services/tile-discharge.png",
    description: "Handoffs after a visit. Linked only when published.",
    href: "/care-pathways",
  },
  {
    title: "EHR interoperability",
    image: "/outpatient-specialist-services/tile-ehr.png",
    description: "How systems connect. Linked only when published.",
    href: "/secure-communication",
  },
  {
    title: "Enterprise onboarding",
    image: "/outpatient-specialist-services/tile-onboarding.png",
    description: "Qualified participation. Linked only when published.",
    href: "/clinical-partnerships-contact",
  },
];

export default function KeepExploring() {
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
              Alternate routes
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.01em] text-[#1B1750] leading-[1.18]">
            Keep exploring
          </h2>
        </motion.div>

        {/* 5 Navigation Tiles */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {tiles.map((tile, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="flex flex-col"
            >
              <Link
                href={tile.href}
                className="group flex flex-col flex-1 overflow-hidden rounded-[20px] border border-[#E1DBF9] bg-white shadow-[0px_10px_26px_0px_rgba(27,23,80,0.1)] transition-all hover:border-[#6D4FE6] hover:shadow-md"
              >
                <div className="relative w-full h-[140px] bg-gradient-to-br from-[#8E7BEF] to-[#08176D] overflow-hidden">
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col flex-1 p-5 justify-between gap-2">
                  <h3 className="text-[16px] font-semibold text-[#1B1750] leading-[1.3] group-hover:text-[#6D4FE6] transition-colors">
                    {tile.title}
                  </h3>
                  <p className="text-[13.1px] leading-[1.55] text-[#575387]">
                    {tile.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
