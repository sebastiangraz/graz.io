/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx } from "theme-ui";

const ignoreUpdatedProps = () => true;

export const CaseHero = React.memo(
  ({ text, offset, id = Date.now(), ...rest }) => {
    console.log("Render CaseHero");
    return (
      <svg {...rest} height="300" preserveAspectRatio="xMinYMin meet">
        <defs>
          <mask id={`${"sample-" + id}`}>
            <rect width="100%" height="100%" fill="white"></rect>
            <text
              dominantBaseline="hanging"
              transform={`translate(${offset / 2 - 4} ${offset / 2 - 7})`}
            >
              {text}
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
  },
  ignoreUpdatedProps
);
