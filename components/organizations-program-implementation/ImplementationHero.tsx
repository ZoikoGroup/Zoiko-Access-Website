import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IMG, heading } from "./shared";

export default function ImplementationHero() {
  return (
    <section className="relative overflow-hidden bg-[#16245A] px-6 py-20 text-white lg:px-16 lg:py-24">
      <img
        src={`${IMG}/hero-bg.webp`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#16245A]/95 via-[#1E2F7A]/85 to-[#7B5CF0]/0"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1300px]">
        <div className="max-w-[820px]">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-0.5 w-5 bg-[#C9D3F5]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9D3F5]">
              Organizations / Implementation
            </span>
          </div>
          <h1 className={`${heading} mb-5 text-4xl leading-[1.05] md:text-6xl`}>
            Program implementation,
            <br />
            governed from
            <br />
            <span className="bg-gradient-to-r from-[#A78BFA] to-[#93C5FD] bg-clip-text text-transparent">
              assessment to operation.
            </span>
          </h1>
          <p className="mb-8 max-w-[660px] text-base leading-7 text-white/90 md:text-lg">
            Explore the responsibilities, evidence requirements, and decision points that can
            shape a controlled healthcare access program. Actual program services depend on the
            participating organizations, applicable laws, and independently approved operating
            arrangements.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#phases"
              className="group flex items-center gap-2 rounded-[10px] bg-[#7B5CF0] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6A4BE0] md:text-base"
            >
              See the six phases
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="/organisation-overview"
              className="rounded-[10px] border border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:text-base"
            >
              Explore organizations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
