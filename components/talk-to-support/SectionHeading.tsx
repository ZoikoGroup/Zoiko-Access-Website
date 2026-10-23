import type { ReactNode } from "react";
import { fontPoppins } from "./fonts";

type SectionHeadingProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  /** Rendered line count on desktop; Figma boxes are 44px / 87px high. */
  desktopLines?: 1 | 2;
  /** Rendered line count on mobile; Figma boxes are 31px / 61.54px / 92px high. */
  mobileLines?: 1 | 2 | 3;
  /** Wider desktop measure (the safety heading needs 862px). */
  wide?: boolean;
};

const mobileHeights = {
  1: "min-h-[31px]",
  2: "min-h-[61.54px]",
  3: "min-h-[92px]",
} as const;

export default function SectionHeading({
  children,
  tone = "dark",
  desktopLines = 1,
  mobileLines = 2,
  wide = false,
}: SectionHeadingProps) {
  const desktopHeight =
    desktopLines === 2 ? "lg:min-h-[87px]" : "lg:min-h-[44px]";

  return (
    <h2
      className={`${fontPoppins} w-full max-w-[412.96px] pb-[0.54px] text-[26.4px] font-bold leading-[30.36px] tracking-[-0.264px] ${wide ? "lg:max-w-[862px]" : "lg:max-w-[588.02px]"} lg:pb-0 lg:text-[37.6px] lg:leading-[43.24px] lg:tracking-[-0.376px] ${mobileHeights[mobileLines]} ${desktopHeight} ${
        tone === "dark" ? "text-[#241c59]" : "text-white"
      }`}
    >
      {children}
    </h2>
  );
}
