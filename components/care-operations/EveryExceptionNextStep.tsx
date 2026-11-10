import React from "react";
import {
  Copy,
  MapPin,
  Clock,
  CalendarX,
  UserX,
  ShieldAlert,
} from "lucide-react";

interface ExceptionCard {
  title: string;
  description: string;
  actionText: string;
  icon: React.ReactNode;
}

const exceptionItems: ExceptionCard[] = [
  {
    title: "Duplicate referral",
    description: "The same referral arrives twice.",
    actionText: "Held for a person to merge or reject",
    icon: <Copy className="h-5 w-5 text-[#D97706]" />,
  },
  {
    title: "Wrong destination",
    description: "Sent to a team that doesn't handle it.",
    actionText: "Redirected, sender informed",
    icon: <MapPin className="h-5 w-5 text-[#D97706]" />,
  },
  {
    title: "Stale status",
    description: "A status hasn't updated in the expected time.",
    actionText: "Shown as unconfirmed, owner alerted",
    icon: <Clock className="h-5 w-5 text-[#D97706]" />,
  },
  {
    title: "Canceled slot",
    description: "The clinic cancels a confirmed appointment.",
    actionText: "Person told; clinic offers options",
    icon: <CalendarX className="h-5 w-5 text-[#D97706]" />,
  },
  {
    title: "Receiving team unavailable",
    description: "The next team can't take it on.",
    actionText: "Stays with current owner; alternatives sought",
    icon: <UserX className="h-5 w-5 text-[#D97706]" />,
  },
  {
    title: "Consent revoked",
    description: "The person withdraws permission.",
    actionText: "Sharing stops; teams informed",
    icon: <ShieldAlert className="h-5 w-5 text-[#D97706]" />,
  },
];

export default function EveryExceptionNextStep() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6F9FC] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
              — IF SOMETHING GOES WRONG
            </span>
          </div>

          <h2 className="mt-2 text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Every exception has a clear next step.
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Six situations, and what happens next. Nothing is quietly resolved.
          </p>
        </div>

        {/* 2x3 Grid of Exception Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exceptionItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] sm:p-7"
            >
              <div>
                {/* Icon Box with Light Amber/Yellow Background */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEF3C7]">
                  {item.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-[18px] font-bold text-[#0E1646]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[14px] text-[#475569]">
                  {item.description}
                </p>
              </div>

              {/* Resolution / Action Footer */}
              <div className="mt-6 pt-4 border-t border-[#F1F5F9]">
                <p className="font-mono text-[13px] font-medium text-[#7C3AED]">
                  &rarr; {item.actionText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
