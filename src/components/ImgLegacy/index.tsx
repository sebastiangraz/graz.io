/** @jsxImportSource theme-ui */
import React from "react";

const ImgComponent = ({ imageData, cover, plate, ...rest }) => {
  // console.log("imageData", imageData.url);

  // const getImgUrl = (imageData: string) =>
  //   new URL(`./assets/${imageData}`, import.meta.url).href;

  // console.log(getImgUrl(imageData?.url));

  return (
    <div
      {...rest}
      sx={{
        willChange: "transform",
        paddingBottom: `calc(${imageData?.height} / ${imageData?.width} * 100%)`,
        position: "relative",
        backgroundColor: plate ? "currentColor" : "transparent",
      }}
    >
      <picture>
        {imageData?.webP && (
          <source
            loading="lazy"
            width={imageData?.width}
            height={imageData?.height}
            srcSet={imageData?.webP.default}
            type="image/webp"
            alt={imageData?.alt ? imageData?.alt : "alt"}
          />
        )}
        <img
          loading="lazy"
          sx={{
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            objectFit: cover ? "cover" : "contain",
          }}
          width={imageData?.width}
          height={imageData?.height}
          alt={imageData?.alt ? imageData?.alt : "alt"}
          src={imageData?.url}
        />
      </picture>
    </div>
  );
};

export const ImgLegacy = React.memo(ImgComponent);
