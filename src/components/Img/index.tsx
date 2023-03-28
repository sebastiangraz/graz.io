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

function getImgUrl(file: string) {
  const url = new URL(file, import.meta.url).href;
  return url;
}

export const Img = ({ src, fromFolder, ...sx }: ImgProps) => {
  if (!src || !fromFolder) return null;

  const path = `../../pages/${fromFolder}/assets`;
  const url = getImgUrl(`${path}/${src.name}`);

  return (
    <>
      <img
        {...sx}
        loading="lazy"
        src={url}
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
