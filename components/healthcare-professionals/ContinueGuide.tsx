import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

const guides = [
  {
    title: "Explore healthcare services →",
    description:
      "Understand service types without a recommendation or availability promise.",
    href: "/healthcare-services",
  },
  {
    title: "Care pathways explained →",
    description:
      "Learn how responsibilities, handoffs, requests, and confirmations differ.",
    href: "/care-pathways",
  },
  {
    title: "How referrals work →",
    description:
      "Read the local overview’s explanation of referral delivery and acceptance.",
    href: "/how-referrals-work",
  },
];

export default function ContinueGuide() {
  return (
    <section id="next-steps" className="w-full scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Pathways & helpful next steps"
          title="Continue with an educational guide."
        />

        <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="rounded-xl border border-[#E5E7EB] bg-white px-7 pb-8 pt-7 transition-colors hover:border-[#C9D3F2] hover:bg-[#F7F8FF]"
            >
              <h3 className="text-[20px] font-bold leading-7 tracking-[-0.03em] text-[#23327A]">
                {guide.title}
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-[#5E6B85]">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="relative mt-9 aspect-[1280/320] w-full overflow-hidden rounded-xl">
          <Image
            src="/healthcare-professionals/continue-guide.webp"
            alt="Two healthcare professionals reviewing information together"
            fill
            sizes="(min-width: 1440px) 1280px, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
