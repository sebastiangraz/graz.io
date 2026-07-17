import style from "./img.module.css";
import { getImageForArticle } from "./imports";
import { useState } from "react";
import { useQuantizedHeight } from "@/hooks/useQuantizedHeight";

interface ImgProps {
  src: string;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  deviceBorder?: boolean;
  browserBorder?: boolean;
  className?: string;
  alt?: string;
  full?: boolean;
  sizes?: string;
}

// Widths may repeat when a srcset rung exceeded the source image and was
// reverted to the original size — keep one entry per width.
const toSrcSet = (entries: { src: string; width: number }[]) => {
  const seen = new Set<number>();
  return entries
    .filter((m) => !seen.has(m.width) && seen.add(m.width))
    .map((m) => `${m.src} ${m.width}w`)
    .join(", ");
};

export const Img = ({
  src,
  alt = "Image asset",
  className = "",
  deviceBorder = false,
  browserBorder = false,
  full = false,
  sizes,
  onLoad,
}: ImgProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src) return null;

  // Get image metadata directly during render
  const imageMetadata = getImageForArticle(src, import.meta.url);

  if (!imageMetadata) {
    return null;
  }

  const isSvg = src.includes(".svg");
  const pngEntries = imageMetadata.filter((m) => m.format === "png").sort((a, b) => a.width - b.width);
  const avifEntries = imageMetadata.filter((m) => m.format === "avif").sort((a, b) => a.width - b.width);
  // Largest rung carries the intrinsic dimensions and serves as the src fallback
  const pngData = pngEntries[pngEntries.length - 1];
  const pngSrcSet = toSrcSet(pngEntries);
  const avifSrcSet = toSrcSet(avifEntries);

  // "auto" lets browsers that support it (lazy-loaded images) use the actual
  // rendered width — e.g. ImageRow cells; others fall back to the layout-derived
  // value: full-bleed spans min(100vw, 1800px), regular images span 10 of 12
  // grid columns, or 6 above the --2 breakpoint (68em) capped at 900px.
  const fallbackSizes =
    sizes ?? (full ? "min(100vw, 1800px)" : "(min-width: 68em) min(50vw, 900px), 83.34vw");
  const sizesAttr = `auto, ${fallbackSizes}`;

  const classNames = `${style.picture} ${deviceBorder ? style.deviceBorder : ""} ${
    full ? "full" : ""
  } ${browserBorder ? style.browserBorder : ""} ${className} ${isLoaded ? style.loaded : style.loading}`;

  // Calculate aspect ratio values
  const width = pngData?.width || 0;
  const height = pngData?.height || 0;

  const { quantizedHeight, elementRef } = useQuantizedHeight(width && height ? width / height : null);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  const pictureStyle = {
    "--picture-w": width,
    "--picture-h": height,
    height: quantizedHeight || "auto",
    display: "block", // Ensure proper layout flow
  } as React.CSSProperties;

  if (isSvg) {
    return (
      <img
        loading="lazy"
        src={pngData?.src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.3s ease" }}
      />
    );
  } else {
    return (
      <picture ref={elementRef} className={classNames} style={pictureStyle}>
        {avifSrcSet && <source srcSet={avifSrcSet} sizes={sizesAttr} type="image/avif" />}
        <img
          loading="lazy"
          src={pngData?.src}
          srcSet={pngSrcSet || undefined}
          sizes={pngSrcSet ? sizesAttr : undefined}
          alt={alt}
          width={pngData?.width}
          height={pngData?.height}
          onLoad={handleImageLoad}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.3s ease",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </picture>
    );
  }
};

Img.displayName = "Img";
