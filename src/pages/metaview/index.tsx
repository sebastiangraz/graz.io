/** @jsxImportSource theme-ui */

import {
  GridParent,
  Img,
  Video,
  CaseHero,
  CaseHeroChild,
  Carousel,
} from "../../components";
import { images } from "./assets";
import { Box } from "theme-ui";

const Metaview = () => {
  return (
    <>
      <GridParent sx={{ rowGap: "clamp(8rem, 16vw, 16rem)" }}>
        <CaseHero heroHeight={1214}>
          <CaseHeroChild>
            <Img src={images.metaviewHeroMobile} fromFolder="metaview" />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginLeft: "auto",
              marginTop: "auto",
            }}
          >
            <Img src={images.metaviewHeroMobile} fromFolder="metaview" />
          </CaseHeroChild>
        </CaseHero>
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
            <Img fromFolder="metaview" src={images.metaviewWeb0} ignoreShadow />
            <Img fromFolder="metaview" src={images.metaviewWeb0} />
          </Carousel>
        </Box>

        <Box sx={{ gridColumn: ["2/span 8", "2 / span 8"], height: "50vh" }}>
          {/* spacer */}
        </Box>
      </GridParent>
    </>
  );
};

export default Metaview;
