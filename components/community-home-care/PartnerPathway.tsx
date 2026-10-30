import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Eyebrow, { headingFont } from "./Eyebrow";

const IMG = "/organizations-community-home-care";

const assessment = [
  "Your services and the communities you serve",
  "Licensing and local legal authority",
  "Consent, safeguarding and data handling",
  "How handoffs would be owned and evidenced",
];

const nextLinks = [
  { label: "Read about program implementation", href: "/implementation-approach" },
  { label: "Explore the Organizations overview", href: "/organisation-overview" },
];

function CheckDot() {
  return (
    <span
      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EDE8FF] text-[#7C5CFC]"
      aria-hidden="true"
    >
      <Check className="h-2.5 w-2.5 stroke-[3]" />
    </span>
  );
}

export default function PartnerPathway() {
  return (
    <section className="w-full bg-white py-16 font-sans sm:py-20">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <Eyebrow>Partner evaluation pathway</Eyebrow>
        <h2
          className={`mt-3.5 text-3xl font-semibold leading-tight text-[#16245A] sm:text-4xl sm:leading-[48px] ${headingFont}`}
        >
          For providers and community organizations.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-[#E5E8F0] bg-white shadow-[0_20px_44px_rgba(22,36,90,0.12)]">
            <div className="relative aspect-[636/391] w-full">
              <Image
                src={`${IMG}/organization-team-assessment.webp`}
                alt="Two colleagues celebrating at a meeting table"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="px-6 pb-8 pt-6">
              <h3
                className={`text-lg font-semibold text-[#16245A] ${headingFont}`}
              >
                What an assessment could cover
              </h3>
              <ul className="mt-6 space-y-3">
                {assessment.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#2B3550]"
                  >
                    <CheckDot />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-[#E5E8F0] bg-white shadow-[0_20px_44px_rgba(22,36,90,0.12)]">
            <div className="relative aspect-[636/391] w-full">
              <Image
                src={`${IMG}/reviewing-public-resources.webp`}
                alt="People reviewing documents next to laptops"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="px-6 pb-8 pt-6">
              <h3
                className={`text-lg font-semibold text-[#16245A] ${headingFont}`}
              >
                How to start today
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5B6478]">
                A contact option appears only once a staffed intake, privacy
                notice and approved route are in place. Until then:
              </p>
              <ul className="mt-5 space-y-3">
                {nextLinks.map((l) => (
                  <li key={l.href} className="flex items-start gap-3 text-sm">
                    <CheckDot />
                    <Link
                      href={l.href}
                      className="text-[#3D5BD9] underline underline-offset-2 hover:text-[#7C5CFC]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
