"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface RelatedCard {
  title: string;
  badge: string;
  image: string;
  frame: string;
  href?: string;
  isGated?: boolean;
}

const cards: RelatedCard[] = [
  {
    title: "Scheduling & patient access",
    badge: "Information page",
    image: "/hospitals-clinics/related_scheduling.png",
    frame: "/hospitals-clinics/related_frame_arch.svg",
    href: "/scheduling-patient-access",
  },
  {
    title: "Referral intake",
    badge: "Information page",
    image: "/hospitals-clinics/related_referral.png",
    frame: "/hospitals-clinics/related_frame_rect.svg",
    href: "/how-referrals-work",
  },
  {
    title: "Discharge & transitions",
    badge: "Information page",
    image: "/hospitals-clinics/related_discharge.png",
    frame: "/hospitals-clinics/related_frame_rect.svg",
    href: "/care-pathways",
  },
  {
    title: "EHR interoperability",
    badge: "Information page",
    image: "/hospitals-clinics/related_ehr.png",
    frame: "/hospitals-clinics/related_frame_rect.svg",
    href: "/secure-communication",
  },
  {
    title: "Enterprise onboarding",
    badge: "Gated · not available here",
    image: "/hospitals-clinics/related_enterprise.png",
    frame: "/hospitals-clinics/related_frame_arch.svg",
    isGated: true,
  },
];

export default function RelatedPathways() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
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
            RELATED INSTITUTION PATHWAYS
          </span>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            Keep exploring
          </h2>
        </motion.div>

        {/* 5 Cards Row */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((item, idx) => {
            const Content = (
              <div
                className={`group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#D9D3F5] bg-white transition-all shadow-sm ${
                  item.isGated
                    ? "opacity-80 cursor-default"
                    : "hover:-translate-y-1.5 hover:shadow-md hover:border-[#7B3FF2]/40"
                }`}
              >
                {/* Visual Thumbnail */}
                <div className="relative h-[160px] w-full overflow-hidden bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF]">
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
                      sizes="(max-width: 768px) 100vw, 250px"
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Text Info */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <h3 className="text-[15.5px] font-semibold leading-[1.3] text-[#031974] group-hover:text-[#7B3FF2] transition-colors">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 text-[13px] ${
                      item.isGated ? "text-[#64748B]" : "text-[#7B3FF2] font-medium"
                    }`}
                  >
                    {item.badge}
                  </p>
                </div>
              </div>
            );

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="h-full"
              >
                {item.href ? (
                  <Link href={item.href} className="block h-full">
                    {Content}
                  </Link>
                ) : (
                  Content
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
