"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const ROLES = [
  {
    image: "/how-it-works/role-patient.png",
    alt: "Illustrative adult reading healthcare information at home",
    title: "I’m exploring for myself",
    description:
      "Understand published options before choosing a nextstep. No account or medical details are needed to read this guide.",
    linkText: "For patients →",
    href: "/for-patients",
  },
  {
    image: "/how-it-works/role-caregiver.png",
    alt: "Illustrative caregiver assisting an older family member",
    title: "I’m helping someone else",
    description:
      "Learn about appropriate permissions and representation before acting as a caregiver or guardian.",
    linkText: "For caregivers →",
    href: "/for-caregivers",
  },
  {
    image: "/how-it-works/role-healthcare.png",
    alt: "Illustrative healthcare administration planning discussion",
    title: "I work in healthcare",
    description:
      "Explore role-specific responsibilities and the boundaries of authorized institutional coordination.",
    linkText: "For healthcare organizations →",
    href: "/hospitals-clinics",
  },
  {
    image: "/how-it-works/role-local.png",
    alt: "Illustrative person considering local service context",
    title: "I want to understand local availability",
    description:
      "Review what a care location means. Availability needs current market and service evidence.",
    linkText: "Understand local context →",
    href: "/locations-availability",
  },
] as const;

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function OnwardJourney() {
  return (
    <section
      id="onward-journey"
      className="w-full bg-white py-16 sm:py-20 lg:py-[76px] font-sans border-b border-[#DFE5F0]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
        {/* Header Block */}
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2">
            <span
              className="block h-1.5 w-1.5 rounded-full bg-[#7657E8]"
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6547BF]">
              Choose your onward journey
            </span>
          </div>

          <h2 className="mt-3 text-[28px] font-bold tracking-[-0.0176em] text-[#243B73] sm:text-[34px] sm:leading-[40.8px]">
            The right explanation for your role.
          </h2>
        </div>

        {/* 2x2 Grid of Role Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6">
          {ROLES.map((role, idx) => (
            <motion.article
              key={role.title}
              custom={idx}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="group flex flex-col overflow-hidden rounded-[12px] border border-[#DFE5F0] bg-white shadow-sm transition-all duration-300 hover:border-[#B9C7EB] hover:shadow-md sm:flex-row sm:h-[256px]"
            >
              {/* Image Thumbnail Column (38% on desktop) */}
              <div className="relative h-48 w-full sm:h-full sm:w-[38%] shrink-0 overflow-hidden bg-slate-100">
                <Image
                  src={role.image}
                  alt={role.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text & Link Column (62% on desktop) */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <h3 className="text-[18px] font-bold leading-snug tracking-[-0.0286em] text-[#243B73] transition-colors group-hover:text-[#4267D5] sm:text-[20px]">
                    {role.title}
                  </h3>

                  <p className="mt-3 text-[13px] font-normal leading-[1.7] text-[#5E6B7D] sm:text-[14px] sm:leading-[24.5px]">
                    {role.description}
                  </p>
                </div>

                <div className="mt-5 pt-2">
                  <Link
                    href={role.href}
                    className="inline-flex items-center text-[12px] font-semibold text-[#4267D5] transition-colors hover:text-[#243B73]"
                  >
                    {role.linkText}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
