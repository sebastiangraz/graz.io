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
        gap: [5, 6, 7],
        display: "grid",
        gridTemplateAreas: [
          `'logo''intro''meta'`,
          null,
          `'logo meta''intro intro'`,
        ],
        "grid-template-rows": "auto 1fr",
        "grid-template-columns": "auto 1fr",
      }}
    >
      <Logo
        sx={{
          gridArea: "logo",
          lineHeight: 0.8,
          fontSize: 150,
          transition: `.5s cubic-bezier(1,0,0,1) opacity, 1s cubic-bezier(1,0,0,1) transform`,
          transform: false
            ? ["scale(1)", "scale(1)", "scale(0.8)"]
            : "scale(1)",
        }}
        weight={80}
      />
      <div
        sx={{
          justifyContent: "end",
          gridArea: "meta",
          display: "grid",
          fontSize: 3,
          gridTemplateColumns: ["repeat(4, auto)"],
          gap: ["10%"],
          width: ["100%"],
          paddingBottom: [5, "6px"],
        }}
      >
        <div>
          <Text mb={4}>Associations</Text>
          <List>
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
          <List>
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
          <List>
            {awards.map((char) => (
              <React.Fragment key={char.title}>
                {char.title} {char.count}×
              </React.Fragment>
            ))}
          </List>
        </div>
        <div>
          <Text mb={4}>Contact</Text>
          <List>
            <Link
              href="mailto:graz@live.se"
              rel="noopener noreferrer"
              target="_blank"
            >
              Email
            </Link>

            <Link
              href="https://twitter.com/grazsebastian"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </Link>

            <Link
              href="https://dribbble.com/grazsebastian"
              rel="noopener noreferrer"
              target="_blank"
            >
              Dribbble
            </Link>
          </List>
        </div>
      </div>
      <Text
        variant="body"
        sx={{
          gridArea: "intro",
          marginBottom: [4, 0],
          width: [560],
        }}
      >
        I’m Sebastian—as a digital designer I care about our dear users,
        prototyping, design systems & branding
      </Text>
    </Grid>
  );
};
