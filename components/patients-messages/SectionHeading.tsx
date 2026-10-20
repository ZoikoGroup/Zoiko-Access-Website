import type { ReactNode } from "react";

type SectionHeadingProps = {
  badge: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export default function SectionHeading({
  badge,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-[820px] ${className}`}>
      <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7C3AED]">
        <span className="block h-1.5 w-1.5 rounded-full bg-[#7C3AED]" aria-hidden="true" />
        {badge}
      </p>

      <h2 className="mt-3 text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1D2A6B] [font-family:var(--font-poppins)] sm:text-[40px] sm:leading-[48px]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-[640px] text-[16px] leading-[26px] text-[#5B6180]">
          {description}
        </p>
      )}
    </div>
  );
}
