"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface RelatedItem {
  title: string;
  href: string;
  img: string;
  bgSvg: string;
}

const relatedItems: RelatedItem[] = [
  {
    title: "Hospitals & Clinics overview",
    href: "/hospitals-clinics",
    img: "/referral-intake-routing/related-hospitals-overview.png",
    bgSvg: "/referral-intake-routing/related-bg-1.svg",
  },
  {
    title: "Scheduling & patient access",
    href: "/scheduling-patient-access",
    img: "/referral-intake-routing/related-scheduling-access.png",
    bgSvg: "/referral-intake-routing/related-bg-2.svg",
  },
  {
    title: "Care transitions",
    href: "/care-pathways",
    img: "/referral-intake-routing/related-care-transitions.png",
    bgSvg: "/referral-intake-routing/related-bg-3.svg",
  },
  {
    title: "EHR interoperability",
    href: "/secure-communication",
    img: "/referral-intake-routing/related-ehr-interoperability.png",
    bgSvg: "/referral-intake-routing/related-bg-4.svg",
  },
];

export default function RelatedPathways() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
            RELATED
          </span>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            Keep exploring
          </h2>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <Link
                href={item.href}
                className="group flex flex-col overflow-hidden rounded-[18px] border border-[#D9D3F5] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Visual Image Container */}
                <div
                  className="relative h-[195px] w-full overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(148deg, rgba(232, 226, 255, 1) 0%, rgba(213, 220, 255, 1) 100%)",
                  }}
                >
                  {/* Subtle Background SVG */}
                  <div className="pointer-events-none absolute inset-0 opacity-40">
                    <Image
                      src={item.bgSvg}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Main Card Photo */}
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title Banner */}
                <div className="flex items-center justify-between p-4 bg-white border-t border-[#F1EEFE]">
                  <span className="text-[15px] font-semibold text-[#031974] group-hover:text-[#7B3FF2] transition-colors">
                    {item.title}
                  </span>
                  <span className="text-[14px] text-[#7B3FF2] transition-transform group-hover:translate-x-1">
                    ↗
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
