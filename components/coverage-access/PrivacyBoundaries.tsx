import Link from "next/link";
import type { ReactNode } from "react";
import { Check, Photo, card, fontPoppins, inner, lavenderBg, photoBg, pic, sectionPad, sectionY } from "./shared";

function Panel({
  image,
  alt,
  label,
  title,
  children,
}: {
  image: string;
  alt: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className={`flex flex-col ${card}`}>
      <div className={`relative h-[240px] w-full sm:h-[320px] lg:h-[389px] ${photoBg}`}>
        <Photo src={image} alt={alt} sizes="(min-width: 768px) 622px, 100vw" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="text-[12px] font-semibold uppercase leading-5 tracking-[0.6px] text-[#4267d5]">{label}</p>
        <h2
          className={`${fontPoppins} pb-4 text-[28px] font-semibold leading-[34px] tracking-[-0.3px] text-[#16245a] lg:text-[40px] lg:leading-[48px]`}
        >
          {title}
        </h2>
        {children}
      </div>
    </article>
  );
}

const rights = [
  "Don't enter health details, policy numbers or member IDs on public pages.",
  "Access depends on identity, role and lawful purpose.",
  "Funding a plan never grants access to clinical records.",
];

const chain = ["Authorized requester", "Identity & permission checks", "Approved payer service", "Scoped, sourced response"];

export default function PrivacyBoundaries() {
  return (
    <section className={`w-full ${sectionY} ${sectionPad}`} style={{ background: lavenderBg }}>
      <div className={`${inner} grid gap-8 md:grid-cols-2 lg:px-2.5`}>
        <Panel
          image={pic("data-privacy-protection-concept")}
          alt="Person using a laptop and a phone together"
          label="Member privacy & rights"
          title="Your health information should be handled through authorized services."
        >
          <ul className="flex flex-col gap-2.5">
            {rights.map((r) => (
              <li key={r} className="relative pl-7 text-[15px] leading-6 text-[#2d3a52]">
                <Check />
                {r}
              </li>
            ))}
          </ul>
          <Link href="/privacy-permissions" className="mt-5 w-fit text-[15px] text-[#4267d5] underline">
            Read the privacy notice
          </Link>
        </Panel>
        <Panel
          image={pic("integration-infrastructure")}
          alt="Server racks with network cabling"
          label="Payer integration boundaries"
          title="Connected workflows require approved parties and permissions."
        >
          <ol className="flex flex-col gap-2">
            {chain.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 rounded-lg bg-[#f5f8fc] px-3.5 py-2.5 text-[16px] font-medium leading-6 text-[#16245a]"
              >
                <span aria-hidden="true" className="size-[26px] shrink-0 rounded-full bg-[#7657e8]" />
                {c}
              </li>
            ))}
          </ol>
          <p className="pt-2 text-[15px] leading-6 text-[#5b6678]">Conceptual only — no connected partners or logos implied.</p>
        </Panel>
      </div>
    </section>
  );
}
