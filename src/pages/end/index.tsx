/** @jsxImportSource theme-ui */

import { Text, Box, Link } from "theme-ui";
import { NumberedList, TypographyBlock, EmailLink } from "../../components";
import { handleClick } from "../../components/ScrollToTop";

import resume from "/cv-sebastiangraz.pdf";

const End = ({}) => {
  const Sections = {
    Define: () => {
      return (
        <TypographyBlock sx={{ m: 0 }}>
          <Box mb={[8, 0]} sx={{ maxWidth: [172, 172, 300] }}>
            <Text sx={{ display: "inline" }} variant="lead">
              <Text
                variant="caps"
                sx={{
                  display: "inline",
                }}
              >
                This is the end.{" "}
              </Text>
              Not a whole lot you can do down here.
            </Text>
          </Box>
          <Box>
            <Text variant="caps" mb={6}>
              You can nevertheless
            </Text>
            <NumberedList
              sx={{
                m: 0,
                "--caseBackground": "#000",
                "--caseForeground": "inherit",
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
                <Link
                  target="_blank"
                  href="https://twitter.com/grazsebastian"
                  rel="noopener"
                >
                  Twitter
                </Link>
              </>
              <>
                Scroll up{" "}
                <Link
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick();
                  }}
                >
                  home
                </Link>
              </>
            </NumberedList>
          </Box>
        </TypographyBlock>
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
