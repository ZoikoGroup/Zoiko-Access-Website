import Image from "next/image";
import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, sectionPad } from "./ui";

export default function FulfillmentHero() {
  return (
    <section
      id="top"
      className={`relative isolate w-full overflow-hidden bg-[#243b73] py-12 lg:h-[636px] lg:py-0 ${sectionPad}`}
    >
      <Image
        src="/fulfillment-availability/hero-background.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-top"
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block" aria-hidden="true">
        <div className="relative size-full overflow-hidden">
          <FigmaImage
            src="/fulfillment-availability/hero-storefront.webp"
            box={{ left: -6.81, width: 113.61 }}
            sizes="720px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#243b73] to-[rgba(36,59,115,0)] to-[35%]" />
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start justify-center lg:h-full lg:px-6">
        <div className="flex w-full flex-col items-start gap-[15px] lg:w-[483px]">
          <Eyebrow tone="periwinkle">Pharmacy services</Eyebrow>
          <h1
            className={`${fontPoppins} w-full text-[40px] font-bold leading-[46px] tracking-[-0.8px] text-white lg:text-[64px] lg:leading-[70px] lg:tracking-[-1.024px]`}
          >
            <Copy
              text="Understanding pharmacy fulfillment"
              d={["Understanding", "pharmacy", "fulfillment"]}
            />{" "}
            <span className="text-[#8e7bef]">and availability.</span>
          </h1>
          <p className="w-full max-w-[470px] pt-[6.38px] text-[16px] font-normal leading-[26.4px] text-[#d7e0ff]">
            <Copy
              text="Availability information can help you plan, but only an authorized pharmacy can confirm whether a medicine or service can be supplied under local rules."
              d={[
                "Availability information can help you plan, but only an",
                "authorized pharmacy can confirm whether a medicine or",
                "service can be supplied under local rules.",
              ]}
            />
          </p>
          <div className="pt-[13px]">
            <Link
              href="#steps"
              className={`${fontPoppins} flex items-center rounded-[8px] border border-solid border-transparent bg-[#8e7bef] px-[22px] py-[12px] text-[15.2px] font-semibold leading-[25px] text-white`}
            >
              How availability works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
