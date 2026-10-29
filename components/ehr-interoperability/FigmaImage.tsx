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
  box?: ImageBox;
  sizes: string;
  alt?: string;
  priority?: boolean;
};

/**
 * Places a picture inside a clipped frame exactly as the Figma crop does:
 * the picture is stretched to the given box, which may be larger than the
 * frame. The parent must be `relative` and `overflow-hidden`.
 */
export default function FigmaImage({
  src,
  box = {},
  sizes,
  alt = "",
  priority = false,
}: FigmaImageProps) {
  return (
    <div
      className="absolute"
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
