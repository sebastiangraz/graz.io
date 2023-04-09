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
import { motion } from "framer-motion";

const childAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
  },
};

const Icons = () => {
  return (
    <Box
      sx={{
        gridArea: "1 / 1",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        marginTop: "0%",
        height: "45%",
        marginLeft: "57.5%",
        zIndex: 1,
        "& > *": {
          width: `calc(100% * ${200} / 1200)`,
          objectFit: "contain",
        },
      }}
    >
      <motion.div
        variants={childAnimation}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        <Img fromFolder="capchase" src={images.heroIcon1} />
      </motion.div>
      <motion.div variants={childAnimation}>
        <Img fromFolder="capchase" src={images.heroIcon2} />
      </motion.div>
      <motion.div variants={childAnimation}>
        <Img fromFolder="capchase" src={images.heroIcon3} />
      </motion.div>
      <motion.div variants={childAnimation}>
        <Img fromFolder="capchase" src={images.heroIcon4} />
      </motion.div>
      <motion.div variants={childAnimation}>
        <Img fromFolder="capchase" src={images.heroIcon5} />
      </motion.div>
    </Box>
  );
};

const Metaview = () => {
  return (
    <>
      <GridParent sx={{ rowGap: "clamp(8rem, 16vw, 16rem)" }}>
        <CaseHero heroHeight={1214}>
          <Icons />

          <CaseHeroChild
            childStyle={{
              marginLeft: "auto",
              marginTop: "14.5%",
              marginRight: "-2.85%",
            }}
          >
            <Img src={images.bottle} fromFolder="metaview" ignoreShadow />
          </CaseHeroChild>

          <CaseHeroChild>
            <Img fromFolder="metaview" src={images.tablet} ignoreShadow />
          </CaseHeroChild>

          <CaseHeroChild
            childStyle={{
              zIndex: -1,
              marginLeft: "auto",
            }}
          >
            <Img fromFolder="metaview" src={images.heroTypo} />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginLeft: "70%",
              marginTop: "28%",
              zIndex: 1,
            }}
          >
            <Img fromFolder="metaview" src={images.heroWatch} ignoreShadow />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginTop: "50%",
            }}
          >
            <Img fromFolder="metaview" src={images.heroLogo} ignoreShadow />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginTop: "50%",
              marginLeft: "auto",
            }}
          >
            <Img fromFolder="metaview" src={images.heroUI} ignoreShadow />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginTop: "auto",
            }}
          >
            <Img fromFolder="metaview" src={images.flow} />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginTop: "auto",
              marginLeft: "28.75%",
              img: {
                objectFit: "contain",
              },
            }}
          >
            <Img fromFolder="metaview" src={images.switch} />
          </CaseHeroChild>
          <CaseHeroChild
            childStyle={{
              marginTop: "auto",
              marginLeft: "auto",
            }}
          >
            <Img fromFolder="metaview" src={images.heroEmbed} ignoreShadow />
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
            <Img fromFolder="metaview" src={images.metaviewWeb0} ignoreShadow />
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
