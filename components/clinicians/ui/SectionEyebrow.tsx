import type { ReactNode } from "react";

const tones = {
  light: { line: "bg-[#7b3ff2]", text: "text-[#7b3ff2]" },
  dark: { line: "bg-[#c9b8ff]", text: "text-[#c9b8ff]" },
} as const;

export type SectionTone = keyof typeof tones;

interface SectionEyebrowProps {
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
}

export function SectionEyebrow({
  children,
  tone = "light",
  className = "",
}: SectionEyebrowProps) {
  const palette = tones[tone];

  return (
    <div className={`flex items-center gap-[10px] pb-[0.63px] ${className}`}>
      <span
        aria-hidden="true"
        className={`h-[2px] w-[28px] shrink-0 ${palette.line}`}
      />
      <span
        className={`font-['Inter',sans-serif] text-[12.5px] font-bold leading-[20.63px] tracking-[1.25px] ${palette.text}`}
      >
        {children}
      </span>
    </div>
  );
}