import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heading } from "./shared";

export default function ExplorePrograms() {
  return (
    <section className="bg-gradient-to-br from-[#16245A] via-[#2D3E9E] to-[#5B45C8] px-6 py-20 text-white lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <h2 className={`${heading} mb-2 text-3xl md:text-4xl`}>Explore governed programs.</h2>
        <p className="mb-8 text-base leading-7 text-white/85">
          Every step stays with accountable people and institutions. &quot;Discuss a program&quot;
          appears only once a staffed contact route exists.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/organizations-program-implementation"
            className="group flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#16245A] transition-colors hover:bg-white/90 md:text-base"
          >
            Program implementation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/organisation-overview"
            className="rounded-lg border-2 border-white px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:text-base"
          >
            Organizations overview
          </Link>
        </div>
      </div>
    </section>
  );
}
