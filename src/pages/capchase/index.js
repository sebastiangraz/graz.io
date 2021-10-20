/** @jsxImportSource theme-ui */

import React from "react";
import {
  GridParent,
  Img,
  CaseMeta,
  NumberedList,
  ScrollFade,
} from "../../components";
import { images, icons } from "./assets";
import { Text, Box } from "theme-ui";

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

const Capchase = ({ data }) => {
  const Sections = {
    Intro: () => {
      return (
        <>
          <GridParent>
            <Box sx={{ gridColumn: ["span 8", " 2/ span 4"] }}>
              <ScrollFade>
                <Text variant="lead" mb={8}>
                  Capchase, one of the largest non-dilutive funding companies
                  needed a time sensitive visual refresh of all their digital
                  and print assets.
                </Text>
                <Text variant="lead" mb={10}>
                  Time was of the essence as they increased their momentum for
                  both brand awareness while establishing their slice of the
                  market. Big&nbsp;slices&nbsp;too.
                </Text>
              </ScrollFade>
            </Box>
            <Box sx={{ gridColumn: ["span 8", " 2/ span 5"] }}>
              <NumberedList
                labelColor={colors.yellow}
                horizontal
                labels={[
                  "Create brand and execute it for a very perceptive audience.",
                  "Position Capchase as a leader in non-dilutable financing.",
                  "Proofing Capchase’s brand for longevity & recognizability. ",
                  "Capchase to feel like a business partner not a tool.",
                ]}
              />
            </Box>
          </GridParent>
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
    BrandBook: () => {
      return (
        <>
          <GridParent>
            <div
              sx={{
                gridRow: "3/ span 4",
                gridColumn: ["span 2", "2 / span 9"],
              }}
            >
              <Img imageData={images.brandbook1} />
            </div>
            <div
              sx={{
                mt: 8,
                gridRow: "7/span 4",
                gridColumn: ["span 2", "2 / span 9"],
              }}
            >
              <Img imageData={images.brandbook2} />
            </div>
            <div
              sx={{
                gridRow: "5/span 2",
                gridColumn: ["span 2", "5 / span 5"],
              }}
            >
              <Text variant="caps">Rules that matter</Text>
              <Text sx={{ maxWidth: 480 }}>
                Because we were free from the clutches of text-heavy rules. The
                final guideline deliverable took on a relaxed yet inspirational
                format.
              </Text>
            </div>
          </GridParent>
        </>
      );
    },
    Webdesign: () => {
      return (
        <>
          <GridParent>
            <div
              sx={{
                gridRow: "3/ span 4",
                gridColumn: ["span 2", "2 / span 8"],
                img: {
                  transform: "scale(1.205)",
                },
              }}
            >
              <Img imageData={images.webdesign} />
            </div>
          </GridParent>
        </>
      );
    },
  };

  return (
    <>
      <GridParent>
        <CaseMeta data={data} />
      </GridParent>
      {Object.entries(Sections).map(([k, Section]) => (
        <Section key={k} />
      ))}
    </>
  );
};

export default Capchase;
