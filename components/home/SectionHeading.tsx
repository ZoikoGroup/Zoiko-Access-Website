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
    <div className={className}>
      <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#5F46C0]">
        <span
          className="block h-1.5 w-1.5 rounded-full bg-[#7C5CE8]"
          aria-hidden="true"
        />
        {badge}
      </p>

      <h2 className="mt-5 text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-[#243B73] [font-family:var(--font-poppins)] sm:text-[34px] sm:leading-[40px]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-[16px] leading-[26px] text-[#526174]">
          {description}
        </p>
      )}
    </div>
  );
}
