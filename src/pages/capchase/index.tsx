/** @jsxImportSource theme-ui */

import { GridParent, Img, ScrollReveal, Video } from "../../components";
import { colors, images, vectors, videos } from "./assets";
import { Text, Box } from "theme-ui";
import { Carousel } from "../../components/Carousel";

const radius = (small?: boolean) => {
  const radiusLarge = {
    default: ["6vmin", "4vmin"],
    right: ["0 6vmin 6vmin 0", "0 4vmin 4vmin 0"],
    left: ["6vmin 0 0 6vmin", "4vmin 0 0 4vmin"],
  };
  const radiusSmall = {
    default: "2vmin",
    right: "0 2vmin 2vmin 0",
    left: "2vmin 0 0 2vmin",
  };

  return small ? radiusSmall : radiusLarge;
};

const Capchase = () => {
  const Sections = {
    Intro: () => {
      return (
        <>
          <GridParent>
            <Box sx={{ gridColumn: ["2/span 8", "2 / span 8"] }}>
              <Carousel
                ratio={[1200, 648]}
                heading={
                  <>
                    <span sx={{ color: "var(--caseForeground)" }}>
                      The brand book
                    </span>{" "}
                    was deliberately leaning towards aspirational to keep the
                    brand open to changes.
                  </>
                }
                threshold={0.5}
                onChangeIndex={(index) => console.log("Active index:", index)}
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
          </GridParent>
        </>
      );
    },

    BB: () => {
      return (
        <>
          <GridParent>
            <Box sx={{ gridColumn: ["2/span 8", "2 / span 8"] }}>
              <Carousel
                ratio={[1200, 720]}
                heading={
                  <>
                    <span sx={{ color: "var(--caseForeground)" }}>
                      The website’s design
                    </span>{" "}
                    was carefully crafted to prioritize legibility and
                    ease-of-use, with a more subdued aesthetic.
                  </>
                }
                threshold={0.5}
                onChangeIndex={(index) => console.log("Active index:", index)}
              >
                <Img fromFolder="capchase" src={images.capchaseWeb0} />
                <Img fromFolder="capchase" src={images.capchaseWeb1} />
              </Carousel>
            </Box>
          </GridParent>
        </>
      );
    },
  };

  return (
    <>
      {Object.entries(Sections).map(([k, Section]) => (
        <Section key={k} />
      ))}
    </>
  );
};

export default Capchase;
