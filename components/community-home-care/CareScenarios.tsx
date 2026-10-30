import Image from "next/image";
import Eyebrow, { headingFont } from "./Eyebrow";

const IMG = "/organizations-community-home-care";

const scenarios = [
  {
    image: `${IMG}/community-resource-center.webp`,
    alt: "Community volunteer at a resource event",
    title: "Community resource navigation",
    rows: [
      ["Context", "Someone needs local, nonclinical support."],
      ["Actors", "Individual, community coordinator"],
      ["Permitted step", "Find and share local resource information."],
      ["Owner", "Community coordinator"],
    ],
    limit: "No clinical advice or record access.",
  },
  {
    image: `${IMG}/home-support-planning.webp`,
    alt: "Family reviewing home-support options together",
    title: "Home-support planning",
    rows: [
      ["Context", "A person may need support at home."],
      ["Actors", "Individual, caregiver, home-care provider"],
      ["Permitted step", "Request an assessment from a local provider."],
      ["Owner", "Licensed home-care provider"],
    ],
    limit: "No schedule or service guaranteed.",
  },
  {
    image: `${IMG}/hospital-discharge.webp`,
    alt: "Hospital building exterior",
    title: "Discharge follow-up handoff",
    rows: [
      ["Context", "A person is leaving hospital care."],
      ["Actors", "Hospital team, community provider, individual"],
      ["Permitted step", "Send an authorized handoff with consent."],
      ["Owner", "Sending and receiving providers"],
    ],
    limit: "Delivery isn't acceptance of care.",
  },
];

export default function CareScenarios() {
  return (
    <section
      id="care-scenarios"
      className="relative w-full scroll-mt-24 overflow-hidden bg-[#4B37B8] py-16 font-sans sm:py-20"
    >
      {/* Diagonal background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#4A33B0] via-[#5B45C8] to-[#9C83F5]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[#1A0B6B]"
        style={{ clipPath: "polygon(55% 0, 100% 0, 100% 35%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <Eyebrow tone="light">Core care-navigation scenarios</Eyebrow>
        <h2
          className={`mt-3.5 text-3xl font-semibold leading-tight text-white sm:text-4xl sm:leading-[48px] ${headingFont}`}
        >
          Three situations, step by step.
        </h2>
        <p className="mt-3.5 inline-block rounded-full bg-[#FFF3DC] px-3 py-1.5 text-xs font-semibold text-[#7A4B00]">
          SYNTHETIC &amp; ILLUSTRATIVE — NOT REAL PATIENTS
        </p>

        <div className="mt-11 grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          {scenarios.map((s) => (
            <article
              key={s.title}
              className="overflow-hidden rounded-[20px] border border-[#E5E8F0] bg-white shadow-[0_10px_30px_rgba(36,59,115,0.08)]"
            >
              <div className="relative h-[230px] w-full bg-[#EEF0F8]">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="px-6 pb-7 pt-5">
                <h3
                  className={`text-lg font-semibold leading-6 text-[#16245A] ${headingFont}`}
                >
                  {s.title}
                </h3>
                <dl className="mt-3">
                  {[...s.rows, ["Limit", s.limit]].map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-[110px_1fr] gap-3 border-t border-[#E5E8F0] py-2.5"
                    >
                      <dt className="pt-0.5 text-xs font-bold uppercase tracking-wide text-[#7C5CFC]">
                        {label}
                      </dt>
                      <dd
                        className={`text-sm leading-6 ${
                          label === "Limit" ? "text-[#9B1C1C]" : "text-[#2B3550]"
                        }`}
                      >
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
