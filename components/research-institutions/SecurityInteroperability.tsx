import { Eyebrow, heading } from "./shared";

// Stacked cards, each shifted a little further right, like a cascade.
const layers = [
  { title: "Qualification", text: "Institutions and systems qualified first", className: "bg-[#7B5CF0] lg:ml-0" },
  { title: "Access controls", text: "Least privilege, by role and purpose", className: "bg-[#5B5FD6] lg:ml-6" },
  { title: "Governed exchange", text: "Standards-based, encrypted, logged", className: "bg-[#4169D6] lg:ml-12" },
  { title: "Separation", text: "Kept apart from any public page", className: "bg-[#253B73] lg:ml-[72px]" },
];

export default function SecurityInteroperability() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <ol className="space-y-2 lg:pr-[72px]">
          {layers.map((l) => (
            <li
              key={l.title}
              className={`rounded-2xl px-6 py-6 text-white shadow-[0_14px_28px_rgba(36,59,115,0.20)] ${l.className}`}
            >
              <p className={`${heading} text-lg`}>{l.title}</p>
              <p className="text-sm opacity-90">{l.text}</p>
            </li>
          ))}
        </ol>

        <div>
          <Eyebrow>Security &amp; interoperability</Eyebrow>
          <h2 className={`${heading} mb-4 text-3xl text-[#16245A] md:text-[44px] md:leading-[1.15]`}>
            Governed exchange only after qualification.
          </h2>
          <p className="text-base leading-7 text-[#5B6B8C]">
            No datasets or participant details load on this page. Any future research portal would
            need its own approved specification and entitlement controls.
          </p>
        </div>
      </div>
    </section>
  );
}
