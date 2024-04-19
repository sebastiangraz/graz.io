/** @jsxImportSource theme-ui */

import { Text, Box, Link } from "theme-ui";
import { NumberedList, EmailLink, GridParent } from "@/components";
import { handleClick } from "@/components/ScrollToTop";

import resume from "@/assets/cv-sebastiangraz.pdf";

const End = () => {
  const Sections = {
    Define: () => {
      return (
        <GridParent>
          <Box
            sx={{
              width: "100%",
              m: 0,
              justifyContent: "space-between",
              display: ["block", "grid"],
              gridTemplateColumns: "repeat(8, 1fr)",
              gridAutoFlow: "column",
              gridTemplateRows: ["auto auto"],
              mb: 9,
              rowGap: 7,
              columnGap: 9,
              gridColumn: ["2/span 8", "2/ span 8"],
            }}
          >
            <Box
              sx={{
                mb: [8, 0],
                gridColumn: "span 4",
              }}
            >
              <Text variant="heading" sx={{ textWrap: "balance" }}>
                This is the end, for you my friend.
              </Text>
            </Box>
            <Box
              sx={{
                gridColumn: "span 4",
              }}
            >
              <NumberedList
                sx={{
                  m: 0,
                  "--caseBackground": "#fff",
                  color: "var(--caseForegroundDim)",
                }}
                horizontal
                small
              >
                <>
                  Send me an <EmailLink string="hi@graz.io">email</EmailLink>
                </>
                <>
                  View my{" "}
                  <Link target="_blank" href={resume} rel="noopener">
                    résumé
                  </Link>
                </>
                <>
                  Follow me on{" "}
                  <Link target="_blank" href="https://twitter.com/grazsebastian" rel="noopener">
                    Twitter
                  </Link>
                </>
                <>
                  Scroll up{" "}
                  <span
                    sx={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      "&:hover": { textDecoration: "none" },
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick();
                    }}
                  >
                    home
                  </span>
                </>
              </NumberedList>
            </Box>
          </Box>
        </GridParent>
      );
    },
  };
  return (
    <>
      {Object.entries(Sections).map(([k, Section]) => (
        <Section key={k} />
      ))}
    </>
  );
};

export default End;
