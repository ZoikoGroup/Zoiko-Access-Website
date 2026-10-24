import type { ReactNode } from "react";

type SubProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

export default function Sub({
  children,
  tone = "dark",
  className = "",
}: SubProps) {
  return (
    <p
      className={`w-full max-w-[625.81px] pt-[9.19px] text-[16px] font-normal leading-[26.4px] ${
        tone === "dark" ? "text-[#575387]" : "text-[#e6e1ff]"
      } ${className}`}
    >
      {children}
    </p>
  );
}
