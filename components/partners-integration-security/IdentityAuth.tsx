import { IMG, Eyebrow, container, heading, section } from "./shared";

const identities = [
  { title: "Machine identity", text: "Each connecting system has its own credentials, never shared." },
  { title: "Organization identity", text: "The legal organization behind the system is verified." },
  { title: "Credential boundary", text: "Credentials stay with the system they were issued to, stored securely." },
];

export default function IdentityAuth() {
  return (
    <section className={`bg-[#F5F8FC] ${section}`}>
      <div
        className={`${container} grid grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(36,59,115,0.08)] lg:grid-cols-[542px_minmax(0,1fr)]`}
      >
        <img
          src={`${IMG}/identity.webp`}
          alt="Technology professional verifying system access"
          className="h-72 w-full object-cover object-top lg:h-full"
        />
        <div className="px-6 py-10 md:px-11 md:py-12">
          <Eyebrow>Identity &amp; authentication</Eyebrow>
          <h2 className={`${heading} text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>
            Know exactly who is connecting.
          </h2>
          <dl className="mt-4">
            {identities.map((i) => (
              <div
                key={i.title}
                className="grid grid-cols-1 gap-1 border-b border-[#E4E7F2] py-4 sm:grid-cols-[200px_1fr] sm:gap-4"
              >
                <dt className={`${heading} text-base text-[#16245A]`}>{i.title}</dt>
                <dd className="text-sm leading-6 text-[#5B6B8C]">{i.text}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 inline-block rounded-full bg-[#EEEAFE] px-3.5 py-2 text-sm font-semibold text-[#243B73]">
            ✓ Every identity needs approval before it can connect
          </p>
        </div>
      </div>
    </section>
  );
}
