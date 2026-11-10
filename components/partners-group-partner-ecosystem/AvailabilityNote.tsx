export default function AvailabilityNote() {
  return (
    <aside className="border-b border-[#E4E7F2] bg-white px-6 py-5 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1300px] items-start gap-4">
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EEEAFE] text-sm font-bold text-[#7B5CF0]"
        >
          !
        </span>
        <p className="text-sm leading-6 text-[#2A3550]">
          <strong className="text-[#16245A]">Availability:</strong> These pages describe proposed or published
          integration principles. Technical access, partner intake and live connections depend on separate
          verification and authorization.
        </p>
      </div>
    </aside>
  );
}
