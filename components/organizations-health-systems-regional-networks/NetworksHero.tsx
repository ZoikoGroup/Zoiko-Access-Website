import { ArrowRight } from "lucide-react";
import { IMG, heading } from "./shared";

export default function NetworksHero() {
  return (
    <section className="relative overflow-hidden bg-[#16245A] px-6 py-24 text-center text-white lg:px-16 lg:py-32">
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

      <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col items-center">
        <div className="mb-4 flex items-center gap-2.5">
          <span className="h-0.5 w-5 bg-[#C9D3F5]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9D3F5]">
            Organizations / Public systems
          </span>
        </div>
        <h1 className={`${heading} mb-5 text-4xl leading-[1.05] md:text-6xl`}>
          Health systems &amp;{" "}
          <span className="bg-gradient-to-r from-[#7C5CF5] to-[#93C5FD] bg-clip-text text-transparent">
            regional networks
          </span>
        </h1>
        <p className="mb-8 max-w-[660px] text-base leading-7 text-white/90 md:text-lg">
          Explore how health systems and regional networks can evaluate
          accountable coordination across independent care organizations, with
          governed information exchange and clear clinical ownership.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#operating-model"
            className="group flex items-center gap-2 rounded-[10px] bg-[#7B5CF0] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6A4BE0] md:text-base"
          >
            Explore the operating model
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#governance"
            className="rounded-[10px] border border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:text-base"
          >
            Review governance requirements
          </a>
        </div>
      </div>
    </section>
  );
}
