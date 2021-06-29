/** @jsxImportSource theme-ui */

import React from "react";
import uuid from "react-uuid";

const ignoreUpdatedProps = () => true;

export const CaseHero = React.memo((props, { id = uuid() }) => {
  const { name, debug } = props;
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    document.fonts.ready.then(function () {
      setLoaded(true);
    });
  }, []);
  return (
    <svg
      sx={{
        display: ["none", "block"],
        position: "absolute",
        top: 0,
        ...(debug && {
          opacity: 0.4,
        }),
        textTransform: "uppercase",
        fontWeight: 600,
        height: 300,
        letterSpacing: "-0.075em",
        fontSize: "min(12vw, 160px)",
        color: `var(--caseBg)`,
      }}
      height="300"
      width="100%"
      viewBox="0 0 2000 300"
      preserveAspectRatio="xMinYMax slice"
    >
      <defs>
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
            <rect width="20" height="10" rx="5" fill="black" />
          </svg>
          <g
            style={{
              transform: `translate(min(190px, calc(8vw - 5px)), min(100px, 6vw))`,
            }}
          >
            <text dominantBaseline="hanging">
              {/* hack: using zero-width space to render the correct font */}
              {loaded ? name : "​"}
            </text>
          </g>
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
