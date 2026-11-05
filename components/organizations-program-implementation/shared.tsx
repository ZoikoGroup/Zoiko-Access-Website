import { fontPoppins } from "@/components/find-care/fonts";

export const IMG = "/organizations-program-implementation";
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

// Empty checkbox drawn as a square, used where items are deliberately unchecked.
export function EmptyBox({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-6 w-6 shrink-0 rounded-md border-2 bg-white ${className}`}
    />
  );
}
