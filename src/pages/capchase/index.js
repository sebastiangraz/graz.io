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
              background: "#888",
              gridRow: "span 4",
              gridColumn: ["span 8", "3 / span 4"],
            }}
          ></div>
          <div
            sx={{
              background: "#777",
              gridRow: "span 4",
              gridColumn: ["span 8", "7 / span 4"],
            }}
          ></div>

          <div
            sx={{
              background: "#666",
              gridRow: "span 4",
              gridColumn: ["span 8", "11 / span 4"],
            }}
          ></div>
          <div
            sx={{
              background: "#555",
              gridRow: "span 3",
              gridColumn: ["span 8", "3 / span 3"],
            }}
          ></div>
          <div
            sx={{
              background: "#444",
              gridRow: "span 3",
              gridColumn: ["span 8", "6 / span 3"],
            }}
          ></div>
          <div
            sx={{
              background: "#333",
              gridRow: "span 3",
              gridColumn: ["span 8", "9 / span 3"],
            }}
          ></div>

          <div
            sx={{
              background: "#111",
              gridRow: "span 3",
              gridColumn: ["span 8", "12 / span 3"],
            }}
          ></div>
        </GridParent>
        <GridParent>
          <div
            sx={{
              background: "#ddd",
              gridRow: "span 2",
              gridColumn: ["span 8", " span 2"],
            }}
          ></div>
          <div
            sx={{
              background: "#ccc",
              gridRow: "span 2",
              gridColumn: ["span 8", " span 2"],
            }}
          ></div>
          <div
            sx={{
              background: "#bbb",
              gridRow: "span 2",
              gridColumn: ["span 8", " span 2"],
            }}
          ></div>
          <div
            sx={{
              background: "#aaa",
              gridRow: "span 2",
              gridColumn: ["span 8", " span 2"],
            }}
          ></div>
          <div
            sx={{
              background: "#999",
              gridRow: "span 2",
              gridColumn: ["span 8", " span 2"],
            }}
          ></div>
          <div
            sx={{
              background: "#888",
              gridRow: "span 2",
              gridColumn: ["span 8", " span 2"],
            }}
          ></div>
          <div
            sx={{
              background: "#777",
              gridRow: "span 2",
              gridColumn: ["span 8", " span 2"],
            }}
          ></div>
          <div
            sx={{
              background: "#666",
              gridRow: "span 2",
              gridColumn: ["span 8", " span 2"],
            }}
          ></div>
          <div
            sx={{
              background: "#555",
              gridRow: "span 4",
              gridColumn: ["span 8", "span 4"],
            }}
          ></div>
          <div
            sx={{
              background: "#444",
              gridRow: "span 4",
              gridColumn: ["span 8", "span 4"],
            }}
          ></div>
          <div
            sx={{
              background: "#333",
              gridRow: "span 4",
              gridColumn: ["span 8", "span 4"],
            }}
          ></div>
          <div
            sx={{
              background: "#303030",
              gridRow: "span 4",
              gridColumn: ["span 8", "span 4"],
            }}
          ></div>
          <div
            sx={{
              background: "#222",
              gridRow: "span 8",
              gridColumn: ["span 8", "1 / span 16"],
            }}
          ></div>
          <div
            sx={{
              background: "#111",
              gridRow: "span 7",
              gridColumn: ["span 8", "3 / span 12"],
            }}
          ></div>

          {/* <Img imageData={images.homepage1} /> */}
          {/* <div
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gridColumn: ["span 8", "2/ span 5"],
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
          </div> */}
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
