import Link from "next/link";
import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Title, sectionPad } from "./ui";

export default function PartnershipCta() {
  return (
    <section
      className={`w-full bg-[linear-gradient(-51.53deg,#a508bd_1.74%,#00248f_34.33%,#01003f_99.65%)] py-14 lg:pb-[84px] lg:pt-[83px] ${sectionPad}`}
    >
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-[14px] text-center lg:px-6">
        <Title size="md" tone="light" className="text-center">
          Explore the right next step for your organization.
        </Title>
        <p className="w-full max-w-[545px] text-[16px] font-normal leading-[26.4px] text-[#d6dcff]">
          <Copy
            text="Start with the participation approach. A contact route opens only when it is verified."
            d={[
              "Start with the participation approach. A contact route opens only when",
              "it is verified.",
            ]}
          />
        </p>
        <div className="flex w-full flex-wrap justify-center gap-[12px] pt-[12px]">
          <Link
            href="#assessment-process"
            className={`${fontPoppins} flex items-center justify-center rounded-[8px] border border-solid border-transparent bg-white px-[22px] py-[12px] text-center text-[15.2px] font-semibold leading-[25px] text-[#4267d5]`}
          >
            Learn about our participation approach
          </Link>
          <Link
            href="#related"
            className={`${fontPoppins} flex items-center justify-center rounded-[8px] border border-solid border-[rgba(255,255,255,0.55)] px-[22px] py-[12px] text-center text-[15.2px] font-semibold leading-[25px] text-white`}
          >
            Educational resources
          </Link>
        </div>
      </div>
    </section>
  );
}
