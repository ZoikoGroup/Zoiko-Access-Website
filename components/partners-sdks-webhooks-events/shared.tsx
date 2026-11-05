import { fontPoppins } from "@/components/find-care/fonts";

export const IMG = "/partners-sdks-webhooks-events";
export const heading = `${fontPoppins} font-semibold tracking-tight`;

// Shared section shell. scroll-mt keeps anchor targets clear of the sticky site header.
export const section = "scroll-mt-36 px-6 py-16 lg:px-16";
export const container = "mx-auto w-full max-w-[1300px]";

// Small uppercase label with a short rule in front, used above section titles.
export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="mb-3 flex items-center gap-2.5">
      <span className={`h-0.5 w-5 ${light ? "bg-[#C9D3F5]" : "bg-[#7B5CF0]"}`} />
      <span
        className={`text-xs font-semibold uppercase tracking-widest ${light ? "text-[#C9D3F5]" : "text-[#7B5CF0]"}`}
      >
        {children}
      </span>
    </div>
  );
}

// Eyebrow + h2 + intro paragraph, the header used by most sections.
export function SectionHeader({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  intro?: React.ReactNode;
  light?: boolean;
}) {
  return (
    <>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`${heading} mb-3 text-3xl md:text-4xl md:leading-[48px] ${light ? "text-white" : "text-[#16245A]"}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`max-w-[720px] text-base leading-7 ${light ? "text-[#D7DEF5]" : "text-[#5B6B8C]"}`}>{intro}</p>
      )}
    </>
  );
}
