/** @jsxImportSource theme-ui */

export const Img = ({ imageData, cover, plate, ...rest }) => {
  return (
    <div
      {...rest}
      sx={{
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
          src={imageData?.url.default}
        />
      </picture>
    </div>
  );
};
