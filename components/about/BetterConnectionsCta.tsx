import Link from "next/link";
import { ArrowRight } from "lucide-react";

const content = {
  badge: "A healthcare ecosystem shaped around people",
  title: "Better connections begin with clearer pathways.",
  description:
    "Whether you are exploring options for yourself, supporting another person, delivering care or building healthcare services, Zoiko Access is being designed to make the next step easier to understand and more responsibly connected.",
  buttons: [
    {
      text: "Explore how it works",
      href: "#",
      primary: true,
    },
    {
      text: "Explore partnerships",
      href: "#",
      primary: false,
    },
    {
      text: "Check availability",
      href: "#",
      primary: false,
    },
  ],
  footerNote:
    "Service availability, actions, partner participation, and regulatory status vary by location and release. Clinical decisions remain with appropriately authorized care professionals and organizations.",
};

export default function BetterConnectionsCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F2EFFF] via-[#EEEAFE] to-[#D9CCFF] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 text-center sm:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E5DEFF] px-3.5 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5B3FD1]">
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
            {content.buttons.map((btn, index) =>
              btn.primary ? (
                <Link
                  key={index}
                  href={btn.href}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#4267D5] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(66,103,213,0.3)] transition-opacity hover:opacity-90"
                >
                  {btn.text}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ) : (
                <Link
                  key={index}
                  href={btn.href}
                  className="inline-flex items-center rounded-lg border border-[#C9D3F2] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#2F55C7] transition-colors hover:bg-[#F7F8FF]"
                >
                  {btn.text}
                </Link>
              ),
            )}
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
