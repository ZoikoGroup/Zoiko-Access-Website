import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";

const HEADLINE = [
  [{ text: "A clearer guide to", accent: false }],
  [
    { text: "navigating ", accent: false },
    { text: "healthcare", accent: true },
  ],
  [{ text: "options", accent: true }],
] as const;

const ACTIONS = [
  {
    label: "Explore the steps",
    href: "/guide/steps",
    primary: true,
  },
  {
    label: "Browse common questions",
    href: "/guide/faq",
    primary: false,
  },
] as const;

const JOURNEY = [
  { step: 1, label: "Explore options", owner: "You", dashed: false },
  { step: 2, label: "Contact a provider", owner: "You", dashed: false },
  { step: 3, label: "Request, if supported", owner: "You", dashed: false },
  { step: 4, label: "Acknowledgement", owner: "Provider", dashed: true },
  { step: 5, label: "Clinical decision", owner: "Clinician", dashed: true },
  { step: 6, label: "Confirmed next step", owner: "Provider", dashed: false },
] as const;

const PILLARS = [
  { title: "Educational", description: "No diagnosis or triage" },
  {
    title: "Provider-owned",
    description: "Clinical decisions stay with professionals",
  },
  { title: "Local", description: "Services vary by location" },
  { title: "Honest", description: "Unavailable means not shown" },
] as const;

export default function HealthcareNavigationHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#16245A] text-white">
      {/* Background image */}
      <Image
        src="/guide/1.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#16245AF7] via-[#16245AD9] to-[#243B7359]"
      />

      <div className="relative mx-auto max-w-[1300px] px-6 pb-8 pt-10 sm:px-8 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
          {/* Left */}
          <div>
            <p className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.12em] text-white/80">
              <span aria-hidden="true" className="h-px w-8 bg-white/70" />
              Resources / Healthcare Navigation
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              {HEADLINE.map((line, i) => (
                <span key={i} className="block">
                  {line.map((part) => (
                    <span
                      key={part.text}
                      className={part.accent ? "text-[#a78bfa]" : ""}
                    >
                      {part.text}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-[520px] text-base leading-7 text-white/90">
              Healthcare navigation means understanding available types of care,
              identifying the organization responsible for the next step, and
              knowing when a request is only pending rather than confirmed. The
              right option depends on local services and licensed clinical
              judgment.
            </p>

            <p className="mt-5 max-w-[520px] text-sm leading-5 text-white/70">
              Educational guidance only. Not medical advice, clinical triage,
              emergency response or a guarantee of a local service.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {ACTIONS.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={
                    action.primary
                      ? "inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#252a78]"
                      : "inline-flex items-center gap-2 rounded-lg border border-white/60 px-5 py-3 text-sm font-semibold text-white"
                  }
                >
                  {action.label}
                  {action.primary && (
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: journey card */}
          <aside className="w-full max-w-[400px] rounded-2xl bg-white p-6 text-[#1f2559] shadow-2xl lg:ml-auto">
            <h2 className="text-base font-bold">
              The care journey at a glance
            </h2>

            <ol className="mt-5">
              {JOURNEY.map((item, index) => (
                <li
                  key={item.step}
                  className="relative flex items-center gap-3 py-1.5"
                >
                  {index < JOURNEY.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[11px] top-[34px] h-[18px] w-px bg-[#7c5ce6]/50"
                    />
                  )}
                  <span
                    className={
                      item.dashed
                        ? "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[#7c5ce6] bg-white text-sm text-[#5b4bc4]"
                        : "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#7c5ce6] bg-white text-sm text-[#5b4bc4]"
                    }
                  >
                    {item.step}
                  </span>
                  <span className="flex-1 text-sm">{item.label}</span>
                  <span className="text-sm font-semibold text-[#6b7280]">
                    {item.owner}
                  </span>
                </li>
              ))}
            </ol>

            <p className="mt-4 rounded-lg bg-[#fff3e0] px-4 py-3 text-sm leading-5 text-[#b45309]">
              Pending is not confirmed. Only the provider confirms.
            </p>
          </aside>
        </div>

        {/* Pillars */}
        <ul className="mt-12 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <li
              key={pillar.title}
              className="border-white/15 px-5 py-5 lg:border-r lg:last:border-r-0"
            >
              <p className="text-sm font-bold">{pillar.title}</p>
              <p className="mt-1 text-sm text-white/70">{pillar.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Emergency banner */}
      <div className="relative bg-[#fde8e8] px-6 py-4 sm:px-8 lg:px-10">
        <p className="mx-auto flex max-w-[1200px] items-center gap-3 text-sm text-[#7f1d1d]">
          <AlertCircle
            className="h-6 w-6 shrink-0 fill-[#dc2626] text-white"
            aria-hidden="true"
          />
          <span>
            <strong className="font-bold">
              For an emergency or immediate danger, contact local emergency
              services.
            </strong>{" "}
            Do not rely on this website for an emergency response.
          </span>
        </p>
      </div>
    </section>
  );
}
