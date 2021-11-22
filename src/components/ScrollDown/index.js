/** @jsxImportSource theme-ui */

import React from "react";
import { cases } from "../App";
import { darken } from "@theme-ui/color";
import { keyframes } from "@emotion/react";

const arrow = keyframes`
    0%   { opacity: 0; transform: translateY(-8px);  }
    50%   { opacity: 1; transform: translateY(0px); }
    100%  { opacity: 0; transform: translateY(8px); }
    `;

export const ScrollDown = ({
  staggeredOffset,
  settings,
  height,
  gridPosition,
  position,
}) => {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(true);
    window.scrollTo(
      0,
      position(0) -
        height(0) -
        (0 && settings.nextScrollDistance) +
        staggeredOffset
    );
  };

  return (
    <div
      onClick={handleClick}
      style={{ opacity: clicked ? 0 : 1 }}
      sx={{
        gridColumn: [
          "2 / span 1",
          "2 / span 1",
          `${gridPosition(0) === "1" ? "2" : gridPosition(0)} / span 1`,
          `${gridPosition(1) === "1" ? "2" : gridPosition(1)} / span 1`,
        ],
        transition: "all 0.9s ease",
        color: cases.get("home").color,
        backgroundColor: darken(cases.get("home").bg, 0.05),
        position: "absolute",
        zIndex: 10,
        left: 0,
        top: staggeredOffset - 120,
        width: 8,
        height: 8,
        display: ["none", "flex"],
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "pill",
        pointerEvents: "all",
        "&:hover": {
          cursor: "pointer",
          background: darken(cases.get("home").bg, 0.1),
        },
        svg: {
          position: "absolute",
          animationName: `${arrow}`,
          animationDuration: "4s",
          animationFillMode: "backwards",
          animationIterationCount: "infinite",
          animationTimingFunction: "cubic-bezier(.1, 0.82, 0.165, 1)",
        },
      }}
    >
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 4L5 8L9 4" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        sx={{ animationDelay: "2s" }}
      >
        <path d="M1 4L5 8L9 4" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );
};
