import Link from "next/link";
import { Eyebrow, IMG, heading } from "./shared";

const routes = [
  {
    status: "Open",
    title: "Technology partners",
    text: "How partnerships are assessed and what evidence is needed.",
    image: `${IMG}/route-technology-partners.webp`,
    alt: "Presenter speaking to a team in an office",
    href: "/become-partner",
  },
  {
    status: "Open",
    title: "Integration guidance",
    text: "How integrators assess, build and validate connections.",
    image: `${IMG}/route-integration-guidance.webp`,
    alt: "Team working on laptops around a shared table",
    href: "/ehr-interoperability",
  },
  {
    status: "Not open yet",
    title: "Partner inquiry",
    text: "No form is shown and no contact details are collected until an approved, staffed intake exists.",
    image: `${IMG}/route-partner-inquiry.webp`,
    alt: "Two people shaking hands by a window",
  },
];

export default function DecisionRoutes() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Decision routes</Eyebrow>
        <h2 className={`${heading} mb-3 max-w-[560px] text-3xl text-[#16245A] md:text-4xl`}>
          Learn first. Inquire when it opens.
        </h2>
        <p className="mb-10 text-base leading-7 text-[#5B6B8C]">
          Two published routes are open now. Partner inquiry stays closed until it is operational.
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {routes.map((r) => (
            <article
              key={r.title}
              className="overflow-hidden rounded-3xl border border-[#E4E7F2] bg-white shadow-[0_10px_30px_rgba(22,36,90,0.10)]"
            >
              <img src={r.image} alt={r.alt} className="h-48 w-full object-cover" />
              <div className="p-7">
                <p
                  className={`mb-2 text-xs font-bold uppercase tracking-wide ${r.href ? "text-[#1E8A5A]" : "text-[#8A5A00]"}`}
                >
                  {r.status}
                </p>
                <h3 className={`${heading} mb-2 text-xl text-[#16245A]`}>{r.title}</h3>
                <p className="text-sm leading-6 text-[#5B6B8C]">{r.text}</p>
                {r.href && (
                  <Link
                    href={r.href}
                    className="group mt-4 inline-flex items-center gap-1 text-base font-semibold text-[#7B5CF0]"
                  >
                    Read guidance
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
