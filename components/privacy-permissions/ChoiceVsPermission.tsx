"use client";

import { Mail, CheckCircle2, KeyRound, Stethoscope, Lock } from "lucide-react";

export default function ChoiceVsPermission() {
  const cards = [
    {
      icon: Mail,
      title: "Communication preferences",
      effect: "Which optional messages you receive.",
      owner: "You.",
      route: "The preference area of the service, where it exists.",
    },
    {
      icon: CheckCircle2,
      title: "Consent (where it applies)",
      effect: "Allows a specific use that needs your agreement.",
      owner: "You, or an authorized representative.",
      route: "The responsible organization's process.",
    },
    {
      icon: KeyRound,
      title: "Delegation",
      effect: "Lets a verified person act within limits.",
      owner: "You, with the organization verifying.",
      route: "Only in an approved, verified service.",
    },
    {
      icon: Stethoscope,
      title: "Clinical obligations",
      effect: "Records a provider must keep or share by rule.",
      owner: "The provider and the law.",
      route: "Ask the provider.",
    },
    {
      icon: Lock,
      title: "Signing in",
      effect: "Proves who you are to the service.",
      owner: "The account service.",
      route: "Account settings, where available.",
    },
  ];

  return (
    <section className="w-full bg-[#f4f1ff] py-16 lg:py-20 border-t border-[#eee9ff]">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#6d5ae6]" />
          <span>CHOICES AND PERMISSIONS</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          A choice is not the same as
          <br className="hidden sm:inline" /> a permission
        </h2>

        {/* Subtitle */}
        <p className="mb-10 max-w-[640px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          Marketing opt-ins are kept separate from necessary service notices,
          care decisions, delegation and signing in.
        </p>

        {/* 3-column / 2-column grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
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
                    {card.title}
                  </h3>
                </div>

                {/* Body Rows */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <span className="w-[85px] shrink-0 text-[9.5px] font-bold tracking-[0.08em] text-[#6366f1] uppercase pt-0.5">
                      TYPICAL EFFECT
                    </span>
                    <span className="text-[12.5px] leading-snug text-slate-600">
                      {card.effect}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-[85px] shrink-0 text-[9.5px] font-bold tracking-[0.08em] text-[#6366f1] uppercase pt-0.5">
                      DECISION OWNER
                    </span>
                    <span className="text-[12.5px] leading-snug text-slate-600">
                      {card.owner}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-[85px] shrink-0 text-[9.5px] font-bold tracking-[0.08em] text-[#6366f1] uppercase pt-0.5">
                      CHANGE ROUTE
                    </span>
                    <span className="text-[12.5px] leading-snug text-slate-600">
                      {card.route}
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
