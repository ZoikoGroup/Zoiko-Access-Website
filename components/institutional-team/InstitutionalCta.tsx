import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Title, sectionPad } from "./ui";

export default function InstitutionalCta() {
  return (
    <section
      className={`relative isolate w-full overflow-hidden bg-[linear-gradient(134.96deg,#182ba9_0%,#08176d_100%)] py-14 lg:min-h-[446.2px] lg:bg-[#08176d] lg:pb-[70px] lg:pt-[96px] ${sectionPad}`}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-25 lg:hidden"
        aria-hidden="true"
      >
        <FigmaImage
          src="/institutional-team/cta-colleagues-mobile.webp"
          box={{ top: -3.36, height: 106.71 }}
          sizes="100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute left-[-40px] top-0 -z-20 hidden h-[837px] w-[1489px] -scale-x-100 lg:block"
        aria-hidden="true"
      >
        <FigmaImage
          src="/institutional-team/cta-clinic-visit.webp"
          sizes="1489px"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-[-0.11px_0_-34.81px_0] -z-10 hidden bg-[linear-gradient(136.68deg,rgba(27,47,181,0.94)_0%,rgba(2,18,95,0.56)_100%)] lg:block"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-[9.2px] lg:gap-[10px] lg:px-[0px]">
        <Eyebrow tone="light">Your next step</Eyebrow>
        <Title tone="light">
          <Copy
            text="Start with the capabilities."
            m={["Start with the", "capabilities."]}
          />
        </Title>
        <p className="w-full max-w-[666px] pt-[4.39px] text-[16px] font-normal leading-[26.4px] text-[#e6e1ff] lg:pt-[9.19px]">
          <Copy
            text="When an institutional contact service is operating for your location, this page will say so and show a verified route. Until then, the information below is the way to explore."
            d={[
              "When an institutional contact service is operating for your location, this page will say so",
              "and show a verified route. Until then, the information below is the way to explore.",
            ]}
            m={[
              "When an institutional contact service is",
              "operating for your location, this page will say",
              "so and show a verified route. Until then, the",
              "information below is the way to explore.",
            ]}
          />
        </p>
        <p className="w-full max-w-[666px] pt-[6.8px] text-[16px] font-normal leading-[26.4px] text-[#e6e1ff] lg:pt-[6px]">
          <Copy
            text="Please do not send patient or health information through any commercial inquiry."
            m={[
              "Please do not send patient or health",
              "information through any commercial inquiry.",
            ]}
          />
        </p>
        <div className="flex w-full pt-[14.8px] lg:pt-[14px]">
          <Link
            href="#capabilities"
            className="flex min-h-[48px] items-center rounded-full border-2 border-solid border-white bg-white px-[26px] text-[16px] font-semibold leading-[normal] text-[#08176d]"
          >
            Explore institutional capabilities
          </Link>
        </div>
      </div>
    </section>
  );
}
