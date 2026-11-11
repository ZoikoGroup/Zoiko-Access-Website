"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const POPULAR = [
  { label: "Permissions", href: "/help/search?q=permissions" },
  { label: "Referrals", href: "/help/search?q=referrals" },
  { label: "Records", href: "/help/search?q=records" },
  { label: "Accessibility", href: "/help/search?q=accessibility" },
] as const;

const ACTIONS = [
  {
    label: "Explore help topics",
    href: "/help/topics",
    primary: true,
  },
  {
    label: "Frequently asked questions",
    href: "/help/faq",
    primary: false,
  },
] as const;

export default function HelpCenterHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#1c1a7a] via-[#1a2390] to-[#1b2ea8] text-white">
      {/* Image panel with curved left edge */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[48%] lg:block"
      >
        <div className="relative h-full w-full overflow-hidden rounded-l-[100%/50%]">
          <Image
            src="/help/1.png"
            alt=""
            fill
            sizes="48vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="max-w-[540px]">
          <p className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.12em] text-white/80">
            <span aria-hidden="true" className="h-px w-8 bg-white/70" />
            Resources / Help Center
          </p>

          <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            <span className="block">Find answers about</span>
            <span className="block text-[#a78bfa]">Zoiko Access</span>
          </h1>

          <p className="mt-6 text-base leading-7 text-white/85">
            Explore reviewed guidance about healthcare navigation, account
            permissions, organizations and supported steps. Available functions
            vary by location and service state.
          </p>

          <form
            role="search"
            action="/help/search"
            className="mt-8 flex items-center gap-3 rounded-xl bg-white p-2 pl-4 shadow-xl"
          >
            <label htmlFor="help-search" className="sr-only">
              Search public help articles
            </label>
            <input
              id="help-search"
              name="q"
              type="search"
              placeholder="Search public help articles"
              className="min-w-0 flex-1 bg-transparent text-sm text-[#1f2933] outline-none placeholder:text-[#6b7280]"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-[#7c5ce6] px-6 py-3 text-sm font-semibold text-white"
            >
              Search
            </button>
          </form>

          <p className="mt-3 text-sm text-white/70">
            Searches published help only. Please don&apos;t enter health
            details. We don&apos;t store what you type.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-white/80">Popular:</span>
            <ul className="flex flex-wrap gap-2">
              {POPULAR.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-block rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {ACTIONS.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={
                  action.primary
                    ? "inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#1c1a7a]"
                    : "inline-flex items-center gap-2 rounded-lg border border-white/60 px-5 py-3 text-sm font-semibold text-white"
                }
              >
                {action.label}
                {action.primary && (
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile image */}
        <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-2xl lg:hidden">
          <Image
            src="/help/1.png"
            alt="Colleagues gathered around a desk reviewing a document"
            fill
            sizes="90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
