"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const childCards = [
  {
    image: "/understand-your-options/how-it-works.webp",
    alt: "Clinician explaining the process on a tablet",
    title: "How Zoiko Access works",
    description:
      "The four stages from choosing a location to a confirmed update.",
    linkText: "Read the guide →",
    href: "/how-it-works",
  },
  {
    image: "/understand-your-options/healthcare-services.webp",
    alt: "Healthcare professional in a clinic",
    title: "Explore healthcare services",
    description:
      "The types of care settings and services, explained plainly.",
    linkText: "Explore services →",
    href: "/healthcare-services",
  },
  {
    image: "/understand-your-options/care-pathways.webp",
    alt: "Care pathways and clinical coordination",
    title: "Care pathways explained",
    description:
      "How organizations hand off care, and who decides each step.",
    linkText: "Understand pathways →",
    href: "/care-pathways",
  },
];

export default function ChildPaths() {
  return (
    <section id="places-to-start" className="w-full bg-white py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5">
            <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
              Three places to start
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] sm:text-[40px] [font-family:var(--font-poppins)]">
            Choose what you want to understand.
          </h2>

          {/* Lead */}
          <p className="mt-3.5 max-w-[720px] text-[16.5px] leading-[26.4px] text-[#5B6678]">
            Each guide is informational. None of them confirms that a local
            service is active.
          </p>
        </motion.div>

        {/* 3 Cards */}
        <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {childCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col justify-between overflow-hidden rounded-[16px] border border-[#E3E8F2] bg-white shadow-[0px_10px_20px_0px_rgba(36,59,115,0.1)] transition-all hover:-translate-y-1 hover:shadow-[0px_16px_32px_0px_rgba(36,59,115,0.14)]"
            >
              <div>
                {/* Media Image */}
                <div className="relative h-[232px] w-full overflow-hidden bg-gradient-to-br from-[#DCD3FB] to-[#C7D3F5]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Status Pill */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E7EEFC] px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#243B73]" aria-hidden="true" />
                    <span className="text-[12px] font-semibold text-[#243B73]">
                      Information
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 text-[18px] font-semibold leading-[24.3px] text-[#16245A] [font-family:var(--font-poppins)]">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[14.5px] leading-[23.2px] text-[#5B6678]">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-6 pb-6 pt-1">
                <Link
                  href={card.href}
                  className="inline-flex items-center text-[13.5px] font-semibold text-[#7657E8] transition-colors hover:text-[#5d3ec9]"
                >
                  {card.linkText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
