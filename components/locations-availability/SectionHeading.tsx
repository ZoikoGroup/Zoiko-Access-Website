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
    <div className={`max-w-[720px] ${className}`}>
      <p className="inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-wider text-[#4F3FC8]">
        <span
          className="block h-2 w-2 rounded-full bg-[#8B7CF0]"
          aria-hidden="true"
        />
        {badge}
      </p>

      <h2 className="mt-3.5 text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-[#211A5A] [font-family:var(--font-sora)] sm:text-[36px] sm:leading-[44px]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-[16px] leading-7 text-[#615D7E]">
          {description}
        </p>
      )}
    </div>
  );
}
