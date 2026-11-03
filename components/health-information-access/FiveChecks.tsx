const checks = [
  {
    title: "Verified identity",
    text: "You sign in where the service is enabled.",
    image: "/health-information-access/check-identity.webp",
  },
  {
    title: "Your permission",
    text: "You choose what may be requested.",
    image: "/health-information-access/check-permission.webp",
  },
  {
    title: "Source agreement",
    text: "The source organization takes part and allows it.",
    image: "/health-information-access/check-source-agreement.webp",
  },
  {
    title: "Local rules",
    text: "Access follows the law where you receive care.",
    image: "/health-information-access/check-local-rules.webp",
  },
  {
    title: "Shown with its source",
    text: "Each item names who holds it and when it was updated.",
    image: "/health-information-access/check-shown-with-source.webp",
  },
];

export default function FiveChecks() {
  return (
    <section className="bg-[#0A1A8C] px-6 py-16 font-sans text-white lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-[1px] w-8 bg-white/60" />
          <span className="text-xs font-bold uppercase tracking-wider text-white/80">
            How an authorized view is assembled
          </span>
        </div>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight md:text-4xl">
          Five checks before anything is shown.
        </h2>
        <p className="mb-10 text-sm text-white/75 md:text-base">
          Conceptual sequence. If any check fails, nothing is shown.
        </p>

        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {checks.map((c, i) => (
            <li
              key={c.title}
              className="flex flex-col rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
            >
              <img
                src={c.image}
                alt=""
                aria-hidden="true"
                className="mb-4 w-full rounded-xl"
              />
              <h3 className="mb-1 text-sm font-bold">
                <span className="sr-only">Step {i + 1}: </span>
                {c.title}
              </h3>
              <p className="mb-4 text-xs leading-relaxed text-white/70">
                {c.text}
              </p>
              {i < checks.length - 1 && (
                <span className="mt-auto w-fit rounded bg-white px-2 py-0.5 text-[10px] font-bold text-[#0A1A8C]">
                  Gate
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
