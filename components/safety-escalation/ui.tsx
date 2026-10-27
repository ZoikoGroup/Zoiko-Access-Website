import type { ReactNode } from "react";
import { fontPoppins } from "./fonts";

type Tone = "dark" | "hero" | "violet";

const eyebrowColor: Record<Tone, string> = {
  dark: "text-[#4267d5]",
  hero: "text-[rgba(255,230,228,0.95)]",
  violet: "text-[#8e7bef]",
};
const dotColor: Record<Tone, string> = {
  dark: "bg-[#7657e8]",
  hero: "bg-[#7657e8]",
  violet: "bg-[#a28dfa]",
};

/** Small label with a dot, above every section title. */
export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <p
      className={`relative min-h-[20.59px] w-full pl-[14px] text-[12.5px] font-semibold leading-[20.59px] ${eyebrowColor[tone]} ${className}`}
    >
      <span
        className={`absolute left-0 top-[7.3px] size-[6px] rounded-[3px] ${dotColor[tone]}`}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}

const titleSize = {
  lg: "lg:text-[40px]",
  md: "lg:text-[36.8px]",
} as const;

/** Section title (Poppins SemiBold, 40px on desktop). */
export function Title({
  children,
  tone = "dark",
  size = "lg",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  size?: keyof typeof titleSize;
  className?: string;
}) {
  return (
    <h2
      className={`${fontPoppins} w-full text-[28px] font-semibold leading-[34px] tracking-[-0.56px] lg:leading-[41.22px] lg:tracking-[-0.736px] ${
        titleSize[size]
      } ${tone === "dark" ? "text-[#243b73]" : "text-white"} ${className}`}
    >
      {children}
    </h2>
  );
}

/** Intro paragraph under a title. */
export function Lede({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={`w-full max-w-[678px] text-[16px] font-normal leading-[27px] lg:text-[16.8px] lg:leading-[27.72px] ${
        tone === "dark" ? "text-[#273444]" : "text-white"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/** Same side padding and width as the site header. */
export const sectionPad = "px-4 sm:px-6 lg:px-12";
export const inner = "mx-auto w-full max-w-[1344px]";

export const cardTitle = `${fontPoppins} text-[19.2px] font-semibold leading-[21.5px] tracking-[-0.192px] text-[#243b73]`;
export const cardText =
  "text-[14.7px] font-normal leading-[24.29px] text-[#273444]";
/** White card with the soft shadow used across the page. */
export const card =
  "rounded-[14px] border border-solid border-[#dcd6f2] bg-white drop-shadow-[0_10px_10px_rgba(60,50,160,0.1)]";
/** Gradient behind every stock photo frame. */
export const photoBg = "bg-[linear-gradient(135deg,#4267d5_0%,#7657e8_100%)]";
