import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, inner, sectionPad } from "./ui";

export default function PayersHero() {
  return (
    <section
      id="top"
      className={`relative isolate overflow-hidden bg-[linear-gradient(119.99deg,#16245a_0%,#243b73_45%,#3550b8_100%)] pb-12 pt-7 lg:pb-[96px] ${sectionPad}`}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_500px_at_85%_168px,rgba(118,87,232,0.45)_0%,rgba(118,87,232,0)_60%)]"
        aria-hidden="true"
      />
      <div className={`${inner} flex flex-col gap-12`}>
        <nav aria-label="Breadcrumb" className="text-[13px] leading-[20.8px] text-white/75">
          <Link href="/" className="text-white underline">
            Home
          </Link>{" "}
          / Payers &amp; Insurers
        </nav>

        <div className="grid items-center gap-10 lg:h-[647px] lg:grid-cols-[7fr_5fr] lg:gap-14">
          <div className="flex w-full flex-col items-start gap-4">
            <Eyebrow tone="light">Payers &amp; Insurers</Eyebrow>
            <h1
              className={`${fontPoppins} w-full text-[36px] font-semibold leading-[42px] tracking-[-0.72px] text-white lg:text-[52px] lg:leading-[58.24px] lg:tracking-[-1.04px]`}
            >
              <Copy
                text="Make healthcare administration easier to coordinate—"
                d={["Make healthcare", "administration easier to", "coordinate—"]}
              />
              <br className="hidden min-[1400px]:block" />
              <span className="text-[#b7a6ff]">
                <Copy
                  text="without blurring responsibility."
                  d={["without", "blurring responsibility."]}
                />
              </span>
            </h1>
            <p className="w-full max-w-[640px] text-[16px] leading-[26px] text-white/[0.88] min-[1400px]:max-w-none lg:text-[17px] lg:leading-[27.2px]">
              <Copy
                text="Zoiko Access is designed to help authorized healthcare and benefits organizations navigate eligibility information, administrative requests, member-facing pathways and accountable status handoffs where the required market, partner and security conditions are met. Payers remain responsible for plan rules and coverage decisions; care professionals remain responsible for clinical care."
                d={[
                  "Zoiko Access is designed to help authorized healthcare and benefits",
                  "organizations navigate eligibility information, administrative requests, member-",
                  "facing pathways and accountable status handoffs where the required market,",
                  "partner and security conditions are met. Payers remain responsible for plan",
                  "rules and coverage decisions; care professionals remain responsible for clinical",
                  "care.",
                ]}
              />
            </p>
            <div className="flex flex-wrap gap-3 pb-[13px] pt-[17px]">
              <Link
                href="/payers-insurers#capabilities"
                className="flex min-h-[46px] items-center justify-center rounded-[10px] border-2 border-solid border-transparent bg-[#7657e8] px-[22px] text-[15px] font-semibold leading-[24px] text-white"
              >
                Explore payer capabilities →
              </Link>
              <Link
                href="/payers-insurers/implementation"
                className="flex min-h-[46px] items-center justify-center rounded-[10px] border-2 border-solid border-white px-[22px] text-[15px] font-semibold leading-[24px] text-white"
              >
                See the implementation approach
              </Link>
            </div>
            <div className="flex w-full max-w-[640px] items-start gap-[10px] rounded-[10px] border border-solid border-white/[0.18] bg-white/[0.08] px-4 py-3 text-[13px] leading-[20.8px] text-white/[0.88] min-[1400px]:max-w-none lg:w-[640px]">
              <span aria-hidden="true">ⓘ</span>
              <p>
                <Copy
                  text="Capabilities and integrations vary by market and approved partner. Informational content does not mean a live connection is available."
                  d={[
                    "Capabilities and integrations vary by market and approved partner.",
                    "Informational content does not mean a live connection is available.",
                  ]}
                />
              </p>
            </div>
          </div>

          <div className="w-full rounded-[20px] border-[6px] border-solid border-white/[0.12] shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
            <div
              className="relative h-[260px] w-full overflow-hidden rounded-[14px] bg-[linear-gradient(135deg,#dcd3fb_0%,#c7d3f5_100%)] sm:h-[340px] lg:h-[396px]"
              role="img"
              aria-label="Healthcare administration team reviewing information together around a laptop"
            >
              <FigmaImage
                src="/payers-insurers/hero-team-laptop.webp"
                box={{ left: -9.67, width: 119.33 }}
                sizes="(min-width: 1024px) 560px, 90vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
