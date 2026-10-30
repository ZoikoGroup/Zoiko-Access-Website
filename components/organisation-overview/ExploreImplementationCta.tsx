import Link from "next/link";

export default function ExploreImplementationCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#16245A] via-[#2E3F9E] to-[#5A43C9] py-24 font-sans sm:py-32">
      {/* Central radial glow from top to bottom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #7657E880 0%, #7657E800 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-10">
        {/* Eyebrow badge line */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="h-0.5 w-4 bg-[#B7A6FF]" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B7A6FF]">
            Next Step
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[48px]">
          Explore program implementation.
        </h2>

        {/* Subtitle / Descriptive Text */}
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.65] text-blue-100/90 sm:text-[16px]">
          See how an organization program may be scoped, governed, validated and
          authorized.
          <br />
          &ldquo;Discuss a program&rdquo; appears only once an authorized
          program intake is operational.
        </p>

        {/* Call-to-action button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/implementation"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[15px] font-semibold text-[#1E1B4B] shadow-lg transition-all duration-300 hover:bg-slate-100 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:ring-offset-2 focus:ring-offset-[#16245A]"
          >
            <span>Explore program implementation</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
