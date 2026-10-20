import type { ReactNode } from "react";

type SectionHeadingProps = {
  badge: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  center?: boolean;
};

export default function SectionHeading({
  badge,
  title,
  description,
  className = "",
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? "mx-auto text-center" : "max-w-[700px]"} ${className}`}>
      <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5B3FD1]">
        <span className="block h-1.5 w-1.5 rounded-full bg-[#A78BFA]" aria-hidden="true" />
        {badge}
      </p>

      <h2 className="mt-3 text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#1D1A5A] [font-family:var(--font-poppins)] sm:text-[40px] sm:leading-[44px]">
        {title}
      </h2>

      {description && (
        <p className={`mt-5 text-[16px] leading-[26px] text-[#5B5880] ${center ? "" : "max-w-[680px]"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
