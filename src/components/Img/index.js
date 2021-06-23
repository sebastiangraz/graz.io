/** @jsxImportSource theme-ui */

export const Img = ({ imageData, cover, plate, ...rest }) => {
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
      <picture>
        {imageData && imageData.webP && (
          <source
            loading="lazy"
            width={imageData && imageData.width}
            height={imageData && imageData.height}
            srcSet={imageData && imageData.webP.default}
            type="image/webp"
            alt={imageData.alt ? imageData.alt : "alt"}
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
          width={imageData && imageData.width}
          height={imageData && imageData.height}
          alt={imageData && imageData.alt ? imageData.alt : "alt"}
          src={imageData && imageData.url.default}
        />
      </picture>
    </div>
  );
};
