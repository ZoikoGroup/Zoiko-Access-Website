"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ResponsibilityCard {
  owner: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const responsibilityCards: ResponsibilityCard[] = [
  {
    owner: "Payer",
    title: "Coverage & benefits",
    description: "Plan rules, coverage decisions and claim adjudication.",
    image: "/become-partner/responsibility-payer.png",
    alt: "Payer organization managing health benefits and plan rules",
  },
  {
    owner: "Provider",
    title: "Clinical care",
    description: "Diagnosis, treatment and clinical records.",
    image: "/become-partner/responsibility-provider.png",
    alt: "Clinical care provider diagnosing and treating patient",
  },
  {
    owner: "Zoiko Access",
    title: "Navigation concept",
    description: "A proposed coordination and navigation layer only.",
    image: "/become-partner/responsibility-technology.png",
    alt: "Zoiko Access coordination and navigation software layer",
  },
];

export default function PartnerResponsibilities() {
  return (
    <section id="responsibilities" className="w-full bg-white py-16 sm:py-20 lg:py-[70px]">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
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
            <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
              Responsibilities &amp; boundaries
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.2] tracking-tight text-[#16245A] sm:text-[38px] lg:text-[40px]">
            A partnership doesn&apos;t move responsibility.
          </h2>
        </motion.div>

        {/* 3 Column Cards Grid */}
        <div className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {responsibilityCards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#E3E8F2] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {/* Media image */}
              <div className="relative h-[255px] w-full overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4267D5]">
                  {card.owner}
                </span>
                <h3 className="mt-2 text-[19px] font-semibold leading-[26px] text-[#16245A]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[15px] font-normal leading-[24px] text-[#5B6678]">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
