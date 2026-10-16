import Link from "next/link";

const content = {
  title: "Understand your next step with clearer information.",
  description:
    "Explore the care-pathway model or review location guidance before considering any separately authorized service.",
  buttons: {
    primary: {
      text: "Explore care pathways →",
      href: "/care-pathways",
    },
    secondary: {
      text: "Locations & availability",
      href: "/locations-availability",
    },
  },
};

export default function ReferralsCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#251C5C] via-[#3E33A0] to-[#6A55D6] py-20">
      {/* Decorative circles */}
      <span
        className="pointer-events-none absolute -bottom-36 -left-20 h-72 w-72 rounded-full bg-white/10"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-white/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 text-center sm:px-10">
        <div className="mx-auto max-w-[920px]">
          <h2 className="mx-auto max-w-[480px] text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-white [font-family:var(--font-poppins)] sm:text-[36px] sm:leading-10">
            {content.title}
          </h2>

          <p className="mt-8 text-[16px] leading-7 text-[#DCD8F7]">
            {content.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={content.buttons.primary.href}
              className="inline-flex min-h-12 items-center rounded-md bg-white px-5 text-[13px] font-semibold text-[#211A5A] transition-opacity hover:opacity-90"
            >
              {content.buttons.primary.text}
            </Link>
            <Link
              href={content.buttons.secondary.href}
              className="inline-flex min-h-12 items-center rounded-md border border-white/50 px-5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              {content.buttons.secondary.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
