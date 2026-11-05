import React from "react";
import Link from "next/link";
import { Lock } from "lucide-react";

interface ControlItem {
  tag: string;
  title: string;
  description: string;
}

const controls: ControlItem[] = [
  {
    tag: "SCOPE",
    title: "Defined scope",
    description: "Specific data, purpose, organization and market.",
  },
  {
    tag: "LEAST PRIVILEGE",
    title: "Least privilege",
    description: "Only the minimum access the purpose needs.",
  },
  {
    tag: "CREDENTIALS",
    title: "Credential controls",
    description: "Issued per system, stored securely, rotated.",
  },
  {
    tag: "ENVIRONMENTS",
    title: "Separate environments",
    description: "Test and production never share credentials data.",
  },
];

export const NarrowAccessControls: React.FC = () => {
  return (
    <section id="integration-security" className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Dark Security Padlock Graphic Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl bg-gradient-to-br from-[#161248] via-[#1e1462] to-[#3b1261] p-8 flex flex-col justify-between shadow-2xl border border-indigo-950/40 text-white overflow-hidden">
              {/* Subtle ambient lighting */}
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25)_0,transparent_70%)] pointer-events-none"
                aria-hidden="true"
              />

              {/* Top Row: Corner badges */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium text-purple-200">
                  scope
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium text-purple-200">
                  least privilege
                </span>
              </div>

              {/* Center Lock Icon */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl border-2 border-white/40 flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-inner">
                  <Lock className="w-12 h-12 sm:w-14 sm:h-14 text-white stroke-[1.75]" />
                </div>
              </div>

              {/* Bottom Row: Corner badges */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium text-purple-200">
                  credentials
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium text-purple-200">
                  environments
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Heading, Narrative & 4 Cards Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#6366f1]" />
              <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
                AUTHENTICATION &amp; AUTHORIZATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-4">
              Access is narrow by design.
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-8">
              Four controls shape every connection. Read the full detail in{" "}
              <Link
                href="/privacy-permissions"
                className="text-[#6366f1] hover:underline font-semibold"
              >
                Integration Security
              </Link>
              .
            </p>

            {/* 4 Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {controls.map((control, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs hover:shadow-md transition-shadow"
                >
                  <span className="inline-block text-[11px] font-bold text-[#6366f1] uppercase tracking-wider mb-2">
                    {control.tag}
                  </span>
                  <h3 className="font-bold text-base text-slate-900 mb-1.5">
                    {control.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {control.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
