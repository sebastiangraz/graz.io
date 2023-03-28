/** @jsxImportSource theme-ui */

import React from "react";
import { useViewportScroll } from "framer-motion";
import { Text } from "theme-ui";
import { Logo } from "..";

export const handleClick = () => {
  [...document.querySelectorAll(".caseContent")].map((e) => {
    return Object.assign(e.style, {
      transition: "none",
      opacity: 0,
    });
  });

  window.scrollTo(0, 0);
  window.history.replaceState(null, null, " ");
  setTimeout(() => {
    [...document.querySelectorAll(".caseContent")].map((e) => {
      return Object.assign(e.style, {
        transition: "opacity 0.1s linear",
        opacity: 1,
      });
    });
  }, 1000);
};

export const ScrollToTop = () => {
  const { scrollY } = useViewportScroll();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    scrollY.onChange((e) => {
      e > window.innerHeight ? setShow(true) : setShow(false);
    });
  }, [scrollY]);

  return (
    <div
      sx={{
        pointerEvents: "none",
        maxWidth: "2400px",
        margin: "0 auto",
        display: "grid",
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 11,
        width: "100%",
        height: "200px",
        mixBlendMode: ["difference", null, "unset"],
        gridTemplateColumns: [
          "repeat(10, 1fr)",
          "repeat(10, 1fr)",
          "repeat(12, 1fr)",
          "repeat(12, 1fr)",
        ],
      }}
    >
      <div
        onClick={handleClick}
        sx={{
          opacity: show ? 1 : 0,
          pointerEvents: show ? "all" : "none",
          gridColumn: ["1 / span 1", "1 / span 1"],
          transition: "all 0.9s ease",
          color: ["#fff", null, "text"],
          position: "absolute",
          left: ["8px", "calc(50% - 24px)"],
          bottom: "calc(2.5vw)",
          width: 8,
          height: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          "&:hover": {
            ".innerText": {
              opacity: 1,
              transform: "translateY(-32px)",
            },
            ".logo": {
              fontVariationSettings: `"wght" 86`,
              opacity: 1,
            },
            cursor: "pointer",
          },
        }}
      >
        <Text
          className="innerText"
          variant="label"
          sx={{
            userSelect: "none",
            transform: "translateY(-34px)",
            transition: "all 0.6s ease",
            opacity: 0,
            position: "absolute",
          }}
          m={0}
        >
          <Text m={0} variant="caps">
            Home
          </Text>
        </Text>
        <Logo
          sx={{
            fontVariationSettings: `"wght" 50`,
            gridArea: "logo",
            fontSize: 9,
            display: "grid",
            "& > .logo": { transition: "all 0.6s ease", minWidth: 0 },
          }}
        />
      </div>
    </div>
  );
};
