import Eyebrow from "./Eyebrow";

const IMG = "/manage-your-journey";

const cards = [
  {
    title: "Your own items",
    text: "Visible to you after verified sign-in, where enabled.",
    image: `${IMG}/privacy-own-items.webp`,
    alt: "Person using a laptop",
  },
  {
    title: "Authorized proxies",
    text: "Only with verified, scoped authority — never from family relationship alone.",
    image: `${IMG}/privacy-proxies.webp`,
    alt: "Typewriter with a page reading Privacy Policy",
  },
  {
    title: "Reminders you choose",
    text: "Opt-in only, with discreet previews on shared screens.",
    image: `${IMG}/privacy-reminders.webp`,
    alt: "Smiling person reading a reminder",
  },
];

export default function YouDecideWhoSees() {
  return (
    <section className="bg-white px-6 py-16 font-sans lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <Eyebrow>Privacy, consent &amp; authority</Eyebrow>
        <h2 className="mb-10 text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-4xl">
          You decide who sees your journey.
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="overflow-hidden rounded-2xl border border-[#E6EBF1] bg-white shadow-[0_6px_24px_rgba(10,37,64,0.06)]"
            >
              <img src={c.image} alt={c.alt} className="h-52 w-full object-cover" />
              <div className="p-6">
                <h3 className="mb-1 text-base font-bold text-[#0A2540]">{c.title}</h3>
                <p className="text-xs leading-relaxed text-[#697386] md:text-sm">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
