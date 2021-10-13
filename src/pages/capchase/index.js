/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Text, Heading } from "theme-ui";
import { GridParent, Video, Img, List } from "../../components";
import { images, videos, icons } from "./assets";

const OffGrid = ({ children, gridCount }) => {
  return (
    <GridParent
      gridCountOverride={0}
      sx={{
        width: "100%",
        gridColumn: [
          `2 / span 10`,
          null,
          `1 / span ${gridCount(0)}`,
          `1 / span ${gridCount(1)}`,
        ],
      }}
    >
      {children}
    </GridParent>
  );
};
const OnGrid = ({ children, gridCount }) => {
  return (
    <GridParent
      gridCountOverride={2}
      sx={{
        width: "100%",
        gridColumn: [
          `2 / span 10`,
          null,
          `2 / span ${gridCount(0) - 2}`,
          `2 / span ${gridCount(1) - 2}`,
        ],
      }}
    >
      {children}
    </GridParent>
  );
};

const Capchase = ({ gridCount }) => {
  const Sections = {
    Intro: () => {
      return (
        <>
          <OnGrid gridCount={gridCount}>
            <div
              sx={{
                background: "#333",
                gridRow: "span 4",
                gridColumn: ["span 4", "span 4"],
              }}
            ></div>
            <div
              sx={{
                background: "#222",
                gridRow: "span 4",
                gridColumn: ["span 4", "span 4"],
              }}
            ></div>

            <div
              sx={{
                background: "#111",
                gridRow: "span 8",
                gridColumn: ["span 8", "span 8"],
              }}
            ></div>
          </OnGrid>
          <OffGrid gridCount={gridCount}>
            <div
              sx={{
                background: "#333",
                gridRow: "span 4",
                gridColumn: ["span 4", "span 4"],
              }}
            ></div>
            <div
              sx={{
                background: "#222",
                gridRow: "span 4",
                gridColumn: ["span 4", "span 4"],
              }}
            ></div>

            <div
              sx={{
                background: "#111",
                gridRow: "span 8",
                gridColumn: ["span 8", "span 8"],
              }}
            ></div>
          </OffGrid>
        </>
      );
    },
  };

  return (
    <div
      sx={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: [
          `repeat(12, 1fr)`,
          null,
          `repeat(${gridCount(0)}, 1fr)`,
          `repeat(${gridCount(1)}, 1fr)`,
        ],
      }}
    >
      {Object.entries(Sections).map(([k, Section]) => (
        <Section key={k} />
      ))}
    </div>
  );
};

export default Capchase;
