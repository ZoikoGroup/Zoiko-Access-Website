"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    title: "LIS and RIS/PACS",
    content:
      "Laboratory Information Systems (LIS) and Radiology Information Systems / PACS hold the definitive raw test data, medical imaging series, and original interpretations. Connectivity concepts focus on routed notification and discrete result handoffs without taking clinical custody from the originating diagnostic entity.",
  },
  {
    title: "Secure exchange and provenance",
    content:
      "Information transitions maintain cryptographic origin signatures, timestamped transmission evidence, and immutable audit logs. Receiving healthcare providers always know the originating organization, ensuring clinical decisions rest upon verified provenance.",
  },
];

export const IntegrationApproach: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Narrative & Accordion */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#6d5ae6]" />
              <span className="text-[#6d5ae6] font-semibold text-xs sm:text-sm tracking-wide">
                Integration approach
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
              Exchange information while keeping the source in charge.
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Interoperability can help authorized systems exchange permitted information while preserving record provenance, access restrictions and clinical accountability. No current API support, certification or universal interoperability is claimed.
            </p>

            {/* Accordion List */}
            <div className="border-t border-purple-100 divide-y divide-purple-100">
              {accordionData.map((item, idx) => {
                const isOpen = openIndices.includes(idx);
                return (
                  <div key={idx} className="py-2">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      className="w-full py-3.5 flex items-center justify-between text-left group gap-4 transition-colors"
                    >
                      <span className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#6d5ae6] transition-colors">
                        {item.title}
                      </span>
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-[#6d5ae6] shrink-0">
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Truck Cab Interior Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200 bg-slate-100">
              <Image
                src="/labs-pharmacies/lp7.jpg"
                alt="Weathered vintage truck interior looking out windshield towards green foliage"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
