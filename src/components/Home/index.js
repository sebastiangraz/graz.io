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

  const y = useSpring(useTransform(scrollY, [0, 400], [0, -40]), {
    damping: 20,
  });
  return (
    <motion.div style={{ y: y }}>
      <GridParent>
        <Logo sx={{ fontSize: 160 }} />
        <Text variant="body">
          I’m Sebastian—as a digital designer I care about our dear users, rapid
          prototyping, design systems & brand identities.
        </Text>
      </GridParent>
    </motion.div>
  );
};
