/** @jsxImportSource theme-ui */

import { useRef, useEffect } from "react";
import * as React from "react";
import { useInView } from "react-intersection-observer";

export const Video = ({ videoData, ...rest }) => {
  // const ref = useRef(null);
  // const [inViewRef, inView] = useInView({ rootMargin: "-100px 0px" });

  // const handlePlay = () => {
  //   return console.log("play");
  // };

  // useEffect(() => {
  //   if (inView) {
  //     ref.current.play();
  //   } else {
  //     ref.current.pause();
  //   }
  //   ref.current.setAttribute("muted", "");
  // }, [inView]);

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
      // {...rest}
      // onClick={handlePlay}
      sx={{
        paddingBottom: `calc(${videoData.height} / ${videoData.width} * 100%)`,
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    >
      {/* <div
        sx={{
          position: "absolute",
          zIndex: 1,
          left: "calc(50% - 24px)",
          top: "calc(50% - 24px)",
          backgroundColor: "#fff",
          color: "text",
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
          <path d="M 0 0 L 0 11 L 11 5.5 Z" fill="currentColor"></path>
        </svg>
      </div>
      <video
        rel="preload"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          objectFit: videoData.fit ? videoData.fit : "contain",
        }}
        src={videoData.url.default}
        ref={setRefs}
        loop
        playsInline
        autoPlay={true}
        muted
      /> */}
    </div>
  );
};
