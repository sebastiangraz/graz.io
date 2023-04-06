/** @jsxImportSource theme-ui */

import React from "react";
import uuid from "react-uuid";
import { useResponsiveValue } from "@theme-ui/match-media";
const ignoreUpdatedProps = () => true;

export const CaseHero = React.memo(({ name }: { name: string }) => {
  name ||= "case";

  const id = uuid();
  const caseHeroHeight = useResponsiveValue([180, 300]);

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
        top: 0,
        textTransform: "uppercase",
        fontWeight: 600,
        height: caseHeroHeight,
        letterSpacing: "-0.075em",
        fontSize: "min(12vw, 156px)",
        // borderRadius: "32px 32px 0 0",
        color: `var(--caseBackground)`,
      }}
      height={caseHeroHeight}
      width="100%"
      viewBox={`0 0 2000 ${caseHeroHeight}`}
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
            <text dominantBaseline="hanging">{name}</text>
          </g>
        </mask>
      </defs>

      <g
        fill="var(--caseBackground)"
        sx={{
          display: ["block", null, "none"],
          ...(name === "the end" && {
            display: ["none"],
          }),
          transform: [
            `translate(min(172px, calc(12vw - 5px) ), min(100px, 12vw))`,
            `translate(min(172px, calc(8vw - 5px) ), min(100px, 6vw))`,
          ],
        }}
      >
        <text
          dominantBaseline="hanging"
          style={{ fill: "var(--caseForeground)" }}
        >
          {name}
        </text>
      </g>

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
