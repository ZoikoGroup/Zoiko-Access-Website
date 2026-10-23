"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ClinicalBoundaries() {
  const boundaries = [
    {
      title: "Authorized purpose, minimum data",
      desc: "Only what a permitted purpose needs.",
      image: "/hospitals-clinics/boundary_purpose.png",
      frame: "/hospitals-clinics/boundary_frame_1.svg",
    },
    {
      title: "Providers decide",
      desc: "Clinicians and care organizations own care decisions.",
      image: "/hospitals-clinics/boundary_providers.png",
      frame: "/hospitals-clinics/boundary_frame_2.svg",
    },
    {
      title: "Local deployment",
      desc: "Jurisdiction and partner validation come first. No blanket compliance guarantee.",
      image: "/hospitals-clinics/boundary_deployment.png",
      frame: "/hospitals-clinics/boundary_frame_1.svg",
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7E9F4]">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
            PRIVACY, SECURITY AND CLINICAL BOUNDARIES
          </span>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            Three boundaries that stay in place
          </h2>
        </motion.div>

        {/* 3 Boundary Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {boundaries.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col overflow-hidden rounded-[22px] border border-[#D9D3F5] bg-white p-3.5 shadow-sm transition-all hover:shadow-md"
            >
              {/* Card Image with Gradient/Frame */}
              <div className="relative h-[220px] sm:h-[240px] w-full overflow-hidden rounded-[14px] bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF]">
                <div className="pointer-events-none absolute inset-0 opacity-40">
                  <Image
                    src={item.frame}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-full w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-col px-2 pt-4 pb-2">
                <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-[#031974]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14.5px] font-normal leading-[1.6] text-[#273444]">
                  {item.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
