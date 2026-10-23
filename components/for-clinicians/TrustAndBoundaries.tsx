"use client";

import {
  CreditCard,
  Sliders,
  FileText,
  Lock,
  AlertTriangle,
} from "lucide-react";

interface BoundaryCard {
  icon: typeof CreditCard;
  title: string;
  description: string;
}

const boundaryCards: BoundaryCard[] = [
  {
    icon: CreditCard,
    title: "Provenance",
    description: "Every status names its source and time.",
  },
  {
    icon: Sliders,
    title: "Accessible coordination",
    description: "Plain language and keyboard-friendly design.",
  },
  {
    icon: FileText,
    title: "Auditing",
    description: "Where active, access and changes leave an audit trail.",
  },
  {
    icon: Lock,
    title: "Local permissions",
    description: "Local rules and role scope decide what anyone can see.",
  },
  {
    icon: AlertTriangle,
    title: "Not for emergencies",
    description: "For urgent needs, use local emergency services.",
  },
];

export default function TrustAndBoundaries() {
  return (
    <section className="w-full bg-[#f8faff] py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-semibold text-[#6d5ae6]">
          <span className="h-0.5 w-3.5 bg-[#6d5ae6]" />
          <span>Trust and boundaries</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-10 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          Clear about what this is and isn&apos;t
        </h2>

        {/* 5 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {boundaryCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Purple Icon Badge */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] text-white shadow-sm">
                  <IconComponent className="h-5 w-5" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-[15px] sm:text-[16px] font-bold text-slate-900 [font-family:var(--font-poppins)]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] leading-relaxed text-slate-500">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
