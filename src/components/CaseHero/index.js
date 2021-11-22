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
      style={{
        position: "absolute",
        top: 0,
        ...(debug && {
          opacity: 0.4,
        }),
        textTransform: "uppercase",
        fontWeight: 600,
        height: 300,
        letterSpacing: "-0.075em",
        fontSize: "min(12vw, 156px)",
        borderRadius: "32px 32px 0 0",
        color: `var(--caseBg)`,
      }}
      height="300"
      width="100%"
      viewBox="0 0 2000 300"
      preserveAspectRatio="xMinYMin slice"
    >
      <defs>
        <mask id={`${"sample-" + id}`}>
          <rect width="100%" height="100%" fill="white"></rect>
          <svg
            width="8"
            height="8"
            x="20"
            y="20"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="8" height="8" rx="8" fill="black" />
          </svg>
          <g
            sx={{
              transform: [
                `translate(min(172px, calc(12vw - 5px) ), min(100px, 12vw))`,
                `translate(min(172px, calc(8vw - 5px) ), min(100px, 6vw))`,
              ],
            }}
          >
            <text dominantBaseline="hanging">
              {/* hack: using zero-width space to render the correct font */}
              {loaded ? props.index + " " : "​"}
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
      <g
        sx={{
          transform: [
            `translate(min(172px, calc(12vw - 5px) ), min(100px, 12vw))`,
            `translate(min(172px, calc(8vw - 5px) ), min(100px, 6vw))`,
          ],
        }}
      >
        <text fill="var(--caseColor)" dominantBaseline="hanging">
          <tspan visibility="hidden">{props.index + " "}</tspan>
          {loaded ? name : "​"}
        </text>
      </g>
    </svg>
  );
}, ignoreUpdatedProps);
