/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";

export const CaseHero = ({ offset, text, id = Date.now(), ...rest }) => (
  <svg {...rest} height="300" preserveAspectRatio="xMinYMin meet">
    <defs>
      <mask id={`${"sample-" + id}`}>
        <rect width="100%" height="100%" fill="white"></rect>
        <text y="140" transform={`translate(${offset - 8}, ${offset - 8})`}>
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
