import Image from "next/image";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Lead, Title, inner, photoBg, sectionPad, sectionY } from "./ui";

const ticks = [
  ["Account", " — access starts from a verified, authorized account."],
  ["Authorized purpose", " — each view is bound to a stated, permitted purpose."],
  ["Minimum information", " — only what the purpose requires is shown."],
  ["Delegation", " — caregivers or representatives act only within verified authority."],
];

export default function MemberAccess() {
  return (
    <section id="member-access" className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} grid items-center gap-10 lg:grid-cols-[5fr_6fr] lg:gap-14`}>
        <div
          className={`relative h-[260px] w-full overflow-hidden rounded-[20px] shadow-[0_10px_30px_rgba(36,59,115,0.08)] sm:h-[360px] lg:h-[458.98px] ${photoBg}`}
          role="img"
          aria-label="Person reviewing their account information on a laptop"
        >
          <FigmaImage
            src="/payers-insurers/member-access-laptop.webp"
            box={{ left: -11.84, width: 123.68 }}
            sizes="(min-width: 1024px) 520px, 90vw"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-[13.7px] pt-[6.91px]">
          <Eyebrow>Member access &amp; privacy</Eyebrow>
          <Title>
            <Copy
              text="Funding is not access. Purpose defines permission."
              d={["Funding is not access.", "Purpose defines permission."]}
            />
          </Title>
          <Lead>
            <Copy
              text="Member-facing interfaces are designed to be entitlement-bound. Paying for or sponsoring coverage never grants a payer or employer blanket access to clinical records."
              d={[
                "Member-facing interfaces are designed to be entitlement-bound. Paying for or",
                "sponsoring coverage never grants a payer or employer blanket access to clinical",
                "records.",
              ]}
            />
          </Lead>
          <ul className="flex w-full flex-col gap-[9.5px] pt-[4.3px]">
            {ticks.map(([strong, rest]) => (
              <li key={strong} className="relative pl-7 text-[15px] leading-[24px] text-[#273444]">
                <span className="absolute left-0 top-[6.5px] flex size-[16px] items-center justify-center rounded-[8px] bg-[#eee9fd]">
                  <Image src="/payers-insurers/icons/tick.svg" alt="" width={12} height={12} />
                </span>
                <strong className="font-bold">{strong}</strong>
                {rest}
              </li>
            ))}
          </ul>
          <p className="w-full pb-[0.6px] pt-[3.5px] text-[14px] leading-[22.4px] text-[#5b6678]">
            <Copy
              text="Any future live surface requires role- and attribute-based access control and jurisdiction-specific permissions."
              d={[
                "Any future live surface requires role- and attribute-based access control and jurisdiction-specific",
                "permissions.",
              ]}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
