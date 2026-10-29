import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import FigmaImage from "./FigmaImage";
import Copy from "./Copy";
import Kicker from "./Kicker";
import { fontPoppins } from "./fonts";

const cardShadow = "shadow-[0px_22px_50px_0px_rgba(27,23,80,0.28)]";

type TiltedCardProps = {
  /** Frame of the collage slot, in px: left, top, width, height. */
  slot: [number, number, number, number];
  /** Size of the tilted card, in px. */
  size: [number, number];
  transform: string;
  gradient: string;
  children: ReactNode;
};

/** A white-bordered photo card that is rotated and skewed inside its slot. */
function TiltedCard({
  slot,
  size,
  transform,
  gradient,
  children,
}: TiltedCardProps) {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{
        left: slot[0],
        top: slot[1],
        width: slot[2],
        height: slot[3],
      }}
    >
      <div
        className={`relative shrink-0 overflow-clip rounded-[18px] border-[6px] border-solid border-white ${cardShadow}`}
        style={{
          width: size[0],
          height: size[1],
          transform,
          backgroundImage: gradient,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function OnboardingHero() {
  return (
    <section
      id="top"
      className="relative isolate w-full overflow-hidden bg-[image:radial-gradient(ellipse_34%_30.3%_at_90%_30%,rgba(213,211,252,1)_0%,rgba(213,211,252,0)_100%),linear-gradient(180deg,#ffffff_0%,#efebfe_100%)] px-4 py-12 sm:px-6 lg:h-[663px] lg:p-0"
    >
      <div className="pointer-events-none absolute left-[-122px] top-[-67px] -z-10 hidden h-[781px] w-[1562px] lg:block">
        <Image
          src="/enterprise-onboarding/hero-bg.webp"
          alt=""
          fill
          sizes="1562px"
          className="select-none object-cover"
        />
      </div>
      <div className="pointer-events-none absolute left-[320px] top-[-145px] -z-10 hidden h-[1246px] w-[1538px] lg:block">
        <Image
          src="/enterprise-onboarding/hero-curve.svg"
          alt=""
          fill
          sizes="1538px"
          className="object-fill"
        />
      </div>

      <div className="mx-auto flex w-full max-w-[1344px] items-start lg:absolute lg:inset-x-0 lg:top-[58px] lg:h-[578px] lg:max-w-[1440px] lg:px-12">
        <div className="flex w-full flex-col items-start gap-[8.9px] lg:w-[711px] lg:shrink-0">
          <Kicker className="pt-[13.1px]">
            Hospitals &amp; Clinics / Technology &amp; Adoption
          </Kicker>

          <h1
            className={`${fontPoppins} w-full bg-gradient-to-b from-[#112086] to-[#6948f4] bg-clip-text text-[40px] font-bold leading-[44px] tracking-[-1.48px] text-transparent lg:text-[64px] lg:leading-[66.3px]`}
          >
            <Copy
              text="A clearer path to evaluating institutional participation."
              d={[
                "A clearer path to",
                "evaluating",
                "institutional",
                "participation.",
              ]}
            />
          </h1>

          <p className="w-full max-w-[732.55px] pt-[20.69px] text-[17.6px] font-normal leading-[29px] text-[#575387]">
            <Copy
              text="Enterprise onboarding describes the assessments, agreements, technical preparation, clinical safeguards and operational readiness that may be required before a hospital or clinic network can use supported Zoiko Access coordination services."
              d={[
                "Enterprise onboarding describes the assessments, agreements,",
                "technical preparation, clinical safeguards and operational readiness",
                "that may be required before a hospital or clinic network can use",
                "supported Zoiko Access coordination services.",
              ]}
            />
          </p>

          <div className="flex w-full flex-wrap items-center gap-[12px] pt-[15.1px]">
            <Link
              href="#readiness"
              className="flex h-[48px] min-h-[48px] items-center rounded-full border-2 border-solid border-[#6d4fe6] bg-[#6948f4] px-[26px] text-[16px] font-semibold leading-[normal] text-white"
            >
              Understand onboarding requirements
            </Link>
            <Link
              href="#scope"
              className="flex h-[48px] min-h-[48px] items-center rounded-full border border-solid border-[#1b1750] bg-white px-[26px] text-[16px] font-semibold leading-[normal] text-[#1b1750]"
            >
              Explore EHR interoperability
            </Link>
          </div>
        </div>

        <div className="relative hidden h-[578px] w-[599px] shrink-0 lg:block">
          <TiltedCard
            slot={[19, 49, 270.02, 308.87]}
            size={[252.6, 289.9]}
            transform="rotate(-4.44deg) skewX(-0.84deg)"
            gradient="linear-gradient(132.05deg, #8e7bef 0%, #08176d 100%)"
          >
            <div
              className="absolute flex items-center justify-center"
              style={{ left: -69.03, top: -12.26, width: 430.44, height: 293.05 }}
            >
              <div
                className="relative shrink-0"
                style={{
                  width: 429,
                  height: 286,
                  transform: "rotate(-0.94deg) skewX(-0.66deg)",
                }}
              >
                <Image
                  src="/enterprise-onboarding/hero-collage-chart.webp"
                  alt="A hospital operations leader presenting a chart on a tablet"
                  fill
                  sizes="430px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </TiltedCard>

          <TiltedCard
            slot={[306.47, 45, 240.58, 227.56]}
            size={[228.4, 209.9]}
            transform="rotate(4.54deg) skewX(1.01deg)"
            gradient="linear-gradient(131.1deg, #8e7bef 0%, #08176d 100%)"
          >
            <div
              className="absolute"
              style={{
                left: 0,
                top: 1,
                width: 308.13,
                height: 204.35,
              }}
            >
              <div
                className="relative"
                style={{
                  width: 306,
                  height: 204,
                  transform: "rotate(0.06deg) skewX(0.66deg)",
                }}
              >
                <Image
                  src="/enterprise-onboarding/hero-collage-writing.webp"
                  alt="Colleagues reviewing a plan together"
                  fill
                  sizes="306px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </TiltedCard>

          <TiltedCard
            slot={[212.19, 276.59, 289.7, 234.39]}
            size={[278.7, 220]}
            transform="rotate(-3.02deg) skewX(-0.04deg)"
            gradient="linear-gradient(134.46deg, #8e7bef 0%, #08176d 100%)"
          >
            <div className="absolute inset-0 overflow-hidden">
              <FigmaImage
                src="/enterprise-onboarding/hero-collage-phone.webp"
                alt="A clinic network team member checking a phone"
                box={{ left: -8.04, width: 116.09 }}
                sizes="310px"
                priority
              />
            </div>
          </TiltedCard>
        </div>
      </div>
    </section>
  );
}
