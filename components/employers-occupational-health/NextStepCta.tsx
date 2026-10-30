import Link from "next/link";
import { headingFont } from "@/components/community-home-care/Eyebrow";

export default function NextStepCta() {
  return (
    <section className="w-full bg-gradient-to-br from-[#16245A] via-[#2E3A9E] to-[#5B45C8] py-20 font-sans text-white">
      <div className="mx-auto max-w-[1100px] px-6 text-center sm:px-10">
        <div className="flex items-center justify-center gap-2.5">
          <span className="h-0.5 w-5 bg-[#C9C2F5]" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C9C2F5]">
            Next step
          </span>
        </div>
        <h2
          className={`mt-3 text-3xl font-semibold leading-tight sm:text-[40px] sm:leading-[52px] ${headingFont}`}
        >
          Explore how organization programs are implemented.
        </h2>
        <p className="mt-3 text-base leading-7 text-white/85">
          See how a workplace program may be scoped, governed, validated and
          authorized.
        </p>
        <p className="mt-1 text-[13px] text-white/75">
          &quot;Talk to our team&quot; appears only once a staffed institutional
          intake is in place.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/implementation-approach"
            className="inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-[#16245A] transition-colors hover:bg-[#EDE8FF]"
          >
            Explore program implementation →
          </Link>
          <Link
            href="/organisation-overview"
            className="inline-flex items-center rounded-xl border-2 border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Organizations overview
          </Link>
        </div>
      </div>
    </section>
  );
}
