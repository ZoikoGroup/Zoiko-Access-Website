import type { ReactNode } from "react";
import { fontPoppins } from "./fonts";

type Tone = "dark" | "light" | "hero";

const eyebrowColor: Record<Tone, string> = {
  dark: "text-[#4267d5]",
  light: "text-[#c1b1fd]",
  hero: "text-[#cfd6ff]",
};
const dotColor: Record<Tone, string> = {
  dark: "bg-[#7657e8]",
  light: "bg-[#c1b1fd]",
  hero: "bg-[#7657e8]",
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

/** Section title (Poppins SemiBold, 36.8px on desktop). */
export function Title({
  children,
  tone = "dark",
  large = false,
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  /** 40px title used by the first two sections. */
  large?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`${fontPoppins} w-full text-[28px] font-semibold leading-[34px] tracking-[-0.56px] lg:leading-[41.22px] lg:tracking-[-0.736px] ${
        large ? "lg:text-[40px]" : "lg:text-[36.8px]"
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
/** Eyebrow, title and lede stack used at the top of most sections. */
export const head =
  "flex w-full max-w-[760px] flex-col items-start gap-[12.8px]";

/** White card with the soft shadow used across the page. */
export const card =
  "rounded-[14px] border border-solid border-[#dcd6f2] bg-white p-[22px] drop-shadow-[0_10px_15px_rgba(60,50,160,0.06)]";
export const cardTitle = `${fontPoppins} pb-[8px] text-[19.2px] font-semibold leading-[21.5px] tracking-[-0.192px] text-[#243b73]`;
export const cardText =
  "text-[14.7px] font-normal leading-[24.29px] text-[#273444]";
