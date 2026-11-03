import { ArrowRight } from "lucide-react";

const IMG = "/manage-your-journey";

const navItems = ["Appointments", "Referrals", "Messages", "Permissions"];

const requests = [
  {
    title: "Request to a clinic",
    meta: "Sent by you · awaiting the organization",
    status: "Submitted",
    tone: "bg-[#E8EDFF] text-[#3B5BDB]",
    avatar: `${IMG}/avatar-clinic-request.webp`,
  },
  {
    title: "Follow-up visit",
    meta: "Time held by the clinic · not yet confirmed",
    status: "Held",
    tone: "bg-[#FFF3D6] text-[#9A6B00]",
    avatar: `${IMG}/avatar-follow-up.webp`,
  },
  {
    title: "Specialist appointment",
    meta: "Confirmed by the provider",
    status: "Confirmed",
    tone: "bg-[#E3F7EA] text-[#1E7B43]",
    avatar: `${IMG}/avatar-specialist.webp`,
  },
];

const history = [
  { label: "Request sent", by: "By you", done: true },
  { label: "Delivered", by: "Organization's system", done: true },
  { label: "Reviewed", by: "Organization", done: false },
  { label: "Confirmed", by: "Provider only", done: false },
];

export default function JourneyHero() {
  return (
    <section className="relative overflow-hidden bg-[#02125F] px-6 pt-16 font-sans text-white lg:px-24 lg:pt-24">
      <img
        src={`${IMG}/hero-bg.webp`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-[2px] w-4 bg-white/70" />
          <span className="text-xs font-bold uppercase tracking-wider text-white/80">
            Patients / Manage your journey
          </span>
        </div>

        <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
          See every step. Know who{" "}
          <span className="text-[#B383FF]">owns it.</span>
        </h1>

        <p className="mb-3 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
          Appointments, referrals and messages each have their own status and
          their own owner. Zoiko Access is designed to show what has actually
          happened — never to suggest a request is a confirmation.
        </p>
        <p className="mb-8 text-xs text-white/60 md:text-sm">
          Preview only — no sign-in, records or live data on this page.
        </p>

        <div className="mb-14 flex flex-wrap justify-center gap-4">
          <a
            href="#journey-parts"
            className="group flex items-center gap-2 rounded-xl bg-[#7B61FF] px-6 py-4 text-sm font-bold text-white shadow-[0_4px_20px_rgba(123,97,255,0.35)] transition-all hover:bg-[#6A4FF5]"
          >
            Explore your journey
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#status-vocabulary"
            className="rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#0A1A8C] transition-all hover:bg-white/90"
          >
            What each status means
          </a>
        </div>

        {/* Example dashboard mockup */}
        <div
          role="img"
          aria-label="Example journey dashboard showing a submitted request, a held follow-up visit and a confirmed specialist appointment"
          className="w-full overflow-hidden rounded-t-2xl bg-white text-left text-[#0A2540] shadow-[0_-10px_50px_rgba(0,0,0,0.3)]"
        >
          <div className="flex items-center justify-between border-b border-[#E6EBF1] px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D0D5DD]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D0D5DD]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D0D5DD]" />
              <span className="ml-3 text-xs text-[#697386]">My journey</span>
            </div>
            <span className="rounded bg-[#FFF3D6] px-2 py-1 text-[10px] font-bold uppercase text-[#9A6B00]">
              Example — not live
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[160px_1fr_200px]">
            <ul className="hidden space-y-1 border-r border-[#E6EBF1] p-4 md:block">
              {navItems.map((n, i) => (
                <li
                  key={n}
                  className={`rounded-lg px-3 py-2 text-xs ${i === 0 ? "bg-[#EEF1FF] font-semibold text-[#2F4DC0]" : "text-[#697386]"}`}
                >
                  {n}
                </li>
              ))}
            </ul>

            <div className="p-5">
              <p className="mb-4 text-sm font-bold">Appointments &amp; requests</p>
              <ul className="divide-y divide-[#F0F2F5]">
                {requests.map((r) => (
                  <li key={r.title} className="flex items-center gap-3 py-3">
                    <img src={r.avatar} alt="" className="h-9 w-9 rounded-lg object-cover" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold">{r.title}</p>
                      <p className="truncate text-[11px] text-[#697386]">{r.meta}</p>
                    </div>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${r.tone}`}>
                      {r.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#E6EBF1] p-5 md:border-l md:border-t-0">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-wider text-[#697386]">
                Status history
              </p>
              <ol className="space-y-3">
                {history.map((h) => (
                  <li key={h.label} className="flex gap-2">
                    <span
                      className={`mt-0.5 h-3 w-3 shrink-0 rounded-full border-2 ${h.done ? "border-[#2F4DC0] bg-[#2F4DC0]" : "border-[#B0B8C4] bg-white"}`}
                    />
                    <div>
                      <p className="text-xs font-semibold">{h.label}</p>
                      <p className="text-[10px] text-[#697386]">{h.by}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
