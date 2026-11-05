import { fontPoppins } from "@/components/find-care/fonts";

export const IMG = "/partners-integration-security";
export const heading = `${fontPoppins} font-semibold tracking-tight`;

// Shared section shell. scroll-mt keeps anchor targets clear of the sticky site header.
export const section = "scroll-mt-36 px-6 py-16 lg:px-16";
export const container = "mx-auto w-full max-w-[1300px]";

// Small uppercase label with a short rule in front, used above section titles.
// `tone` switches between the violet (light bg) and mint (dark bg) variants.
export function Eyebrow({ children, tone = "violet" }: { children: React.ReactNode; tone?: "violet" | "mint" }) {
  const color = tone === "mint" ? "text-[#7EE0C3]" : "text-[#7B5CF0]";
  const rule = tone === "mint" ? "bg-[#7EE0C3]" : "bg-[#7B5CF0]";
  return (
    <div className="mb-3 flex items-center gap-2.5">
      <span className={`h-0.5 w-5 ${rule}`} />
      <span className={`text-xs font-semibold uppercase tracking-widest ${color}`}>{children}</span>
    </div>
  );
}

// Eyebrow + h2 + intro. `split` puts the intro to the right of the title on large screens.
export function SectionHeader({
  eyebrow,
  title,
  intro,
  dark = false,
  split = false,
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  intro?: React.ReactNode;
  dark?: boolean;
  split?: boolean;
}) {
  const h2 = (
    <h2
      className={`${fontPoppins} text-3xl font-semibold md:text-[39px] md:leading-[52px] ${dark ? "text-white" : "text-[#16245A]"}`}
    >
      {title}
    </h2>
  );
  const p = intro && (
    <p className={`text-base leading-7 ${dark ? "text-white/75" : "text-[#5B6B8C]"} ${split ? "max-w-[460px]" : "mt-4 max-w-[720px]"}`}>
      {intro}
    </p>
  );

  if (split) {
    return (
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Eyebrow tone={dark ? "mint" : "violet"}>{eyebrow}</Eyebrow>
          {h2}
        </div>
        {p}
      </div>
    );
  }
  return (
    <>
      <Eyebrow tone={dark ? "mint" : "violet"}>{eyebrow}</Eyebrow>
      {h2}
      {p}
    </>
  );
}
