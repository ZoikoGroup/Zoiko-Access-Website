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
    <div className={`max-w-[680px] ${className}`}>
      <p className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5B45D6]">
        <span
          className="block h-2 w-2 rounded-full bg-[#A996F5]"
          aria-hidden="true"
        />
        {badge}
      </p>

      <h2 className="mt-3 text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#1D1857] [font-family:var(--font-poppins)] sm:text-[40px] sm:leading-[44px]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-[16px] leading-[26px] text-[#5B5880]">
          {description}
        </p>
      )}
    </div>
  );
}
