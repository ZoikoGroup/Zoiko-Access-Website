import Link from "next/link";
import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Title, sectionPad } from "./ui";

export default function DiagnosticsCta() {
  return (
    <section
      className={`w-full bg-[linear-gradient(-49.64deg,#a508bd_7.28%,#00248f_30.75%,#01003f_99.63%)] py-14 lg:pb-[84px] lg:pt-[83px] ${sectionPad}`}
    >
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-[14px] text-center lg:px-6">
        <Title tone="light" className="text-center">
          Discuss diagnostic coordination requirements.
        </Title>
        <p className="w-full max-w-[545px] text-[16px] font-normal leading-[26.4px] text-[#d6dcff]">
          <Copy
            text="This route opens only when a verified institutional inquiry team is in place. Until then, explore integration principles."
            d={[
              "This route opens only when a verified institutional inquiry team is in",
              "place. Until then, explore integration principles.",
            ]}
          />
        </p>
        <div className="flex w-full flex-wrap justify-center gap-[12px] pt-[12px]">
          <Link
            href="#integration"
            className={`${fontPoppins} flex items-center justify-center rounded-[8px] border border-solid border-transparent bg-white px-[22px] py-[12px] text-center text-[15.2px] font-semibold leading-[25px] text-[#4267d5]`}
          >
            Explore integration principles
          </Link>
          <Link
            href="#resources"
            className={`${fontPoppins} flex items-center justify-center rounded-[8px] border border-solid border-[rgba(255,255,255,0.55)] px-[22px] py-[12px] text-center text-[15.2px] font-semibold leading-[25px] text-white`}
          >
            Related resources
          </Link>
        </div>
      </div>
    </section>
  );
}
