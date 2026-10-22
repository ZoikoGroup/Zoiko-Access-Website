"use client";

import Image from "next/image";
import { User, Users, FolderArchive } from "lucide-react";

interface GuardrailCard {
  image: string;
  imageAlt: string;
  icon: typeof User;
  title: string;
  description: string;
}

const guardrails: GuardrailCard[] = [
  {
    image: "/for-clinicians/fc12.png",
    imageAlt: "Patient authorization illustration",
    icon: User,
    title: "Patient authorization",
    description:
      "A handoff relies on the patient's authorization or other legal authority, under local rules.",
  },
  {
    image: "/for-clinicians/fc13.png",
    imageAlt: "Organizational scope illustration",
    icon: Users,
    title: "Organizational scope",
    description:
      "Each participating organization, and each role in it, sees only what its scope allows.",
  },
  {
    image: "/for-clinicians/fc14.png",
    imageAlt: "Source-record accountability illustration",
    icon: FolderArchive,
    title: "Source-record accountability",
    description:
      "The source organization stays accountable for its own records, and every handoff keeps its source.",
  },
];

export default function HandoffGuardrails() {
  return (
    <section className="w-full bg-gradient-to-b from-[#132f9e] via-[#102787] to-[#0c1f6d] py-16 lg:py-24 text-white">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-semibold text-[#c4b5fd]">
          <span className="h-0.5 w-3.5 bg-[#c4b5fd]" />
          <span>Permissioned handoffs</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-3 font-bold tracking-tight text-white text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          Three guardrails on every cross-organization handoff
        </h2>

        {/* Subtitle */}
        <p className="mb-12 max-w-[640px] text-[14px] sm:text-[15px] leading-relaxed text-blue-100/85">
          Data is minimized and access is denied by default. There is no central
          worldwide chart.
        </p>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {guardrails.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d2274]/90 shadow-xl backdrop-blur-sm"
              >
                {/* Illustration Box */}
                <div className="relative flex h-[180px] w-full items-center justify-center bg-[#071549] p-4 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    width={260}
                    height={160}
                    className="max-h-[145px] w-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Bottom Content Area */}
                <div className="flex flex-1 flex-col border-t border-white/5 bg-[#0f257a]/90 p-6 sm:p-7">
                  {/* Icon Badge */}
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/90">
                    <IconComponent className="h-4 w-4" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-[17px] sm:text-[18px] font-bold text-white [font-family:var(--font-poppins)]">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-blue-100/75">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
