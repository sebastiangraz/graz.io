/** @jsxImportSource theme-ui */

import React from "react";
import { useScroll } from "framer-motion";
import { Text } from "theme-ui";
import { Logo } from "..";

type ScrollToTopProps = {
  clearURL?: boolean;
};

export const ScrollToTop = ({ clearURL = false }: ScrollToTopProps) => {
  const { scrollY } = useScroll();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    scrollY.on("change", (e) => {
      e > window.innerHeight ? setShow(true) : setShow(false);
    });
  }, [scrollY]);

  return (
    <div
      sx={{
        pointerEvents: "none",
        maxWidth: "1800px",
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
        gridTemplateColumns: ["repeat(10, 1fr)", "repeat(10, 1fr)", "repeat(12, 1fr)", "repeat(12, 1fr)"],
      }}
    >
      <div
        onClick={() => handleClick(clearURL)}
        sx={{
          opacity: show ? 1 : 0,
          pointerEvents: show ? "all" : "none",
          gridColumn: ["1 / span 1", "1 / span 1"],
          transition: "all 0.9s ease",
          color: ["#fff", null, "text"],
          position: "absolute",
          left: ["8px", "calc(50% - 28px)"],
          bottom: "calc(2.5vw)",
          width: 9,
          height: 9,
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
            Up
          </Text>
        </Text>
        <Logo
          sx={{
            fontVariationSettings: `"wght" 50`,
            gridArea: "logo",
            fontSize: 10,
            display: "grid",
            "& > .logo": { transition: "all 0.6s ease", minWidth: 0 },
          }}
        />
      </div>
    </div>
  );
};

const handleClick = (clearURL: boolean) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  if (clearURL) {
    window.history.pushState("", "", "/");
  }
};
