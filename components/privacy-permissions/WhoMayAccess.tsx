"use client";

import { User, Stethoscope, FileText, Users, Building2 } from "lucide-react";

export default function WhoMayAccess() {
  const roles = [
    {
      icon: User,
      title: "Patient",
      purpose: "Understanding and managing their own care journey.",
      scope: "Their own information, where the service supports it.",
      limit: "Subject to the responsible organization's rules.",
    },
    {
      icon: Stethoscope,
      title: "Authorized provider",
      purpose: "Providing or coordinating care.",
      scope: "Only what the provider is responsible for and entitled to.",
      limit: "Not presumed from browsing.",
    },
    {
      icon: FileText,
      title: "Platform service actor",
      purpose: "Running the coordination service itself.",
      scope: "Minimum information needed to operate it.",
      limit: "No clinical decisions.",
    },
    {
      icon: Users,
      title: "Caregiver or guardian",
      purpose: "Supporting someone, where authorized.",
      scope: "Defined by verified authority, and may be time-bound.",
      limit: "A family relationship alone is not enough.",
    },
    {
      icon: Building2,
      title: "Institutional partner",
      purpose: "A defined administrative or care purpose.",
      scope: "Only what its agreement and the law allow.",
      limit: "Not blanket access.",
    },
  ];

  return (
    <section className="w-full bg-[#f4f1ff] py-16 lg:py-20 border-t border-[#eee9ff]">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#6d5ae6]" />
          <span>WHO MAY ACCESS</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          Access depends on role,
          <br className="hidden sm:inline" /> purpose and scope
        </h2>

        {/* Subtitle */}
        <p className="mb-10 max-w-[640px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          A tick next to a name would hide the details, so each role is described
          in words. Access to a record is never assumed from browsing or from a
          family relationship.
        </p>

        {/* 3-column / 2-column grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div
                key={index}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.02)] transition hover:shadow-md"
              >
                {/* Header: Icon + Title */}
                <div className="mb-5 flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f5f3ff] text-[#6d5ae6]">
                    <Icon className="h-5 w-5 stroke-[2]" />
                  </div>
                  <h3 className="text-[16px] sm:text-[17px] font-bold tracking-tight text-slate-900 [font-family:var(--font-poppins)]">
                    {role.title}
                  </h3>
                </div>

                {/* Body Rows */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <span className="w-[60px] shrink-0 text-[9.5px] font-bold tracking-[0.08em] text-[#6366f1] uppercase pt-0.5">
                      PURPOSE
                    </span>
                    <span className="text-[12.5px] leading-snug text-slate-600">
                      {role.purpose}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-[60px] shrink-0 text-[9.5px] font-bold tracking-[0.08em] text-[#6366f1] uppercase pt-0.5">
                      SCOPE
                    </span>
                    <span className="text-[12.5px] leading-snug text-slate-600">
                      {role.scope}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-[60px] shrink-0 text-[9.5px] font-bold tracking-[0.08em] text-[#6366f1] uppercase pt-0.5">
                      LIMIT
                    </span>
                    <span className="text-[12.5px] leading-snug text-slate-600">
                      {role.limit}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
