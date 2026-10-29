import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, inner, photoBg, sectionPad } from "./ui";

export default function PaHero() {
  return (
    <section
      id="top"
      className={`w-full border-b border-solid border-[#e3e8f2] bg-[radial-gradient(1200px_726px_at_85%_136px,#b700dc_0%,rgba(167,22,223,0.75)_15%,rgba(151,44,226,0.5)_30%,rgba(118,87,232,0)_60%),linear-gradient(215.46deg,#0a1a4b_51.63%,#3550b8_106.4%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} grid gap-10 lg:h-[540px] lg:grid-cols-[7fr_5fr] lg:gap-0`}>
        <div className="flex w-full flex-col items-start justify-center lg:h-[537px]">
          <div className="w-full pb-3">
            <Eyebrow tone="lilac">Payers &amp; Insurers / Prior Authorizations</Eyebrow>
          </div>
          <h1
            className={`${fontPoppins} w-full pt-4 text-[40px] font-bold leading-[46px] tracking-[-1px] text-white lg:h-[157.59px] lg:pt-[27.8px] lg:text-[64px] lg:leading-[64.8px] lg:tracking-[-1.5px]`}
          >
            Prior authorizations,
            <br />
            <span className="bg-gradient-to-r from-[#7657e8] to-[#4267d5] bg-clip-text text-transparent">explained.</span>
          </h1>
          <blockquote className="w-full max-w-[680px] rounded-r-[14px] pt-[18.7px] text-[16px] leading-[26px] text-white drop-shadow-[0_10px_15px_rgba(36,59,115,0.08)] min-[1400px]:max-w-none lg:text-[18px] lg:leading-[28.8px]">
            <Copy
              text="A prior authorization is a payer or plan review that may be required before certain covered services or medications. The responsible payer determines its requirements and outcome; "
              d={[
                "A prior authorization is a payer or plan review that may be required before",
                "certain covered services or medications. The responsible payer",
                "determines its requirements and outcome; ",
              ]}
            />
            <strong className="font-bold text-[#7d5bff]">
              a request or acknowledgment
              <br className="hidden min-[1400px]:block" /> is not an approval.
            </strong>
          </blockquote>
          <div className="flex w-full items-start gap-2 pt-[11px] text-[13.5px] leading-[21.6px] text-white lg:h-[54.19px]">
            <span aria-hidden="true" className="text-[#5b6678]">
              ◎
            </span>
            <p>
              <Copy
                text="Availability varies by location and participating organizations. This page does not verify your own authorization status."
                d={[
                  "Availability varies by location and participating organizations. This page does not verify your own",
                  "authorization status.",
                ]}
              />
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center gap-[22px] pt-[30px]">
            <Link
              href="#process"
              className="flex min-h-[46px] items-center justify-center rounded-[10px] border-2 border-solid border-transparent bg-[#7657e8] px-[22px] py-3 text-[15px] font-semibold leading-[24px] text-white"
            >
              Understand the process ↓
            </Link>
            <Link
              href="/eligibility-benefits"
              className="border-b-2 border-solid border-[#7657e8] py-1 text-[16px] font-semibold leading-[25.6px] text-white"
            >
              Explore eligibility &amp; benefits →
            </Link>
          </div>
        </div>

        <div className={`relative h-[360px] w-full lg:h-[537px] lg:min-h-[420px] ${photoBg}`}>
          <div className="absolute inset-0 overflow-hidden" role="img" aria-label="Clinician reviewing information on a tablet">
            <FigmaImage
              src="/prior-authorizations/hero-clinician-tablet.webp"
              box={{ left: -34.99, width: 169.99 }}
              sizes="(min-width: 1024px) 560px, 90vw"
              priority
            />
          </div>
          <div className="absolute bottom-6 left-4 flex items-center gap-[10px] rounded-[14px] bg-white px-[18px] py-[14px] drop-shadow-[0_20px_20px_rgba(22,36,90,0.2)] lg:bottom-[53.2px] lg:left-[-65px]">
            <span className="rounded-full bg-[#e7eefc] px-3 pb-[6.39px] pt-[5px] text-[14px] font-semibold leading-[22.4px] text-[#243b73]">
              Received
            </span>
            <span className={`${fontPoppins} text-[22px] font-bold leading-[35.2px] text-[#7657e8]`} aria-label="is not">
              ≠
            </span>
            <span className="rounded-full bg-[#e3f4ec] px-3 pb-[6.39px] pt-[5px] text-[14px] font-semibold leading-[22.4px] text-[#14653f]">
              Approved
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
