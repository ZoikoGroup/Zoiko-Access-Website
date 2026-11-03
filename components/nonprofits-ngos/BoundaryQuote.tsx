import { heading } from "./shared";

export default function BoundaryQuote() {
  return (
    <section className="bg-[#F7F6FE] px-6 py-16 lg:px-16">
      <figure className="mx-auto max-w-[900px] text-center">
        <blockquote className={`${heading} mb-3.5 text-2xl leading-snug text-[#16245A] md:text-4xl`}>
          &ldquo;An NGO can open the door.{" "}
          <span className="text-[#7B5CF0]">Clinical decisions</span> stay with
          licensed providers.&rdquo;
        </blockquote>
        <figcaption className="text-sm text-[#5B6B8C]">
          The boundary behind every NGO pathway
        </figcaption>
      </figure>
    </section>
  );
}
