/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx, Box, Text, Heading } from "theme-ui";
import { GridParent, Video, Img, List } from "../../components";
import { icons, images, videos } from "./assets";

const Sections = {
  Define: () => {
    return (
      <div sx={{ position: "relative" }}>
        <GridParent sx={{ marginBottom: [6, 7, 8] }}>
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gridColumn: ["span 8", "span 3"],
              gridRow: "span 1",
            }}
          >
            <div sx={{ marginBottom: [5] }}>
              <Box mb={4} sx={{ width: 142, color: "accent" }}>
                {icons.problemStatement}
              </Box>
              <Text variant="caps" mb={4}>
                Problem Statement
              </Text>
              <Box sx={{ maxWidth: 340 }}>
                <Text mb={2}>
                  <List>
                    Digital presence inconsistent across their brand. Potential
                    loss of revenue due to users not finding the site
                    trustworthy.
                  </List>
                </Text>
              </Box>
            </div>
            <div>
              <Box mb={4} sx={{ color: "accent" }}>
                {icons.fourChallenges}
              </Box>
              <Text mb={4} variant="caps">
                4 Challenges
              </Text>
              <Box sx={{ maxWidth: 280 }}>
                <List>
                  <Text>
                    Developers relying on static imagery instead of live
                    components.
                  </Text>
                  <Text>
                    Designers lack a point of reference during the design
                    process.
                  </Text>
                  <Text>
                    Isolated work effort between teams, handoff non-existent.
                  </Text>
                  <Text>
                    Multiple contradicting brand styleguides and systems.
                  </Text>
                </List>
              </Box>
            </div>
          </div>
          <div
            sx={{
              position: ["relative", "absolute"],
              right: 0,
              width: ["100%", "50%"],
              maxWidth: 800,
              gridColumn: ["span 8"],
              marginTop: [100, 120],
              "&:before": {
                content: `""`,
                position: "absolute",
                zIndex: -1,
                bottom: 1,
                right: [15, 0],
                width: ["calc(100% - 30px)", "calc(100% - 60px)"],
                height: ["calc(100% + 20px)", "calc(100% + 60px)"],
                background: "#F17E7E",
              },
              "&:after": {
                content: `""`,
                position: "absolute",
                bottom: 1,
                right: [30, 0],
                width: ["calc(100% - 60px)", "calc(100% - 120px)"],
                height: ["calc(100% + 40px)", "calc(100% + 120px)"],
                zIndex: -2,
                background: "#a00",
              },
            }}
          >
            <Video videoData={videos.intro} />
          </div>

          <div
            sx={{
              gridColumn: ["4 / 5 span"],
              gridRow: "span 1",
              display: ["none", "flex"],
              justifyContent: "flex-end",
            }}
          >
            <div
              sx={{
                height: 0,
                width: "100%",
                overflow: "hidden",
                paddingTop: "calc((139 / 100) * 100%)",
                position: "relative",
              }}
            >
              <div
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></div>
            </div>
          </div>
        </GridParent>
        <GridParent>
          <div
            sx={{
              marginBottom: [5, 0],
              marginRight: 5,
              gridColumn: ["span 12", "1 / span 4"],
            }}
          >
            <span sx={{ color: "accent" }}> {icons.desiredOutcomes}</span>

            <Text sx={{ marginBottom: 4, marginTop: 4 }} variant="caps">
              Desired outcomes
            </Text>
            <Box sx={{ maxWidth: 320 }}>
              <List>
                <Text>
                  Premium-feel design proposals, featuring revenue sensitive
                  pages.
                </Text>
                <Text>
                  Develop a strategy for designers working within the brand.
                </Text>
                <Text>
                  Attempt to fix broken handoff process between the
                  design&nbsp;→&nbsp;development phases.
                </Text>
              </List>
            </Box>
          </div>
          <div sx={{ marginRight: 5, gridColumn: ["span 12", "5 / span 4"] }}>
            <span sx={{ color: "accent" }}>{icons.whatWasDone}</span>
            <Text sx={{ marginBottom: 4, marginTop: 4 }} variant="caps">
              What was done
            </Text>
            <Box sx={{ maxWidth: 320 }}>
              <List>
                <Text>Proposal for fixing front-end inconsistencies.</Text>
                <Text>
                  First pass at a design system to inspire and educate
                  stakeholders.
                </Text>
                <Text>
                  Developed design tools to help automate tasks, such as picking
                  correct brand colors.
                </Text>
              </List>
            </Box>
          </div>
        </GridParent>
      </div>
    );
  },

  Design: () => {
    return (
      <React.Fragment>
        <GridParent
          sx={{
            marginBottom: [5, 6, 7],
            alignItems: "center",
          }}
        >
          <div
            sx={{
              gridColumn: "span 8",
              gridRow: "span 1",
            }}
          >
            <Heading>Design</Heading>
          </div>
          <Box
            sx={{ marginBottom: [3, 0], gridColumn: ["span 12", "5 / span 4"] }}
          >
            {icons.spaceScale}
          </Box>
          <Box
            sx={{
              gridColumn: ["span 12", "span 3"],
            }}
          >
            <Text variant="caps" mb={3}>
              Space
            </Text>
            <Text mb={2}>
              The first things we tackled was how designers and developers
              looked at space.
            </Text>
            <Text mb={2}>
              Oftentimes margins and paddings between UI elements were guessed.{" "}
            </Text>
            <Text mb={2}>
              Failing to standardize spacing leads to visual inconsistencies,
              but also developers will have to work harder to line things up.
            </Text>
          </Box>
        </GridParent>

        <GridParent sx={{ marginBottom: [5, 6, 7], alignItems: "center" }}>
          <Box
            sx={{ marginBottom: [3, 0], gridColumn: ["span 12", "1 / span 4"] }}
          >
            {icons.typeScale}
          </Box>
          <Box
            sx={{
              gridColumn: ["span 12", "6 / span 3"],
            }}
          >
            <Text variant="caps" mb={3}>
              Typography Scale
            </Text>
            <Text mb={2}>
              One thing that is closely related to spacing is typographical
              hierarchy.
            </Text>
            <Text mb={2}>
              Much like spacing, font sizes can be a big contributor to
              inconsistency if left unchecked.
            </Text>
            <Text mb={2}>
              We developed a type scale that would live alongside our spacing
              system, that was also divisible by 4 & 2.
            </Text>
          </Box>
        </GridParent>

        <GridParent sx={{ marginBottom: [5, 6, 7], alignItems: "center" }}>
          <Box
            sx={{ marginBottom: [3, 0], gridColumn: ["span 12", "5 / span 4"] }}
          >
            {icons.colorGen}
          </Box>
          <Box
            sx={{
              gridColumn: ["12 span", "span 3"],
            }}
          >
            <Text variant="caps" mb={3}>
              Color
            </Text>
            <Text mb={2}>
              It makes sense that color concludes the big 3 of inconsistencies.
              Hex codes are notoriously hard to keep track of.
            </Text>
            <Text mb={2}>
              We made it easier by developing a{" "}
              <a
                href="https://colorgen.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                tool
              </a>{" "}
              that would generate non-linear color palettes from Canons existing
              colors.
            </Text>
            <Text mb={2}>
              The goal with this was to standardize picking colors with certain
              parameters that Canon would own.
            </Text>
          </Box>
        </GridParent>

        <GridParent
          sx={{
            marginBottom: [5, 6, 7],
            alignItems: "center",
          }}
        >
          <Box sx={{ gridColumn: ["span 12", "5 / span 4"] }}>
            {icons.designSystem}
          </Box>
          <Box
            sx={{
              gridColumn: ["span 12", "span 3"],
            }}
          >
            <Text variant="caps" mb={3}>
              Atoms
            </Text>
            <Text mb={2}>
              With the foundations in place, we implemented the same modular way
              of thinking throughout the whole system.
            </Text>
            <Text mb={2}>
              They were dubbed Atoms, and they became the building blocks of
              Canons design system.
            </Text>
          </Box>
        </GridParent>
        <GridParent
          sx={{
            marginBottom: [5, 6, 7],
          }}
        >
          <Box
            sx={{
              gridColumn: "1 / span 8",
              gridRow: "span 1",
              marginBottom: 5,
            }}
          >
            <Text variant="caps" mb={[3, 5]}>
              Immutable = Consistent
            </Text>
            {icons.button}
          </Box>
          <Box
            sx={{
              gridColumn: ["span 12", "span 3"],
              gridRow: "span 1",
            }}
          >
            <Text mb={[1, 2]}>
              We took inspiration from immutable CSS frameworks such as
              Tachyons, Tailwind etc. To build up an extensive collection of CSS
              classes that would be the base of the design system.
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ["span 12", "6 / span 3"],
              gridRow: "span 1",
            }}
          >
            <Text mb={2}>
              We didn’t invent anything new by doing this, but it worked really
              well to build a strong foundation for Canon. Starting with the
              button, of course.
            </Text>
          </Box>
        </GridParent>
      </React.Fragment>
    );
  },

  System: () => {
    return (
      <React.Fragment>
        {/* <Slideshow>
          <Img
            sx={{ backgroundColor: "accent" }}
            imageData={images.layout}
          ></Img>
          <Img
            sx={{ backgroundColor: "accent" }}
            imageData={images.width}
          ></Img>
          <Img
            sx={{ backgroundColor: "accent" }}
            imageData={images.motion}
          ></Img>
          <Img
            sx={{ backgroundColor: "accent" }}
            imageData={images.accordions}
          ></Img>
          <Img
            sx={{ backgroundColor: "accent" }}
            imageData={images.producttiles}
          ></Img>
        </Slideshow> */}
      </React.Fragment>
    );
  },

  Homepage: () => {
    return (
      <React.Fragment>
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
                gridColumn: ["span 8", "1 / span 2"],
                gridRow: "span 1",
              }}
            >
              Homepage Layout One
            </Text>
            <Text
              sx={{
                marginBottom: [4, 5, 5, 6],
                gridColumn: ["1 / span 8", "4 / span 5", "4 / span 4"],
                gridRow: "span 1",
              }}
            >
              We put our design system to the test by creating a few concept
              designs to present to Canon. What you see below is my rendition of
              it. We had other designers in our team create their own visions.
            </Text>

            <div sx={{ marginBottom: 5, gridColumn: "1 / span 8" }}>
              <Img plate imageData={images.homepage1} />
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
                gridColumn: ["span 8", "1 / span 2"],
                gridRow: "span 1",
              }}
            >
              Homepage Layout Two
            </Text>
            <Text
              sx={{
                marginBottom: [4, 5, 5, 6],
                gridColumn: ["1 / span 8", "4 / span 5", "4 / span 4"],
                gridRow: "span 1",
              }}
            >
              We wanted to set the expectations that design systems don’t equal
              rigid or boring layouts. More so explaining how consistency
              between Canon’s digital products can increase brand trust.
            </Text>

            <div sx={{ marginBottom: 5, gridColumn: "1 / span 8" }}>
              <Img plate imageData={images.homepage2} />
            </div>
          </GridParent>
        </Box>
      </React.Fragment>
    );
  },
  Deduction: () => {
    return (
      <React.Fragment>
        <GridParent>
          <Heading
            sx={{
              gridColumn: "span 8",
              gridRow: "span 1",
            }}
          >
            Deduction
          </Heading>
          <div
            sx={{
              gridColumn: ["span 8", "span 4", "span 4", "span 4"],
              paddingRight: [0, 4, 4, 4],
              paddingTop: [3, 0, 0, 0],
              gridRow: "span 1",
            }}
          >
            <Text variant="lead" mb={3}>
              The design system as a deliverable lacked interactivity. But our
              goal was to educate Canon about what it solved on an
              organizational level.
            </Text>
          </div>
          <div
            sx={{
              gridColumn: ["span 8", "span 4", "span 4", "span 4"],
              paddingLeft: [0, 4, 4, 4],
              paddingTop: [3, 0, 0, 0],
              gridRow: "span 1",
            }}
          >
            <Text mb={3}>
              It’s time-consuming to incorporate a design system into a vast
              organization like Canon. And as contract consultants; we lacked
              time. This is why we opted to present a vision rather than a fully
              fledged product.
            </Text>
            <Text mb={3}>
              The design system became an important talking point when
              presenting the designs to Canon.
            </Text>
            <Text></Text>
          </div>
        </GridParent>
      </React.Fragment>
    );
  },
};

const Canon = () => {
  return Object.entries(Sections).map(([k, Section]) => (
    <Box key={k}>
      <Section />
    </Box>
  ));
};

export default Canon;
