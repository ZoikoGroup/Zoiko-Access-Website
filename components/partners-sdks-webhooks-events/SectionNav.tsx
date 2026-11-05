const links = [
  { label: "SDKs", href: "#sdks" },
  { label: "Event model", href: "#event-model" },
  { label: "Lifecycle", href: "#lifecycle" },
  { label: "Security", href: "#security" },
  { label: "Environments", href: "#environments" },
  { label: "Delivery", href: "#delivery" },
  { label: "Versioning", href: "#versioning" },
  { label: "Data", href: "#data" },
  { label: "Errors", href: "#errors" },
  { label: "Checklist", href: "#checklist" },
  { label: "FAQ", href: "#faq" },
];

export default function SectionNav() {
  return (
    <nav aria-label="On this page" className="border-b border-[#E4E7F2] bg-white/95 px-6 backdrop-blur-sm">
      <ul className="mx-auto flex w-full max-w-[1300px] gap-1.5 overflow-x-auto py-2.5 lg:justify-center">
        {links.map((l) => (
          <li key={l.href} className="shrink-0">
            <a
              href={l.href}
              className="block rounded-full px-3.5 py-1.5 text-sm font-semibold text-[#243B73] transition-colors hover:bg-[#EEEAFE] hover:text-[#7B5CF0]"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
