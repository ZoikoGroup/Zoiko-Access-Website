import Link from "next/link";
import { Eyebrow, IMG, heading } from "./shared";

// Cards without an href aren't published yet and show their status instead of a link.
const cards: { title: string; text: string; img: string; alt: string; href?: string }[] = [
  {
    title: "API & Interoperability Overview",
    text: "Principles behind connecting systems",
    img: "explore-api",
    alt: "Connected nodes illustrating system interoperability",
    href: "/api-interoperability",
  },
  {
    title: "Technology Partners",
    text: "How partnerships are assessed",
    img: "explore-technology",
    alt: "Two people shaking hands over a contract",
    href: "/technology-partners",
  },
  {
    title: "Health System Vendors",
    text: "Vendor categories and boundaries",
    img: "explore-vendors",
    alt: "Clinician writing notes in an exam room",
    href: "/partners-health-system-vendors",
  },
  {
    title: "Integration Security",
    text: "Security expectations",
    img: "explore-security",
    alt: "Laptop showing a secured connection",
  },
  {
    title: "Developer Documentation",
    text: "Reference material",
    img: "explore-docs",
    alt: "Person reading a printed report",
  },
  {
    title: "Privacy",
    text: "How information is handled",
    img: "explore-privacy",
    alt: "Two people using a laptop and phone on a sofa",
    href: "/privacy-permissions",
  },
];

function CardBody({ c }: { c: (typeof cards)[number] }) {
  return (
    <>
      <img src={`${IMG}/${c.img}.webp`} alt={c.alt} className="h-52 w-full object-cover" />
      <h3 className={`${heading} mt-6 text-lg text-[#16245A]`}>{c.title}</h3>
      <p className="mt-1.5 text-sm text-[#5B6B8C]">{c.text}</p>
      {c.href ? (
        <span className="mt-6 inline-block text-xs text-[#7B5CF0] transition-transform group-hover:translate-x-1">
          open →
        </span>
      ) : (
        <span className="mt-6 inline-block text-xs text-[#A07A1C]">not yet published</span>
      )}
    </>
  );
}

export default function KeepExploring() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Related architecture &amp; trust</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>Keep exploring.</h2>
        <p className="mb-10 text-base text-[#5B6B8C]">Only published pages are linked. Others show their status.</p>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <li key={c.title} className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              {c.href ? (
                <Link href={c.href} className="group block h-full p-2.5 pb-10">
                  <CardBody c={c} />
                </Link>
              ) : (
                <div className="h-full p-2.5 pb-10">
                  <CardBody c={c} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
