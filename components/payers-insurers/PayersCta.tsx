import Link from "next/link";
import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, inner, sectionPad, sectionY } from "./ui";

export default function PayersCta() {
  return (
    <section
      className={`w-full bg-[radial-gradient(900px_400px_at_50%_0%,rgba(118,87,232,0.5)_0%,rgba(118,87,232,0)_70%),linear-gradient(119.99deg,#16245a_0%,#2e3f9e_60%,#5a43c9_100%)] ${sectionY} ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-center pt-[6.91px] text-center`}>
        <Eyebrow tone="light" center>
          Your next step
        </Eyebrow>
        <h2
          className={`${fontPoppins} w-full pt-[13.68px] text-[28px] font-semibold leading-[34px] tracking-[-0.28px] text-white lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.4px]`}
        >
          Start with understanding.
        </h2>
        <p className="w-full max-w-[680px] min-[1400px]:max-w-none pb-[0.59px] pt-[15px] text-[16px] leading-[25.6px] text-white/85">
          <Copy
            text="Choose a payer capability to explore, or review what an implementation would require."
            d={["Choose a payer capability to explore, or review what an implementation would require."]}
          />
        </p>
        <div className="flex w-full flex-wrap justify-center gap-3 pt-[30px] pb-[7.4px]">
          <Link
            href="/payers-insurers#capabilities"
            className="flex min-h-[46px] items-center justify-center rounded-[10px] border-2 border-solid border-transparent bg-white px-[22px] text-[15px] font-semibold leading-[24px] text-[#243b73]"
          >
            Explore payer capabilities →
          </Link>
          <Link
            href="/implementation-approach"
            className="flex min-h-[46px] items-center justify-center rounded-[10px] border-2 border-solid border-white px-[22px] text-[15px] font-semibold leading-[24px] text-white"
          >
            See the implementation approach
          </Link>
        </div>
        <p className="w-full max-w-[680px] min-[1400px]:max-w-none text-[13px] leading-[20.8px] text-white/85">
          “Talk to our payer solutions team” will appear here only once a staffed inbound process is approved.
        </p>
      </div>
    </section>
  );
}
