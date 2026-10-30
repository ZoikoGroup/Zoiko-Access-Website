import Link from "next/link";
import { Bell } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function NotListed() {
  return (
    <section className="w-full bg-gradient-to-r from-[#F6F3FF] via-[#E6DFFE] to-[#D3C8FD] py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,735fr)_minmax(0,470fr)] lg:gap-x-[65px] lg:px-[70px]">
        <div>
          <SectionHeading
            badge="If your location is not listed"
            title={
              <>
                Not seeing services for your
                <br className="hidden sm:block" /> care location?
              </>
            }
            description="The requested service may not yet be available or authorized through Zoiko Access in that location. You can still learn about healthcare navigation and use applicable local care channels."
            className="lg:max-w-[540px]"
          />

          <div className="mt-4 flex items-start gap-4 rounded-2xl bg-white px-5 py-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E4DEFC] text-[#8B78EE]">
              <Bell className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="max-w-[450px] text-[16px] leading-[26px] text-[#211A5A]">
              <strong>
                Do not treat this website as an urgent-care or emergency
                service.
              </strong>{" "}
              Use the emergency services appropriate to your location.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/how-it-works"
              className="inline-flex min-h-12 items-center rounded-xl bg-[#8B78EE] px-6 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Learn how it works
            </Link>
            <Link
              href="/talk-to-support"
              className="inline-flex min-h-12 items-center rounded-xl bg-white px-6 text-[16px] font-semibold text-[#8B78EE] transition-colors hover:bg-[#F7F5FF]"
            >
              Talk to support (where published)
            </Link>
          </div>
        </div>

        <svg
          viewBox="0 0 470 360"
          className="mx-auto w-full max-w-[470px]"
          role="img"
          aria-label="Signpost pointing to learn how it works, local care channels and talk to support"
        >
          <ellipse cx="235" cy="170" rx="235" ry="170" fill="#FFFFFF" fillOpacity="0.35" />
          <circle cx="430" cy="22" r="9" fill="#A592F5" />
          <circle cx="23" cy="308" r="7" fill="#8B7CF0" />
          <ellipse cx="236" cy="322" rx="62" ry="12" fill="#211A5A" opacity="0.12" />
          <rect x="226" y="35" width="18" height="290" rx="9" fill="#211A5A" />

          <path d="M56 61h245l35 34-35 34H56z" fill="#5A45C8" />
          <text x="85" y="102" fontSize="18" fontWeight="700" fill="#FFFFFF" style={{ fontFamily: "var(--font-sora)" }}>
            Learn how it works
          </text>

          <path d="M437 151H209l-35 34 35 34h228z" fill="#FFFFFF" />
          <text x="225" y="192" fontSize="18" fontWeight="700" fill="#211A5A" style={{ fontFamily: "var(--font-sora)" }}>
            Local care channels
          </text>

          <path d="M56 241h238l35 34-35 34H56z" fill="#8B78EE" />
          <text x="85" y="282" fontSize="18" fontWeight="700" fill="#FFFFFF" style={{ fontFamily: "var(--font-sora)" }}>
            Talk to support
          </text>
        </svg>
      </div>
    </section>
  );
}
