import { VideoComponentProps } from "@/components/Video";
import { ImageData } from "@/components/Img";

export const videos = {
  loupeMesh: {
    url: "loupeMesh.mp4",
    width: 1080,
    height: 1080,
    alt: "loupeMesh",
  },
  mesh: {
    url: "mesh.mp4",
    width: 1080,
    height: 1080,
    alt: "mesh",
  },
  mesh1: {
    url: "mesh1.mp4",
    width: 1152,
    height: 1152,
    alt: "mesh1",
  },
  muziekclip: {
    url: "muziekclip.mp4",
    width: 2646,
    height: 1080,
    alt: "muziekclip",
  },
  icons: {
    url: "icons.mp4",
    width: 1080,
    height: 1080,
    alt: "icons",
  },
  overview: {
    url: "overview.mp4",
    width: 1168,
    height: 620,
    alt: "cover",
  },
} as { [key: string]: VideoComponentProps["src"] };

export const images = {
  hero2020: {
    name: "hero-2020.png",
    width: 464,
    height: 219,
    alt: "2020",
  },
  heroDoublecap: {
    name: "hero-doublecap.png",
    width: 140,
    height: 140,
    alt: "doublecap",
  },
  heroIcons: {
    name: "hero-icons.png",
    width: 244,
    height: 244,
    alt: "icons",
  },
  heroLogo: {
    name: "hero-logo.png",
    width: 140,
    height: 140,
    alt: "logo",
  },
  heroOrbs: {
    name: "hero-orbs.png",
    width: 680,
    height: 128,
    alt: "orbs",
  },
  heroSwitch: {
    name: "hero-switch.png",
    width: 228,
    height: 86,
    alt: "switch",
  },
  heroTablet: {
    name: "hero-tablet.png",
    width: 375,
    height: 661,
    alt: "tablet",
  },
  heroTicket: {
    name: "hero-ticket.png",
    width: 287,
    height: 453,
    alt: "ticket",
  },
  heroWatch: {
    name: "hero-watch.png",
    width: 192,
    height: 222,
    alt: "watch",
  },
  loupeWeb1: {
    name: "loupe-web-1.png",
    width: 1200,
    height: 720,
    alt: "Homepage",
  },
  loupeWeb2: {
    name: "loupe-web-2.png",
    width: 1200,
    height: 720,
    alt: "Tickets",
  },
  loupeWeb3: {
    name: "loupe-web-3.png",
    width: 1200,
    height: 720,
    alt: "FAQ",
  },
  loupeWeb4: {
    name: "loupe-web-4.png",
    width: 1200,
    height: 720,
    alt: "Venue",
  },
} as { [key: string]: ImageData };
