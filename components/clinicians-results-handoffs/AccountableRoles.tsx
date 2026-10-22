"use client";

import Image from "next/image";

interface RoleCard {
  image: string;
  imageAlt: string;
  badge: string;
  badgeColor: "blue" | "purple" | "slate";
  title: string;
  description: string;
  points: string[];
}

const roleCards: RoleCard[] = [
  {
    image: "/clinicians-results-handoffs/crh3.jpg",
    imageAlt: "Clinical laboratory diagnostic workstation",
    badge: "Originating organization",
    badgeColor: "blue",
    title: "Owns the source report",
    description:
      "The lab, imaging service or care organization that produced the result.",
    points: [
      "The report and its correction history",
      "Release rules",
      "Its own reporting duties",
    ],
  },
  {
    image: "/clinicians-results-handoffs/crh4.jpg",
    imageAlt: "Clinician with stethoscope",
    badge: "Receiving clinician & organization",
    badgeColor: "purple",
    title: "Owns review and follow-up",
    description:
      "The authorized clinician and organization responsible for the patient's care.",
    points: [
      "Clinical review and interpretation",
      "Escalation under local rules",
      "Communication with the patient",
    ],
  },
  {
    image: "/clinicians-results-handoffs/crh5.jpg",
    imageAlt: "Care coordination analytics interface",
    badge: "Zoiko Access",
    badgeColor: "slate",
    title: "Coordinates the handoff",
    description:
      "Supports authorized navigation and records evidence of events where enabled.",
    points: [
      "Permissioned routing between participants",
      "Showing who recorded each event",
    ],
  },
];

export default function AccountableRoles() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="h-0.5 w-4 bg-[#6d5ae6]" />
          <span>WHO IS ACCOUNTABLE</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-10 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)] leading-tight">
          The source and the recipient <br className="hidden sm:inline" />
          are never the same role.
        </h2>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {roleCards.map((card, index) => {
            let badgeStyle = "";
            if (card.badgeColor === "blue") {
              badgeStyle = "bg-[#dbeafe] text-[#1d4ed8]";
            } else if (card.badgeColor === "purple") {
              badgeStyle = "bg-[#ede9fe] text-[#7c3aed]";
            } else {
              badgeStyle = "bg-[#f1f5f9] text-[#475569]";
            }

            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-shadow hover:shadow-md"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative mb-5 h-[190px] sm:h-[210px] w-full overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Badge */}
                  <div className="mb-2.5">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${badgeStyle}`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="mb-2 text-[18px] font-bold text-slate-900 [font-family:var(--font-poppins)]">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mb-5 text-[13px] leading-relaxed text-slate-600">
                    {card.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="border-t border-slate-100 pt-4">
                  <ul className="space-y-2 text-[12.5px] text-slate-600">
                    {card.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
