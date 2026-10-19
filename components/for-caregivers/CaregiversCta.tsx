import Link from "next/link";

export default function CaregiversCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#261E5D] via-[#4538A8] to-[#6E5BD9] py-[100px]">
      {/* Decorative circles */}
      <span
        className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-white/10"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-20 -top-28 h-[360px] w-[360px] rounded-full bg-white/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 text-center sm:px-10">
        <p className="inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#DCD6FA]">
          <span
            className="block h-2 w-2 rounded-full bg-[#A996F5]"
            aria-hidden="true"
          />
          Your next patient step
        </p>

        <h2 className="mt-3 text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-white [font-family:var(--font-poppins)] sm:text-[40px]">
          Start with understanding.
        </h2>

        <p className="mt-5 text-[16px] leading-[26px] text-[#DCD6FA]">
          Learn the basics before considering any independently authorized
          personal service.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/for-patients"
            className="inline-flex min-h-12 items-center rounded-xl bg-white px-6 text-[16px] font-semibold text-[#1D1857] transition-opacity hover:opacity-90"
          >
            Explore patient services
          </Link>
          <Link
            href="#privacy"
            className="inline-flex min-h-12 items-center rounded-xl border-2 border-white/40 px-6 text-[16px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            Read privacy &amp; permissions
          </Link>
        </div>
      </div>
    </section>
  );
}
