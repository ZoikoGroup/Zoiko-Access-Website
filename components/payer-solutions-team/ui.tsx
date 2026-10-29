import Image from "next/image";
import type { ReactNode } from "react";
import { fontPoppins } from "./fonts";

export const sectionPad = "px-4 sm:px-6 lg:px-8";
export const inner = "mx-auto w-full max-w-[1300px]";
export const sectionY = "py-12 lg:py-16";

/** Card frame shared by every photo card on this page. */
export const card =
  "overflow-hidden rounded-2xl border border-solid border-[#e3e8f2] bg-white shadow-[0_10px_30px_rgba(36,59,115,0.08)]";

/** Soft violet backdrop shown while a photo loads. */
export const photoBg = "bg-[linear-gradient(135deg,#dcd3fb_0%,#c7d3f5_100%)]";

/** Radial violet glow used by the dark sections. */
export const glow = (size: string, at: string) =>
  `radial-gradient(${size} at ${at},#b700dc 0%,rgba(167,22,223,0.75) 15%,rgba(151,44,226,0.5) 30%,rgba(118,87,232,0) 60%)`;

export const darkBg = "linear-gradient(215deg,#0a1a4b 52%,#3550b8 106%)";

/** Small uppercase label with the short leading line. */
export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "text-[#7657e8]" : "text-[#c9bdfb]";
  const line = tone === "dark" ? "bg-[#7657e8]" : "bg-[#c9bdfb]";
  return (
    <p className={`inline-flex items-center gap-2.5 text-[12px] font-semibold uppercase leading-5 tracking-[1.92px] ${color}`}>
      <span aria-hidden="true" className={`h-0.5 w-5 ${line}`} />
      {children}
    </p>
  );
}

export function Title({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <h2
      className={`${fontPoppins} text-[28px] font-semibold leading-[34px] tracking-[-0.3px] lg:text-[40px] lg:leading-[48px] ${
        tone === "dark" ? "text-[#16245a]" : "text-white"
      }`}
    >
      {children}
    </h2>
  );
}

export function Head({
  eyebrow,
  title,
  lead,
  tone = "dark",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <div className="flex w-full flex-col items-start gap-3.5">
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <Title tone={tone}>{title}</Title>
      {lead && (
        <p className={`max-w-[760px] text-[16px] leading-7 ${tone === "dark" ? "text-[#5b6678]" : "text-white/[0.88]"}`}>
          {lead}
        </p>
      )}
    </div>
  );
}

/** Small rounded tag used in the chip lists. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-solid border-[#e3e8f2] bg-[#f5f7fb] px-3 py-1.5 text-[13.5px] leading-5 text-[#2d3a52]">
      {children}
    </li>
  );
}

/** Light lavender background with the diagonal violet corner. */
export const lavenderBg =
  "conic-gradient(from 180deg at 100% 0%,#bfaefb 0deg,#cdbffc 52deg,#f3f0fe 52deg,#e3dbfd 90deg)";

/** Small round check used in every list on this page. */
export function Check() {
  return (
    <span
      aria-hidden="true"
      className="absolute left-0 top-[5px] flex size-4 items-center justify-center rounded-full bg-[#eee9fd]"
    >
      <svg viewBox="0 0 12 12" className="size-3" fill="none">
        <path d="M3 6.2 5 8l4-4" stroke="#7657e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/** Photo that fills its (relative) frame. */
export function Photo({
  src,
  alt,
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />;
}

export const img = (name: string) => `/payer-solutions-team/${name}.webp`;
