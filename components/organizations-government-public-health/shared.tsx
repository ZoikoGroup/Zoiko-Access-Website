import { fontPoppins } from "@/components/find-care/fonts";

export const IMG = "/organizations-government-public-health";
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
      <span className={`h-0.5 w-5 ${light ? "bg-[#C9D3F5]" : "bg-[#7B5CF0]"}`} />
      <span
        className={`text-xs font-semibold uppercase tracking-widest ${light ? "text-[#C9D3F5]" : "text-[#7B5CF0]"}`}
      >
        {children}
      </span>
    </div>
  );
}

// Rounded pill used for owners, tags and status labels.
export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-[#EAF0FB] px-2.5 py-1 text-xs font-semibold text-[#2E2A8C]">
      {children}
    </span>
  );
}
