/** @jsxImportSource theme-ui */

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
}

export const Img = ({ src, fromFolder, ...sx }: ImgProps) => {
  if (!src || !fromFolder) return null;

  return (
    <>
      <img
        {...sx}
        loading="lazy"
        src={`./${fromFolder}/${src.name}`}
        sx={{
          display: "flex",
          width: "100%",
          objectFit: "contain",
          aspectRatio: `${src.width}/${src.height}`,
        }}
      />
    </>
  );
};
