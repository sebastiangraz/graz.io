/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Heading, Flex, Text, Box } from "theme-ui";
import * as React from "react";
import { Video, Img, List, GridParent } from "../../components";
import { Logo } from "./Logo";
import { videos, images } from "./assets";

const Sections = {
  Define: () => {
    return (
      <GridParent>
        <Flex
          sx={{
            placeSelf: "center",
            width: "100%",
            marginBottom: [4, 0],
            gridColumn: ["span 8", "span 4"],
            gridRow: ["span 1", "span 4"],
          }}
        >
          <Text sx={{ width: ["100%", 280], marginRight: 3 }}>
            <Text variant="caps" mb={3}>
              Goals
            </Text>
            <List>
              <span>
                A creative conference page to make it more shareable.{" "}
              </span>
              <span>Position Framer as a front-runner of prototyping.</span>
              <span>Inspire designers around the world to attend.</span>
            </List>
          </Text>
        </Flex>
        <Box bg="#003807">
          <Video videoData={videos.loupeMesh} />
        </Box>
        <div
          sx={{
            background: "#F60000",
            gridColumn: ["5 / span 4", "span 4"],
            gridRow: ["6 / span 4", "span 4"],
          }}
        >
          <Img imageData={images.monomeshMagenta}></Img>
        </div>
        <div></div>
        <div
          sx={{
            gridRow: "span 2",
          }}
        ></div>
        <div
          sx={{
            gridColumn: ["3 / span 2", "span 2"],
            gridRow: ["10 / span 2", "span 2"],
          }}
        >
          <div>
            <Img imageData={images.multiMesh0} />
          </div>
        </div>
      </GridParent>
    );
  },
  Branding: () => {
    return (
      <React.Fragment>
        <GridParent>
          <div
            sx={{
              gridColumn: "span 8",
              gridRow: "span 1",
            }}
          >
            <Heading>Branding</Heading>
          </div>

          <Text
            sx={{
              gridColumn: ["span 8", "span 4", "span 4", "span 4"],
              paddingRight: [0, 4, 4, 4],
              gridRow: "span 1",
            }}
          >
            Loupe being a fairly young event, faced the challenge of attracting
            new conference-goers as well as retaining previous attendees. It had
            to feel like a new and exciting event, while keeping the brand trust
            that the conference had built up during the&nbsp;years.
          </Text>
          <Text
            sx={{
              gridColumn: ["span 8", "span 4", "span 4", "span 4"],
              paddingLeft: [0, 4, 4, 4],
              paddingTop: [3, 0, 0, 0],
              gridRow: "span 1",
            }}
          >
            Previous identities were branched of Framers own brand. But this
            year Loupe put on a new distinguished look. The identity aims to be
            extendable and work well both as pixels and as printed media. Print
            media was never explored, as the conference got put on hold.
          </Text>
        </GridParent>
        <Box sx={{ marginTop: 6 }}>
          {/* <Slideshow>
            <Img
              sx={{ backgroundColor: "accent" }}
              imageData={images.orbs}
            ></Img>
            <Img
              sx={{ backgroundColor: "accent" }}
              imageData={images.meshwithnotes}
            ></Img>
            <Img
              sx={{ backgroundColor: "accent" }}
              imageData={images.logowithmesh}
            ></Img>
            <Img
              sx={{ backgroundColor: "accent" }}
              imageData={images.notes}
            ></Img>
            <Img
              sx={{ backgroundColor: "accent" }}
              imageData={images.cyan}
            ></Img>
          </Slideshow> */}
        </Box>
        <div sx={{ my: [5, 6, 7] }}>
          <GridParent>
            <div
              sx={{
                background: "#003807",
                gridColumn: "3 / span 1",
                gridRow: "2 / span 1",
              }}
            ></div>
            <div
              sx={{
                background: "#E900A1",
                gridColumn: "1 / span 2",
                gridRow: "3 / span 2",
                padding: ["20%"],
                overflow: "hidden",
              }}
            >
              <div sx={{ borderRadius: "50%", overflow: "hidden" }}>
                <Img imageData={images.monomeshMagenta1} />
              </div>
            </div>

            <div
              sx={{
                background: "transparent",
                gridColumn: "3 / span 2",
                gridRow: "5 / span 2",
                overflow: "hidden",
              }}
            >
              <div sx={{ transform: "scale(1.28)" }}>
                <Img imageData={images.monomeshMagenta} />
              </div>
            </div>
            <div
              sx={{
                backgroundColor: "accent",
                gridColumn: "5 / span 4",
                gridRow: "1 / span 4",
                overflow: "hidden",
              }}
            >
              <Img imageData={images.multiMesh1} />
            </div>
          </GridParent>
        </div>
        <GridParent>
          <Box
            p={["32% 32% 20%", "32%"]}
            sx={{
              gridColumn: [
                "1 / span 8",
                "1 / span 5",
                "1 / span 5",
                "1 / span 5",
              ],
              backgroundColor: "accent",
              color: "#003807",
            }}
          >
            <div sx={{ height: "100%" }}>
              <Logo></Logo>
            </div>
          </Box>
          <Box
            sx={{
              padding: ["0 0 32%", "80px 40px"],
              gridColumn: [
                "1 / span 8",
                "7 / span 2",
                "7 / span 2",
                "7 / span 2",
              ],
              backgroundColor: "accent",
            }}
          >
            <div sx={{ maxWidth: 102, margin: "0 auto" }}>
              <Img imageData={images.logoStrip} />
            </div>
          </Box>
          <Text
            mt={[4, 5]}
            sx={{
              gridColumn: ["1 / span 8", "1 / span 5"],
              gridRow: "span 1",
              maxWidth: 520,
            }}
          >
            The logo’s goal was not to represent a singular idea. Ultimately it
            is up to the observer to decide what meanings they see.
          </Text>
          <Text
            mt={[3, 5]}
            sx={{ gridColumn: ["1 / span 8", "7 / span 2"], gridRow: "span 1" }}
          >
            Additionally, I wanted to create a logo mark that could extend its
            usage into patterns or shapes.
          </Text>
        </GridParent>
        <div sx={{ marginTop: [5, 6, 7] }}>
          <GridParent>
            <Flex
              sx={{
                gridColumn: ["1 / span 8", "1 / span 3"],
                gridRow: ["1 / span 1", "1 / span 4"],
                flexDirection: "column",
                placeSelf: "center",
              }}
            >
              <Text variant="caps" mb={3}>
                Icons
              </Text>
              <Text mb={4}>
                The somewhat unremarkable shapes is what makes the icons unique.
                And yet an important addition to the Loupe brand.
              </Text>
            </Flex>
            <div
              sx={{
                gridColumn: ["1 / span 8", "5 / span 4"],
                background: "#003807",
              }}
            >
              <Video videoData={videos.icons} />
            </div>
          </GridParent>
        </div>
        <div sx={{ marginTop: [5, 6, 7] }}>
          <GridParent>
            <div
              sx={{
                gridColumn: ["1 / span 8", "6 / span 3"],
                gridRow: ["1 / span 1", "1 / span 2"],
              }}
            >
              <Text>
                Typography was put together to feel approachable and friendly.
                Previous Loupe branding languages felt masculine and bold. With
                the goal to attract a more diverse audience the typefaces had to
                follow suit.
              </Text>
            </div>
            <div
              sx={{
                background: "#fff",
                gridColumn: ["5 / span 2", "5 / span 1"],
                gridRow: ["3 / span 2", "4 / span 1"],
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
                backgroundImage: `url(${images.monomeshRed2.url})`,
                backgroundSize: "100%",
                gridColumn: ["5 / span 4", "6 / span 3"],
                gridRow: ["5 / span 3", "4 / span 2"],
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
                background: "#000",
                gridColumn: ["1 / span 4", "1 / span 3"],
                gridRow: ["3 / span 4", "1 / span 3"],
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
                mt={[2, 3, 3, 3]}
                sx={{
                  display: ["none", "block"],
                  color: "#fff",
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
                gridColumn: ["2 / span 5", "3 / span 3"],
                gridRow: ["7 / span 5", "4 / span 3"],
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
        </div>
        <Box mt={[6, 6, 7]}>
          <GridParent>
            <Box
              sx={{
                gridColumn: ["3 / span 6", "5 / span 3"],
                gridRow: ["11 / span 1", "3 / span 3"],
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div sx={{ paddingTop: [5], paddingBottom: [5] }}>
                <Text variant="caps" mb={3}>
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
                background: "#003807",
                gridColumn: ["1 / span 6", "1 / span 3"],
                gridRow: ["4 / span 4", "3 / span 3"],
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
                gridColumn: ["3 / span 6", "4 / span 5"],
                gridRow: ["1 / span 3", "1 / span 2"],
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
                background: "#F47722",
                gridColumn: ["3 / span 6", "4 / span 5"],
                gridRow: ["7 / span 4", "6 / span 5"],
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
        </Box>
      </React.Fragment>
    );
  },

  Design: () => {
    return (
      <React.Fragment>
        <GridParent>
          <Heading
            sx={{
              gridColumn: "span 8",
              gridRow: "span 1",
            }}
          >
            Design
          </Heading>

          <div
            sx={{
              gridColumn: ["span 8", "span 4", "span 4", "span 4"],
              paddingRight: [0, 4, 4, 4],
              gridRow: "span 1",
            }}
          >
            <Text>
              Creating the web page was a matter of using the branding elements
              together. New ideas and changes to the site also informed the
              overall branding look&nbsp;&&nbsp;feel.
            </Text>
            <Text mt={3}>
              The difficult part was deciding when the branding was done. The
              deadline did help with that. I always like to say that a branding
              isn’t really a deliverable, but more a thing that grows together
              with other aspects of the project.
            </Text>
          </div>
        </GridParent>
        <Box
          sx={{
            marginTop: [5, 6, 7],
            marginBottom: [5, 6, 7],
          }}
        >
          <GridParent>
            <Text
              variant="caps"
              sx={{
                marginTop: 0,
                marginBottom: [0],
                gridColumn: "1 / span 2",
                gridRow: "span 1",
              }}
            >
              Overview
            </Text>
            <Text
              sx={{
                marginBottom: [4, 5, 5, 6],
                gridColumn: ["1 / span 8", "4 / span 5", "4 / span 4"],
                gridRow: "span 1",
              }}
            >
              After the V1 of the Loupe website was launched it got featured on
              a few showcase websites, attracting more designers to check out
              the conference.
            </Text>
          </GridParent>
          <Box sx={{ maxWidth: 2000, margin: "0 auto" }}>
            <Img imageData={images.overview} />
          </Box>
        </Box>
        <Box
          sx={{
            marginBottom: [5, 6, 7],
          }}
        >
          <GridParent>
            <Text
              variant="caps"
              sx={{
                marginTop: 0,
                marginBottom: [0],
                gridColumn: "1 / span 8",
                gridRow: "span 1",
              }}
            >
              Home
            </Text>
            <div sx={{ marginBottom: 5, gridColumn: "4 / span 5" }}>
              <Img plate imageData={images.pageHome} />
            </div>
            <div sx={{ marginBottom: 5, gridColumn: "1 / span 2" }}>
              <Img plate imageData={images.pageHomeMobile} />
            </div>
          </GridParent>
        </Box>
        <Box
          sx={{
            marginBottom: [5, 6, 7],
          }}
        >
          <GridParent>
            <Text
              variant="caps"
              sx={{
                marginTop: 0,
                marginBottom: [0],
                gridColumn: "1 / span 8",
                gridRow: "span 1",
              }}
            >
              Tickets
            </Text>

            <div sx={{ marginBottom: 5, gridColumn: "4 / span 5" }}>
              <Img plate imageData={images.pageTickets} />
            </div>
            <div sx={{ marginBottom: 5, gridColumn: "1 / span 2" }}>
              <Img plate imageData={images.pageTicketsMobile} />
            </div>
          </GridParent>
        </Box>
        <Box
          sx={{
            marginBottom: [5, 6, 7],
          }}
        >
          <GridParent>
            <Text
              variant="caps"
              sx={{
                marginTop: 0,
                marginBottom: [0],
                gridColumn: "1 / span 2",
                gridRow: "span 1",
              }}
            >
              FAQ
            </Text>
            <div
              sx={{
                gridColumn: "1 / span 8",
              }}
            >
              <Img plate imageData={images.pageFaq} />
            </div>
          </GridParent>
        </Box>
        <Box
          sx={{
            marginBottom: [5, 6, 7],
          }}
        >
          <GridParent>
            <Text
              variant="caps"
              sx={{
                marginTop: 0,
                marginBottom: [0],
                gridColumn: "1 / span 2",
                gridRow: "span 1",
              }}
            >
              Information
            </Text>
            <Text
              sx={{
                marginBottom: [4, 5, 5, 6],
                gridColumn: ["1 / span 8", "4 / span 5", "4 / span 4"],
                gridRow: "span 1",
              }}
            >
              That year again we were fortunate that we’re able to use the
              amazing architectural photography by Adam Mørk to showcase the
              amazing venue space.
            </Text>

            <div sx={{ marginBottom: 5, gridColumn: "3 / span 6" }}>
              <Img plate imageData={images.pageInformation1} />
            </div>
            <div sx={{ marginBottom: 5, gridColumn: "1 / span 6" }}>
              <Img plate imageData={images.pageInformation2} />
            </div>
            <div sx={{ gridColumn: "3 / span 6" }}>
              <Img plate imageData={images.pageInformation3} />
            </div>
          </GridParent>
        </Box>
        <Box
          sx={{
            marginBottom: [5, 6, 7],
          }}
        >
          <GridParent>
            <Text
              variant="caps"
              sx={{
                marginTop: 0,
                marginBottom: [0],
                gridColumn: "1 / span 2",
                gridRow: "span 1",
              }}
            >
              Workshops
            </Text>
            <Text
              sx={{
                marginBottom: [4, 5, 5, 6],
                gridColumn: ["1 / span 8", "4 / span 5", "4 / span 4"],
                gridRow: "span 1",
              }}
            >
              Feedback from the previous conference told us that the workshops
              on the site were confusing as they didn’t include what
              requirements or skills were needed to attend. For Loupe 2020 we
              made sure to visualize it better.
            </Text>

            <div sx={{ marginBottom: 5, gridColumn: "3 / span 6" }}>
              <Img plate imageData={images.pageWorkshops1} />
            </div>
            <div sx={{ marginBottom: 5, gridColumn: "1 / span 6" }}>
              <Img plate imageData={images.pageWorkshops2} />
            </div>
          </GridParent>
        </Box>
        <Box
          sx={{
            marginBottom: [5, 6, 7],
          }}
        >
          <GridParent>
            <Text
              variant="caps"
              sx={{
                marginTop: 0,
                marginBottom: [0],
                gridColumn: ["1 / span 8", "1 / span 2"],
                gridRow: "span 1",
              }}
            >
              Speakers
            </Text>

            <div
              sx={{ marginBottom: 5, gridColumn: ["1 / span 8", "3 / span 6"] }}
            >
              <Img plate imageData={images.pageSpeakers} />
            </div>
          </GridParent>
        </Box>
      </React.Fragment>
    );
  },

  Deduction: () => {
    return (
      <React.Fragment>
        <GridParent>
          <Heading
            sx={{
              gridColumn: "span 8",
              gridRow: "span 1",
              marginBottom: [4, 5, 6],
            }}
          >
            Deduction
          </Heading>
          <Text
            sx={{
              gridColumn: ["span 8", "span 4", "span 4", "span 4"],
              paddingRight: [0, 4, 4, 4],
              gridRow: "span 1",
            }}
          >
            Sadly, Loupe 2020 didn’t happen. What you see is the preliminary
            work for the overall branding and a somewhat finished website. A lot
            of bits and pieces are still missing such as venue design and
            printing work.
          </Text>
          <Text
            sx={{
              gridColumn: ["span 8", "span 4", "span 4", "span 4"],
              paddingLeft: [0, 4, 4, 4],
              paddingTop: [3, 0, 0, 0],
              gridRow: "span 1",
            }}
          >
            Hopefully Loupe 2021 will still happen where I can pick up where I
            left. And if not at least I had the chance to work on a very
            fulfilling project where I could wear many hats, and challenge my
            creativity.
          </Text>
        </GridParent>
      </React.Fragment>
    );
  },
};
const Loupe = () => {
  return Object.entries(Sections).map(([k, Section]) => (
    <Box
      key={k}
      sx={{
        marginTop: [6, 7],
        "&:last-child": {
          marginBottom: [6, 7],
        },
      }}
    >
      <Section />
    </Box>
  ));
};

export default Loupe;
