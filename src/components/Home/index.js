/** @jsxImportSource theme-ui */

import React from "react";
import { Text, Grid } from "theme-ui";
import { Logo, List } from "../";
import {
  m,
  useViewportScroll,
  useTransform,
  AnimatePresence,
  AnimateSharedLayout,
} from "framer-motion";

const awards = [
  {
    title: "Creative Bloq",
    count: 1,
    year: "2017",
  },

  {
    title: "CSS Awards",
    count: 1,
    year: "2014",
  },
  {
    title: "Mindsparkle",
    count: 1,
    year: "2017",
  },
  {
    title: "SiteInspire",
    count: 6,
    year: "2014-2020",
  },
  {
    title: "The FWA",
    count: 1,
    year: "2013",
  },
  {
    title: "Webflow",
    count: 1,
    year: "2017",
  },
];
export const Home = ({ data }) => {
  const scrollProgress = [0, window.innerHeight / 1.2, window.innerHeight];
  const colorOutput = [data.color, "hsl(42, 33%, 93%)", data.bg];
  const transformOutput = [0, -11, -32];
  const { scrollY } = useViewportScroll();

  const color = useTransform(scrollY, scrollProgress, colorOutput, {
    damping: 12,
    mass: 0.1,
  });

  const y = useTransform(scrollY, scrollProgress, transformOutput, {
    damping: 12,
    mass: 0.1,
  });

  const Button = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return (
      <>
        <m.span
          layout
          onClick={toggleOpen}
          style={{ backgroundColor: "currentColor" }}
          sx={{
            margin: 0,
            width: "1em",
            height: "1em",
            verticalAlign: "middle",
            borderRadius: "pill",
            display: "inline-grid",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            "&:hover": {
              cursor: "pointer",
            },
            "&:before": {
              content: "''",
              backgroundColor: data.bg,
              width: "10px",
              height: "2px",
              left: "calc(50% - 5px)",
              position: "absolute",
            },
            "&:after": {
              content: "''",
              transition: "background .3s ease",
              backgroundColor: isOpen ? "transparent" : data.bg,
              height: "10px",
              width: "2px",
              left: "calc(50% - 1px)",
              position: "absolute",
            },
          }}
        ></m.span>

        <AnimatePresence>
          {isOpen && (
            <m.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Text mt={6}>
                10 years of experience working with global clients with unique
                challenges. With great gusto the studio specialises in unique
                layouts, evoking colors, intricate interactions with a
                detail-oriented finish. Are all attributes the studio strives
                towards.
              </Text>
            </m.div>
          )}
        </AnimatePresence>
      </>
    );
  };

  return (
    <m.div
      as={Grid}
      style={{ color, y }}
      sx={{
        willChange: "color",
        margin: "0 auto",
        minHeight: ["auto", "100vh"],
        pt: [7, 8, 9],
        pb: 10,
        px: [7, 0, null],
        rowGap: [8, 9, "16vh"],
        columnGap: 0,
        display: "grid",
        alignItems: ["start", "start"],
        maxWidth: "2400px",
        gridTemplateRows: "auto auto auto",
        gridTemplateColumns: ["repeat(2, 1fr)", "repeat(12, 1fr)"],
        gridTemplateAreas: [
          //phone
          `
          'logo contact'
          'intro intro'
          'meta meta'
          `,
          //tablet
          `
          '. logo logo . . . years years  . .  contact .'
          '. intro intro intro . . . . . . . .'
          '. meta meta meta meta meta meta meta meta meta meta meta '
          `,
          //desktop
          `
          '. logo logo . . . years years  . .  contact .'
          '. intro intro intro .  . meta meta meta meta meta meta'
          `,
          //wide
          `
          '. logo logo . . . years years  . .  contact .'
          '. intro intro intro .  . meta meta meta meta meta meta'
          `,
        ],
      }}
    >
      <AnimateSharedLayout>
        <Logo
          sx={{
            fontVariationSettings: `"wght" 43`,
            gridArea: "logo",
            fontSize: 9,
            display: "flex",
          }}
        />

        <Text
          variant="label"
          sx={{ gridArea: "years", display: ["none", "block"] }}
        >
          Résumé
        </Text>
        <Text variant="label" sx={{ gridArea: "contact" }}>
          Contact
        </Text>
        <m.div
          layout="position"
          sx={{
            gridArea: "meta",
            display: "grid",
            rowGap: [7, null],
            gridTemplateColumns: ["repeat(2, 1fr)", "repeat(3, 1fr)"],
            width: "100%",
          }}
        >
          <div>
            <Text variant="label" mb={5}>
              <Text variant="label" mb={4}>
                Associations
              </Text>
              <List>
                <>Husqvarna</>
                <>M. Saatchi</>
                <>Capchase</>
                <>Framer</>
                <>Canon</>
                <>Volvo</>
              </List>
            </Text>
          </div>
          <div>
            <Text variant="label" mb={5}>
              <Text variant="label" mb={4}>
                Expertise
              </Text>
              <List>
                <>Empathic design</>
                <>Design Systems</>
                <>Art direction</>
                <>Prototyping</>
                <>Front-End</>
                <>Branding</>
              </List>
            </Text>
          </div>
          <div>
            <Text variant="label" mb={5}>
              <Text variant="label" mb={4}>
                Recognitions
              </Text>
              <List>
                {awards.map((char) => (
                  <React.Fragment key={char.title}>
                    {char.title} ·{" "}
                    <Text sx={{ display: "inline" }} variant="caps">
                      {char.count}×
                    </Text>
                  </React.Fragment>
                ))}
              </List>
            </Text>
          </div>
        </m.div>
        <div sx={{ gridArea: "intro" }}>
          <m.div
            layout="position"
            sx={{
              maxWidth: ["100%", "initial", null],
              width: ["100%", 420, 360, 500],
            }}
          >
            <Text variant="lead" mb={4}>
              Sebastian Graz is a design studio for all things branding, digital
              design & systems, served with a technological edge. <Button />
            </Text>
          </m.div>
        </div>
      </AnimateSharedLayout>
    </m.div>
  );
};
