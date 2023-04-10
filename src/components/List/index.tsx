/** @jsxImportSource theme-ui */

import * as React from "react";
import { ThemeUICSSObject } from "theme-ui";
import { motion } from "framer-motion";
export const List = ({
  children,
  noBullets,
  variant,
  animate,
  ...sx
}: {
  children: React.ReactNode;
  noBullets?: boolean;
  variant?: string;
  animate?: boolean;
  sx?: ThemeUICSSObject;
}) => {
  return (
    <motion.ul
      {...sx}
      sx={{ p: 0 }}
      variants={animate ? staggerParent : {}}
      initial="hidden"
      whileInView="visible"
    >
      {React.Children.map(children || null, (child, i) => {
        return (
          <motion.li
            variants={animate ? staggerChildren : {}}
            key={i}
            sx={{
              mb: [2],
              "&:last-child": {
                mb: 0,
              },
              listStyle: "none",
              ...(!noBullets && {
                "&::marker": {
                  content: `"·  "`,
                  textRendering: "geometricPrecision",
                },
              }),
            }}
          >
            {child}
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

const staggerParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.019,
    },
  },
};

const staggerChildren = {
  hidden: { opacity: 0, y: 4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] },
  },
};
