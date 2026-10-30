import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { headingFont } from "./Eyebrow";

export default function SummaryCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#16245A] via-[#2E3A9E] to-[#5B45C8] py-20 font-sans text-white">
      <div className="mx-auto max-w-[1000px] px-6 text-center sm:px-10">
        <div className="flex items-center justify-center gap-2.5">
          <span className="h-0.5 w-5 bg-[#C9C2F5]" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C9C2F5]">
            In summary
          </span>
        </div>
        <h2
          className={`mt-3 text-3xl font-semibold leading-tight sm:text-[40px] sm:leading-[52px] ${headingFont}`}
        >
          Coordinated support, with responsibility kept local.
        </h2>
        <p className="mx-auto mt-4 max-w-[680px] text-base leading-7 text-white/85">
          Zoiko Access is designed to help people navigate support and
          authorized handoffs, while licensed local providers keep clinical
          responsibility.
        </p>
        <Link
          href="/organisation-overview"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#16245A] transition-colors hover:bg-[#EDE8FF] sm:text-base"
        >
          Explore organizations
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
