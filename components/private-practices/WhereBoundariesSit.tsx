"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "scheduling",
    label: "Scheduling boundary",
    title: "Scheduling boundary",
    image: "/private-practices/boundary-scheduling.png",
    alt: "Practice scheduling consultation",
    bullets: [
      "The practice owns its schedule.",
      "A request is not a confirmed booking.",
      "Slots appear only where a partner is authorized.",
    ],
    ctaText: "Learn about: Scheduling & patient access",
    ctaHref: "/scheduling-patient-access",
  },
  {
    id: "referrals",
    label: "Referrals and continuity",
    title: "Referrals and continuity",
    image: "/private-practices/route-referral.png",
    alt: "Referral coordination and clinical review",
    bullets: [
      "The practice decides which incoming referrals to accept.",
      "Electronic receipt does not imply clinical acceptance.",
      "Follow-up responsibility is explicitly tracked at every stage.",
    ],
    ctaText: "Learn about: Referral intake & routing",
    ctaHref: "/referral-intake-routing",
  },
  {
    id: "communication",
    label: "Communication and patient agency",
    title: "Communication and patient agency",
    image: "/private-practices/route-scheduling.png",
    alt: "Patient communication and appointment management",
    bullets: [
      "Patient messages reach designated practice team members.",
      "Clear status updates inform patients without clinical delay.",
      "Patients maintain visibility into appointment and referral states.",
    ],
    ctaText: "Learn about: Secure communication",
    ctaHref: "/secure-communication",
  },
  {
    id: "systems",
    label: "System boundaries",
    title: "System boundaries",
    image: "/private-practices/route-outpatient.png",
    alt: "EHR interoperability and source systems",
    bullets: [
      "Zoiko Access does not replace the practice's source EHR.",
      "Data access adheres to minimum necessary principles.",
      "Participating systems keep sovereign control of patient records.",
    ],
    ctaText: "Learn about: Care pathways",
    ctaHref: "/care-pathways",
  },
];

export default function WhereBoundariesSit() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]"
      style={{
        background:
          "linear-gradient(154deg, rgba(4, 20, 100, 1) 0%, rgba(47, 66, 203, 1) 58%, rgba(121, 63, 241, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#C9B8FF] uppercase">
            WHERE THE BOUNDARIES SIT
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
            Four areas, one rule: sources stay in charge
          </h2>
        </motion.div>

        {/* 2-Column Tabs Layout */}
        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Tab Buttons */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full rounded-[16px] px-5 py-4.5 text-left text-[16px] font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0023B3] text-white shadow-md ring-2 ring-white/20"
                      : "border border-[#D9D3F5] bg-white text-[#031974] hover:bg-[#F1EEFE] shadow-xs"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Tab Details Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 overflow-hidden rounded-[28px] border border-[#D9D3F5] bg-white shadow-xl sm:grid-cols-12"
              >
                {/* Left Visual with Frame SVG & Image */}
                <div className="relative h-[260px] sm:h-auto sm:min-h-[360px] w-full bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF] sm:col-span-5 overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 opacity-40">
                    <Image
                      src="/private-practices/boundary-frame.svg"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-full w-full">
                    <Image
                      src={current.image}
                      alt={current.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Right Text Content */}
                <div className="flex flex-col justify-between p-6 sm:p-8 sm:col-span-7">
                  <div>
                    <h3 className="text-[22px] sm:text-[24px] font-semibold tracking-[-0.02em] text-[#031974]">
                      {current.title}
                    </h3>
                    <ul className="mt-5 space-y-3 pl-1">
                      {current.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start text-[15.5px] sm:text-[16px] leading-[1.6] text-[#273444]"
                        >
                          <span className="mr-2.5 font-bold text-[#7B3FF2] select-none">
                            –
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-2">
                    <Link
                      href={current.ctaHref}
                      className="inline-flex w-full items-center justify-center rounded-[20px] border border-[#031974] bg-white px-5 py-3 text-[14.5px] sm:text-[15px] font-semibold text-[#031974] shadow-xs transition-all hover:bg-[#031974]/5 active:scale-[0.98]"
                    >
                      {current.ctaText}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
