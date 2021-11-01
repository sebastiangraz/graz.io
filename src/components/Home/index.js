/** @jsxImportSource theme-ui */

import React from "react";
import { Text, Grid, Link } from "theme-ui";
import { Logo, List, EmailLink } from "../";
import { m, useViewportScroll, useTransform } from "framer-motion";
import { shade } from "@theme-ui/color";
import resume from "../../files/cv-sebastiangraz.pdf";
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
  const colorOutput = [data.color, "hsl(186, 0%, 63%)", data.bg];
  const transformOutput = [0, -11, -32];
  const { scrollY } = useViewportScroll();

  const colorVal = useTransform(scrollY, scrollProgress, colorOutput, {
    damping: 12,
    mass: 0.1,
  });

  const y = useTransform(scrollY, scrollProgress, transformOutput, {
    damping: 12,
    mass: 0.1,
  });

  const list = {
    rest: (custom) => ({
      opacity: 0,
      transition: {
        duration: 2,
        type: "tween",
        ease: "easeInOut",
      },
    }),

    hover: (custom) => ({
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "tween",
        ease: "easeInOut",
        delay: custom * 0.12,
      },
    }),
  };

  return (
    <m.div
      as={Grid}
      style={{ color: colorVal, y }}
      sx={{
        a: {
          textDecoration: "none",
          color: "inherit",
          "&:hover": { textDecoration: "underline" },
        },
        background: data.bg,
        willChange: "color",
        margin: "0 auto",
        minHeight: ["auto", "100vh"],
        pt: [7, 8, 9],
        pb: 10,
        px: [0],
        rowGap: [8, 9, "16vh"],
        columnGap: 0,
        display: "grid",
        alignItems: ["center", "start"],
        maxWidth: "2400px",
        gridTemplateRows: "auto auto auto",
        gridTemplateColumns: [
          "repeat(10, 1fr)",
          "repeat(10, 1fr)",
          "repeat(12, 1fr)",
        ],
        gridTemplateAreas: [
          //phone
          `
          '. logo logo logo . . . contact contact .'
          '. intro intro intro intro intro intro intro intro .'
          '. meta meta meta meta meta meta meta meta .'
          `,
          //tablet
          `
          '. logo logo . . . years .  contact .'
          '. intro intro intro . . . . . .'
          '. meta meta meta meta meta meta meta meta meta '
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
        sx={{
          p: 3,
          ml: -3,
          gridArea: "years",
          display: ["none", "block"],
        }}
      >
        <Link target="_blank" href={resume}>
          Résumé
        </Link>
      </Text>
      <m.div
        tabIndex="0"
        initial="rest"
        whileFocus="hover"
        whileHover="hover"
        animate="rest"
        sx={{
          outline: "none",
          userSelect: "none",
          cursor: "pointer",
          gridArea: "contact",
          position: "relative",
          justifySelf: ["flex-end", "flex-start"],
        }}
      >
        <Text sx={{ pt: 2, p: 3, ml: -3 }} variant="label">
          Contact
        </Text>
        <m.div
          variants={list}
          sx={{
            background: data.bg,
            pt: 2,
            p: 3,
            pl: [3, 0],
            boxShadow: [
              (t) => `0 0 0 1px  ${shade(data.bg, 0.1)(t)}`,
              "none",
              "none",
              "none",
            ],
            borderRadius: "1em",
            cursor: "auto",
            position: "absolute",
            right: [0, null],
            left: [null, 0],
            top: "100%",
            width: ["200px", "auto"],
            minWidth: "100%",
          }}
        >
          <Text variant="label">
            <List noBullets>
              <m.div variants={list} custom={1}>
                <EmailLink string="hi@graz.io">Email</EmailLink>
              </m.div>
              <m.div variants={list} custom={2}>
                <Link target="_blank" href="https://twitter.com/grazsebastian">
                  Twitter
                </Link>
              </m.div>
              <m.div variants={list} custom={3}>
                <Link target="_blank" href="https://vsco.co/sgraz/">
                  VSCO
                </Link>
              </m.div>
            </List>
          </Text>
        </m.div>
      </m.div>
      <div
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

        <div sx={{ order: [-1, 0] }}>
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
      </div>
      <div sx={{ gridArea: "intro" }}>
        <div
          sx={{
            maxWidth: ["100%", "initial", null],
            width: ["100%", 420, 360, 360],
          }}
        >
          <Text variant="lead" mb={4}>
            Sebastian Graz is a design studio for all things branding, digital
            design, served with a technological edge.
          </Text>
        </div>
      </div>
    </m.div>
  );
};
