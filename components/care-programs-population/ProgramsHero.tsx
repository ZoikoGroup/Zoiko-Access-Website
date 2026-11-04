import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IMG, heading } from "./shared";

const defines = [
  { title: "Sponsor & eligible audience", sub: "Who funds it, who it serves" },
  { title: "Region & service category", sub: "Where and what" },
  { title: "Providers, duration & policy", sub: "Who delivers, for how long, under which rules" },
];

const quickLinks = [
  {
    title: "Eligibility ≠ enrollment",
    text: "Five separate states.",
    href: "#eligibility-enrollment",
    image: `${IMG}/quick-eligibility.webp`,
  },
  {
    title: "Participant experience",
    text: "Accessible, consented, flexible.",
    href: "#participant-experience",
    image: `${IMG}/quick-participants.webp`,
  },
  {
    title: "Reporting",
    text: "Aggregate only.",
    href: "#reporting",
    image: `${IMG}/quick-reporting.webp`,
  },
];

export default function ProgramsHero() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#16245A] px-6 pb-28 pt-16 text-white lg:px-16 lg:pb-32 lg:pt-20">
        <img
          src={`${IMG}/hero-bg.webp`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#16245A]/95 via-[#1E2F7A]/85 to-[#4B3FC4]/40"
        />

        <div className="relative z-10 mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-0.5 w-5 bg-[#C9D3F5]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9D3F5]">
                Organizations / Care programs &amp; population access
              </span>
            </div>
            <h1 className={`${heading} mb-5 text-4xl leading-[1.05] md:text-6xl`}>
              Care programs built
              <br />
              around{" "}
              <span className="bg-gradient-to-r from-[#C4B5FD] to-[#93C5FD] bg-clip-text text-transparent">
                accountable access.
              </span>
            </h1>
            <p className="mb-8 max-w-[660px] text-base leading-7 text-white/90 md:text-lg">
              Explore how organizations can plan, govern and communicate
              healthcare access programs with explicit roles, lawful permissions
              and clearly defined next steps.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#operating-model"
                className="group flex items-center gap-2 rounded-[10px] bg-[#7B5CF0] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6A4BE0] md:text-base"
              >
                See the program model
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/organisation-overview"
                className="rounded-[10px] border-2 border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:text-base"
              >
                Explore organization solutions
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/25 bg-white/10 p-7 shadow-[0_30px_60px_rgba(5,10,40,0.35)] backdrop-blur-md">
              <p className={`${heading} mb-4 text-sm uppercase tracking-widest text-[#C9D3F5]`}>
                Every program defines
              </p>
              <ul className="space-y-3">
                {defines.map((d) => (
                  <li key={d.title} className="flex items-start gap-3.5">
                    <span
                      aria-hidden="true"
                      className="h-8 w-8 shrink-0 rounded-[10px] bg-gradient-to-br from-[#7B5CF0] to-[#3B5BDB]"
                    />
                    <div>
                      <p className="text-base leading-6">{d.title}</p>
                      <p className="text-xs leading-5 text-white/70">{d.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-white/20 pt-4 text-xs leading-5 text-white/75">
                Informational status only — no program is shown as live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links overlapping the hero */}
      <div className="relative z-20 -mt-16 px-6 lg:px-16">
        <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-6 md:grid-cols-3">
          {quickLinks.map((q) => (
            <a
              key={q.title}
              href={q.href}
              className="group flex items-center gap-4 rounded-2xl border border-[#E4E7F2] bg-white p-3.5 shadow-[0_20px_44px_rgba(22,36,90,0.16)] transition-transform hover:-translate-y-0.5"
            >
              <img
                src={q.image}
                alt=""
                className="h-20 w-20 shrink-0 rounded-2xl object-cover md:h-24 md:w-24"
              />
              <div className="min-w-0 flex-1">
                <p className={`${heading} text-base text-[#16245A]`}>{q.title}</p>
                <p className="text-sm text-[#5B6B8C]">{q.text}</p>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#EEF0FB] text-[#7B5CF0]">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
