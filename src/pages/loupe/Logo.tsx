/** @jsxImportSource theme-ui */

import { m } from "framer-motion";

export function Logo() {
  const list = {
    visible: {
      transition: {
        type: "tween",
      },
    },
    hidden: {
      transition: {
        type: "tween",
      },
    },
  };

  const item = {
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.4, ease: [0.83, 0, 0.17, 1], delay: 0.3 },
    },
    hidden: { pathLength: 0.75, opacity: 0 },
  };

  const itemSansPath = {
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.4, ease: [0.83, 0, 0.17, 1] },
    },
    hidden: { pathLength: 1, opacity: 0 },
  };

  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 280 280"
      variants={list}
      whileInView="visible"
      sx={{ height: "auto", width: "100%" }}
    >
      <m.path
        variants={item}
        initial={{ opacity: 0, pathLength: 0 }}
        fill="var(--caseForeground)"
        d="M212 48a20 20 0 00-20 20v20h20a20 20 0 000-40z"
      ></m.path>
      <m.path
        variants={itemSansPath}
        initial={{ opacity: 0, pathLength: 0 }}
        stroke="var(--caseForeground)"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M212,16 C198.209,16 184.982,21.4786 175.23,31.2304 C165.479,40.9823 160,54.2087 160,68 L160,120 L212,120 C218.829,120 225.591,118.655 231.9,116.042 C238.208,113.428 243.941,109.598 248.77,104.77 C253.598,99.9409 257.429,94.2085 260.042,87.8995 C262.655,81.5906 264,74.8287 264,68 L264,68 C264,54.2087 258.521,40.9823 248.77,31.2304 C239.018,21.4786 225.791,16 212,16"
      ></m.path>
      <m.path
        variants={item}
        initial={{ opacity: 0, pathLength: 0 }}
        stroke="var(--caseForeground)"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M 112.0,0.0 L 112.0,168.0 L 280.0,168.0"
      ></m.path>
      <m.path
        variants={item}
        initial={{ opacity: 0, pathLength: 0 }}
        stroke="var(--caseForeground)"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M 64.0,0.0 L 64.0,216.0 L 280.0,216.0"
      ></m.path>

      <m.path
        variants={item}
        initial={{ opacity: 0, pathLength: 0 }}
        stroke="var(--caseForeground)"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M16 0v264h264"
      ></m.path>
    </m.svg>
  );
}
