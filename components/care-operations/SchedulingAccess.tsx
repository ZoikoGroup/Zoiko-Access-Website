import { CalendarCheck, Check, Clock, Mail } from "lucide-react";

const STEPS = [
  {
    title: "Service information",
    description: "The person learns what the clinic offers and how to ask.",
    owner: "Owner: clinic content",
    confirmed: false,
  },
  {
    title: "Inquiry or request",
    description: "A request is sent. It is not yet an appointment.",
    owner: "Owner: requester",
    confirmed: false,
  },
  {
    title: "Scheduler review",
    description:
      "The clinic's own scheduler checks availability and suitability.",
    owner: "Owner: clinic scheduler",
    confirmed: false,
  },
  {
    title: "Confirmed slot",
    description:
      "Only the clinic's scheduling system confirms the appointment.",
    owner: "Owner: clinic scheduling system",
    confirmed: true,
  },
] as const;

const CALENDAR_CELLS = [
  { id: 1, selected: false },
  { id: 2, selected: false },
  { id: 3, selected: false },
  { id: 4, selected: false },
  { id: 5, selected: false },
  { id: 6, selected: false },
  { id: 7, selected: true },
  { id: 8, selected: false },
  { id: 9, selected: false },
  { id: 10, selected: false },
  { id: 11, selected: false },
] as const;

function CalendarIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-[420px]">
      {/* Background circle */}
      <div className="absolute inset-[8%] rounded-full bg-[#ece8fb]" />

      {/* Envelope */}
      <div className="absolute left-[2%] top-[22%] z-20 flex h-[15%] w-[25%] items-center justify-center rounded-lg border-2 border-[#4f6fe0] bg-white">
        <Mail className="h-7 w-7 text-[#4f6fe0]" aria-hidden="true" />
      </div>

      {/* Clock */}
      <div className="absolute right-[3%] top-[14%] z-20 flex h-[17%] w-[17%] items-center justify-center rounded-full border-[3px] border-[#2b3a7d] bg-white">
        <Clock className="h-7 w-7 text-[#2b3a7d]" aria-hidden="true" />
      </div>

      {/* Calendar */}
      <div className="absolute left-[16%] top-[34%] z-10 h-[46%] w-[66%] overflow-hidden rounded-2xl border-[3px] border-[#2b3a7d] bg-white">
        <div className="h-[28%] w-full bg-[#7c5ce6]" />
        <div className="grid grid-cols-4 gap-[8%] px-[8%] pt-[7%]">
          {CALENDAR_CELLS.map((cell) => (
            <span
              key={cell.id}
              className={
                cell.selected
                  ? "aspect-[4/3] rounded-md bg-[#3f63d8]"
                  : "aspect-[4/3] rounded-md bg-[#d9d2f7]"
              }
            />
          ))}
        </div>
      </div>

      {/* Calendar rings */}
      <span className="absolute left-[27%] top-[29%] z-20 h-[10%] w-[2.5%] rounded-full bg-[#2b3a7d]" />
      <span className="absolute left-[66%] top-[29%] z-20 h-[10%] w-[2.5%] rounded-full bg-[#2b3a7d]" />

      {/* Check badge */}
      <div className="absolute bottom-[16%] right-[14%] z-20 flex h-[18%] w-[18%] items-center justify-center rounded-full bg-[#1f7a4d]">
        <Check
          className="h-9 w-9 text-white"
          strokeWidth={3}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default function SchedulingAccess() {
  return (
    <section className="w-full overflow-x-hidden bg-[#F6F9FC] px-6 py-12 text-[#1b2559] sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        {/* Illustration */}
        <figure className="flex flex-col items-center">
          <CalendarIllustration />
          <figcaption className="mt-2 text-sm text-[#5d6683]">
            Illustrative · not a live calendar
          </figcaption>
        </figure>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-6 bg-[#7c5ce6]" />
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#7c5ce6]">
              Scheduling &amp; Patient Access
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            A request is not a booking.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#5d6683]">
            Four steps. Only the last one, done by the clinic, is a confirmed
            appointment.
          </p>

          <ol className="mt-8 space-y-4">
            {STEPS.map((step, index) => (
              <li key={step.title} className="relative">
                <div className="flex items-start gap-4 rounded-2xl border border-[#e3e8f0] bg-white p-5 shadow-sm">
                  <span
                    className={
                      step.confirmed
                        ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1f7a4d]"
                        : "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#efeafd]"
                    }
                  >
                    {step.confirmed && (
                      <CalendarCheck
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold leading-6">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-[#5d6683]">
                      {step.description}
                    </p>
                    <p className="mt-2 text-sm font-medium text-[#3b5bdb]">
                      {step.owner}
                    </p>
                  </div>
                </div>
                {index < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-4 left-9 h-4 w-0.5 bg-[#7c5ce6]/70"
                  />
                )}
              </li>
            ))}
          </ol>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#e3e8f0] bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#7c5ce6]" />
            <p className="text-sm font-semibold">
              The local scheduler keeps authority at every step
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
