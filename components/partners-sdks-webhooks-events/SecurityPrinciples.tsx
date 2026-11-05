import Link from "next/link";
import { IMG, SectionHeader, container, heading, section } from "./shared";

const principles = [
  {
    tag: "signing",
    title: "Signed payloads",
    text: "Receivers can verify an event came from the publisher.",
    img: "security-signing",
    alt: "Payloader machine in a quarry shed",
  },
  {
    tag: "tls",
    title: "Encrypted transport",
    text: "Events travel only over encrypted connections.",
    img: "security-tls",
    alt: "Two people watching encrypted data on screens",
  },
  {
    tag: "credentials",
    title: "Secure storage",
    text: "Secrets are stored securely, never in code.",
    img: "security-storage",
    alt: "Stacked steel safes",
  },
  {
    tag: "scopes",
    title: "Scoped subscriptions",
    text: "Subscribers get only the events they are approved for.",
    img: "security-scopes",
    alt: "Mailbox on an iron gate holding a single letter",
  },
  {
    tag: "replay",
    title: "Replay protection",
    text: "Old or repeated events are rejected.",
    img: "security-replay",
    alt: "Two security cameras on a striped wall",
  },
  {
    tag: "rotation",
    title: "Secret rotation",
    text: "Secrets change on schedule and after any compromise.",
    img: "security-rotation",
    alt: "Abstract rotating curved shapes",
  },
];

export default function SecurityPrinciples() {
  return (
    <section
      id="security"
      className={`bg-[#F5F8FC] bg-cover bg-center ${section}`}
      style={{ backgroundImage: `url(${IMG}/bg-security.webp)` }}
    >
      <div className={container}>
        <SectionHeader
          eyebrow="Security & authorization"
          title="Six principles every event follows."
          intro={
            <>
              Principles, not a protocol claim. Exact methods are agreed per integration.{" "}
              <Link href="/partners-integration-security" className="text-[#3D5BD9] underline hover:text-[#7B5CF0]">
                Read Integration Security →
              </Link>
            </>
          }
        />

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <li
              key={p.tag}
              className="rounded-2xl border border-[#E4E7F2] bg-white p-6 shadow-[0_10px_24px_rgba(36,59,115,0.08)]"
            >
              <img src={`${IMG}/${p.img}.webp`} alt={p.alt} className="aspect-[2/1] w-full object-cover" />
              <span className="mt-4 inline-block rounded bg-[#EEEAFE] px-2 py-0.5 text-xs text-[#7B5CF0]">
                {p.tag}
              </span>
              <h3 className={`${heading} mt-3 text-lg text-[#16245A]`}>{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5B6B8C]">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
