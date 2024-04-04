/** @jsxImportSource theme-ui */

import { Box } from "theme-ui";
import { Img, GridParent, CaseHero, CaseHeroChild, Carousel } from "../../components";
import { images } from "./assets";

const Loupe = () => {
  return (
    <>
      <GridParent sx={{ rowGap: "clamp(8rem, 16vw, 16rem)" }}>
        <CaseHero heroHeight={936}>
          <CaseHeroChild>
            <Img fromFolder="loupe" src={images.heroOrbs} />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginBottom: "auto",
              marginLeft: "auto",
            }}
          >
            <Img fromFolder="loupe" src={images.hero2020} />
          </CaseHeroChild>

          <CaseHeroChild
            childStyle={{
              marginTop: "20%",
            }}
          >
            <Img fromFolder="loupe" src={images.heroDoublecap} />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginTop: "28%",
              marginLeft: "37%",
            }}
          >
            <Img fromFolder="loupe" src={images.heroWatch} ignoreShadow />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginTop: "auto",
              marginRight: "auto",
            }}
          >
            <Img src={images.heroTicket} fromFolder="loupe" ignoreShadow />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginTop: "43%",
              marginLeft: "38%",
            }}
          >
            <Img fromFolder="loupe" src={images.heroSwitch} />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginTop: "auto",
              marginLeft: "36.5%",
            }}
          >
            <Img fromFolder="loupe" src={images.heroIcons} />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginTop: "auto",
              marginLeft: "auto",
            }}
          >
            <Img fromFolder="loupe" src={images.heroTablet} ignoreShadow />
          </CaseHeroChild>
        </CaseHero>
        <Box
          sx={{
            gridColumn: ["2/span 8", "2 / span 8"],
          }}
        >
          <Carousel
            ratio={[1200, 720]}
            mobileBleed
            heading={
              <>
                <span sx={{ color: "var(--caseForeground)" }}>The website</span> was developed in parallell with the
                brand, mutually influencing design choices in both directions.
              </>
            }
          >
            <Img fromFolder="loupe" src={images.loupeWeb1} deviceBorder />
            <Img fromFolder="loupe" src={images.loupeWeb2} deviceBorder />
            <Img fromFolder="loupe" src={images.loupeWeb3} deviceBorder />
            <Img fromFolder="loupe" src={images.loupeWeb4} deviceBorder />
          </Carousel>
        </Box>
        <Box sx={{ gridColumn: ["2/span 8", "2 / span 8"], height: ["0", "50vh"] }}>{/* spacer */}</Box>
      </GridParent>
    </>
  );
};

export default Loupe;
