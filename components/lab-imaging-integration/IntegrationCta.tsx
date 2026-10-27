import Link from "next/link";
import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Title, sectionPad } from "./ui";

const ghost = `${fontPoppins} flex items-center justify-center rounded-[8px] border border-solid border-[rgba(255,255,255,0.55)] px-[22px] py-[12px] text-center text-[15.2px] font-semibold leading-[25px] text-white`;

export default function IntegrationCta() {
  return (
    <section
      className={`w-full bg-[linear-gradient(-53.53deg,#a508bd_1.74%,#00248f_34.33%,#01003f_99.65%)] py-14 lg:pb-[84px] lg:pt-[83px] ${sectionPad}`}
    >
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-[13.4px] text-center lg:px-6">
        <Title size="md" tone="light" className="text-center">
          Explore institutional collaboration.
        </Title>
        <p className="w-full max-w-[545px] text-[16px] font-normal leading-[26.4px] text-[#d6dcff]">
          <Copy
            text="A contact route opens only when a trained intake team and route are verified. No form, booking widget or response promise appears until then."
            d={[
              "A contact route opens only when a trained intake team and route are",
              "verified. No form, booking widget or response promise appears until",
              "then.",
            ]}
          />
        </p>
        <div className="flex w-full flex-wrap justify-center gap-[12px] pt-[12.61px]">
          <Link
            href="/institutional-team"
            className={`${fontPoppins} flex items-center justify-center rounded-[8px] border border-solid border-transparent bg-white px-[22px] py-[12px] text-center text-[15.2px] font-semibold leading-[25px] text-[#4267d5]`}
          >
            Explore institutional collaboration
          </Link>
          <Link href="/for-laboratories" className={ghost}>
            For laboratories
          </Link>
          <Link href="/diagnostics-coordination" className={ghost}>
            Diagnostics coordination
          </Link>
        </div>
      </div>
    </section>
  );
}
