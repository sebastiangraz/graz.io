import style from "./img.module.css";
import { getImageForArticle } from "./imports";

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
}: ImgProps) => {
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
  } ${browserBorder ? style.browserBorder : ""} ${className}`;

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
