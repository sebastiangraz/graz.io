/** @jsxImportSource theme-ui */

import { Flex, Text, Box } from "theme-ui";
import {
  Video,
  Img,
  GridParent,
  ScrollReveal,
  NumberedList,
  CaseHero,
  CaseHeroChild,
  Carousel,
} from "../../components";
import { Logo } from "./Logo";
import { videos, images, colors } from "./assets";

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
            <Img fromFolder="loupe" src={images.heroLogo} />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginTop: "20%",
              marginLeft: "18%",
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
            <Img fromFolder="loupe" src={images.loupeWeb1} ignoreShadow />
            <Img fromFolder="loupe" src={images.loupeWeb2} ignoreShadow />
            <Img fromFolder="loupe" src={images.loupeWeb3} ignoreShadow />
            <Img fromFolder="loupe" src={images.loupeWeb4} ignoreShadow />
          </Carousel>
        </Box>
        {/* <Box sx={{ gridColumn: ["2/span 8", "2 / span 8"] }}>
          <Carousel
            ratio={[1200, 720]}
            heading={
              <>
                <span sx={{ color: "var(--caseForeground)" }}>
                  The logotype
                </span>{" "}
                had an important mission of being able to extend itself, yet
                remain unmistakably on brand.
              </>
            }

            // onChangeIndex={(index) => console.log("Active index:", index)}
          >
            <Video fromFolder="capchase" src={videos.reveal} />
            <Img fromFolder="capchase" src={images.capchaseLogo0} />
            <Img fromFolder="capchase" src={images.capchaseLogo2} />
          </Carousel>
        </Box> */}
      </GridParent>
    </>
  );
};

export default Loupe;
