import Image from "next/image";

const icons = {
  users: { inset: "18.75% 10.42% 16.67% 10.42%", bleed: "-5.81% -4.74%" },
  clock: { inset: "12.5%", bleed: "-5%" },
  phone: { inset: "8.33% 29.17%", bleed: "-4.5% -9%" },
  alert: { inset: "12.5% 8.33%", bleed: "-5% -4.5%" },
  lock: { inset: "16.67% 20.83% 12.5% 20.83%", bleed: "-5.29% -6.43%" },
  folder: { inset: "20.83% 12.5%", bleed: "-6.43% -5%" },
  pin: { inset: "12.5% 20.83% 8.33% 20.83%", bleed: "-4.74% -6.43%" },
} as const;

export type IconName = keyof typeof icons;

/** 42px lavender tile holding a 22px line icon, placed as in Figma. */
export default function IconBadge({ name }: { name: IconName }) {
  const { inset, bleed } = icons[name];
  return (
    <span
      className="relative flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#f1eefe]"
      aria-hidden="true"
    >
      <span className="relative size-[22px] overflow-hidden">
        <span className="absolute" style={{ inset }}>
          <span className="absolute" style={{ inset: bleed }}>
            <Image
              src={`/discharge-transition-support/icon-${name}.svg`}
              alt=""
              fill
              sizes="22px"
              className="object-fill"
            />
          </span>
        </span>
      </span>
    </span>
  );
}
