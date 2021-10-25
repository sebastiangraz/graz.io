/** @jsxImportSource theme-ui */

import React from "react";
import {
  GridParent,
  Img,
  CaseMeta,
  NumberedList,
  ScrollReveal,
  Video,
} from "../../components";
import { images, vectors, videos } from "./assets";
import { Text, Box } from "theme-ui";

const colors = {
  black: "#0F0F14",
  white: "#FCFBF8",
  purple: "#712FFF",
  yellow: "#FFD99F",
  green: "#E7FDE2",
  cyan: "#ABF0FF",
  blue: "#0A21F1",
  orange: "#FF9574",
  pink: "#FA7D93",
};

const radius = (small) => {
  const radiusLarge = {
    default: ["3vmin", "4vmin"],
    right: ["0 3vmin 3vmin 0", "0 4vmin 4vmin 0"],
    left: ["3vmin 0 0 3vmin", "4vmin 0 0 4vmin"],
  };
  const radiusSmall = {
    default: "2vmin",
    right: "0 2vmin 2vmin 0",
    left: "2vmin 0 0 2vmin",
  };

  return small ? radiusSmall : radiusLarge;
};

const phoneBorder = () => {
  return {
    boxShadow: "capchase",
    position: "relative",
    zIndex: "0",
    "&:after": {
      borderRadius: radius().default,
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      zIndex: "1",
      boxShadow:
        "inset 0px 3px 1px -2px #FFF7E8, inset 0px -1px 1px -1px rgba(73, 46, 34, 0.5), inset 0px 0px 5px -1px #C66705, inset 0px 0px 1px 3px #E9D9C0",
    },
    "&:before": {
      borderRadius: radius().default,
      content: "''",
      position: "absolute",
      left: "1px",
      top: "1px",
      width: "calc(100% - 2px)",
      height: "calc(100% - 2px)",
      zIndex: "1",
      boxShadow: ["0 0 0 5px #000 inset", "0 0 0 8px #000 inset"],
    },
  };
};

const Capchase = ({ data }) => {
  const Sections = {
    Intro: () => {
      return (
        <>
          <GridParent>
            <Box sx={{ gridColumn: ["2/span 8", " 2/span 4"] }}>
              <ScrollReveal>
                <Text variant="lead" mb={8}>
                  Capchase, one of the largest non-dilutive funding companies
                  needed a time sensitive visual refresh of all their digital
                  and print assets.
                </Text>
                <Text variant="lead" mb={10}>
                  Time was of the essence as they increased their momentum for
                  both brand awareness while establishing their slice of the
                  market. Big&nbsp;slices&nbsp;too.
                </Text>
              </ScrollReveal>
            </Box>
            <Box sx={{ gridColumn: ["2/span 8", "2/span 5"] }}>
              <NumberedList
                labelColor={colors.yellow}
                horizontal
                labels={[
                  "Create brand and execute it for a very perceptive audience.",
                  "Position Capchase as a leader in non-dilutable financing.",
                  "Proofing Capchase’s brand for longevity & recognizability. ",
                  "Capchase to feel like a business partner not a tool.",
                ]}
              />
            </Box>
          </GridParent>
          <GridParent>
            <div
              sx={{
                pr: [2, 9],
                borderRadius: radius().right,
                background: colors.black,
                gridRow: ["span 4", "span 2"],
                gridColumn: ["span 3"],
                boxShadow: "capchase",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ScrollReveal duration={2} sx={{ width: "100%" }}>
                <Img sx={{ width: "100%" }} imageData={images.bottle} />
              </ScrollReveal>
            </div>
            <div
              sx={{
                padding: "10%",
                borderRadius: radius().default,
                background: colors.purple,
                gridRow: ["span 4", "span 4"],
                gridColumn: ["span 4", "span 4"],
              }}
            >
              <Img imageData={images.elements} />
            </div>
            <div
              sx={{
                position: "relative",
                ...phoneBorder(),

                borderRadius: radius().default,
                gridRow: ["span 5", "span 4"],
                gridColumn: ["span 3", "span 2"],
              }}
            >
              <div
                sx={{
                  display: ["none", "block"],
                  zIndex: 2,
                  top: "56px",
                  right: "-10px",
                  width: 16,
                  height: 40,
                  position: "absolute",
                }}
              >
                <Img imageData={images.crown} />
              </div>

              <ScrollReveal>
                <Img
                  sx={{ overflow: "hidden", borderRadius: radius().default }}
                  imageData={images.mobileIntro}
                />
              </ScrollReveal>
            </div>
          </GridParent>
          <GridParent sx={{ mb: [10, 11] }}>
            <div
              sx={{
                borderRadius: radius().default,
                background: colors.black,
                gridRow: "span 2",
                gridColumn: ["span 2", "2/span 2"],
              }}
            >
              <Img imageData={images.forward} />
            </div>
            <div
              sx={{
                padding: [4, 8],
                borderRadius: radius().default,
                background: colors.black,
                gridRow: "3/span 2",
                gridColumn: ["2/span 4", "4/span 2"],
              }}
            >
              <ScrollReveal
                duration={2}
                effect={[{ rotate: 10 }, { rotate: 0 }]}
              >
                <Img imageData={images.loop} />
              </ScrollReveal>
            </div>
            <div
              sx={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: radius(true).default,
                background: colors.purple,
                gridRow: ["1/span 1", "2/span 1"],
                gridColumn: ["6/span 1", "6/span 1"],
                color: colors.yellow,
                svg: {
                  margin: "0 auto",
                  width: "50%",
                  height: "auto",
                },
              }}
            >
              {vectors.logo}
            </div>
            <div
              sx={{
                borderRadius: radius().default,
                gridRow: ["1/span 2", "3/span 2"],
                gridColumn: ["2/span 2", "6/span 2"],
              }}
            >
              <Img imageData={images.ramp} />
            </div>
            <div
              sx={{
                p: [2, 9],
                pr: 0,
                overflow: "hidden",
                position: "relative",
                borderRadius: radius().left,
                background: colors.black,
                gridRow: ["1/span 3", "2/span 3"],
                gridColumn: ["8/span 3", "8/span 3"],
                alignItems: "center",
                display: "grid",
                img: {
                  objectPosition: "center right",
                },
              }}
            >
              <Img
                sx={{ position: "absolute", width: "100%" }}
                imageData={images.stats}
              />
            </div>
            <div
              sx={{
                overflow: "hidden",
                borderRadius: radius().default,
                background: colors.purple,
                gridRow: ["3/span 2", "5/span 2"],
                gridColumn: ["6/span 4", "8/span 2"],
              }}
            >
              <Img imageData={images.totes} />
            </div>
          </GridParent>
        </>
      );
    },
    BrandBook: () => {
      return (
        <>
          <GridParent>
            <div
              sx={{
                gridRow: "span 1",
                gridColumn: ["2/span 8", "2/span 4"],
              }}
            >
              <Text variant="heading">Brand book</Text>
            </div>
            <div
              sx={{
                gridRow: "span 1",
                gridColumn: ["2/span 8", "6/span 4"],
              }}
            >
              <Text variant="lead">
                The main deliverable was the Brand Book that would inform the
                new direction of the design language.
              </Text>
              <Text variant="lead">
                We wanted to keep the content more aspirational than riddled
                with do’s and don’ts. The real design system would later be
                handled by design software.
              </Text>
            </div>
            <div
              sx={{
                isolation: "isolate",
                my: 10,
                borderRadius: ["12px", "48px"],
                overflow: "hidden",
                gridRow: "span 4",
                gridColumn: ["1/ span 10", "2/span 8"],
              }}
            >
              <Video videoData={videos.brandbook} />
            </div>
          </GridParent>
          <GridParent>
            <div
              sx={{
                gridRow: "3/span 4",
                gridColumn: ["2/ span 9", "2/span 9"],
              }}
            >
              <Img imageData={images.brandbook1} />
            </div>
            <div
              sx={{
                mt: [3, 8],
                gridRow: "7/span 4",
                gridColumn: ["2/ span 9", "2/span 9"],
              }}
            >
              <Img imageData={images.brandbook2} />
            </div>
            <div
              sx={{
                gridRow: ["1/span 1", "5/span 2"],
                gridColumn: ["2/ span 8", "5/span 5"],
              }}
            >
              <Text variant="caps">Rules that matter</Text>
              <Text sx={{ maxWidth: 480 }}>
                Because we were free from the clutches of text-heavy rules. The
                final guideline deliverable took on a relaxed yet inspirational
                format.
              </Text>
            </div>
          </GridParent>
        </>
      );
    },
    Webdesign: () => {
      return (
        <>
          <GridParent>
            <div
              sx={{
                gridRow: "3/span 4",
                gridColumn: ["2/ span 8", "2/span 8"],
                img: {
                  transform: "scale(1.205)",
                },
              }}
            >
              <Img imageData={images.webdesign} />
            </div>
          </GridParent>
        </>
      );
    },
    Logotype: () => {
      return (
        <>
          <GridParent>
            <Box mt={11} sx={{ gridColumn: ["2/ span 8", " 2/span 7"] }}>
              <ScrollReveal>
                <Text variant="heading">Logotype</Text>
                <Text variant="lead" mb={10}>
                  The logotype discovery phase went though a thorough process.
                  we designed a little over 100 logotype branches before finding
                  the right path to follow.
                </Text>
              </ScrollReveal>
            </Box>
            <Box
              mb={[8, 10]}
              sx={{
                gridColumn: ["2/ span 8", " 2/span 8"],
                svg: { width: "100%" },
              }}
            >
              <ScrollReveal duration={1.5} delay={0.3}>
                {" "}
                {vectors.logotype}
              </ScrollReveal>
            </Box>
            <Box mb={10} sx={{ gridColumn: ["2/ span 8", " 2/span 8"] }}>
              <ScrollReveal
                effect={[{ translateY: 20 }, { translateY: 0 }]}
                delay={0.3}
                sx={{
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gridGap: [5, 8],
                  gridTemplateColumns: ["auto", "auto auto auto"],
                  width: "100%",
                  padding: 0,
                }}
              >
                <li
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    svg: { width: ["32px", "72px"] },
                  }}
                >
                  {vectors.forwardIcon}
                  <Text
                    sx={{ ml: [5, 7], maxWidth: 200, width: "100%" }}
                    variant="label"
                  >
                    Represent progression and moving forward.
                  </Text>
                </li>
                <li
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    svg: { width: ["32px", "72px"] },
                  }}
                >
                  {vectors.growthIcon}
                  <Text
                    sx={{ ml: [5, 7], maxWidth: 200, width: "100%" }}
                    variant="label"
                  >
                    Display a sense of growth & adaptability.
                  </Text>
                </li>
                <li sx={{ display: "flex", alignItems: "center" }}>
                  <ScrollReveal
                    ignoreParentFade
                    sx={{ width: ["32px", "72px"] }}
                    delay={0.3}
                    duration={2}
                    effect={[{ rotate: -20 }, { rotate: 0 }]}
                  >
                    {vectors.transparentIcon}
                  </ScrollReveal>
                  <Text
                    sx={{ ml: [5, 7], maxWidth: 200, width: "100%" }}
                    variant="label"
                  >
                    Feel transparent and humble.
                  </Text>
                </li>
              </ScrollReveal>
            </Box>
          </GridParent>
          <GridParent>
            <div
              sx={{
                zIndex: 1,
                overflow: "hidden",
                borderRadius: radius().default,
                background: colors.purple,
                gridRow: ["1/span 4", "1/span 1"],
                gridColumn: ["2/span 4", "2/span 1"],
                boxShadow: "capchase",
                display: "flex",
                color: colors.yellow,
                justifyContent: "center",
                alignItems: "center",
                svg: {
                  margin: "0 auto",
                  width: "50%",
                  height: "auto",
                },
              }}
            >
              {vectors.logo}
            </div>

            <div
              sx={{
                overflow: "hidden",
                position: "relative",
                borderRadius: radius().default,
                background: colors.purple,
                gridRow: ["1/span 4", "1/span 1"],
                gridColumn: ["2/ span 8", "2/span 2"],
              }}
            >
              <ScrollReveal
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "6%",
                  width: "100%",
                  transform: "translateY(-50%) scale(0.51)",
                  transformOrigin: "center right",
                }}
                duration={2}
              >
                <Img imageData={images.logoart2} />
              </ScrollReveal>
            </div>
            <div
              sx={{
                p: 9,
                borderRadius: radius().default,
                background: colors.purple,
                gridRow: ["span 4", "5/span 3"],
                gridColumn: ["2/ span 8", "2/span 3"],
                boxShadow: "capchase",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ScrollReveal duration={2} sx={{ width: "100%" }}>
                <Img sx={{ width: "100%" }} imageData={images.icons} />
              </ScrollReveal>
            </div>
            <div
              sx={{
                padding: "10%",
                borderRadius: radius().default,
                background: [colors.yellow, colors.white],
                gridRow: ["span 4", "2/span 2"],
                gridColumn: ["2/span 4", "4/span 2"],
              }}
            >
              <Img imageData={images.logoart} />
            </div>
            <div
              sx={{
                overflow: "hidden",
                borderRadius: radius().default,
                background: colors.white,
                gridRow: ["span 4", "5/span 1"],
                gridColumn: ["span 4", "5/span 1"],
              }}
            >
              <Img imageData={images.logoart3} />
            </div>
            <div
              sx={{
                overflow: "hidden",
                position: "relative",
                borderRadius: radius().default,
                background: colors.black,
                gridRow: ["5/span 10", "1/span 5"],
                gridColumn: ["2/span 8", "6/span 4"],
                alignItems: "center",
                display: "grid",
                zIndex: 2,
              }}
            >
              <Box
                sx={{
                  borderRadius: radius().default,
                  bottom: 0,
                  p: [4, 7, 8],
                  maxWidth: "560px",
                  margin: "0 auto",
                  zIndex: 2,
                  position: "absolute",
                  color: colors.yellow,
                  background: `linear-gradient(360deg, ${colors.black}, "#0f0f1300")`,
                }}
                variant="label"
              >
                <Text variant="caps">modularity</Text>
                <Text variant="label">
                  While exploring ideas we also found that having a modular logo
                  would be important later down the line as Capchase starts
                  releasing sectioned finance products.
                </Text>
              </Box>
              <Video sx={{ height: "80%" }} videoData={videos.reveal} />
            </div>
            <div
              sx={{
                padding: "10%",
                borderRadius: radius().default,
                background: [colors.white],
                gridRow: ["span 4", "6/span 2"],
                gridColumn: ["2/ span 4", "7/span 2"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // img: {
                //   objectPosition: "center center",
                // },
              }}
            >
              <Img sx={{ width: "70%" }} imageData={images.logoart1} />
            </div>
          </GridParent>
        </>
      );
    },
    ArtDirection: () => {
      return (
        <>
          <GridParent>
            <Box mt={11} sx={{ gridColumn: ["2/ span 8", " 2/span 4"] }}>
              <ScrollReveal>
                <Text variant="heading">Art Direction</Text>
                <Text variant="lead" mb={8}>
                  We came up with a variety of wavy patterns to represent flow
                  and movement. A concept that sits closely to the financial
                  term liquidity.
                </Text>
                <Text variant="lead" mb={10}>
                  Some of the shapes are also animated to further emphasize
                  movement.
                </Text>
              </ScrollReveal>
            </Box>
          </GridParent>
          <GridParent>
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: radius().default,
                background: colors.black,
                gridRow: ["span 8", "1/span 4"],
                gridColumn: ["span 8", "2/span 4"],
                display: "flex",
                justifyContent: "start",
                alignItems: "end",
              }}
            >
              <Img
                sx={{
                  width: "100%",
                  img: { width: "70%", objectPosition: "bottom" },
                }}
                imageData={images.artDirection1}
              />
            </Box>
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: "pill",
                isolation: "isolate",
                gridRow: ["span 8", "1/span 2"],
                gridColumn: ["span 8", "6/span 2"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                video: {
                  transform: "scale(1.65)",
                  transformOrigin: "100% 55%",
                },
              }}
            >
              <Video videoData={videos.yellowPurple} />
            </Box>
            <Box
              sx={{
                padding: "10%",
                borderRadius: radius().default,
                background: colors.white,
                gridRow: ["span 8", "3/span 4"],
                gridColumn: ["span 8", "6/span 4"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Img sx={{ width: "70%" }} imageData={images.artDirection2} />
            </Box>
            <Box
              sx={{
                padding: "10%",
                borderRadius: radius().default,
                background: colors.black,
                gridRow: ["span 8", "7/span 4"],
                gridColumn: ["span 8", "2/span 4"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Img sx={{ width: "70%" }} imageData={images.artDirection3} />
            </Box>
            <Box
              sx={{
                gridRow: ["span 8", "7/span 4"],
                gridColumn: ["span 8", "6/span 4"],
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Img sx={{ width: "70%" }} imageData={images.artDirection4} />
            </Box>
            <Box
              sx={{
                padding: "10%",
                borderRadius: radius().default,
                background: colors.black,
                gridRow: ["span 8", "11/span 4"],
                gridColumn: ["span 8", "6/span 4"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Img sx={{ width: "70%" }} imageData={images.artDirection5} />
            </Box>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: radius().default,
                background: colors.pink,
                gridRow: ["span 8", "13/span 2"],
                gridColumn: ["span 8", "4/span 4"],
                display: "flex",
                zIndex: -1,
                justifyContent: "start",
                alignItems: "end",
              }}
            >
              <Img
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "50%",
                  img: { width: "70%", objectPosition: "bottom" },
                }}
                imageData={images.artDirection6}
              />
            </Box>
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: radius().default,
                background: colors.black,
                gridRow: ["span 8", "15/span 3"],
                gridColumn: ["span 8", "2/span 2"],
                display: "flex",
                justifyContent: "start",
                alignItems: "end",
              }}
            >
              <Img
                sx={{
                  width: "100%",
                  img: { width: "70%", objectPosition: "bottom" },
                }}
                imageData={images.artDirection7}
              />
            </Box>
            <Box
              sx={{
                padding: "5%",
                borderRadius: radius().default,
                background: colors.black,
                gridRow: ["span 8", "16/span 4"],
                gridColumn: ["span 8", "6/span 4"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Img sx={{ width: "70%" }} imageData={images.artDirection8} />
            </Box>

            <Box
              sx={{
                overflow: "hidden",
                borderRadius: radius().default,
                background: colors.white,
                gridRow: ["span 8", "18/span 4"],
                gridColumn: ["span 8", "2/span 4"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Img sx={{ width: "100%" }} imageData={images.artDirection9} />
            </Box>
          </GridParent>
          <GridParent>
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: radius().default,
                background: colors.black,
                gridRow: ["span 8", "3/span 4"],
                gridColumn: ["span 8", "2/span 5"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ScrollReveal
                sx={{
                  width: "100%",
                }}
              >
                <Img imageData={images.grow} />
              </ScrollReveal>
            </Box>
            <Box
              sx={{
                top: "60px",
                position: "relative",
                overflow: "hidden",
                zIndex: 1,
                borderRadius: radius().default,
                background: colors.white,
                gridRow: ["span 8", "3/span 7"],
                gridColumn: ["span 8", "6/span 4"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ScrollReveal
                effect={[{ translateY: 50 }, { translateY: 0 }]}
                sx={{
                  width: "100%",
                }}
              >
                <Img imageData={images.flow} />
              </ScrollReveal>
            </Box>
            <Box
              sx={{
                gridRow: ["span 8", "7/span 8"],
                gridColumn: ["span 8", "2/span 3"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ScrollReveal>
                <Text variant="heading">Typography</Text>
                <Text variant="lead" mb={8}>
                  We came up with a variety of wavy patterns to represent flow
                  and movement. A concept that sits closely to the financial
                  term liquidity.
                </Text>
                <Text variant="lead" mb={10}>
                  Some of the shapes are also animated to further emphasize
                  movement.
                </Text>
              </ScrollReveal>
            </Box>
          </GridParent>
        </>
      );
    },
  };

  return (
    <>
      <GridParent>
        <CaseMeta data={data} />
      </GridParent>
      {Object.entries(Sections).map(([k, Section]) => (
        <Section key={k} />
      ))}
    </>
  );
};

export default Capchase;
