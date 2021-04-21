/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx } from "theme-ui";
import uuid from "react-uuid";

const ignoreUpdatedProps = () => true;

export const CaseHero = React.memo(({ bg, id = uuid(), children }) => {
  return (
    <svg
      sx={{
        position: "absolute",
        top: -299,
        textTransform: "uppercase",
        fontWeight: 600,
        width: "100%",
        height: 300,
        letterSpacing: "-0.075em",
        fontSize: "min(12vw, 140px)",
        color: bg,
      }}
      height="300"
      width="100%"
      preserveAspectRatio="xMinYMin meet"
    >
      <defs>
        <mask id={`${"sample-" + id}`}>
          <rect width="100vw" height="100%" fill="white"></rect>

          <text
            dominantBaseline="hanging"
            transform={`translate(${100 - 4} ${100 - 7})`}
          >
            {children}
          </text>
        </mask>
      </defs>
      <rect
        fillRule="evenodd"
        mask={`url(#${"sample-" + id})`}
        width="100%"
        height="100%"
        fill="currentColor"
      ></rect>
    </svg>
  );
}, ignoreUpdatedProps);
