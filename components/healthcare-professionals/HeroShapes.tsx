"use client";

import { useId } from "react";

type HeroShapesProps = {
  /** Height of the Figma hero frame; width is always 1440. */
  height: number;
  /** Deep-violet corner shape in the top right. */
  violetPath: string;
  /** Faint lavender curve that fades out toward the right. */
  arcPath: string;
  /** Horizontal range (frame x) over which the arc fades to white. */
  arcFade: [number, number];
};

/**
 * Soft violet hero background shapes, traced from the Figma frames.
 * Colours are pre-compensated for the hero texture image, which is drawn
 * on top with `mix-blend-multiply`.
 */
export default function HeroShapes({
  height,
  violetPath,
  arcPath,
  arcFade,
}: HeroShapesProps) {
  const id = useId();
  const violetId = `${id}-violet`;
  const arcId = `${id}-arc`;

  return (
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      viewBox={`0 0 1440 ${height}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={violetId} x1="1" y1="0" x2="0" y2="0">
          <stop offset="0" stopColor="#D0BFFD" />
          <stop offset="0.45" stopColor="#EFCEFE" />
          <stop offset="1" stopColor="#F0D5FD" />
        </linearGradient>
        <linearGradient
          id={arcId}
          gradientUnits="userSpaceOnUse"
          x1={arcFade[0]}
          y1="0"
          x2={arcFade[1]}
          y2="0"
        >
          <stop offset="0" stopColor="#F5F1FF" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      <path d={arcPath} fill={`url(#${arcId})`} />
      <path d={violetPath} fill={`url(#${violetId})`} />
    </svg>
  );
}
