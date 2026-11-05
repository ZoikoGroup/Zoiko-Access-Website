import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow, heading } from "./shared";

const readNext = [
  { label: "Technology Partners", href: "/technology-partners" },
  { label: "Integration Security", href: "/partners-integration-security" },
  { label: "API & Interoperability", href: "/api-interoperability" },
  { label: "System Integrators", href: "/partners-system-integrators" },
  { label: "Privacy", href: "/privacy-permissions" },
];

export default function PartnerPathway() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 overflow-hidden rounded-xl border border-[#E4E7F2] lg:grid-cols-[minmax(0,1fr)_540px]">
        <div className="bg-gradient-to-br from-[#7B5CF0] to-[#4A68D8] px-8 py-12 md:px-12">
          <Eyebrow light>Qualified partner pathway</Eyebrow>
          <h2 className={`${heading} max-w-[560px] text-3xl text-white md:text-[40px] md:leading-[48px]`}>
            Prepare now. Apply when it opens.
          </h2>
          <p className="mt-4 max-w-[520px] text-base leading-7 text-[#E3E6FB]">
            Start with the published guidance. A certification inquiry route will appear only after intake, routing,
            legal notice and confirmation are in place.
          </p>
          <p className="mt-6 text-xs text-[#E3E6FB]">Certification inquiry: not open yet.</p>
        </div>

        <nav aria-label="Read next" className="bg-white px-8 py-10 md:px-9">
          <h3 className={`${heading} mb-3 text-lg text-[#16245A]`}>Read next</h3>
          <ul>
            {readNext.map((r) => (
              <li key={r.href} className="border-b border-[#E4E7F2]">
                <Link
                  href={r.href}
                  className="group flex items-center justify-between py-3 text-sm font-semibold text-[#243B73] transition-colors hover:text-[#7B5CF0]"
                >
                  {r.label}
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
