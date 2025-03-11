import style from "./img.module.css";
import { getImageForArticle } from "./imports";
import { useState, useEffect, useRef } from "react";

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
  const [quantizedHeight, setQuantizedHeight] = useState<string | null>(null);
  const pictureRef = useRef<HTMLPictureElement>(null);

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

  const calculateQuantizedHeight = (containerWidth: number) => {
    if (!pngData?.width || !pngData?.height) return null;

    const aspectRatio = pngData.width / pngData.height;
    const calculatedHeight = containerWidth / aspectRatio;

    // Get line height in pixels - fixed to 16px if we can't determine it
    const computedStyle = getComputedStyle(document.documentElement);
    const fontSize = parseFloat(computedStyle.fontSize);
    // Use 1rem as the default line height since our :root has line-height: 1
    const lineHeight = fontSize;

    // Round to the nearest line height
    const roundedHeight = Math.round(calculatedHeight / lineHeight) * lineHeight;
    console.log({
      containerWidth,
      aspectRatio,
      calculatedHeight,
      fontSize,
      lineHeight,
      roundedHeight,
    });

    return `${roundedHeight}px`;
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }

    // Get the current container width and calculate quantized height
    const img = e.currentTarget;
    const container = img.parentElement;

    if (container) {
      const containerWidth = container.clientWidth;
      const newHeight = calculateQuantizedHeight(containerWidth);
      if (newHeight) {
        setQuantizedHeight(newHeight);
      }
    }
  };

  // Calculate aspect ratio values
  const width = pngData?.width || 0;
  const height = pngData?.height || 0;

  // Immediate calculation based on natural dimensions for initial render
  // This ensures we have a reasonable height before the image loads
  const initialHeight = width && height ? calculateQuantizedHeight(Math.min(width, window?.innerWidth || width)) : null;

  // Set initial height if not already set
  useEffect(() => {
    if (!quantizedHeight && initialHeight) {
      setQuantizedHeight(initialHeight);
    }
  }, [initialHeight, quantizedHeight]);

  // Add resize observer effect
  useEffect(() => {
    if (!pictureRef.current) return;

    const picture = pictureRef.current;

    const updateHeight = () => {
      const containerWidth = picture.clientWidth;
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
    resizeObserver.observe(picture);

    // Initial calculation - important for first render
    updateHeight();

    return () => {
      resizeObserver.disconnect();
    };
  }, [pngData]);

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
        ref={pictureRef}
        className={classNames}
        style={
          {
            "--picture-w": width,
            "--picture-h": height,
            height: quantizedHeight || "auto",
            display: "block", // Ensure proper layout flow
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
