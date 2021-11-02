/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx, Link } from "theme-ui";
import { m, AnimatePresence } from "framer-motion";

export const EmailLink = ({ string }) => {
  const [copy, setCopy] = React.useState(false);
  const [count, setCount] = React.useState(0);
  return (
    <Link
      sx={{ whiteSpace: "pre" }}
      href="#"
      onClick={(e) => {
        setCount(count + 1);
        return navigator.clipboard
          .writeText(string)
          .then(function () {
            setCopy(true);
          })
          .finally(
            setTimeout(function () {
              setCopy(false);
            }, 2000)
          );
      }}
    >
      Email{" "}
      <AnimatePresence>
        {copy && (
          <m.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {count > 10 ? "very copied" : "copied"}
          </m.span>
        )}
      </AnimatePresence>
    </Link>
  );
};
