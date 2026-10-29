import Link from "next/link";
import { Head, Photo, card, fontPoppins, inner, photoBg, pic, sectionPad, sectionY } from "./shared";

const teams = [
  {
    title: "Payer operations",
    text: "Understand which workflows could be in scope.",
    tag: "Payer owns decisions",
    link: "Go to scope matrix",
    href: "#scope",
    image: pic("payer-operations-team"),
    alt: "Team listening to a presentation in an office",
  },
  {
    title: "Technical integration",
    text: "See the conceptual exchange and interface qualification.",
    tag: "No live API implied",
    link: "Go to architecture",
    href: "#architecture",
    image: pic("technical-infrastructure"),
    alt: "Server racks with network cabling",
  },
  {
    title: "Security & privacy",
    text: "Review data and decision boundaries.",
    tag: "Minimum necessary",
    link: "Go to boundaries",
    href: "#boundaries",
    image: pic("security-and-privacy-concept"),
    alt: "Person using a laptop and a phone together",
  },
  {
    title: "Procurement & governance",
    text: "See the readiness conditions before any launch.",
    tag: "Contract-dependent",
    link: "Go to readiness",
    href: "#readiness",
    image: pic("procurement-and-contracts"),
    alt: "Person signing a contract",
  },
];

export default function Workstreams() {
  return (
    <section className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col gap-11`}>
        <Head
          eyebrow="Workstreams"
          title={
            <>
              Four teams.
              <br />
              One governed implementation.
            </>
          }
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teams.map((t) => (
            <article key={t.title} className={`flex flex-col ${card}`}>
              <div className={`relative h-[188px] w-full ${photoBg}`}>
                <Photo src={t.image} alt={t.alt} sizes="(min-width: 1024px) 310px, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col gap-1.5 p-6">
                <h3 className={`${fontPoppins} pb-2 text-[18px] font-semibold leading-6 text-[#16245a]`}>{t.title}</h3>
                <p className="text-[15px] leading-6 text-[#5b6678]">{t.text}</p>
                <p className="mt-auto w-fit rounded-full bg-[#e7eefc] px-2.5 py-1 text-[12px] font-semibold leading-5 text-[#243b73]">
                  {t.tag}
                </p>
                <Link href={t.href} className="w-fit pt-4 text-[14px] font-semibold leading-6 text-[#7657e8] hover:underline">
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
