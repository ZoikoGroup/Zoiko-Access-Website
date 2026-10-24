import type { ReactNode } from "react";
import { fontPoppins } from "./fonts";

type Tone = "dark" | "light";

/** Small uppercase label above every section title. */
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
      className={`w-full text-[11.8px] font-semibold uppercase leading-[normal] tracking-[1.658px] ${
        tone === "dark" ? "text-[#6d4fe6]" : "text-[#cfc4ff]"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/** Section title (Poppins SemiBold, 38.4px on desktop, 27.2px on mobile). */
export function Title({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <h2
      className={`${fontPoppins} w-full pb-[0.685px] text-[27.2px] font-semibold leading-[30.46px] tracking-[-0.272px] lg:pb-0 lg:text-[38.4px] lg:leading-[43px] lg:tracking-[-0.384px] ${
        tone === "dark" ? "text-[#1b1750]" : "text-white"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

/** Intro paragraph under a title. */
export function Lead({
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
      className={`w-full max-w-[660px] pt-[3.78px] text-[16px] font-normal leading-[26.4px] lg:pt-[9.19px] ${
        tone === "dark" ? "text-[#575387]" : "text-[#e6e1ff]"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/** Same side padding and width as the site header. */
export const sectionPad = "px-4 sm:px-6 lg:px-12";
export const inner = "mx-auto w-full max-w-[1344px]";
/** Eyebrow, title and lead stack used at the top of most sections. */
export const head = "flex w-full flex-col items-start gap-[9.2px] lg:gap-[10px]";
