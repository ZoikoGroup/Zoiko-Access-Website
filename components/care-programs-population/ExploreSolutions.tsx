import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heading } from "./shared";

export default function ExploreSolutions() {
  return (
    <section className="bg-gradient-to-br from-[#16245A] via-[#2D3E9E] to-[#5B45C8] px-6 py-20 text-center text-white lg:px-16">
      <div className="mx-auto max-w-[800px]">
        <h2 className={`${heading} mb-3 text-3xl md:text-5xl`}>Explore organization solutions.</h2>
        <p className="mb-4 text-base leading-7 text-white/90 md:text-lg">
          See how each kind of organization could structure an accountable program.
        </p>
        <p className="mb-8 text-sm text-white/70">
          &quot;Discuss a program&quot; appears only once a staffed contact route is verified.
        </p>
        <Link
          href="/organisation-overview"
          className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-semibold text-[#16245A] transition-colors hover:bg-white/90 md:text-base"
        >
          Explore organization solutions
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
