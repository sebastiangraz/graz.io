/** @jsxImportSource theme-ui */

import { useEffect, useState, useRef } from "react";
import React from "react";
import { AspectRatio, ThemeUICSSObject } from "theme-ui";

const VideoComponent = ({ ...props }: VideoComponentProps) => {
  const { src, fromFolder, disableClickControl = false, ...sx } = props;

  const [isPlaying, setIsPlaying] = useState(true);
  const [isWaiting, setIsWaiting] = useState(false);

  const isWaitingTimeout = useRef(null) as any;
  const isPlayingTimeout = useRef(null) as any;

  const videoElementRef = useRef() as any;

  const PLAYING_DEBOUNCE_TIME = 50;
  const WAITING_DEBOUNCE_TIME = 200;

  useEffect(() => {
    if (!videoElementRef.current) {
      return;
    }

    const waitingHandler = () => {
      clearTimeout(isWaitingTimeout.current);

      isWaitingTimeout.current = setTimeout(() => {
        setIsWaiting(true);
      }, WAITING_DEBOUNCE_TIME);
    };

    const playHandler = () => {
      clearTimeout(isWaitingTimeout.current);
      clearTimeout(isPlayingTimeout.current);

      isPlayingTimeout.current = setTimeout(() => {
        setIsPlaying(true);
        setIsWaiting(false);
      }, PLAYING_DEBOUNCE_TIME);
    };

    const pauseHandler = () => {
      clearTimeout(isWaitingTimeout.current);
      clearTimeout(isPlayingTimeout.current);

      isPlayingTimeout.current = setTimeout(() => {
        setIsPlaying(false);
        setIsWaiting(false);
      }, PLAYING_DEBOUNCE_TIME);
    };

    const element = videoElementRef.current as HTMLVideoElement;

    element.addEventListener("waiting", waitingHandler);
    element.addEventListener("play", playHandler);
    element.addEventListener("playing", playHandler);
    element.addEventListener("pause", pauseHandler);

    // clean up
    return () => {
      clearTimeout(isWaitingTimeout.current);
      clearTimeout(isPlayingTimeout.current);

      element.removeEventListener("waiting", waitingHandler);
      element.removeEventListener("play", playHandler);
      element.removeEventListener("playing", playHandler);
      element.removeEventListener("pause", pauseHandler);
    };
  }, [videoElementRef]);

  const handlePlayPauseClick = () => {
    if (videoElementRef.current) {
      if (isPlaying) {
        videoElementRef.current.pause();
      } else {
        videoElementRef.current.play();
      }
    }
  };

  if (!props.src) return null;

  return (
    <div {...sx} sx={{ display: "grid" }} onClick={disableClickControl ? undefined : handlePlayPauseClick}>
      {!isPlaying && (
        <div
          sx={{
            opacity: isWaiting ? 0 : 1,
            position: "relative",
            gridArea: "1/1",
            aspectRatio: "1",
            placeSelf: "center",
            zIndex: 1,
            background: "currentColor",
            width: "80%",
            maxWidth: 56,
            borderRadius: "pill",
            userSelect: "none",
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            svg: {
              position: "relative",
              left: "1px",
              width: "60%",
              maxWidth: "18px",
            },

            "&:hover": {
              cursor: disableClickControl ? "default" : "pointer",
              background: "var(--caseBackground)",
              "svg path": {
                fill: "currentColor",
              },
            },
          }}
          className="play"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 11 11" preserveAspectRatio="xMaxYMax slice">
            <path d="M 0 0 L 0 11 L 11 5.5 Z" fill="var(--caseBackground)"></path>
          </svg>
        </div>
      )}
      <video
        sx={{
          gridArea: "1/1",
          aspectRatio: `${src.width}/${src.height}`,
          filter: isPlaying ? "none" : "brightness(0.8) saturate(120%)",
          height: "100%",
          width: "100%",
          objectFit: "cover",
          clipPath: "inset(0 0 0 0)", // fix black borders artifact while animating parent transition
        }}
        loop
        playsInline
        autoPlay={true}
        muted
        ref={videoElementRef}
        src={`./${fromFolder}/${src.url}`}
      />
    </div>
  );
};

export const Video = React.memo(VideoComponent);

export interface VideoComponentProps {
  src: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  fromFolder: string;
  disableClickControl?: boolean;
  sx?: ThemeUICSSObject;
}
