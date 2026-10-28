import Copy from "./Copy";
import FigmaImage, { type ImageBox } from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { SecHead, inner, sectionPad, sectionY } from "./ui";

type Role = {
  owner: string;
  title: string;
  text: string;
  d: string[];
  src: string;
  alt: string;
  box: ImageBox;
};

const roles: Role[] = [
  {
    owner: "Payer operator",
    title: "Plan administration",
    text: "Works with plan rules under contract — no automatic access to clinical histories.",
    d: ["Works with plan rules under", "contract — no automatic access to", "clinical histories."],
    src: "role-payer-operator",
    alt: "Payer operations analytics on a laptop",
    box: { top: -7.03, height: 114.06 },
  },
  {
    owner: "Provider administrator",
    title: "Service-date questions",
    text: "Checks plan context for a permitted administrative purpose.",
    d: ["Checks plan context for a", "permitted administrative purpose."],
    src: "role-provider-administrator",
    alt: "Healthcare provider in a clinic",
    box: { top: -2.11, height: 104.23 },
  },
  {
    owner: "Member",
    title: "Own plan information",
    text: "Sees their own information through an authorized account.",
    d: ["Sees their own information through", "an authorized account."],
    src: "role-member",
    alt: "Member reviewing information on a laptop at home",
    box: { top: -3.37, height: 106.74 },
  },
  {
    owner: "Authorized caregiver",
    title: "Delegated, verified help",
    text: "Acts only within applicable, verified authority.",
    d: ["Acts only within applicable, verified", "authority."],
    src: "role-caregiver",
    alt: "Caregiver supporting an older adult",
    box: { top: -2.91, height: 105.83 },
  },
];

export default function Roles() {
  return (
    <section
      id="roles"
      className={`w-full bg-[radial-gradient(1200px_1131px_at_85%_143px,#b700dc_0%,rgba(167,22,223,0.75)_15%,rgba(151,44,226,0.5)_30%,rgba(118,87,232,0)_60%),linear-gradient(124.1deg,#0a1a4b_51.44%,#3550b8_100%)] ${sectionY} ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-11`}>
        <SecHead
          tone="light"
          eyebrow="Roles & privacy safeguards"
          title="Access depends on role and purpose."
          lead={
            <Copy
              text="Permissions for each role are independent. A funding role is not permission to inspect clinical records."
              d={[
                "Permissions for each role are independent. A funding role is not permission to inspect clinical",
                "records.",
              ]}
            />
          }
        />
        <ul className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <li
              key={role.owner}
              className="flex flex-col overflow-hidden rounded-[14px] bg-white/40 shadow-[0_10px_30px_rgba(36,59,115,0.08)]"
            >
              <div
                className="relative h-[187.5px] w-full overflow-hidden bg-[linear-gradient(135.66deg,#dcd3fb_0%,#c7d3f5_100%)]"
                role="img"
                aria-label={role.alt}
              >
                <FigmaImage
                  src={`/eligibility-benefits/${role.src}.webp`}
                  box={role.box}
                  sizes="(min-width: 1024px) 330px, 90vw"
                />
              </div>
              <div className="flex flex-1 flex-col items-start gap-[6px] px-6 pb-[26.6px] pt-6">
                <p className="text-[12px] font-semibold uppercase leading-[19.2px] tracking-[0.96px] text-[#f2effb]">
                  {role.owner}
                </p>
                <h3 className={`${fontPoppins} pb-2 text-[19px] font-semibold leading-[25.65px] text-white`}>{role.title}</h3>
                <p className="text-[15px] leading-[24px] text-[#c5cbd8]">
                  <Copy text={role.text} d={role.d} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
