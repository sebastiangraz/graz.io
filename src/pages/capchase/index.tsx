/** @jsxImportSource theme-ui */

import {
  GridParent,
  Img,
  NumberedList,
  ScrollReveal,
  Video,
} from "../../components";
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
                threshold={0.5}
                onChangeIndex={(index) => console.log("Active index:", index)}
              >
                <Img fromFolder="capchase" src={images.capchaseBB0} />
                <Img fromFolder="capchase" src={images.capchaseBB1} />
                <Img fromFolder="capchase" src={images.capchaseBB2} />
                <Img fromFolder="capchase" src={images.capchaseBB3} />
              </Carousel>

              {/* <ScrollReveal>
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
              </ScrollReveal> */}
            </Box>
            <Box
              sx={{ gridColumn: ["2/span 8", "2/span 8", "2/span 6"], mb: 10 }}
            >
              <Text variant="caps" mb={7}>
                Goals
              </Text>
              <NumberedList horizontal>
                <>Create brand and execute it for a very perceptive audience.</>
                <>Position Capchase as a leader in non-dilutable financing.</>
                <>Proofing Capchase’s brand for longevity & recognizability. </>
                <>To look & feel like a business partner not a business tool.</>
              </NumberedList>
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
                <Img
                  sx={{ width: "100%" }}
                  fromFolder="capchase"
                  src={images.pinkorb}
                />
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
                  fromFolder="capchase"
                  src={images.bluecyan}
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
                  fromFolder="capchase"
                  src={images.bluecyan}
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
                <Img fromFolder="capchase" src={images.phonehand} />
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
                <Img
                  sx={{ width: "100%" }}
                  fromFolder="capchase"
                  src={images.stats}
                />
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
                <Img fromFolder="capchase" src={images.bottle} />
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
                <Img
                  sx={{ width: "100%" }}
                  fromFolder="capchase"
                  src={images.devices}
                />
              </ScrollReveal>
            </Box>

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
                  fromFolder="capchase"
                  src={images.purplecyanorb}
                />
                <Img
                  sx={{
                    transformOrigin: "center 10%",
                    transform: "scale(2)",
                    width: "100%",
                  }}
                  fromFolder="capchase"
                  src={images.shirt}
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
              <Video src={videos.brandbook} fromFolder="capchase" />
            </div>
          </GridParent>
          <GridParent sx={{ mb: [10, 11] }}>
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
              <Img fromFolder="capchase" src={images.brandbook1} />
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
              <Img fromFolder="capchase" src={images.brandbook2} />
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
              <Img fromFolder="capchase" src={images.webdesign} />
            </div>
          </GridParent>
        </>
      );
    },
    Logotype: () => {
      return (
        <>
          <GridParent>
            <Box sx={{ gridColumn: ["2/span 8"] }}>
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
                <Img fromFolder="capchase" src={images.logoart2} />
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
                <Img
                  sx={{ width: "100%" }}
                  fromFolder="capchase"
                  src={images.icons}
                />
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
                <Img fromFolder="capchase" src={images.logoart} />
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
              <Img fromFolder="capchase" src={images.logoart3} />
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
              <Video
                fromFolder="capchase"
                sx={{ height: ["80%"] }}
                src={videos.reveal}
              />
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
              <Img
                sx={{ width: "70%" }}
                fromFolder="capchase"
                src={images.logoart1}
              />
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
                  width: "70%",
                  objectPosition: "bottom",
                }}
                fromFolder="capchase"
                src={images.artDirection1}
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
                  transform: "scale(1)",
                  transformOrigin: "50% 50%",
                },
              }}
            >
              <Video src={videos.swirl} fromFolder="capchase" />
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
              <Img
                sx={{ width: "70%" }}
                fromFolder="capchase"
                src={images.artDirection2}
              />
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
              <Img
                sx={{ width: "70%" }}
                fromFolder="capchase"
                src={images.artDirection3}
              />
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
              <Img
                sx={{ width: "70%" }}
                fromFolder="capchase"
                src={images.artDirection4}
              />
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
              <Img
                sx={{ width: "70%" }}
                fromFolder="capchase"
                src={images.artDirection5}
              />
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
                  // width: ["50%", "100%"],
                  width: ["100%", "70%"],
                  objectPosition: "bottom",
                }}
                fromFolder="capchase"
                src={images.artDirection6}
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
                  width: "70%",
                  objectPosition: "bottom",
                }}
                fromFolder="capchase"
                src={images.artDirection7}
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
              <Img
                sx={{ width: "70%" }}
                fromFolder="capchase"
                src={images.artDirection8}
              />
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
              <Img
                sx={{ width: "100%" }}
                fromFolder="capchase"
                src={images.artDirection9}
              />
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
                <Img fromFolder="capchase" src={images.grow} />
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
                <Img fromFolder="capchase" src={images.flow} />
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
                <Img fromFolder="capchase" src={images.esbuildcss} />
              </ScrollReveal>
            </Box>
          </GridParent>
          <GridParent pt={10} pb={"100vh"}>
            <Box sx={{ mr: [0, 7], gridColumn: ["2 / span 8", "2/span 4"] }}>
              <Text variant="heading">Closing thoughts</Text>
              <Text variant="lead" sx={{ maxWidth: 600 }}>
                The amazing folks at Capchase inspired me to create one of my
                best works yet. While I was responsible for most design aspects
                of this project. It was a highly collaborate process with great
                feedback from start to finish that made the final outcome so
                much better.
              </Text>
            </Box>
            <Box sx={{ ml: [0, 7], gridColumn: ["2/ span 8", "6/span 4"] }}>
              <Text variant="heading">​</Text>

              <Text variant="lead" sx={{ maxWidth: 600 }}>
                As always; branding is never “checked off” from a to-do list.
                It’s something that continously grows together with the company
                and it’s values. I’m very excited to see what Capchase will
                build on top of this brand foundation.
              </Text>
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
