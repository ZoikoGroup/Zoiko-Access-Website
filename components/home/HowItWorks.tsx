import Image from "next/image";

const STEPS = [
  {
    title: "Choose your care location",
    text: "Provide context voluntarily. Location does not establish clinical eligibility or change patient identity.",
  },
  {
    title: "Explore qualified information",
    text: "Understand options and review the source, scope, and status of published information.",
  },
  {
    title: "Start an authorized next step",
    text: "Where supported, use a provider-specific process. A request is not a confirmed appointment.",
  },
  {
    title: "Follow confirmed updates",
    text: "Where available, follow progress from the responsible team through the authorized service.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EEEAFE] font-sans">
      <div
        className="pointer-events-none absolute -right-[10%] -top-[30%] h-[900px] w-[900px] bg-[radial-gradient(circle_at_center,#8F73FF99_0%,#EEEAFE_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:px-[60px] lg:py-[80px]">
        <div>
          <p className="inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#5B3FD1]">
            <span
              className="block h-2 w-2 rounded-full bg-[#7C5CE8]"
              aria-hidden="true"
            />
            How Zoiko Access works
          </p>

          <h2 className="mt-5 text-[36px] font-bold leading-[1.1] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
            One journey.
            <br />
            Four understandable steps.
          </h2>

          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.7] text-[#4B5563]">
            This homepage explains the model. Live directories, appointment
            requests, and progress updates require separately approved services.
          </p>

          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {STEPS.map((step) => (
              <li
                key={step.title}
                className="rounded-[24px] border border-[#E1E6F0] bg-white px-7 py-9"
              >
                <h3 className="text-[19px] font-semibold leading-snug tracking-[-0.02em] text-[#243B73]">
                  {step.title}
                </h3>
                <p className="mt-5 text-[13px] leading-[1.7] text-[#4B5563]">
                  {step.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[620px] overflow-hidden rounded-[32px] lg:max-w-none">
          <Image
            src="/home/4.png"
            alt="Isometric illustration of the four-step healthcare access journey"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
