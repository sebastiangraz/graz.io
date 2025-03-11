import style from "./img.module.css";
import { getImageForArticle } from "./imports";
import { useState, useEffect, useRef } from "react";

// Custom hook for quantizing height to line height
const useQuantizedHeight = (width: number, height: number) => {
  const [quantizedHeight, setQuantizedHeight] = useState<string | null>(null);
  const elementRef = useRef<HTMLElement>(null);

  const calculateQuantizedHeight = (containerWidth: number) => {
    if (!width || !height) return null;

    const aspectRatio = width / height;
    const calculatedHeight = containerWidth / aspectRatio;

    // Get document root font size (which equals the line height in this case)
    const lineHeight = parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Round to the nearest line height
    const roundedHeight = Math.round(calculatedHeight / lineHeight) * lineHeight;

    return `${roundedHeight}px`;
  };

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    const updateHeight = () => {
      const containerWidth = element.clientWidth;
      if (containerWidth > 0) {
        const newHeight = calculateQuantizedHeight(containerWidth);
        if (newHeight) {
          setQuantizedHeight(newHeight);
        }
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateHeight);
    });

    resizeObserver.observe(element);

    // Initial calculation
    updateHeight();

    return () => {
      resizeObserver.disconnect();
    };
  }, [width, height]);

  return { quantizedHeight, elementRef };
};

interface ImgProps {
  src: string;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
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

  // Use our custom hook
  const { quantizedHeight, elementRef } = useQuantizedHeight(pngData?.width || 0, pngData?.height || 0);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  // Calculate aspect ratio values
  const width = pngData?.width || 0;
  const height = pngData?.height || 0;

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
