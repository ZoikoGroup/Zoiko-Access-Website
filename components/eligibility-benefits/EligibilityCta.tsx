import Link from "next/link";
import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, inner, sectionPad } from "./ui";

export default function EligibilityCta() {
  return (
    <section
      className={`w-full bg-[radial-gradient(784px_832px_at_99.4%_102.6%,#b700dc_0%,rgba(167,22,223,0.75)_14.6%,rgba(151,44,226,0.5)_29.3%,rgba(118,87,232,0)_58.5%),linear-gradient(137.11deg,#0a1a4b_33.17%,#3550b8_100%)] py-12 lg:py-[96px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-center pt-[6.91px] text-center`}>
        <Eyebrow tone="light" center>
          Your next step
        </Eyebrow>
        <h2
          className={`${fontPoppins} w-full pt-[13.68px] text-[28px] font-semibold leading-[34px] tracking-[-0.28px] text-white lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.4px]`}
        >
          Explore an accountable approach to payer coordination.
        </h2>
        <p className="w-full max-w-[680px] pt-[14.8px] text-[16px] leading-[25.6px] text-white/85 min-[1400px]:max-w-none">
          <Copy
            text="Learn how consent, role control, plan-specific rules and verified handoffs inform the Zoiko Access design."
            d={[
              "Learn how consent, role control, plan-specific rules and verified handoffs inform the",
              "Zoiko Access design.",
            ]}
          />
        </p>
        <p className="w-full max-w-[680px] text-[13px] leading-[20.8px] text-white/85 min-[1400px]:max-w-none">
          Institutional contact will appear here only once a staffed, verified intake route is in place.
        </p>
        <div className="flex w-full flex-wrap justify-center gap-3 pt-[30px] lg:h-[82px]">
          <Link
            href="/payers-insurers"
            className="flex min-h-[46px] items-center justify-center rounded-[10px] border-2 border-solid border-transparent bg-white px-[22px] text-[15px] font-semibold leading-[24px] text-[#243b73]"
          >
            Explore payer solutions →
          </Link>
          <Link
            href="/implementation-approach"
            className="flex min-h-[46px] items-center justify-center rounded-[10px] border border-solid border-white px-[22px] text-[15px] font-semibold leading-[24px] text-white"
          >
            Implementation approach
          </Link>
        </div>
      </div>
    </section>
  );
}
