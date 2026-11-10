import { fontPoppins } from "@/components/find-care/fonts";

export const IMG = "/clinics-technology-adoption";
export const heading = `${fontPoppins} font-semibold`;

// Shared section shell. scroll-mt keeps anchor targets clear of the sticky site header.
export const section = "scroll-mt-36 px-6 py-16 lg:px-16";
export const container = "mx-auto w-full max-w-[1300px]";

// Small uppercase label with a short rule in front, used above section titles.
export function Eyebrow({
  children,
  tone = "violet",
  center = false,
}: {
  children: React.ReactNode;
  tone?: "violet" | "light";
  center?: boolean;
}) {
  const color = tone === "light" ? "text-white/80" : "text-[#7B5CF0]";
  const rule = tone === "light" ? "bg-white/80" : "bg-[#7B5CF0]";
  return (
    <div className={`mb-3 flex items-center gap-2.5 ${center ? "justify-center" : ""}`}>
      <span className={`h-0.5 w-5 ${rule}`} />
      <span className={`text-xs font-semibold uppercase tracking-widest ${color}`}>{children}</span>
    </div>
  );
}

// Eyebrow + h2 + optional intro.
export function SectionHeader({
  eyebrow,
  title,
  intro,
  dark = false,
  center = false,
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  intro?: React.ReactNode;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-[780px] text-center" : ""}>
      <Eyebrow tone={dark ? "light" : "violet"} center={center}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={`${fontPoppins} text-3xl font-semibold md:text-4xl md:leading-[48px] ${dark ? "text-white" : "text-[#16245A]"}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base leading-7 ${dark ? "text-white/75" : "text-[#5B6B8C]"} ${
            center ? "mx-auto max-w-[720px]" : "max-w-[720px]"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
