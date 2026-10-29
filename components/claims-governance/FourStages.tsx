"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stages = [
  {
    number: "01",
    owner: "Billing party",
    title: "Submission",
    description: "The claim is prepared and sent through contracted channels.",
    image: "/claims-governance/stage-submission.png",
    alt: "Preparing a claim",
  },
  {
    number: "02",
    owner: "Payer",
    title: "Review / adjudication",
    description: "The payer decides under plan terms and contracts.",
    image: "/claims-governance/stage-review.png",
    alt: "Payer review",
  },
  {
    number: "03",
    owner: "Payer",
    title: "Remittance explanation",
    description: "The payer explains the adjudicated outcome.",
    image: "/claims-governance/stage-remittance.png",
    alt: "Remittance documents",
  },
  {
    number: "04",
    owner: "Financial parties",
    title: "Payment or reconciliation",
    description: "Separate issuer and timing; matched by the provider.",
    image: "/claims-governance/stage-reconciliation.png",
    alt: "Reconciliation",
  },
];

export default function FourStages() {
  return (
    <section id="stages" className="w-full bg-white py-16 sm:py-20 lg:py-24">
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
              Four-stage explainer
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.15] tracking-tight text-[#16245A] sm:text-[40px]">
            Four stages, four different owners.
          </h2>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, idx) => (
            <motion.article
              key={stage.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-[14px] border border-[#E3E8F2] bg-white shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)] transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Media with Badge */}
              <div className="relative h-[188px] w-full overflow-hidden bg-gradient-to-br from-[#DCD3FB] to-[#C7D3F5]">
                <Image
                  src={stage.image}
                  alt={stage.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3.5 left-3.5 flex items-center justify-center rounded-full bg-white/92 px-2.5 py-1 backdrop-blur-sm shadow-sm">
                  <span className="text-[12px] font-semibold text-[#243B73]">
                    {stage.number}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4267D5]">
                  {stage.owner}
                </span>

                <h3 className="mt-2 text-[19px] font-semibold leading-[1.35] text-[#16245A]">
                  {stage.title}
                </h3>

                <p className="mt-2 text-[15px] font-normal leading-[1.6] text-[#5B6678]">
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
