/** @jsxImportSource theme-ui */

import React from "react";
import { Text, Grid } from "theme-ui";
import { Logo, List } from "../";

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
export const Home = () => {
  return (
    <Grid
      sx={{
        minHeight: "100vh",
        py: [7, 8, 9],
        px: [7, 0, null],
        rowGap: [8, 9, "16vh"],
        columnGap: 0,
        display: "grid",
        alignItems: ["start", "start"],
        maxWidth: "2400px",
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
        gridTemplateRows: "auto auto auto",
        gridTemplateColumns: ["repeat(2, 1fr)", "repeat(12, 1fr)"],
      }}
    >
      <Logo
        sx={{
          gridArea: "logo",
          fontSize: 9,
          display: "flex",
          transition: `.5s cubic-bezier(1,0,0,1) opacity, 1s cubic-bezier(1,0,0,1) transform`,
          transform: false
            ? ["scale(1)", "scale(1)", "scale(0.8)"]
            : "scale(1)",
        }}
        weight={42}
      />

      <Text sx={{ gridArea: "years", display: ["none", "block"] }}>Résumé</Text>
      <Text sx={{ gridArea: "contact" }}>Contact</Text>
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
          <Text mb={4}>Associations</Text>
          <List noBullets>
            <span>Husqvarna</span>
            <span>M. Saatchi</span>
            <span>Delhaize</span>
            <span>Framer</span>
            <span>Canon</span>
            <span>Volvo</span>
          </List>
        </div>
        <div>
          <Text mb={4}>Expertise</Text>
          <List noBullets>
            <span>Empathic design</span>
            <span>Design Systems</span>
            <span>Prototyping</span>
            <span>Design Ops</span>
            <span>Front-End</span>
            <span>Branding</span>
          </List>
        </div>
        <div>
          <Text mb={4}>Recognitions</Text>
          <List noBullets>
            {awards.map((char) => (
              <React.Fragment key={char.title}>
                {char.title} · <Text variant="caps">{char.count}×</Text>
              </React.Fragment>
            ))}
          </List>
        </div>
      </div>
      <div sx={{ gridArea: "intro" }}>
        <Text
          variant="lead"
          sx={{
            mt: -2,
            maxWidth: ["100%", "initial", null],
            width: ["100%", 440, 360, 540],
          }}
        >
          I’m Sebastian—as a digital designer I care about our dear users, rapid
          prototyping, design systems and brand identities.
        </Text>
      </div>
    </Grid>
  );
};
