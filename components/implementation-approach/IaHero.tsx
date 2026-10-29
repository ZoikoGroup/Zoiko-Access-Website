import Link from "next/link";
import { Eyebrow, Photo, darkBg, fontPoppins, glow, inner, photoBg, pic, sectionPad } from "./shared";

export default function IaHero() {
  return (
    <>
      <section
        id="top"
        className={`w-full overflow-hidden py-14 lg:py-16 ${sectionPad}`}
        style={{ backgroundImage: `${glow("1100px 700px", "100% 0")},${darkBg}` }}
      >
        <div className={`${inner} grid items-center gap-10 lg:grid-cols-[1fr_553px] lg:gap-12`}>
          <div className="flex flex-col items-start gap-3">
            <Eyebrow tone="light">Payers &amp; Insurers / Implementation</Eyebrow>
            <h1
              className={`${fontPoppins} text-[40px] font-bold leading-[44px] tracking-[-1px] text-white lg:text-[60px] lg:leading-[58px] lg:tracking-[-1.5px]`}
            >
              A governed approach to{" "}
              <span className="bg-[linear-gradient(90deg,#7657e8_0%,#5b9be8_100%)] bg-clip-text text-transparent">
                payer integration.
              </span>
            </h1>
            <p className="max-w-[640px] pt-2 text-[16px] leading-7 text-white/[0.88]">
              Learn how an implementation may be assessed, scoped, connected and validated—with local obligations and
              each organization&apos;s authority clearly defined.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="#journey"
                className="flex min-h-[44px] items-center justify-center rounded-[10px] bg-[#7657e8] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#6446d6]"
              >
                Explore implementation steps →
              </Link>
              <Link
                href="/payer-integrations-governance"
                className="flex min-h-[44px] items-center justify-center rounded-[10px] border-2 border-solid border-white px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Review integration governance
              </Link>
            </div>
          </div>
          <div
            className={`relative h-[300px] w-full overflow-hidden rounded-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.35)] sm:h-[442px] ${photoBg}`}
          >
            <Photo
              src={pic("hero-team-laptops")}
              alt="Team working on laptops around a shared table"
              sizes="(min-width: 1024px) 553px, 90vw"
              priority
            />
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[20px] border-[6px] border-solid border-white/[0.12]" />
          </div>
        </div>
      </section>

      <div className={`w-full border-b border-solid border-[#e3e8f2] bg-white py-5 ${sectionPad}`}>
        <div className={`${inner} flex items-start gap-3.5`}>
          <span
            aria-hidden="true"
            className={`${fontPoppins} flex size-7 shrink-0 items-center justify-center rounded-full bg-[#eee9fd] text-[16px] font-bold text-[#7657e8]`}
          >
            i
          </span>
          <p className="text-[15px] leading-6 text-[#2d3a52]">
            <strong className="font-bold">What this page means.</strong> This is a design and evaluation approach, not
            confirmation of a deployed payer integration, regulatory permission, signed contract or service availability.
          </p>
        </div>
      </div>
    </>
  );
}
