import React from "react";
import Image from "next/image";

interface PermissionItem {
  number: number;
  title: string;
  description: string;
}

const permissionItems: PermissionItem[] = [
  {
    number: 1,
    title: "Minimum necessary access",
    description: "See only what the task requires.",
  },
  {
    number: 2,
    title: "Verified clinician identity",
    description: "Who is acting has been checked.",
  },
  {
    number: 3,
    title: "Team membership",
    description: "The person belongs to the team that owns the task.",
  },
  {
    number: 4,
    title: "Patient permissions, when required",
    description: "Some information needs the patient's own permission.",
  },
  {
    number: 5,
    title: "Legal purpose, consent and delegation",
    description: "Each is checked separately and carries its own nuance.",
  },
];

export const TaskAccessPermissions: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f9f7ff] via-[#f5f1fe] to-[#faf8ff] py-16 md:py-24 border-t border-purple-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl shadow-purple-950/10 ring-1 ring-purple-200/50">
              <Image
                src="/task-worklist-experience/twe18.jpg"
                alt="Doctor wearing green surgical mask, stethoscope, and glasses"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Title and 5 Permissions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#6d5ae6]" />
              <span className="text-[#6d5ae6] font-semibold text-xs md:text-sm uppercase tracking-wider">
                PERMISSIONS AND PRIVACY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-8 md:mb-10">
              Only the access a task needs
            </h2>

            <div className="space-y-6">
              {permissionItems.map((item) => (
                <div key={item.number} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#5b45e0] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
