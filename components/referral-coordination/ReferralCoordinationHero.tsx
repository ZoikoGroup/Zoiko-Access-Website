"use client";

import Image from "next/image";
import Link from "next/link";

export default function ReferralCoordinationHero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F6F9FC 0%, #FFFFFF 100%)",
        height: "713px",
      }}
    >
      {/* 100% Full-Width Background Texture */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <Image
          src="/referral-coordination/hero-bg.png"
          alt="Referral coordination hero background texture"
          fill
          sizes="100vw"
          className="object-cover object-left-top"
          priority
        />
      </div>

      {/* Main Container positioned exactly at y: 93 with height: 524 */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1306px] items-start pt-[93px] px-6 lg:px-0">
        <div className="flex w-full items-start justify-between">
          {/* Left Text Column - Width sized to allow Figma's exact line breaks without premature wrapping */}
          <div className="w-full max-w-[700px] xl:max-w-[710px] pt-[7px] flex-shrink-0">
            {/* Kick Badge */}
            <div className="mb-[13px] inline-flex items-center gap-[11px]">
              <span className="h-[2px] w-[28px] bg-[#7B3FF2]" aria-hidden="true" />
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  lineHeight: "21.45px",
                  letterSpacing: "0.03em",
                  color: "#7B3FF2",
                }}
              >
                CLINICIANS / CLINICAL COORDINATION
              </span>
            </div>

            {/* H1 Heading - Exactly matching Figma's 2 lines */}
            <h1
              className="mb-[16px] bg-clip-text text-transparent"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(38px, 4.3vw, 64px)",
                lineHeight: "clamp(46px, 4.7vw, 66px)",
                letterSpacing: "-0.0175em",
                backgroundImage: "linear-gradient(180deg, #031974 0%, #4267D5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <span className="inline md:whitespace-nowrap">Referral coordination,</span>
              <br />
              explained
            </h1>

            {/* Lead Description matching Figma's exact 6-line breaks */}
            <p
              className="mb-[32px] text-[#273444]"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "18.5px",
                lineHeight: "30.53px",
              }}
            >
              <span className="inline md:whitespace-nowrap">
                A healthcare referral connects a referring professional or organization with
              </span>
              <br />
              <span className="inline md:whitespace-nowrap">
                a receiving service for evaluation or another authorized next step.
              </span>
              <br />
              <span className="inline md:whitespace-nowrap">
                Creating or sending a referral does not mean it has been accepted,
              </span>
              <br />
              <span className="inline md:whitespace-nowrap">
                reviewed by a clinician, or converted into an appointment. Each step
              </span>
              <br />
              <span className="inline md:whitespace-nowrap">
                depends on the responsible organization, local processes, and verified
              </span>
              <br />
              <span>communication.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-[14px]">
              <Link
                href="#referral-journey"
                className="inline-flex items-center justify-center transition-opacity hover:opacity-95"
                style={{
                  padding: "9.62px 26px 11.38px",
                  borderRadius: "12px",
                  backgroundColor: "#4267D5",
                  border: "2px solid transparent",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  lineHeight: "24.75px",
                  color: "#FFFFFF",
                }}
              >
                See the referral journey
              </Link>
              <Link
                href="/care-transitions"
                className="inline-flex items-center justify-center transition-colors hover:bg-slate-50"
                style={{
                  padding: "9.62px 26px 11.38px",
                  borderRadius: "12px",
                  backgroundColor: "transparent",
                  border: "1px solid #031974",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  lineHeight: "24.75px",
                  color: "#031974",
                }}
              >
                Explore care transitions
              </Link>
            </div>
          </div>

          {/* Right Image Column - Sized to complement 700px left text column */}
          <div className="relative hidden lg:block h-[524px] w-[560px] xl:w-[590px] flex-shrink-0">
            <div className="relative h-full w-full">
              <Image
                src="/referral-coordination/div-art.png"
                alt="Healthcare clinicians coordinating care referral with schematic journey"
                width={744}
                height={644}
                className="absolute -top-[30px] -right-[20px] w-[700px] xl:w-[744px] max-w-none h-[600px] xl:h-[644px] object-contain pointer-events-none select-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
