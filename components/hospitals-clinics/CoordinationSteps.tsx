"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CoordinationSteps() {
  const steps = [
    {
      number: "01",
      title: "Set location and service context",
      desc: "Start from where care is needed.",
      image: "/hospitals-clinics/step_1.png",
    },
    {
      number: "02",
      title: "Understand source information",
      desc: "Read what each organization publishes.",
      image: "/hospitals-clinics/step_2.png",
    },
    {
      number: "03",
      title: "Use an authorized institutional pathway",
      desc: "Only where one is approved.",
      image: "/hospitals-clinics/step_3.png",
    },
    {
      number: "04",
      title: "Track evidenced handoff status",
      desc: "Status comes from the responsible organization.",
      image: "/hospitals-clinics/step_4.png",
    },
  ];

  return (
    <section
      id="how"
      className="relative w-full py-16 sm:py-20 lg:py-24 text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, rgba(2, 18, 95, 1) 0%, rgba(47, 66, 203, 1) 60%, rgba(123, 63, 242, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#C9B8FF] uppercase">
            HOW INSTITUTIONAL COORDINATION WORKS
          </span>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-white sm:text-[38px] lg:text-[42px]">
            Four steps
          </h2>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col overflow-hidden rounded-[22px] bg-white p-4 shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Illustration / Graphic */}
              <div className="relative h-[220px] w-full overflow-hidden rounded-[16px] bg-[#F1EEFE]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover object-center"
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col pt-4 pb-2 px-1">
                <span className="text-[12px] font-bold text-[#7B3FF2]">
                  STEP {step.number}
                </span>
                <h3 className="mt-1 text-[17px] font-semibold leading-[1.28] tracking-[-0.02em] text-[#031974]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] font-normal leading-[1.5] text-[#273444]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
