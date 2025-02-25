import { VideoComponentProps } from "@/components/Video";
import { ImageData } from "@/components/Img";

export const images = {
  heroPhone: {
    name: "hero-phone.png",
    width: 297,
    height: 681,
    alt: "Loctax Phone",
  },
  heroIllu1: {
    name: "hero-illu1.png",
    width: 240,
    height: 240,
    alt: "Illustration",
  },
  heroIllu2: {
    name: "hero-illu2.png",
    width: 252,
    height: 252,
    alt: "Illustration",
  },
  heroIllu3: {
    name: "hero-illu3.png",
    width: 126,
    height: 126,
    alt: "Illustration",
  },
  heroIcons: {
    name: "hero-icons.png",
    width: 510,
    height: 161,
    alt: "Icons",
  },
  heroAppicon: {
    name: "hero-appicon.png",
    width: 450,
    height: 401,
    alt: "App Icon",
  },
  heroColorchart: {
    name: "hero-colorchart.png",
    width: 500,
    height: 351,
    alt: "Color Chart",
  },
  heroConnect: {
    name: "hero-connect.png",
    width: 700,
    height: 432,
    alt: "Connect",
  },
  heroIconography: {
    name: "hero-iconography.png",
    width: 500,
    height: 562,
    alt: "Iconography",
  },
  styleguide: {
    name: "styleguide.png",
    width: 1200,
    height: 675,
    alt: "Styleguide",
  },
  styleguide1: {
    name: "styleguide-1.png",
    width: 1200,
    height: 675,
    alt: "Styleguide",
  },
  styleguide2: {
    name: "styleguide-2.png",
    width: 1200,
    height: 675,
    alt: "Styleguide",
  },
  styleguide3: {
    name: "styleguide-3.png",
    width: 1200,
    height: 675,
    alt: "Styleguide",
  },
  styleguide4: {
    name: "styleguide-4.png",
    width: 1200,
    height: 675,
    alt: "Styleguide",
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
