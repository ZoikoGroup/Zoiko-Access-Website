"use client";

import Image from "next/image";

interface RoleCard {
  image: string;
  imageAlt: string;
  title: string;
  question: string;
  description: string;
}

const roleCards: RoleCard[] = [
  {
    image: "/task-worklist-experience/twe3.jpg",
    imageAlt: "Surgeons looking down into operating field under surgical lamp",
    title: "Clinicians",
    question: "What work might be visible, and who owns the next step?",
    description:
      "Understand assignment, priority source, pending evidence and responsibility.",
  },
  {
    image: "/task-worklist-experience/twe4.jpg",
    imageAlt: "Care coordinator reviewing mobile alerts on phone",
    title: "Coordinators",
    question: "How could handoffs be organized across teams?",
    description:
      "Understand the actor, due window, acknowledgment and where escalation stops.",
  },
  {
    image: "/task-worklist-experience/twe5.jpg",
    imageAlt: "Clinical operations director consulting in patient examination room",
    title: "Clinical operations",
    question: "Does a worklist imply clinical review or medical triage?",
    description:
      "See the difference between an administrative state and clinical judgment.",
  },
];

export default function WholeCareTeamWorklists() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="h-0.5 w-4 bg-[#6d5ae6]" />
          <span>WHO WORKLISTS HELP</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-3 text-[30px] sm:text-[36px] lg:text-[40px] font-bold tracking-tight text-[#111827] [font-family:var(--font-poppins)]">
          Written for the whole care team
        </h2>

        {/* Subtitle */}
        <p className="mb-10 max-w-[640px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          Pick the role closest to yours. These are not credential checks, and
          none of them grants access to anything.
        </p>

        {/* 3 Full-Bleed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {roleCards.map((card, index) => (
            <div
              key={index}
              className="group relative flex h-[380px] sm:h-[420px] flex-col justify-end overflow-hidden rounded-3xl p-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Card Background Image */}
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Navy Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09154a]/95 via-[#09154a]/70 via-45% to-transparent" />

              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="mb-2 text-[20px] font-bold text-white [font-family:var(--font-poppins)]">
                  {card.title}
                </h3>
                <h4 className="mb-1.5 text-[12.5px] font-bold text-white leading-snug">
                  {card.question}
                </h4>
                <p className="text-[12px] leading-relaxed text-blue-100/80">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
