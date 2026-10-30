import Link from "next/link";
import { fontPoppins } from "./fonts";
import { Title, inner, sectionPad, sectionY } from "./ui";

const links = [
  { title: "Eligibility & Benefits", text: "Why eligibility is not approval", href: "/eligibility-benefits" },
  { title: "Claims & Remittance Coordination", text: "Status coordination, not settlement", href: "/claims-remittance" },
  { title: "Payer Integrations & Governance", text: "Source-controlled, audited exchange", href: "/payer-integrations-governance" },
  { title: "Implementation Approach", text: "Prerequisites before engagement", href: "/implementation-approach" },
];

export default function PaRelated() {
  return (
    <section id="related" className={`w-full bg-[#f6f9fc] ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-7 lg:px-10`}>
        <Title>Keep exploring payer coordination.</Title>
        <ul className="w-full border-t border-solid border-[#e3e8f2]">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex flex-col gap-2 border-b border-solid border-[#e3e8f2] px-2 py-6 sm:flex-row sm:items-center sm:gap-5"
              >
                <span className={`${fontPoppins} min-w-0 flex-1 text-[20px] font-semibold leading-[32px] text-[#16245a]`}>
                  {link.title}
                </span>
                <small className="min-w-0 flex-1 text-[15px] leading-[24px] text-[#5b6678]">{link.text}</small>
                <i
                  aria-hidden="true"
                  className="flex size-[40px] shrink-0 items-center justify-center rounded-full border border-solid border-[#7657e8] text-[16px] not-italic leading-[25.6px] text-[#7657e8]"
                >
                  →
                </i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
