import type { ReactNode } from "react";

type KickerProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

export default function Kicker({
  children,
  tone = "dark",
  className = "",
}: KickerProps) {
  return (
    <p
      className={`w-full max-w-[514.97px] text-[11.8px] font-semibold uppercase leading-[14px] tracking-[1.658px] ${
        tone === "dark" ? "text-[#6d4fe6]" : "text-[#cfc4ff]"
      } ${className}`}
    >
      {children}
    </p>
  );
}
