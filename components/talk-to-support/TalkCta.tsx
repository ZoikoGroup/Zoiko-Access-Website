import Link from "next/link";
import Copy from "./Copy";
import SectionHeading from "./SectionHeading";

export default function TalkCta() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[linear-gradient(135deg,#241c59_0%,#4b3fb5_70%,#6a58d8_100%)] px-[19.5px] pb-[56px] pt-[54.86px] lg:px-[130px] lg:py-[96px]">
      <div
        className="pointer-events-none absolute -right-[120px] -top-[160px] -z-10 size-[420px] rounded-[210px] bg-[rgba(182,160,248,0.18)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-[120px] -left-[80px] -z-10 size-[260px] rounded-[130px] bg-[rgba(182,160,248,0.18)]"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-[44px] lg:min-h-[219.11px] lg:flex-row lg:justify-center lg:pb-[0.78px] min-[1400px]:h-[219.11px]">
        <div className="flex w-full flex-col items-start gap-[14.51px] pb-[16px] lg:min-w-px lg:flex-1 lg:gap-[20.67px]">
          <SectionHeading tone="light" mobileLines={3}>
            <Copy
              text="Find the right information. Keep the right owner involved."
              d={[
                "Find the right information.",
                "Keep the right owner",
                "involved.",
              ]}
              m={[
                "Find the right information.",
                "Keep the right owner",
                "involved.",
              ]}
            />
          </SectionHeading>
          <p className="w-full max-w-[686.38px] text-[16px] font-normal leading-[26.4px] text-[#dcd6ff]">
            <Copy
              text="General guidance remains available even when direct contact is not connected."
              d={[
                "General guidance remains available even when direct contact is not",
                "connected.",
              ]}
              m={[
                "General guidance remains available even",
                "when direct contact is not connected.",
              ]}
            />
          </p>
        </div>

        <div className="flex w-full flex-col items-start pt-[22px] lg:min-w-px lg:flex-1">
          <div className="flex w-full flex-col items-start gap-[12px] lg:h-[48px] lg:flex-row lg:flex-wrap">
            <Link
              href="#help-topics"
              className="flex min-h-[48px] w-full items-center justify-center rounded-[12px] border-2 border-solid border-white bg-white px-[18px] py-[12px] text-center text-[16px] font-semibold leading-[normal] text-[#241c59] lg:w-auto lg:self-stretch lg:justify-start lg:px-[24px] lg:py-0"
            >
              Explore help topics
            </Link>
            <Link
              href="/care-pathways"
              className="flex min-h-[48px] w-full items-center justify-center rounded-[12px] border-2 border-solid border-[rgba(255,255,255,0.7)] px-[18px] py-[12px] text-center text-[16px] font-semibold leading-[normal] text-white lg:w-auto lg:self-stretch lg:justify-start lg:px-[24px] lg:py-0"
            >
              Care pathways explained
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
