import Link from "next/link";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, inner, sectionPad } from "./ui";

export default function IntakeCallout() {
  return (
    <section
      id="intake"
      className={`w-full bg-[linear-gradient(-65.13deg,#a508bd_1.74%,#00248f_34.33%,#01003f_99.65%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div
        className={`${inner} flex flex-col items-start gap-10 rounded-[22px] border-2 border-solid border-[#7657e8] bg-white p-6 lg:min-h-[465px] lg:flex-row lg:items-start lg:justify-center lg:gap-[68px] lg:p-[34px]`}
      >
        <div
          className="relative h-[260px] w-full overflow-hidden rounded-[14px] bg-[linear-gradient(116.64deg,#4267d5_0%,#7657e8_100%)] lg:h-[391px] lg:w-[515px] lg:shrink-0"
          role="img"
          aria-label="A weathered wooden jetty reaching out over a calm mountain lake"
        >
          <FigmaImage
            src="/pharmacy-partnership/intake-conversation.webp"
            box={{ left: 0.03, top: -2.02, width: 100, height: 102.64 }}
            sizes="(min-width: 1024px) 515px, 90vw"
          />
        </div>

        <div className="flex w-full flex-col items-start lg:h-[391px] lg:w-[606px] lg:shrink-0">
          <Eyebrow className="py-px">Eligibility and intake</Eyebrow>
          <h2
            className={`${fontPoppins} w-full pt-[8.3px] text-[28px] font-semibold leading-[34px] tracking-[-0.56px] text-[#243b73] lg:max-w-[534px] lg:text-[36.8px] lg:leading-[41.22px] lg:tracking-[-0.736px]`}
          >
            Learn about our participation approach.
          </h2>
          <p className="w-full pt-[11px] text-[16.8px] font-normal leading-[27.72px] text-[#273444] lg:max-w-[611px] lg:pt-[41px]">
            No inquiry form is open on this page. The contact route appears only
            when the region, approval, intake endpoint, receiving owner, privacy
            notice, spam protection, monitoring and rollback are all verified.
          </p>
          <div className="flex w-full flex-wrap items-center gap-[12px] pt-[20px] lg:pt-[23px]">
            <Link
              href="#assessment-process"
              className={`${fontPoppins} flex h-[51px] items-center rounded-[8px] border border-solid border-transparent bg-[#7657e8] px-[22px] text-center text-[15.2px] font-semibold leading-[25px] text-white`}
            >
              Learn about our participation approach
            </Link>
            <span className="rounded-full bg-[#fff0d9] px-[12px] pb-[4px] pt-[3px] text-[11.5px] font-semibold leading-[19px] text-[#7a4b00]">
              Contact route not open
            </span>
          </div>
          <p className="mt-[10px] w-full rounded-[10px] bg-[#ebe9fb] px-[16px] pb-[14px] pt-[19.3px] text-[13.6px] font-normal leading-[22.44px] text-[#273444]">
            Fallback: read the assessment stages above or visit the verified
            resources below. Do not send patient information.
          </p>
        </div>
      </div>
    </section>
  );
}
