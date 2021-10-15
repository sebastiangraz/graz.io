/** @jsxImportSource theme-ui */

import { useRef, useEffect } from "react";
import * as React from "react";
import { useInView } from "react-intersection-observer";
import { m, useReducedMotion } from "framer-motion";

export const Video = ({ videoData, ...rest }) => {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  // const [inViewRef, inView] = useInView({ rootMargin: "-100px 0px" });
  const [loaded, setLoaded] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);

  async function Play() {
    ref.current.previousSibling.classList.add("isPlaying");
    try {
      setIsPlaying(true);
      await ref.current.play();
    } catch (err) {}
  }

  async function Pause() {
    ref.current.previousSibling.classList.remove("isPlaying");
    try {
      setIsPlaying(false);
      await ref.current.pause();
    } catch (err) {}
  }

  // useEffect(() => {
  //   if (inView) {
  //     shouldReduceMotion ? Pause() : Play();
  //   } else {
  //     shouldReduceMotion ? Play() : Pause();
  //   }
  //   ref.current.setAttribute("muted", "");
  // }, [ref, inView, inViewRef, shouldReduceMotion]);

  // const setRefs = React.useCallback(
  //   (node) => {
  //     // Ref's from useRef needs to have the node assigned to `current`
  //     ref.current = node;
  //     // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
  //     inViewRef(node);
  //   },
  //   [inViewRef]
  // );

  return (
    <div
      {...rest}
      onClick={isPlaying ? Pause : Play}
      sx={{
        transition: "opacity 1s ease",
        opacity: loaded ? 1 : 0,
        paddingBottom: `calc(${videoData.height} / ${videoData.width} * 100%)`,
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    >
      <div
        sx={{
          position: "absolute",
          zIndex: 1,
          left: "calc(50% - 24px)",
          top: "calc(50% - 24px)",
          background: "currentColor",
          width: 48,
          userSelect: "none",
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          visibility: "visible",
          "&.isPlaying": {
            visibility: "hidden",
          },
        }}
        className="play"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11">
          <path d="M 0 0 L 0 11 L 11 5.5 Z" fill="var(--caseBg)"></path>
        </svg>
      </div>
      <m.video
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          objectFit: videoData.fit ? videoData.fit : "contain",
        }}
        src={videoData.url.default}
        // ref={setRefs}
        loop
        onLoadedData={() => setLoaded(true)}
        playsInline
        autoPlay={true}
        muted
      />
    </div>
  );
};
