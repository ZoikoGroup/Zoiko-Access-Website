import Link from "next/link";
import { Head, Photo, card, fontPoppins, inner, photoBg, pic, sectionPad, sectionY } from "./shared";

const useCases = [
  {
    title: "Eligibility & benefits",
    text: "Plan-specific responses with source and date.",
    image: "/payer-solutions-team/benefits-data-on-a-laptop.webp",
    alt: "Laptop showing a data dashboard",
    href: "/eligibility-benefits",
  },
  {
    title: "Prior authorizations",
    text: "Staged requests with a named decision owner.",
    image: pic("clinician-using-a-tablet"),
    alt: "Clinician in a white coat using a phone",
    href: "/prior-authorizations",
  },
  {
    title: "Claims & remittance",
    text: "Status coordination — never settlement.",
    image: pic("financial-documents-and-calculator"),
    alt: "Financial forms and a calculator on a desk",
    href: "/claims-coordination",
  },
  {
    title: "Member access experience",
    text: "Permission-bound member journeys.",
    image: pic("member-using-a-laptop"),
    alt: "Person pointing at a laptop screen",
    href: "/member-access-experience",
  },
  {
    title: "Governance & partner assessment",
    text: "Evidence required before any deployment.",
    image: pic("team-assessing-documents"),
    alt: "Colleagues reviewing notes beside laptops",
    href: "/become-a-payer-partner",
  },
];

export default function UseCases() {
  return (
    <section className={`w-full bg-[linear-gradient(180deg,#f6f4fe_0%,#ece8fb_100%)] ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col gap-11`}>
        <Head
          eyebrow="Supported use-case taxonomy"
          title="What an integration could coordinate."
          lead="Concepts only. Each card links to the existing informational page for that topic."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {useCases.map((u) => (
            <article key={u.title} className={`flex flex-col ${card}`}>
              <div className={`relative h-[180px] w-full lg:h-[147px] ${photoBg}`}>
                <Photo src={u.image} alt={u.alt} sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col gap-1.5 p-6">
                <h3 className={`${fontPoppins} pb-2 text-[18px] font-semibold leading-6 text-[#16245a]`}>{u.title}</h3>
                <p className="text-[15px] leading-6 text-[#5b6678]">{u.text}</p>
                <Link
                  href={u.href}
                  className="mt-auto w-fit pt-6 text-[14px] font-semibold leading-6 text-[#7657e8] hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
