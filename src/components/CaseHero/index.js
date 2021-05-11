/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx } from "theme-ui";
import uuid from "react-uuid";

const ignoreUpdatedProps = () => true;

export const CaseHero = React.memo(({ bg, id = uuid(), children }) => {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    document.fonts.ready.then(function () {
      setLoaded(true);
    });
  }, []);
  return (
    <svg
      sx={{
        position: "absolute",
        // top: 0,
        top: -300,
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
        {console.log("render CaseHero :(")}
        <mask id={`${"sample-" + id}`}>
          <rect width="100%" height="100%" fill="white"></rect>
          <svg
            width="32"
            height="16"
            x="24"
            y="24"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="16" rx="8" fill="black" />
          </svg>

          <text
            dominantBaseline="hanging"
            transform={`translate(${100 - 4} ${100 - 7})`}
          >
            {/* hack: using zero-width space to render the correct font */}
            {loaded ? children : "​"}
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
