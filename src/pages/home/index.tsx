/** @jsxImportSource theme-ui */

import React from "react";
import { Text, Grid, Link, Theme } from "theme-ui";
import { Logo, List, EmailLink } from "../../components";
import { m, useViewportScroll, useTransform, useSpring } from "framer-motion";
import { shade, transparentize } from "@theme-ui/color";
import resume from "../../files/cv-sebastiangraz.pdf";

const NearestQuarter = (overRideMonth?: number) => {
  const getCurrentQuarter = (month: number) => {
    const paddedMonth = (month + 1) % 12; // Add one month as padding

    // Calculate the nearest quarter based on the padded month
    const quarter = Math.ceil((paddedMonth + 1) / 3);
    return `Q${quarter}`;
  };

  return (
    <span>
      {overRideMonth !== undefined
        ? getCurrentQuarter(overRideMonth as number)
        : getCurrentQuarter(new Date().getMonth())}
    </span>
  );
};

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

// function AddNMonth() {
//   const currentDate = new Date();
//   const nextMonthDate = new Date(currentDate);

//   nextMonthDate.setMonth(currentDate.getMonth() + 1);

//   return nextMonthDate;
// }

// const dateOneMonthLater = AddNMonth(1);

export default () => {
  const scrollProgress = [
    0,
    window.innerHeight * 0.7,
    window.innerHeight * 0.8,
  ];
  // const colorOutput = [data.color, "hsl(186, 0%, 63%)", data.bg];
  const transformOutput = [0, -11, -32];
  const { scrollY } = useViewportScroll();

  // const colorVal = useTransform(scrollY, scrollProgress, colorOutput, {
  //   damping: 12,
  //   mass: 0.1,
  // });

  const y = useSpring(useTransform(scrollY, scrollProgress, transformOutput), {
    damping: 12,
    mass: 0.1,
  });

  const opacity = useSpring(
    useTransform(scrollY, scrollProgress, [1, 0.5, 0]),
    {
      damping: 10,
      mass: 0.1,
    }
  );

  const list = {
    rest: (custom: number) =>
      ({
        pointerEvents: "none",
        opacity: 0,
        transition: {
          duration: 0.4,
          type: "tween",
          ease: "easeInOut",
        },
      } as const),

    hover: (custom: number) =>
      ({
        pointerEvents: "all",
        opacity: 1,
        transition: {
          duration: 0.3,
          type: "tween",
          ease: "easeInOut",
          delay: custom * 0.035,
        },
      } as const),
  };

  return (
    <m.div
      style={{ y, opacity }}
      sx={{
        a: {
          textDecoration: "none",
          color: "inherit",
          "&:hover": { textDecoration: "underline" },
        },
        background: "transparent",
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
          fontVariationSettings: `"wght" 50`,
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
        <Link target="_blank" href={resume} rel="noopener">
          Résumé
        </Link>
      </Text>
      <m.div
        tabIndex={0}
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
            m: [4, 0],
            cursor: "auto",
            position: "absolute",
            right: [0, null],
            left: [null, 0],
            top: "100%",
            width: ["148px", "120px"],
            minWidth: "100%",
            display: "grid",
            zIndex: 1,
            "&:before": {
              background: "background",
              p: 4,
              isolation: "isolate",
              display: ["grid", "none"],
              position: "absolute",
              gridArea: "1/1",
              content: '""',
              borderRadius: ["1em", 0],
              left: "-16px",
              top: "-16px",
              width: "100%",
              height: "100%",
              boxShadow: (t: Theme) =>
                `0 0 0 1px ${transparentize("text", 0.92)(t)}`,
            },
          }}
        >
          <Text variant="label">
            <List noBullets sx={{ zIndex: 1, position: "relative" }}>
              <m.div variants={list} custom={1}>
                <EmailLink string="hi@graz.io">Email</EmailLink>
              </m.div>
              <m.div variants={list} custom={2}>
                <Link
                  target="_blank"
                  href="https://twitter.com/grazsebastian"
                  rel="noopener"
                >
                  Twitter
                </Link>
              </m.div>
              <m.div variants={list} custom={3}>
                <Link
                  target="_blank"
                  href="https://vsco.co/sgraz/"
                  rel="noopener"
                >
                  VSCO
                </Link>
              </m.div>
              <m.hr
                variants={list}
                custom={4}
                sx={{
                  height: "1px",
                  maxWidth: "100%",
                  border: "none",
                  backgroundColor: (t) => shade("#eee", 0.1)(t),
                }}
              />
              <m.div variants={list} custom={5}>
                <Text
                  mb={2}
                  sx={{
                    whiteSpace: "pre",
                  }}
                  variant="caps"
                >
                  Available {NearestQuarter()}
                </Text>
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
            <Text variant="label" mb={6}>
              Expertise
            </Text>
            <List>
              <>Empathic Design</>
              <>Design Systems</>
              <>Art Direction</>
              <>Prototyping</>
              <>Front-end</>
              <>Branding</>
            </List>
          </Text>
        </div>
        <div>
          <Text variant="label" mb={5}>
            <Text variant="label" mb={6}>
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
            <Text variant="label" mb={6}>
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
            width: [410, null, 380, 420],
          }}
        >
          <Text variant="lead" sx={{ fontSize: [6, 6, 7, 7] }} mb={4}>
            <Text
              variant="heading"
              sx={{ fontSize: [6, 6, 7, 7], display: "inline" }}
            >
              Sebastian Graz,
            </Text>{" "}
            <span sx={{ display: ["none", "none", "inline", "none"] }}>
              an independent design studio creating designs that are coherent,
              memorable & beautiful.
            </span>
            <span sx={{ display: ["inline", "inline", "none", "inline"] }}>
              an independent design studio striving to collaborate designs that
              are coherent, memorable & beautiful.
            </span>
          </Text>
        </div>
      </div>
    </m.div>
  );
};
