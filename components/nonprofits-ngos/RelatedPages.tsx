import Link from "next/link";
import { heading } from "./shared";

const links = [
  { label: "Organizations overview", href: "/organisation-overview" },
  { label: "Community & home care", href: "/community-home-care" },
  { label: "Patient privacy & permissions", href: "/privacy-permissions" },
];

export default function RelatedPages() {
  return (
    <section className="bg-[#16245A] px-6 py-16 text-white lg:px-28">
      <div className="mx-auto grid w-full max-w-[1220px] grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className={`${heading} mb-3 text-3xl md:text-4xl`}>Related pages.</h2>
          <p className="text-sm text-white/75">
            Related Organizations pages and patient privacy guidance.
          </p>
        </div>
        <ul>
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className={`${heading} group flex items-center justify-between border-b border-white/20 py-6 text-base transition-colors hover:text-[#C9D3F5]`}
              >
                {l.label}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
