import Image from "next/image";
import Link from "next/link";

const content = {
  breadcrumb: "CLINICIANS / CLINICAL RESPONSIBILITY",
  title: "Clear clinical responsibility at every handoff.",
  description:
    "Zoiko Access is designed to help authorized organizations coordinate healthcare-related steps. Decisions about diagnosis, treatment, interpretation and patient care remain with the responsible licensed professionals and organizations. What a system records as sent or received is not the same as a clinician accepting or reviewing a request.",
  buttons: [
    {
      text: "Understand handoff statuses",
      href: "#",
      variant: "primary",
    },
    {
      text: "Explore referral coordination",
      href: "#",
      variant: "outline",
    },
  ],
  rightImage: {
    src: "/cli/1.png",
    alt: "Medical clinician preparing for surgery",
  },
  handoffSteps: [
    { label: "Sender", active: true },
    { label: "Transport", active: true },
    { label: "Receiver", active: true },
    { label: "Clinician", active: true },
  ],
};

export default function ClinicalResponsibilityHero() {
  return (
    <section className="relative w-full overflow-hidden py-20 font-sans sm:py-28">
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/prof/bg.png"
          alt="Background pattern"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#7C3AED]">
              <span className="h-0.5 w-6 bg-[#7C3AED]" aria-hidden="true" />
              {content.breadcrumb}
            </div>

            {/* Title */}
            <h1 className="mt-4 text-[40px] font-bold leading-[1.1] tracking-[-0.03em] text-[#1E1B4B] sm:text-[48px] lg:text-[54px]">
              {content.title}
            </h1>

            {/* Description */}
            <p className="mt-6 text-[15px] leading-[1.7] text-[#475569] sm:text-[16px]">
              {content.description}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={content.buttons[0].href}
                className="inline-flex items-center justify-center rounded-xl bg-[#4F46E5] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(79,70,229,0.25)] transition-all hover:bg-[#4338CA] hover:shadow-[0_12px_24px_rgba(79,70,229,0.35)]"
              >
                {content.buttons[0].text}
              </Link>
              <Link
                href={content.buttons[1].href}
                className="inline-flex items-center justify-center rounded-xl border border-[#CBD5E1] bg-white/80 px-6 py-3.5 text-[14px] font-semibold text-[#1E1B4B] backdrop-blur-md transition-colors hover:bg-white"
              >
                {content.buttons[1].text}
              </Link>
            </div>
          </div>

          {/* Right Column - Image Card with Handoff Status Bar */}
          <div className="relative flex flex-col items-center">
            <div className="relative h-[380px] w-full overflow-hidden rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:h-[440px] lg:h-[480px]">
              <Image
                src={content.rightImage.src}
                alt={content.rightImage.alt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
              />

              {/* Floating Status Bar Overlay */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-md">
                <div className="grid grid-cols-4 gap-3 text-center">
                  {content.handoffSteps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="h-1.5 w-full rounded-full bg-[#334155]" />
                      <span className="mt-2 text-[11px] font-bold text-[#1E293B]">
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
