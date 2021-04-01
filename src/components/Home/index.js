/** @jsxRuntime classic */
/** @jsx jsx */

import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React from "react";
import { jsx } from "theme-ui";
import { Logo } from "../Logo";

export const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  React.useEffect(() => {
    console.log(scrollYProgress.current);
  }, [scrollYProgress]);

  const slowScroll = useSpring(useTransform(scrollYProgress, [0, 1], [0, 50]), {
    damping: 10,
    mass: 0.1,
  });

  return (
    <motion.div style={{ y: slowScroll }}>
      <Logo sx={{ zIndex: 30, position: "fixed", top: 0, fontSize: 160 }} />
    </motion.div>
  );
};
