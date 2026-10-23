"use client";

import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "Hospital",
    subtext: "Discharge",
    photo: "/care-transitions/d89ea9e3_photo-1666214280557-f1b5022eb634.png",
    alt: "Hospital discharge clinician reviewing scans",
  },
  {
    title: "Specialist",
    subtext: "Handoff",
    photo: "/care-transitions/12f03a4b_photo-1576091160550-2173dba999ef.png",
    alt: "Specialist handoff physician with digital tablet",
  },
  {
    title: "Diagnostics",
    subtext: "Review",
    photo: "/care-transitions/1105a14d_photo-1579684385127-1ef15d508118.png",
    alt: "Diagnostics laboratory equipment and scanner",
  },
  {
    title: "Primary care",
    subtext: "Follow-up",
    photo: "/care-transitions/989ec36a_photo-1551601651-2a8555f1a136.png",
    alt: "Primary care team consultation",
  },
  {
    title: "Home and community",
    subtext: "Support",
    photo: "/care-transitions/7ec66c54_photo-1511895426328-dc8714191300.png",
    alt: "Home and community care support",
  },
];

export default function CareTransitionsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f0f0f1] pt-[99px]">
      {/* Background Graphic Texture */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[736px] w-[1473px] -translate-x-1/2 select-none">
        <Image
          src="/care-transitions/hero-bg.png"
          alt="Care transitions hero background texture"
          fill
          sizes="(max-width: 1473px) 100vw, 1473px"
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1300px] px-4 md:px-0">
        {/* Main Hero Top Content */}
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start lg:gap-6">
          {/* Left Text Column */}
          <div className="w-full max-w-[788px]">
            {/* Pill Badge */}
            <div className="mb-[16px] inline-flex items-center gap-[10px]">
              <span className="h-[2px] w-[28px] bg-[#7b3ff2]" aria-hidden="true" />
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  lineHeight: "21.45px",
                  letterSpacing: "0.39px",
                  color: "#7b3ff2",
                }}
              >
                CLINICIANS / CLINICAL COORDINATION
              </span>
            </div>

            {/* H1 Heading with Figma's Exact Linear Gradient */}
            <h1
              className="mb-[20px] bg-clip-text text-transparent"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(38px, 4.8vw, 64px)",
                lineHeight: "clamp(46px, 5.8vw, 84.24px)",
                letterSpacing: "-2.73px",
                backgroundImage: "linear-gradient(180deg, #031974 0%, #4267d5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Clearer care transitions.
              <br />
              Accountable next steps.
            </h1>

            {/* Lead Description */}
            <p
              className="mb-[36px] max-w-[677px] text-[#273444]"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "18.5px",
                lineHeight: "30.53px",
                letterSpacing: "0px",
              }}
            >
              A care transition can involve several teams, records and decisions. Zoiko
              <br className="hidden md:inline" />
              Access is designed to help authorized participants understand which steps
              <br className="hidden md:inline" />
              have been requested, acknowledged, clinically accepted and completed,
              <br className="hidden md:inline" />
              without transferring clinical responsibility by assumption.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-[14px]">
              <Link
                href="#transition-journey"
                className="inline-flex items-center justify-center rounded-full bg-[#4267d5] px-[30px] py-[16px] text-center text-white transition-all hover:bg-[#3556ba] shadow-[0_4px_16px_rgba(66,103,213,0.32)]"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  lineHeight: "24.75px",
                }}
              >
                See how transition coordination works
              </Link>
              <Link
                href="/how-referrals-work"
                className="inline-flex items-center justify-center rounded-full border-[1.5px] border-[#031974] bg-transparent px-[30px] py-[16px] text-center text-[#031974] transition-all hover:bg-white/80"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  lineHeight: "24.75px",
                }}
              >
                Explore referral coordination
              </Link>
            </div>
          </div>

          {/* Right Collage Column */}
          <div className="relative flex w-full max-w-[483px] items-center justify-center lg:justify-end">
            <div className="relative h-[480px] w-[483px]">
              <Image
                src="/care-transitions/hero-collage.png"
                alt="Illustrative collage of three care settings connected by a dotted handoff path"
                fill
                sizes="(max-width: 768px) 100vw, 483px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Timeline Track Card */}
        <div className="mt-[50px] w-full rounded-t-[36px] border border-[#d9d3f5] bg-white px-[20px] pb-[34px] pt-[30px] shadow-[0_4px_30px_rgba(3,25,116,0.04)] md:px-[28px]">
          <h2
            className="mb-[26px] text-center text-[#4d587e]"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "19.44px",
            }}
          >
            Where care transitions can happen, in a conceptual example
          </h2>

          <div className="relative">
            {/* Horizontal Dashed Connecting Track Line */}
            <div
              className="absolute left-[8%] right-[8%] top-[47px] hidden border-t-[2px] border-dashed border-[#ded3ff] lg:block"
              aria-hidden="true"
            />

            {/* 5 Step Items with Circular Photos */}
            <ol className="relative z-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
              {steps.map((step, idx) => (
                <li
                  key={idx}
                  className="flex flex-col items-center px-2 text-center"
                >
                  {/* Circular Photo Container */}
                  <div className="relative mb-[12px] flex h-[94px] w-[94px] items-center justify-center rounded-full border-[5px] border-white bg-white shadow-[0_8px_24px_rgba(123,63,242,0.12)]">
                    <div className="relative h-[84px] w-[84px] overflow-hidden rounded-full">
                      <Image
                        src={step.photo}
                        alt={step.alt}
                        fill
                        sizes="84px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <span
                    className="block text-[#031974]"
                    style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontWeight: 700,
                      fontSize: "17px",
                      lineHeight: "28px",
                    }}
                  >
                    {step.title}
                  </span>

                  {/* Subtext */}
                  <span
                    className="block text-[#4d587e]"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 400,
                      fontSize: "13px",
                      lineHeight: "21.45px",
                    }}
                  >
                    {step.subtext}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
