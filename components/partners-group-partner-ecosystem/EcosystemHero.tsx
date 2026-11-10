import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IMG, heading } from "./shared";

export default function EcosystemHero() {
  return (
    <section
      className="overflow-hidden bg-[#16245A] bg-cover bg-center px-6 py-16 lg:px-16 lg:py-20"
      style={{ backgroundImage: `url(${IMG}/bg-hero.webp)` }}
    >
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,514px)]">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-0.5 w-5 bg-[#C9D3F5]" />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9D3F5]">
              Partners &amp; Developers / Partner Ecosystem
            </p>
          </div>
          <h1 className={`${heading} mb-6 text-4xl font-bold leading-[1.1] text-white md:text-6xl md:leading-[67px]`}>
            Partner <span className="text-[#B9A7F7]">Ecosystem</span>
          </h1>
          <p className="mb-8 max-w-[680px] text-base leading-7 text-[#D7DEF5] md:text-lg">
            Explore the partner landscape and the difference between expressing interest, being reviewed, being
            authorized and being operational.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/technology-partners"
              className="group flex items-center gap-2 rounded-[10px] bg-white px-6 py-3.5 text-base font-semibold text-[#16245A] transition-colors hover:bg-[#EEF1FB]"
            >
              Explore Technology partners
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/partners-health-system-vendors"
              className="rounded-[10px] border border-white px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Review Health system vendors
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="grid h-[380px] grid-cols-2 grid-rows-2 gap-3">
            <img
              src={`${IMG}/hero-office.webp`}
              alt="A team meeting in a brick-walled office"
              className="row-span-2 h-full w-full rounded-2xl object-cover"
            />
            <img
              src={`${IMG}/clinician.webp`}
              alt="A clinician in a white coat standing outdoors"
              className="h-full w-full rounded-2xl object-cover object-[50%_20%]"
            />
            <img
              src={`${IMG}/tech-code.webp`}
              alt="Source code on a laptop screen"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="absolute left-0 top-1/2 max-w-[230px] -translate-x-4 -translate-y-1/2 rounded-xl bg-white px-4 py-3.5 shadow-[0_20px_40px_rgba(10,20,60,0.25)] sm:-translate-x-8">
            <p className={`${heading} text-sm text-[#7B5CF0]`}>Interest ≠ authorization</p>
            <p className="mt-0.5 text-[13px] leading-5 text-[#2A3550]">Four separate states, explained below.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
