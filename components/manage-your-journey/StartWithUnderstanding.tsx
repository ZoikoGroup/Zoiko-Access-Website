import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StartWithUnderstanding() {
  return (
    <section className="bg-white px-6 pb-16 font-sans lg:px-24 lg:pb-20">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 rounded-2xl bg-[#1E2A78] px-8 py-10 text-white md:flex-row md:items-center md:justify-between md:px-12">
        <div>
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight md:text-4xl">
            Start with understanding.
          </h2>
          <p className="text-sm text-white/80">
            Learn how requests, holds and confirmations differ before you take
            a step.
          </p>
        </div>
        <Link
          href="/appointments-requests"
          className="group flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#0A1A8C] transition-all hover:bg-white/90"
        >
          Appointments &amp; requests
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
