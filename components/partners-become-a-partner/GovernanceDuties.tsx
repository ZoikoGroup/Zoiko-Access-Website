import React from "react";
import Image from "next/image";

interface DutyItem {
  id: number;
  title: string;
  description: string;
}

const duties: DutyItem[] = [
  {
    id: 1,
    title: "Clinical accountability",
    description: "Stays with licensed clinicians and their organization.",
  },
  {
    id: 2,
    title: "Access authorization",
    description: "Granted by the responsible organization, per scope.",
  },
  {
    id: 3,
    title: "Source systems",
    description: "Keep ownership of their own records.",
  },
  {
    id: 4,
    title: "Security",
    description: "Each party secures its own systems and credentials.",
  },
  {
    id: 5,
    title: "Privacy",
    description: "Lawful purpose and minimization, every time.",
  },
  {
    id: 6,
    title: "Data rights",
    description: "People keep their legal rights over their information.",
  },
];

export const GovernanceDuties: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f8f9ff] via-white to-[#f4f3ff] py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Doctor Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-slate-100">
              <Image
                src="/partners-become-a-partner/bap5.jpg"
                alt="Healthcare professional in lab coat"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Right Column: Content and Duty Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#6366f1]" />
              <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
                GOVERNANCE & RESPONSIBILITIES
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-8">
              Partners never take over these duties.
            </h2>

            {/* 6 Cards Grid (2 cols x 3 rows) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {duties.map((duty) => (
                <div
                  key={duty.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 border-l-4 border-l-[#6366f1] shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-1">
                    {duty.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {duty.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="rounded-xl sm:rounded-full bg-[#f1f0fd]/80 border border-purple-200/60 px-5 py-3 text-xs sm:text-sm text-slate-600 leading-relaxed shadow-sm">
              Who is a data controller or processor is set by each approved contract, never by a generic label.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
