import type { CSSProperties } from "react";
import FigmaImage from "./FigmaImage";
import type { ImageBox } from "./FigmaImage";
import Copy from "./Copy";
import Kicker from "./Kicker";
import SectionTitle from "./SectionTitle";
import Sub from "./Sub";
import { fontPoppins } from "./fonts";

type Role = {
  title: string;
  text: string;
  d?: string[];
  image: string;
  /** Figma figure width/height in px, and where the picture sits in its frame. */
  width: number;
  height: number;
  box: ImageBox;
};

const roles: Role[] = [
  {
    title: "Institution sponsor",
    text: "The business owner of the effort.",
    image: "/enterprise-onboarding/role-institution-sponsor.webp",
    width: 288,
    height: 346,
    box: { left: -48.22, width: 196.44 },
  },
  {
    title: "Clinical lead",
    text: "Owns care decisions. The platform never takes these over.",
    d: ["Owns care decisions. The", "platform never takes these over."],
    image: "/enterprise-onboarding/role-clinical-lead.webp",
    width: 289,
    height: 346,
    box: { left: 0.04, width: 100.97, top: -23.37, height: 139.82 },
  },
  {
    title: "Security and DPO",
    text: "Give the security and data-protection approvals.",
    image: "/enterprise-onboarding/role-security-dpo.webp",
    width: 289,
    height: 346.74,
    box: { left: -2.17, width: 104.35, top: -0.11, height: 127.78 },
  },
  {
    title: "IT integration",
    text: "Looks after the source systems.",
    image: "/enterprise-onboarding/role-it-integration.webp",
    width: 288,
    height: 338,
    box: { left: -45.62, width: 191.25, top: 0.1, height: 124.32 },
  },
  {
    title: "Zoiko teams",
    text: "Provide the agreed platform coordination.",
    d: ["Provide the agreed platform", "coordination."],
    image: "/enterprise-onboarding/role-zoiko-teams.webp",
    width: 289,
    height: 352,
    box: { left: -15.22, width: 130.44 },
  },
  {
    title: "Legal",
    text: "Owns the agreements.",
    image: "/enterprise-onboarding/role-legal.webp",
    width: 289,
    height: 352,
    box: { left: -39.59, width: 179.17 },
  },
];

export default function RolesResponsibilities() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-12 lg:py-[70px]">
      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start gap-[10px]">
        <Kicker>Roles, responsibilities and safety</Kicker>
        <SectionTitle>Who is responsible for what</SectionTitle>
        <Sub>
          <Copy
            text="Role titles are illustrative. Each organization confirms its own appointments during due diligence."
            d={[
              "Role titles are illustrative. Each organization confirms its own appointments during",
              "due diligence.",
            ]}
          />
        </Sub>

        <div className="flex w-full flex-wrap content-center items-center justify-center gap-[30px] pb-[14px] pt-[18px] lg:w-[1244px] lg:max-w-full lg:justify-start">
          {roles.map((role) => (
            <figure
              key={role.title}
              className="m-0 flex w-[288px] max-w-full shrink-0 flex-col items-start overflow-clip rounded-[24px] drop-shadow-[0px_12px_15px_rgba(27,23,80,0.12)] lg:w-[var(--w)]"
              style={
                {
                  "--w": `${role.width}px`,
                  height: role.height,
                } as CSSProperties
              }
            >
              <div className="relative h-[230px] w-full shrink-0 overflow-clip rounded-t-[120px] bg-[linear-gradient(148.52deg,#8e7bef_0%,#08176d_100%)]">
                <FigmaImage
                  src={role.image}
                  box={role.box}
                  sizes="(min-width: 1440px) 570px, 90vw"
                />
              </div>
              <figcaption className="flex w-full flex-1 flex-col items-start gap-[5.3px] bg-white px-[18px] pb-[22px] pt-[17px]">
                <h3
                  className={`${fontPoppins} w-full pb-[0.7px] text-center text-[17.6px] font-semibold leading-[19.71px] text-[#1b1750]`}
                >
                  {role.title}
                </h3>
                <p className="w-full text-center text-[14.4px] font-normal leading-[23.76px] text-[#575387]">
                  <Copy text={role.text} d={role.d} />
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
