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
  TypographyBlock,
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
          <GridParent>
            <Box
              mb={10}
              sx={{
                gridRow: ["1/span 1", "1/span 1"],
                gridColumn: ["2 / span 8", "2/span 8"],
              }}
            >
              <Text variant="heading" sx={{ maxWidth: 840 }}>
                Canon wanted us to help them improve the UI & UX of their Canon
                Store Website. We identified low-level improvements related to
                how agencies & Canon worked together. As a result; we presented
                Canon with a proof-of-concept design system.
              </Text>
            </Box>
          </GridParent>
          <GridParent mb={[6, 7, 8]}>
            <div
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gridColumn: ["2/span 8", "2/ span 3"],
                gridRow: ["span 3", null, null, "span 1"],
              }}
            >
              <div>
                <Box mb={8} sx={{ width: 142, color: "accent" }}>
                  {vectors.problemStatement}
                </Box>
                <Text variant="caps" mb={6}>
                  Problem Statement
                </Text>
                <Box sx={{ maxWidth: 340 }}>
                  <Text mb={10} variant="lead">
                    Digital presence inconsistent across their brand. Potential
                    loss of revenue due to users not finding the site
                    trustworthy.
                  </Text>
                </Box>
              </div>
              <div>
                <Text mb={6} variant="caps">
                  4 Challenges
                </Text>

                <NumberedList
                  sx={{ mr: [0, null, 9, 5], mt: [8, 0], mb: 0 }}
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
                mt: [9, 0],
                mb: [9, 0],
                borderRadius: ["6vmin", "4vmin 0 0 4vmin"],
                overflow: "hidden",
                right: 0,
                gridRow: ["1/span 1"],
                gridColumn: ["2/span 8", "6/span 5"],
              }}
            >
              <Video
                sx={{ video: { objectPosition: "left" } }}
                fit
                videoData={videos.intro}
              />
            </div>
          </GridParent>
          <GridParent py={[10, 11]}>
            <div
              sx={{
                marginBottom: [10, 0],
                marginRight: 5,
                gridColumn: ["2/span 12", "2 / span 3"],
              }}
            >
              <span sx={{ color: "accent" }}> {vectors.desiredOutcomes}</span>

              <Text sx={{ marginBottom: 8, marginTop: [8] }} variant="caps">
                Desired outcomes
              </Text>
              <Box sx={{ maxWidth: 300 }}>
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
            <div
              sx={{ marginRight: 5, gridColumn: ["2/span 12", "7 / span 3"] }}
            >
              <span sx={{ color: "accent" }}>{vectors.whatWasDone}</span>
              <Text sx={{ marginBottom: 8, marginTop: [8] }} variant="caps">
                What was done
              </Text>
              <Box sx={{ maxWidth: 300 }}>
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
              py: [10, 11],
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginBottom: [6, 0],
                gridColumn: ["2/span 8", "6 / span 4"],
              }}
            >
              {vectors.spaceScale}
            </Box>
            <Box
              sx={{
                gridColumn: ["2/span 8", "2 /span 3"],
              }}
            >
              <Text variant="heading">Space</Text>
              <Text sx={{ maxWidth: 440 }} variant="lead">
                The first things we tackled was how designers and developers
                looked at space.
              </Text>
              <Text sx={{ maxWidth: 600 }} variant="lead">
                Oftentimes margins and paddings between UI elements were
                guessed.
              </Text>
              <Text sx={{ maxWidth: 500 }} variant="lead">
                Failing to standardize spacing leads to visual inconsistencies,
                but also developers will have to work harder to line things up.
              </Text>
            </Box>
          </GridParent>

          <GridParent sx={{ py: [10, 11], alignItems: "center" }}>
            <Box
              sx={{
                marginBottom: [6, 0],
                gridColumn: ["2/span 8", "2 / span 4"],
              }}
            >
              {vectors.typeScale}
            </Box>
            <Box
              sx={{
                gridColumn: ["2/span 8", "7 / span 3"],
              }}
            >
              <Text variant="heading">Typography</Text>
              <Text variant="lead">
                Closely related to spacing is typographical hierarchy.
              </Text>
              <Text variant="lead">
                Much like spacing, font sizes can be a big contributor to
                inconsistency if left unchecked.
              </Text>
              <Text variant="lead">
                We developed a type scale that would live alongside our spacing
                system, that was also divisible by 4 & 2.
              </Text>
            </Box>
          </GridParent>

          <GridParent sx={{ py: [10, 11], alignItems: "center" }}>
            <Box
              sx={{
                marginBottom: [6, 0],
                gridColumn: ["2/span 8", "6 / span 4"],
              }}
            >
              {vectors.colorGen}
            </Box>
            <Box
              sx={{
                gridColumn: ["2/span 8", "2/ span 3"],
              }}
            >
              <Text variant="heading">Color</Text>
              <Text variant="lead">
                Hex codes are notoriously hard to keep track of.
              </Text>
              <Text variant="lead">
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
              <Text variant="lead">
                The goal with this was to standardize picking colors with
                certain parameters that Canon would own.
              </Text>
            </Box>
          </GridParent>

          <GridParent
            sx={{
              py: [10, 11],
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginBottom: [6, 0],
                gridColumn: ["2/span 8", "6/span 4"],
              }}
            >
              {vectors.designSystem}
            </Box>
            <Box
              sx={{
                gridColumn: ["2/span 8", "2/span 3"],
              }}
            >
              <Text variant="heading">Atoms</Text>
              <Text variant="lead">
                With the foundations in place, we implemented the same modular
                way of thinking throughout the whole system.
              </Text>
              <Text variant="lead">
                They were dubbed Atoms, and they became the building blocks of
                Canons design system.
              </Text>
            </Box>
          </GridParent>
          <GridParent
            sx={{
              py: [10, 11],
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
                gridColumn: ["2/span 8", "2/span 3"],
                gridRow: "span 1",
              }}
            >
              <Text mt={[6, 8]} mb={[1, 2]}>
                We took inspiration from immutable CSS frameworks such as
                Tachyons, Tailwind etc. To build up an extensive collection of
                CSS classes that would be the base of the design system.
              </Text>
            </Box>
            <Box
              sx={{
                gridColumn: ["2/span 8", "7 / span 3"],
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

    Homepage: () => {
      return (
        <React.Fragment>
          <TypographyBlock>
            <Text variant="heading">Web design</Text>
            <Text variant="lead">
              We put our design system to the test by creating a few concept
              designs to present to Canon. What you see below is my rendition of
              it. We had other designers in our team create their own visions.
            </Text>
          </TypographyBlock>
          <GridParent>
            <div
              sx={{
                overflow: "hidden",
                gridRow: ["span 4", "span 4"],
                gridColumn: ["3/span 8", "3/span 8"],
              }}
            >
              <Img imageData={images.canon1} />
            </div>
            <div
              sx={{
                overflow: "hidden",
                gridRow: ["span 4", "span 4"],
                gridColumn: ["1/span 8", "1/span 8"],
              }}
            >
              <Img imageData={images.canon2} />
            </div>
          </GridParent>
          <Box
            sx={{
              marginBottom: [5, 6, 7],
            }}
          >
            <GridParent>
              <TypographyBlock mt={[10, 11]}>
                <Text variant="heading">Alternative Layout</Text>
                <Text variant="lead">
                  We wanted to set the expectations that design systems don’t
                  equal rigid or boring layouts. More so explaining how
                  consistency between Canon’s digital products can increase
                  brand trust.
                </Text>
              </TypographyBlock>
              <div
                sx={{
                  overflow: "hidden",
                  gridRow: ["span 4", "span 4"],
                  gridColumn: ["1/span 10", "1/span 10"],
                  img: {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Img imageData={images.canon3} />
              </div>
            </GridParent>
          </Box>
        </React.Fragment>
      );
    },
    Deduction: () => {
      return (
        <>
          <TypographyBlock mt={10}>
            <Text variant="heading">Closing thoughts</Text>
            <Text variant="lead">
              It’s time-consuming to incorporate a design system into a vast
              organization like Canon. And as contract consultants; we lacked
              time. This is why we opted to present a vision rather than a fully
              fledged deliverable.
            </Text>
            <Text variant="lead">
              The mock design system became a core persuasion point when
              presenting the final designs to Canon. And hopefully a learning
              experience on how to take their first steps towards a more
              consistent digital brand.
            </Text>
          </TypographyBlock>

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
