import style from "./img.module.css";
import { getImageForArticle } from "./imports";
import { useState } from "react";

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
  full?: boolean;
}

export const Img = ({
  src,
  alt = "Image asset",
  className = "",
  deviceBorder = false,
  browserBorder = false,
  full = false,
  onLoad,
  ignoreShadow = true,
}: ImgProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src) return null;

  // Get image metadata directly during render
  const imageMetadata = getImageForArticle(src, import.meta.url);

  if (!imageMetadata) {
    return null;
  }

  const isSvg = src.includes(".svg");
  const pngData = imageMetadata.find((m) => m.format === "png");
  const avifData = imageMetadata.find((m) => m.format === "avif");

  const classNames = `${style.picture} ${deviceBorder ? style.deviceBorder : ""} ${
    full ? "full" : ""
  } ${browserBorder ? style.browserBorder : ""} ${className} ${isLoaded ? style.loaded : style.loading}`;

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  // Calculate aspect ratio values
  const width = pngData?.width || 0;
  const height = pngData?.height || 0;
  const aspectRatio = width / height;

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
      <picture
        className={classNames}
        style={
          {
            "--picture-w": width,
            "--picture-h": height,
            "--quantized-height": `round(up, calc(var(--container-width) / 1.1), 2rlh)`,
            height: "var(--quantized-height)",
          } as React.CSSProperties
        }
      >
        {avifData?.src && <source srcSet={avifData?.src} type="image/avif" />}
        <img
          loading="lazy"
          src={pngData?.src}
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
