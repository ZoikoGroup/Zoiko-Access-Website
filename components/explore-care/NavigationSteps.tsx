import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stepsData = [
  {
    title: "Choose care location",
    description:
      "Provide context without implying eligibility, coverage, identity, or data residency.",
  },
  {
    title: "Explore approved information",
    description:
      "Understand service categories, sources, roles, and the scope of information.",
  },
  {
    title: "Start a permitted next step",
    description:
      "Where separately authorized, follow the appropriate route. Requests are not confirmations.",
  },
  {
    title: "Follow verified progress",
    description:
      "Where supported, the responsible organization reports status. Delivery does not equal clinical review.",
  },
];

const content = {
  badge: "How navigation is designed to work",
  title: "Four steps toward a more understandable journey.",
  button: {
    text: "Read the full guide",
    href: "#",
  },
  image: {
    src: "/explore/2.png",
    alt: "Four steps navigation illustration",
  },
};

export default function NavigationSteps() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F2EFFF] via-[#EEEAFE] to-[#D9CCFF] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header with Top Button */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
              <span
                className="block h-2 w-2 rounded-full bg-[#7657E8]"
                aria-hidden="true"
              />
              {content.badge}
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
              {content.title}
            </h2>
          </div>

          <div>
            <Link
              href={content.button.href}
              className="inline-flex items-center gap-2 rounded-xl border border-[#C9D3F2] bg-white px-5 py-3.5 text-[14px] font-semibold text-[#2F55C7] shadow-sm transition-colors hover:bg-[#F7F8FF]"
            >
              {content.button.text}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Content Grid (2x2 cards on left, Illustration card on right) */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-4">
          {/* Left Column - 4 Steps Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {stepsData.map((step, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_10px_30px_rgba(118,87,232,0.06)]"
              >
                <div>
                  <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#23327A]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#4B5563]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Illustration Card */}
          <div className="relative">
            <div className="relative h-[340px] w-full sm:h-[400px] lg:h-[420px]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
