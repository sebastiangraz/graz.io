/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { jsx, Link } from "theme-ui";
import { m, AnimatePresence } from "framer-motion";

declare module "framer-motion" {
  export interface AnimatePresenceProps {
    children?: React.ReactNode;
  }
}

export const EmailLink = ({
  string,
  children,
}: {
  string: string;
  children: React.ReactNode;
}) => {
  const [copy, setCopy] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCount(count + 1);
    return navigator.clipboard
      .writeText(string)
      .then(function () {
        setCopy(true);
      })
      .catch(function (err) {
        console.error("Async: Could not copy text: ", err);
      })
      .then(() => {
        setTimeout(() => {
          setCopy(false);
        }, 2000);
      });
  };

  return (
    <Link href="#0" sx={{ whiteSpace: "pre" }} onClick={(e) => handleClick(e)}>
      {children}
      <AnimatePresence>
        {copy && (
          <m.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {count > 10 ? " very copied" : " copied"}
          </m.span>
        )}
      </AnimatePresence>
    </Link>
  );
};
