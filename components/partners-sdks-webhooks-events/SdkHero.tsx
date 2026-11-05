import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IMG, heading } from "./shared";

const tags = ["SDKs", "Webhooks", "Events"];

const steps = [
  { name: "event.observed", text: "Source system recorded a change", ring: "border-[#7B5CF0]" },
  { name: "event.published", text: "Schema-valid publication accepted", ring: "border-[#7B5CF0]" },
  { name: "delivery.attempted", text: "Connection to subscriber tried", ring: "border-[#4A68D8]" },
  { name: "transport.acknowledged", text: "Receipt confirmed — not clinical review", ring: "border-[#4A68D8]" },
];

const card = "rounded-2xl bg-white shadow-[0_10px_24px_rgba(36,59,115,0.08)]";
const dot = "absolute -left-[34px] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-[3px] bg-white";

export default function SdkHero() {
  return (
    <section
      className="overflow-hidden bg-[#F5F8FC] bg-cover bg-center px-6 py-16 lg:px-16 lg:py-20"
      style={{ backgroundImage: `url(${IMG}/bg-hero.webp)` }}
    >
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,528px)] lg:gap-16">
        <div>
          <ul className="mb-5 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className={`${heading} rounded-full border border-[#E4E7F2] bg-white px-3.5 py-1.5 text-xs text-[#243B73]`}
              >
                {t}
              </li>
            ))}
          </ul>
          <h1 className={`${heading} mb-6 text-5xl font-bold leading-[1.05] text-[#16245A] md:text-6xl md:leading-[65px]`}>
            SDKs, Webhooks <span className="text-[#7B5CF0]">&amp;</span>
            <br />
            <span className="bg-gradient-to-r from-[#7B5CF0] to-[#5B8DEF] bg-clip-text text-transparent">Events</span>
          </h1>
          <p className="mb-3 max-w-[600px] text-base leading-7 text-[#2A3550] md:text-lg">
            Explore how Zoiko Access approaches developer tooling and event-based interoperability for permitted
            healthcare workflows.
          </p>
          <p className="mb-7 max-w-[580px] text-base font-medium leading-6 text-[#243B73]">
            Design integrations that preserve source ownership, explicit permissions, traceable delivery and
            accountable handoffs.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#event-model"
              className="group flex items-center gap-2 rounded-[10px] bg-[#7B5CF0] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#6A4BE0]"
            >
              Understand integration principles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <Link
              href="/api-interoperability"
              className="rounded-[10px] border-2 border-[#243B73] bg-white px-5 py-3 text-base font-semibold text-[#243B73] transition-colors hover:bg-[#F5F8FC]"
            >
              API &amp; interoperability overview
            </Link>
          </div>
        </div>

        {/* Illustrative event timeline: no live data. */}
        <div className="relative pl-[34px]">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[10px] top-2.5 w-0.5 bg-gradient-to-b from-[#7B5CF0] via-[#4A68D8] to-[#4A68D8]/10"
          />
          <ol className="space-y-3">
            {steps.map((s, i) => (
              <li key={s.name} className={`relative flex items-center justify-between gap-4 px-4 py-3.5 ${card}`}>
                <span aria-hidden="true" className={`${dot} ${s.ring}`} />
                <div>
                  <p className="text-sm font-semibold text-[#16245A]">{s.name}</p>
                  <p className="text-xs leading-5 text-[#5B6B8C]">{s.text}</p>
                </div>
                <span className="shrink-0 rounded-full bg-[#EEEAFE] px-2.5 py-1 text-xs text-[#7B5CF0]">
                  step {i + 1}
                </span>
              </li>
            ))}
            <li className={`relative flex items-center gap-3 p-2.5 ${card}`}>
              <span aria-hidden="true" className={`${dot} border-[#7B5CF0]`} />
              <img
                src={`${IMG}/hero-person.webp`}
                alt="Hands typing on a laptop beside a stethoscope"
                className="h-14 w-[72px] shrink-0 rounded-[10px] object-cover"
              />
              <p className="text-sm leading-5 text-[#2A3550]">
                An accountable person decides the next step. No event does that.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
