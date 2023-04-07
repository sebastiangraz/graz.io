/** @jsxImportSource theme-ui */

import React, { useState } from "react";
import { Text, Link, Theme } from "theme-ui";
import { Logo, List, EmailLink } from "../../components";
import { m, useScroll, useTransform, useSpring } from "framer-motion";
import { shade, transparentize } from "@theme-ui/color";
import resume from "/cv-sebastiangraz.pdf";

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
    title: "Landbook",
    count: 2,
    year: "2023",
  },
  {
    title: "Webflow",
    count: 1,
    year: "2017",
  },
];

export default () => {
  const scrollProgress = [
    0,
    window.innerHeight * 0.7,
    window.innerHeight * 0.8,
  ];
  const transformOutput = [0, -11, -32];
  const { scrollY } = useScroll();

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

  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsHover(true);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsHover(false);
  };

  const list = {
    hidden: {
      opacity: 0,
      pointerEvents: "none",
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      pointerEvents: "auto",
      when: "afterChildren",
      transition: {
        duration: 0.3,
        staggerChildren: 0.035,
      },
    },
  } as const;

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
        maxWidth: "1800px",
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
          fontSize: 10,
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
      <div
        tabIndex={0}
        onMouseOver={(e) => handleMouseEnter(e)}
        onMouseOut={(e) => handleMouseLeave(e)}
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
          initial="hidden"
          animate={isHover ? "visible" : "hidden"}
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
              <m.div
                variants={list}
                key={1}
                animate={isHover ? "show" : "rest"}
              >
                <EmailLink string="hi@graz.io">Email</EmailLink>
              </m.div>
              <m.div variants={list} key={2}>
                <Link
                  target="_blank"
                  href="https://twitter.com/grazsebastian"
                  rel="noopener"
                >
                  Twitter
                </Link>
              </m.div>
              <m.div variants={list} key={3}>
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
                key={4}
                sx={{
                  height: "1px",
                  maxWidth: "100%",
                  border: "none",
                  backgroundColor: (t) => shade("#eee", 0.1)(t),
                }}
              />
              <m.div variants={list} key={5}>
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
      </div>
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
            <Text variant="caps" mb={6}>
              Expertise
            </Text>
            <List
              sx={{
                color: "textDim",
                "&& > *": {
                  mb: 4,
                },
              }}
            >
              <>Design Systems</>
              <>Brand Design</>
              <>Art Direction</>
              <>Prototyping</>
              <>Front-end</>
              <>Motion</>
            </List>
          </Text>
        </div>
        <div>
          <Text variant="label" mb={5}>
            <Text variant="caps" mb={6}>
              Recognitions
            </Text>
            <List
              sx={{
                color: "textDim",
                "&& > *": {
                  mb: 4,
                },
              }}
            >
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
            <Text variant="caps" mb={6}>
              Associations
            </Text>
            <List
              sx={{
                color: "textDim",
                "&& > *": {
                  mb: 4,
                },
              }}
            >
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
            width: [410, null, 430, 440],
          }}
        >
          <Text
            sx={{
              fontSize: [7, 7, 8, 8],
              letterSpacing: ["body", null, "lead"],
              lineHeight: ["lead"],
            }}
            mb={4}
          >
            <Text
              variant="heading"
              sx={{ fontSize: [7, 7, 8, 8], display: "inline" }}
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
