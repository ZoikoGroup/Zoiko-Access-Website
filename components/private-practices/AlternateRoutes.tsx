"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const routes = [
  {
    title: "Hospitals & clinic networks",
    badge: "Information page",
    image: "/private-practices/route-hospitals.png",
    alt: "Hospitals and clinical healthcare networks",
    href: "/hospitals-clinics",
  },
  {
    title: "Outpatient & specialist services",
    badge: "Information page",
    image: "/private-practices/route-outpatient.png",
    alt: "Outpatient and specialist healthcare services",
    href: "/outpatient-specialist-services",
  },
  {
    title: "Scheduling & patient access",
    badge: "Information page",
    image: "/private-practices/route-scheduling.png",
    alt: "Patient scheduling and care access coordination",
    href: "/scheduling-patient-access",
  },
  {
    title: "Referral intake",
    badge: "Information page",
    image: "/private-practices/route-referral.png",
    alt: "Clinical referral intake and handoff routing",
    href: "/referral-intake-routing",
  },
];

export default function AlternateRoutes() {
  return (
    <section className="relative w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24">
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
            ALTERNATE ROUTES
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#031974]">
            Keep exploring
          </h2>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((route, idx) => (
            <motion.div
              key={route.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
            >
              <Link
                href={route.href}
                className="group flex flex-col overflow-hidden rounded-[18px] border border-[#D9D3F5] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Visual Area */}
                <div
                  className="relative h-[195px] w-full overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(148deg, rgba(232, 226, 255, 1) 0%, rgba(213, 220, 255, 1) 100%)",
                  }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={route.image}
                      alt={route.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col p-4 sm:p-5">
                  <h3 className="text-[16.5px] font-semibold tracking-[-0.02em] text-[#031974] transition-colors group-hover:text-[#7B3FF2]">
                    {route.title}
                  </h3>
                  <span className="mt-1 text-[12.5px] text-[#556666]">
                    {route.badge}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
