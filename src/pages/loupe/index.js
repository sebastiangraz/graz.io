/** @jsxImportSource theme-ui */

import { Flex, Text, Box, Heading, Grid } from "theme-ui";
import { Video, Img, GridParent } from "../../components";
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
};

const Sections = {
  Define: () => {
    return (
      <GridParent py={10}>
        <Flex
          mb={10}
          sx={{
            placeSelf: "center",
            width: "100%",
            gridColumn: ["span 8", "span 8"],
            gridRow: ["span 1", "span 1"],
          }}
        >
          <Text variant="lead">
            Loupe is a conference held by Framer each year. The 3rd edition of
            the conference was planned to be held in Amsterdam 2020, but was
            cancelled due to COVID-19. Below you'll find the progress of that
            work.
          </Text>
        </Flex>
        <div></div>
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
            gridColumn: ["span 4"],
            gridRow: ["span 2"],
          }}
        ></div>
        <div
          sx={{
            gridColumn: ["3 / span 2", "span 2"],
            gridRow: ["8 / span 2", "span 2"],
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
      <>
        <GridParent py={10}>
          <Box sx={{ mb: 10, gridColumn: ["span 8", "span 8"] }}>
            <Heading variant="heading">Branding</Heading>
            <Text variant="lead">
              Loupe being a fairly young event, faced the challenge of
              attracting new conference-goers as well as retaining previous
              attendees. It had to feel like a new and exciting event, while
              keeping the brand trust that the conference had built up during
              the years.
            </Text>
            <Text variant="lead">
              Previous identities were branched of Framers own brand. But this
              year Loupe put on a new distinguished look. The identity aimed to
              be extendable and work well both as pixels and as printed media.
            </Text>
          </Box>

          <Img
            cover
            plate
            sx={{
              gridColumn: ["span 2"],
              gridRow: ["span 2"],
              backgroundColor: "#e8e0d6",
            }}
            imageData={images.orbs}
          ></Img>
          <Img
            cover
            sx={{
              gridColumn: ["span 2"],
              gridRow: ["span 2"],
              borderRadius: "99em 99em 0 0",
              overflow: "hidden",
              backgroundColor: colors.red,
            }}
            imageData={images.monomeshMagenta1}
          ></Img>
          <Img
            cover
            plate
            sx={{
              gridColumn: ["span 2"],
              gridRow: ["span 2"],
              borderRadius: "99em 0 0 99em",
              overflow: "hidden",
              backgroundColor: colors.red,
            }}
            imageData={images.notes}
          ></Img>
          <div
            sx={{
              borderRadius: "0 99em 99em 0",
              backgroundColor: colors.green,
              backgroundImage: `url(${images.monomeshCyan1.url.default})`,
              backgroundSize: "100%",
              gridColumn: "span 2",
              gridRow: "span 2",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              zIndex: 2,
              justifyContent: "center",
            }}
          >
            <Img sx={{ height: "100%" }} cover imageData={images.notes} />
          </div>
          <Img
            cover
            plate
            sx={{
              borderRadius: "0 0 99em 99em",
              overflow: "hidden",
              gridColumn: ["span 2"],
              gridRow: ["span 2"],
              backgroundColor: colors.cyan,
            }}
            imageData={images.multiMesh0}
          ></Img>
          <Img
            cover
            sx={{
              borderRadius: "0 0 0 99em",
              gridColumn: ["span 2"],
              gridRow: ["span 2"],
              overflow: "hidden",
              backgroundColor: colors.red,
            }}
            imageData={images.monomeshOrange}
          ></Img>
          <Img
            cover
            sx={{
              borderRadius: "0 99em 99em 0",
              overflow: "hidden",
              gridColumn: ["span 2"],
              gridRow: ["span 2"],
              background: colors.green,
            }}
            imageData={images.multiMesh1}
          ></Img>
          <Img
            cover
            sx={{
              overflow: "hidden",
              borderRadius: "0 99em 99em 0",
              gridColumn: ["span 2"],
              gridRow: ["span 2"],
            }}
            imageData={images.monomeshOrange}
          ></Img>
        </GridParent>
        <GridParent py={10}>
          <Box
            sx={{
              gridColumn: ["1 / span 8", "1 / span 3"],
            }}
          >
            <div sx={{ height: "100%" }}>
              <Logo></Logo>
            </div>
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / span 8", "6 / span 3"],
            }}
          >
            <div sx={{ maxWidth: 102, margin: "0 auto" }}>
              <Img imageData={images.logoStrip} />
            </div>
          </Box>
          <Text
            variant="lead"
            sx={{
              gridColumn: ["1 / span 8", "1 / span 4"],
              gridRow: "span 1",
              maxWidth: 520,
            }}
          >
            I wanted the logo to represent multiple ideas. Though ultimately it
            is up to the observer to decide what meanings they see.
          </Text>
          <Text
            sx={{ gridColumn: ["1 / span 8", "6 / span 3"], gridRow: "span 1" }}
          >
            Additionally, I wanted to create a logo mark that could extend its
            usage into patterns or shapes.
          </Text>
        </GridParent>
        <GridParent py={10}>
          <Flex
            sx={{
              gridColumn: ["1 / span 8", "1 / span 3"],
              gridRow: ["1 / span 1", "1 / span 4"],
              flexDirection: "column",
              placeSelf: "center",
            }}
          >
            <Text variant="lead">
              The simple icon shapes made the icons feel deliberately unassuming
              yet very legible when displayed at smaller sizes.
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
        <GridParent py={10}>
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
              backgroundImage: `url(${images.monomeshRed2.url.default})`,
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
        <GridParent py={10}>
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
      </>
    );
  },
  Design: () => {
    return (
      <>
        <GridParent>
          <Box sx={{ gridColumn: "span 8" }}>
            <Heading>Design</Heading>
            <Grid gap={8} columns={[1, "1fr 1fr"]}>
              <Text variant="lead">
                Creating the web page was a matter of using the branding
                elements together. New ideas and changes to the site also
                informed the overall branding look&nbsp;&&nbsp;feel.
              </Text>

              <Text variant="lead">
                It would be difficult put a dot on the branding and call it a
                “done”. It will always evolve over time the more you nurture it.
                A bit like a Pokemon.
              </Text>
            </Grid>
          </Box>
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
      </>
    );
  },
};
const Loupe = () => {
  return Object.entries(Sections).map(([k, Section]) => (
    <Box key={k}>
      <Section />
    </Box>
  ));
};

export default Loupe;
