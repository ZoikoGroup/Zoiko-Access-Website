"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const caveat =
  "Titles, scope, supervision, prescribing permissions, and regulation vary by jurisdiction and individual qualifications. No universal licensed scope is asserted.";

const families = [
  {
    title: "Primary care",
    description:
      "Often a first point of contact for general health needs and ongoing coordination.",
  },
  {
    title: "Specialist care",
    description:
      "Professional focus on particular areas of care or expertise.",
  },
  {
    title: "Nursing",
    description:
      "Nursing professionals contribute care, assessment, education, and support within their permitted roles.",
  },
  {
    title: "Allied health",
    description:
      "A broad grouping of professions contributing distinct assessment, rehabilitation, technical, or support expertise.",
  },
  {
    title: "Mental health",
    description:
      "Professionals and services contribute different kinds of support within local qualifications and roles.",
  },
  {
    title: "Dental",
    description:
      "Dental professionals contribute oral-health services within their locally permitted scope.",
  },
  {
    title: "Pharmacy",
    description:
      "Pharmacy professionals contribute medication-related services under local professional and supply rules.",
  },
];

export default function RoleFamilies() {
  // The highlighted card follows the pointer; the first is highlighted by default.
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="role-families" className="w-full scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Professional role families"
          title="Healthcare involves different professional roles."
          description="The descriptions below are general introductions. They do not define any individual professional’s qualifications or permission to practice in your location."
        />

        <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {families.map((family, index) => {
            const number = String(index + 1).padStart(2, "0");
            const isActive = activeIndex === index;
            return (
              <article
                key={family.title}
                onMouseEnter={() => setActiveIndex(index)}
                className={`flex flex-col rounded-xl border p-7 transition-colors ${
                  isActive
                    ? "border-[#E4DEFB] bg-[#F7F5FE]"
                    : "border-[#E5E7EB] bg-white"
                }`}
              >
                <p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-[#6A44D4]">
                  {number} / Role family
                </p>
                <h3 className="mt-6 text-[24px] font-bold leading-7 tracking-[-0.03em] text-[#23327A]">
                  {family.title}
                </h3>
                <p className="mt-4 text-[14px] leading-6 text-[#5E6B85]">
                  {family.description}
                </p>
                <div className="min-h-6 flex-1" aria-hidden="true" />
                <p className="border-t border-[#E5E7EB] pt-3.5 text-[12px] leading-5 text-[#5E6B85]">
                  {caveat}
                </p>
              </article>
            );
          })}

          <div className="relative min-h-[240px] overflow-hidden rounded-xl md:col-span-1 lg:col-span-2">
            <Image
              src="/healthcare-professionals/role-families.webp"
              alt="Healthcare professionals from different role families working together"
              fill
              sizes="(min-width: 1024px) 846px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
