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
      <p className="text-[15px] font-semibold uppercase tracking-[0.04em] text-[#7C3AED]">
        {badge}
      </p>

      <h2 className="mt-3 text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0E1E6E] [font-family:var(--font-poppins)] sm:text-[40px] sm:leading-[46px]">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-[690px] text-[16px] leading-[27px] text-[#2C3352]">
          {description}
        </p>
      )}
    </div>
  );
}
