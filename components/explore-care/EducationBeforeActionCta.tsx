import Link from "next/link";
import { ArrowRight } from "lucide-react";

const content = {
  badge: "Education before action",
  title: "Start with a clearer understanding.",
  description:
    "Explore the four stages of healthcare navigation, the limits of each step, and who remains responsible for care.",
  buttons: {
    primary: {
      text: "Learn how Zoiko Access works",
      href: "/how-it-works",
    },
    secondary: {
      text: "For healthcare organizations",
      href: "/hospitals-clinics",
    },
  },
  footerNote:
    "Informational local preview - No directory, booking, referral submission, or sign-in.",
};

export default function EducationBeforeActionCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F2EFFF] via-[#EEEAFE] to-[#D9CCFF] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 text-center sm:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5B3FD1]">
            <span
              className="block h-2 w-2 rounded-full bg-[#7C5CE8]"
              aria-hidden="true"
            />
            {content.badge}
          </div>

          {/* Title */}
          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
            {content.title}
          </h2>

          {/* Description */}
          <p className="mt-6 text-[16px] leading-[1.8] text-[#4B5563] sm:text-[17px]">
            {content.description}
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={content.buttons.primary.href}
              className="inline-flex items-center gap-2 rounded-lg bg-[#4267D5] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(66,103,213,0.3)] transition-opacity hover:opacity-90"
            >
              {content.buttons.primary.text}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href={content.buttons.secondary.href}
              className="inline-flex items-center rounded-lg border border-[#C9D3F2] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#2F55C7] transition-colors hover:bg-[#F7F8FF]"
            >
              {content.buttons.secondary.text}
            </Link>
          </div>

          {/* Footer Note */}
          <p className="mt-12 text-[13px] leading-[1.6] text-[#6B7280]">
            {content.footerNote}
          </p>
        </div>
      </div>
    </section>
  );
}
