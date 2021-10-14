/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Text, Heading } from "theme-ui";
import { GridParent, Video, Img, List } from "../../components";
import { images, videos, icons } from "./assets";

const Capchase = ({ gridCount }) => {
  const OffGrid = ({ children }) => {
    return (
      <GridParent
        noOfColumns={10}
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
  const OnGrid = ({ children }) => {
    return (
      <GridParent
        noOfColumns={8}
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
  const Sections = {
    Intro: () => {
      return (
        <>
          <OffGrid>
            <div
              sx={{
                borderRadius: "0 48px 48px 0",
                background: "#333",
                gridRow: ["span 4", "span 2"],
                gridColumn: ["span 8", "span 3"],
              }}
            ></div>
            <div
              sx={{
                borderRadius: "48px 48px",
                background: "#222",
                gridRow: ["span 8", "span 4"],
                gridColumn: ["span 8", "span 4"],
              }}
            ></div>
            <div
              sx={{
                borderRadius: "48px 48px",
                background: "#222",
                gridRow: ["span 8", "span 4"],
                gridColumn: ["span 8", "span 2"],
              }}
            ></div>
            <div
              sx={{
                background: "#111",
                gridRow: "span 1",
                gridColumn: ["span 8", "2/ span 9"],
              }}
            ></div>
          </OffGrid>
          <OnGrid>
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
