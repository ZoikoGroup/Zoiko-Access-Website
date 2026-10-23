"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

const channels = ["In app", "Email", "Text"] as const;
type Channel = (typeof channels)[number];

const categories: { name: string; text: string; defaults: Record<Channel, boolean> }[] = [
  { name: "New message", text: "From a connected organization", defaults: { "In app": true, Email: true, Text: false } },
  { name: "Request status change", text: "Updates on a supported request", defaults: { "In app": true, Email: false, Text: false } },
  { name: "Delivery problem", text: "A message couldn’t be delivered", defaults: { "In app": true, Email: true, Text: false } },
  { name: "Product news", text: "Optional, separate from care updates", defaults: { "In app": false, Email: false, Text: false } },
];

// In-app alerts for care updates are always on, so nobody relies on a single channel.
const isLocked = (category: string, channel: Channel) =>
  channel === "In app" && category !== "Product news";

export default function NotificationPreferences() {
  const [prefs, setPrefs] = useState(() =>
    Object.fromEntries(categories.map((c) => [c.name, { ...c.defaults }])),
  );
  const [saved, setSaved] = useState(false);

  const toggle = (name: string, channel: Channel) => {
    setSaved(false);
    setPrefs((p) => ({ ...p, [name]: { ...p[name], [channel]: !p[name][channel] } }));
  };

  return (
    <section className="w-full bg-white py-[78px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Notification preferences"
          title={
            <>
              Choose how you hear about updates.
              <br className="hidden sm:block" /> Details stay inside your account.
            </>
          }
        />

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,692fr)_minmax(0,360px)] lg:gap-x-[144px]">
          <div className="overflow-x-auto rounded-xl border border-[#E4E3EE]">
            <table className="w-full border-collapse text-left">
              <thead className="bg-[#F7F7FB]">
                <tr>
                  <th scope="col" className="px-3 py-4 text-[13px] sm:px-5 font-medium text-[#5B6180]">
                    Category
                  </th>
                  {channels.map((ch) => (
                    <th key={ch} scope="col" className="w-[52px] py-4 text-center text-[12px] sm:w-[78px] sm:text-[13px] font-medium text-[#5B6180]">
                      {ch}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <tr key={cat.name} className="border-t border-[#E4E3EE]">
                    <th scope="row" className="px-3 py-4 font-normal sm:px-5">
                      <span className="block text-[14px] font-semibold text-[#1D2A6B] sm:text-[15px]">{cat.name}</span>
                      <span className="mt-1 block text-[13px] text-[#5B6180]">{cat.text}</span>
                    </th>
                    {channels.map((ch) => {
                      const on = prefs[cat.name][ch];
                      const locked = isLocked(cat.name, ch);
                      return (
                        <td key={ch} className="py-4 text-center">
                          <button
                            type="button"
                            role="switch"
                            aria-checked={on}
                            aria-label={`${cat.name} by ${ch.toLowerCase()}`}
                            disabled={locked}
                            onClick={() => toggle(cat.name, ch)}
                            className={`relative inline-flex h-[26px] w-11 shrink-0 rounded-full transition-colors ${
                              on ? (locked ? "bg-[#C4B0F8]" : "bg-[#8B5CF6]") : "bg-[#D9DBE6]"
                            } ${locked ? "cursor-not-allowed" : ""}`}
                          >
                            <span
                              className={`absolute top-[3px] h-5 w-5 rounded-full bg-white shadow transition-[left] ${on ? "left-[21px]" : "left-[3px]"}`}
                            />
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E4E3EE] bg-[#F7F7FB] px-5 py-3.5">
              <p className="text-[13px] text-[#5B6180]" aria-live="polite">
                {saved
                  ? "Preview only — preferences are not saved anywhere."
                  : "In-app alerts stay on so you never rely on a single channel."}
              </p>
              <button
                type="button"
                onClick={() => setSaved(true)}
                className="inline-flex min-h-[44px] items-center rounded-lg bg-[#8B5CF6] px-5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Save preferences
              </button>
            </div>
          </div>

          <div>
            <div
              className="rounded-[22px] bg-gradient-to-b from-[#1D2A6B] to-[#4733B8] px-6 pb-6 pt-7"
              role="img"
              aria-label="Phone lock screen showing a generic Zoiko Access alert, and a crossed-out alert that names a test result, which is not allowed"
            >
              <p className="text-center text-[44px] font-semibold leading-none text-white">9:41</p>
              <p className="mt-3 text-center text-[13px] text-[#C9CCE6]">Monday, October 19</p>
              <div className="mt-6 rounded-xl bg-[#ECEBFA] px-3.5 py-3">
                <p className="text-[12px] text-[#5B6180]">ZOIKO ACCESS · now</p>
                <p className="mt-1 text-[14px] text-[#1D2A6B]">You have a new update. Sign in to view it.</p>
              </div>
              <div className="mt-3 rounded-xl bg-[#F6DCE3] px-3.5 py-3">
                <p className="flex justify-between text-[12px] text-[#5B6180]">
                  ZOIKO ACCESS · now
                  <span className="font-semibold text-[#B42318]">Not allowed</span>
                </p>
                <p className="mt-1 text-[14px] text-[#5B6180] line-through">Dr. Lee: your test results for…</p>
              </div>
            </div>
            <p className="mt-4 text-[13px] leading-[21px] text-[#5B6180]">
              Lock screens, emails and texts only ever show a generic preview. Names, results and medical topics appear after you sign in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
