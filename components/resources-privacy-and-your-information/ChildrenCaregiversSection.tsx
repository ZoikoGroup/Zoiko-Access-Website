import React from "react";
import Image from "next/image";

const roleRules = [
  {
    title: "Children",
    description:
      "Rules depend on the country. There is no blanket parental authority.",
  },
  {
    title: "Caregivers",
    description: "Need consent or legal authority for a defined role.",
  },
  {
    title: "Representatives",
    description: "Must be verified before any information is shared.",
  },
];

export const ChildrenCaregiversSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f4f5f9] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <span className="block text-[#6366f1] text-xs font-semibold tracking-wider mb-1">
            10
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Children, caregivers &amp; representatives
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Acting for someone else needs verified authority.
          </p>
        </div>

        {/* White Split Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Photo */}
          <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[260px] lg:min-h-full bg-slate-100">
            <Image
              src="/resources-privacy-and-your-information/pyi13.jpg"
              alt="Family holding hands on a beach at sunset"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          {/* Right Rules */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center space-y-5">
            {roleRules.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span
                  className="w-2 h-2 rounded-full bg-[#6d4aff] mt-1.5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-bold text-sm text-[#0f172a] mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
