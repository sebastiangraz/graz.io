/** @jsxImportSource theme-ui */

import { GridParent, Img } from "../../components";
import { images } from "./assets";
import { Box } from "theme-ui";
import { Carousel } from "../../components/Carousel";
import React, { useState } from "react";
import { motion, motionValue, useMotionValue } from "framer-motion";

const staggeredAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const childAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
  },
};

const HeroChild = ({ src, childStyle }: { src: any; childStyle?: {} }) => {
  const { width, height } = src;
  const [naturalDimensions, setNaturalDimensions] = useState({
    width: 0,
    height: 0,
  });
  const MotionBox = motion(Box);
  return (
    <MotionBox
      variants={childAnimation}
      sx={{
        ...childStyle,
        gridArea: "1 / 1",
        width: `calc(100% * ${width} / 1200)`,
        aspectRatio: `${width}/${height}`,
        height: "auto",
        position: "relative",
      }}
    >
      <Img
        src={src}
        fromFolder="capchase"
        sx={{
          height: "auto",
          overflow: "visible",
          //prettier-ignore
          objectViewBox: `inset(
            ${naturalDimensions.height / 2 - height}px 
            0 
            ${naturalDimensions.height / 2 - height}px 
            0)`,
        }}
        onLoad={(e) => {
          if (naturalDimensions.width) return;
          const img = e.target as HTMLImageElement;
          const { naturalWidth, naturalHeight } = img;
          setNaturalDimensions({ width: naturalWidth, height: naturalHeight });
        }}
      />
    </MotionBox>
  );
};

const Hero = ({ children }: { children: React.ReactNode }) => {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      variants={staggeredAnimation}
      initial="hidden"
      whileInView="visible"
      sx={{
        display: "grid",
        position: "relative",
        gridColumn: ["2/span 8", "2 / span 8"],
        width: "100%",
        aspectRatio: "1200 / 1214",
      }}
    >
      {children}
    </MotionBox>
  );
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

const Capchase = () => {
  return (
    <>
      <GridParent sx={{ rowGap: "clamp(8rem, 16vw, 16rem)" }}>
        <Hero>
          <Icons />

          <HeroChild
            src={images.bottle}
            childStyle={{
              marginLeft: "auto",
              marginTop: "14.5%",
              marginRight: "-2.85%",
            }}
          />

          <HeroChild src={images.tablet} />

          <HeroChild
            src={images.heroTypo}
            childStyle={{
              zIndex: -1,
              marginLeft: "auto",
            }}
          />
          <HeroChild
            src={images.heroWatch}
            childStyle={{
              marginLeft: "70%",
              marginTop: "28%",
            }}
          />
          <HeroChild
            src={images.heroLogo}
            childStyle={{
              marginTop: "50%",
            }}
          />
          <HeroChild
            src={images.heroUI}
            childStyle={{
              marginTop: "50%",
              marginLeft: "auto",
            }}
          />
          <HeroChild
            src={images.flow}
            childStyle={{
              marginTop: "auto",
            }}
          />
          <HeroChild
            src={images.switch}
            childStyle={{
              marginTop: "auto",
              marginLeft: "28.75%",
            }}
          />
          <HeroChild
            src={images.heroEmbed}
            childStyle={{
              marginTop: "auto",
              marginLeft: "auto",
            }}
          />
        </Hero>
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
            <Img fromFolder="capchase" src={images.capchaseWeb2} />
            <Img fromFolder="capchase" src={images.capchaseWeb3} />
          </Carousel>
        </Box>
        <Box sx={{ gridColumn: ["2/span 8", "2 / span 8"] }}>
          <Carousel
            ratio={[1200, 720]}
            heading={
              <>
                <span sx={{ color: "var(--caseForeground)" }}>
                  The logotype
                </span>{" "}
                had an important mission of being able to extend itself, yet
                remain unmistakably on brand in it’s transformed state.
              </>
            }

            // onChangeIndex={(index) => console.log("Active index:", index)}
          >
            <Img fromFolder="capchase" src={images.capchaseLogo0} />
            <Img fromFolder="capchase" src={images.capchaseLogo1} />
            <Img fromFolder="capchase" src={images.capchaseLogo2} />
          </Carousel>
        </Box>
      </GridParent>
    </>
  );
};

export default Capchase;
