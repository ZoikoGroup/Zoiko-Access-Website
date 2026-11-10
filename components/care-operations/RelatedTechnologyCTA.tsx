import Image from "next/image";
import Link from "next/link";

export default function RelatedTechnologyCTA() {
  return (
    <section className="relative w-full overflow-hidden py-24 font-sans text-white sm:py-32">
      {/* Background Image Layer using /care/7.png */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src="/care/7.png"
          alt="Related technology background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        {/* Blue Tint Overlay to match the exact visual system */}
        <div
        className="pointer-events-none absolute inset-[-0.11px_0_-34.81px_0] -z-10 hidden bg-[linear-gradient(136.68deg,rgba(27,47,181,0.94)_0%,rgba(2,18,95,0.56)_100%)] lg:block"
        aria-hidden="true"
      />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 text-center sm:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          {/* Monospace Tagline Header */}
          <div className="mb-4">
            <span className="font-mono text-[12px] font-semibold tracking-wider text-purple-200 uppercase">
              RELATED TECHNOLOGY
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-[48px]">
            See how the technology fits in.
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-[16px] leading-[1.65] text-blue-100/90 sm:text-[18px]">
            Explore how integrations are designed, and what institutions need
            before anything connects.
          </p>

          {/* Main Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/technology-and-adoption"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-[15px] font-bold text-[#0E1646] shadow-xl transition-all duration-200 hover:bg-slate-100"
            >
              Technology &amp; Adoption &rarr;
            </Link>
            <Link
              href="/ehr-interoperability"
              className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-7 py-4 text-[15px] font-bold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20"
            >
              EHR interoperability
            </Link>
          </div>

          {/* Secondary Pill Tags */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-[12px] font-medium text-purple-100 backdrop-blur-sm">
              Scheduling
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-[12px] font-medium text-purple-100 backdrop-blur-sm">
              Referrals
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-mono text-[12px] font-medium text-purple-100 backdrop-blur-sm">
              Transitions
            </span>
          </div>

          {/* Defensive Institutional Disclosure Footnote */}
          <p className="mt-8 font-mono text-[12px] text-blue-200/70">
            Institutional context not open yet. It appears only once a staffed,
            privacy-reviewed team is in place.
          </p>
        </div>
      </div>
    </section>
  );
}
