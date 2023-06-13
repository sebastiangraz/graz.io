/** @jsxImportSource theme-ui */

import { useState } from "react";
import { ThemeUICSSObject } from "theme-ui";

export interface ImageData {
  name: string;
  width?: number;
  height?: number;
  alt: string;
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
  deviceBorder?: boolean;
}

export const Img = ({
  src,
  fromFolder,
  ignoreShadow = false,
  deviceBorder = false,
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
    if (!ignoreShadow) return;
    const img = e.target as HTMLImageElement;
    const { naturalWidth, naturalHeight } = img;
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

  //trim the extension '.png' or '.jpg' from src.name
  const srcName = src.name.split(".")[0];

  // const isDevelopment = import.meta.env.MODE === "development";

  return (
    <>
      <picture
        sx={{
          ...(deviceBorder && {
            "&:before": {
              borderImage: `url('/device-slice-shadow.png')`,
              borderImageWidth: [
                `166px calc(66px * ${src.width! / src.height!})`,
                null,
                `336px calc(128px * ${src.width! / src.height!})`,
              ],
              borderImageOutset: ["142px 85px", null, "287.5px 163px"],
              borderImageSlice: "49.97%", //`49.9% fill`,
              zIndex: 10,
              content: `""`,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            },
          }),
        }}
      >
        <source srcSet={`./${fromFolder}/${srcName}.avif`} type="image/avif" />

        <img
          {...sx}
          loading="lazy" // lazy usually
          src={`./${fromFolder}/${src.name}`}
          alt={src.alt}
          decoding="async"
          width={src.width}
          height={src.height}
          onLoad={onLoad}
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: deviceBorder ? `1.5rem` : "0px",
            aspectRatio: `${src.width}/${src.height}`,
            ...resizeModeStyle,
          }}
        />
      </picture>
    </>
  );
};
