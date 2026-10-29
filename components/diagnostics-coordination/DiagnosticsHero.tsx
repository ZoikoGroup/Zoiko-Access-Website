import Image from "next/image";
import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, sectionPad } from "./ui";

export default function DiagnosticsHero() {
  return (
    <section
      id="top"
      className={`relative isolate w-full overflow-hidden bg-[radial-gradient(900px_330px_at_1152px_0px,rgba(106,79,224,1)_0%,rgba(106,79,224,0)_60%),linear-gradient(141.79deg,#243b73_0%,#3150b8_60%,#4267d5_100%)] py-12 lg:h-[620px] lg:py-[70px] ${sectionPad}`}
    >
      <Image
        src="/diagnostics-coordination/hero-background.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start gap-10 lg:h-[480px] lg:flex-row lg:justify-between lg:gap-0">
        <div className="flex w-full flex-col items-start gap-[15.4px] lg:w-[649px] lg:shrink-0">
          <Eyebrow tone="hero">Diagnostics Coordination</Eyebrow>

          <h1
            className={`${fontPoppins} w-full bg-gradient-to-b from-white to-[#7657e8] bg-clip-text text-[40px] font-bold leading-[46px] tracking-[-0.8px] text-transparent lg:text-[64px] lg:leading-[64px] lg:tracking-[-1.088px]`}
          >
            <Copy
              text="Understand how diagnostic steps connect."
              d={["Understand how", "diagnostic steps", "connect."]}
            />
          </h1>

          <p className="w-full max-w-[646px] pt-[6.6px] text-[16px] font-normal leading-[26.4px] text-[#dfe4ff]">
            Diagnostic care involves more than completing a test. Learn how an
            authorized order, an examination or collection, a source-issued
            report and a receiving team&apos;s review remain distinct
            responsibilities. From an authorized order to a completed service
            and a report handoff, each stage has its own owner, evidence and
            next action.
          </p>

          <div className="flex w-full flex-wrap items-center gap-[12px] pb-[10.6px] pt-[12.6px]">
            <Link
              href="#pathway"
              className={`${fontPoppins} flex h-[51.08px] items-center rounded-[8px] border border-solid border-transparent bg-[#7657e8] px-[22px] text-[15.2px] font-semibold leading-[25px] text-white`}
            >
              Explore the diagnostic journey
            </Link>
            <Link
              href="#integration"
              className={`${fontPoppins} flex h-[51.08px] items-center rounded-[8px] border border-solid border-transparent bg-white px-[22px] text-[15.2px] font-semibold leading-[25px] text-[#4267d5]`}
            >
              Understand integration boundaries
            </Link>
          </div>
        </div>

        <div
          className="relative h-[320px] w-full overflow-hidden rounded-b-[20px] rounded-tl-[150px] rounded-tr-[20px] bg-[linear-gradient(135deg,#4267d5_0%,#7657e8_100%)] lg:h-[480px] lg:w-[436px] lg:shrink-0"
          role="img"
          aria-label="Fireworks over a dark skyline, a stock photo of a diagnostic setting"
        >
          <FigmaImage
            src="/diagnostics-coordination/hero-fireworks.webp"
            box={{ left: -20.71, width: 141.42 }}
            sizes="(min-width: 1024px) 620px, 90vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
