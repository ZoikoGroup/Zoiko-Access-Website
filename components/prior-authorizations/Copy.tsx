import { Fragment } from "react";

type CopyProps = {
  /** Full text. Defaults to the desktop (or mobile) lines joined by spaces. */
  text?: string;
  /** Manual line breaks from the 1440px Figma frame (applied at >=1400px). */
  d?: string[];
  /** Manual line breaks from the 390px Figma frame (applied at 385-430px). */
  m?: string[];
};

const DESKTOP = "hidden min-[1400px]:block";
const MOBILE = "hidden min-[385px]:max-[430px]:block";
const BOTH = "hidden min-[385px]:max-[430px]:block min-[1400px]:block";

/** Character offsets where each line (except the last) ends inside `text`. */
function breakOffsets(text: string, lines?: string[]): number[] {
  if (!lines) return [];
  const offsets: number[] = [];
  let position = 0;
  for (let i = 0; i < lines.length - 1; i += 1) {
    const index = text.indexOf(lines[i], position);
    if (index < 0) continue;
    position = index + lines[i].length;
    offsets.push(position);
  }
  return offsets;
}

/**
 * One copy string that carries the manual line breaks of both Figma frames.
 * Edit the text once and it updates in the desktop and the mobile view; the
 * breaks only show at the design widths, everywhere else the text wraps.
 */
export default function Copy({ text, d, m }: CopyProps) {
  const full = text ?? (d ?? m ?? []).join(" ");
  const desktop = new Set(breakOffsets(full, d));
  const mobile = new Set(breakOffsets(full, m));
  const points = [...new Set([...desktop, ...mobile])].sort((a, b) => a - b);

  const edges = [0, ...points, full.length];
  const parts = edges.slice(0, -1).map((from, index) => {
    const to = edges[index + 1];
    const point = points[index];
    const isLast = index === edges.length - 2;
    const className =
      desktop.has(point) && mobile.has(point)
        ? BOTH
        : desktop.has(point)
          ? DESKTOP
          : MOBILE;
    return (
      <Fragment key={from}>
        {full.slice(from, to)}
        {!isLast && <br className={className} />}
      </Fragment>
    );
  });

  return <>{parts}</>;
}
