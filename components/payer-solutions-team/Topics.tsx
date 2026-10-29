import Link from "next/link";
import { fontPoppins } from "./fonts";
import { Head, Photo, card, img, inner, lavenderBg, photoBg, sectionPad, sectionY } from "./ui";

const topics = [
  {
    title: "Eligibility & benefits",
    text: "Plan-specific information with clear sources.",
    image: img("benefits-data-on-a-laptop"),
    alt: "Laptop showing a data dashboard",
    href: "/eligibility-benefits",
    link: "Read the topic",
  },
  {
    title: "Prior authorizations",
    text: "Request coordination with named decision owners.",
    image: img("clinician-with-a-tablet"),
    alt: "Clinician in a white coat using a phone",
    href: "/prior-authorizations",
    link: "Read the topic",
  },
  {
    title: "Claims & remittance",
    text: "Status coordination, not settlement.",
    image: img("finance-documents"),
    alt: "Financial forms and a calculator on a desk",
    href: "/claims-coordination",
    link: "Read the topic",
  },
  {
    title: "Member access",
    text: "Permission-bound member journeys.",
    image: img("member-on-a-laptop"),
    alt: "Person pointing at a laptop screen",
    href: "/member-access-experience",
    link: "Read the topic",
  },
  {
    title: "Integration & governance",
    text: "Contracts, roles, standards and audit.",
    image: img("integration-infrastructure"),
    alt: "Server racks with network cabling",
    href: "/payer-integrations-governance",
    link: "Read the topic",
  },
  {
    title: "Other institutional evaluation",
    text: "Anything else your organization is assessing.",
    image: img("team-reviewing-documents"),
    alt: "Colleagues reviewing notes beside laptops",
    href: "#inquiry",
    link: "Go to inquiry",
  },
];

export default function Topics() {
  return (
    <section
      id="topics"
      className={`w-full ${sectionY} ${sectionPad}`}
      style={{ background: lavenderBg }}
    >
      <div className={`${inner} flex flex-col gap-11`}>
        <Head
          eyebrow="Discussion topics"
          title="What would you like to discuss?"
          lead="These are inquiry themes, not deployed features. Choosing one directs your inquiry — it doesn't grant any permission."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <article key={t.title} className={`flex flex-col ${card}`}>
              <div className={`relative h-[220px] w-full lg:h-[255px] ${photoBg}`}>
                <Photo src={t.image} alt={t.alt} sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col gap-1.5 p-6">
                <h3 className={`${fontPoppins} pb-2 text-[18px] font-semibold leading-6 text-[#16245a]`}>{t.title}</h3>
                <p className="text-[15px] leading-6 text-[#5b6678]">{t.text}</p>
                <Link
                  href={t.href}
                  className="mt-auto w-fit pt-5 text-[14px] font-semibold leading-6 text-[#7657e8] hover:underline"
                >
                  {t.link} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
