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
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gridColumn: ["span 8", "span 3"],
              gridRow: "span 1",
            }}
          >
            <div sx={{ marginBottom: 5 }}>
              <Text variant="caps" mb={4}>
                Capital Chasers
              </Text>
              <Box sx={{ maxWidth: 340 }}>
                <Text mb={2}>
                  Capchase, one of the largest non-dilutive funding companies
                  needed a time sensitive brand refresh. Time was of the essence
                  as they increased their momentum for both brand awareness
                  while establishing their slice of the market.
                </Text>
              </Box>
            </div>
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
