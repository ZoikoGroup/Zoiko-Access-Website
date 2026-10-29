import Link from "next/link";
import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Title, sectionPad } from "./ui";

export default function FulfillmentCta() {
  return (
    <section
      className={`w-full bg-[linear-gradient(-51.53deg,#a508bd_1.74%,#00248f_34.33%,#01003f_99.65%)] py-14 lg:pb-[84px] lg:pt-[83px] ${sectionPad}`}
    >
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-[14px] text-center lg:px-6">
        <Title size="md" tone="light" className="text-center">
          Start with understanding.
        </Title>
        <p className="w-full max-w-[545px] text-[16px] font-normal leading-[26.4px] text-[#d6dcff]">
          <Copy
            text="Learn how pharmacy services fit together before considering any independently authorized service."
            d={[
              "Learn how pharmacy services fit together before considering any",
              "independently authorized service.",
            ]}
          />
        </p>
        <div className="flex w-full flex-wrap justify-center gap-[12px] pt-[12px]">
          <Link
            href="/pharmacy-services"
            className={`${fontPoppins} flex items-center justify-center rounded-[8px] border border-solid border-transparent bg-white px-[22px] py-[12px] text-center text-[15.2px] font-semibold leading-[25px] text-[#4267d5]`}
          >
            Explore pharmacy services
          </Link>
          <Link
            href="/prescription-routing"
            className={`${fontPoppins} flex items-center justify-center rounded-[8px] border border-solid border-[rgba(255,255,255,0.55)] px-[22px] py-[12px] text-center text-[15.2px] font-semibold leading-[25px] text-white`}
          >
            Understand prescription routing
          </Link>
        </div>
      </div>
    </section>
  );
}
