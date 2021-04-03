/** @jsxRuntime classic */
/** @jsx jsx */

import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React from "react";
import { jsx, Text, Grid } from "theme-ui";
import { Logo } from "../";

export const Home = () => {
  // const { scrollY } = useViewportScroll();
  // React.useEffect(() => {
  //   console.log(scrollY.current);
  // }, [scrollY]);

  // const y = useSpring(useTransform(scrollY, [0, 400], [0, -200]), {
  //   damping: 10,
  //   mass: 0.1,
  // });
  return (
    <motion.div
      sx={{
        // position: "fixed",
        height: "100vh",
        width: "100%",
        display: "flex",
        placeContent: "center",
        placeItems: "center",
      }}
    >
      <Grid variant="hero">
        <Logo
          sx={{
            lineHeight: 0.8,
            fontSize: 32,
            transition: `.5s cubic-bezier(1,0,0,1) opacity, 1s cubic-bezier(1,0,0,1) transform`,
            transform: false
              ? ["scale(1)", "scale(1)", "scale(0.8)"]
              : "scale(1)",
          }}
          weight={60}
        />
        <Text
          variant="body"
          sx={{
            marginBottom: [4, 0],
            width: ["min(100%, 360px)", 460, 690, 820],
          }}
        >
          I’m Sebastian—as a digital designer I care about our dear users, rapid
          prototyping, design systems & branding
        </Text>
      </Grid>
    </motion.div>
  );
};
