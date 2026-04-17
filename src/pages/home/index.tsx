/** @jsxImportSource theme-ui */

import React from "react";
import { Text } from "theme-ui";
import { Link, List, Navigation, NewBadge } from "@/components";
import { m, useScroll, useTransform, useSpring } from "framer-motion";
import { entryMeta } from "@/routes/articles";
import { getPrevPathFromExtension, isInCurrentQuarter } from "@/utils/helpers";

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

const latestArticles = [...entryMeta].sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 6);

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
        alignItems: ["center", "stretch"],
        alignContent: "space-between",
        maxWidth: "1800px",
        gridTemplateRows: "auto auto auto",
        gridTemplateColumns: ["repeat(10, 1fr)", "repeat(10, 1fr)", "repeat(12, 1fr)"],
        gridTemplateAreas: [
          //phone
          `
          '. logo logo logo . . . cta cta .'
          '. intro intro intro intro intro intro intro intro .'
          '. meta meta meta meta meta meta meta meta .'
          `,
          //tablet
          `
          '. logo logo . . . nav .  cta .'
          '. intro intro intro intro intro intro . . .'
          '. meta meta meta meta meta meta meta meta meta '
          `,
          //desktop
          `
          '. logo logo . . . nav nav  . .  cta .'
          '. intro intro intro intro intro meta meta meta meta meta meta'
          `,
          //wide
          `
          '. logo logo . . . nav nav  . .  cta .'
          '. intro intro intro intro . meta meta meta meta meta meta'
          `,
        ],
      }}
    >
      <Navigation />
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
            <Text variant="caps" mb={5}>
              Expertise
            </Text>
            <List
              animate
              sx={{
                fontSize: [4, 5, 4, 5],
                color: "textDim",
                "&& > *": {
                  mb: "0.5em",
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
            <Text variant="caps" mb={5}>
              Recognitions
            </Text>
            <List
              animate
              delay={0.1}
              sx={{
                fontSize: [4, 5, 4, 5],
                color: "textDim",
                "&& > *": {
                  mb: "0.5em",
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
            <Text variant="caps" mb={5}>
              Associations
            </Text>
            <List
              animate
              delay={0.2}
              sx={{
                fontSize: [4, 5, 4, 5],
                color: "textDim",
                "&& > *": {
                  mb: "0.5em",
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

        <div sx={{ display: ["block", "none"] }}>
          <Text variant="label" mb={5}>
            <Text variant="caps" mb={5}>
              <Link to="/articles">Articles</Link>
            </Text>
            <List
              animate
              delay={0.3}
              sx={{
                fontSize: [4, 5, 4, 5],
                color: "textDim",
                "&& > *": {
                  mb: "0.5em",
                },
              }}
            >
              {latestArticles.map(({ title, short, id, path, date }, index) => {
                const slug = getPrevPathFromExtension(path);
                const isNew = index === 0 && date.getTime() > 0 && isInCurrentQuarter(date);
                return (
                  <div key={id} sx={{ display: "flex", alignItems: "baseline", gap: "0.6em", overflow: "hidden" }}>
                    <Link
                      to={`/articles/${slug}`}
                      sx={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "0.6em",
                        overflow: "hidden",
                      }}
                    >
                      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {short ?? title}
                      </span>
                    </Link>
                    {isNew && <NewBadge />}
                  </div>
                );
              })}
              <Link to="/articles">All Articles</Link>
            </List>
          </Text>
        </div>
      </div>
      <div sx={{ gridArea: "intro" }}>
        <div
          sx={{
            maxWidth: ["40ch", "42ch", "38ch", "34ch"],
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
