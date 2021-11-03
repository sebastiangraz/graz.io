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
import { colors, images, vectors, videos } from "./assets";
import { Text, Box } from "theme-ui";

const radius = (small) => {
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

// const phoneBorder = () => {
//   return {
//     // boxShadow: "capchase", too laggy
//     position: "relative",
//     zIndex: "0",
//     "&:after": {
//       borderRadius: radius().default,
//       content: "''",
//       position: "absolute",
//       left: 0,
//       top: 0,
//       width: "100%",
//       height: "100%",
//       zIndex: "1",
//       boxShadow:
//         "inset 0px 3px 1px -2px #FFF7E8, inset 0px -1px 1px -1px rgba(73, 46, 34, 0.5), inset 0px 0px 5px -1px #C66705, inset 0px 0px 1px 3px #E9D9C0",
//     },
//     "&:before": {
//       borderRadius: radius().default,
//       content: "''",
//       position: "absolute",
//       left: "1px",
//       top: "1px",
//       width: "calc(100% - 2px)",
//       height: "calc(100% - 2px)",
//       zIndex: "1",
//       boxShadow: ["0 0 0 5px #000 inset", "0 0 0 8px #000 inset"],
//     },
//   };
// };

const Capchase = ({ data }) => {
  const Sections = {
    Intro: () => {
      return (
        <>
          <GridParent>
            <Box sx={{ gridColumn: ["2/span 8", " 2/span 5"] }}>
              <ScrollReveal>
                <Text variant="lead" mb={8} sx={{ maxWidth: 520 }}>
                  Capchase, one of the largest non-dilutive funding companies
                  needed a time sensitive visual refresh of all their digital &
                  print assets.
                </Text>
                <Text variant="lead" mb={10} sx={{ maxWidth: 580 }}>
                  Time was of the essence as they increased their momentum for
                  both brand awareness while establishing their slice of the
                  market. Big&nbsp;slices&nbsp;too.
                </Text>
              </ScrollReveal>
            </Box>
            <Box sx={{ gridColumn: ["2/span 8", "2/span 8", "2/span 6"] }}>
              <Text variant="caps" mb={7}>
                Goals
              </Text>
              <NumberedList
                labelColor={colors.white}
                horizontal
                labels={[
                  "Create brand and execute it for a very perceptive audience.",
                  "Position Capchase as a leader in non-dilutable financing.",
                  "Proofing Capchase’s brand for longevity & recognizability. ",
                  "To look & feel like a business partner not a business tool.",
                ]}
              />
            </Box>
          </GridParent>
          <GridParent sx={{ mb: [10, 11] }}>
            <Box
              sx={{
                position: "relative",

                borderRadius: radius().default,
                background: colors.pink,
                gridRow: ["3/span 2", "3/span 2"],
                gridColumn: ["2/span 3"],
                overflow: "hidden",
              }}
            >
              <ScrollReveal
                effect={[{ rotate: 360 }, { rotate: 0 }]}
                repeat
                repeatTypeLoop
                parentDuration={1}
                duration={10}
                sx={{
                  position: "absolute",
                  top: "50%",
                  width: `70%`,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Img sx={{ width: "100%" }} imageData={images.pinkorb} />
              </ScrollReveal>
            </Box>
            <Box
              sx={{
                borderRadius: radius().default,
                background: colors.blue,
                gridRow: ["1/span 4", "1/span 4"],
                gridColumn: ["5/span 4"],
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ScrollReveal
                repeatParent
                repeat
                parentEffect={[{ translateX: "-50%" }, { translateX: "-17%" }]}
                effect={[{ rotate: -20 }, { rotate: 0 }]}
                duration={3}
                sx={{
                  zIndex: 2,
                  position: "absolute",
                  overflow: "hidden",
                  width: "30%",
                  height: "30%",
                  right: "20%",
                  borderRadius: "pill",
                }}
              >
                <Img
                  sx={{
                    transformOrigin: "25% 71%",
                    transform: "scale(4) rotate(136deg)",
                    width: "100%",
                  }}
                  imageData={images.bluecyan}
                />
              </ScrollReveal>
              <ScrollReveal
                repeatParent
                repeat
                parentEffect={[{ opacity: 1 }, { opacity: 0.6 }]}
                effect={[{ scale: 0.95 }, { scale: 1 }]}
                duration={3}
                sx={{
                  boxShadow: "capchase",
                  zIndex: 1,
                  position: "relative",
                  mx: "25%",
                  overflow: "hidden",
                  width: "100%",
                  height: "30%",
                  borderRadius: "pill",
                }}
              >
                <Img
                  sx={{
                    transformOrigin: "46% 36%",
                    transform: "scale(1.5) ",
                    width: "100%",
                  }}
                  imageData={images.bluecyan}
                />
              </ScrollReveal>
            </Box>
            <Box
              sx={{
                borderRadius: radius().right,
                background: colors.orange,
                gridRow: ["5/span 4"],
                gridColumn: ["1/span 5"],
                overflow: "hidden",
                position: "relative",
              }}
            >
              <ScrollReveal
                effect={[{ translateY: 40 }, { translateY: 0 }]}
                duration={1.5}
                sx={{
                  position: "absolute",
                  top: "16%",
                  left: "10%",

                  width: "100%",
                  img: {
                    width: "100%",
                    height: "80%",
                  },
                }}
              >
                <Img imageData={images.phonehand} />
              </ScrollReveal>
            </Box>
            <Box
              sx={{
                isolation: "isolate",
                borderRadius: radius().default,
                background: colors.purple,
                gridRow: ["5/span 3"],
                gridColumn: ["5/span 3"],
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ScrollReveal
                effect={[{ translateY: 5 }, { translateY: 0 }]}
                duration={1.5}
                sx={{ width: "100%" }}
              >
                <Img sx={{ width: "100%" }} imageData={images.stats} />
              </ScrollReveal>
            </Box>
            <Box
              sx={{
                borderRadius: radius().default,
                background: colors.black,
                position: "relative",
                gridRow: ["5/span 4"],
                gridColumn: ["8/span 3"],
                overflow: "hidden",
                isolation: "isolate",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ScrollReveal
                effect={[{ translateY: -10 }, { translateY: 0 }]}
                duration={1.5}
                sx={{
                  position: "absolute",
                  top: "0%",
                  transform: "translate(-50%, 0%)",
                  left: "50%",
                  width: ["100%", "70%"],
                  img: {
                    width: ["100%", "100%"],
                  },
                }}
              >
                <Img imageData={images.bottle} />
              </ScrollReveal>
            </Box>
            <Box
              sx={{
                borderRadius: radius().default,
                background: "#F0F0EE",
                gridRow: ["9/span 4"],
                gridColumn: ["2/span 4"],

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ScrollReveal
                effect={[{ translateY: 5 }, { translateY: 0 }]}
                duration={1.5}
                sx={{ width: "100%", height: "100%" }}
              >
                <Img cover sx={{ width: "100%" }} imageData={images.devices} />
              </ScrollReveal>
            </Box>
            {/* <Box
              sx={{
                borderRadius: radius().default,
                gridRow: ["13/span 3"],
                gridColumn: ["3/span 3 "],
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                isolation: "isolate",
                video: {
                  objectFit: "cover",
                },
              }}
            >
              <Video
                sx={{
                  transform: "scale(1.5)",
                  overflow: "hidden",
                }}
                videoData={videos.intro}
              />
            </Box> */}
            <Box
              sx={{
                borderRadius: radius().default,
                background: colors.cyan,
                gridRow: ["8/span 8"],
                gridColumn: ["6/span 3"],
                overflow: "hidden",
                zIndex: -1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ScrollReveal
                effect={[{ translateY: 20 }, { translateY: 0 }]}
                duration={1.5}
                sx={{ width: "100%" }}
              >
                <Img
                  sx={{ width: "30%", margin: "20% auto" }}
                  imageData={images.purplecyanorb}
                />
                <Img
                  sx={{
                    img: {
                      transformOrigin: "center 40%",
                      transform: "scale(2)",
                    },
                    width: "100%",
                  }}
                  imageData={images.shirt}
                />
              </ScrollReveal>
            </Box>
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
                handled by the design software.
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
                gridColumn: ["1/ span 10", "1/span 10"],
                img: {
                  transformOrigin: "right",
                  transform: "scale(1.021)",
                },
              }}
            >
              <Img imageData={images.brandbook1} />
            </div>
            <div
              sx={{
                gridRow: "7/span 4",
                gridColumn: ["1/ span 10", "1/span 10"],
                img: {
                  transformOrigin: "right",
                  transform: "scale(1.021)",
                },
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
          <GridParent mb={[10, 11]}>
            <Box
              sx={{
                gridRow: ["1/span 1"],
                gridColumn: ["2/span 8", "2/span 4"],
              }}
            >
              <Text variant="heading">Design Execution</Text>
            </Box>
            <Box
              mb={[7, 8]}
              sx={{
                gridRow: ["2/span 1", "1/span 1"],
                gridColumn: ["2/span 8", "6/span 4"],
              }}
            >
              <Text sx={{ maxWidth: 560 }} variant="lead">
                The direction of the website was formed alongside the visual
                language. Sometimes design discoveries in the final mocks would
                inform the core brand principles, and vice versa.
              </Text>
            </Box>

            <div
              sx={{
                overflow: "hidden",
                gridRow: ["4/span 4", "3/span 4"],
                gridColumn: ["1/ span 10", "1/span 10"],
                img: {
                  transform: "scale(1.05)",
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
            <Box mt={11} sx={{ gridColumn: ["2/span 8"] }}>
              <ScrollReveal>
                <Text variant="heading">Logotype</Text>
                <Text variant="lead" mb={10} sx={{ maxWidth: 800 }}>
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
              <ScrollReveal duration={1.5}> {vectors.logotype}</ScrollReveal>
            </Box>
            <Box mb={[9, 10]} sx={{ gridColumn: ["2/ span 8", " 2/span 8"] }}>
              <ScrollReveal
                effect={[{ translateY: 20 }, { translateY: 0 }]}
                sx={{
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gridGap: [7, 8],
                  gridTemplateColumns: [
                    "auto",
                    "repeat(auto-fit, minmax(min(240px, 100%), auto))",
                  ],
                  width: "100%",
                  padding: 0,
                }}
              >
                <div
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    svg: { width: ["36px", "56px"] },
                  }}
                >
                  {vectors.forwardIcon}
                  <Text
                    sx={{
                      ml: [5, 6],
                      maxWidth: [170, null, null, 200],
                      width: "100%",
                    }}
                    variant="label"
                  >
                    Represents progression and moving forward.
                  </Text>
                </div>
                <div
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    svg: { width: ["36px", "56px"] },
                  }}
                >
                  {vectors.growthIcon}
                  <Text
                    sx={{
                      ml: [5, 6],
                      maxWidth: [170, null, null, 200],
                      width: "100%",
                    }}
                    variant="label"
                  >
                    Displays a sense of growth & adaptability.
                  </Text>
                </div>
                <div
                  sx={{
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ScrollReveal
                    ignoreParentFade
                    sx={{ svg: { width: ["36px", "56px"] } }}
                    duration={2}
                    effect={[{ rotate: -20 }, { rotate: 0 }]}
                  >
                    {vectors.transparentIcon}
                  </ScrollReveal>
                  <Text
                    sx={{
                      ml: [5, 6],
                      maxWidth: [170, null, null, 200],
                      width: "100%",
                    }}
                    variant="label"
                  >
                    Display transparency and humbleness.
                  </Text>
                </div>
              </ScrollReveal>
            </Box>
          </GridParent>
          <GridParent>
            <ScrollReveal
              effect={[{ x: -6 }, { x: 0 }]}
              parentEffect={[{ x: 12 }, { x: 0 }]}
              repeat
              repeatParent
              sx={{
                zIndex: 1,
                position: "relative",
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
            </ScrollReveal>

            <div
              sx={{
                overflow: "hidden",
                boxShadow: "capchase",
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
                <Text mb={6} variant="caps" color={colors.yellow}>
                  Iconograpy
                </Text>
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
              <ScrollReveal
                duration={2}
                repeat
                repeatTypeLoop
                effect={[{ rotate: 0 }, { rotate: 60 }]}
              >
                <Img imageData={images.logoart} />
              </ScrollReveal>
            </div>
            <div
              sx={{
                isolation: "isolate",
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
                gridRow: ["5/span 14", "1/span 7", "1/span 5"],
                gridColumn: ["2/span 8", "6/span 4"],
                alignItems: ["start"],
                display: "grid",
                zIndex: 2,
              }}
            >
              <Box
                sx={{
                  borderRadius: radius().default,
                  bottom: 0,
                  p: [7, 7, 8],
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
              <Video sx={{ height: ["80%"] }} videoData={videos.reveal} />
            </div>
            <div
              sx={{
                padding: "10%",
                borderRadius: radius().default,
                background: [colors.white],
                gridRow: ["span 4", "8/span 2", "6/span 2"],
                gridColumn: ["2/ span 4", "6/span 2", "7/span 2"],
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
            <Box mt={[10, 11]} sx={{ gridColumn: ["2/ span 8", " 2/span 8"] }}>
              <ScrollReveal>
                <Text variant="heading">Art Direction</Text>
                <Text sx={{ maxWidth: 720 }} variant="lead" mb={[9, 10]}>
                  We came up with a variety of wave patterns to represent flow
                  and movement. A concept that sits closely to the financial
                  term; liquidity.
                </Text>
              </ScrollReveal>
            </Box>
          </GridParent>

          <GridParent>
            <Box
              sx={{
                overflow: "hidden",
                isolation: "isolate",
                borderRadius: radius().default,
                background: colors.black,
                gridRow: ["span 4", "1/span 4"],
                gridColumn: ["2/span 4", "2/span 4"],
                display: "flex",
                justifyContent: "start",
                alignItems: "end",
              }}
            >
              <Img
                sx={{
                  width: "100%",
                  img: {
                    width: "70%",
                    objectPosition: "bottom",
                  },
                }}
                imageData={images.artDirection1}
              />
            </Box>
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: "pill",
                isolation: "isolate",
                gridRow: ["span 4", "1/span 2"],
                gridColumn: ["6/span 4", "6/span 2"],
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
                padding: ["5%", "10%"],
                borderRadius: radius().default,
                background: colors.white,
                gridRow: ["span 8", "3/span 4"],
                gridColumn: ["2/span 8", "6/span 4"],
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
                gridRow: ["span 4", "7/span 4"],
                gridColumn: ["2/span 4", "2/span 4"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Img sx={{ width: "70%" }} imageData={images.artDirection3} />
            </Box>
            <Box
              sx={{
                gridRow: ["span 4", "7/span 4"],
                gridColumn: ["span 4", "6/span 4"],
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
                gridColumn: ["2/span 8", "6/span 4"],
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
                gridRow: ["span 3", "13/span 2"],
                gridColumn: ["2/span 4", "4/span 4"],
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
                  width: ["50%", "100%"],
                  img: { width: ["100%", "70%"], objectPosition: "bottom" },
                }}
                imageData={images.artDirection6}
              />
            </Box>
            <Box
              sx={{
                isolation: "isolate",
                overflow: "hidden",
                borderRadius: radius().default,
                background: colors.black,
                gridRow: ["span 4", "15/span 3"],
                gridColumn: ["span 4", "2/span 2"],
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
                gridColumn: ["2/span 8", "6/span 4"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Img sx={{ width: "70%" }} imageData={images.artDirection8} />
            </Box>

            <Box
              sx={{
                isolation: "isolate",
                overflow: "hidden",
                borderRadius: radius().default,
                background: colors.white,
                gridRow: ["span 4", "18/span 4"],
                gridColumn: ["2/span 4", "2/span 4"],
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
                boxShadow: "capchase",
                overflow: "hidden",
                borderRadius: radius().default,
                background: colors.black,
                gridRow: ["2/span 8", "7/span 4"],
                gridColumn: ["2/span 8", "2/span 5"],
                display: "flex",
                zIndex: [2, 0],
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ScrollReveal
                duration={3}
                effect={[{ scale: 0.95 }, { scale: 1 }]}
                sx={{
                  position: "relative",
                  left: ["16%", 0],
                  width: ["100%"],
                }}
              >
                <Img imageData={images.grow} />
              </ScrollReveal>
            </Box>
            <Box
              sx={{
                top: [null, "3%"],
                position: "relative",
                overflow: "hidden",
                zIndex: 1,
                borderRadius: radius().default,
                background: colors.white,
                gridRow: ["9/span 8", "4/span 6"],
                gridColumn: ["2/span 8", "6/span 4"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ScrollReveal
                duration={3}
                effect={[{ translateY: -50 }, { translateY: 0 }]}
                sx={{
                  width: "100%",
                }}
              >
                <Img imageData={images.flow} />
              </ScrollReveal>
            </Box>
            <Box
              mt={[10, 0]}
              sx={{
                gridRow: ["1/span 1", "4/span 6"],
                gridColumn: ["2/span 8", "2/span 4"],
              }}
            >
              <ScrollReveal>
                <Text variant="heading">Typography</Text>
                <Text
                  variant="lead"
                  mb={8}
                  sx={{ maxWidth: ["100%", 620], mr: [0, 8] }}
                >
                  We chose a geometric sans-serif named ES Build for it’s
                  inherent neutrality and simplicity. The rounded features go
                  hand in hand with the wave illustrations.
                </Text>
              </ScrollReveal>
            </Box>
            <Box
              sx={{
                gridRow: ["span 8", "9/span 8"],
                gridColumn: ["2/span 8", "2/span 4"],
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text variant="lead" mt={10} mb={9}>
                The chosen typeface works well both for headings as well as body
                copy. Since you can control the level of neutrality with some
                nifty CSS features.
              </Text>
            </Box>
            <Box
              sx={{
                position: "relative",
                gridRow: ["span 8", "12/span 2"],
                gridColumn: ["3/span 6", "8/span 2"],
              }}
            >
              <ScrollReveal
                sx={{
                  width: "100%",
                }}
              >
                <Img imageData={images.esbuildcss} />
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
