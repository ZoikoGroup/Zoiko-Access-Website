import Image from "next/image";

export type ImageBox = {
  /** Position and size of the picture inside its frame, in percent of the frame. */
  left?: number;
  top?: number;
  width?: number;
  height?: number;
};

type FigmaImageProps = {
  src: string;
  /** Crop from the 1440px frame (and everywhere when `mbox` is not given). */
  box?: ImageBox;
  /** Crop from the 390px frame, used below the `lg` breakpoint. */
  mbox?: ImageBox;
  sizes: string;
  alt?: string;
  priority?: boolean;
};

function Picture({
  src,
  box = {},
  sizes,
  alt,
  priority,
  className,
}: {
  src: string;
  box?: ImageBox;
  sizes: string;
  alt: string;
  priority: boolean;
  className: string;
}) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        left: `${box.left ?? 0}%`,
        top: `${box.top ?? 0}%`,
        width: `${box.width ?? 100}%`,
        height: `${box.height ?? 100}%`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-fill"
      />
    </div>
  );
}

/**
 * Places a picture inside a clipped frame exactly as the Figma crop does:
 * the picture is stretched to the given box, which may be larger than the
 * frame. When the desktop and mobile frames crop differently, pass both
 * boxes. The parent must be `relative` and `overflow-hidden`.
 */
export default function FigmaImage({
  src,
  box,
  mbox,
  sizes,
  alt = "",
  priority = false,
}: FigmaImageProps) {
  if (!mbox) {
    return (
      <Picture
        src={src}
        box={box}
        sizes={sizes}
        alt={alt}
        priority={priority}
        className=""
      />
    );
  }
  return (
    <>
      <Picture
        src={src}
        box={box}
        sizes={sizes}
        alt={alt}
        priority={priority}
        className="hidden lg:block"
      />
      <Picture
        src={src}
        box={mbox}
        sizes={sizes}
        alt={alt}
        priority={priority}
        className="lg:hidden"
      />
    </>
  );
}
