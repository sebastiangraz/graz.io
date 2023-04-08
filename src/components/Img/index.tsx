/** @jsxImportSource theme-ui */

import { useState } from "react";
import { ThemeUICSSObject } from "theme-ui";

interface ImageData {
  name: string;
  width?: number;
  height?: number;
  alt?: string;
}

interface ImgProps {
  src: ImageData;
  fromFolder: string;
  sx?: ThemeUICSSObject;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  /**
   * @description requires the top asset whitespace to match the shadow height. If the bottom shadow is 32px, the top asset whitespace should be 32px too.
   */
  ignoreShadow?: boolean;
}

export const Img = ({
  src,
  fromFolder,
  ignoreShadow = false,
  ...sx
}: ImgProps) => {
  if (!src || !fromFolder) return null;

  const [naturalDimensions, setNaturalDimensions] = useState({
    width: 0,
    height: 0,
  });

  const updateDimensions = (width: number, height: number) => {
    if (naturalDimensions.width) return;
    setNaturalDimensions({ width, height });
  };

  const onLoad = async (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    const { naturalWidth, naturalHeight } = img;
    await new Promise(requestAnimationFrame);
    updateDimensions(naturalWidth, naturalHeight);
  };

  const resizeModeStyle = ignoreShadow
    ? ({
        pointerEvents: "none",
        position: "absolute",
        width: `calc(100% * ${naturalDimensions.width} / ${src?.width! * 2})`,
        height: `calc(100% * ${naturalDimensions.height} / ${
          src?.height! * 2
        })`,
        left: `calc(50% - 100% * ${naturalDimensions.width} / ${
          src?.width! * 2
        } / 2)`,
        top: `calc(50% - 100% * ${naturalDimensions.height} / ${
          src?.height! * 2
        } / 2)`,
      } as ThemeUICSSObject)
    : {};

  //warn if naturalDimensions is the same as src dimensions
  if (naturalDimensions.width === src.width! * 2) {
    console.warn(
      `Image ${src.name} has the same dimensions as the original asset. Consider removing the ignoreShadow prop`
    );
  }

  return (
    <>
      <img
        {...sx}
        loading="lazy"
        src={`./${fromFolder}/${src.name}`}
        alt={src.alt}
        onLoad={ignoreShadow ? onLoad : undefined}
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          aspectRatio: `${src.width}/${src.height}`,
          ...resizeModeStyle,
        }}
      />
    </>
  );
};
