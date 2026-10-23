import type { ReactNode } from "react";
import { fontPoppins } from "./fonts";

type SectionHeadingProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  /** Rendered line count on desktop; Figma boxes are 44px / 87px high. */
  desktopLines?: 1 | 2;
  /** Rendered line count on mobile; Figma boxes are 61.54px / 92px high. */
  mobileLines?: 2 | 3;
  /** Wider desktop measure (the safety heading is 862px). */
  wide?: boolean;
};

export default function SectionHeading({
  children,
  tone = "dark",
  desktopLines = 1,
  mobileLines = 2,
  wide = false,
}: SectionHeadingProps) {
  const mobileHeight =
    mobileLines === 3 ? "min-h-[92px]" : "min-h-[61.54px]";
  const desktopHeight =
    desktopLines === 2 ? "lg:min-h-[87px]" : "lg:min-h-[44px]";
  const measure = wide ? "lg:max-w-[862px]" : "lg:max-w-[588.02px]";

  return (
    <h2
      className={`${fontPoppins} w-full max-w-[412.96px] pb-[0.54px] text-[26.4px] font-bold leading-[30.36px] tracking-[-0.264px] lg:pb-0 lg:text-[37.6px] lg:leading-[43.24px] lg:tracking-[-0.376px] ${measure} ${mobileHeight} ${desktopHeight} ${
        tone === "dark" ? "text-[#241c59]" : "text-white"
      }`}
    >
      {children}
    </h2>
  );
}
