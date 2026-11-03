import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HealthInfoHero() {
  return (
    <section className="relative overflow-hidden bg-[#02125F] px-6 py-16 font-sans text-white lg:px-24 lg:py-24">
      <img
        src="/health-information-access/hero-bg.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-[2px] w-4 bg-white/70" />
            <span className="text-xs font-bold uppercase tracking-wider text-white/80">
              Patients | Health information access
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
            Your records stay{" "}
            <span className="text-[#B383FF]">where they belong.</span>
          </h1>

          <p className="mb-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            Health information is held by the organizations that created it.
            Zoiko Access is designed to support authorized access source by
            source — not to build a single worldwide record, and not to connect
            to every system instantly.
          </p>

          <p className="mb-8 text-xs text-white/60 md:text-sm">
            No records are shown on this page.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/how-it-works"
              className="group flex items-center gap-2 rounded-xl bg-[#7B61FF] px-6 py-4 text-sm font-bold text-white shadow-[0_4px_20px_rgba(123,97,255,0.35)] transition-all hover:bg-[#6A4FF5]"
            >
              See how access works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/privacy-permissions"
              className="rounded-xl border border-white px-6 py-4 text-sm font-bold text-white transition-all hover:bg-white/10"
            >
              Privacy &amp; permissions
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:col-span-6">
          <img
            src="/health-information-access/hero-illustration.webp"
            alt="A phone connected to separate clinic, lab, clinician and pharmacy sources, each with its own lock"
            className="w-full max-w-[620px]"
          />
        </div>
      </div>
    </section>
  );
}
