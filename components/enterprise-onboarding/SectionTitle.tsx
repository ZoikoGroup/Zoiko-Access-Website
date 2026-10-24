import type { ReactNode } from "react";
import { fontPoppins } from "./fonts";

type SectionTitleProps = {
  children: ReactNode;
  tone?: "dark" | "light";
};

export default function SectionTitle({
  children,
  tone = "dark",
}: SectionTitleProps) {
  return (
    <h2
      className={`${fontPoppins} w-full text-[30px] font-semibold leading-[35px] tracking-[-0.384px] lg:text-[38.4px] lg:leading-[43px] ${
        tone === "dark" ? "text-[#1b1750]" : "text-white"
      }`}
    >
      {children}
    </h2>
  );
}
