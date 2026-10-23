"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InteroperabilityProvenance() {
  const stack = [
    {
      title: "Source systems",
      desc: "Keep the record",
      bg: "bg-white",
      indent: "lg:ml-0",
    },
    {
      title: "Permissioned layer",
      desc: "Routes and tracks",
      bg: "bg-[#F1EEFE]",
      indent: "lg:ml-6",
    },
    {
      title: "Status evidence",
      desc: "Source and time",
      bg: "bg-[#E8E0FF]",
      indent: "lg:ml-12",
    },
  ];

  return (
    <section
      id="interoperability"
      className="relative w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Visual Container with Shadow and Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65 }}
            className="flex justify-center lg:col-span-6"
          >
            <div className="relative h-[320px] sm:h-[440px] w-full max-w-[620px] overflow-hidden rounded-[32px] shadow-[0px_24px_50px_0px_rgba(47,66,203,0.2)] bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF]">
              {/* Decorative Frame */}
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <Image
                  src="/hospitals-clinics/interop_frame.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Office / Systems Visual */}
              <div className="relative h-full w-full">
                <Image
                  src="/hospitals-clinics/interop_office.png"
                  alt="Clinical Systems and Interoperability"
                  fill
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Heading, Subtitle & Cascading Layered Cards */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col lg:col-span-6"
          >
            {/* Eyebrow */}
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              INTEROPERABILITY AND PROVENANCE
            </span>

            {/* H2 */}
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
              Designed to connect
              <br className="hidden sm:inline" />
              without replacing clinical systems.
            </h2>

            {/* Paragraph */}
            <p className="mt-4 max-w-[600px] text-[16px] font-normal leading-[1.68] text-[#273444] sm:text-[17px]">
              The direction is partner-specific, standards-oriented and linked
              to the source. Standards or EHR connections are named only when a
              source registry verifies the scope.
            </p>

            {/* Cascading Cards Stack */}
            <div className="mt-8 flex flex-col gap-3">
              {stack.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className={`flex items-center justify-between rounded-[16px] border border-[#D9D3F5] ${item.bg} px-6 py-4 shadow-sm transition-transform hover:-translate-y-0.5 ${item.indent}`}
                >
                  <b className="text-[17px] font-semibold text-[#031974]">
                    {item.title}
                  </b>
                  <span className="text-[15.5px] font-normal text-[#273444]">
                    {item.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
