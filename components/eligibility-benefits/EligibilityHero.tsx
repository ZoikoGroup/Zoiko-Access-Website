import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, inner, sectionPad, sectionY } from "./ui";

export default function EligibilityHero() {
  return (
    <section
      id="top"
      className={`w-full bg-[radial-gradient(1200px_656px_at_85%_123px,#b700dc_0%,rgba(167,22,223,0.75)_15%,rgba(151,44,226,0.5)_30%,rgba(118,87,232,0)_60%),linear-gradient(128.2deg,#0a1a4b_51.44%,#3550b8_100%)] ${sectionY} ${sectionPad}`}
    >
      <div className={`${inner} grid items-center gap-10 lg:h-[476.19px] lg:grid-cols-[7fr_5fr] lg:gap-14`}>
        <div className="flex w-full flex-col items-start gap-[12.8px] pt-[6.91px]">
          <Eyebrow tone="light">Payers &amp; Insurers · Coverage &amp; Access</Eyebrow>
          <h1
            className={`${fontPoppins} w-full text-[36px] font-semibold leading-[42px] tracking-[-0.72px] text-white lg:text-[52px] lg:leading-[58.24px] lg:tracking-[-1.04px]`}
          >
            Understand eligibility{" "}
            <span className="text-[#8861fc]">
              and
              <br className="hidden min-[1400px]:block" /> benefits.
            </span>
          </h1>
          <p className="w-full max-w-[640px] pt-[8.485px] text-[16px] leading-[26px] text-white/[0.88] min-[1400px]:max-w-none lg:text-[17px] lg:leading-[27.2px]">
            <Copy
              text="Eligibility checks and benefit information can help authorized parties understand plan-specific administrative questions. Responses depend on the payer, contract, date and permitted purpose; they do not guarantee coverage, clinical approval or payment."
              d={[
                "Eligibility checks and benefit information can help authorized parties",
                "understand plan-specific administrative questions. Responses depend on the",
                "payer, contract, date and permitted purpose; they do not guarantee coverage,",
                "clinical approval or payment.",
              ]}
            />
          </p>
          <div className="flex flex-wrap gap-3 pb-[13.2px] pt-[17.2px]">
            <Link
              href="#how"
              className="flex min-h-[46px] items-center justify-center rounded-[10px] border-2 border-solid border-transparent bg-[#8861fc] px-[22px] text-[15px] font-semibold leading-[24px] text-white"
            >
              Explore how it works →
            </Link>
            <Link
              href="/payers-insurers#integrations"
              className="flex min-h-[46px] items-center justify-center rounded-[10px] border border-solid border-white px-[22px] text-[15px] font-semibold leading-[24px] text-white"
            >
              Review payer integrations
            </Link>
          </div>
          <div className="flex w-full max-w-[640px] items-start gap-[13px] rounded-[10px] border border-solid border-white/[0.18] bg-white/[0.08] px-[14px] py-3 text-[16px] leading-[26px] text-white/[0.88] min-[1400px]:max-w-none lg:w-[640px] lg:text-[17px] lg:leading-[27.2px]">
            <span aria-hidden="true">ⓘ</span>
            <p>
              <Copy
                text="The payer or plan remains the source of truth for entitlement, benefit design and decision rules."
                d={[
                  "The payer or plan remains the source of truth for entitlement, benefit",
                  "design and decision rules.",
                ]}
              />
            </p>
          </div>
        </div>

        <div
          className="relative h-[300px] w-full overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,#dcd3fb_0%,#c7d3f5_100%)] shadow-[0_30px_60px_rgba(0,0,0,0.35)] sm:h-[400px] lg:h-[474px] lg:justify-self-end"
          role="img"
          aria-label="Benefits administrator reviewing plan documents and figures at a desk"
        >
          <FigmaImage
            src="/eligibility-benefits/hero-benefits-desk.webp"
            box={{ left: -19.31, width: 138.62 }}
            sizes="(min-width: 1024px) 600px, 90vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
