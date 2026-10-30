import React from "react";
import Link from "next/link";

interface TopicCard {
  title: string;
  description: string;
  href?: string;
}

interface TopicGroup {
  groupName: string;
  cards: TopicCard[];
}

const topicGroups: TopicGroup[] = [
  {
    groupName: "Diagnostics",
    cards: [
      {
        title: "For laboratories",
        description: "LIS order and result architecture and responsibilities",
        href: "/for-laboratories",
      },
      {
        title: "Imaging & radiology",
        description: "RIS/PACS pathways; interpretation stays with partners",
        href: "/lab-imaging-integration",
      },
      {
        title: "Diagnostics coordination",
        description: "Ordered service, completion and report handoffs",
        href: "/diagnostics-coordination",
      },
    ],
  },
  {
    groupName: "Pharmacy services",
    cards: [
      {
        title: "For pharmacies",
        description: "Dispensing and service listings where locally allowed",
        href: "/for-pharmacies",
      },
      {
        title: "Prescription routing",
        description: "No universal e-prescribing or medicine substitution",
        href: "/prescription-routing",
      },
      {
        title: "Fulfillment & availability",
        description: "Source freshness, provenance and supply restrictions",
        href: "/fulfillment-availability",
      },
    ],
  },
  {
    groupName: "Partner connectivity",
    cards: [
      {
        title: "Lab & Imaging integration",
        description: "Market-governed partner interfaces, as a design concept",
        href: "/lab-imaging-integration",
      },
      {
        title: "Pharmacy partnership",
        description: "Documented partner assessment, not auto-enrollment",
        href: "/pharmacy-partnership",
      },
      {
        title: "Safety & escalation",
        description: "Critical communication and human escalation duties",
        href: "/safety-escalation",
      },
    ],
  },
];

export const SpecializedDestinations: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0c1348] via-[#161266] to-[#60147e] py-16 md:py-24 text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#c4b5fd]" />
            <span className="text-[#c4b5fd] font-medium text-xs sm:text-sm tracking-wide">
              Specialized destinations
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-3">
            Nine topics, three groups.
          </h2>
          <p className="text-purple-200/85 text-xs sm:text-sm md:text-base leading-relaxed">
            This overview summarizes. Each specialized page is owned and approved separately.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {topicGroups.map((group, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Group Name Header */}
              <h3 className="text-sm md:text-base font-semibold text-white/90 mb-4 tracking-wide">
                {group.groupName}
              </h3>

              {/* Stack of Cards */}
              <div className="space-y-4">
                {group.cards.map((card, cIdx) => (
                  <Link
                    key={cIdx}
                    href={card.href || "#"}
                    className="block rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 p-5 backdrop-blur-sm shadow-md transition-all duration-200 group"
                  >
                    <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-purple-200 transition-colors mb-1">
                      {card.title}
                    </h4>
                    <p className="text-xs text-purple-200/80 leading-relaxed">
                      {card.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
