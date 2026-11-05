import { AlignLeft, ArrowRight, Info } from "lucide-react";
import { IMG, heading } from "./shared";

export default function VendorsHero() {
  return (
    <section
      className="bg-cover bg-center px-6 py-16 lg:px-16 lg:py-20"
      style={{ backgroundImage: `url(${IMG}/bg-hero.webp)` }}
    >
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#7B5CF0]">
            Partners &amp; developers · Health system vendors
          </p>
          <h1 className={`${heading} mb-6 text-4xl font-bold leading-[1.05] text-[#16245A] md:text-[64px]`}>
            Health system technology, connected through{" "}
            <span className="bg-gradient-to-r from-[#7B5CF0] to-[#93B4F5] bg-clip-text text-transparent">
              accountable partnerships.
            </span>
          </h1>
          <p className="mb-8 max-w-[640px] text-base leading-7 text-[#2A3550] md:text-lg">
            Explore how electronic health records, diagnostics, imaging, pharmacy, payer and
            scheduling systems can be evaluated for responsible coordination. Each connection
            depends on partner readiness, approved interfaces and local permissions.
          </p>
          <div className="mb-5 flex flex-wrap gap-3">
            <a
              href="#lifecycle"
              className="group flex items-center gap-2 rounded-[10px] bg-[#7B5CF0] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#6A4BE0] md:text-base"
            >
              Explore integration approach
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#qualification"
              className="rounded-[10px] border border-[#16245A] bg-white/60 px-6 py-3.5 text-sm font-semibold text-[#16245A] transition-colors hover:bg-white md:text-base"
            >
              Understand partnership requirements
            </a>
          </div>
          <p className="flex items-center gap-2 text-sm text-[#5B6B8C]">
            <Info className="h-4 w-4 shrink-0" aria-hidden="true" />
            Describes potential vendor categories only. No vendor relationship is implied.
          </p>
        </div>

        <div className="relative">
          <img
            src={`${IMG}/hero.webp`}
            alt="Hands typing on a laptop beside a stethoscope"
            className="h-96 w-full rounded-3xl object-cover lg:h-[586px]"
          />
          <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur sm:inset-x-5 sm:bottom-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEEAFE] text-[#7B5CF0]">
              <AlignLeft className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className={`${heading} text-base font-bold text-[#16245A]`}>Source systems keep authority</p>
              <p className="text-sm text-[#5B6B8C]">The original system stays the record owner.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
