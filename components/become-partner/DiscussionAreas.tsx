"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface DiscussionCard {
  title: string;
  description: string;
  linkText: string;
  href: string;
  image: string;
  alt: string;
}

const discussionCards: DiscussionCard[] = [
  {
    title: "Benefits navigation",
    description: "Helping members understand plan information.",
    linkText: "Learn more →",
    href: "/eligibility-benefits",
    image: "/become-partner/discussion-benefits-navigation.png",
    alt: "Benefits navigation and healthcare options",
  },
  {
    title: "Member access",
    description: "Permission-bound member journeys.",
    linkText: "Learn more →",
    href: "/member-access",
    image: "/become-partner/discussion-member-access.png",
    alt: "Family and members accessing care coordination",
  },
  {
    title: "Interoperability",
    description: "Governed, standards-aware exchange.",
    linkText: "Learn more →",
    href: "#technical-diligence",
    image: "/become-partner/discussion-interoperability.png",
    alt: "Interoperable health data systems",
  },
  {
    title: "Responsible governance",
    description: "Contracts, privacy, audit and controls.",
    linkText: "Learn more →",
    href: "#technical-diligence",
    image: "/become-partner/discussion-governance.png",
    alt: "Responsible governance and compliance review",
  },
];

export default function DiscussionAreas() {
  return (
    <section
      id="discussion-areas"
      className="w-full bg-gradient-to-b from-[#F3EFFE] via-[#F0ECFD] to-[#E9E3FC] py-16 sm:py-20 lg:py-[70px]"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5">
            <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
              Partnership discussion areas
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.2] tracking-tight text-[#16245A] sm:text-[38px] lg:text-[40px]">
            What a partnership could explore.
          </h2>
        </motion.div>

        {/* 4 Cards */}
        <div className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {discussionCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
            >
              <Link
                href={card.href}
                className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-[#E3E8F2] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                {/* Image */}
                <div className="relative h-[188px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-[19px] font-semibold leading-[26px] text-[#16245A]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[15px] font-normal leading-[24px] text-[#5B6678]">
                      {card.description}
                    </p>
                  </div>

                  <span className="mt-5 inline-flex items-center text-[14.5px] font-semibold text-[#7657E8] transition-colors group-hover:text-[#5d3edb]">
                    {card.linkText}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
