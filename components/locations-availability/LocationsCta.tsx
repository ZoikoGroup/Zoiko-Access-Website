import Link from "next/link";

export default function LocationsCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#251C5C] via-[#3E33A0] to-[#6A55D6] py-20">
      {/* Decorative circles */}
      <span
        className="pointer-events-none absolute -bottom-36 -left-20 h-72 w-72 rounded-full bg-white/10"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-white/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-6 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,505px)] lg:gap-x-16 lg:px-[70px]">
        <div>
          <h2 className="max-w-[660px] text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-white [font-family:var(--font-sora)] sm:text-[36px] sm:leading-[44px]">
            Find the right information for your next step
          </h2>
          <p className="mt-6 max-w-[520px] text-[16px] leading-[26px] text-[#DCD8F7]">
            Zoiko Access supports information and authorized coordination.
            Healthcare professionals and care organizations retain clinical
            responsibility.
          </p>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/how-it-works"
              className="inline-flex min-h-12 items-center rounded-xl bg-white px-6 text-[16px] font-semibold text-[#211A5A] transition-opacity hover:opacity-90"
            >
              How Zoiko Access works
            </Link>
            {/* Shown as unavailable until discovery is activated for the selected location. */}
            <span
              aria-disabled="true"
              className="inline-flex min-h-12 cursor-not-allowed items-center rounded-xl border-2 border-white/30 px-6 text-[16px] font-semibold text-white/50"
            >
              Find care in your location
            </span>
          </div>
          <p className="mt-2 text-[14px] leading-6 text-[#DCD8F7]">
            Find care appears only if discovery is activated and verified for
            your selected location.
          </p>
        </div>
      </div>
    </section>
  );
}
