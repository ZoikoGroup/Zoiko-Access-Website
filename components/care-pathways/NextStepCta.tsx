import Link from "next/link";

const content = {
  badge: "Your next step",
  title: "Start with understanding the process.",
  description:
    "Explore service types or revisit the four-step model without beginning a clinical or transactional workflow.",
  buttons: {
    primary: {
      text: "Explore healthcare services →",
      href: "/healthcare-services",
    },
    secondary: {
      text: "How Zoiko Access works",
      href: "/how-it-works",
    },
  },
};

export default function NextStepCta() {
  return (
    <section className="w-full bg-gradient-to-br from-[#F4F2FD] via-[#EEEAFE] to-[#D9CCFF] py-20">
      <div className="mx-auto max-w-[1440px] px-6 text-center sm:px-10">
        <div className="mx-auto max-w-[920px]">
          <p className="mb-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase leading-4 tracking-wider text-[#6A44D4]">
            <span
              className="block h-1.5 w-1.5 rounded-full bg-[#6A44D4]"
              aria-hidden="true"
            />
            {content.badge}
          </p>

          <h2 className="text-[30px] font-bold leading-[1.2] tracking-[-0.04em] text-[#23327A] sm:text-[36px] sm:leading-10">
            {content.title}
          </h2>

          <p className="mt-6 text-[16px] leading-7 text-[#5E6B85]">
            {content.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={content.buttons.primary.href}
              className="inline-flex min-h-12 items-center rounded-md bg-[#4267D5] px-5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              {content.buttons.primary.text}
            </Link>
            <Link
              href={content.buttons.secondary.href}
              className="inline-flex min-h-12 items-center rounded-md border border-[#C9D3F2] bg-white px-5 text-[13px] font-semibold text-[#2F55C7] transition-colors hover:bg-[#F7F8FF]"
            >
              {content.buttons.secondary.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
