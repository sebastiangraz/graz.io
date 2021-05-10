/** @jsxRuntime classic */
/** @jsx jsx */
import { Text, jsx } from "theme-ui";
import * as React from "react";

export const List = ({ children, noBullets }) => {
  return (
    <ul sx={{ padding: 0, listStyle: "none" }}>
      {React.Children.map(children || null, (child, i) => {
        return (
          <li
            key={i}
            sx={{
              mb: 1,
              position: "relative",
              ...(!noBullets && {
                "&:before": {
                  content: `""`,
                  left: "-1em",
                  top: "0.8em",
                  position: "absolute",
                  borderRadius: "50%",
                  width: "3px",
                  height: "3px",
                  bg: "currentColor",
                },
              }),
            }}
          >
            <Text>{child}</Text>
          </li>
        );
      })}
    </ul>
  );
};
