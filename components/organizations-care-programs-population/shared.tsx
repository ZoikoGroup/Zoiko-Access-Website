import { fontPoppins } from "@/components/find-care/fonts";

export const IMG = "/organizations-care-programs-population";
export const heading = `${fontPoppins} font-semibold tracking-tight`;

// Small uppercase label with a short rule in front, used above section titles.
export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-3 flex items-center gap-2.5">
      <span className={`h-0.5 w-5 ${light ? "bg-[#DCE3FF]" : "bg-[#7B5CF0]"}`} />
      <span
        className={`text-xs font-semibold uppercase tracking-widest ${light ? "text-[#DCE3FF]" : "text-[#7B5CF0]"}`}
      >
        {children}
      </span>
    </div>
  );
}
