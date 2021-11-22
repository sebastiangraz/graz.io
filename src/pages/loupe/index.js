/** @jsxImportSource theme-ui */

import { Flex, Text, Box } from "theme-ui";
import {
  Video,
  Img,
  GridParent,
  CaseMeta,
  ScrollReveal,
  NumberedList,
} from "../../components";
import { Logo } from "./Logo";
import { videos, images, colors } from "./assets";

const Loupe = ({ data }) => {
  const Sections = {
    Define: () => {
      return (
        <GridParent py={[9, 10]}>
          <Box
            mb={10}
            sx={{
              gridRow: ["span 1", "span 1"],
              gridColumn: ["2 / span 8", "2/span 8"],
            }}
          >
            <Text variant="heading" sx={{ maxWidth: 890 }}>
              Loupe is a conference held by Framer each year. The 3rd edition of
              the conference was planned to be held in Amsterdam 2020, but was
              cancelled due to COVID-19. Below you’ll find the progress of that
              work.
            </Text>
          </Box>

          <div
            sx={{
              gridRow: ["span 4", "span 4"],
              gridColumn: ["2 / span 8", "2/span 4"],
            }}
          >
            <NumberedList
              sx={{ mr: [0, null, 9, 5], mt: [10, 0], mb: 9 }}
              bgColor={colors.green}
              labelColor={data.bg}
            >
              <>
                Create a highly creative page for sharability and social push.
              </>
              <>Position Framer as a market leader in design & prototyping</>
              <>Inspire designers around the world to attend Loupe.</>
            </NumberedList>
          </div>

          <Box
            sx={{
              gridRow: ["2 / span 8", "span 4"],
              gridColumn: ["2 / span 8", "7/span 4", "6/span 4"],
            }}
          >
            <Video
              sx={{ video: { objectFit: "cover" } }}
              videoData={videos.loupeMesh}
            />
          </Box>
          <div
            sx={{
              overflow: "hidden",
              borderRadius: "99em 0 99em 99em",
              background: "#F60000",
              gridRow: ["10 / span 4", "span 2"],
              gridColumn: ["6 / span 4", "5/span 2", "4/span 2"],
            }}
          >
            <ScrollReveal
              repeat
              ignoreParentFade
              repeatTypeLoop
              duration={10}
              effect={[{ rotate: 0 }, { rotate: -360 }]}
            >
              <Img
                sx={{ transform: "scale(1.5)" }}
                imageData={images.monomeshMagenta}
              ></Img>
            </ScrollReveal>
          </div>

          <div
            sx={{
              overflow: "hidden",
              borderRadius: "pill",
              gridRow: ["10 / span 4", "span 2", "span 2"],
              gridColumn: ["2 / span 4", "3 / span 2", "2/span 2"],
            }}
          >
            <ScrollReveal
              repeat
              duration={4}
              effect={[{ rotate: 0 }, { rotate: 90 }]}
            >
              <Img
                sx={{ transform: "scale(1.5)" }}
                imageData={images.monomeshOrange}
              ></Img>
            </ScrollReveal>
          </div>
        </GridParent>
      );
    },
    Branding: () => {
      return (
        <>
          <GridParent py={[9, 10]}>
            <Box sx={{ mr: [0, 7], gridColumn: ["2 / span 8", "2/span 4"] }}>
              <Text variant="lead" sx={{ maxWidth: [440] }}>
                Loupe being a fairly young event, faced the challenge of
                attracting new conference-goers as well as retaining previous
                attendees.
              </Text>
              <Text variant="lead" sx={{ maxWidth: [440] }}>
                It had to feel like a new and exciting event, while keeping the
                brand trust that the conference had built up during the years.
              </Text>
            </Box>
            <Box sx={{ ml: [0, 7], gridColumn: ["2/ span 8", "6/span 4"] }}>
              <Text variant="lead" sx={{ maxWidth: [360, 440] }}>
                Previous identities were branched of Framers own brand. But this
                year Loupe put on a new distinguished look.{" "}
              </Text>
              <Text variant="lead" sx={{ maxWidth: [360, 440] }}>
                The identity aimed to be extendable and work well both as pixels
                and as printed media.
              </Text>
            </Box>
          </GridParent>
          <GridParent>
            <div
              sx={{
                overflow: "hidden",
                gridRow: ["span 4", "span 4"],
                gridColumn: ["1/span 10", "1/span 10"],
                img: {
                  transform: "scale(1.05)",
                },
              }}
            >
              <ScrollReveal effect={[{ translateY: 10 }, { translateY: 0 }]}>
                <Img imageData={images.webdesign} />
              </ScrollReveal>
            </div>
          </GridParent>
          <GridParent py={10}>
            <Box
              sx={{
                gridColumn: ["2 / span 8", "2 / span 8"],
              }}
            >
              <Text variant="heading">Logotype</Text>
            </Box>
            <Box
              mb={10}
              sx={{
                gridColumn: ["2 / span 8", "2 / span 2"],
              }}
            >
              <Text mb={[9, 10]}>
                I created the logo to represent multiple meanings and values.
              </Text>
              <Box sx={{ width: ["60%", "100%"], margin: "0 auto" }}>
                <Logo></Logo>
              </Box>
            </Box>
            <Box
              mb={10}
              sx={{
                gridColumn: ["2 / span 8", "5 / span 2"],
              }}
            >
              <Text mb={[9, 10]}>
                Ultimately it is up to the observer to decide what meanings they
                see.
              </Text>
              <ScrollReveal
                delay={0.2}
                effect={[{ scale: 0.9 }, { scale: 1 }]}
                duration={3}
                repeat
                sx={{
                  width: ["60%", "100%"],
                  margin: "0 auto",
                  position: "relative",
                  paddingBottom: ["60%", "100%"],
                  "& > *": {
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    position: ["absolute"],
                  },
                }}
              >
                <Img imageData={images.logopart1} />
                <Img imageData={images.logopart2} />
                <Img imageData={images.logopart3} />
                <Img imageData={images.logopart4} />
              </ScrollReveal>
            </Box>
            <Box
              sx={{
                margin: "0 auto",
                overflow: "hidden",
                position: "relative",
                gridColumn: ["2 / span 8", "8 / span 2"],
              }}
            >
              <Text mb={[9, 10]}>
                The logo can extend its usage into additional patterns or
                shapes.
              </Text>
              <ScrollReveal
                delay={0.2}
                effect={[{ rotate: 45 }, { rotate: 0 }]}
                duration={4}
                repeat
                sx={{
                  width: ["60%", "100%"],
                  margin: "0 auto",
                  position: "relative",
                  paddingBottom: ["60%", "100%"],
                  "& > *": {
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    position: "absolute",
                  },
                }}
              >
                <Img imageData={images.logoassemble1} />
                <Img imageData={images.logoassemble2} />
                <Img imageData={images.logoassemble3} />
              </ScrollReveal>
            </Box>
          </GridParent>
          <GridParent py={[9, 10]}>
            <Flex
              sx={{
                mr: [0, 9],
                flexDirection: "column",
                gridRow: ["span 4", "1/span 4"],
                gridColumn: ["2 / span 8", "2 / span 4"],
                justifyContent: "center",
              }}
            >
              <Text variant="heading">Icons</Text>
              <Text variant="lead" sx={{ maxWidth: 640 }}>
                The somewhat unremarkable shapes is what makes the icons unique.
                And yet an important addition to the Loupe brand.
              </Text>
            </Flex>
            <Box
              mt={[5, 0]}
              sx={{
                gridRow: ["span 4", "1/span 4"],
                gridColumn: ["1/span 10", "6 / span 4"],
                background: "#003807",
              }}
            >
              <ScrollReveal>
                <Video videoData={videos.icons} />
              </ScrollReveal>
            </Box>
          </GridParent>
          <GridParent py={10}>
            <Box
              mb={8}
              sx={{
                gridRow: ["2/span 1", null, "1 / span 1", "2/span 3"],
                gridColumn: ["2/span 8", "6/span 4", null, "6/span 4"],
              }}
            >
              <Text variant="heading">Typography</Text>
              <Text variant="lead">
                Typography was put together to feel approachable and friendly.
                Previous Loupe branding languages felt masculine and bold. With
                the goal to attract a more diverse audience the typefaces had to
                follow suit.
              </Text>
            </Box>

            <div
              sx={{
                background: colors.white,

                gridRow: ["3 / span 2", "5 / span 1"],
                gridColumn: ["6 / span 2", "6 / span 1"],
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              <div
                sx={{
                  objectFit: "contain",
                  maxWidth: 60,
                  width: ["60%", "80%"],
                  margin: "0 auto",
                }}
              >
                <Img imageData={images.twentytwenty} />
              </div>
            </div>
            <div
              sx={{
                backgroundColor: "#E900A1",
                backgroundImage: `url(${images.monomeshRed2.url.default})`,
                backgroundSize: "100%",

                gridRow: ["5 / span 3", "5 / span 2"],
                gridColumn: ["6 / span 4", "7 / span 3"],
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                zIndex: 2,
                justifyContent: "center",
              }}
            >
              <div
                sx={{
                  objectFit: "contain",
                  maxWidth: 310,
                  padding: "8%",
                  margin: "0 auto",
                  width: "100%",
                }}
              >
                <ScrollReveal
                  delay={0.2}
                  effect={[{ translateY: 10 }, { translateY: 0 }]}
                >
                  <Img imageData={images.styrenebold} />
                </ScrollReveal>
              </div>
            </div>

            <div
              sx={{
                background: colors.beige,
                gridRow: ["3 / span 4", "2 / span 3"],
                gridColumn: ["2 / span 4", "2 / span 3"],
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                sx={{
                  objectFit: "contain",
                  width: ["40%", "60%"],
                  margin: "0 auto",
                  height: "auto",
                }}
              >
                <ScrollReveal effect={[{ translateY: 10 }, { translateY: 0 }]}>
                  <Img imageData={images.raisonne} />
                </ScrollReveal>
              </div>
              <Text
                sx={{
                  mt: 7,
                  display: ["none", "block"],
                  color: colors.green,
                  textAlign: "center",
                  padding: "0 8px",
                }}
              >
                Raisonne for headers
              </Text>
            </div>
            <div
              sx={{
                backgroundColor: "#003807",
                gridRow: ["7 / span 5", "5 / span 3"],
                gridColumn: ["3 / span 5", "4 / span 3"],
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                position: "relative",
              }}
            >
              <div
                sx={{
                  objectFit: "contain",
                  objectPosition: "left",
                  maxWidth: 309,
                  height: "auto",
                  paddingRight: ["12%", 40],
                  paddingLeft: ["12%", 40],
                  paddingBottom: ["12%", 40],
                  zIndex: 2,
                }}
              >
                <ScrollReveal
                  delay={0.1}
                  effect={[{ translateY: 10 }, { translateY: 0 }]}
                >
                  <Img imageData={images.styrene} />
                </ScrollReveal>
              </div>
              <div
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Img imageData={images.monomeshCyan1}></Img>
              </div>
            </div>
          </GridParent>
          <GridParent py={[9, 10]}>
            <Box
              sx={{
                gridRow: ["11/span 1", "4/span 3", "3/span 3", "3/span 2"],
                gridColumn: ["2/span 8", "6/span 4", "5/span 5", "4/span 5"],
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div sx={{ paddingTop: [5], paddingBottom: [5] }}>
                <Text variant="caps" mt={[7, 0]} mb={[null, 5, 5, 6]}>
                  Beyond static
                </Text>
                <Text sx={{ maxWidth: ["100%", null, null, 460] }}>
                  I used different displacement methods to bring the colourful
                  assets into life. Also composited photography with animated
                  skies.
                </Text>
              </div>
            </Box>
            <div
              sx={{
                background: colors.green,
                gridRow: ["4/span 4", "4/span 3", "3/span 3", "3/span 2"],
                gridColumn: ["1/span 6", "1/span 4", "1/span 3", "2/span 2"],
                display: "flex",
                padding: ["16%"],
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                isolation: "isolate",
              }}
            >
              <ScrollReveal sx={{ width: "100%" }}>
                <Video
                  sx={{
                    backgroundColor: colors.green,
                    video: {
                      borderRadius: "50%",
                      overflow: "hidden",
                    },
                  }}
                  videoData={videos.mesh1}
                />
              </ScrollReveal>
            </div>
            <Box
              sx={{
                background: "transparent",

                gridRow: ["1 / span 3", null, "1 / span 2"],
                gridColumn: [
                  "3 / span 8",
                  "5 / span 6",
                  "4 / span 7",
                  "4 / span 5",
                ],
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Video videoData={videos.muziekclip} />
            </Box>
            <div
              sx={{
                background: colors.orange,
                gridRow: ["7 / span 4", null, "6 / span 5", "5 / span 4"],
                gridColumn: [
                  "3 / span 6",
                  "5 / span 5",
                  "4 / span 5",
                  "4 / span 5",
                ],
                display: "flex",
                padding: ["16%"],
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                isolation: "isolate",
              }}
            >
              <ScrollReveal delay={0.2} sx={{ width: "100%" }}>
                <Video
                  sx={{
                    video: {
                      borderRadius: "50%",
                      overflow: "hidden",
                    },
                  }}
                  videoData={videos.mesh}
                />
              </ScrollReveal>
            </div>
          </GridParent>
        </>
      );
    },
    Design: () => {
      return (
        <>
          <GridParent pt={10}>
            <Box sx={{ mr: [0, 7], gridColumn: ["2 / span 8", "2/span 4"] }}>
              <Text variant="heading">Web design</Text>
              <Text variant="lead" sx={{ maxWidth: 620 }}>
                Creating the web page was a matter of using the branding
                elements together. New ideas and changes to the site also
                informed the overall branding look & feel.
              </Text>
            </Box>
            <Box sx={{ ml: [0, 7], gridColumn: ["2/ span 8", "6/span 4"] }}>
              <Text variant="heading">​</Text>

              <Text variant="lead" sx={{ maxWidth: 540 }}>
                It would be difficult put a dot on the branding and call it a
                “done”. It will always evolve over time together with the rest
                of the design.
              </Text>
            </Box>
          </GridParent>
          <GridParent py={10} sx={{ overflow: "hidden" }}>
            <div
              sx={{
                gridRow: ["span 1", "span 1"],
                gridColumn: ["1/span 10", "1/span 10"],
                img: {
                  transformOrigin: "top center",
                  transform: ["scale(1.05)"],
                },
              }}
            >
              <ScrollReveal effect={[{ translateY: 10 }, { translateY: 0 }]}>
                <Img imageData={images.exe1} />
              </ScrollReveal>
              <ScrollReveal>
                <Img imageData={images.exe2} />
              </ScrollReveal>
              <ScrollReveal>
                <Img imageData={images.exe3} />
              </ScrollReveal>
              <ScrollReveal>
                <Img imageData={images.exe4} />
              </ScrollReveal>
              {/* <Img imageData={images.execution} /> */}
            </div>
          </GridParent>
          <GridParent pt={10} pb={"100vh"}>
            <Box sx={{ mr: [0, 7], gridColumn: ["2 / span 8", "2/span 4"] }}>
              <Text variant="heading">Closing thoughts</Text>
              <Text variant="lead" sx={{ maxWidth: 560 }}>
                Sadly, Loupe 2020 didn’t happen. What you see is the preliminary
                work for the overall branding and a somewhat finished website. A
                lot of bits and pieces are still missing such as venue design
                and printing work.
              </Text>
            </Box>
            <Box sx={{ ml: [0, 7], gridColumn: ["2/ span 8", "6/span 4"] }}>
              <Text variant="heading">​</Text>

              <Text variant="lead" sx={{ maxWidth: 560 }}>
                Unpredicable pandemics aside, I had the chance to work on a very
                fulfilling project where I could wear many hats, and challenge
                my creativity from conception to the finish line.
              </Text>
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

export default Loupe;
