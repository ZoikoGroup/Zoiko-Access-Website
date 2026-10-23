import Image from "next/image";
import SectionHeading from "./SectionHeading";

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
    <section className="relative w-full overflow-hidden bg-[#EEEAFE]">
      <div
        className="pointer-events-none absolute -right-[10%] -top-[30%] h-[900px] w-[900px] bg-[radial-gradient(circle_at_center,#8F73FF99_0%,#EEEAFE_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[minmax(0,648fr)_minmax(0,553fr)] lg:gap-x-[119px] lg:px-[60px] lg:py-20">
        <div>
          <SectionHeading
            badge="How Zoiko Access works"
            title={
              <>
                One journey.
                <br />
                Four understandable steps.
              </>
            }
            description="This homepage explains the model. Live directories, appointment requests, and progress updates require separately approved services."
            className="max-w-[480px] [&>p:last-child]:text-[14px] [&>p:last-child]:leading-[23px]"
          />

          <ul className="mt-14 grid grid-cols-1 gap-[25px] sm:grid-cols-2">
            {STEPS.map((step) => (
              <li
                key={step.title}
                className="rounded-2xl border border-[#E1E6F0] bg-white px-6 pb-9 pt-7"
              >
                <h3 className="text-[18px] font-bold leading-snug tracking-[-0.01em] text-[#243B73]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[13px] leading-[22px] text-[#526174]">
                  {step.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto aspect-[553/604] w-full max-w-[553px] overflow-hidden rounded-3xl bg-white">
          <Image
            src="/home/how-it-works.webp"
            alt="Isometric illustration of the four-step healthcare access journey"
            fill
            sizes="(min-width: 1024px) 553px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
