"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import SectionHeading from "./SectionHeading";

// Illustrative example content only — no real patient data or live service.
const threads = [
  {
    id: "visit",
    org: "Riverside Family Clinic",
    date: "Oct 18",
    title: "Follow-up on your recent visit",
    tags: ["Secure message", "Needs your action"],
    unread: true,
    kind: "message",
  },
  {
    id: "status",
    org: "Northgate Imaging",
    date: "Oct 16",
    title: "Your request status changed",
    tags: ["System notice", "Read-only"],
    unread: true,
    kind: "notice",
  },
  {
    id: "paperwork",
    org: "Riverside Family Clinic",
    date: "Oct 14",
    title: "Question about paperwork",
    tags: ["Secure message"],
    unread: false,
    kind: "message",
  },
  {
    id: "scheduling",
    org: "Northgate Imaging",
    date: "Sep 30",
    title: "Scheduling information",
    tags: ["Secure message", "Read-only"],
    unread: false,
    kind: "message",
  },
];

const filters = ["All", "Unread", "Needs your action"] as const;

const tagStyle = (tag: string) =>
  tag === "Needs your action"
    ? "border-[#F5B8B8] bg-[#FDECEC] text-[#B42318]"
    : "border-[#E4E3EE] bg-white text-[#5B6180]";

export default function ExampleInbox() {
  const [tab, setTab] = useState<"Messages" | "Notifications">("Messages");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");

  const visible = threads.filter((t) => {
    if (tab === "Notifications" && t.kind !== "notice") return false;
    if (filter === "Unread" && !t.unread) return false;
    if (filter === "Needs your action" && !t.tags.includes("Needs your action")) return false;
    const q = query.trim().toLowerCase();
    return !q || `${t.org} ${t.title}`.toLowerCase().includes(q);
  });

  return (
    <section id="example-inbox" className="w-full scroll-mt-24 bg-white py-[78px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Example signed-in view"
          title="Your messages & notifications"
          description="View updates from participating organizations. Replies, attachments and notifications depend on your care location and the organization responsible for your service."
          className="[&>p:last-child]:max-w-[1040px]"
        />

        <div className="mt-9 overflow-hidden rounded-2xl border border-[#E4E3EE] bg-white shadow-[0_14px_36px_rgba(29,42,107,0.08)]">
          {/* Header */}
          <div className="flex flex-col gap-4 border-b border-[#E4E3EE] bg-[#F7F7FB] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7C3AED] text-[14px] font-semibold text-white">
                MR
              </span>
              <div>
                <p className="text-[15px] font-semibold text-[#1D2A6B]">Viewing for: Maya R.</p>
                <span className="mt-1 inline-block rounded bg-[#E6F6EC] px-2 text-[12px] text-[#11643A]">
                  Verified caregiver · expires Jan 31, 2027
                </span>
              </div>
            </div>

            <div role="tablist" aria-label="Inbox view" className="flex self-start rounded-lg border border-[#E4E3EE] bg-white p-1 lg:self-auto">
              {(["Messages", "Notifications"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className={`rounded-md px-4 py-2 text-[14px] font-medium ${
                    tab === t ? "bg-[#1D2A6B] text-white" : "text-[#1D2A6B]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <p className="text-[12px] text-[#5B6180]">
              Updated as of Oct 19, 2026, 10:41 AM · 2 connected organizations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)]">
            {/* Thread list */}
            <div className="border-b border-[#E4E3EE] lg:border-b-0 lg:border-r">
              <div className="border-b border-[#E4E3EE] p-[15px]">
                <label className="relative block">
                  <span className="sr-only">Search organization or subject</span>
                  <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6180]" aria-hidden="true" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search organization or subject"
                    className="h-[42px] w-full rounded-lg border border-[#E4E3EE] pl-9 pr-3 text-[14px] text-[#1D2A6B] placeholder:text-[#5B6180] focus:border-[#7C3AED] focus:outline-none"
                  />
                </label>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {filters.map((f) => (
                    <button
                      key={f}
                      type="button"
                      aria-pressed={filter === f}
                      onClick={() => setFilter(f)}
                      className={`rounded-full border px-3 py-1.5 text-[13px] ${
                        filter === f
                          ? "border-[#B9A6F9] bg-[#F1EBFE] text-[#5B35D5]"
                          : "border-[#E4E3EE] text-[#1D2A6B]"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <ul>
                {visible.map((t) => (
                  <li
                    key={t.id}
                    className={`border-b border-[#E4E3EE] px-5 py-3.5 ${t.id === "paperwork" ? "bg-[#F1EBFE]" : ""}`}
                  >
                    <div className="flex items-center justify-between text-[12px] text-[#5B6180]">
                      <span className="flex items-center gap-1.5">
                        {t.unread && <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" aria-label="Unread" />}
                        {t.org}
                      </span>
                      {t.date}
                    </div>
                    <p className="mt-1.5 text-[15px] font-semibold text-[#1D2A6B]">{t.title}</p>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {t.tags.map((tag) => (
                        <span key={tag} className={`rounded-full border px-2 py-0.5 text-[11px] ${tagStyle(tag)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
                {visible.length === 0 && (
                  <li className="px-5 py-8 text-[14px] text-[#5B6180]">Nothing matches these filters.</li>
                )}
              </ul>
            </div>

            {/* Conversation */}
            <div className="flex flex-col">
              <div className="border-b border-[#E4E3EE] px-6 py-5">
                <p className="text-[12px] text-[#5B6180]">
                  Riverside Family Clinic · source: organization’s messaging system
                </p>
                <h3 className="mt-1 text-[20px] font-semibold text-[#1D2A6B] [font-family:var(--font-poppins)]">
                  Question about paperwork
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Secure message", "Replies allowed", "Last updated Oct 14"].map((tag) => (
                    <span key={tag} className="rounded-full border border-[#E4E3EE] px-2.5 py-0.5 text-[12px] text-[#5B6180]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 bg-[#FAFAFD] px-6 py-6">
                <div className="self-end rounded-xl bg-[#1D2A6B] px-4 py-3.5 text-white sm:max-w-[420px]">
                  <p className="text-[12px] text-[#C9CCE6]">You (for Maya R.)</p>
                  <p className="mt-1 text-[15px]">Hi, could you confirm which form you need me to bring?</p>
                </div>
                {[
                  <><strong className="font-semibold text-[#1D2A6B]">Submitted</strong> · Zoiko Access · Oct 14, 9:02 AM</>,
                  <><strong className="font-semibold text-[#1D2A6B]">Delivered to recipient system</strong> · reported by Riverside Family Clinic · 9:04 AM</>,
                  <>Read status isn’t reported by this organization.</>,
                ].map((line, i) => (
                  <p key={i} className="self-center rounded-full border border-dashed border-[#D9D8E6] bg-white px-3.5 py-1 text-center text-[12px] text-[#5B6180]">
                    {line}
                  </p>
                ))}
                <div className="self-start rounded-xl border border-[#E4E3EE] bg-white px-4 py-3.5 sm:max-w-[575px]">
                  <p className="text-[12px] text-[#5B6180]">Riverside Family Clinic · front desk</p>
                  <p className="mt-1 text-[15px] text-[#1D2A6B]">
                    Thanks for your message. Please bring the registration form we emailed earlier.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#E4E3EE] px-6 py-5">
                <p className="text-[13px] text-[#5B6180]">
                  To: <strong className="font-semibold text-[#1D2A6B]">Riverside Family Clinic</strong> · secure administrative channel
                </p>
                <label className="mt-2.5 block">
                  <span className="sr-only">Write your message</span>
                  <textarea
                    value={draft}
                    maxLength={1000}
                    onChange={(e) => setDraft(e.target.value)}
                    rows={3}
                    placeholder="Write your message"
                    className="w-full resize-none rounded-lg border border-[#E4E3EE] px-3 py-2.5 text-[14px] text-[#1D2A6B] placeholder:text-[#5B6180] focus:border-[#7C3AED] focus:outline-none"
                  />
                </label>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[12px] text-[#5B6180]">
                    {draft.length} / 1000 characters · Attachments not enabled for this organization
                  </p>
                  {/* Preview only: sending is disabled because no live service is connected. */}
                  <button
                    type="button"
                    disabled
                    title="Example view — messages can’t be sent from this page"
                    className="inline-flex min-h-[44px] cursor-not-allowed items-center rounded-lg bg-[#8B5CF6] px-5 text-[15px] font-semibold text-white"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
