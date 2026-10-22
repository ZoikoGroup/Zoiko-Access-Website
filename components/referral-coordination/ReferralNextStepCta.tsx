"use client";

import Image from "next/image";
import Link from "next/link";

export default function ReferralNextStepCta() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#02125F",
      }}
    >
      {/* Background Photo exactly matching Figma */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        <Image
          src="/referral-coordination/cta-bg.png"
          alt="Care teams coordination"
          fill
          sizes="100vw"
          className="object-cover object-right md:object-center"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1306px] px-6 py-[96px] lg:px-0">
        <div className="max-w-[640px]">
          {/* Kick Badge */}
          <div className="mb-[13px] inline-flex items-center gap-[10px]">
            <span className="h-[2px] w-[28px] bg-[#CDBCFF]" aria-hidden="true" />
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "21.45px",
                letterSpacing: "0.03em",
                color: "#CDBCFF",
              }}
            >
              Your next step
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mb-[16px]"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(34px, 4vw, 48px)",
              lineHeight: "clamp(42px, 4.6vw, 56.64px)",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            Explore how care
            <br />
            teams coordinate the
            <br />
            next step
          </h2>

          {/* Subtitle */}
          <p
            className="mb-[32px]"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "29.7px",
              color: "#E6E9FF",
            }}
          >
            Read about care transitions and results handoffs next, to see where a
            <br className="hidden md:inline" />
            referral goes after it is accepted.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-[14px]">
            <Link
              href="/care-transitions"
              className="inline-flex items-center justify-center transition-opacity hover:opacity-95"
              style={{
                padding: "9.63px 26px 11.37px",
                borderRadius: "12px",
                backgroundColor: "#FFFFFF",
                border: "2px solid transparent",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: "24.75px",
                color: "#031974",
              }}
            >
              Explore related clinician topics
            </Link>
            <Link
              href="#referral-journey"
              className="inline-flex items-center justify-center transition-colors hover:bg-white/10"
              style={{
                padding: "9.63px 26px 11.37px",
                borderRadius: "12px",
                backgroundColor: "transparent",
                border: "2px solid rgba(255, 255, 255, 0.6)",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: "24.75px",
                color: "#FFFFFF",
              }}
            >
              Review the referral journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
