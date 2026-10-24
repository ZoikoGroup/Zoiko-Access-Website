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
      className={`w-full pb-[0.63px] text-[12.5px] font-bold leading-[20.63px] tracking-[1.25px] ${
        tone === "dark" ? "text-[#7b3ff2]" : "text-[#c9b8ff]"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/** Section title (Poppins SemiBold, 42px on desktop). */
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
      className={`${fontPoppins} w-full text-[30px] font-semibold leading-[36px] tracking-[-0.6px] lg:text-[42px] lg:leading-[48.3px] lg:tracking-[-0.84px] ${
        tone === "dark" ? "text-[#031974]" : "text-white"
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
      className={`w-full max-w-[720px] text-[16px] font-normal leading-[26.4px] lg:text-[18px] lg:leading-[29.7px] ${
        tone === "dark" ? "text-[#273444]" : "text-[#e6e9ff]"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/** Same side padding and width as the site header. */
export const sectionPad = "px-4 sm:px-6 lg:px-12";
export const inner = "mx-auto w-full max-w-[1344px]";
