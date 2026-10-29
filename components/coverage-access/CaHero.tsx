import Link from "next/link";
import { Eyebrow, Photo, darkBg, fontPoppins, glow, inner, photoBg, pic, sectionPad } from "./shared";

const scope = [
  {
    label: "Informational",
    text: "Explains concepts, roles and next steps. Available to everyone.",
    border: "border-[#1f8a4c]",
    dot: "bg-[#1f8a4c]",
  },
  {
    label: "Authorized services",
    text: "Plan or member-specific information exists only through separately approved services with verified identity.",
    border: "border-[#4267d5]",
    dot: "bg-[#4267d5]",
  },
  {
    label: "Not active here",
    text: "No benefit lookup, eligibility check, plan search or member data on this page.",
    border: "border-[#b7791f]",
    dot: "bg-[#b7791f]",
  },
];

export default function CaHero() {
  return (
    <>
      <section
        id="top"
        className={`w-full overflow-hidden py-14 lg:py-16 ${sectionPad}`}
        style={{ backgroundImage: `${glow("1100px 700px", "100% 0")},${darkBg}` }}
      >
        <div className={`${inner} grid items-center gap-10 lg:grid-cols-[1fr_555px] lg:gap-12`}>
          <div className="flex flex-col items-start gap-3">
            <Eyebrow tone="light">Payers &amp; Insurers / Coverage &amp; Access</Eyebrow>
            <h1
              className={`${fontPoppins} text-[40px] font-bold leading-[46px] tracking-[-1px] text-white lg:text-[60px] lg:leading-[71px] lg:tracking-[-1.5px]`}
            >
              Coverage and access, with{" "}
              <span className="bg-[linear-gradient(90deg,#7657e8_0%,#5b9be8_100%)] bg-clip-text text-transparent">
                responsibilities made clear.
              </span>
            </h1>
            <p className="max-w-[640px] pt-2 text-[16px] leading-7 text-white/[0.88]">
              Coverage, eligibility, benefits and authorization are separate questions, answered by different
              organizations. This page explains how each one works, who decides it, and why every answer depends on its
              source, date and scope. It does not check your plan or confirm coverage for any service.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="#terms"
                className="flex min-h-[44px] items-center justify-center rounded-[10px] bg-[#7657e8] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#6446d6]"
              >
                Understand the key terms →
              </Link>
              <Link
                href="#journey"
                className="flex min-h-[44px] items-center justify-center rounded-[10px] border-2 border-solid border-white px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                See the member journey
              </Link>
            </div>
          </div>
          <div
            className={`relative h-[300px] w-full overflow-hidden rounded-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.35)] sm:h-[454px] ${photoBg}`}
          >
            <Photo
              src={pic("hero-laptop-stethoscope")}
              alt="Hands typing on a laptop next to a stethoscope"
              sizes="(min-width: 1024px) 555px, 90vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className={`w-full bg-[#f5f8fc] py-12 lg:py-16 ${sectionPad}`}>
        <div className={`${inner} flex flex-col gap-6`}>
          <h2
            className={`${fontPoppins} text-[28px] font-semibold leading-[34px] tracking-[-0.3px] text-[#16245a] lg:text-[40px] lg:leading-[48px]`}
          >
            What this page explains—and what it does not activate.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {scope.map((s) => (
              <div
                key={s.label}
                className={`flex flex-col gap-2 rounded-2xl border border-t-4 border-solid bg-white px-6 pb-10 pt-6 shadow-[0_10px_30px_rgba(36,59,115,0.08)] ${s.border}`}
              >
                <p className="flex items-center gap-2 text-[14px] font-bold leading-6 text-[#2d3a52]">
                  <span aria-hidden="true" className={`size-2 rounded-full ${s.dot}`} />
                  {s.label}
                </p>
                <p className="text-[15px] leading-6 text-[#5b6678]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
