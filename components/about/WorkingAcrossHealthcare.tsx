import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const content = {
  badge: "Working across healthcare",
  title: "With appropriate partners. With defined responsibilities.",
  paragraphs: [
    "Meaningful coordination depends on the people and institutions delivering healthcare every day. We are building Zoiko Access to support collaboration with healthcare organizations, clinical professionals, diagnostic and pharmacy networks, payers, community services, public bodies and technology integrators.",
    "Our partnership approach is based on defined responsibilities, suitable integration standards, secure access, transparent service status and market-specific review. Connecting systems is valuable only when the organizations involved can trust the authority, meaning and handling of the information being exchanged.",
  ],
  buttons: {
    primary: {
      text: "Explore partnership principles",
      href: "/become-partner",
    },
    secondary: {
      text: "Partners & Developers",
      href: "/become-partner",
    },
  },
  image: {
    src: "/about/12.png",
    alt: "Working across healthcare ecosystem illustration",
  },
};

export default function WorkingAcrossHealthcare() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#F2EFFF] via-[#EEEAFE] to-[#D9CCFF] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col">
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

            {content.paragraphs.map((text, index) => (
              <p
                key={index}
                className={`text-[16px] leading-[1.8] text-[#4B5563] sm:text-[17px] ${
                  index === 0 ? "mt-6" : "mt-4"
                }`}
              >
                {text}
              </p>
            ))}

            <div className="mt-9 flex flex-wrap items-center gap-4">
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
          </div>

          {/* Right Column - Illustration Card */}
          <div className="relative flex items-center justify-center sm:p-8">
            <div className="relative h-[360px] w-full sm:h-[420px] lg:h-[460px]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
