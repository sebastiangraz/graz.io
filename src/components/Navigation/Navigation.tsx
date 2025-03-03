/** @jsxImportSource theme-ui */

import { Logo, List, EmailLink } from "@/components";
import { m } from "framer-motion";
import resume from "@/assets/cv-sebastiangraz.pdf";
import { Link as TanstackLink } from "@/components";
import { Text, Link } from "theme-ui";
import { useState } from "react";
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

export const Navigation = () => {
  const [isHover, setIsHover] = useState(false);

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
  return (
    <div className="navigation" sx={{ display: "grid", gridTemplateColumns: "subgrid", gridArea: "1 /span 12" }}>
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
          p: [2, 3],
          ml: -3,
          gridArea: "nav",
          display: ["none", "block"],
        }}
      >
        <TanstackLink to="/articles">Articles</TanstackLink>
      </Text>
      <div
        tabIndex={0}
        onMouseOver={(e: React.MouseEvent) => handleMouseEnter(e)}
        onMouseOut={(e: React.MouseEvent) => handleMouseLeave(e)}
        sx={{
          outline: "none",
          userSelect: "none",
          cursor: "pointer",
          gridArea: "cta",
          position: "relative",
          justifySelf: ["flex-end", "flex-start"],
        }}
      >
        <Text sx={{ pt: 2, p: [2, 3], ml: -3 }} variant="label">
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
              // display: ["grid", "none"],
              display: "grid",
              position: "absolute",
              gridArea: "1/1",
              content: '""',
              borderRadius: ["1em", 0],
              left: "-16px",
              top: "-16px",
              width: "100%",
              height: "100%",
              boxShadow: [`0 0 0 1px color-mix(in srgb, var(--theme-ui-colors-text), transparent 92%)`, "none"],
            },
          }}
        >
          <Text variant="label">
            <List noBullets sx={{ zIndex: 1, position: "relative" }}>
              <m.div variants={list} key={1} animate={isHover ? "show" : "rest"}>
                <EmailLink
                  string="hi@graz.io"
                  sx={{
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Email
                </EmailLink>
              </m.div>
              <m.div variants={list} key={2}>
                <Link target="_blank" href="https://twitter.com/grazsebastian" rel="noopener">
                  Twitter
                </Link>
              </m.div>
              <m.div variants={list} key={3}>
                <Link target="_blank" href={resume} rel="noopener">
                  Résumé
                </Link>
              </m.div>
              <m.hr
                variants={list}
                key={4}
                sx={{
                  height: "1px",
                  maxWidth: "100%",
                  border: "none",
                  backgroundColor: `color-mix(in srgb, var(--theme-ui-colors-text), transparent 92%)`,
                }}
              />
              <m.div variants={list} key={5}>
                <Text
                  mb={2}
                  sx={{
                    whiteSpace: "pre",
                    color: "textDim",
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
    </div>
  );
};
