import { Video } from "@/components";
import { VideoComponentProps } from "@/components/Video";
import { ImageData } from "@/components/Img";

export const images = {
  web0: {
    name: "web-0.png",
    width: 1200,
    height: 720,
    alt: "Web 0",
  },
} as { [key: string]: ImageData };

export const videos = {
  brandbook: {
    url: "brandbook.mp4",
    width: 480,
    height: 480,
    alt: "Brandbook",
  },
} as { [key: string]: VideoComponentProps["src"] };
