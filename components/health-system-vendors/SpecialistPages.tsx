import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow, IMG, heading } from "./shared";

// Pages without an href aren't published yet and show their status instead of a link.
const pages: { label: string; href?: string }[] = [
  { label: "API & Interoperability", href: "/ehr-interoperability" },
  { label: "System Integrators", href: "/become-partner" },
  { label: "Payer Integrations", href: "/payer-integrations-governance" },
  { label: "Clinicians", href: "/for-clinicians" },
  { label: "Labs & Pharmacies", href: "/labs-pharmacies" },
  { label: "EHR Interoperability" },
  { label: "Integration Security" },
  { label: "Privacy", href: "/privacy-permissions" },
  { label: "Trust", href: "/privacy-permissions" },
];

export default function SpecialistPages() {
  return (
    <section
      className="bg-cover bg-center px-6 py-16 lg:px-16"
      style={{ backgroundImage: `url(${IMG}/bg-related.webp)` }}
    >
      <div className="mx-auto w-full max-w-[1220px]">
        <Eyebrow>Related resources &amp; trust</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-[44px]`}>Specialist pages.</h2>
        <p className="mb-8 text-base text-[#5B6B8C]">Published pages are linked. Others show their status.</p>

        <ul className="flex flex-wrap gap-3.5">
          {pages.map((p) =>
            p.href ? (
              <li key={p.label}>
                <Link
                  href={p.href}
                  className="group flex items-center gap-3 rounded-full border border-[#E4E7F2] bg-white px-6 py-3.5 text-base font-semibold text-[#16245A] transition-colors hover:border-[#B9A8FD]"
                >
                  {p.label}
                  <ArrowRight
                    className="h-4 w-4 text-[#7B5CF0] transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ) : (
              <li
                key={p.label}
                className="flex items-center gap-3 rounded-full border border-dashed border-[#E4E7F2] bg-white/60 px-6 py-3.5 text-base text-[#9AA3BD]"
              >
                {p.label}
                <span className="text-xs uppercase tracking-wide">Not yet published</span>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
