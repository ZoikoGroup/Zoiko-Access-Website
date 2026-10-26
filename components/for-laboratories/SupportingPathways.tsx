import React from "react";
import Link from "next/link";

interface PathwayCard {
  title: string;
  description: string;
  href: string;
}

const pathwayCards: PathwayCard[] = [
  {
    title: "Imaging & radiology",
    description: "RIS/PACS pathways. Interpretation stays with partners.",
    href: "/labs-pharmacies#who-this-is-for",
  },
  {
    title: "Diagnostics coordination",
    description: "Ordered service, completion and report handoffs.",
    href: "/labs-pharmacies#who-this-is-for",
  },
  {
    title: "Lab & imaging integration",
    description: "Technical assessment of partner interfaces.",
    href: "/ehr-interoperability",
  },
  {
    title: "Safety & escalation",
    description: "Critical communication and human escalation duties.",
    href: "/clinical-responsibility",
  },
];

export const SupportingPathways: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#eee8fc] via-[#f5f0ff] to-[#e4d9fb] py-16 md:py-24 border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6d5ae6]" />
            <span className="text-[#6d5ae6] font-semibold text-xs sm:text-sm tracking-wide">
              Supporting pathways
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Continue to the page that owns your question.
          </h2>
        </div>

        {/* 4 Pathway Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathwayCards.map((card, idx) => (
            <Link
              key={idx}
              href={card.href}
              className="rounded-2xl bg-white border border-white/90 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[140px] group"
            >
              <div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#6d5ae6] transition-colors mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
