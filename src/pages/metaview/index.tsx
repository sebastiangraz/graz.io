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
            <Img src={images.heroMobile} fromFolder="metaview" />
          </CaseHeroChild>

          <CaseHeroChild
            childStyle={{
              marginLeft: "auto",
              marginTop: "0%",
            }}
          >
            <Img src={images.heroCard} fromFolder="metaview" ignoreShadow />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginLeft: "0%",
              marginTop: "41%",
            }}
          >
            <Img src={images.heroChart} fromFolder="metaview" ignoreShadow />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginLeft: "55.5%",
              marginTop: "32%",
            }}
          >
            <Img src={images.heroIcons} fromFolder="metaview" />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginLeft: "auto",
              marginTop: "31.4%",
            }}
          >
            <Img src={images.heroGreenRibbon} fromFolder="metaview" />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginLeft: "0%",
              marginTop: "auto",
            }}
          >
            <Img src={images.heroBubble} fromFolder="metaview" />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginLeft: "35%",
              marginTop: "auto",
            }}
          >
            <Img src={images.heroSpag} fromFolder="metaview" ignoreShadow />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginLeft: "auto",
              marginTop: "auto",
            }}
          >
            <Img src={images.heroCTA} fromFolder="metaview" />
          </CaseHeroChild>
        </CaseHero>
        <Box sx={{ gridColumn: ["2/span 8", "2 / span 8"] }}>
          <Carousel
            ratio={[1200, 720]}
            heading={
              <>
                <span sx={{ color: "var(--caseForeground)" }}>The website</span>{" "}
                utilized the brand’s vibrancy to the fullest extent, with bold
                colors, paired with tangled-ribbonny-
                <span
                  sx={{
                    // text gradient
                    backgroundImage:
                      "linear-gradient(to right, #1552e1 0%, #5aa598 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  gradientious
                </span>{" "}
                illustrations.
              </>
            }

            // onChangeIndex={(index) => console.log("Active index:", index)}
          >
            <Img fromFolder="metaview" src={images.web0} ignoreShadow />
            <Img fromFolder="metaview" src={images.web4} />
            <Img fromFolder="metaview" src={images.web1} ignoreShadow />
            <Img fromFolder="metaview" src={images.web2} ignoreShadow />
            <Img fromFolder="metaview" src={images.web3} />
          </Carousel>
        </Box>
        <Box sx={{ gridColumn: ["2/span 8", "2 / span 8"] }}>
          <Carousel
            ratio={[1200, 675]}
            heading={
              <>
                <span sx={{ color: "var(--caseForeground)" }}>
                  The visual language
                </span>{" "}
                was developed in accordance with the company values, which were
                collaboratively refined during the early stages of brand
                discovery.
              </>
            }

            // onChangeIndex={(index) => console.log("Active index:", index)}
          >
            <Img fromFolder="metaview" src={images.bb0} />
            <Img fromFolder="metaview" src={images.bb1} />
            <Img fromFolder="metaview" src={images.bb2} />
            <Img fromFolder="metaview" src={images.bb3} />
            <Img fromFolder="metaview" src={images.bb4} />
            <Img fromFolder="metaview" src={images.bb5} />
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
