import React from "react";
import Image from "next/image";
import { BookOpen, Command, Box } from "lucide-react";

const gatedMaterials = [
  {
    title: "Documentation",
    description: "Published only with an audited version.",
    icon: <BookOpen className="w-4 h-4 text-[#6366f1]" />,
  },
  {
    title: "SDKs",
    description: "Only with a supported, released package.",
    icon: <Command className="w-4 h-4 text-[#6366f1]" />,
  },
  {
    title: "Sandbox",
    description: "Only with deployed support and access policy.",
    icon: <Box className="w-4 h-4 text-[#6366f1]" />,
  },
];

export const DeveloperMaterialsGated: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="block text-[#6366f1] text-xs font-semibold tracking-wider uppercase mb-2">
              06 / DEVELOPER MATERIALS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
              Docs, SDKs and sandbox stay gated
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-7">
              Shown only when the registry has audited artifacts and an access policy. Until then, use the design principles and readiness checklist.
            </p>

            {/* 3 Gated Rows */}
            <div className="space-y-3">
              {gatedMaterials.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/80 p-4 shadow-sm flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#f3f0ff] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#0f172a] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span className="bg-amber-50 text-amber-600 border border-amber-200/80 text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md shrink-0">
                    GATED
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Laptop Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] aspect-[16/10] rounded-2xl overflow-hidden shadow-xl bg-[#050814]">
              <Image
                src="/partners-group-build-and-connect/pgbac5.jpg"
                alt="Glowing laptop in a dark studio"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
