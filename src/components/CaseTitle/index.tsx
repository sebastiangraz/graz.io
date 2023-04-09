/** @jsxImportSource theme-ui */

import React, { useEffect } from "react";
import uuid from "react-uuid";
import { useResponsiveValue } from "@theme-ui/match-media";
import { PropMap, propMap } from "../App";
const ignoreUpdatedProps = () => true;

const findLongestName = (cases: string[]) => {
  let longestName = "";
  cases.forEach((caseName) => {
    if (caseName.length > longestName.length) {
      longestName = caseName;
    }
  });
  return longestName;
};

export const CaseTitle = React.memo(({ name }: { name: string }) => {
  const allCaseNames = Object.keys(propMap());

  name ||= "case";

  const id = uuid();
  const [fontsize, setFontsize] = React.useState(0);
  const caseHeroHeight = useResponsiveValue([180, 300]);
  const svgRef = React.useRef<SVGSVGElement>(null);

  useEffect(() => {
    const resizeHandler = () => {
      const svgParentWidth = svgRef.current?.getBBox().width || 0;
      const fontSize = Math.min(
        svgParentWidth / (findLongestName(allCaseNames).length * 0.88)
      );
      setFontsize(fontSize);
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler, false);

    return () => {
      window.removeEventListener("resize", resizeHandler, false);
    };
  }, [name]);

  return (
    <svg
      sx={{
        position: "absolute",
        top: 0,
        textTransform: "uppercase",
        fontWeight: 600,
        height: caseHeroHeight,
        letterSpacing: "-0.075em",
        fontSize: `${fontsize}px`,
        color: `var(--caseBackground)`,
      }}
      height={caseHeroHeight}
      width="100%"
      preserveAspectRatio="xMinYMin slice"
      ref={svgRef}
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

          <text x="8.8%" y="30%" textAnchor="start" dominantBaseline="hanging">
            {name}
          </text>
        </mask>
      </defs>

      <g
        fill="var(--caseBackground)"
        sx={{
          display: ["block", null, "none"],
        }}
      >
        <text
          x="8.8%"
          y="30%"
          dominantBaseline="hanging"
          style={{ fill: "var(--caseForeground)" }}
        >
          {name}
        </text>
      </g>
      <foreignObject width="100%" height="90%">
        <div
          //@ts-ignore
          xmlns={"http://www.w3.org/1999/xhtml"}
          sx={{
            contain: "strict",
            width: "100%",
            height: "100%",
            backdropFilter: "blur(12px)",
            display: ["none", null, "block"],
          }}
        ></div>
      </foreignObject>

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
