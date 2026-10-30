type EyebrowProps = {
  children: React.ReactNode;
  tone?: "purple" | "light";
  className?: string;
};

export default function Eyebrow({
  children,
  tone = "purple",
  className = "",
}: EyebrowProps) {
  const color = tone === "light" ? "text-[#C9C2F5]" : "text-[#7C5CFC]";
  const line = tone === "light" ? "bg-[#C9C2F5]" : "bg-[#7C5CFC]";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className={`h-0.5 w-5 ${line}`} aria-hidden="true" />
      <span
        className={`text-xs font-semibold uppercase leading-5 tracking-[0.14em] ${color}`}
      >
        {children}
      </span>
    </div>
  );
}

export const headingFont = "[font-family:var(--font-poppins),sans-serif]";
