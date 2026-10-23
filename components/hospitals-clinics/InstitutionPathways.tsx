"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Pathway {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  note: string;
}

const pathways: Pathway[] = [
  {
    id: "hospitals",
    tabLabel: "Hospitals & clinic networks",
    badge: "INFORMATION ONLY",
    title: "Hospitals & clinic networks",
    description:
      "Large delivery organizations and multi-site networks exploring coordinated service information, access workflows and authorized handoffs, while each site keeps its own systems and clinical authority.",
    image: "/hospitals-clinics/pathway_hospitals.png",
    note: "No participation, licensing, insurer contract or geography is implied.",
  },
  {
    id: "practices",
    tabLabel: "Private practices",
    badge: "INFORMATION ONLY",
    title: "Private practices",
    description:
      "Independent medical practices, group providers, and ambulatory partnerships seeking traceable referral intake, clear status tracking, and structured scheduling requests while preserving clinic independence.",
    image: "/hospitals-clinics/pathway_hospitals.png",
    note: "Specific workflow integrations and features are available only where approved and supported.",
  },
  {
    id: "outpatient",
    tabLabel: "Outpatient & specialist services",
    badge: "INFORMATION ONLY",
    title: "Outpatient & specialist services",
    description:
      "Specialty care departments, diagnostic clinics, and ambulatory procedure units managing protocol-driven intake, clinical triage, and transparent handoffs with referring medical systems.",
    image: "/hospitals-clinics/pathway_hospitals.png",
    note: "All clinical criteria and appointment determinations remain under local medical governance.",
  },
];

export default function InstitutionPathways() {
  const [activeTab, setActiveTab] = useState(0);
  const activePathway = pathways[activeTab];

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
            INSTITUTION PATHWAYS
          </span>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            Find the fit for your organization
          </h2>
          <p className="mt-3 max-w-[720px] text-[16px] font-normal leading-[1.68] text-[#273444] sm:text-[17.5px]">
            Three separate pathways. Each one links to its own page only where
            that page is live.
          </p>
        </motion.div>

        {/* Tab Selector Buttons */}
        <div className="mt-8 flex flex-wrap gap-2 rounded-full bg-[#F1EEFE] p-1.5 w-fit">
          {pathways.map((pathway, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={pathway.id}
                onClick={() => setActiveTab(idx)}
                className={`rounded-full px-5 py-2.5 text-[14.5px] font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#031974] text-white shadow-sm"
                    : "text-[#031974] hover:bg-white/60"
                }`}
              >
                {pathway.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Pathway Card */}
        <motion.div
          key={activePathway.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 overflow-hidden rounded-[30px] border border-[#D9D3F5] bg-white p-6 sm:p-9 shadow-sm"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Image in decorative background */}
            <div className="relative h-[300px] sm:h-[380px] w-full overflow-hidden rounded-[22px] lg:col-span-6 bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF]">
              {/* Decorative Frame */}
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <Image
                  src="/hospitals-clinics/pathway_frame.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-full w-full">
                <Image
                  src={activePathway.image}
                  alt={activePathway.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: Information & Note */}
            <div className="flex flex-col justify-center lg:col-span-6">
              {/* Pill Badge */}
              <div className="inline-flex w-fit items-center rounded-full border border-[#D9D3F5] bg-[#F1EEFE] px-3.5 py-1">
                <span className="text-[11px] font-extrabold tracking-[0.07em] text-[#7B3FF2] uppercase">
                  {activePathway.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.02em] text-[#031974] sm:text-[26px]">
                {activePathway.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[15px] font-normal leading-[1.68] text-[#273444] sm:text-[16px]">
                {activePathway.description}
              </p>

              {/* Callout Note */}
              <div className="mt-6 rounded-r-[12px] border-l-4 border-[#7B3FF2] bg-[#F8F9FE] px-5 py-3.5">
                <p className="text-[14px] font-normal leading-[1.6] text-[#273444]">
                  {activePathway.note}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
