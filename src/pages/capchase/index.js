/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Text, Heading } from "theme-ui";
import { GridParent, Video, Img, List } from "../../components";
import { images, videos, icons } from "./assets";

const Sections = {
  Intro: () => {
    return (
      <div sx={{ position: "relative" }}>
        <GridParent>
          <div
            sx={{
              background: "#f00",
              gridRow: "span 8",
              gridColumn: ["span 8", "span 8"],
            }}
          ></div>
          {/* <Img imageData={images.homepage1} /> */}
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gridColumn: ["span 8", "span 5"],
              gridRow: "span 1",
            }}
          >
            <Text mb={6} variant="lead">
              Capchase, one of the largest non-dilutive funding companies needed
              a time sensitive visual refresh of all their digital and print
              assets.
            </Text>
            <Text variant="lead">
              Time was of the essence as they increased their momentum for both
              brand awareness while establishing their slice of the market. Big
              slices too.
            </Text>
          </div>
        </GridParent>
      </div>
    );
  },
};

const Capchase = () => {
  return Object.entries(Sections).map(([k, Section]) => (
    <Box key={k}>
      <Section />
    </Box>
  ));
};

export default Capchase;
