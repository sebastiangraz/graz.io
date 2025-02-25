import type { OutputMetadata } from "@/types/blog";
import style from "./img.module.css";
import { getImageForArticle } from "./imports";
import { useEffect, useState } from "react";

interface ImgProps {
  src: string;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  /**
   * @description requires the top asset whitespace to match the shadow height. If the bottom shadow is 32px, the top asset whitespace should be 32px too.
   */
  ignoreShadow?: boolean;
  deviceBorder?: boolean;
  browserBorder?: boolean;
  className?: string;
  alt?: string;
}

export const Img = ({
  src,
  alt = "Image asset",
  className = "",
  deviceBorder = false,
  browserBorder = false,
}: ImgProps) => {
  const [imageMetadata, setImageMetadata] = useState<any>(null);

  useEffect(() => {
    if (!src) return;

    // Find the image using context from URL
    const metadata = getImageForArticle(src, import.meta.url);
    setImageMetadata(metadata);
  }, [src]);

  if (!src) return null;

  if (!imageMetadata) {
    return null;
  }

  const isSvg = src.includes(".svg");
  const meta = imageMetadata as OutputMetadata[];
  const pngData = meta?.find((m) => m.format === "png") as OutputMetadata;
  const avifData = meta?.find((m) => m.format === "avif") as OutputMetadata;

  const classNames = `${style.picture} ${deviceBorder ? style.deviceBorder : ""} ${
    browserBorder ? style.browserBorder : ""
  } ${className}`;

  if (isSvg) {
    return <img loading="lazy" src={pngData?.src} alt={alt} />;
  } else {
    return (
      <picture
        className={classNames}
        style={{ "--picture-w": pngData?.width, "--picture-h": pngData?.height } as React.CSSProperties}
      >
        {avifData?.src && <source srcSet={avifData?.src} type="image/avif" />}
        <img loading="lazy" src={pngData?.src} alt={alt} width={pngData?.width} height={pngData?.height} />
      </picture>
    );
  }
};

Img.displayName = "Img";
