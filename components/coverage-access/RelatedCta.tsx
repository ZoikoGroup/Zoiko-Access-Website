import Link from "next/link";
import { Eyebrow, Head, Photo, Title, card, darkBg, fontPoppins, glow, inner, photoBg, pic, sectionPad, sectionY } from "./shared";

const pathways = [
  { title: "Eligibility & Benefits", href: "/eligibility-benefits", image: pic("eligibility-information"), alt: "Laptop showing a data dashboard" },
  { title: "Prior Authorizations", href: "/prior-authorizations", image: pic("authorization-review"), alt: "Clinician in a white coat using a phone" },
  { title: "Member Access Experience", href: "/member-access-experience", image: pic("family-at-home"), alt: "Family holding hands on a beach at sunset" },
  {
    title: "Payer Integrations & Governance",
    href: "/payer-integrations-governance",
    image: pic("secure-integration-concept"),
    alt: "Glowing circuit board",
  },
];

export function Related() {
  return (
    <section className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col gap-11`}>
        <Head eyebrow="Related pathways" title="Explore the payer and insurer model." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map((p) => (
            <article key={p.title} className={`flex flex-col ${card} shadow-[0_10px_20px_rgba(36,59,115,0.1)]`}>
              <div className={`relative h-[188px] w-full ${photoBg}`}>
                <Photo src={p.image} alt={p.alt} sizes="(min-width: 1024px) 310px, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col gap-6 p-6">
                <h3 className={`${fontPoppins} min-h-12 text-[18px] font-semibold leading-6 text-[#16245a]`}>{p.title}</h3>
                <Link href={p.href} className="mt-auto w-fit text-[14px] font-semibold leading-6 text-[#7657e8] hover:underline">
                  Explore <span aria-hidden="true">→</span>
                  <span className="sr-only"> {p.title}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaCta() {
  return (
    <section
      className={`w-full py-16 lg:py-[86px] ${sectionPad}`}
      style={{ backgroundImage: `${glow("1000px 600px", "5% 18%")},${darkBg}` }}
    >
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-4 text-center">
        <Eyebrow tone="light">For institutions</Eyebrow>
        <Title tone="light">Discuss a governed payer access approach.</Title>
        <p className="max-w-[660px] text-[16px] leading-7 text-white/[0.88]">
          Start with the implementation approach. Institutional contact appears here only once a staffed inquiry route is
          approved.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/implementation-approach"
            className="flex min-h-[50px] items-center justify-center rounded-[10px] bg-white px-6 py-3 text-[15px] font-semibold text-[#243b73] transition-colors hover:bg-[#eee9fd]"
          >
            Review the implementation approach →
          </Link>
          <Link
            href="/payers-insurers"
            className="flex min-h-[50px] items-center justify-center rounded-[10px] border-2 border-solid border-white px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            Payer overview
          </Link>
        </div>
      </div>
    </section>
  );
}
