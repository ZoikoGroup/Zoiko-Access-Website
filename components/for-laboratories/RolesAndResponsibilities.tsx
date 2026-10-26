import React from "react";
import Image from "next/image";

interface RoleCard {
  id: number;
  image: string;
  description: string;
  alt: string;
}

const roleCards: RoleCard[] = [
  {
    id: 1,
    image: "/for-laboratories/fl3.jpg",
    description: "Owns the clinical order and its appropriateness.",
    alt: "Desk workspace with leather notebook, ruler, and modern orange chair",
  },
  {
    id: 2,
    image: "/for-laboratories/fl4.jpg",
    description: "Owns the specimen, the tests and the release of results from its source records.",
    alt: "Winding pathway through green meadow towards evergreen trees and hills",
  },
  {
    id: 3,
    image: "/for-laboratories/fl5.jpg",
    description: "Owns interpretation of the result and any action taken.",
    alt: "Tranquil blue dusk coastline with rocky shore and calm sea",
  },
];

export const RolesAndResponsibilities: React.FC = () => {
  return (
    <section id="roles-and-responsibilities" className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6d5ae6]" />
            <span className="text-[#6d5ae6] font-semibold text-xs sm:text-sm tracking-wide">
              Roles and responsibilities
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
            Each organization keeps its own authority.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Zoiko Access has a limited role: authorized coordination between independent systems.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roleCards.map((card) => (
            <div
              key={card.id}
              className="group rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium p-1">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
