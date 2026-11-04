import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heading } from "./shared";

export default function ContentGovernance() {
  return (
    <section className="bg-[#F5F8FC] px-6 pb-20 pt-4 lg:px-16">
      <div className="mx-auto w-full max-w-[1280px] rounded-3xl bg-[#253B73] px-8 py-10 text-white lg:px-11">
        <h2 className={`${heading} mb-2 text-3xl md:text-4xl`}>Content governance &amp; corrections.</h2>
        <p className="mb-6 text-sm leading-6 text-white/80 md:text-base">
          Content owner: pending approval · Last reviewed: pending · Report a correction through the
          published help route.
        </p>
        <Link
          href="/talk-to-support"
          className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#16245A] transition-colors hover:bg-white/90"
        >
          Help &amp; corrections
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
