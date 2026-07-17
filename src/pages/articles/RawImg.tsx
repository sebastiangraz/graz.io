import { useState } from "react";
import { useQuantizedHeight } from "@/hooks/useQuantizedHeight";

type RawImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

// Accepts CSS aspect-ratio values: 1.4, "1.4", "16 / 9"
const parseAspectRatio = (value?: string | number): number | null => {
  if (value == null || value === "") return null;
  if (typeof value === "number") return value > 0 ? value : null;
  const [w, h = "1"] = value.split("/");
  const ratio = parseFloat(w) / parseFloat(h);
  return Number.isFinite(ratio) && ratio > 0 ? ratio : null;
};

/**
 * Plain <img> with its height quantized to the line grid — for images the
 * srcset pipeline can't handle (animated AVIF, remote URLs). Aspect ratio is
 * taken from width/height attributes or style.aspectRatio when present,
 * otherwise measured from the image once it loads.
 */
export const RawImg = ({ style, width, height, onLoad, ...props }: RawImgProps) => {
  const [naturalRatio, setNaturalRatio] = useState<number | null>(null);

  const attrRatio = Number(width) > 0 && Number(height) > 0 ? Number(width) / Number(height) : null;
  const aspectRatio = attrRatio ?? parseAspectRatio(style?.aspectRatio) ?? naturalRatio;

  const { quantizedHeight, elementRef } = useQuantizedHeight<HTMLImageElement>(aspectRatio);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    if (img.naturalWidth && img.naturalHeight) {
      setNaturalRatio(img.naturalWidth / img.naturalHeight);
    }
    onLoad?.(e);
  };

  return (
    <img
      ref={elementRef}
      width={width}
      height={height}
      {...props}
      onLoad={handleLoad}
      style={{
        display: "block",
        width: "100%",
        objectFit: "cover",
        ...style,
        height: quantizedHeight ?? style?.height,
      }}
    />
  );
};

RawImg.displayName = "RawImg";
