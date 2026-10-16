"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CONDITIONS = [
  {
    image: "/request-appointment/condition-provider-capacity.webp",
    alt: "Healthcare facility review of patient capacity and provider scheduling availability",
    title: "A provider may not have capacity",
    description:
      "A published organization or supported request mode does not guarantee that new appointments can be accepted.",
  },
  {
    image: "/request-appointment/condition-preference-not-reserved.webp",
    alt: "Calendar and scheduling preferences illustration showing tentative date selections",
    title: "A preference is not a reserved time",
    description:
      "Choosing a preferred date in an approved request flow does not hold inventory or confirm an appointment.",
  },
  {
    image: "/request-appointment/condition-coverage-separate.webp",
    alt: "Healthcare representation and insurance coverage documentation",
    title: "Coverage and representation are separate",
    description:
      "Payer conditions and lawful authority to act for someone else are independent of public location preference.",
  },
];

export default function BeforeYouConsider() {
  return (
    <section
      className="w-full py-16 sm:py-20 lg:py-24 font-sans"
      style={{
        background:
          "linear-gradient(180deg, rgba(246, 243, 255, 1) 0%, rgba(236, 231, 255, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[720px]"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2.5">
            <span
              className="h-2 w-2 rounded-full bg-[#8E7BEF]"
              aria-hidden="true"
            />
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5B49C8]">
              Before you consider a request
            </span>
          </div>

          {/* Heading 2 */}
          <h2 className="mt-3.5 font-bold tracking-tight text-[#241C59] text-[28px] sm:text-[34px] lg:text-[37.6px] leading-[1.25]">
            Availability is not a
            <br />
            guaranteed outcome.
          </h2>

          {/* Description */}
          <p className="mt-4 text-[15px] font-normal leading-[1.65] text-[#5E5A86] sm:text-[16px]">
            Each condition must be checked by the responsible source in an
            authorized service.
          </p>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[22px]">
          {CONDITIONS.map((cond, idx) => (
            <motion.article
              key={cond.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="flex flex-col overflow-hidden rounded-[18px] border border-[#E3DEF8] bg-white p-5 shadow-[0_4px_20px_rgba(36,28,89,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(36,28,89,0.06)]"
            >
              <div className="relative h-[220px] w-full overflow-hidden rounded-[12px] bg-gray-100">
                <Image
                  src={cond.image}
                  alt={cond.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 370px"
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              <div className="mt-5 flex flex-1 flex-col justify-start">
                <h3 className="text-[17.3px] font-bold text-[#241C59]">
                  {cond.title}
                </h3>
                <p className="mt-2.5 text-[15.2px] font-normal leading-[1.6] text-[#5E5A86]">
                  {cond.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
