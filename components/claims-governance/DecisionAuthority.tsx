"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const authorities = [
  {
    owner: "Payer",
    title: "Coverage & adjudication",
    description: "Decides coverage and claim outcomes.",
    image: "/claims-governance/authority-payer.png",
    alt: "Payer analyst",
  },
  {
    owner: "Licensed provider",
    title: "Medical decisions",
    description: "Owns diagnosis and treatment.",
    image: "/claims-governance/authority-provider.png",
    alt: "Licensed provider",
  },
  {
    owner: "Billing party",
    title: "Submitted records",
    description: "Responsible for what it submits.",
    image: "/claims-governance/authority-billing.png",
    alt: "Billing records",
  },
  {
    owner: "Zoiko Access",
    title: "Coordination information",
    description: "Proposed coordination information only.",
    image: "/claims-governance/authority-technology.png",
    alt: "Coordination technology",
  },
];

export default function DecisionAuthority() {
  return (
    <section
      id="authority"
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(180deg, rgba(243, 239, 254, 1) 0%, rgba(233, 227, 252, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <div className="inline-flex items-center gap-2.5">
            <span
              className="h-[2px] w-[22px] rounded-full bg-[#7657E8]"
              aria-hidden="true"
            />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
              Decision authority
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.15] tracking-tight text-[#16245A] sm:text-[40px]">
            Each party owns its own decisions.
          </h2>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {authorities.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-[14px] border border-[#E3E8F2] bg-white shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)] transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Media */}
              <div className="relative h-[188px] w-full overflow-hidden bg-gradient-to-br from-[#DCD3FB] to-[#C7D3F5]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4267D5]">
                  {card.owner}
                </span>

                <h3 className="mt-2 text-[19px] font-semibold leading-[1.35] text-[#16245A]">
                  {card.title}
                </h3>

                <p className="mt-2 text-[15px] font-normal leading-[1.6] text-[#5B6678]">
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
