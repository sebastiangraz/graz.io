/** @jsxImportSource theme-ui */

import React from "react";
import { Text, Grid } from "theme-ui";
import { Logo, List } from "../";
import { m, useViewportScroll, useTransform, transform } from "framer-motion";

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
  const y = [0, window.innerHeight / 1.2, window.innerHeight];
  const colorOutput = [data.color, "hsl(42, 33%, 93%)", data.bg];
  const logoOutput = [`"wght" ${60}`, `"wght" ${12}`, `"wght" ${5}`];
  const { scrollY } = useViewportScroll();
  const color = useTransform(scrollY, y, colorOutput);

  const updateLogo = (v) => {
    return transform(v, y, logoOutput);
  };

  const logo = transform(scrollY, y, logoOutput);
  const filter = useTransform(scrollY, (v) => updateLogo(v));

  return (
    <m.div
      as={Grid}
      style={{ color }}
      sx={{
        margin: "0 auto",
        minHeight: "100vh",
        py: [7, 8, 9],
        px: [7, 0, null],
        rowGap: [8, 9, "16vh"],
        columnGap: 0,
        display: "grid",
        alignItems: ["start", "start"],
        maxWidth: "2400px",
        gridTemplateRows: "auto auto auto",
        gridTemplateColumns: ["repeat(2, 1fr)", "repeat(17, 1fr)"],
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
      <Logo
        style={{ fontVariationSettings: filter }}
        sx={{
          gridArea: "logo",
          fontSize: 9,
          display: "flex",
          transition: `.5s cubic-bezier(1,0,0,1) opacity, 1s cubic-bezier(1,0,0,1) transform`,
          transform: false
            ? ["scale(1)", "scale(1)", "scale(0.8)"]
            : "scale(1)",
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
              Associations
            </Text>
            <List>
              <>Husqvarna</>
              <>M. Saatchi</>
              <>Delhaize</>
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
              <>Prototyping</>
              <>Design Ops</>
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
      </div>
      <div sx={{ gridArea: "intro" }}>
        <Text
          variant="lead"
          sx={{
            mt: -2,
            maxWidth: ["100%", "initial", null],
            width: ["100%", 420, 360, 520],
          }}
        >
          I’m Sebastian—as a digital designer I care about our dear users, rapid
          prototyping, design systems and brand identities.
        </Text>
      </div>
    </m.div>
  );
};
