/** @jsxImportSource theme-ui */
import { useEffect, useState, useRef } from "react";

const PLAYING_DEBOUNCE_TIME = 50;
const WAITING_DEBOUNCE_TIME = 200;

export const Video = ({ videoData, ...props }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const isWaitingTimeout = useRef(null);
  const isPlayingTimeout = useRef(null);

  const videoElementRef = useRef();

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

    const element = videoElementRef.current;

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
    <div
      sx={{
        transition: "opacity 1s ease",
        paddingBottom: `calc(${videoData.height} / ${videoData.width} * 100%)`,
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
      onClick={handlePlayPauseClick}
    >
      {!isPlaying && (
        <div
          sx={{
            position: "absolute",
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
              background: "var(--caseBg)",
              "svg path": {
                fill: "currentColor",
              },
            },
          }}
          className="play"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11">
            <path d="M 0 0 L 0 11 L 11 5.5 Z" fill="var(--caseBg)"></path>
          </svg>
        </div>
      )}
      <video
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          transition: "opacity .4s ease",
          opacity: isPlaying ? 1 : 0.88,
          height: "100%",
          width: "100%",
          objectFit: videoData.fit ? videoData.fit : "contain",
        }}
        loop
        playsInline
        autoPlay={true}
        muted
        {...props}
        ref={videoElementRef}
        src={videoData.url.default}
      />
    </div>
  );
};
