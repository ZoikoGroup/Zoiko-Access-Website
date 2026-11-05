import { fontPoppins } from "@/components/find-care/fonts";

export const IMG = "/partners-system-integrators";
export const heading = `${fontPoppins} font-semibold tracking-tight`;

// Small uppercase label with a short rule in front, used above section titles.
// `num` adds the boxed section number shown on some sections (05, 07, 10).
export function Eyebrow({
  children,
  light = false,
  center = false,
  num,
}: {
  children: React.ReactNode;
  light?: boolean;
  center?: boolean;
  num?: string;
}) {
  const color = light ? "text-[#C9D3F5]" : "text-[#7B5CF0]";
  return (
    <div className={`mb-3 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      {num && (
        <span
          className={`rounded-sm border px-1.5 py-1 text-xs font-semibold ${
            light ? "border-[#C9D3F5] text-white" : "border-[#3D5BD9] text-[#3D5BD9]"
          }`}
        >
          {num}
        </span>
      )}
      <span className={`h-0.5 w-5 ${light ? "bg-[#C9D3F5]" : "bg-[#7B5CF0]"}`} />
      <span className={`text-xs font-semibold uppercase tracking-widest ${color}`}>{children}</span>
    </div>
  );
}
