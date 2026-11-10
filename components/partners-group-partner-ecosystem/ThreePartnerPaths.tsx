import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accent, IMG, SplitHeader, container, heading, section } from "./shared";

const paths = [
  {
    n: "01",
    title: "Technology partners",
    body: "Potential technical collaborators. Never a roster of approved partners.",
    owner: "Partnerships · Developer Experience",
    img: "tech-code.webp",
    alt: "Source code on a laptop screen",
    href: "/technology-partners",
  },
  {
    n: "02",
    title: "Health system vendors",
    body: "EHR, LIS, PACS, pharmacy, payer and scheduling vendor roles.",
    owner: "Partnerships · Clinical Safety",
    img: "vendor-phone.webp",
    alt: "A doctor holding a smartphone",
    href: "/partners-health-system-vendors",
  },
  {
    n: "03",
    title: "System integrators",
    body: "Implementation roles. No implied certification.",
    owner: "Partnerships · Engineering",
    img: "integrators.webp",
    alt: "Two colleagues giving a high five at a desk",
    href: "/partners-system-integrators",
  },
];

export default function ThreePartnerPaths() {
  return (
    <section className={`bg-[#F5F8FC] ${section}`}>
      <div className={container}>
        <SplitHeader
          eyebrow="Where to go next"
          title={
            <>
              Three partner <Accent>paths</Accent>
            </>
          }
          intro="The three pages in this group, in their original order. Each is informational and is published only once approved."
        />

        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {paths.map((p) => (
            <li
              key={p.n}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(22,36,90,0.08)]"
            >
              <img src={`${IMG}/${p.img}`} alt={p.alt} className="h-[220px] w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold text-[#7B5CF0]">{p.n} · Partner ecosystem</p>
                <h3 className={`${heading} mt-2 text-xl text-[#16245A]`}>{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5B6B8C]">{p.body}</p>
                <dl className="mt-4 grid grid-cols-[56px_1fr] items-center gap-x-3 gap-y-2 text-sm">
                  <dt className="text-[#5B6B8C]">Status</dt>
                  <dd>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEEAFE] px-3 py-1 text-xs font-semibold text-[#3D2A99]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7B5CF0]" aria-hidden="true" />
                      INFO · published only if approved
                    </span>
                  </dd>
                  <dt className="text-[#5B6B8C]">Owner</dt>
                  <dd className="text-[#16245A]">{p.owner}</dd>
                </dl>
                <div className="min-h-8 flex-1" />
                <Link
                  href={p.href}
                  className={`${heading} group inline-flex items-center gap-1.5 text-base text-[#7B5CF0]`}
                >
                  Explore {p.title}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
