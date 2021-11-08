/** @jsxImportSource theme-ui */
import * as React from "react";
import { Text, Box, Link } from "theme-ui";
import {
  Video,
  Img,
  GridParent,
  CaseMeta,
  List,
  NumberedList,
} from "../../components";
import { videos, images, vectors } from "./assets";

const radius = (small) => {
  const radiusLarge = {
    default: ["6vmin", "4vmin"],
    right: ["0 6vmin 6vmin 0", "0 4vmin 4vmin 0"],
    left: ["6vmin 0 0 6vmin", "4vmin 0 0 4vmin"],
  };
  const radiusSmall = {
    default: "2vmin",
    right: "0 2vmin 2vmin 0",
    left: "2vmin 0 0 2vmin",
  };

  return small ? radiusSmall : radiusLarge;
};

const Canon = ({ data }) => {
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
                gridColumn: ["span 8", "2/ span 3"],
                gridRow: "span 1",
              }}
            >
              <div>
                <Box mb={8} sx={{ width: 142, color: "accent" }}>
                  {vectors.problemStatement}
                </Box>
                <Text variant="caps" mb={8}>
                  Problem Statement
                </Text>
                <Box sx={{ maxWidth: 340 }}>
                  <Text mb={2} variant="lead">
                    Digital presence inconsistent across their brand. Potential
                    loss of revenue due to users not finding the site
                    trustworthy.
                  </Text>
                </Box>
              </div>
              <div>
                <Box mb={8} sx={{ color: "accent" }}>
                  {vectors.fourChallenges}
                </Box>
                <Text mb={8} variant="caps">
                  4 Challenges
                </Text>

                <NumberedList
                  sx={{ mr: [0, null, 9, 5], mt: [10, 0], mb: 0 }}
                  bgColor={data?.color}
                  labelColor={data?.bg}
                  labels={[
                    "Developers relying on static imagery instead of live components.",
                    "Designers lack a point of reference during the design process.",
                    "Isolated work effort between teams, handoff non-existent.",
                    "Multiple contradicting brand styleguides and systems.",
                  ]}
                />
              </div>
            </div>
            <div
              sx={{
                borderRadius: radius().left,
                overflow: "hidden",
                right: 0,
                gridColumn: ["6/span 5"],
              }}
            >
              <Video videoData={videos.intro} />
            </div>
          </GridParent>
          <GridParent py={[10, 11]}>
            <div
              sx={{
                marginBottom: [5, 0],
                marginRight: 5,
                gridColumn: ["span 12", "2 / span 4"],
              }}
            >
              <span sx={{ color: "accent" }}> {vectors.desiredOutcomes}</span>

              <Text sx={{ marginBottom: 8, marginTop: 8 }} variant="caps">
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
            <div sx={{ marginRight: 5, gridColumn: ["span 12", "6 / span 4"] }}>
              <span sx={{ color: "accent" }}>{vectors.whatWasDone}</span>
              <Text sx={{ marginBottom: 8, marginTop: 8 }} variant="caps">
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
                    Developed design tools to help automate tasks, such as
                    picking correct brand colors.
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
              py: 11,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                gridColumn: ["span 12", "6 / span 4"],
              }}
            >
              {vectors.spaceScale}
            </Box>
            <Box
              sx={{
                gridColumn: ["span 12", "2 /span 3"],
              }}
            >
              <Text variant="heading" mb={8}>
                Space
              </Text>
              <Text mb={6} sx={{ maxWidth: 440 }} variant="lead">
                The first things we tackled was how designers and developers
                looked at space.
              </Text>
              <Text mb={6} sx={{ maxWidth: 600 }} variant="lead">
                Oftentimes margins and paddings between UI elements were
                guessed.{" "}
              </Text>
              <Text mb={6} sx={{ maxWidth: 500 }} variant="lead">
                Failing to standardize spacing leads to visual inconsistencies,
                but also developers will have to work harder to line things up.
              </Text>
            </Box>
          </GridParent>

          <GridParent sx={{ py: 11, alignItems: "center" }}>
            <Box
              sx={{
                marginBottom: [3, 0],
                gridColumn: ["span 12", "2 / span 4"],
              }}
            >
              {vectors.typeScale}
            </Box>
            <Box
              sx={{
                gridColumn: ["span 12", "7 / span 3"],
              }}
            >
              <Text variant="heading" mb={8}>
                Typography Scale
              </Text>
              <Text mb={6} variant="lead">
                Closely related to spacing is typographical hierarchy.
              </Text>
              <Text mb={6} variant="lead">
                Much like spacing, font sizes can be a big contributor to
                inconsistency if left unchecked.
              </Text>
              <Text mb={6} variant="lead">
                We developed a type scale that would live alongside our spacing
                system, that was also divisible by 4 & 2.
              </Text>
            </Box>
          </GridParent>

          <GridParent sx={{ py: 11, alignItems: "center" }}>
            <Box
              sx={{
                marginBottom: [3, 0],
                gridColumn: ["span 12", "6 / span 4"],
              }}
            >
              {vectors.colorGen}
            </Box>
            <Box
              sx={{
                gridColumn: ["12 span", "2/ span 3"],
              }}
            >
              <Text variant="heading" mb={8}>
                Color
              </Text>
              <Text mb={6} variant="lead">
                Hex codes are notoriously hard to keep track of.
              </Text>
              <Text mb={6} variant="lead">
                We made it easier by developing a{" "}
                <Link
                  href="https://colorgen.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  tool
                </Link>{" "}
                that would generate non-linear color palettes from Canon’s
                existing colors.
              </Text>
              <Text mb={6} variant="lead">
                The goal with this was to standardize picking colors with
                certain parameters that Canon would own.
              </Text>
            </Box>
          </GridParent>

          <GridParent
            sx={{
              py: 11,
              alignItems: "center",
            }}
          >
            <Box sx={{ gridColumn: ["span 12", "6/span 4"] }}>
              {vectors.designSystem}
            </Box>
            <Box
              sx={{
                gridColumn: ["span 12", "2/span 3"],
              }}
            >
              <Text variant="heading" mb={8}>
                Atoms
              </Text>
              <Text mb={6} variant="lead">
                With the foundations in place, we implemented the same modular
                way of thinking throughout the whole system.
              </Text>
              <Text mb={6} variant="lead">
                They were dubbed Atoms, and they became the building blocks of
                Canons design system.
              </Text>
            </Box>
          </GridParent>
          <GridParent
            sx={{
              py: 11,
            }}
          >
            <Box
              sx={{
                gridColumn: "2 / span 8",
                gridRow: "span 1",
                marginBottom: 5,
              }}
            >
              <Text variant="heading">Immutable = Consistent</Text>
              {vectors.button}
            </Box>
            <Box
              sx={{
                gridColumn: ["span 12", "2/span 3"],
                gridRow: "span 1",
              }}
            >
              <Text mt={8} mb={[1, 2]}>
                We took inspiration from immutable CSS frameworks such as
                Tachyons, Tailwind etc. To build up an extensive collection of
                CSS classes that would be the base of the design system.
              </Text>
            </Box>
            <Box
              sx={{
                gridColumn: ["span 12", "7 / span 3"],
                gridRow: "span 1",
              }}
            >
              <Text mt={8} mb={2}>
                We didn’t invent anything new by doing this, but it worked
                really well to build a strong foundation for Canon. Starting
                with the button, of course.
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
          <Box my={11}>
            <GridParent>
              <Text
                variant="heading"
                sx={{
                  marginTop: 0,
                  marginBottom: [0],
                  gridColumn: ["span 8", "2 / span 2"],
                  gridRow: "span 1",
                }}
              >
                Web design
              </Text>
              <Text
                variant="lead"
                sx={{
                  marginBottom: 10,
                  gridColumn: ["1 / span 8", "4 / span 5", "6 / span 4"],
                  gridRow: "span 1",
                }}
              >
                We put our design system to the test by creating a few concept
                designs to present to Canon. What you see below is my rendition
                of it. We had other designers in our team create their own
                visions.
              </Text>

              <div sx={{ marginBottom: 5, gridColumn: "2 / span 8" }}>
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
                variant="heading"
                sx={{
                  marginTop: 0,
                  marginBottom: [0],
                  gridColumn: ["span 8", "2 / span 2"],
                  gridRow: "span 1",
                }}
              >
                Homepage Layout Two
              </Text>
              <Text
                variant="lead"
                sx={{
                  marginBottom: 10,
                  gridColumn: ["1 / span 8", "4 / span 5", "6 / span 4"],
                  gridRow: "span 1",
                }}
              >
                We wanted to set the expectations that design systems don’t
                equal rigid or boring layouts. More so explaining how
                consistency between Canon’s digital products can increase brand
                trust.
              </Text>

              <div sx={{ marginBottom: 5, gridColumn: "2 / span 8" }}>
                <Img plate imageData={images.homepage2} />
              </div>
            </GridParent>
          </Box>
        </React.Fragment>
      );
    },
    Deduction: () => {
      return (
        <>
          <GridParent pt={11}>
            <Box sx={{ mr: [0, 7], gridColumn: ["2 / span 8", "2/span 4"] }}>
              <Text variant="heading">Closing thoughts</Text>
              <Text variant="lead" sx={{ maxWidth: 600 }}>
                It’s time-consuming to incorporate a design system into a vast
                organization like Canon. And as contract consultants; we lacked
                time. This is why we opted to present a vision rather than a
                fully fledged deliverable.
              </Text>
            </Box>
            <Box sx={{ ml: [0, 7], gridColumn: ["2/ span 8", "6/span 4"] }}>
              <Text variant="heading">​</Text>

              <Text variant="lead" sx={{ maxWidth: 600 }}>
                The mock design system became a core persuasion point when
                presenting the final designs to Canon. And hopefully a learning
                experience on how to take their first steps towards a more
                consistent digital brand.
              </Text>
            </Box>
          </GridParent>
          {/* <GridParent>
            <Text
              sx={{
                gridRow: "span 1",
                gridColumn: "2/span 8",
              }}
              variant="heading"
            >
              Deduction
            </Text>
            <div
              sx={{
                gridRow: "span 1",
                gridColumn: ["span 8", "span 4", "span 4", "2/ span 4"],
                paddingRight: [0, 4, 4, 4],
                paddingTop: [3, 0, 0, 0],
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
                gridRow: "span 1",
                gridColumn: ["span 8", "span 4", "span 4", "span 4"],
                paddingLeft: [0, 4, 4, 4],
                paddingTop: [3, 0, 0, 0],
              }}
            >
              <Text mb={3}>
                It’s time-consuming to incorporate a design system into a vast
                organization like Canon. And as contract consultants; we lacked
                time. This is why we opted to present a vision rather than a
                fully fledged product.
              </Text>
              <Text mb={3}>
                The design system became an important talking point when
                presenting the designs to Canon.
              </Text>
              <Text></Text>
            </div>
          </GridParent> */}
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

export default Canon;
