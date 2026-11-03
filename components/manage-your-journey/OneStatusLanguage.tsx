import Eyebrow from "./Eyebrow";

const IMG = "/manage-your-journey";

const audiences = [
  {
    title: "Patients",
    text: "Follow your own requests, referrals and messages.",
    image: `${IMG}/audience-patients.webp`,
  },
  {
    title: "Authorized proxies",
    text: "Help with verified, scoped authority.",
    image: `${IMG}/audience-proxies.webp`,
  },
  {
    title: "Provider coordinators",
    text: "See how each organization owns its statuses.",
    image: `${IMG}/audience-coordinators.webp`,
  },
  {
    title: "Safety reviewers",
    text: "Check that no status overstates what happened.",
    image: `${IMG}/audience-safety-reviewers.webp`,
  },
];

export default function OneStatusLanguage() {
  return (
    <section className="bg-white px-6 py-16 font-sans lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <Eyebrow>Who this is for</Eyebrow>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-4xl">
          One status language for everyone.
        </h2>
        <p className="mb-10 text-sm text-[#697386] md:text-base">
          A status means the same thing whoever reads it.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-[#E6EBF1] bg-white p-6 shadow-[0_6px_24px_rgba(10,37,64,0.08)]"
            >
              <img src={a.image} alt="" className="mb-5 h-14 w-14 rounded-xl object-cover" />
              <h3 className="mb-1 text-base font-bold text-[#0A2540]">{a.title}</h3>
              <p className="text-xs leading-relaxed text-[#697386] md:text-sm">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
