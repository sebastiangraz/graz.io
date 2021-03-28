/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Heading, Flex, Text, Box, Grid } from "theme-ui";
import * as React from "react";
import { Video, Img, List, GridParent } from "../../components";
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
      <GridParent>
        <Flex
          sx={{
            placeSelf: "center",
            width: "100%",
            marginBottom: 8,
            gridColumn: ["span 8", "span 8"],
            gridRow: ["span 1", "span 1"],
          }}
        >
          <Text variant="heading">
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
        <div></div>
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
      <GridParent>
        <Box sx={{ mb: 7, gridColumn: ["span 8", "span 8"] }}>
          <Text variant="heading">Branding</Text>
          <Text variant="heading" mt={6}>
            Loupe being a fairly young event, faced the challenge of attracting
            new conference-goers as well as retaining previous attendees. It had
            to feel like a new and exciting event, while keeping the brand trust
            that the conference had built up during the years.
          </Text>
          <Text variant="heading" mt={6}>
            Previous identities were branched of Framers own brand. But this
            year Loupe put on a new distinguished look. The identity aimed to be
            extendable and work well both as pixels and as printed media.
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
    );
  },
};
const Loupe = () => {
  return Object.entries(Sections).map(([k, Section]) => (
    <Box
      key={k}
      sx={{
        marginBottom: [7, 8],
      }}
    >
      <Section />
    </Box>
  ));
};

export default React.memo(Loupe);
