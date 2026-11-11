import Image from "next/image";
import Link from "next/link";

interface AudienceRole {
  title: string;
  imageSrc: string;
}

interface TopicCard {
  tag: string;
  title: string;
  items: string[];
  owner: string;
  imageSrc: string;
  href: string;
}

const audienceRoles: AudienceRole[] = [
  { title: "Patient", imageSrc: "/help/2.png" },
  { title: "Caregiver / guardian", imageSrc: "/help/3.png" },
  { title: "Clinician", imageSrc: "/help/4.png" },
  { title: "Organization", imageSrc: "/help/5.png" },
  { title: "Developer", imageSrc: "/help/6.png" },
];

const helpTopics: TopicCard[] = [
  {
    tag: "HCT-05",
    title: "Clinicians and institutions",
    items: ["Roles and referrals", "Care coordination", "Bounded integrations"],
    owner: "Review owner: Institutional product owner",
    imageSrc: "/help/7.png",
    href: "/clinicians-and-institutions",
  },
  {
    tag: "HCT-06",
    title: "Payers, labs and pharmacies",
    items: ["Eligibility limits", "Diagnostic results", "Licensed dispensing"],
    owner: "Review owner: Legal + specialists",
    imageSrc: "/help/8.png",
    href: "/payers-labs-pharmacies",
  },
  {
    tag: "HCT-07",
    title: "Accessibility and support",
    items: [
      "Accessible alternatives",
      "Assistive technology",
      "Authorized support",
    ],
    owner: "Review owner: Accessibility + support ops",
    imageSrc: "/help/9.png",
    href: "/accessibility-and-support",
  },
];

export default function RoleBasedHelpCenter() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Top Header Section */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <div className="mb-3">
              <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
                — GET ANSWERS
              </span>
            </div>
            <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
              Start with <span className="text-[#7C3AED]">who you are</span>
            </h2>
            <p className="mt-3 text-[15px] leading-[1.65] text-[#64748B] sm:text-[16px]">
              Optional. Choosing an audience narrows the topics. It never
              changes what you can access.
            </p>
          </div>

          <button
            type="button"
            className="self-start rounded-full border border-[#E2E8F0] bg-white px-5 py-2 font-mono text-[13px] font-semibold text-[#0E1646] transition-colors hover:bg-slate-50 lg:self-auto"
          >
            Show all topics
          </button>
        </div>

        {/* 5 Audience Selector Cards Row */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {audienceRoles.map((role, idx) => (
            <div
              key={idx}
              className="group relative aspect-[16/9] w-full overflow-hidden rounded-2xl cursor-pointer shadow-sm transition-transform hover:-translate-y-1"
            >
              <Image
                src={role.imageSrc}
                alt={role.title}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1646]/90 via-[#0E1646]/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[14px] font-bold text-white sm:text-[15px]">
                  {role.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lower Grid: 3 Topic Cards + 1 CTA Box */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {helpTopics.map((topic, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            >
              <div>
                {/* Edge-to-Edge Card Header Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={topic.imageSrc}
                    alt={topic.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <span className="inline-block rounded-md bg-[#F1F0FE] px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-[#7C3AED]">
                    {topic.tag}
                  </span>

                  <h3 className="mt-3 text-[18px] font-bold text-[#0E1646]">
                    {topic.title}
                  </h3>

                  <ul className="mt-4 space-y-2">
                    {topic.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-center gap-2 text-[13px] text-[#475569]"
                      >
                        <span className="text-[#7C3AED] font-bold">
                          &rsaquo;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Link & Owner Note */}
              <div className="p-6 pt-0">
                <p className="mb-4 font-mono text-[11px] text-[#94A3B8]">
                  {topic.owner}
                </p>
                <div className="pt-4 border-t border-[#F1F5F9]">
                  <Link
                    href={topic.href}
                    className="group inline-flex items-center justify-between w-full text-[13px] font-bold text-[#0E1646] transition-colors hover:text-[#7C3AED]"
                  >
                    <span>Browse topic</span>
                    <span className="text-[#7C3AED] transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* 4th Column Solid CTA Container */}
          <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-b from-[#16245A] to-[#7657E8] p-7 text-white shadow-xl">
            <div>
              <h3 className="text-[22px] font-bold leading-tight">
                Can&apos;t find your topic?
              </h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-purple-100/90">
                Browse the frequently asked questions, or use the guided pathway
                below.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/guided-pathway"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-[14px] font-bold text-[#0E1646] transition-all hover:bg-slate-100"
              >
                <span>Guided pathway</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
