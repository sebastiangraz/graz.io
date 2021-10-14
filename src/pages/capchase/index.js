/** @jsxImportSource theme-ui */

import React from "react";
import { GridParent, Img, List } from "../../components";
import { images, videos, icons } from "./assets";

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

const phoneBorder = () => {
  return {
    position: "relative",
    zIndex: "0",
    "&:after": {
      borderRadius: radius().default,
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      zIndex: "1",
      boxShadow:
        "inset 0px 3px 1px -2px #FFF7E8, inset 0px -1px 1px -1px rgba(73, 46, 34, 0.5), inset 0px 0px 5px -1px #C66705, inset 0px 0px 1px 3px #E9D9C0",
    },
    "&:before": {
      borderRadius: radius().default,
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      zIndex: "1",
      outline: "solid #000",
      outlineOffset: "-10px",
      outlineWidth: "8px",
    },
  };
};

const Capchase = () => {
  const Sections = {
    Intro: () => {
      return (
        <>
          <GridParent>
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
                position: "relative",
                ...phoneBorder(),

                borderRadius: radius().default,
                gridRow: ["span 8", "span 4"],
                gridColumn: ["span 8", "span 2"],
              }}
            >
              <div
                sx={{
                  zIndex: 2,
                  top: "56px",
                  right: "-10px",
                  width: 16,
                  height: 40,
                  position: "absolute",
                }}
              >
                <Img imageData={images.crown} />
              </div>
              <Img
                sx={{ overflow: "hidden", borderRadius: radius().default }}
                imageData={images.mobileIntro}
              />
            </div>
          </GridParent>
          <GridParent>
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
          </GridParent>
        </>
      );
    },
  };

  return (
    <div
      sx={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: [`repeat(12, 1fr)`],
      }}
    >
      {Object.entries(Sections).map(([k, Section]) => (
        <Section key={k} />
      ))}
    </div>
  );
};

export default Capchase;
