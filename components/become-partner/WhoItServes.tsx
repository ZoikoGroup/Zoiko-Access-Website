"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AudienceCard {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const audienceCards: AudienceCard[] = [
  {
    title: "Insurers",
    description: "Exploring member access and coordination approaches.",
    image: "/become-partner/who-insurers.png",
    alt: "Insurer team analyzing health access workflows",
  },
  {
    title: "Payers & health plans",
    description: "Evaluating member programs and integration fit.",
    image: "/become-partner/who-payers-health-plans.png",
    alt: "Health plan operations meeting",
  },
  {
    title: "Third-party administrators",
    description: "Managing multiple plans and employers.",
    image: "/become-partner/who-tpas.png",
    alt: "Administrator reviewing documents and benefit plans",
  },
  {
    title: "Benefits organizations",
    description: "Supporting member benefits navigation.",
    image: "/become-partner/who-benefits-organizations.png",
    alt: "Benefits organization team collaborating",
  },
];

export default function WhoItServes() {
  return (
    <section id="who-it-serves" className="w-full bg-white py-16 sm:py-20 lg:py-[70px]">
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
              Who this pathway serves
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.2] tracking-tight text-[#16245A] sm:text-[38px] lg:text-[40px]">
            Built for benefits organizations.
          </h2>

          {/* Lead */}
          <p className="mt-3 max-w-[760px] text-[16px] font-normal leading-[1.65] text-[#5B6678] sm:text-[17px]">
            Looking for help with your own coverage? Please contact your health plan or care provider —
            this page can&apos;t check coverage.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audienceCards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#E3E8F2] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {/* Media image */}
              <div className="relative h-[188px] w-full overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[19px] font-semibold leading-[26px] text-[#16245A]">
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
