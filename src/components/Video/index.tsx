/** @jsxImportSource theme-ui */
import { useEffect, useState, useRef } from "react";
import React from "react";
import { ThemeUICSSObject } from "theme-ui";

interface VideoComponentProps {
  src: {
    url: string;
    width: number;
    height: number;
  };
  fromFolder: string;
  sx?: ThemeUICSSObject;
}

const getVideoUrl = (file: string) => {
  const url = new URL(file, import.meta.url).href;
  return url;
};

const VideoComponent = ({ ...props }: VideoComponentProps) => {
  if (!props.src) return null;
  const { src, fromFolder, ...sx } = props;

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

  return (
    <div {...sx} sx={{ display: "grid" }} onClick={handlePlayPauseClick}>
      {!isPlaying && (
        <div
          sx={{
            opacity: isWaiting ? 0 : 1,
            position: "relative",
            gridArea: "1/1",
            zIndex: 1,
            left: "calc(50% - 28px)",
            top: "calc(50% - 28px)",
            background: "currentColor",
            width: 56,
            height: 56,
            borderRadius: "pill",
            userSelect: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            svg: {
              position: "relative",
              left: "1px",
            },

            "&:hover": {
              cursor: "pointer",
              background: "var(--caseBackground)",
              "svg path": {
                fill: "currentColor",
              },
            },
          }}
          className="play"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11">
            <path
              d="M 0 0 L 0 11 L 11 5.5 Z"
              fill="var(--caseBackground)"
            ></path>
          </svg>
        </div>
      )}
      <video
        sx={{
          gridArea: "1/1",
          aspectRatio: `${src.width}/${src.height}`,
          opacity: isPlaying ? 1 : 0.88,
          height: "100%",
          width: "100%",
          objectFit: "cover",
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
