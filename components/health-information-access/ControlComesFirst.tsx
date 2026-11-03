import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ControlComesFirst() {
  return (
    <section className="bg-gradient-to-r from-[#1A1F8F] to-[#3B2FC9] px-6 py-14 font-sans text-white lg:px-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight md:text-4xl">
            Control comes first.
          </h2>
          <p className="text-sm text-white/80">
            Learn how permissions work before any access is set up.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/privacy-permissions"
            className="group flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#0A1A8C] transition-all hover:bg-white/90"
          >
            Privacy &amp; permissions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/accessible-help"
            className="rounded-xl border border-white px-6 py-4 text-sm font-bold text-white transition-all hover:bg-white/10"
          >
            Accessible help
          </Link>
        </div>
      </div>
    </section>
  );
}
