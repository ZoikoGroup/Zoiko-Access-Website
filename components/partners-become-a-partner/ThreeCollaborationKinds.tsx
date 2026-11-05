import React from "react";
import Image from "next/image";

interface CollaborationCard {
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const cards: CollaborationCard[] = [
  {
    category: "CATEGORY 01",
    title: "Technology vendors",
    description:
      "Organizations whose systems hold or move healthcare information.",
    image: "/partners-become-a-partner/bap2.jpg",
    alt: "Illuminated datacenter server racks with networked fiber optic cables",
  },
  {
    category: "CATEGORY 02",
    title: "Systems integrators",
    description:
      "Teams that design, build and maintain authorized connections.",
    image: "/partners-become-a-partner/bap3.jpg",
    alt: "Engineering team collaborating around laptops at work table",
  },
  {
    category: "CATEGORY 03",
    title: "Ecosystem collaborations",
    description:
      "Other permitted institutional collaborations, assessed case by case.",
    image: "/partners-become-a-partner/bap4.jpg",
    alt: "Business colleagues signing institutional document agreement",
  },
];

export const ThreeCollaborationKinds: React.FC = () => {
  return (
    <section id="partnership-fit" className="w-full bg-[#fafbfc] py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#6366f1]" />
              <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
                PARTNERSHIP FIT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Three kinds of collaboration.
            </h2>
          </div>

          <div className="max-w-md text-xs sm:text-sm text-slate-500 leading-relaxed md:text-right">
            Illustrative categories only. No partners, logos, prices or certifications are listed.
          </div>
        </div>

        {/* 3 Large Image Cards with Dark Gradient Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-6 text-white bg-slate-900 border border-slate-200/50"
            >
              {/* Background Photo */}
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark Gradient Overlay for text contrast */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0b1129]/95 via-[#0b1129]/60 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Text Content */}
              <div className="relative z-10">
                <span className="inline-block text-[11px] font-bold text-purple-300 tracking-wider uppercase mb-2">
                  {card.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="text-xs text-slate-500 leading-relaxed">
          Categories describe possible fits. They are not commitments or eligibility decisions.
        </div>
      </div>
    </section>
  );
};
