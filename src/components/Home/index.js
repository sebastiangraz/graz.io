/** @jsxRuntime classic */
/** @jsx jsx */

import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React from "react";
import { jsx, Text } from "theme-ui";
import { Logo, GridParent } from "../";

export const Home = () => {
  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    console.log(scrollY.current);
  }, [scrollY]);

  const y = useSpring(useTransform(scrollY, [0, 400], [0, -200]), {
    damping: 10,
    mass: 0.1,
  });
  return (
    <motion.div
      style={{ y }}
      sx={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        display: "flex",
        placeContent: "center",
        placeItems: "center",
      }}
    >
      <Logo sx={{ fontSize: 160, gridColumn: "span 1" }} weight={97} />
      <Text variant="body" sx={{ gridColumn: "3 /span 7" }}>
        I’m Sebastian—as a digital designer I care about our dear users, rapid
        prototyping, design systems & branding.
      </Text>
    </motion.div>
  );
};
