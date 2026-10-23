"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const roles = [
  {
    image: "/private-practices/role-clinicians.png",
    alt: "Practice clinician attending patient",
    title: "Practice clinicians",
    desc: "Own diagnosis and treatment.",
  },
  {
    image: "/private-practices/role-organization.png",
    alt: "Healthcare organization administrative team",
    title: "The organization",
    desc: "Owns its source records and scheduling decisions.",
  },
  {
    image: "/private-practices/role-zoiko.png",
    alt: "Zoiko Access digital coordination platform",
    title: "Zoiko Access",
    desc: "May facilitate governed coordination where authorized.",
  },
];

export default function RolesResponsibilities() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
            ROLES, RESPONSIBILITIES AND SAFETY
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#031974]">
            Who is responsible for what
          </h2>
        </motion.div>

        {/* 3 Trio Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="flex flex-col overflow-hidden bg-white transition-all hover:translate-y-[-2px]"
            >
              {/* Arch Shaped Visual */}
              <div
                className="relative h-[260px] w-full overflow-hidden border-[3px] border-white shadow-[0px_12px_28px_0px_rgba(47,66,203,0.18)]"
                style={{
                  borderRadius: "999px 999px 18px 18px",
                  background:
                    "linear-gradient(148deg, rgba(232, 226, 255, 1) 0%, rgba(213, 220, 255, 1) 100%)",
                }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="flex min-h-[108px] flex-col justify-center rounded-b-[10px] border border-t-0 border-[#D9D3F5] bg-white px-5 py-4.5 text-center shadow-xs">
                <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-[#031974]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[14.5px] leading-[1.6] text-[#273444]">
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
