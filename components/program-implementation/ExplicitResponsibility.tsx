import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heading } from "./shared";

export default function ExplicitResponsibility() {
  return (
    <section className="bg-[#111A4A] bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(91,63,208,0.65),transparent)] px-6 py-20 text-center text-white lg:px-16">
      <div className="mx-auto max-w-[900px]">
        <h2 className={`${heading} mb-3 text-3xl md:text-4xl`}>Built on explicit responsibility.</h2>
        <blockquote className={`${heading} mb-8 text-2xl leading-snug md:text-[34px] md:leading-[1.3]`}>
          &quot;Good implementation makes{" "}
          <span className="text-[#B9A8FD]">program authority, care responsibility and data boundaries</span>{" "}
          explicit before work begins.&quot;
        </blockquote>
        <p className="mb-6 text-sm text-white/80 md:text-base">
          Start with the Organizations overview, or return to the six phases.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/organisation-overview"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#16245A] transition-colors hover:bg-white/90"
          >
            Explore organizations
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#phases"
            className="rounded-lg border border-white px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            The six phases
          </a>
        </div>
      </div>
    </section>
  );
}
