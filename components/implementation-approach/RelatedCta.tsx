import Link from "next/link";
import { Eyebrow, Head, Photo, Title, card, darkBg, fontPoppins, glow, inner, photoBg, pic, sectionPad, sectionY } from "./shared";

const topics = [
  { title: "Eligibility & Benefits", href: "/eligibility-benefits", image: pic("eligibility-data"), alt: "Laptop showing a data dashboard" },
  { title: "Prior Authorizations", href: "/prior-authorizations", image: pic("authorization-review"), alt: "Clinician in a white coat using a phone" },
  {
    title: "Claims & Remittance Coordination",
    href: "/claims-coordination",
    image: pic("claims-documents"),
    alt: "Financial forms and a calculator on a desk",
  },
  { title: "Member Access Experience", href: "/member-access-experience", image: pic("family-at-home"), alt: "Family holding hands on a beach at sunset" },
  {
    title: "Payer Integrations & Governance",
    href: "/payer-integrations-governance",
    image: pic("integration-infrastructure"),
    alt: "Server racks with network cabling",
  },
];

export function Related() {
  return (
    <section className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col gap-11`}>
        <Head eyebrow="Related resources" title="Explore each payer topic." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {topics.map((t) => (
            <article key={t.title} className={`flex flex-col ${card} shadow-[0_10px_20px_rgba(36,59,115,0.1)]`}>
              <div className={`relative h-[180px] w-full lg:h-[147px] ${photoBg}`}>
                <Photo src={t.image} alt={t.alt} sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col gap-6 p-6">
                <h3 className={`${fontPoppins} min-h-[72px] text-[18px] font-semibold leading-6 text-[#16245a]`}>{t.title}</h3>
                <Link href={t.href} className="mt-auto w-fit text-[14px] font-semibold leading-6 text-[#7657e8] hover:underline">
                  Explore <span aria-hidden="true">→</span>
                  <span className="sr-only"> {t.title}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IaCta() {
  return (
    <section
      className={`w-full py-16 lg:py-[86px] ${sectionPad}`}
      style={{ backgroundImage: `${glow("1000px 600px", "5% 18%")},${darkBg}` }}
    >
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-4 text-center">
        <Eyebrow tone="light">Next step</Eyebrow>
        <Title tone="light">Explore payer integrations and governance.</Title>
        <div className="flex flex-col gap-1">
          <p className="text-[16px] leading-7 text-white/[0.88]">
            See the contractual, privacy, access and audit design behind every implementation.
          </p>
          <p className="text-[13px] leading-5 text-white/80">
            &quot;
            <Link href="/payer-solutions-team" className="underline">
              Talk to our payer solutions team
            </Link>
            &quot; appears only once an approved team and intake are operational.
          </p>
        </div>
        <Link
          href="/payer-integrations-governance"
          className="mt-4 flex min-h-[50px] items-center justify-center rounded-[10px] bg-white px-6 py-3 text-[15px] font-semibold text-[#243b73] transition-colors hover:bg-[#eee9fd]"
        >
          Explore payer integrations &amp; governance →
        </Link>
      </div>
    </section>
  );
}
