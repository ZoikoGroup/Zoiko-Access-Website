import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heading } from "./shared";

export default function NextStep() {
  return (
    <section className="bg-gradient-to-br from-[#16245A] via-[#2D3E9E] to-[#5B45C8] px-6 py-20 text-center text-white lg:px-16">
      <div className="mx-auto max-w-[800px]">
        <div className="mb-4 flex items-center justify-center gap-2.5">
          <span className="h-0.5 w-5 bg-[#C9D3F5]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9D3F5]">
            Next step
          </span>
        </div>
        <h2 className={`${heading} mb-4 text-3xl md:text-5xl`}>
          Explore permitted program pathways.
        </h2>
        <p className="mx-auto mb-8 max-w-[640px] text-base leading-7 text-white/85">
          Start with the Organizations overview. Institutional contact appears
          only where an approved, staffed route is published.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/organisation-overview"
            className="group flex items-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-semibold text-[#16245A] transition-colors hover:bg-white/90 md:text-base"
          >
            Organizations overview
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/community-home-care"
            className="rounded-lg border-2 border-white px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:text-base"
          >
            Community &amp; home care
          </Link>
        </div>
      </div>
    </section>
  );
}
