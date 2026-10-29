import Link from "next/link";
import { Eyebrow, Photo, darkBg, fontPoppins, glow, inner, photoBg, pic, sectionPad } from "./shared";

export default function PigHero() {
  return (
    <>
      <section
        id="top"
        className={`w-full overflow-hidden py-14 lg:py-24 ${sectionPad}`}
        style={{ backgroundImage: `${glow("1100px 700px", "100% 0")},${darkBg}` }}
      >
        <div className={`${inner} grid items-center gap-10 lg:grid-cols-[1fr_506px] lg:gap-16`}>
          <div className="flex flex-col items-start gap-3">
            <Eyebrow tone="light">Payers &amp; Insurers / Integrations &amp; Governance</Eyebrow>
            <h1
              className={`${fontPoppins} text-[40px] font-bold leading-[44px] tracking-[-1px] text-white lg:text-[60px] lg:leading-[58px] lg:tracking-[-1.5px]`}
            >
              Payer integration built on <span className="text-[#7d5bff]">clear responsibilities.</span>
            </h1>
            <p className="max-w-[640px] pt-2 text-[16px] leading-7 text-white/[0.88]">
              Zoiko Access is designed to support approved coordination between participating payer, provider, and
              member systems. Each exchange depends on appropriate contracts, authority, technical readiness, and local
              rules. Payers remain responsible for their coverage decisions; care organizations retain clinical
              responsibility.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="#overview"
                className="flex min-h-[44px] items-center justify-center rounded-[10px] bg-[#7657e8] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#6446d6]"
              >
                Explore the integration approach →
              </Link>
              <Link
                href="#governance"
                className="flex min-h-[44px] items-center justify-center rounded-[10px] border border-solid border-white px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Understand governance
              </Link>
            </div>
          </div>

          <div
            className={`relative h-[300px] w-full overflow-hidden rounded-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.35)] sm:h-[396px] ${photoBg}`}
          >
            <Photo
              src={pic("data-center-integration")}
              alt="Data center server racks with network cabling"
              sizes="(min-width: 1024px) 506px, 90vw"
              priority
            />
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[20px] border-[6px] border-solid border-white/[0.12]" />
          </div>
        </div>
      </section>

      <div className={`w-full border-b border-solid border-[#e3e8f2] bg-[#f4f4f5] py-5 ${sectionPad}`}>
        <div className={`${inner} flex items-start gap-3.5`}>
          <span
            aria-hidden="true"
            className={`${fontPoppins} flex size-7 shrink-0 items-center justify-center rounded-full bg-[#eee9fd] text-[16px] font-bold text-[#7657e8]`}
          >
            i
          </span>
          <p className="max-w-[1000px] text-[15px] leading-6 text-[#2d3a52]">
            <strong className="font-bold">Availability &amp; scope.</strong> This page is informational. Eligibility to
            integrate depends on the market and each partner&apos;s technical readiness — nothing here is shown as
            &quot;available now&quot;.
          </p>
        </div>
      </div>
    </>
  );
}
