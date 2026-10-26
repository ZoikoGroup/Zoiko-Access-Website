import React from "react";
import Image from "next/image";
import Link from "next/link";

interface RoleCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  linkText: string;
  href: string;
}

const roleCards: RoleCardItem[] = [
  {
    id: "laboratories",
    title: "Laboratories",
    description:
      "Laboratories originate and manage their test-order, specimen and report records. Connection concepts cannot establish a test result or clinical review.",
    image: "/labs-pharmacies/lp3.jpg",
    linkText: "For laboratories",
    href: "#laboratories",
  },
  {
    id: "imaging-radiology",
    title: "Imaging & radiology",
    description:
      "Imaging services may coordinate appointments, imaging workflow and reports through approved partner pathways. Interpretation remains with qualified professionals.",
    image: "/labs-pharmacies/lp4.jpg",
    linkText: "Imaging & radiology",
    href: "#imaging-radiology",
  },
  {
    id: "diagnostics-coordination",
    title: "Diagnostics coordination",
    description:
      "Coordination covers the ordered service, its completion and report handoffs between responsible organizations.",
    image: "/labs-pharmacies/lp5.jpg",
    linkText: "Diagnostics coordination",
    href: "#diagnostics-coordination",
  },
  {
    id: "pharmacy-services",
    title: "Pharmacy services",
    description:
      "Pharmacies are responsible for authorized prescriptions, validation, dispensing and locally applicable supply rules. Listings or routed requests do not guarantee stock or fulfillment.",
    image: "/labs-pharmacies/lp6.jpg",
    linkText: "For pharmacies",
    href: "#pharmacy-services",
  },
];

export const WhoThisIsFor: React.FC = () => {
  return (
    <section id="who-this-is-for" className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6d5ae6]" />
            <span className="text-[#6d5ae6] font-semibold text-xs sm:text-sm tracking-wide">
              Who this is for
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Understand who is responsible for what.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Each role controls its own records and decisions. A card here does not show that any organization is available in your area.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Link */}
              <div className="pt-2 border-t border-slate-100/80">
                <Link
                  href={card.href}
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#6d5ae6] hover:text-[#523fd0] transition-colors"
                >
                  {card.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
