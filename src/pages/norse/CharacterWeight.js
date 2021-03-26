/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import styles from "./characterset.module.scss";

export const CharacterWeight = ({ setSlideValue }) => {
  return (
    <input
      className={styles.slider}
      sx={{ paddingRight: [0, 4, 5, 6], width: "100%" }}
      type="range"
      id="points"
      name="points"
      min="0"
      max="100"
      onChange={(e) => {
        setSlideValue(e.target.value);
      }}
    />
  );
};

export default React.memo(CharacterWeight);
