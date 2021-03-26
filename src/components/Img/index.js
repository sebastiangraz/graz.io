/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

export const Img = ({ imageData, plate, ...rest }) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div
      {...rest}
      sx={{
        paddingBottom: `calc(${imageData && imageData.height} / ${
          imageData && imageData.width
        } * 100%)`,
        position: "relative",
        backgroundColor: plate ? "accent" : "transparent",
      }}
    >
      <picture sx={{ transition: "opacity 1s ease", opacity: loaded ? 1 : 0 }}>
        {imageData && imageData.webP && (
          <source
            loading="lazy"
            onLoad={() => setLoaded(true)}
            width={imageData && imageData.width}
            height={imageData && imageData.height}
            srcSet={imageData && imageData.webP}
            type="image/webp"
            alt={imageData.alt ? imageData.alt : "alt"}
          />
        )}
        <img
          loading="lazy"
          onLoad={() => setLoaded(true)}
          sx={{
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
          width={imageData && imageData.width}
          height={imageData && imageData.height}
          alt={imageData && imageData.alt ? imageData.alt : "alt"}
          src={imageData && imageData.url}
        />
      </picture>
    </div>
  );
};
