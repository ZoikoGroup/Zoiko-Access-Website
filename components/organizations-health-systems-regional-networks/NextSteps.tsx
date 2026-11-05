import Link from "next/link";
import { Eyebrow, IMG, heading } from "./shared";

const steps = [
  {
    title: "Explore governance",
    text: "Review the requirements on this page first.",
    image: `${IMG}/next-governance.webp`,
    alt: "Hand signing a document with a pen",
    link: { label: "Governance", href: "#governance" },
  },
  {
    title: "Contact the team",
    text: "Only where a staffed, approved contact route exists.",
    image: `${IMG}/next-contact.webp`,
    alt: "Smiling woman in a striped jacket",
  },
  {
    title: "Related material",
    text: "Organizations overview and program implementation.",
    image: `${IMG}/next-related.webp`,
    alt: "Colleagues working with laptops and notes at a table",
    link: { label: "Organizations", href: "/organisation-overview" },
  },
];

export default function NextSteps() {
  return (
    <section className="bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Qualified institutional next steps</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-4xl`}>Where to go from here.</h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <article
              key={s.title}
              className="overflow-hidden rounded-[20px] border border-[#E4E7F2] bg-white shadow-[0_10px_20px_rgba(22,36,90,0.10)]"
            >
              <img src={s.image} alt={s.alt} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className={`${heading} mb-1 text-lg text-[#16245A]`}>{s.title}</h3>
                <p className="text-sm leading-6 text-[#5B6B8C]">{s.text}</p>
                {s.link && (
                  <Link
                    href={s.link.href}
                    className="group mt-1 inline-flex items-center gap-1 text-base font-semibold text-[#7B5CF0] hover:text-[#5B3FD0]"
                  >
                    {s.link.label}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
