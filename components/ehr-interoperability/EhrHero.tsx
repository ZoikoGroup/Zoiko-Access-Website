import Image from "next/image";
import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow } from "./ui";

export default function EhrHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#020a40] px-4 py-12 sm:px-6 lg:h-[705px] lg:p-0">
      <div
        className="pointer-events-none absolute -right-[120px] -top-[120px] -z-10 size-[520px] rounded-[260px] bg-[radial-gradient(circle_at_center,rgba(123,63,242,0.667)_0%,rgba(123,63,242,0)_65%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[-238px] top-0 -z-10 hidden h-[869px] w-[1738px] overflow-hidden lg:block"
        aria-hidden="true"
      >
        <FigmaImage
          src="/ehr-interoperability/hero-bg.webp"
          box={{ left: 1.99, top: -17.44 }}
          sizes="1738px"
          priority
        />
      </div>
      <div
        className="pointer-events-none absolute left-[374px] top-[-219px] -z-10 hidden h-[1238px] w-[1486px] items-center justify-center lg:flex"
        aria-hidden="true"
      >
        <div className="relative h-[1026px] w-[1330px] shrink-0 rotate-[-9.83deg]">
          <Image
            src="/ehr-interoperability/hero-curve.svg"
            alt=""
            fill
            sizes="1330px"
            className="object-fill"
          />
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start gap-10 lg:absolute lg:inset-x-0 lg:top-[98px] lg:h-[509px] lg:max-w-[1440px] lg:flex-row lg:gap-0 lg:px-12">
        <div className="flex w-full flex-col items-start gap-[14px] lg:min-w-px lg:flex-1">
          <Eyebrow className="text-[#7b3ff2]">
            HOSPITALS &amp; CLINICS / TECHNOLOGY &amp; ADOPTION
          </Eyebrow>

          <h1
            className={`${fontPoppins} w-full bg-gradient-to-b from-[#18238f] to-[#6847f2] bg-clip-text text-[40px] font-bold leading-[46px] tracking-[-1.2px] text-transparent lg:text-[64px] lg:leading-[69px]`}
          >
            <Copy
              text="EHR interoperability with clear clinical boundaries."
              d={[
                "EHR interoperability",
                "with clear clinical",
                "boundaries.",
              ]}
            />
          </h1>

          <p className="w-full max-w-[640px] pt-[3.22px] text-[16px] font-normal leading-[27px] text-black lg:text-[18px] lg:leading-[29.7px]">
            <Copy
              text="Zoiko Access is designed to help authorized healthcare organizations coordinate defined steps between independent systems. Participating hospitals and clinics remain responsible for their own records, clinical reviews, care decisions, and local procedures. Integrations depend on partner participation, technical validation, privacy controls, and market approval."
              d={[
                "Zoiko Access is designed to help authorized healthcare organizations",
                "coordinate defined steps between independent systems. Participating",
                "hospitals and clinics remain responsible for their own records, clinical",
                "reviews, care decisions, and local procedures. Integrations depend on",
                "partner participation, technical validation, privacy controls, and market",
                "approval.",
              ]}
            />
          </p>

          <div className="flex w-full flex-wrap items-start gap-[12px] pt-[8px]">
            <Link
              href="#architecture"
              className={`${fontPoppins} flex min-h-[48px] items-center rounded-full border-2 border-solid border-transparent bg-[#6144ea] px-[24px] pb-[10.38px] pt-[8.62px] text-[15px] font-semibold leading-[24.75px] text-white`}
            >
              Understand the approach
            </Link>
            <Link
              href="#readiness"
              className={`${fontPoppins} flex min-h-[48px] items-center rounded-full border border-solid border-[#241c59] px-[24px] pb-[10.38px] pt-[8.62px] text-[15px] font-semibold leading-[24.75px] text-[#241c59]`}
            >
              Review adoption requirements
            </Link>
          </div>
        </div>

        <div
          className="relative h-[320px] w-full shrink-0 overflow-hidden rounded-[26px] border border-solid border-[rgba(255,255,255,0.28)] bg-[rgba(255,255,255,0.08)] lg:h-[509px] lg:w-[517px]"
          role="img"
          aria-label="A woman standing in a server-room corridor, working on a laptop"
        >
          <FigmaImage
            src="/ehr-interoperability/hero-diagram.webp"
            box={{ left: -56.5, top: -3.17, width: 156.5, height: 111.49 }}
            sizes="(min-width: 1024px) 810px, 90vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
