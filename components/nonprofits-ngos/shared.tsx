import { fontPoppins } from "@/components/find-care/fonts";

export const IMG = "/nonprofits-ngos";
export const heading = `${fontPoppins} font-semibold tracking-tight`;

// Small uppercase label followed by a thin rule, used above section titles.
export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-3 flex items-center gap-3.5">
      <span
        className={`text-xs font-bold uppercase tracking-widest ${light ? "text-white" : "text-[#7B5CF0]"}`}
      >
        {children}
      </span>
      <span className={`h-px flex-1 ${light ? "bg-white/40" : "bg-[#DCD9F7]"}`} />
    </div>
  );
}
