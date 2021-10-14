/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Text, Heading } from "theme-ui";
import { GridParent, Video, Img, List } from "../../components";
import { images, videos, icons } from "./assets";

const OffGrid = ({ children }) => {
  return (
    <GridParent
      sx={{
        width: "100%",
        gridColumn: `1 / span 12`,
      }}
    >
      {children}
    </GridParent>
  );
};

const colors = {
  black: "#0F0F14",
  white: "#FCFBF8",
  purple: "#712FFF",
  yellow: "#FFD99F",
  green: "#E7FDE2",
  cyan: "#ABF0FF",
  blue: "#0A21F1",
  orange: "#FF9574",
  pink: "#FA7D93",
};

const radius = (small) => {
  const radiusLarge = {
    default: ["3vmin", "4vmin"],
    right: ["0 3vmin 3vmin 0", "0 4vmin 4vmin 0"],
    left: ["3vmin 0 0 3vmin", "4vmin 0 0 4vmin"],
  };
  const radiusSmall = {
    default: "2vmin",
    right: "0 2vmin 2vmin 0",
    left: "2vmin 0 0 2vmin",
  };

  return small ? radiusSmall : radiusLarge;
};

console.log(radius());

const Capchase = ({ gridCount }) => {
  const Sections = {
    Intro: () => {
      return (
        <>
          <OffGrid>
            <div
              sx={{
                pr: 9,
                borderRadius: radius().right,
                background: colors.black,
                gridRow: ["span 4", "span 2"],
                gridColumn: ["span 8", "span 3"],
                boxShadow: "capchase",
              }}
            >
              <Img sx={{ height: "100%" }} imageData={images.bottle} />
            </div>
            <div
              sx={{
                padding: "10%",
                borderRadius: radius().default,
                background: colors.purple,
                gridRow: ["span 8", "span 4"],
                gridColumn: ["span 8", "span 4"],
              }}
            >
              <Img imageData={images.elements} />
            </div>
            <div
              sx={{
                overflow: "hidden",
                borderRadius: radius().default,

                gridRow: ["span 8", "span 4"],
                gridColumn: ["span 8", "span 2"],
              }}
            >
              <Img sx={{}} imageData={images.mobileIntro} />
            </div>
          </OffGrid>
          <OffGrid>
            <div
              sx={{
                borderRadius: radius().default,
                background: colors.black,
                gridRow: "span 2",
                gridColumn: ["span 2", "2 / span 2"],
              }}
            >
              <Img imageData={images.forward} />
            </div>
            <div
              sx={{
                padding: 8,
                borderRadius: radius().default,
                background: colors.black,
                gridRow: "3 / span 2",
                gridColumn: ["span 2", "4 / span 2"],
              }}
            >
              <Img imageData={images.loop} />
            </div>
            <div
              sx={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: radius(true).default,
                background: colors.purple,
                gridRow: "2 / span 1",
                gridColumn: ["span 1", "6 / span 1"],
                color: colors.yellow,
                svg: {
                  width: [24, 44, 56, 72],
                  height: [24, 44, 56, 72],
                },
              }}
            >
              {icons.logo}
            </div>
            <div
              sx={{
                borderRadius: radius().default,
                gridRow: "3 / span 2",
                gridColumn: ["span 2", "6 / span 2"],
              }}
            >
              <Img imageData={images.ramp} />
            </div>
            <div
              sx={{
                p: 9,
                pr: 0,
                overflow: "hidden",
                position: "relative",
                borderRadius: radius().left,
                background: colors.black,
                gridRow: "2 / span 3",
                gridColumn: ["span 2", "8 / span 3"],
                alignItems: "center",
                display: "grid",
                img: {
                  objectPosition: "center right",
                },
              }}
            >
              <Img
                sx={{ position: "absolute", width: "100%" }}
                imageData={images.stats}
              />
            </div>
            <div
              sx={{
                overflow: "hidden",
                borderRadius: radius().default,
                background: colors.purple,
                gridRow: "5 / span 2",
                gridColumn: ["span 2", "8 / span 2"],
              }}
            >
              <Img imageData={images.totes} />
            </div>
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
