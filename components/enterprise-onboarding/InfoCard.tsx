import type { ReactNode } from "react";
import { fontPoppins } from "./fonts";

type InfoCardProps = {
  badge: string;
  title: ReactNode;
  children: ReactNode;
  featured?: boolean;
  /** Top padding of the title (Figma uses 2.85px or 3px). */
  titleTop?: string;
};

/** Numbered white card used for the capability states and the "does not say" list. */
export default function InfoCard({
  badge,
  title,
  children,
  featured = false,
  titleTop = "pt-[3px]",
}: InfoCardProps) {
  return (
    <article
      className={`flex w-full flex-col items-start overflow-clip rounded-[20px] border-solid bg-white lg:min-w-0 lg:flex-1 ${
        featured
          ? "border-2 border-[#6f3fec] shadow-[0px_14px_34px_0px_rgba(111,63,236,0.25)]"
          : "border border-[#e1dbf9] shadow-[0px_10px_28px_0px_rgba(27,23,80,0.1)]"
      }`}
    >
      <div className="flex w-full flex-col items-start gap-[6px] p-[22px]">
        <span
          className={`${fontPoppins} flex w-[38px] items-center justify-center rounded-[19px] bg-[#f1eefe] pb-[9.5px] pt-[8.5px] text-center text-[14.4px] font-semibold leading-[normal] text-[#6d4fe6]`}
        >
          {badge}
        </span>
        <h3
          className={`${fontPoppins} w-full pb-[0.7px] ${titleTop} text-[17.6px] font-semibold leading-[19.71px] text-[#1b1750]`}
        >
          {title}
        </h3>
        <p className="w-full text-[14.7px] font-normal leading-[24.29px] text-[#575387]">
          {children}
        </p>
      </div>
    </article>
  );
}
