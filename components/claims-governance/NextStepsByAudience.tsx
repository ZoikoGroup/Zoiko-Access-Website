"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const audiences = [
  {
    owner: "Patients & members",
    title: "Contact your insurer or provider",
    description: "They hold your claim and its decision.",
    image: "/claims-governance/next-patients.png",
    alt: "Member at home",
    linkText: null,
    href: null,
  },
  {
    owner: "Providers",
    title: "Use your contracted channels",
    description: "Submit and follow up through agreed payer routes.",
    image: "/claims-governance/next-providers.png",
    alt: "Provider office",
    linkText: null,
    href: null,
  },
  {
    owner: "Enterprises",
    title: "Review the implementation approach",
    description: "The approved discovery route for institutions.",
    image: "/claims-governance/next-enterprises.png",
    alt: "Enterprise team",
    linkText: "Explore →",
    href: "/become-partner",
  },
];

export default function NextStepsByAudience() {
  return (
    <section id="next-steps" className="w-full bg-white py-16 sm:py-20 lg:py-24">
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
              Next steps by audience
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.15] tracking-tight text-[#16245A] sm:text-[40px]">
            The right next step for you.
          </h2>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {audiences.map((card, idx) => (
            <motion.article
              key={card.owner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-[14px] border border-[#E3E8F2] bg-white shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)] transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-[255px] w-full overflow-hidden bg-gradient-to-br from-[#DCD3FB] to-[#C7D3F5]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
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

                {card.linkText && card.href && (
                  <div className="mt-6 pt-2">
                    <Link
                      href={card.href}
                      className="inline-flex items-center text-[14.5px] font-semibold text-[#7657E8] transition-colors hover:text-[#5d3fcc]"
                    >
                      {card.linkText}
                    </Link>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
