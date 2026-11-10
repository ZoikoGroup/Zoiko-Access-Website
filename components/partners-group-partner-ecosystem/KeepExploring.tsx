import Link from "next/link";
import { Eyebrow, IMG, container, heading, section } from "./shared";

const links = [
  { title: "Technology partners", group: "Partner ecosystem", href: "/technology-partners", img: "tech-code.webp", alt: "Source code on a laptop screen" },
  { title: "Health system vendors", group: "Partner ecosystem", href: "/partners-health-system-vendors", img: "vendor-phone.webp", alt: "A doctor holding a smartphone" },
  { title: "Company trust & privacy", group: "Company", href: "/privacy-permissions", img: "trust-privacy.webp", alt: "A person using a laptop and phone" },
  { title: "Hospitals & clinics", group: "Institutions", href: "/hospitals-clinics", img: null, alt: "" },
];

export default function KeepExploring() {
  return (
    <section className={`bg-[#F5F8FC] ${section}`}>
      <div className={container}>
        <Eyebrow purple>Related information</Eyebrow>
        <h2 className={`${heading} text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>Keep exploring</h2>

        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((l) => (
            <li key={l.title}>
              <Link
                href={l.href}
                className="group block overflow-hidden rounded-2xl border border-[#E4E7F2] bg-white transition-shadow hover:shadow-[0_10px_30px_rgba(22,36,90,0.10)]"
              >
                {l.img ? (
                  <img src={`${IMG}/${l.img}`} alt={l.alt} className="h-[120px] w-full object-cover" />
                ) : (
                  <div className="h-[120px] w-full bg-gradient-to-br from-[#243B73] to-[#7B5CF0]" aria-hidden="true" />
                )}
                <div className="px-5 py-5">
                  <h3 className={`${heading} text-base text-[#16245A] group-hover:text-[#7B5CF0]`}>{l.title}</h3>
                  <p className="mt-3 text-sm text-[#5B6B8C]">{l.group}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
