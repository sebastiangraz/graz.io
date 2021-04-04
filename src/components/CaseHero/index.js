/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx } from "theme-ui";
import uuid from "react-uuid";

const ignoreUpdatedProps = () => true;

export const CaseHero = React.memo(({ text, id = uuid(), ...rest }) => {
  return (
    <svg {...rest} height="300" preserveAspectRatio="xMinYMin meet">
      <defs>
        <mask id={`${"sample-" + id}`}>
          <rect width="100%" height="100%" fill="white"></rect>

          <text
            dominantBaseline="hanging"
            transform={`translate(${120 - 4} ${120 - 7})`}
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
}, ignoreUpdatedProps);
