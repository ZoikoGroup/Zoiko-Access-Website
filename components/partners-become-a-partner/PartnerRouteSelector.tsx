"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RouteOption {
  id: string;
  title: string;
  subtitle: string;
  panelLabel: string;
  panelTitle: string;
  panelDescription: string;
  links: { label: string; href: string }[];
}

const routes: RouteOption[] = [
  {
    id: "tech-provider",
    title: "Technology provider",
    subtitle: "EHR, lab, imaging, pharmacy, payer or scheduling technology.",
    panelLabel: "ROUTE • TECHNOLOGY PROVIDER",
    panelTitle: "Start with technology partnerships.",
    panelDescription:
      "See how technology partnerships are assessed and which vendor category you fit.",
    links: [
      { label: "Technology Partners", href: "/ehr-interoperability" },
      { label: "Health System Vendors", href: "/hospitals-clinics" },
      { label: "Integration Security", href: "/privacy-permissions" },
    ],
  },
  {
    id: "systems-integrator",
    title: "Systems integrator",
    subtitle: "Implementation and integration services.",
    panelLabel: "ROUTE • SYSTEMS INTEGRATOR",
    panelTitle: "Start with integration services.",
    panelDescription:
      "Discover requirements, certification framework and implementation responsibilities.",
    links: [
      { label: "Systems Integrators Guide", href: "/partners-developer-documentation#integration-topics" },
      { label: "Certification Framework", href: "/how-it-works" },
      { label: "Integration Security", href: "/privacy-permissions" },
    ],
  },
  {
    id: "institutional-enquiry",
    title: "Other institutional enquiry",
    subtitle: "A different kind of permitted collaboration.",
    panelLabel: "ROUTE • OTHER INSTITUTIONAL ENQUIRY",
    panelTitle: "Start with institutional collaboration.",
    panelDescription:
      "Explore governance, legal purpose and institutional assessment criteria.",
    links: [
      { label: "Institutional Governance", href: "/clinical-responsibility" },
      { label: "Clinical Responsibility", href: "/clinical-responsibility" },
      { label: "Contact Partnerships", href: "/clinical-partnerships-contact" },
    ],
  },
];

export const PartnerRouteSelector: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("tech-provider");

  const currentRoute =
    routes.find((r) => r.id === selectedId) || routes[0];

  return (
    <section className="w-full bg-[#fafbfc] py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              PARTNER ROUTE SELECTOR
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-3">
            Which route fits you?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Pick one to see the most relevant guidance. Nothing you choose here is saved or sent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Radio Options */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">
              I represent a...
            </div>

            <div className="space-y-3.5">
              {routes.map((route) => {
                const isSelected = route.id === selectedId;
                return (
                  <button
                    key={route.id}
                    type="button"
                    onClick={() => setSelectedId(route.id)}
                    className={`w-full text-left rounded-2xl p-5 border transition-all flex items-start gap-4 ${
                      isSelected
                        ? "border-[#6366f1] bg-white ring-2 ring-purple-100 shadow-sm"
                        : "border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/50 shadow-2xs"
                    }`}
                  >
                    {/* Custom Radio Circle */}
                    <div className="mt-0.5 shrink-0">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected
                            ? "border-[#6366f1] bg-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {isSelected && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#6366f1]" />
                        )}
                      </div>
                    </div>

                    {/* Text content */}
                    <div>
                      <h3 className="font-bold text-base text-slate-900 mb-1 leading-snug">
                        {route.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {route.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dark Navy Dynamic Info Card */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full rounded-3xl bg-[#141b3d] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl border border-slate-800">
              <div>
                <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-purple-300 mb-3">
                  {currentRoute.panelLabel}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                  {currentRoute.panelTitle}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                  {currentRoute.panelDescription}
                </p>

                {/* Arrow Links List */}
                <div className="space-y-3 pt-2">
                  {currentRoute.links.map((link, idx) => (
                    <div key={idx}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-purple-200 hover:text-white underline-offset-4 hover:underline transition-colors"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                        <span>{link.label}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="pt-8 border-t border-slate-800/80 mt-6">
                <span className="text-[11px] text-slate-400 italic">
                  Your choice only changes what this panel shows.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
