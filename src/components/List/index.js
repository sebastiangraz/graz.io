/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import styles from "./list.module.scss";
import * as React from "react";

export const List = ({ children, noBullets, numbered }) => {
  return (
    <ul
      className={`
				${
          noBullets
            ? styles.listSansBullets
            : numbered
            ? styles.NumberedListBullets
            : styles.listBullets
        }
				`}
    >
      {React.Children.map(children || null, (child, i) => {
        return (
          <li
            key={i}
            sx={{
              position: "relative",
              paddingLeft: !noBullets && [numbered ? 4 : 3, 0],
              "&:before": {
                color: "text",
                content: noBullets ? "none" : '""',
                left: [0, numbered ? "-2rem" : "-1.2rem"],
                top: ["0.8em"],
                borderRadius: "50%",
                width: "3px",
                height: "3px",
                bg: " currentColor",
              },
            }}
          >
            {child}
          </li>
        );
      })}
    </ul>
  );
};
