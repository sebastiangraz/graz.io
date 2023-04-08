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
        <CaseHero heroHeight={1214}>
          <CaseHeroChild
            childStyle={{
              marginLeft: "auto",
              marginTop: "14.5%",
              marginRight: "-2.85%",
            }}
          >
            <Img src={images.heroTicket} fromFolder="loupe" ignoreShadow />
          </CaseHeroChild>

          <CaseHeroChild>
            <Img fromFolder="loupe" src={images.heroTicket} ignoreShadow />
          </CaseHeroChild>

          <CaseHeroChild
            childStyle={{
              zIndex: -1,
              marginLeft: "auto",
            }}
          >
            <Img fromFolder="loupe" src={images.heroTicket} />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginLeft: "70%",
              marginTop: "28%",
            }}
          >
            <Img fromFolder="loupe" src={images.heroTicket} ignoreShadow />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginTop: "50%",
            }}
          >
            <Img fromFolder="loupe" src={images.heroTicket} ignoreShadow />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginTop: "50%",
              marginLeft: "auto",
            }}
          >
            <Img fromFolder="loupe" src={images.heroTicket} ignoreShadow />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginTop: "auto",
            }}
          >
            <Img fromFolder="loupe" src={images.heroTicket} />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginTop: "auto",
              marginLeft: "28.75%",
            }}
          >
            <Img fromFolder="loupe" src={images.heroTicket} />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginTop: "auto",
              marginLeft: "auto",
            }}
          >
            <Img fromFolder="loupe" src={images.heroTicket} ignoreShadow />
          </CaseHeroChild>
        </CaseHero>
        <Box
          sx={{
            gridColumn: ["2/span 8", "2 / span 8"],
          }}
        >
          <Carousel
            ratio={[1200, 720]}
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
