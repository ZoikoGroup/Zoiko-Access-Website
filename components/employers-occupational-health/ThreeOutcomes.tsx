import Image from "next/image";
import Link from "next/link";
import Eyebrow, { headingFont } from "@/components/community-home-care/Eyebrow";

const IMG = "/employers-occupational-health";

const outcomes = [
  {
    image: `${IMG}/employees-discussing-benefits.webp`,
    alt: "Two colleagues celebrating at a meeting table",
    title: "Workplace program navigation",
    text: "Designed to help employees find and understand the benefits and services their workplace program supports.",
    audience: "Employees and HR / benefits teams",
    boundary: "Navigation only — not a clinical service",
    context: { label: "Organizations overview", href: "/organisation-overview" },
  },
  {
    image: `${IMG}/eligibility-rules-screen.webp`,
    alt: "Laptop showing a dashboard of program rules",
    title: "Authorized eligibility",
    text: "Designed to reflect who a program covers, based on verified program rules — not on assumptions.",
    audience: "Program administrators and employees",
    boundary: "Not a coverage guarantee; terms are verified by authoritative programs",
    context: { label: "Eligibility & geography", href: "#eligibility-geography" },
  },
  {
    image: `${IMG}/clinician-receiving-handoff.webp`,
    alt: "Clinician reviewing a document with a patient",
    title: "Accountable handoff",
    text: "Designed to pass employees to qualified professionals, with a clear owner for each next step.",
    audience: "Employees and licensed providers",
    boundary: "Clinical decisions stay with qualified professionals",
    context: {
      label: "Occupational-health accountability",
      href: "#oh-accountability",
    },
  },
];

export default function ThreeOutcomes() {
  return (
    <section
      id="program-considerations"
      className="w-full scroll-mt-24 bg-white pb-20 pt-16 font-sans lg:pt-[130px]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <Eyebrow>Employer value &amp; scope</Eyebrow>
        <h2
          className={`mt-3.5 text-3xl font-semibold leading-tight text-[#16245A] sm:text-4xl sm:leading-[48px] ${headingFont}`}
        >
          Three outcomes a workplace program is designed for.
        </h2>
        <p className="mt-3.5 max-w-[760px] text-base leading-7 text-[#5B6478]">
          No ROI figures or uptake counts — just what each outcome means and
          where it stops.
        </p>

        <div className="mt-12 flex flex-col gap-16">
          {outcomes.map((o, i) => (
            <article
              key={o.title}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div
                className={`relative aspect-[622/421] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#E6E9F2] to-[#D9E0F2] shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)] ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={o.image}
                  alt={o.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <span
                  className={`absolute left-[18px] top-[18px] rounded-full bg-white px-3 py-1.5 text-xs font-semibold leading-5 text-[#7C5CFC] ${headingFont}`}
                >
                  Outcome {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <h3
                  className={`text-2xl font-semibold leading-9 text-[#16245A] ${headingFont}`}
                >
                  {o.title}
                </h3>
                <p className="mt-2 text-base leading-6 text-[#5B6478]">
                  {o.text}
                </p>
                <dl className="mt-4 flex flex-col gap-2.5">
                  {[
                    ["Audience", o.audience],
                    ["Boundary", o.boundary],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-[112px_1fr] gap-3 rounded-xl bg-[#F5F7FB] px-4 py-3"
                    >
                      <dt className="pt-0.5 text-xs font-bold uppercase leading-5 tracking-wide text-[#7C5CFC]">
                        {label}
                      </dt>
                      <dd className="text-base leading-6 text-[#2B3550]">
                        {value}
                      </dd>
                    </div>
                  ))}
                  <div className="grid grid-cols-[112px_1fr] gap-3 rounded-xl bg-[#F5F7FB] px-4 py-3">
                    <dt className="pt-0.5 text-xs font-bold uppercase leading-5 tracking-wide text-[#7C5CFC]">
                      Context
                    </dt>
                    <dd>
                      <Link
                        href={o.context.href}
                        className="text-base leading-6 text-[#3D5BD9] underline underline-offset-2 hover:text-[#7C5CFC]"
                      >
                        {o.context.label}
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
