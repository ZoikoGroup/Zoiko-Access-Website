import type { ReactNode } from "react";

type SectionHeadingProps = {
  badge: string;
  title: ReactNode;
  description?: string;
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
      <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase leading-4 tracking-wider text-[#6A44D4]">
        <span
          className="block h-1.5 w-1.5 rounded-full bg-[#6A44D4]"
          aria-hidden="true"
        />
        {badge}
      </p>

      <h2 className="mt-5 text-[30px] font-bold leading-[1.2] text-[#23327A] sm:text-[36px] sm:leading-10 tracking-[-0.04em]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-[16px] leading-7 text-[#5E6B85]">
          {description}
        </p>
      )}
    </div>
  );
}
