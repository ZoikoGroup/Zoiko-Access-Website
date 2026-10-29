import Link from "next/link";

export default function StartWithUnderstandingCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#030938] via-[#091868] to-[#50127a] py-16 sm:py-20 lg:py-24 font-sans text-white">
      {/* Ambient Glows */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center sm:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          {/* Main Title */}
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[44px] lg:text-[48px]">
            Start with understanding.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.65] text-[#C4B5FD] sm:text-[16px]">
            Learn how pharmacy coordination works before considering any
            independently authorized service.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="#how-coordination-works"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-xs font-semibold text-[#1E3A8A] shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all hover:bg-slate-100 sm:text-sm"
            >
              How coordination works
            </Link>

            <Link
              href="/prescription-routing"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-xs font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/50 sm:text-sm"
            >
              Prescription routing
            </Link>

            <Link
              href="/fulfillment-availability"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-xs font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/50 sm:text-sm"
            >
              Fulfillment &amp; availability
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
