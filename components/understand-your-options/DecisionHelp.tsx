"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const prompts = [
  {
    image: "/understand-your-options/decision-publisher.webp",
    alt: "Reviewing a source",
    title: "Who published this?",
    desc: "Is the source named, and when was it last checked?",
  },
  {
    image: "/understand-your-options/decision-setting.webp",
    alt: "Care setting",
    title: "Which care setting fits?",
    desc: "Is this primary, specialist or community care — and who can tell you?",
  },
  {
    image: "/understand-your-options/decision-availability.webp",
    alt: "Checking availability",
    title: "Is it available where I am?",
    desc: "Is the service published for my location, and is it currently open?",
  },
  {
    image: "/understand-your-options/decision-clinician.webp",
    alt: "Responsible clinician",
    title: "Who is responsible, and am I eligible?",
    desc: "Which team decides, and what conditions apply before I can use it?",
  },
];

export default function DecisionHelp() {
  return (
    <section className="w-full bg-[#FBFAFF] py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5">
            <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
              Decision help
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] sm:text-[40px] [font-family:var(--font-poppins)]">
            Questions to ask before your next step.
          </h2>

          {/* Lead */}
          <p className="mt-3.5 max-w-[760px] text-[16.5px] leading-[26.4px] text-[#5B6678]">
            Prompts to help you think — not medical advice. For urgent concerns,
            contact local emergency services.
          </p>
        </motion.div>

        {/* 2x2 Grid of Role Cards */}
        <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {prompts.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center gap-5 rounded-[18px] border border-[#E3E8F2] bg-white p-4 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0px_14px_28px_0px_rgba(0,0,0,0.12)] sm:flex-row"
            >
              {/* Media thumbnail */}
              <div className="relative h-[160px] w-full shrink-0 overflow-hidden rounded-[14px] bg-gradient-to-br from-[#DCD3FB] to-[#C7D3F5] sm:w-[200px]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center sm:pr-2">
                <h3 className="text-[18px] font-semibold leading-[24.3px] text-[#16245A] [font-family:var(--font-poppins)]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[14.5px] leading-[23.2px] text-[#5B6678]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
