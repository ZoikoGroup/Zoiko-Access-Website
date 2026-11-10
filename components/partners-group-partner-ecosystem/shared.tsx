import { fontPoppins } from "@/components/find-care/fonts";

export const IMG = "/partners-group-partner-ecosystem";
export const heading = `${fontPoppins} font-semibold tracking-tight`;

// Shared section shell: horizontal padding + centered 1300px column.
export const section = "px-6 py-16 lg:px-16";
export const container = "mx-auto w-full max-w-[1300px]";

// Purple highlight used for the second half of most section titles.
export function Accent({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={light ? "text-[#B9A7F7]" : "text-[#7B5CF0]"}>{children}</span>;
}

// Small uppercase label with a short rule in front, used above section titles.
export function Eyebrow({
  children,
  light = false,
  purple = false,
}: {
  children: React.ReactNode;
  light?: boolean;
  purple?: boolean;
}) {
  const tone = light ? "text-[#C9D3F5]" : purple ? "text-[#7B5CF0]" : "text-[#5B6B8C]";
  const rule = light ? "bg-[#C9D3F5]" : purple ? "bg-[#7B5CF0]" : "bg-[#5B6B8C]";
  return (
    <div className="mb-3 flex items-center gap-2.5">
      <span className={`h-0.5 w-5 ${rule}`} />
      <span className={`text-xs font-semibold uppercase tracking-widest ${tone}`}>{children}</span>
    </div>
  );
}

// Two-column header: eyebrow + title on the left, intro text on the right (stacks on mobile).
export function SplitHeader({
  eyebrow,
  title,
  intro,
  purple = false,
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  intro?: React.ReactNode;
  purple?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-end lg:gap-12">
      <div>
        <Eyebrow purple={purple}>{eyebrow}</Eyebrow>
        <h2 className={`${heading} text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>{title}</h2>
      </div>
      {intro && <p className="text-base leading-7 text-[#5B6B8C] lg:pb-1">{intro}</p>}
    </div>
  );
}
