import Image from "next/image";
import Eyebrow, { headingFont } from "./Eyebrow";

const steps = [
  {
    who: "Individual or caregiver",
    title: "Needs recognized",
    text: "Someone identifies that support at home may help.",
  },
  {
    who: "Coordinator or provider",
    title: "Authority verified",
    text: "Who can act, and on whose behalf, is confirmed.",
  },
  {
    who: "Local provider",
    title: "Local provider assessed",
    text: "A licensed provider reviews whether and how it can help.",
  },
  {
    who: "Responsible provider",
    title: "Support arranged",
    text: "The responsible provider arranges support under its own terms.",
  },
  {
    who: "Provider and individual",
    title: "Review & escalation",
    text: "Support is reviewed, and concerns go to the right owner.",
  },
];

export default function CoordinationLifecycle() {
  return (
    <section
      id="coordination-lifecycle"
      className="w-full scroll-mt-24 bg-[#F5F8FC] py-16 font-sans sm:py-20"
    >
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-start gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:px-24">
        <div>
          <Eyebrow>Home-care coordination lifecycle</Eyebrow>
          <h2
            className={`mt-3.5 text-3xl font-semibold leading-tight text-[#16245A] sm:text-4xl sm:leading-[48px] ${headingFont}`}
          >
            From need to review.
          </h2>
          <p className="mt-3.5 text-base leading-7 text-[#5B6478]">
            No schedule, service guarantee or assignment status is implied.
          </p>

          <ol className="mt-8">
            {steps.map((s, i) => (
              <li key={s.title} className="relative flex gap-6 pb-7">
                <div className="flex flex-col items-center">
                  <span
                    className="h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br from-[#7C5CFC] to-[#4F6BE8]"
                    aria-hidden="true"
                  />
                  <span
                    className={`mt-1 w-0 flex-1 border-l-2 border-dashed border-[#7C5CFC]/70 ${
                      i === steps.length - 1 ? "max-h-6" : ""
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <div className="pt-1">
                  <p className="text-xs font-medium text-[#7C5CFC]">{s.who}</p>
                  <h3
                    className={`mt-1 text-lg font-semibold text-[#16245A] ${headingFont}`}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#5B6478]">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative aspect-[530/640] w-full overflow-hidden rounded-3xl shadow-[0_20px_44px_rgba(22,36,90,0.16)] lg:mx-auto lg:max-w-[530px]">
          <Image
            src="/organizations-community-home-care/caregiver-family-member.webp"
            alt="Home-care provider supporting an older adult"
            fill
            sizes="(min-width: 1024px) 530px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
