import Image from "next/image";
import Link from "next/link";
import { IMG, SectionHeader, container, heading, section } from "./shared";

const topics = [
  {
    tag: "Info",
    tagClass: "bg-white/20 text-white",
    title: "EHR interoperability",
    text: "A standards-oriented model, not a universal live EHR connection.",
    img: "related-ehr.webp",
    alt: "Server rack with network cabling",
    href: "/ehr-interoperability",
  },
  {
    tag: "Gated",
    tagClass: "bg-[#FFD9A0] text-[#6B4A0E]",
    title: "Enterprise onboarding",
    text: "Opens with an actual contracting and onboarding program.",
    img: "related-onboarding.webp",
    alt: "Implementation planning on laptops",
    href: "/enterprise-onboarding",
  },
  {
    tag: "Gated",
    tagClass: "bg-[#FFD9A0] text-[#6B4A0E]",
    title: "Speak with our institutional team",
    text: "Opens with a staffed, privacy-reviewed inquiry service.",
    img: "related-team.webp",
    alt: "A presenter speaking with a team in an office",
    href: "/institutional-team",
  },
];

const alsoSee = [
  { label: "Care Operations", href: "/scheduling-patient-access" },
  { label: "Integration Security", href: "/partners-integration-security" },
  { label: "Technology Partners", href: "/technology-partners" },
];

export default function RelatedPathways() {
  return (
    <section className={`bg-white ${section}`}>
      <div className={container}>
        <SectionHeader eyebrow="Related pathways" title="Three topics in this group." />

        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {topics.map((t) => {
            const gated = t.tag === "Gated";
            return (
              <li key={t.title}>
                <Link
                  href={t.href}
                  className="group relative flex h-[300px] flex-col justify-end overflow-hidden rounded-3xl p-6"
                >
                  <Image
                    src={`${IMG}/${t.img}`}
                    alt={t.alt}
                    fill
                    sizes="(min-width: 768px) 420px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-b from-[#16245A]/20 via-[#16245A]/70 to-[#16245A]/95"
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <span className={`inline-block rounded px-2 py-0.5 text-xs font-bold uppercase ${t.tagClass}`}>
                      {t.tag}
                    </span>
                    <h3 className={`${heading} mt-2 text-xl text-white`}>{t.title}</h3>
                    <p className="mt-1 text-sm text-white/80">{t.text}</p>
                    <p className="mt-4 text-base font-semibold text-white">
                      {gated ? "Not open yet" : "Read the topic →"}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <span className="text-sm text-[#5B6B8C]">Also see:</span>
          {alsoSee.map((a) => (
            <Link
              key={a.label}
              href={a.href}
              className="rounded-full border border-[#E4E7F2] px-4 py-2 text-sm font-semibold text-[#16245A] transition-colors hover:border-[#7B5CF0]"
            >
              {a.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
