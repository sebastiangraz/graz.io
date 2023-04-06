/** @jsxImportSource theme-ui */

import { GridParent, Img } from "../../components";
import { images } from "./assets";
import { Box } from "theme-ui";
import { Carousel } from "../../components/Carousel";
import React from "react";

const Capchase = () => {
  return (
    <GridParent sx={{ rowGap: "clamp(6rem, 10vw, 12rem)" }}>
      <Box
        sx={{
          gridColumn: ["2/span 8", "2 / span 8"],
        }}
      >
        <Carousel
          ratio={[1200, 648]}
          autoplay={true}
          heading={
            <>
              <span sx={{ color: "var(--caseForeground)" }}>
                The brand book
              </span>{" "}
              was deliberately leaning towards aspirational to keep the brand
              open to changes.
            </>
          }
        >
          <Img fromFolder="capchase" src={images.capchaseBB0} />
          <Img fromFolder="capchase" src={images.capchaseBB1} />
          <Img fromFolder="capchase" src={images.capchaseBB2} />
          <Img fromFolder="capchase" src={images.capchaseBB3} />
          <Img fromFolder="capchase" src={images.capchaseBB4} />
          <Img fromFolder="capchase" src={images.capchaseBB5} />
          <Img fromFolder="capchase" src={images.capchaseBB6} />
          <Img fromFolder="capchase" src={images.capchaseBB7} />
          <Img fromFolder="capchase" src={images.capchaseBB8} />
        </Carousel>
      </Box>
      <Box sx={{ gridColumn: ["2/span 8", "2 / span 8"] }}>
        <Carousel
          ratio={[1200, 720]}
          heading={
            <>
              <span sx={{ color: "var(--caseForeground)" }}>
                The website’s design
              </span>{" "}
              was carefully crafted to prioritize legibility and ease-of-use,
              with a more subdued aesthetic.
            </>
          }

          // onChangeIndex={(index) => console.log("Active index:", index)}
        >
          <Img fromFolder="capchase" src={images.capchaseWeb0} />
          <Img fromFolder="capchase" src={images.capchaseWeb1} />
        </Carousel>
      </Box>
    </GridParent>
  );
};

export default Capchase;
