import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <div
      className={`flex w-full max-w-[538.28px] items-center gap-[10px] ${className}`}
    >
      <span
        className="block size-[8px] shrink-0 rounded-[4px] bg-[#8e7bef]"
        aria-hidden="true"
      />
      <p className="min-h-[15px] whitespace-nowrap text-[12px] font-semibold uppercase leading-[15px] tracking-[1.44px] text-[#5b49c8]">
        {children}
      </p>
    </div>
  );
}
