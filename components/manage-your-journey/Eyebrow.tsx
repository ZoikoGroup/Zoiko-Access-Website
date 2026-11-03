export default function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className={`h-[1px] w-8 ${light ? "bg-white/60" : "bg-[#2F4DC0]"}`} />
      <span
        className={`text-xs font-bold uppercase tracking-wider ${light ? "text-white/80" : "text-[#2F4DC0]"}`}
      >
        {children}
      </span>
    </div>
  );
}
