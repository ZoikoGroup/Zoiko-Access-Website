import Link from "next/link";
import { headingFont } from "./Eyebrow";

const links = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Trust", href: "/privacy-permissions" },
  { label: "Responsible disclosure", href: "/privacy-permissions" },
];

export default function TrustLinks() {
  return (
    <section className="w-full bg-[#F5F8FC] py-16 font-sans sm:py-20">
      <div className="mx-auto max-w-[1360px] px-6 text-center sm:px-10">
        <h2
          className={`text-3xl font-semibold text-[#16245A] sm:text-4xl ${headingFont}`}
        >
          Trust, accessibility &amp; privacy.
        </h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="flex items-center gap-2.5 rounded-xl border border-[#E5E8F0] bg-white px-5 py-4 text-sm font-semibold text-[#16245A] transition-colors hover:border-[#7C5CFC] hover:text-[#7C5CFC]"
              >
                <span
                  className="h-2.5 w-2.5 rounded-sm bg-[#7C5CFC]"
                  aria-hidden="true"
                />
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
