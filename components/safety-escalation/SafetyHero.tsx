import Image from "next/image";
import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, inner, sectionPad } from "./ui";

export default function SafetyHero() {
  return (
    <section
      id="top"
      className={`relative isolate w-full overflow-hidden bg-[linear-gradient(136.59deg,#f6f9fc_0%,#ebe9fb_100%)] py-12 lg:h-[711px] lg:pb-0 lg:pt-[70px] ${sectionPad}`}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[-18px] -z-10 h-[729px] w-[1600px] -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          src="/safety-escalation/hero-background.webp"
          alt=""
          fill
          priority
          sizes="1600px"
          className="object-cover"
        />
      </div>

      <div
        className={`${inner} flex flex-col items-start gap-10 lg:h-[532px] lg:flex-row lg:items-center lg:gap-0`}
      >
        <div className="flex w-full flex-col items-start gap-[15.4px] lg:w-[790px] lg:shrink-0">
          <Eyebrow tone="hero">Labs &amp; Pharmacies / Safety &amp; escalation</Eyebrow>

          <h1
            className={`${fontPoppins} w-full bg-gradient-to-b from-white to-[#7657e8] bg-clip-text text-[40px] font-bold leading-[46px] tracking-[-0.8px] text-transparent lg:text-[64px] lg:leading-[60.93px] lg:tracking-[-1.088px]`}
          >
            <Copy
              text="Clear responsibility for safety-critical hand-offs."
              d={["Clear responsibility for", "safety-critical", "hand-offs."]}
            />
          </h1>

          <p className="w-full max-w-[646px] pt-[6.07px] text-[16px] font-normal leading-[26.4px] text-[#fff7e6]">
            <Copy
              text="Diagnostic results, prescription requests, and pharmacy-related messages may cross independent healthcare organizations. Safe coordination depends on knowing who sent information, whether it reached the intended recipient, who is responsible for reviewing it, and what happens when an issue remains unresolved. Zoiko Access is designed to support more accountable communication where locally authorized services and integrations exist."
              d={[
                "Diagnostic results, prescription requests, and pharmacy-related messages may",
                "cross independent healthcare organizations. Safe coordination depends on",
                "knowing who sent information, whether it reached the intended recipient, who is",
                "responsible for reviewing it, and what happens when an issue remains",
                "unresolved. Zoiko Access is designed to support more accountable",
                "communication where locally authorized services and integrations exist.",
              ]}
            />
          </p>

          <div className="flex w-full flex-wrap items-center gap-[11.99px] pt-[12.61px]">
            <Link
              href="#handoff-steps"
              className={`${fontPoppins} flex h-[51.08px] items-center rounded-[8px] border border-solid border-transparent bg-[#7657e8] px-[22px] text-[15.2px] font-semibold leading-[25px] text-white`}
            >
              Understand the escalation steps
            </Link>
            <Link
              href="/lab-imaging-integration"
              className={`${fontPoppins} flex h-[51.08px] items-center rounded-[8px] border border-solid border-[#dcd6f2] bg-white px-[22px] text-[15.2px] font-semibold leading-[25px] text-[#243b73]`}
            >
              Explore lab &amp; imaging integration
            </Link>
          </div>
        </div>

        <div
          className="relative h-[360px] w-full overflow-hidden rounded-b-[28px] rounded-tl-[200px] rounded-tr-[28px] bg-[linear-gradient(140.15deg,#4267d5_0%,#7657e8_100%)] lg:h-[532px] lg:w-[510px] lg:shrink-0"
          role="img"
          aria-label="Two colleagues reviewing documents together at a desk"
        >
          <FigmaImage
            src="/safety-escalation/hero-team.webp"
            box={{ left: -0.39, top: -6.77, width: 108.58, height: 155.64 }}
            sizes="(min-width: 1024px) 560px, 90vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
