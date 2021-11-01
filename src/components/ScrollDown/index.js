/** @jsxImportSource theme-ui */

import React from "react";
import { cases } from "../App";
import { lighten } from "@theme-ui/color";
import { keyframes } from "@emotion/react";

const arrow = keyframes`
    0%   { opacity: 0; transform: translateY(-8px);  }
    50%   { opacity: 1; transform: translateY(0px); }
    100%  { opacity: 0; transform: translateY(8px); }
    `;

export const ScrollDown = () => {
  return (
    <div
      sx={{
        gridColumn: "2 / span 1",
        transition: "opacity 0.9s ease",
        color: cases.get("home").bg,
        backgroundColor: cases.get("home").color,
        position: "absolute",
        left: 0,
        top: ["-100px", "-200px", "-240px"],
        width: 8,
        height: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "pill",
        svg: {
          position: "absolute",
          animationName: `${arrow}`,
          animationDuration: "3s",
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
    </div>
  );
};
