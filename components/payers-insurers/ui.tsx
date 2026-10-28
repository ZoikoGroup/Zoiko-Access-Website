import type { ReactNode } from "react";
import { fontPoppins } from "./fonts";

/** Same side padding and width as the site header. */
export const sectionPad = "px-4 sm:px-6 lg:px-12";
export const inner = "mx-auto w-full max-w-[1344px]";

/** Vertical rhythm shared by every full section. */
export const sectionY = "py-12 lg:py-[96px]";

/** Soft lavender wash used by the flow, claims and case sections. */
export const lavender = "bg-gradient-to-b from-[#f3effe] to-[#e9e3fc]";
/** Photo frame backdrop. */
export const photoBg = "bg-[linear-gradient(135deg,#dcd3fb_0%,#c7d3f5_100%)]";

/** Small line and label above every section title. */
export function Eyebrow({
  children,
  tone = "violet",
  center = false,
}: {
  children: ReactNode;
  tone?: "violet" | "light";
  center?: boolean;
}) {
  const color = tone === "violet" ? "text-[#7657e8]" : "text-[#c9bdfb]";
  const line = tone === "violet" ? "bg-[#7657e8]" : "bg-[#c9bdfb]";
  return (
    <p
      className={`flex items-center gap-[10px] text-[12px] font-semibold uppercase leading-[19.2px] tracking-[1.68px] ${color} ${center ? "justify-center" : ""}`}
    >
      <span className={`h-[2px] w-[22px] shrink-0 ${line}`} aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

/** Section title (Poppins SemiBold, 40/48 on desktop). */
export function Title({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <h2
      className={`${fontPoppins} w-full text-[28px] font-semibold leading-[34px] tracking-[-0.28px] lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.4px] ${
        tone === "dark" ? "text-[#16245a]" : "text-white"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

/** Intro paragraph under a title. */
export function Lead({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`w-full max-w-[760px] pt-[1.4px] text-[16px] font-normal leading-[26px] text-[#5b6678] min-[1400px]:max-w-none lg:text-[17px] lg:leading-[27.2px] ${className}`}
    >
      {children}
    </p>
  );
}

/** Eyebrow, title and lead stacked the way every Figma section head is. */
export function SecHead({
  eyebrow,
  title,
  lead,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex w-full flex-col items-start gap-[13.7px] pt-[6.9px] ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Title>{title}</Title>
      {lead && <Lead>{lead}</Lead>}
    </div>
  );
}

/** Rounded pill label. */
export function Tag({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "violet";
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-[11px] pb-[4.89px] pt-[4.5px] text-[11.5px] font-semibold leading-[18.4px] ${
        tone === "blue" ? "bg-[#e7eefc] text-[#243b73]" : "bg-[#eee9fd] text-[#5a3fc9]"
      }`}
    >
      {children}
    </span>
  );
}

export const cardTitle = `${fontPoppins} text-[19px] font-semibold leading-[25.65px] text-[#16245a]`;
export const cardText = "text-[15px] font-normal leading-[24px] text-[#5b6678]";
export const card =
  "rounded-[14px] border border-solid border-[#e3e8f2] bg-white drop-shadow-[0_10px_15px_rgba(36,59,115,0.08)]";

/** Light violet note box. */
export const note =
  "rounded-[10px] bg-[#eee9fd] px-[14px] py-[12px] text-[13px] leading-[20.8px] text-[#4a3ba0]";
