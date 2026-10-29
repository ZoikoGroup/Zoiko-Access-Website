import type { ReactNode } from "react";
import { fontPoppins } from "./fonts";

/** Same side padding and width as the site header. */
export const sectionPad = "px-4 sm:px-6 lg:px-12";
export const inner = "mx-auto w-full max-w-[1344px]";
export const sectionY = "py-12 lg:py-[70px]";

const eyebrowTone = {
  violet: "text-[#7657e8]",
  lilac: "text-[#8e7bef]",
  light: "text-[#c9bdfb]",
  ink: "text-[#241c59]",
} as const;

/** Small uppercase label above every section title (no leading line on this page). */
export function Eyebrow({
  children,
  tone = "violet",
  center = false,
}: {
  children: ReactNode;
  tone?: keyof typeof eyebrowTone;
  center?: boolean;
}) {
  return (
    <p
      className={`w-full text-[12px] font-semibold uppercase leading-[19.2px] tracking-[1.92px] ${eyebrowTone[tone]} ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}

/** Section title (Poppins SemiBold, 40/48 on desktop). */
export function Title({
  children,
  tone = "dark",
  center = false,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  center?: boolean;
}) {
  return (
    <h2
      className={`${fontPoppins} w-full text-[28px] font-semibold leading-[34px] tracking-[-0.28px] lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.4px] ${
        tone === "dark" ? "text-[#16245a]" : "text-white"
      } ${center ? "text-center" : ""}`}
    >
      {children}
    </h2>
  );
}

/** Intro paragraph under a title. */
export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="w-full max-w-[720px] pt-[3px] text-[16px] leading-[26px] text-[#5b6678] min-[1400px]:max-w-none lg:text-[17px] lg:leading-[27.2px]">
      {children}
    </p>
  );
}

/** Eyebrow, title and optional lead, stacked with the 12px rhythm of this page. */
export function Head({
  eyebrow,
  title,
  lead,
  tone = "dark",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <div className="flex w-full flex-col items-start gap-3">
      <Eyebrow tone={tone === "dark" ? "violet" : "light"}>{eyebrow}</Eyebrow>
      <Title tone={tone}>{title}</Title>
      {lead && <Lead>{lead}</Lead>}
    </div>
  );
}

/** Amber pill that marks conceptual content. */
export function Ribbon({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-full bg-[#fff4e0] px-3 pb-[5.69px] pt-[5.5px] text-[12px] font-semibold leading-[19.2px] text-[#7a4b00]">
      {children}
    </p>
  );
}

/** Amber warning box with the thick left edge. */
export const urgentBox =
  "rounded-[10px] border border-l-[5px] border-solid border-[#b7791f] bg-[#fff8ea] px-[18px] pb-4 pt-6 text-[15px] leading-[24px] text-[#4a3500]";

/** Radial violet glow used by the dark sections. */
export const glow = (size: string, at: string) =>
  `radial-gradient(${size} at ${at},#b700dc 0%,rgba(167,22,223,0.75) 15%,rgba(151,44,226,0.5) 30%,rgba(118,87,232,0) 60%)`;

export const photoBg = "bg-[linear-gradient(135deg,#dcd3fb_0%,#c7d3f5_100%)]";
