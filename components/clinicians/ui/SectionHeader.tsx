import type { ReactNode } from "react";
import { SectionEyebrow } from "./SectionEyebrow";

const titleSizes = {
  md: "text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48.3px]",
  lg: "text-[32px] leading-[40px] sm:text-[42px] sm:leading-[48.3px]",
} as const;

export type SectionTitleSize = keyof typeof titleSizes;

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  titleSize?: SectionTitleSize;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  titleSize = "md",
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-[13px] ${className}`}>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2
        className={`font-['Poppins',sans-serif] font-semibold tracking-[-0.84px] text-[#031974] ${titleSizes[titleSize]}`}
      >
        {title}
      </h2>
      {lead ? (
        <p className="max-w-[720px] font-['Inter',sans-serif] text-[18px] leading-[29.7px] text-[#273444]">
          {lead}
        </p>
      ) : null}
    </div>
  );
}