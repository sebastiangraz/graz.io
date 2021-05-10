/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx, Text, Grid, Link } from "theme-ui";
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
        p: [5, 6, 7],
        rowGap: [7, null, "20vh"],
        columnGap: 0,
        display: "grid",
        gridTemplateAreas: [
          //phone
          `
          'name years contact'
          'intro intro .'
          'meta meta .'
          `,
          //tablet
          `
          'name years contact'
          'intro intro .'
          'meta meta meta'
          `,
          //desktop
          `
          'name name . . . . years years  . .  contact .'
          'intro intro intro . . . meta meta meta meta meta meta'
          `,
        ],
        "grid-template-rows": "auto",
        "grid-template-columns": [
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(12, 1fr)",
        ],
      }}
    >
      <Text sx={{ gridArea: "name" }}>Sebastian Graz</Text>
      <Text sx={{ gridArea: "years" }}>
        Selected Work <br /> 2017—2020
      </Text>
      <Text sx={{ gridArea: "contact" }}>Contact</Text>
      <div
        sx={{
          gridArea: "meta",
          display: "grid",
          rowGap: [7, null],
          gridTemplateColumns: ["repeat(3, 1fr)", "repeat(3, 1fr)"],
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
                {char.title} · {char.count}×
              </React.Fragment>
            ))}
          </List>
        </div>
      </div>
      <div sx={{ gridArea: "intro" }}>
        <Logo
          sx={{
            mt: -1,
            mb: 4,
            fontSize: "30px",
            display: "flex",
            lineHeight: 0.8,
            transition: `.5s cubic-bezier(1,0,0,1) opacity, 1s cubic-bezier(1,0,0,1) transform`,
            transform: false
              ? ["scale(1)", "scale(1)", "scale(0.8)"]
              : "scale(1)",
          }}
          weight={40}
        />

        <Text
          variant="lead"
          sx={{
            width: [300, 420],
          }}
        >
          I’m Sebastian—as a digital designer I care about our dear users, rapid
          prototyping, design systems and brand identities.
        </Text>
      </div>
    </Grid>
  );
};
