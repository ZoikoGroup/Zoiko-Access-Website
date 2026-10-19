import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type PhotoCardProps = {
  image: { src: string; alt: string };
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  /** Photo height relative to card width, e.g. "aspect-[420/232]". */
  aspect: string;
  sizes: string;
};

/** Card with a photo on top and a square icon badge overlapping its bottom edge. */
export default function PhotoCard({
  image,
  icon: Icon,
  title,
  children,
  aspect,
  sizes,
}: PhotoCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[#DCD6F5] bg-white shadow-[0_12px_30px_rgba(36,28,89,0.06)]">
      <div className={`relative w-full ${aspect}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="object-cover object-center"
        />
      </div>
      <div className="relative flex flex-1 flex-col px-[22px] pb-7 pt-10">
        <span className="absolute -top-6 left-[17px] flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-white bg-gradient-to-br from-[#2C3BBF] to-[#1A2591] text-white shadow-[0_6px_16px_rgba(26,37,145,0.35)]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-[20px] font-bold leading-7 tracking-[-0.01em] text-[#0E1E6E]">
          {title}
        </h3>
        {children}
      </div>
    </article>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="self-start rounded-full border border-[#E1D8FB] bg-[#F3EFFE] px-2.5 py-1 text-[12px] font-semibold text-[#7C3AED]">
      {children}
    </span>
  );
}
