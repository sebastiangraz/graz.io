/** @jsxImportSource theme-ui */

import React, { useState } from "react";
import { Text, Link } from "theme-ui";
import { Logo, List, EmailLink } from "@/components";
import { m, useScroll, useTransform, useSpring } from "framer-motion";

import { Link as TanstackLink } from "@/components";
const NearestQuarter = () => {
  const amountOfMonthsPadding = 1.5; // Months of padding, decimal values are allowed.

  // Create a new date object based on the current date
  const date = new Date();

  // Calculate total days padding
  const totalDaysPadding = Math.round(amountOfMonthsPadding * 30.436875); // Using the average number of days in a month

  // Add the padding to the date
  date.setDate(date.getDate() + totalDaysPadding);

  // Get the "true" month (i.e., not zero indexed) from the new date
  const trueMonth = date.getMonth() + 1;

  // Calculate the nearest quarter based on the new date's month
  const quarter = Math.ceil(trueMonth / 3);

  return <span>{`Q${quarter}`}</span>;
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
    count: 7,
    year: "2014-2020",
  },
  {
    title: "Landbook",
    count: 4,
    year: "2023",
  },
  {
    title: "Webflow",
    count: 1,
    year: "2017",
  },
];

const Home = () => {
  const scrollProgress = [0, window.innerHeight * 0.7, window.innerHeight * 0.8];
  const transformOutput = [0, -11, -32];
  const { scrollY } = useScroll();

  const y = useSpring(useTransform(scrollY, scrollProgress, transformOutput), {
    damping: 12,
    mass: 0.1,
  });

  const opacity = useSpring(useTransform(scrollY, scrollProgress, [1, 0.5, 0]), {
    damping: 10,
    mass: 0.1,
  });

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
        pt: [8, 9, "min(7vh, 5rem)"],
        pb: [12, "16rem", "clamp(10rem, 24vh, 13rem)"],
        px: [0],
        rowGap: ["4rem", null, "5rem"],
        columnGap: 0,
        display: "grid",
        gridTemplateColumns: "subgrid",
        gridTemplateRows: "subgrid",
        maxWidth: "1800px",
        gridColumn: "span 2",
        // alignItems: ["center", "stretch"],
        // alignContent: "space-between",
        // maxWidth: "1800px",
        // gridTemplateRows: "auto auto auto",
        // gridTemplateColumns: ["repeat(10, 1fr)", "repeat(10, 1fr)", "repeat(12, 1fr)"],
        // gridTemplateAreas: [
        //   //phone
        //   `
        //   '. logo logo logo . . . cta cta .'
        //   '. intro intro intro intro intro intro intro intro .'
        //   '. meta meta meta meta meta meta meta meta .'
        //   `,
        //   //tablet
        //   `
        //   '. logo logo . . . nav .  cta .'
        //   '. intro intro intro intro intro intro . . .'
        //   '. meta meta meta meta meta meta meta meta meta '
        //   `,
        //   //desktop
        //   `
        //   '. logo logo . . . nav nav  . .  cta .'
        //   '. intro intro intro intro intro meta meta meta meta meta meta'
        //   `,
        //   //wide
        //   `
        //   '. logo logo . . . nav nav  . .  cta .'
        //   '. intro intro intro intro . meta meta meta meta meta meta'
        //   `,
        // ],
      }}
    >
      <div
        sx={{
          gridArea: "meta",
          display: "grid",
          rowGap: 7,
          columnGap: [7, 0],
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
              animate
              sx={{
                fontSize: [4, 5, 4, 5],
                color: "textDim",
                "&& > *": {
                  mb: "0.68em",
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
              animate
              delay={0.1}
              sx={{
                fontSize: [4, 5, 4, 5],
                color: "textDim",
                "&& > *": {
                  mb: "0.68em",
                  whiteSpace: "pre",
                },
              }}
            >
              {awards.map((char) => (
                <React.Fragment key={char.title}>
                  {char.title} ·{" "}
                  <Text sx={{ display: "inline", fontSize: [4, 5, 4, 5] }} variant="caps">
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
              animate
              delay={0.2}
              sx={{
                fontSize: [4, 5, 4, 5],
                color: "textDim",
                "&& > *": {
                  mb: "0.68em",
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
            maxWidth: ["40ch", "42ch", "38ch", "32ch"],
          }}
        >
          <Text
            sx={{
              fontSize: [6, 7, 8, 8],
              textWrap: "balance",
              letterSpacing: ["body", null, "lead"],
              lineHeight: ["lead"],
              mt: [0, 0, "2.4rem"],
              mb: [4, 0],
            }}
          >
            <Text variant="heading" sx={{ fontSize: [6, 7, 8, 8], display: "inline" }}>
              Sebastian Graz,
            </Text>{" "}
            <span>a reactive one-man brand studio with particular focus on lasting identities & digital design.</span>
          </Text>
        </div>
      </div>
    </m.div>
  );
};

export default Home;
