const scenarios = [
  {
    title: "A result appears with its source",
    text: "The lab is named, with the date it was reported. Questions about meaning go to your provider.",
    tag: "Source shown",
    image: "/health-information-access/scenario-result-source.webp",
    alt: "Two people pointing at a laptop screen",
  },
  {
    title: "A source isn't connected",
    text: "The page says so plainly — it never suggests a record doesn't exist.",
    tag: "Not connected",
    image: "/health-information-access/scenario-not-connected.webp",
    alt: "Clinician in a white coat",
  },
  {
    title: "A caregiver needs to help",
    text: "They see only what you've authorized, once their authority is verified.",
    tag: "Scoped access",
    image: "/health-information-access/scenario-caregiver.webp",
    alt: "Nurse comforting a person with a hug",
  },
];

export default function AccessScenarios() {
  return (
    <section className="bg-white px-6 py-16 font-sans lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-[1px] w-8 bg-[#2F4DC0]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#2F4DC0]">
            Educational scenarios
          </span>
        </div>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-4xl">
          How access could look.
        </h2>
        <p className="mb-12 text-sm text-[#697386] md:text-base">
          Illustrative only — no real people or records.
        </p>

        <div className="space-y-16">
          {scenarios.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={s.title}
                className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
              >
                <div
                  className={`relative mx-auto w-full max-w-[420px] ${flip ? "md:order-2" : ""}`}
                >
                  <div className="aspect-square overflow-hidden rounded-[45%_55%_50%_50%/50%_45%_55%_50%] shadow-[0_12px_40px_rgba(10,37,64,0.12)]">
                    <img
                      src={s.image}
                      alt={s.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-4 h-16 w-16 rounded-full bg-[#ECE8FF] ${flip ? "-right-4" : "right-2"}`}
                  />
                </div>

                <div className={flip ? "md:order-1" : ""}>
                  <h3 className="mb-2 text-xl font-bold text-[#0A2540]">
                    {s.title}
                  </h3>
                  <p className="mb-4 max-w-md text-sm leading-relaxed text-[#697386]">
                    {s.text}
                  </p>
                  <span className="rounded-full bg-[#EEF1FF] px-3 py-1 text-[11px] font-semibold text-[#2F4DC0]">
                    {s.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
