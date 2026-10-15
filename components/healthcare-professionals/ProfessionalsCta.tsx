import Link from "next/link";

const content = {
  title: "Understand your next step in care.",
  description:
    "Explore service types and referral concepts, while keeping clinical choice and professional authority with the responsible care team.",
  buttons: {
    primary: {
      text: "Explore healthcare services →",
      href: "/healthcare-services",
    },
    secondary: {
      text: "Learn how referrals work",
      href: "/how-referrals-work",
    },
  },
};

export default function ProfessionalsCta() {
  return (
    <section className="w-full bg-gradient-to-br from-[#F4F2FD] via-[#EEEAFE] to-[#D9CCFF] py-20">
      <div className="mx-auto max-w-[1440px] px-6 text-center sm:px-10">
        <div className="mx-auto max-w-[920px]">
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
