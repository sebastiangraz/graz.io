/** @jsxImportSource theme-ui */

import { Flex, Text, Box, Heading, Grid } from "theme-ui";
import {
  Video,
  Img,
  GridParent,
  CaseMeta,
  ScrollReveal,
  NumberedList,
} from "../../components";
import { Logo } from "./Logo";
import { videos, images } from "./assets";

const colors = {
  red: "#f60000",
  cyan: "#3edbff",
  orange: "#f47722",
  green: "#003807",
  beige: "#fcf6f5",
  magenta: "#e900a1",
  maroon: "#560000",
  white: "#FCF6F5",
};

const Loupe = ({ data }) => {
  const Sections = {
    Define: () => {
      return (
        <GridParent py={10}>
          <Flex
            mb={10}
            sx={{
              placeSelf: "center",
              width: "100%",
              gridRow: ["span 1", "span 1"],
              gridColumn: ["span 8", "2/span 8"],
            }}
          >
            <Text variant="heading">
              Loupe is a conference held by Framer each year. The 3rd edition of
              the conference was planned to be held in Amsterdam 2020, but was
              cancelled due to COVID-19. Below you'll find the progress of that
              work.
            </Text>
          </Flex>

          <div
            sx={{
              gridRow: ["span 4", "span 4"],
              gridColumn: ["5 / span 4", "2/span 4"],
            }}
          >
            <NumberedList
              bgColor={colors.green}
              labelColor={data.bg}
              labels={[
                "Create brand and execute it for a very perceptive audience.",
                "Position Capchase as a leader in non-dilutable financing.",
                "Proofing Capchase’s brand for longevity & recognizability. ",
              ]}
            />
          </div>

          <Box
            sx={{
              bg: colors.green,
              gridRow: ["span 4", "span 4"],
              gridColumn: ["5 / span 4", "6/span 4"],
            }}
          >
            <Video videoData={videos.loupeMesh} />
          </Box>
          <div
            sx={{
              overflow: "hidden",
              borderRadius: "99em 0 99em 99em",
              background: "#F60000",
              gridRow: ["span 4", "span 2"],
              gridColumn: ["5 / span 4", "4/span 2"],
            }}
          >
            <Img imageData={images.monomeshMagenta}></Img>
          </div>

          <div
            sx={{
              overflow: "hidden",
              borderRadius: "pill",
              gridRow: ["8 / span 2", "span 2"],
              gridColumn: ["3 / span 2", "2/span 2"],
            }}
          >
            <Img
              sx={{
                transform: "rotate(120deg) scale(2)",
                transformOrigin: "40% 60%",
              }}
              imageData={images.monomeshOrange}
            />
          </div>
        </GridParent>
      );
    },
    Branding: () => {
      return (
        <>
          <GridParent py={10}>
            <Box sx={{ mr: 7, gridColumn: ["span 8", "2/span 4"] }}>
              <Text variant="lead">
                Loupe being a fairly young event, faced the challenge of
                attracting new conference-goers as well as retaining previous
                attendees.
              </Text>
              <Text variant="lead">
                It had to feel like a new and exciting event, while keeping the
                brand trust that the conference had built up during the years.
              </Text>
            </Box>
            <Box sx={{ ml: 7, gridColumn: ["span 8", "6/span 4"] }}>
              <Text variant="lead">
                Previous identities were branched of Framers own brand. But this
                year Loupe put on a new distinguished look.{" "}
              </Text>
              <Text variant="lead">
                The identity aimed to be extendable and work well both as pixels
                and as printed media.
              </Text>
            </Box>
          </GridParent>
          <GridParent>
            <div
              sx={{
                gridRow: ["span 4", "span 4"],
                gridColumn: ["2/ span 8", "1/span 10"],
                img: {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Img imageData={images.webdesign} />
            </div>
          </GridParent>
          <GridParent py={10}>
            <Box
              sx={{
                gridColumn: ["2 / span 8", "2 / span 8"],
              }}
            >
              <Text variant="heading" mb={9}>
                Logotype
              </Text>
            </Box>
            <Box
              sx={{
                gridColumn: ["1 / span 8", "2 / span 2"],
              }}
            >
              <Text variant="label" mb={9}>
                I created the logo to represent multiple meanings and values.
              </Text>
              <Logo></Logo>
            </Box>
            <Box
              sx={{
                gridColumn: ["1 / span 8", "5 / span 2"],
              }}
            >
              <Text variant="label" mb={9}>
                Ultimately it is up to the observer to decide what meanings they
                see.
              </Text>
              <ScrollReveal
                delay={0.2}
                effect={[{ scale: 0.9 }, { scale: 1 }]}
                duration={3}
                sx={{
                  "& > *": {
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    position: "absolute",
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
                position: "relative",
                gridColumn: ["1 / span 8", "8 / span 2"],
              }}
            >
              <Text variant="label" mb={9}>
                The logo can extend its usage into additional patterns or
                shapes.
              </Text>
              <ScrollReveal
                delay={0.4}
                effect={[{ scale: 0.9 }, { scale: 1 }]}
                duration={3}
                sx={{
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
          <GridParent py={10}>
            <Flex
              sx={{
                mr: 9,
                flexDirection: "column",
                gridRow: ["span 4", "1/span 4"],
                gridColumn: ["1 / span 8", "2 / span 3"],
                placeSelf: "center",
              }}
            >
              <Text variant="heading">Icons</Text>
              <Text variant="lead">
                The somewhat unremarkable shapes is what makes the icons unique.
                And yet an important addition to the Loupe brand.
              </Text>
            </Flex>
            <div
              sx={{
                gridRow: ["span 4", "1/span 4"],
                gridColumn: ["1 / span 8", "6 / span 4"],
                background: "#003807",
              }}
            >
              <Video videoData={videos.icons} />
            </div>
          </GridParent>
          <GridParent py={10}>
            <div
              sx={{
                gridRow: ["1 / span 1", "1 / span 3"],
                gridColumn: ["1 / span 8", "6 / span 4"],
              }}
            >
              <Text variant="heading">Typography</Text>
            </div>
            <div
              sx={{
                gridRow: ["1 / span 1", "2 / span 3"],
                gridColumn: ["1 / span 8", "6 / span 4"],
              }}
            >
              <Text variant="lead">
                Typography was put together to feel approachable and friendly.
                Previous Loupe branding languages felt masculine and bold. With
                the goal to attract a more diverse audience the typefaces had to
                follow suit.
              </Text>
            </div>

            <div
              sx={{
                background: colors.white,

                gridRow: ["3 / span 2", "5 / span 1"],
                gridColumn: ["5 / span 2", "6 / span 1"],
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
                  width: "80%",
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
                gridColumn: ["5 / span 4", "7 / span 3"],
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
                <Img imageData={images.styrenebold} />
              </div>
            </div>

            <div
              sx={{
                background: colors.white,
                gridRow: ["3 / span 4", "2 / span 3"],
                gridColumn: ["1 / span 4", "2 / span 3"],
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
                <Img imageData={images.raisonne} />
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
                gridColumn: ["2 / span 5", "4 / span 3"],
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
                <Img imageData={images.styrene} />
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
          <GridParent py={10}>
            <Box
              sx={{
                gridRow: ["11 / span 1", "3/ span 3"],
                gridColumn: ["3 / span 6", "6/ span 3"],
                display: "flex",
                flexDirection: "column",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div sx={{ paddingTop: [5], paddingBottom: [5] }}>
                <Text variant="caps" my={[7, 5, 5, 7]}>
                  Beyond static
                </Text>
                <Text>
                  I used different displacement methods to bring the colourful
                  assets into life. Also composited photography with animated
                  skies.
                </Text>
              </div>
            </Box>
            <div
              sx={{
                background: colors.green,

                gridRow: ["4 / span 4", "3 / span 3"],
                gridColumn: ["1 / span 6", "2 / span 3"],
                display: "flex",
                padding: ["16%"],
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                isolation: "isolate",
              }}
            >
              <Video
                sx={{
                  mixBlendMode: "lighten",
                  backgroundColor: colors.green,
                  video: {
                    borderRadius: "50%",
                    overflow: "hidden",
                  },
                }}
                videoData={videos.mesh1}
              />
            </div>
            <Box
              sx={{
                background: "transparent",

                gridRow: ["1 / span 3", "1 / span 2"],
                gridColumn: ["3 / span 6", "5 / span 5"],
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

                gridRow: ["7 / span 4", "6 / span 5"],
                gridColumn: ["3 / span 6", "5 / span 5"],
                display: "flex",
                padding: ["16%"],
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                isolation: "isolate",
              }}
            >
              <Video
                sx={{
                  mixBlendMode: "multiply",
                  video: {
                    borderRadius: "50%",
                    overflow: "hidden",
                  },
                }}
                videoData={videos.mesh}
              />
            </div>
          </GridParent>
        </>
      );
    },
    Design: () => {
      return (
        <>
          <GridParent sx={{ overflow: "hidden" }}>
            <div
              sx={{
                gridRow: ["span 1", "span 1"],
                gridColumn: ["1/ span 10", "1/span 10"],
                img: {
                  transformOrigin: "top center",
                  transform: "scale(1.05)",
                },
              }}
            >
              <Img imageData={images.execution} />
            </div>
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
