"use client";

import Image from "next/image";

interface AgencyCard {
  title: string;
  description: string;
}

const agencyCards: AgencyCard[] = [
  {
    title: "Role-based access",
    description: "What you can see depends on your role in that patient's care.",
  },
  {
    title: "Minimum necessary",
    description: "Handoffs share only what the recipient needs for the purpose.",
  },
  {
    title: "Lawful delegation",
    description:
      "Caregivers and representatives need verified, current authority. Family status alone isn't enough.",
  },
  {
    title: "Patient choice",
    description:
      "Patients' consent and restrictions apply wherever local law provides them.",
  },
];

export default function PermissionsPatientAgency() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f2edff] via-[#ebe5fc] to-[#d3c6fa] py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] w-full max-w-[480px] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/clinicians-results-handoffs/crh6.jpg"
                alt="Clinicians reviewing medical imaging on workstation screens"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Narrative & 2x2 Cards Grid */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
              <span className="h-0.5 w-4 bg-[#6d5ae6]" />
              <span>PERMISSIONS &amp; PATIENT AGENCY</span>
            </div>

            {/* Section Heading */}
            <h2 className="mb-3 text-[30px] sm:text-[36px] lg:text-[40px] font-bold tracking-tight text-[#111827] [font-family:var(--font-poppins)] leading-tight">
              Only the right people, <br className="hidden sm:inline" />
              only what they need.
            </h2>

            {/* Subtitle */}
            <p className="mb-8 max-w-[540px] text-[14px] sm:text-[15px] leading-relaxed text-slate-600">
              Access follows role, purpose and local rules. Patients keep the
              choices those rules give them.
            </p>

            {/* 2x2 Grid of White Cards */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {agencyCards.map((card, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/80 bg-white/95 p-4.5 shadow-xs backdrop-blur-xs"
                >
                  <h3 className="mb-1 text-[13.5px] font-bold text-slate-900 [font-family:var(--font-poppins)]">
                    {card.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-slate-500">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
