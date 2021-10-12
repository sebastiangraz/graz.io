import * as React from "react";

export const videos = {
  intro: {
    url: require("./assets/intro.mp4"),
    width: 776,
    height: 1080,
  },
};

export const images = {
  slider1: {
    url: require("./assets/slider-1.png"),
    width: 1600,
    height: 1600,
    alt: "slider image",
  },
  slider2: {
    url: require("./assets/slider-2.png"),
    width: 1600,
    height: 1600,
    alt: "slider image",
  },
  slider3: {
    url: require("./assets/slider-3.png"),
    width: 1600,
    height: 1600,
    alt: "slider image",
  },
  layout: {
    url: require("./assets/layout.jpg"),
    webP: require("./assets/layout.webp"),
    width: 2336,
    height: 2049,
    alt: "layout",
  },
  motion: {
    url: require("./assets/motion.jpg"),
    webP: require("./assets/motion.webp"),
    width: 2336,
    height: 2049,
    alt: "motion",
  },
  producttiles: {
    url: require("./assets/producttiles.jpg"),
    webP: require("./assets/producttiles.webp"),
    width: 2336,
    height: 1957,
    alt: "motion",
  },
  accordions: {
    url: require("./assets/accordions.jpg"),
    webP: require("./assets/accordions.webp"),
    width: 2336,
    height: 2140,
    alt: "motion",
  },
  width: {
    url: require("./assets/width.jpg"),
    webP: require("./assets/width.webp"),
    width: 2336,
    height: 1957,
    alt: "motion",
  },
  homepage1: {
    url: require("./assets/homepage1.jpg"),
    webP: require("./assets/homepage1.webp"),
    width: 2336,
    height: 5353,
    alt: "motion",
  },
  homepage2: {
    url: require("./assets/homepage2.jpg"),
    webP: require("./assets/homepage2.webp"),
    width: 2336,
    height: 5802,
    alt: "motion",
  },
};

export const icons = {
  desiredOutcomes: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
    >
      <circle cx="36" cy="36" r="32.5" stroke="currentColor" strokeWidth="7" />
    </svg>
  ),
  whatWasDone: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
    >
      <circle cx="36" cy="36" r="36" fill="currentColor" />
    </svg>
  ),
  problemStatement: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 142 36">
      <circle cx="18" cy="18" r="18" fill="currentColor"></circle>
      <path fill="currentColor" d="M108 1H142V35H108z"></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M64.544 36L54 25.456V10.544L64.544 0h14.912L90 10.544v14.912L79.456 36H64.544z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  fourChallenges: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      fill="none"
      viewBox="0 0 72 72"
    >
      <circle cx="18" cy="18" r="18" fill="currentColor"></circle>
      <circle cx="54" cy="18" r="18" fill="currentColor"></circle>
      <circle cx="54" cy="54" r="18" fill="currentColor"></circle>
      <circle cx="18" cy="54" r="18" fill="currentColor"></circle>
    </svg>
  ),
  spaceScale: (
    <svg fill="none" viewBox="0 0 514 514">
      <style>
        {
          "@keyframes q11t0hxd00vhaf2y85g6s7t3_fo{0%,50%,to{fill-opacity:0}66.6667%,83.3333%{fill-opacity:1}}@keyframes ocm3s5tvuiufjb7s7w2pnhpr_fo{0%,33.3333%,to{fill-opacity:0}50%,83.3333%{fill-opacity:1}}@keyframes oye8rnk9f1dktxvk2p7ejvj5_fo{0%,16.6667%,to{fill-opacity:0}33.3333%,83.3333%{fill-opacity:1}}@keyframes q7hvenbv2mz1fpuw8uxj49id_fo{0%,to{fill-opacity:0}16.6667%,83.3333%{fill-opacity:1}}"
        }
      </style>
      <path
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        d="M249 256v-8h16v16h-8m-8-8H1m248 0h8m0 8v249m0-249v-8m0 257h256V256M257 513H1V256m0 0V1h256m0 255V1m0 255h256M257 1h256v255m-272 0v-16h32v32h-16m-32-48h64v64h-64v-64zm-32-32h128v128H193V192zm-64-64h256v256H129V128z"
      />
      <path
        d="M30 491.88c0 2.3-2.76 4.34-7.22 4.34-4 0-6.94-1.8-7.68-4.4l2.3-.96c.62 1.82 2.62 3.2 5.36 3.2 2.68 0 4.62-.86 4.62-2.34 0-1.5-1.88-2.04-4.14-2.04h-2.62v-2.16h2.58c2.26 0 3.68-.62 3.68-1.9 0-1.26-1.56-2.04-3.96-2.04-2.66 0-4.52 1.28-5.08 2.96l-2.28-.76c.72-2.38 3.3-4.36 7.44-4.36 4.02 0 6.52 1.68 6.52 4.02 0 1.46-.94 2.66-2.64 3.08 1.96.44 3.12 1.54 3.12 3.36zm.636 4.12v-2.08l6.94-3.86.59-.328.005-.003c2.184-1.209 3.485-1.929 3.485-3.529 0-1.58-1.62-2.6-3.8-2.6-2.82 0-4.72 1.6-5.12 3.88l-2.32-.64c.66-3.12 3.26-5.42 7.56-5.42 3.6 0 6.2 1.92 6.2 4.76 0 2.36-1.94 3.68-4.76 5.22l-4.32 2.36h9.42V496z"
        fill="currentColor"
        fillRule="evenodd"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both q11t0hxd00vhaf2y85g6s7t3_fo",
        }}
      />
      <path
        d="M164.782 356.62c-1.16-1.92-3.78-3.2-7.02-3.2-5.18 0-8.28 3.24-8.28 7.66 0 4.02 2.56 7.14 7.96 7.14 4.32 0 7.42-2.12 7.42-5.06 0-2.78-2.84-4.88-7.12-4.88-2.7 0-4.78.84-5.9 2.14 0-2.7 2.4-4.84 5.82-4.84 2.48 0 4.5 1.04 5.26 2.64zm-21.682-.6c1.8-.1 2.54-.78 2.68-2.48h1.94V368h-2.56v-9.9h-5.06v-1.92zm19.242 7.22c0 1.7-2.08 2.82-5 2.82-2.96 0-4.96-1.12-4.96-2.82 0-1.68 2.04-2.84 5-2.84 2.92 0 4.96 1.16 4.96 2.84z"
        fill="currentColor"
        fillRule="evenodd"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both ocm3s5tvuiufjb7s7w2pnhpr_fo",
        }}
      />
      <path
        d="M209.06 296.42c-3.74 0-6.68 1.36-6.68 3.96 0 1.62 1.22 2.5 2.74 3.1-2.06.5-3.8 1.56-3.8 3.54 0 2.78 3.4 4.2 7.74 4.2s7.74-1.42 7.74-4.2c0-1.98-1.74-3.04-3.8-3.54 1.52-.6 2.74-1.48 2.74-3.1 0-2.6-2.94-3.96-6.68-3.96zm0 6.08c-2.48 0-4.18-.64-4.18-2 0-1.34 1.7-2 4.18-2 2.48 0 4.18.66 4.18 2 0 1.36-1.7 2-4.18 2zm5.16 4.32c0-1.48-2.1-2.26-5.16-2.26s-5.16.78-5.16 2.26c0 1.54 2.1 2.32 5.16 2.32s5.16-.78 5.16-2.32z"
        fill="currentColor"
        fillRule="evenodd"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both oye8rnk9f1dktxvk2p7ejvj5_fo",
        }}
      />
      <path
        d="M245.637 276.5v3.5h-2.46v-3.5h-9.68v-2l8.78-8.86h3.36v8.74h3.86v2.12zm-2.46-8.78l-6.68 6.66h6.68z"
        fill="currentColor"
        fillRule="evenodd"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both q7hvenbv2mz1fpuw8uxj49id_fo",
        }}
      />
    </svg>
  ),
  typeScale: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      viewBox="0 0 514 514"
    >
      <path
        fill="currentColor"
        d="M181.12 67.144L110.848 205h26.304l17.472-34.56h80.064L252.16 205h26.112l-70.08-137.856H181.12zm13.632 24.192l29.184 57.6h-58.368l29.184-57.6zm121.179 115.776c18.816 0 34.368-6.528 43.392-15.744 3.264 9.984 13.056 18.048 34.56 13.632v-17.856c-12.288 2.688-14.976.192-14.976-5.568v-42.432c0-24-17.664-36.864-48.768-36.864-24.384 0-46.464 11.136-52.8 28.032l19.008 8.448c3.84-9.792 17.472-16.896 33.024-16.896 18.816 0 27.264 7.296 27.264 16.896v.768l-43.776 5.184c-24.192 2.88-38.784 13.44-38.784 31.104 0 20.736 18.624 31.296 41.856 31.296zm40.704-41.088c0 14.784-21.504 22.464-38.784 22.464-13.248 0-21.312-4.416-21.312-12.864s6.72-11.712 20.16-13.248l39.936-4.8v8.448zM89.56 352.072L54.424 421h13.152l8.736-17.28h40.032L125.08 421h13.056l-35.04-68.928H89.56zm6.816 12.096l14.592 28.8H81.784l14.592-28.8zm63.54 57.888c9.408 0 17.184-3.264 21.696-7.872 1.632 4.992 6.528 9.024 17.28 6.816v-8.928c-6.144 1.344-7.488.096-7.488-2.784v-21.216c0-12-8.832-18.432-24.384-18.432-12.192 0-23.232 5.568-26.4 14.016l9.504 4.224c1.92-4.896 8.736-8.448 16.512-8.448 9.408 0 13.632 3.648 13.632 8.448v.384l-21.888 2.592c-12.096 1.44-19.392 6.72-19.392 15.552 0 10.368 9.312 15.648 20.928 15.648zm20.352-20.544c0 7.392-10.752 11.232-19.392 11.232-6.624 0-10.656-2.208-10.656-6.432s3.36-5.856 10.08-6.624l19.968-2.4v4.224zM360.28 304.536L342.712 339h6.576l4.368-8.64h20.016l4.368 8.64h6.528l-17.52-34.464h-6.768zm3.408 6.048l7.296 14.4h-14.592l7.296-14.4zm32.22 28.944c4.704 0 8.592-1.632 10.848-3.936.816 2.496 3.264 4.512 8.64 3.408v-4.464c-3.072.672-3.744.048-3.744-1.392v-10.608c0-6-4.416-9.216-12.192-9.216-6.096 0-11.616 2.784-13.2 7.008l4.752 2.112c.96-2.448 4.368-4.224 8.256-4.224 4.704 0 6.816 1.824 6.816 4.224v.192l-10.944 1.296c-6.048.72-9.696 3.36-9.696 7.776 0 5.184 4.656 7.824 10.464 7.824zm10.176-10.272c0 3.696-5.376 5.616-9.696 5.616-3.312 0-5.328-1.104-5.328-3.216s1.68-2.928 5.04-3.312l9.984-1.2v2.112zM461.76 411.512L455.904 423h2.192l1.456-2.88h6.672l1.456 2.88h2.176l-5.84-11.488h-2.256zm1.136 2.016l2.432 4.8h-4.864l2.432-4.8zm10.673 9.648c1.568 0 2.864-.544 3.616-1.312.272.832 1.088 1.504 2.88 1.136v-1.488c-1.024.224-1.248.016-1.248-.464v-3.536c0-2-1.472-3.072-4.064-3.072-2.032 0-3.872.928-4.4 2.336l1.584.704c.32-.816 1.456-1.408 2.752-1.408 1.568 0 2.272.608 2.272 1.408v.064l-3.648.432c-2.016.24-3.232 1.12-3.232 2.592 0 1.728 1.552 2.608 3.488 2.608zm3.392-3.424c0 1.232-1.792 1.872-3.232 1.872-1.104 0-1.776-.368-1.776-1.072 0-.704.56-.976 1.68-1.104l3.328-.4v.704zM465.32 476.384L460.928 485h1.644l1.092-2.16h5.004l1.092 2.16h1.632l-4.38-8.616h-1.692zm.852 1.512l1.824 3.6h-3.648l1.824-3.6zm10.384-1.512L472.164 485h1.644l1.092-2.16h5.004l1.092 2.16h1.632l-4.38-8.616h-1.692zm.852 1.512l1.824 3.6h-3.648l1.824-3.6zM314.64 440.768L305.856 458h3.288l2.184-4.32h10.008l2.184 4.32h3.264l-8.76-17.232h-3.384zm1.704 3.024l3.648 7.2h-7.296l3.648-7.2zm16.06 14.472c2.352 0 4.296-.816 5.424-1.968.408 1.248 1.632 2.256 4.32 1.704v-2.232c-1.536.336-1.872.024-1.872-.696v-5.304c0-3-2.208-4.608-6.096-4.608-3.048 0-5.808 1.392-6.6 3.504l2.376 1.056c.48-1.224 2.184-2.112 4.128-2.112 2.352 0 3.408.912 3.408 2.112v.096l-5.472.648c-3.024.36-4.848 1.68-4.848 3.888 0 2.592 2.328 3.912 5.232 3.912zm5.088-5.136c0 1.848-2.688 2.808-4.848 2.808-1.656 0-2.664-.552-2.664-1.608s.84-1.464 2.52-1.656l4.992-.6v1.056zM26.78 234.22c4.46 0 7.22-2.04 7.22-4.34 0-1.82-1.16-2.92-3.12-3.36 1.7-.42 2.64-1.62 2.64-3.08 0-2.34-2.5-4.02-6.52-4.02-4.14 0-6.72 1.98-7.44 4.36l2.28.76c.56-1.68 2.42-2.96 5.08-2.96 2.4 0 3.96.78 3.96 2.04 0 1.28-1.42 1.9-3.68 1.9h-2.58v2.16h2.62c2.26 0 4.14.54 4.14 2.04 0 1.48-1.94 2.34-4.62 2.34-2.74 0-4.74-1.38-5.36-3.2l-2.3.96c.74 2.6 3.68 4.4 7.68 4.4zm7.856-2.3V234h13.88v-2.24h-9.42l4.32-2.36c2.82-1.54 4.76-2.86 4.76-5.22 0-2.84-2.6-4.76-6.2-4.76-4.3 0-6.9 2.3-7.56 5.42l2.32.64c.4-2.28 2.3-3.88 5.12-3.88 2.18 0 3.8 1.02 3.8 2.6 0 1.74-1.54 2.44-4.08 3.86l-6.94 3.86zM19.58 487.92V490h13.88v-2.24h-9.42l4.32-2.36c2.82-1.54 4.76-2.86 4.76-5.22 0-2.84-2.6-4.76-6.2-4.76-4.3 0-6.9 2.3-7.56 5.42l2.32.64c.4-2.28 2.3-3.88 5.12-3.88 2.18 0 3.8 1.02 3.8 2.6 0 1.74-1.54 2.44-4.08 3.86l-6.94 3.86zM45.44 490v-3.5h3.86v-2.12h-3.86v-8.74h-3.36l-8.78 8.86v2h9.68v3.5h2.46zm-9.14-5.62l6.68-6.66v6.66H36.3zM277.58 359.92V362h13.88v-2.24h-9.42l4.32-2.36c2.82-1.54 4.76-2.86 4.76-5.22 0-2.84-2.6-4.76-6.2-4.76-4.3 0-6.9 2.3-7.56 5.42l2.32.64c.4-2.28 2.3-3.88 5.12-3.88 2.18 0 3.8 1.02 3.8 2.6 0 1.74-1.54 2.44-4.08 3.86l-6.94 3.86zm22.512-12.5c-4.68 0-8.18 3.14-8.18 7.4s3.5 7.4 8.18 7.4c4.66 0 8.18-3.14 8.18-7.4s-3.52-7.4-8.18-7.4zm0 2.26c3.28 0 5.56 2.08 5.56 5.14 0 3.06-2.28 5.14-5.56 5.14-3.3 0-5.58-2.08-5.58-5.14 0-3.06 2.28-5.14 5.58-5.14zM282.78 473.54c-.14 1.7-.88 2.38-2.68 2.48l-3 .16v1.92h5.06v9.9h2.56v-14.46h-1.94zm19.002 3.08c-1.16-1.92-3.78-3.2-7.02-3.2-5.18 0-8.28 3.24-8.28 7.66 0 4.02 2.56 7.14 7.96 7.14 4.32 0 7.42-2.12 7.42-5.06 0-2.78-2.84-4.88-7.12-4.88-2.7 0-4.78.84-5.9 2.14 0-2.7 2.4-4.84 5.82-4.84 2.48 0 4.5 1.04 5.26 2.64l1.86-1.6zm-2.44 6.62c0 1.7-2.08 2.82-5 2.82-2.96 0-4.96-1.12-4.96-2.82 0-1.68 2.04-2.84 5-2.84 2.92 0 4.96 1.16 4.96 2.84zM413.78 473.54c-.14 1.7-.88 2.38-2.68 2.48l-3 .16v1.92h5.06v9.9h2.56v-14.46h-1.94zm11.882-.12c-4.68 0-8.18 3.14-8.18 7.4s3.5 7.4 8.18 7.4c4.66 0 8.18-3.14 8.18-7.4s-3.52-7.4-8.18-7.4zm0 2.26c3.28 0 5.56 2.08 5.56 5.14 0 3.06-2.28 5.14-5.56 5.14-3.3 0-5.58-2.08-5.58-5.14 0-3.06 2.28-5.14 5.58-5.14zM413.78 410.54c-.14 1.7-.88 2.38-2.68 2.48l-3 .16v1.92h5.06v9.9h2.56v-14.46h-1.94zm3.782 12.38V425h13.88v-2.24h-9.42l4.32-2.36c2.82-1.54 4.76-2.86 4.76-5.22 0-2.84-2.6-4.76-6.2-4.76-4.3 0-6.9 2.3-7.56 5.42l2.32.64c.4-2.28 2.3-3.88 5.12-3.88 2.18 0 3.8 1.02 3.8 2.6 0 1.74-1.54 2.44-4.08 3.86l-6.94 3.86z"
      ></path>
      <path
        vectorEffect="non-scaling-stroke"
        stroke="currentColor"
        strokeWidth="1"
        d="M1 257v256h256M1 257V1h512v256M1 257h256m256 0H257m256 0v128M257 257v128m0 128V385m0 128h128M257 385h128m128 0H385m128 0v64m-128-64v64m0 64h128v-64m-128 64v-64m0 0h128"
      ></path>
    </svg>
  ),
  colorGen: (
    <svg viewBox="0 0 512 379" fill="none">
      <style>
        {
          "@keyframes a0_fo{0%{fill-opacity:0}33.333%,to{fill-opacity:1}}@keyframes a1_fo{0%,33.333%{fill-opacity:0}66.667%,to{fill-opacity:1}}@keyframes a2_fo{0%{fill-opacity:0}33.333%,to{fill-opacity:1}}@keyframes a3_fo{0%,33.333%{fill-opacity:0}66.667%,to{fill-opacity:1}}@keyframes a4_fo{0%{fill-opacity:0}33.333%,to{fill-opacity:1}}@keyframes a5_fo{0%{fill-opacity:0;animation-timing-function:cubic-bezier(.4,0,.6,1)}33.333%,to{fill-opacity:1}}@keyframes a6_fo{0%,33.333%{fill-opacity:0}66.667%,to{fill-opacity:1}}@keyframes a7_fo{0%{fill-opacity:0}33.333%{fill-opacity:0;animation-timing-function:cubic-bezier(.4,0,.6,1)}66.667%,to{fill-opacity:1}}@keyframes a8_fo{0%,66.667%{fill-opacity:0}to{fill-opacity:1}}@keyframes a9_fo{0%{fill-opacity:0}66.667%{fill-opacity:0;animation-timing-function:cubic-bezier(.4,0,.6,1)}to{fill-opacity:1}}@keyframes a10_fo{0%,66.667%{fill-opacity:0}to{fill-opacity:1}}@keyframes a11_fo{0%,66.667%{fill-opacity:0}to{fill-opacity:1}}@keyframes a12_fo{0%,66.667%{fill-opacity:0}to{fill-opacity:1}}@keyframes a13_fo{0%,66.667%{fill-opacity:0}to{fill-opacity:1}}@keyframes a14_fo{0%{fill-opacity:0}33.333%,to{fill-opacity:1}}@keyframes a15_fo{0%,33.333%{fill-opacity:0}66.667%,to{fill-opacity:1}}@keyframes a16_fo{0%{fill-opacity:0}33.333%,to{fill-opacity:1}}@keyframes a17_fo{0%,33.333%{fill-opacity:0}66.667%,to{fill-opacity:1}}"
        }
      </style>
      <path
        d="M40.5 46.1h-2.3V59h2.3V46.1zm18.4 0h-2.2v9.6l-8.5-9.6h-2.3V59h2.2V49l8.8 10h2V46.1zm7.7 7.9h5.7c2.9 0 4.8-1.4 4.8-4s-1.9-3.9-4.8-3.9h-8V59h2.3v-5zm0-2v-3.9h5.6c1.6 0 2.6.7 2.6 1.9 0 1.3-1 2-2.6 2h-5.6zm21.1 7.2c4.6 0 6.5-2.6 6.5-6.4v-6.7h-2.3v6.6c0 2.6-1 4.4-4.2 4.4s-4.3-1.8-4.3-4.4v-6.6h-2.3v6.7c0 3.8 2 6.4 6.6 6.4zm24.6-11.1v-2h-14v2h5.8V59h2.3V48.1h5.9zM38.2 308h6.6c4.4 0 7.3-2.5 7.3-6.5 0-3.9-2.9-6.4-7.3-6.4h-6.6V308zm2.3-2v-8.9h4.3c3.1 0 4.9 1.7 4.9 4.4 0 2.8-1.8 4.5-4.9 4.5h-4.3zm20.4-10.9L54.3 308h2.5l1.6-3.2h7.5l1.7 3.2H70l-6.5-12.9h-2.6zm1.3 2.2l2.7 5.4h-5.4l2.7-5.4zm14.2 5.7h5l3.2 5h2.6l-3.3-5.2c1.8-.5 3-1.8 3-3.8 0-2.6-2-3.9-4.8-3.9h-8V308h2.3v-5zm0-2v-3.9H82c1.6 0 2.6.7 2.6 1.9 0 1.3-1 2-2.6 2h-5.6zm17.3-5.9h-2.3V308h2.3v-4.1l2.5-1.9 5.9 6h3l-7.2-7.4 6.8-5.5h-3.2l-7.8 6.5v-6.5zM397.2 348H409v-2h-9.5v-10.9h-2.3V348zm18.6-12.9h-2.3V348h2.3v-12.9zm12.3-.2c-4.4 0-7.7 2.8-7.7 6.6 0 3.9 3.2 6.7 7.6 6.7 2.3 0 4.2-.8 5-1.9v1.7h2.1v-7h-8.2v2h6.2c-.1 1.9-2.5 3.2-5.1 3.2-3.1 0-5.3-1.9-5.3-4.7 0-2.7 2.3-4.6 5.4-4.6 2.4 0 4.1 1.1 4.9 3l2-1c-1-2.5-3.6-4-6.9-4zm23.1.2v5.2h-8.7v-5.2h-2.4V348h2.4v-5.7h8.7v5.7h2.3v-12.9h-2.3zm20.8 2v-2h-14v2h5.8V348h2.3v-10.9h5.9zM301 45.9c-4.3 0-7.6 2.8-7.6 6.6.1 3.9 3.3 6.7 7.6 6.7 4.4 0 7.6-2.8 7.6-6.7 0-3.8-3.2-6.6-7.6-6.6zm0 2c3.1 0 5.2 1.9 5.2 4.6 0 2.8-2.1 4.7-5.2 4.7s-5.2-1.9-5.2-4.7c0-2.7 2.1-4.6 5.2-4.6zm18.3 11.3c4.6 0 6.6-2.6 6.6-6.4v-6.7h-2.3v6.6c0 2.6-1 4.4-4.3 4.4-3.2 0-4.2-1.8-4.2-4.4v-6.6h-2.3v6.7c0 3.8 2 6.4 6.5 6.4zm24.6-11.1v-2h-14v2h5.9V59h2.3V48.1h5.8zm6.8 5.9h5.7c2.9 0 4.7-1.4 4.7-4s-1.8-3.9-4.7-3.9h-8.1V59h2.4v-5zm-.1-2l.1-3.9h5.5c1.7 0 2.7.7 2.7 1.9 0 1.3-1 2-2.7 2h-5.6zm21.2 7.2c4.5 0 6.5-2.6 6.5-6.4v-6.7H376v6.6c0 2.6-1 4.4-4.2 4.4-3.3 0-4.3-1.8-4.3-4.4v-6.6h-2.3v6.7c0 3.8 2 6.4 6.6 6.4zm24.5-11.1v-2h-13.9v2h5.8V59h2.3V48.1h5.8z"
        fill="currentColor"
      />
      <path
        d="M311 151c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#390000"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a0_fo",
        }}
      />
      <path
        d="M311 187c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#001f32"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a1_fo",
        }}
      />
      <path
        d="M347 151c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#830000"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a2_fo",
        }}
      />
      <path
        d="M347 187c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#004773"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a3_fo",
        }}
      />
      <path
        d="M383 151c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#c00"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a4_fo",
        }}
      />
      <path
        d="M55 151c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#c00"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a5_fo",
        }}
      />
      <path
        d="M383 187c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#006fb4"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a6_fo",
        }}
      />
      <path
        d="M55 187c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#006fb4"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a7_fo",
        }}
      />
      <path
        d="M383 223c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#328538"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a8_fo",
        }}
      />
      <path
        d="M55 223c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#328538"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a9_fo",
        }}
      />
      <path
        d="M419 223c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#7bdf75"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a10_fo",
        }}
      />
      <path
        d="M455 223c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#f1faf1"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a11_fo",
        }}
      />
      <path
        d="M347 223c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#205524"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a12_fo",
        }}
      />
      <path
        d="M311 223c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#003304"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a13_fo",
        }}
      />
      <path
        d="M419 151c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#ff6075"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a14_fo",
        }}
      />
      <path
        d="M419 187c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#53d4ff"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a15_fo",
        }}
      />
      <path
        d="M455 151c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#ffeded"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a16_fo",
        }}
      />
      <path
        d="M455 187c9.9 0 18-8.1 18-18s-8.1-18-18-18-18 8.1-18 18 8.1 18 18 18z"
        fill="#ebf7ff"
        fillOpacity={0}
        style={{
          animation: "3s linear infinite both a17_fo",
        }}
      />
      <path
        d="M1 378c315-14 204-106.5 510-118M1 378h510V260M1 378V260m510 0V1.5H256M511 260H256M1 260V1.5h255M1 260h255m0-258.5V260"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  ),
  designSystem: (
    <svg viewBox="0 0 755 288" fill="none">
      <style>
        {
          "@keyframes otm9m27831esb48z33mtehb9_fo{0%,to{fill-opacity:0}20%,80%{fill-opacity:1}}@keyframes txqeq609pkjdjgfe04gk2mwl_fo{0%,20%,to{fill-opacity:0}40%,80%{fill-opacity:1}}@keyframes vtytyf1yls1ig55jxmoeqwe3_fo{0%,20%,40%,to{fill-opacity:0}60%,80%{fill-opacity:1}}@keyframes kdg66xpbw7n8pv3oq91f96ge_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes faura7efybao36c4iudsp1s6_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes oayr4v8bk03gefb2d7erufvk_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes cysvh9mla23p35c9gp7thr2d_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes uurzflwxcn2zviurhlv1av5j_fo{0%,20%,40%,to{fill-opacity:0}60%,80%{fill-opacity:1}}@keyframes vfk1u4ag2ajdhkvo3omek196_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes dthqxdxfnycp5aysqr1fev6r_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes dmijznn93hqjymnu27xhbd1o_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes wgv7is56nx0yrv4mutui56a1_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes e9j0i1b73lzg1n24ka9y6vf7_fo{0%,20%,40%,to{fill-opacity:0}60%,80%{fill-opacity:1}}@keyframes n5cx0srd6wwdu5w2k7f5lr51_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes f3xug8kudmqdancf34wilky1_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes zfj6ri2sgb7hkez0j1aod2rd_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes khv3ohqfu80zt7go5psawd1h_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes fpailoo6idh7jo1smeequob4_fo{0%,20%,40%,to{fill-opacity:0}60%,80%{fill-opacity:1}}@keyframes ce9za4ap7zvug0rsojba56qs_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes plgw8l604v0pra974n1elgfo_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes xmn9jqvr0a8vx6sr029hcwke_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes oshhtsrtc089fwi2hrmzd0o9_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes sdzfabq2ffkwxs9j9r4l1x4v_fo{0%,20%,to{fill-opacity:0}40%,80%{fill-opacity:1}}@keyframes nvwtkyt95acv6i0ofgb07yya_fo{0%,20%,40%,to{fill-opacity:0}60%,80%{fill-opacity:1}}@keyframes n1bwn3g1mmgfr2b1w3git2bp_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes rp8rwwagmduyf6bwesrrop4g_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes cvo5znsggmm12l0u7h4i3tsq_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes ekkrtn5c0wxrm68ukf4m2562_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes s0jxbpox99jkljlf3ce9nd4u_fo{0%,20%,40%,to{fill-opacity:0}60%,80%{fill-opacity:1}}@keyframes t4dy93x63snypsta4bepsvz4_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes mokzvzpf818z430yev702btp_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes wz2af9gvnl8m65oix7u83plz_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes ivb1es3eluinwug1wf7qyn1r_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes wslr0yfph17wk806a5f3ogtg_fo{0%,20%,40%,to{fill-opacity:0}60%,80%{fill-opacity:1}}@keyframes n64xwclpvt2i26kbhwof3xdw_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes b3dsgz2um9dbbgm3qml2dqvg_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes uhrp88bpts9bdzfkcti400ny_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes p0pvkgz4k58fccn6rg791u75_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes vwxc3kn9n0vlrheo9ivud4xq_fo{0%,20%,40%,to{fill-opacity:0}60%,80%{fill-opacity:1}}@keyframes pv5knavqf2b85spq4c4at5s0_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes j9lmaj7yhfr85sxppvo3msu0_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes wd8lsceyf8ssruwz4uik3kg5_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes a8q2ayv6ab0vxpy5cdaexy1p_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes fi2lss2j54nrzdec6koodcmi_fo{0%,20%,to{fill-opacity:0}40%,80%{fill-opacity:1}}@keyframes l199kt5ndx9moyh7wrfw4mjy_fo{0%,20%,40%,to{fill-opacity:0}60%,80%{fill-opacity:1}}@keyframes bnd7xt9k6ahm9bkygdnt2y1i_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes zywigkrth1so5pnnpxfrru8s_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes sob3pts8lswcyrjlazihver8_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes cn10wdg9nd61lq4hfy6ghnoc_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes sx4t9syiulk1wofkcjpqc12k_fo{0%,20%,40%,to{fill-opacity:0}60%,80%{fill-opacity:1}}@keyframes go5ffj60j5xpxbbkrkwlunfu_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes vq0t93qsoqj6rxyiop9u3twm_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes zh9q2vit95ndscbfbtpa4sq3_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes zrzl58mpcjy1rwx481irncee_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes mt5k4338ie4i046sn7puhzdr_fo{0%,20%,40%,to{fill-opacity:0}60%,80%{fill-opacity:1}}@keyframes udtne2diroalyra9s2hlxunb_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes fcs0u9tjqz3p0ettmt5nlfrb_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes ii7zhk83mh8a750e98rk9kmb_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes zx593bm9v3p5e4cj7y6hhoz0_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes pgqi2due1df6mptov0dkbnhz_fo{0%,20%,40%,to{fill-opacity:0}60%,80%{fill-opacity:1}}@keyframes hljzudr1v5j15yrr7gmy5gac_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes wvpkiqum6q7uv87scq0h3fc6_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes oeig7voeiu7kz5b4tgp4kgq4_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes r9wu9sw89w7x69k2r0uyy2l5_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes p44duy4ifkyey93lrgiodpou_fo{0%,20%,to{fill-opacity:0}40%,80%{fill-opacity:1}}@keyframes gbv28eo6zxdpe6z5x7nka84b_fo{0%,20%,40%,to{fill-opacity:0}60%,80%{fill-opacity:1}}@keyframes arp17uyi4hotxephpt0jpe6a_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes ftp0dppewih9b1yc08z1g3th_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes qjtzmjtu1vbm129tosws0ral_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes reudyfmhm1eiqwnhaiaultlm_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes a0yyko09t9npi6zux7vb2x9d_fo{0%,20%,40%,to{fill-opacity:0}60%,80%{fill-opacity:1}}@keyframes r39vp95f2hi5o9f4hi8rk5b1_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes opbrrgns9jpbgayj4vpjk9cp_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes iwfp27wfpyt8xmnwhx2ek9op_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes jbuaf9zb2yfanrqwyqdki7rf_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes gd45dx3a5astvu3g04701c8f_fo{0%,20%,40%,to{fill-opacity:0}60%,80%{fill-opacity:1}}@keyframes ualtarbgoxwnaq5iasuwydr4_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes hz5vvpo397hm2yckmlj5rpjg_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes auerzkj7buhgsua5iqry3mcf_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes r2e0j4p1186yb8v6nm4twm6m_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes smytuqhzbdoun0nzva1wiic5_fo{0%,20%,40%,to{fill-opacity:0}60%,80%{fill-opacity:1}}@keyframes nxdzs13lg0wl18xi1f9b74l8_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes cea2kscaaeo2f647jms4g10l_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes gfudy2v5kquaaak0ka9oeoh0_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}@keyframes hfliggt24z93lqbw5btzr4ny_fo{0%,20%,60%,to{fill-opacity:0}80%{fill-opacity:1}}"
        }
      </style>
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(18 18)"
        style={{
          animation: "5s linear infinite both otm9m27831esb48z33mtehb9_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(135 18)"
        style={{
          animation: "5s linear infinite both txqeq609pkjdjgfe04gk2mwl_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(274 18)"
        style={{
          animation: "5s linear infinite both vtytyf1yls1ig55jxmoeqwe3_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(485 18)"
        style={{
          animation: "5s linear infinite both kdg66xpbw7n8pv3oq91f96ge_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(629 18)"
        style={{
          animation: "5s linear infinite both faura7efybao36c4iudsp1s6_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(485 162)"
        style={{
          animation: "5s linear infinite both oayr4v8bk03gefb2d7erufvk_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(629 162)"
        style={{
          animation: "5s linear infinite both cysvh9mla23p35c9gp7thr2d_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(346 18)"
        style={{
          animation: "5s linear infinite both uurzflwxcn2zviurhlv1av5j_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(557 18)"
        style={{
          animation: "5s linear infinite both vfk1u4ag2ajdhkvo3omek196_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(701 18)"
        style={{
          animation: "5s linear infinite both dthqxdxfnycp5aysqr1fev6r_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(557 162)"
        style={{
          animation: "5s linear infinite both dmijznn93hqjymnu27xhbd1o_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(701 162)"
        style={{
          animation: "5s linear infinite both wgv7is56nx0yrv4mutui56a1_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(274 90)"
        style={{
          animation: "5s linear infinite both e9j0i1b73lzg1n24ka9y6vf7_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(485 90)"
        style={{
          animation: "5s linear infinite both n5cx0srd6wwdu5w2k7f5lr51_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(629 90)"
        style={{
          animation: "5s linear infinite both f3xug8kudmqdancf34wilky1_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(485 234)"
        style={{
          animation: "5s linear infinite both zfj6ri2sgb7hkez0j1aod2rd_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(629 234)"
        style={{
          animation: "5s linear infinite both khv3ohqfu80zt7go5psawd1h_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(346 90)"
        style={{
          animation: "5s linear infinite both fpailoo6idh7jo1smeequob4_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(557 90)"
        style={{
          animation: "5s linear infinite both ce9za4ap7zvug0rsojba56qs_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(701 90)"
        style={{
          animation: "5s linear infinite both plgw8l604v0pra974n1elgfo_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(557 234)"
        style={{
          animation: "5s linear infinite both xmn9jqvr0a8vx6sr029hcwke_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(701 234)"
        style={{
          animation: "5s linear infinite both oshhtsrtc089fwi2hrmzd0o9_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(171 18)"
        style={{
          animation: "5s linear infinite both sdzfabq2ffkwxs9j9r4l1x4v_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(310 18)"
        style={{
          animation: "5s linear infinite both nvwtkyt95acv6i0ofgb07yya_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(521 18)"
        style={{
          animation: "5s linear infinite both n1bwn3g1mmgfr2b1w3git2bp_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(665 18)"
        style={{
          animation: "5s linear infinite both rp8rwwagmduyf6bwesrrop4g_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(521 162)"
        style={{
          animation: "5s linear infinite both cvo5znsggmm12l0u7h4i3tsq_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(665 162)"
        style={{
          animation: "5s linear infinite both ekkrtn5c0wxrm68ukf4m2562_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(382 18)"
        style={{
          animation: "5s linear infinite both s0jxbpox99jkljlf3ce9nd4u_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(593 18)"
        style={{
          animation: "5s linear infinite both t4dy93x63snypsta4bepsvz4_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(737 18)"
        style={{
          animation: "5s linear infinite both mokzvzpf818z430yev702btp_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(593 162)"
        style={{
          animation: "5s linear infinite both wz2af9gvnl8m65oix7u83plz_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(737 162)"
        style={{
          animation: "5s linear infinite both ivb1es3eluinwug1wf7qyn1r_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(310 90)"
        style={{
          animation: "5s linear infinite both wslr0yfph17wk806a5f3ogtg_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(521 90)"
        style={{
          animation: "5s linear infinite both n64xwclpvt2i26kbhwof3xdw_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(665 90)"
        style={{
          animation: "5s linear infinite both b3dsgz2um9dbbgm3qml2dqvg_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(521 234)"
        style={{
          animation: "5s linear infinite both uhrp88bpts9bdzfkcti400ny_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(665 234)"
        style={{
          animation: "5s linear infinite both p0pvkgz4k58fccn6rg791u75_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(382 90)"
        style={{
          animation: "5s linear infinite both vwxc3kn9n0vlrheo9ivud4xq_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(593 90)"
        style={{
          animation: "5s linear infinite both pv5knavqf2b85spq4c4at5s0_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(737 90)"
        style={{
          animation: "5s linear infinite both j9lmaj7yhfr85sxppvo3msu0_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(593 234)"
        style={{
          animation: "5s linear infinite both wd8lsceyf8ssruwz4uik3kg5_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(737 234)"
        style={{
          animation: "5s linear infinite both a8q2ayv6ab0vxpy5cdaexy1p_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(171 54)"
        style={{
          animation: "5s linear infinite both fi2lss2j54nrzdec6koodcmi_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(310 54)"
        style={{
          animation: "5s linear infinite both l199kt5ndx9moyh7wrfw4mjy_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(521 54)"
        style={{
          animation: "5s linear infinite both bnd7xt9k6ahm9bkygdnt2y1i_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(665 54)"
        style={{
          animation: "5s linear infinite both zywigkrth1so5pnnpxfrru8s_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(521 198)"
        style={{
          animation: "5s linear infinite both sob3pts8lswcyrjlazihver8_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(665 198)"
        style={{
          animation: "5s linear infinite both cn10wdg9nd61lq4hfy6ghnoc_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(382 54)"
        style={{
          animation: "5s linear infinite both sx4t9syiulk1wofkcjpqc12k_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(593 54)"
        style={{
          animation: "5s linear infinite both go5ffj60j5xpxbbkrkwlunfu_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(737 54)"
        style={{
          animation: "5s linear infinite both vq0t93qsoqj6rxyiop9u3twm_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(593 198)"
        style={{
          animation: "5s linear infinite both zh9q2vit95ndscbfbtpa4sq3_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(737 198)"
        style={{
          animation: "5s linear infinite both zrzl58mpcjy1rwx481irncee_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(310 126)"
        style={{
          animation: "5s linear infinite both mt5k4338ie4i046sn7puhzdr_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(521 126)"
        style={{
          animation: "5s linear infinite both udtne2diroalyra9s2hlxunb_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(665 126)"
        style={{
          animation: "5s linear infinite both fcs0u9tjqz3p0ettmt5nlfrb_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(521 270)"
        style={{
          animation: "5s linear infinite both ii7zhk83mh8a750e98rk9kmb_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(665 270)"
        style={{
          animation: "5s linear infinite both zx593bm9v3p5e4cj7y6hhoz0_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(382 126)"
        style={{
          animation: "5s linear infinite both pgqi2due1df6mptov0dkbnhz_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(593 126)"
        style={{
          animation: "5s linear infinite both hljzudr1v5j15yrr7gmy5gac_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(737 126)"
        style={{
          animation: "5s linear infinite both wvpkiqum6q7uv87scq0h3fc6_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(593 270)"
        style={{
          animation: "5s linear infinite both oeig7voeiu7kz5b4tgp4kgq4_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(737 270)"
        style={{
          animation: "5s linear infinite both r9wu9sw89w7x69k2r0uyy2l5_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(135 54)"
        style={{
          animation: "5s linear infinite both p44duy4ifkyey93lrgiodpou_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(274 54)"
        style={{
          animation: "5s linear infinite both gbv28eo6zxdpe6z5x7nka84b_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(485 54)"
        style={{
          animation: "5s linear infinite both arp17uyi4hotxephpt0jpe6a_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(629 54)"
        style={{
          animation: "5s linear infinite both ftp0dppewih9b1yc08z1g3th_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(485 198)"
        style={{
          animation: "5s linear infinite both qjtzmjtu1vbm129tosws0ral_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(629 198)"
        style={{
          animation: "5s linear infinite both reudyfmhm1eiqwnhaiaultlm_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(346 54)"
        style={{
          animation: "5s linear infinite both a0yyko09t9npi6zux7vb2x9d_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(557 54)"
        style={{
          animation: "5s linear infinite both r39vp95f2hi5o9f4hi8rk5b1_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(701 54)"
        style={{
          animation: "5s linear infinite both opbrrgns9jpbgayj4vpjk9cp_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(557 198)"
        style={{
          animation: "5s linear infinite both iwfp27wfpyt8xmnwhx2ek9op_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(701 198)"
        style={{
          animation: "5s linear infinite both jbuaf9zb2yfanrqwyqdki7rf_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(274 126)"
        style={{
          animation: "5s linear infinite both gd45dx3a5astvu3g04701c8f_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(485 126)"
        style={{
          animation: "5s linear infinite both ualtarbgoxwnaq5iasuwydr4_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(629 126)"
        style={{
          animation: "5s linear infinite both hz5vvpo397hm2yckmlj5rpjg_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(485 270)"
        style={{
          animation: "5s linear infinite both auerzkj7buhgsua5iqry3mcf_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(629 270)"
        style={{
          animation: "5s linear infinite both r2e0j4p1186yb8v6nm4twm6m_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(346 126)"
        style={{
          animation: "5s linear infinite both smytuqhzbdoun0nzva1wiic5_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(557 126)"
        style={{
          animation: "5s linear infinite both nxdzs13lg0wl18xi1f9b74l8_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(701 126)"
        style={{
          animation: "5s linear infinite both cea2kscaaeo2f647jms4g10l_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(557 270)"
        style={{
          animation: "5s linear infinite both gfudy2v5kquaaak0ka9oeoh0_fo",
        }}
        r={18}
      />
      <circle
        fill="currentColor"
        stroke="currentColor"
        fillOpacity={0}
        filter="none"
        strokeOpacity={0}
        transform="translate(701 270)"
        style={{
          animation: "5s linear infinite both hfliggt24z93lqbw5btzr4ny_fo",
        }}
        r={18}
      />
    </svg>
  ),
  button: (
    <svg viewBox="0 0 1168 357" fill="none">
      <style>
        {
          "@keyframes kaw3tax2f7qd4c2bkw27y65t_t{0%{transform:translate(435.5px,179px);animation-timing-function:cubic-bezier(.650233,0,.3122,1)}to{transform:translate(730.5px,179px)}}"
        }
      </style>
      <circle fill="currentColor" transform="translate(26 311)" r={6} />
      <path
        d="M41.088 317h7.664c2.368 0 3.936-1.184 3.936-3.2 0-1.408-.88-2.4-2.08-2.784.8-.32 1.712-1.056 1.712-2.48 0-1.952-1.392-3.024-3.856-3.024h-7.376V317zm1.968-6.736v-3.024h5.216c1.312 0 2.112.496 2.112 1.504s-.8 1.52-2.112 1.52h-5.216zm0 1.728h5.584c1.296 0 2.08.672 2.08 1.632 0 .976-.784 1.648-2.08 1.648h-5.584v-3.28zm17.496-6.656c-3.952 0-6.88 2.48-6.88 5.888 0 3.424 2.848 5.952 6.8 5.952 2.016 0 3.712-.752 4.4-1.648V317h1.92v-6.192h-7.296v1.792h5.488c-.096 1.632-2.224 2.768-4.512 2.768-2.736 0-4.688-1.664-4.688-4.128 0-2.448 1.984-4.096 4.784-4.096 2.112 0 3.632.944 4.368 2.672l1.696-.944c-.88-2.208-3.12-3.536-6.08-3.536zm7.772 7.856h4.48v-1.712h-4.48v1.712zm5.939-1.936c0 3.408 2.911 5.92 6.767 5.92 2.928 0 5.12-1.344 6-3.552l-1.695-.928c-.736 1.728-2.209 2.672-4.288 2.672-2.704 0-4.688-1.664-4.688-4.112 0-2.448 1.984-4.112 4.688-4.112 2.08 0 3.552.944 4.288 2.672l1.696-.928c-.88-2.208-3.073-3.552-6-3.552-3.857 0-6.769 2.512-6.769 5.92zm13.652 1.936h4.48v-1.712h-4.48v1.712zm8.362-.64h4.496l2.8 4.448h2.336l-2.976-4.624c1.648-.432 2.688-1.568 2.688-3.344 0-2.32-1.728-3.52-4.24-3.52h-7.152V317h2.048v-4.448zm0-1.76v-3.52h4.992c1.472 0 2.336.624 2.336 1.76 0 1.12-.864 1.76-2.336 1.76h-4.992zm10.88-5.28V317h11.104v-1.792h-9.088v-3.232h8.176v-1.792h-8.176v-2.88h9.088v-1.792h-11.104zM119.991 317h5.824c3.952 0 6.48-2.24 6.48-5.744 0-3.504-2.528-5.744-6.48-5.744h-5.824V317zm2.016-1.76v-7.968h3.792c2.752 0 4.4 1.552 4.4 3.984 0 2.416-1.648 3.984-4.384 3.984h-3.808z"
        fill="currentColor"
      />
      <path
        opacity={0.5}
        d="M40.816 337h5.748c1.776 0 2.952-.888 2.952-2.4 0-1.056-.66-1.8-1.56-2.088.6-.24 1.284-.792 1.284-1.86 0-1.464-1.044-2.268-2.892-2.268h-5.532V337zm1.476-5.052v-2.268h3.912c.984 0 1.584.372 1.584 1.128 0 .756-.6 1.14-1.584 1.14h-3.912zm0 1.296h4.188c.972 0 1.56.504 1.56 1.224 0 .732-.588 1.236-1.56 1.236h-4.188v-2.46zm10.603 3.888c1.176 0 2.148-.408 2.712-.984.204.624.816 1.128 2.16.852v-1.116c-.768.168-.936.012-.936-.348v-2.652c0-1.5-1.104-2.304-3.048-2.304-1.524 0-2.904.696-3.3 1.752l1.188.528c.24-.612 1.092-1.056 2.064-1.056 1.176 0 1.704.456 1.704 1.056v.048l-2.736.324c-1.512.18-2.424.84-2.424 1.944 0 1.296 1.164 1.956 2.616 1.956zm2.544-2.568c0 .924-1.344 1.404-2.424 1.404-.828 0-1.332-.276-1.332-.804s.42-.732 1.26-.828l2.496-.3v.528zm2.733-.708c0 1.944 1.608 3.276 3.66 3.276 1.644 0 2.796-.936 3.204-1.932l-1.14-.684c-.252.732-1.044 1.392-2.076 1.392-1.284 0-2.268-.768-2.268-2.052s.984-2.052 2.268-2.052c1.032 0 1.824.66 2.076 1.392l1.152-.66c-.396-1.008-1.572-1.956-3.216-1.956-2.052 0-3.66 1.332-3.66 3.276zm9.202-5.472h-1.44V337h1.44v-1.56l1.368-1.128L71.404 337h1.849l-3.48-3.54 3.347-2.76h-2.015l-3.732 3.156v-5.472zm13.07 7.788V330.7h-1.44v.78c-.467-.456-1.223-.9-2.423-.9-2.172 0-3.456 1.464-3.456 3.168 0 1.728 1.284 3.192 3.456 3.192 1.188 0 1.956-.444 2.424-.924v.288c0 1.176-1.056 1.824-2.352 1.824-1.116 0-2.028-.504-2.34-1.296l-1.152.744c.492 1.068 1.788 1.716 3.528 1.716 2.136 0 3.756-1.236 3.756-3.12zm-1.355-2.448v.036c0 1.224-1.068 1.968-2.316 1.968-1.236 0-2.268-.744-2.268-1.98s1.032-1.98 2.268-1.98c1.248 0 2.316.756 2.316 1.956zm7.413-2.964a2.723 2.723 0 00-.708-.096c-1.02 0-1.872.324-2.412 1.176v-1.14h-1.44v6.3h1.44v-2.796c0-1.5.936-2.112 2.376-2.112.324 0 .456.036.744.108v-1.44zm3.97-.18c-2.003 0-3.6 1.32-3.6 3.276 0 1.956 1.597 3.276 3.6 3.276 1.993 0 3.589-1.32 3.589-3.276 0-1.956-1.596-3.276-3.588-3.276zm0 5.316c-1.235 0-2.22-.756-2.22-2.04s.985-2.04 2.22-2.04c1.225 0 2.209.756 2.209 2.04s-.984 2.04-2.208 2.04zm11.097-5.196h-1.44v3.216c0 1.164-.648 1.908-1.86 1.908-1.152 0-1.704-.66-1.704-1.776V330.7h-1.44v3.504c0 1.764 1.02 2.928 2.736 2.928 1.08 0 1.824-.432 2.268-.948V337h1.44v-6.3zm1.497 6.3h1.44v-3.168c0-1.164.66-1.932 1.884-1.932 1.164 0 1.74.792 1.74 1.908V337h1.44v-3.432c0-1.764-.984-2.988-2.736-2.988-1.092 0-1.884.432-2.328.948v-.828h-1.44v6.3zm13.472-.792V337h1.44v-8.616h-1.44v3.12c-.456-.492-1.296-.924-2.448-.924-2.172 0-3.456 1.488-3.456 3.276 0 1.788 1.284 3.276 3.456 3.276 1.152 0 1.992-.432 2.448-.924zm.072-2.4v.096c0 1.152-1.008 2.028-2.316 2.028-1.236 0-2.292-.744-2.292-2.076s1.056-2.076 2.292-2.076c1.308 0 2.316.876 2.316 2.028zm2.647.336h3.36v-1.284h-3.36v1.284zm4.479-1.452c0 2.556 2.184 4.44 5.076 4.44 2.196 0 3.84-1.008 4.5-2.664l-1.272-.696c-.552 1.296-1.656 2.004-3.216 2.004-2.028 0-3.516-1.248-3.516-3.084s1.488-3.084 3.516-3.084c1.56 0 2.664.708 3.216 2.004l1.272-.696c-.66-1.656-2.304-2.664-4.5-2.664-2.892 0-5.076 1.884-5.076 4.44zm12.7 4.44c1.176 0 2.148-.408 2.712-.984.204.624.816 1.128 2.16.852v-1.116c-.768.168-.936.012-.936-.348v-2.652c0-1.5-1.104-2.304-3.048-2.304-1.524 0-2.904.696-3.3 1.752l1.188.528c.24-.612 1.092-1.056 2.064-1.056 1.176 0 1.704.456 1.704 1.056v.048l-2.736.324c-1.512.18-2.424.84-2.424 1.944 0 1.296 1.164 1.956 2.616 1.956zm2.544-2.568c0 .924-1.344 1.404-2.424 1.404-.828 0-1.332-.276-1.332-.804s.42-.732 1.26-.828l2.496-.3v.528zm3.176 2.436h1.44v-3.168c0-1.164.66-1.932 1.884-1.932 1.164 0 1.74.792 1.74 1.908V337h1.44v-3.432c0-1.764-.984-2.988-2.736-2.988-1.092 0-1.884.432-2.328.948v-.828h-1.44v6.3zm11.168-6.42c-2.004 0-3.6 1.32-3.6 3.276 0 1.956 1.596 3.276 3.6 3.276 1.992 0 3.588-1.32 3.588-3.276 0-1.956-1.596-3.276-3.588-3.276zm0 5.316c-1.236 0-2.22-.756-2.22-2.04s.984-2.04 2.22-2.04c1.224 0 2.208.756 2.208 2.04s-.984 2.04-2.208 2.04zm4.7 1.104h1.44v-3.168c0-1.164.66-1.932 1.884-1.932 1.164 0 1.74.792 1.74 1.908V337h1.44v-3.432c0-1.764-.984-2.988-2.736-2.988-1.092 0-1.884.432-2.328.948v-.828h-1.44v6.3zm7.736-2.856h3.36v-1.284h-3.36v1.284zm6.296-.48h3.372l2.1 3.336h1.752l-2.232-3.468c1.236-.324 2.016-1.176 2.016-2.508 0-1.74-1.296-2.64-3.18-2.64h-5.364V337h1.536v-3.336zm0-1.32v-2.64h3.744c1.104 0 1.752.468 1.752 1.32 0 .84-.648 1.32-1.752 1.32h-3.744zm11.2 3.564c-1.176 0-2.076-.624-2.268-1.632h5.652v-.504c0-1.812-1.308-3.192-3.384-3.192-2.148 0-3.636 1.428-3.636 3.276 0 1.944 1.536 3.276 3.636 3.276 1.692 0 2.88-.924 3.264-1.908l-1.152-.612c-.3.768-1.068 1.296-2.112 1.296zm-.072-4.128c1.188 0 1.968.756 2.064 1.416h-4.2c.276-.924 1.14-1.416 2.136-1.416zm10.127 4.428V337h1.44v-8.616h-1.44v3.12c-.456-.492-1.296-.924-2.448-.924-2.172 0-3.456 1.488-3.456 3.276 0 1.788 1.284 3.276 3.456 3.276 1.152 0 1.992-.432 2.448-.924zm.072-2.4v.096c0 1.152-1.008 2.028-2.316 2.028-1.236 0-2.292-.744-2.292-2.076s1.056-2.076 2.292-2.076c1.308 0 2.316.876 2.316 2.028z"
        fill="currentColor"
      />
      <circle fill="currentColor" transform="translate(26 98)" r={6} />
      <path
        d="M43.136 99.552h5.088c2.56 0 4.24-1.232 4.24-3.52 0-2.32-1.68-3.52-4.24-3.52h-7.136V104h2.048v-4.448zm0-1.76v-3.52h4.976c1.472 0 2.336.624 2.336 1.76 0 1.12-.864 1.76-2.336 1.76h-4.976zm11.592-5.28h-2.56l5.153 5.536L51.752 104h2.48l4.337-4.656L62.855 104h2.577l-5.585-5.984 5.136-5.504h-2.463l-3.904 4.208-3.889-4.208zm13.012 6.592c.88-.688 2.08-1.2 3.712-1.2 2.288 0 3.856.864 3.856 2.272 0 1.488-1.648 2.272-3.744 2.272-2.224 0-3.728-.864-4.352-2.56l-1.808.784c.576 2.112 2.912 3.504 6.144 3.504 3.328 0 5.84-1.6 5.84-4.032 0-2.416-2.4-3.936-5.52-3.936-1.744 0-2.992.48-3.728.912l.368-2.816h7.904v-1.792h-9.44l-.736 6.08 1.504.512z"
        fill="currentColor"
      />
      <path
        opacity={0.5}
        d="M42.352 120.664h3.816c1.92 0 3.18-.924 3.18-2.64 0-1.74-1.26-2.64-3.18-2.64h-5.352V124h1.536v-3.336zm0-1.32v-2.64h3.732c1.104 0 1.752.468 1.752 1.32 0 .84-.648 1.32-1.752 1.32h-3.732zm9.875 4.788c1.176 0 2.148-.408 2.712-.984.204.624.816 1.128 2.16.852v-1.116c-.768.168-.936.012-.936-.348v-2.652c0-1.5-1.104-2.304-3.048-2.304-1.524 0-2.904.696-3.3 1.752l1.188.528c.24-.612 1.092-1.056 2.064-1.056 1.176 0 1.704.456 1.704 1.056v.048l-2.736.324c-1.512.18-2.424.84-2.424 1.944 0 1.296 1.164 1.956 2.616 1.956zm2.544-2.568c0 .924-1.344 1.404-2.424 1.404-.828 0-1.332-.276-1.332-.804s.42-.732 1.26-.828l2.496-.3v.528zm8.637 1.644V124h1.44v-8.616h-1.44v3.12c-.456-.492-1.296-.924-2.448-.924-2.172 0-3.456 1.488-3.456 3.276 0 1.788 1.284 3.276 3.456 3.276 1.152 0 1.992-.432 2.448-.924zm.072-2.4v.096c0 1.152-1.008 2.028-2.316 2.028-1.236 0-2.292-.744-2.292-2.076s1.056-2.076 2.292-2.076c1.308 0 2.316.876 2.316 2.028zm8.384 2.4V124h1.44v-8.616h-1.44v3.12c-.456-.492-1.296-.924-2.448-.924-2.172 0-3.456 1.488-3.456 3.276 0 1.788 1.284 3.276 3.456 3.276 1.152 0 1.992-.432 2.448-.924zm.072-2.4v.096c0 1.152-1.008 2.028-2.316 2.028-1.236 0-2.292-.744-2.292-2.076s1.056-2.076 2.292-2.076c1.308 0 2.316.876 2.316 2.028zm2.84-3.948h1.487v-1.476h-1.488v1.476zm1.463.84H74.8v6.3h1.44v-6.3zm1.496 6.3h1.44v-3.168c0-1.164.66-1.932 1.884-1.932 1.164 0 1.74.792 1.74 1.908V124h1.44v-3.432c0-1.764-.984-2.988-2.736-2.988-1.092 0-1.884.432-2.328.948v-.828h-1.44v6.3zm14.84-.828V117.7h-1.44v.78c-.468-.456-1.224-.9-2.424-.9-2.172 0-3.456 1.464-3.456 3.168 0 1.728 1.284 3.192 3.456 3.192 1.188 0 1.956-.444 2.424-.924v.288c0 1.176-1.056 1.824-2.352 1.824-1.116 0-2.028-.504-2.34-1.296l-1.152.744c.492 1.068 1.788 1.716 3.528 1.716 2.136 0 3.756-1.236 3.756-3.12zm-1.356-2.448v.036c0 1.224-1.068 1.968-2.316 1.968-1.236 0-2.268-.744-2.268-1.98s1.032-1.98 2.268-1.98c1.248 0 2.316.756 2.316 1.956zm2.637.42h3.36v-1.284h-3.36v1.284zm4.978-5.76h-1.92l3.864 4.152L96.602 124h1.86l3.252-3.492L104.93 124h1.932l-4.188-4.488 3.852-4.128h-1.848l-2.928 3.156-2.916-3.156zm7.409 5.76h3.36v-1.284h-3.36v1.284zm7.667-5.76L109.518 124h1.644l1.092-2.16h5.004l1.092 2.16h1.632l-4.38-8.616h-1.692zm.852 1.512l1.824 3.6h-3.648l1.824-3.6zm7.172.804h-1.824l2.94 3.168-3.024 3.132h1.752l2.16-2.28 2.052 2.28h1.848l-3.012-3.24 2.928-3.06h-1.74l-2.076 2.208-2.004-2.208zm6.68-.84h1.488v-1.476h-1.488v1.476zm1.464.84h-1.44v6.3h1.44v-6.3zm.752 4.968c.696.936 2.076 1.464 3.684 1.464 1.596 0 3.072-.684 3.072-2.1 0-1.464-1.428-1.668-3.12-1.872-1.38-.168-1.848-.228-1.848-.672 0-.432.492-.72 1.536-.72s1.896.372 2.364.996l.924-.888c-.54-.72-1.716-1.296-3.228-1.296-1.824 0-2.976.852-2.976 2.04 0 1.332 1.248 1.608 2.892 1.812 1.5.18 2.04.192 2.04.744 0 .54-.672.768-1.668.768-1.116 0-2.004-.36-2.652-1.2l-1.02.924zm7.519-1.524h3.36v-1.284h-3.36v1.284zm5.837-.816c.66-.516 1.56-.9 2.784-.9 1.716 0 2.892.648 2.892 1.704 0 1.116-1.236 1.704-2.808 1.704-1.668 0-2.796-.648-3.264-1.92l-1.356.588c.432 1.584 2.184 2.628 4.608 2.628 2.496 0 4.38-1.2 4.38-3.024 0-1.812-1.8-2.952-4.14-2.952-1.308 0-2.244.36-2.796.684l.276-2.112h5.928v-1.344h-7.08l-.552 4.56 1.128.384z"
        fill="currentColor"
      />
      <circle fill="currentColor" transform="translate(243 27)" r={6} />
      <path
        d="M258.088 33h10.432v-1.792h-8.384v-9.696h-2.048V33zm14.039-11.488h-2.048V33h2.048V21.512zm13.87 0h-1.968v8.528l-7.52-8.528h-2.112V33h1.968v-8.912l7.84 8.912h1.792V21.512zm4.33 0h-2.048V33h2.048v-3.6l2.224-1.776 5.2 5.376h2.752l-6.464-6.576 6.096-4.912h-2.912l-6.896 5.76v-5.76z"
        fill="currentColor"
      />
      <path
        opacity={0.5}
        d="M259.352 49.664h3.816c1.92 0 3.18-.924 3.18-2.64 0-1.74-1.26-2.64-3.18-2.64h-5.352V53h1.536v-3.336zm0-1.32v-2.64h3.732c1.104 0 1.752.468 1.752 1.32 0 .84-.648 1.32-1.752 1.32h-3.732zm10.812-1.764c-2.004 0-3.6 1.32-3.6 3.276 0 1.956 1.596 3.276 3.6 3.276 1.992 0 3.588-1.32 3.588-3.276 0-1.956-1.596-3.276-3.588-3.276zm0 5.316c-1.236 0-2.22-.756-2.22-2.04s.984-2.04 2.22-2.04c1.224 0 2.208.756 2.208 2.04s-.984 2.04-2.208 2.04zm4.677-6.036h1.488v-1.476h-1.488v1.476zm1.464.84h-1.44V53h1.44v-6.3zm1.496 6.3h1.44v-3.168c0-1.164.66-1.932 1.884-1.932 1.164 0 1.74.792 1.74 1.908V53h1.44v-3.432c0-1.764-.984-2.988-2.736-2.988-1.092 0-1.884.432-2.328.948V46.7h-1.44V53zm8.71-2.16c0 1.692 1.212 2.232 2.556 2.232.636 0 1.404-.156 1.872-.336l-.24-1.224c-.42.132-.852.264-1.38.264-.948 0-1.392-.252-1.392-1.068v-2.784h2.772V46.7h-2.772v-1.848h-1.416V46.7h-1.584v1.224h1.584v2.916zm8.57 1.068c-1.176 0-2.076-.624-2.268-1.632h5.652v-.504c0-1.812-1.308-3.192-3.384-3.192-2.148 0-3.636 1.428-3.636 3.276 0 1.944 1.536 3.276 3.636 3.276 1.692 0 2.88-.924 3.264-1.908l-1.152-.612c-.3.768-1.068 1.296-2.112 1.296zm-.072-4.128c1.188 0 1.968.756 2.064 1.416h-4.2c.276-.924 1.14-1.416 2.136-1.416zm9.109-1.02a2.723 2.723 0 00-.708-.096c-1.02 0-1.872.324-2.412 1.176V46.7h-1.44V53h1.44v-2.796c0-1.5.936-2.112 2.376-2.112.324 0 .456.036.744.108v-1.44zm.714 3.384h3.36V48.86h-3.36v1.284zm4.479-1.452c0 2.556 2.184 4.44 5.076 4.44 2.196 0 3.84-1.008 4.5-2.664l-1.272-.696c-.552 1.296-1.656 2.004-3.216 2.004-2.028 0-3.516-1.248-3.516-3.084s1.488-3.084 3.516-3.084c1.56 0 2.664.708 3.216 2.004l1.272-.696c-.66-1.656-2.304-2.664-4.5-2.664-2.892 0-5.076 1.884-5.076 4.44zm16.876-1.992h-1.44v3.216c0 1.164-.648 1.908-1.86 1.908-1.152 0-1.704-.66-1.704-1.776V46.7h-1.44v3.504c0 1.764 1.02 2.928 2.736 2.928 1.08 0 1.824-.432 2.268-.948V53h1.44v-6.3zm6.057.06a2.723 2.723 0 00-.708-.096c-1.02 0-1.872.324-2.412 1.176V46.7h-1.44V53h1.44v-2.796c0-1.5.936-2.112 2.376-2.112.324 0 .456.036.744.108v-1.44zm.187 4.908c.696.936 2.076 1.464 3.684 1.464 1.596 0 3.072-.684 3.072-2.1 0-1.464-1.428-1.668-3.12-1.872-1.38-.168-1.848-.228-1.848-.672 0-.432.492-.72 1.536-.72s1.896.372 2.364.996l.924-.888c-.54-.72-1.716-1.296-3.228-1.296-1.824 0-2.976.852-2.976 2.04 0 1.332 1.248 1.608 2.892 1.812 1.5.18 2.04.192 2.04.744 0 .54-.672.768-1.668.768-1.116 0-2.004-.36-2.652-1.2l-1.02.924zm11.009-5.088c-2.004 0-3.6 1.32-3.6 3.276 0 1.956 1.596 3.276 3.6 3.276 1.992 0 3.588-1.32 3.588-3.276 0-1.956-1.596-3.276-3.588-3.276zm0 5.316c-1.236 0-2.22-.756-2.22-2.04s.984-2.04 2.22-2.04c1.224 0 2.208.756 2.208 2.04s-.984 2.04-2.208 2.04zm9.261-5.136a2.723 2.723 0 00-.708-.096c-1.02 0-1.872.324-2.412 1.176V46.7h-1.44V53h1.44v-2.796c0-1.5.936-2.112 2.376-2.112.324 0 .456.036.744.108v-1.44z"
        fill="currentColor"
      />
      <circle fill="currentColor" transform="translate(26 169)" r={6} />
      <path
        d="M49.184 175l4.432-9.632V175h2v-11.488h-3.104l-4.128 8.992-4.128-8.992h-3.168V175h2v-9.632L47.52 175h1.664zm14.323-6.608l-4.336-4.88h-2.528l5.824 6.496V175h2.048v-4.992l5.808-6.496h-2.496l-4.32 4.88zm7.22 4.944V175H81.83v-1.792h-7.535l3.456-1.888c2.255-1.232 3.807-2.288 3.807-4.176 0-2.272-2.08-3.808-4.96-3.808-3.44 0-5.52 1.84-6.047 4.336l1.855.512c.32-1.824 1.84-3.104 4.096-3.104 1.745 0 3.04.816 3.04 2.08 0 1.392-1.231 1.952-3.264 3.088l-5.552 3.088z"
        fill="currentColor"
      />
      <path
        opacity={0.5}
        d="M46.888 195l3.324-7.224V195h1.5v-8.616h-2.328l-3.096 6.744-3.096-6.744h-2.376V195h1.5v-7.224L45.64 195h1.248zm8.655.132c1.176 0 2.148-.408 2.712-.984.204.624.816 1.128 2.16.852v-1.116c-.768.168-.936.012-.936-.348v-2.652c0-1.5-1.104-2.304-3.048-2.304-1.524 0-2.904.696-3.3 1.752l1.188.528c.24-.612 1.092-1.056 2.064-1.056 1.176 0 1.704.456 1.704 1.056v.048l-2.736.324c-1.512.18-2.424.84-2.424 1.944 0 1.296 1.164 1.956 2.616 1.956zm2.544-2.568c0 .924-1.344 1.404-2.424 1.404-.828 0-1.332-.276-1.332-.804s.42-.732 1.26-.828l2.496-.3v.528zm7.736-3.804a2.723 2.723 0 00-.708-.096c-1.02 0-1.872.324-2.412 1.176v-1.14h-1.44v6.3h1.44v-2.796c0-1.5.936-2.112 2.376-2.112.324 0 .456.036.744.108v-1.44zm7.643 5.412V188.7h-1.44v.78c-.468-.456-1.224-.9-2.424-.9-2.172 0-3.456 1.464-3.456 3.168 0 1.728 1.284 3.192 3.456 3.192 1.188 0 1.956-.444 2.424-.924v.288c0 1.176-1.056 1.824-2.352 1.824-1.116 0-2.028-.504-2.34-1.296l-1.152.744c.492 1.068 1.788 1.716 3.528 1.716 2.136 0 3.756-1.236 3.756-3.12zm-1.356-2.448v.036c0 1.224-1.068 1.968-2.316 1.968-1.236 0-2.268-.744-2.268-1.98s1.032-1.98 2.268-1.98c1.248 0 2.316.756 2.316 1.956zm2.83-3.864h1.487v-1.476H74.94v1.476zm1.463.84h-1.44v6.3h1.44v-6.3zM77.9 195h1.44v-3.168c0-1.164.66-1.932 1.884-1.932 1.164 0 1.74.792 1.74 1.908V195h1.44v-3.432c0-1.764-.984-2.988-2.736-2.988-1.092 0-1.884.432-2.328.948v-.828H77.9v6.3zm7.736-2.856h3.36v-1.284h-3.36v1.284zm7.167-2.1l-3.252-3.66h-1.896l4.368 4.872V195h1.536v-3.744l4.356-4.872h-1.872l-3.24 3.66zm3.767 2.1h3.36v-1.284h-3.36v1.284zm7.667-5.76L99.844 195h1.644l1.092-2.16h5.004l1.092 2.16h1.632l-4.38-8.616h-1.692zm.852 1.512l1.824 3.6h-3.648l1.824-3.6zm7.172.804h-1.824l2.94 3.168-3.024 3.132h1.752l2.16-2.28 2.052 2.28h1.848l-3.012-3.24 2.928-3.06h-1.74l-2.076 2.208-2.004-2.208zm6.68-.84h1.488v-1.476h-1.488v1.476zm1.464.84h-1.44v6.3h1.44v-6.3zm.752 4.968c.696.936 2.076 1.464 3.684 1.464 1.596 0 3.072-.684 3.072-2.1 0-1.464-1.428-1.668-3.12-1.872-1.38-.168-1.848-.228-1.848-.672 0-.432.492-.72 1.536-.72s1.896.372 2.364.996l.924-.888c-.54-.72-1.716-1.296-3.228-1.296-1.824 0-2.976.852-2.976 2.04 0 1.332 1.248 1.608 2.892 1.812 1.5.18 2.04.192 2.04.744 0 .54-.672.768-1.668.768-1.116 0-2.004-.36-2.652-1.2l-1.02.924zm7.519-1.524h3.36v-1.284h-3.36v1.284zm3.694 1.608V195h8.328v-1.344h-5.652l2.592-1.416c1.692-.924 2.856-1.716 2.856-3.132 0-1.704-1.56-2.856-3.72-2.856-2.58 0-4.14 1.38-4.536 3.252l1.392.384c.24-1.368 1.38-2.328 3.072-2.328 1.308 0 2.28.612 2.28 1.56 0 1.044-.924 1.464-2.448 2.316l-4.164 2.316z"
        fill="currentColor"
      />
      <circle fill="currentColor" transform="translate(243 98)" r={6} />
      <path
        d="M258.088 104h5.824c3.952 0 6.48-2.24 6.48-5.744 0-3.504-2.528-5.744-6.48-5.744h-5.824V104zm2.016-1.76v-7.968h3.792c2.752 0 4.4 1.552 4.4 3.984 0 2.416-1.648 3.984-4.384 3.984h-3.808zm13.929-9.728h-2.048V104h2.048V92.512zM276.304 104h7.664c2.368 0 3.936-1.184 3.936-3.2 0-1.408-.88-2.4-2.08-2.784.8-.32 1.712-1.056 1.712-2.48 0-1.952-1.392-3.024-3.856-3.024h-7.376V104zm1.968-6.736V94.24h5.216c1.312 0 2.112.496 2.112 1.504s-.8 1.52-2.112 1.52h-5.216zm0 1.728h5.584c1.296 0 2.08.672 2.08 1.632 0 .976-.784 1.648-2.08 1.648h-5.584v-3.28z"
        fill="currentColor"
      />
      <path
        opacity={0.5}
        d="M257.816 124h4.368c2.964 0 4.86-1.68 4.86-4.308s-1.896-4.308-4.86-4.308h-4.368V124zm1.512-1.32v-5.976h2.844c2.064 0 3.3 1.164 3.3 2.988 0 1.812-1.236 2.988-3.288 2.988h-2.856zm8.792-5.82h1.488v-1.476h-1.488v1.476zm1.464.84h-1.44v6.3h1.44v-6.3zm.752 4.968c.696.936 2.076 1.464 3.684 1.464 1.596 0 3.072-.684 3.072-2.1 0-1.464-1.428-1.668-3.12-1.872-1.38-.168-1.848-.228-1.848-.672 0-.432.492-.72 1.536-.72s1.896.372 2.364.996l.924-.888c-.54-.72-1.716-1.296-3.228-1.296-1.824 0-2.976.852-2.976 2.04 0 1.332 1.248 1.608 2.892 1.812 1.5.18 2.04.192 2.04.744 0 .54-.672.768-1.668.768-1.116 0-2.004-.36-2.652-1.2l-1.02.924zm9.174.54c.456.492 1.296.924 2.448.924 2.172 0 3.456-1.488 3.456-3.276 0-1.788-1.284-3.276-3.456-3.276-1.152 0-1.992.432-2.448.924v-.804h-1.44v8.46h1.44v-2.952zm-.072-2.4c0-1.152 1.008-2.028 2.316-2.028 1.236 0 2.292.744 2.292 2.076s-1.056 2.076-2.292 2.076c-1.308 0-2.316-.876-2.316-2.028v-.096zm8.528-5.424h-1.44V124h1.44v-8.616zm3.716 8.748c1.176 0 2.148-.408 2.712-.984.204.624.816 1.128 2.16.852v-1.116c-.768.168-.936.012-.936-.348v-2.652c0-1.5-1.104-2.304-3.048-2.304-1.524 0-2.904.696-3.3 1.752l1.188.528c.24-.612 1.092-1.056 2.064-1.056 1.176 0 1.704.456 1.704 1.056v.048l-2.736.324c-1.512.18-2.424.84-2.424 1.944 0 1.296 1.164 1.956 2.616 1.956zm2.544-2.568c0 .924-1.344 1.404-2.424 1.404-.828 0-1.332-.276-1.332-.804s.42-.732 1.26-.828l2.496-.3v.528zm2.733-.708c0 1.944 1.608 3.276 3.66 3.276 1.644 0 2.796-.936 3.204-1.932l-1.14-.684c-.252.732-1.044 1.392-2.076 1.392-1.284 0-2.268-.768-2.268-2.052s.984-2.052 2.268-2.052c1.032 0 1.824.66 2.076 1.392l1.152-.66c-.396-1.008-1.572-1.956-3.216-1.956-2.052 0-3.66 1.332-3.66 3.276zm11.072 2.052c-1.176 0-2.076-.624-2.268-1.632h5.652v-.504c0-1.812-1.308-3.192-3.384-3.192-2.148 0-3.636 1.428-3.636 3.276 0 1.944 1.536 3.276 3.636 3.276 1.692 0 2.88-.924 3.264-1.908l-1.152-.612c-.3.768-1.068 1.296-2.112 1.296zm-.072-4.128c1.188 0 1.968.756 2.064 1.416h-4.2c.276-.924 1.14-1.416 2.136-1.416zm4.508 2.364h3.36v-1.284h-3.36v1.284zm6.297-5.76h-1.536V124h1.536v-8.616zm1.608 8.616h1.44v-3.168c0-1.164.66-1.932 1.884-1.932 1.164 0 1.74.792 1.74 1.908V124h1.44v-3.432c0-1.764-.984-2.988-2.736-2.988-1.092 0-1.884.432-2.328.948v-.828h-1.44v6.3zm9.391-8.616h-1.44V124h1.44v-8.616zm1.472 1.476h1.488v-1.476h-1.488v1.476zm1.464.84h-1.44v6.3h1.44v-6.3zm1.496 6.3h1.44v-3.168c0-1.164.66-1.932 1.884-1.932 1.164 0 1.74.792 1.74 1.908V124h1.44v-3.432c0-1.764-.984-2.988-2.736-2.988-1.092 0-1.884.432-2.328.948v-.828h-1.44v6.3zm11.204-1.092c-1.176 0-2.076-.624-2.268-1.632h5.652v-.504c0-1.812-1.308-3.192-3.384-3.192-2.148 0-3.636 1.428-3.636 3.276 0 1.944 1.536 3.276 3.636 3.276 1.692 0 2.88-.924 3.264-1.908l-1.152-.612c-.3.768-1.068 1.296-2.112 1.296zm-.072-4.128c1.188 0 1.968.756 2.064 1.416h-4.2c.276-.924 1.14-1.416 2.136-1.416zm4.508 2.364h3.36v-1.284h-3.36v1.284zm4.761 2.856h5.748c1.776 0 2.952-.888 2.952-2.4 0-1.056-.66-1.8-1.56-2.088.6-.24 1.284-.792 1.284-1.86 0-1.464-1.044-2.268-2.892-2.268h-5.532V124zm1.476-5.052v-2.268h3.912c.984 0 1.584.372 1.584 1.128 0 .756-.6 1.14-1.584 1.14h-3.912zm0 1.296h4.188c.972 0 1.56.504 1.56 1.224 0 .732-.588 1.236-1.56 1.236h-4.188v-2.46zm9.705-4.86h-1.44V124h1.44v-8.616zm4.712 2.196c-2.004 0-3.6 1.32-3.6 3.276 0 1.956 1.596 3.276 3.6 3.276 1.992 0 3.588-1.32 3.588-3.276 0-1.956-1.596-3.276-3.588-3.276zm0 5.316c-1.236 0-2.22-.756-2.22-2.04s.984-2.04 2.22-2.04c1.224 0 2.208.756 2.208 2.04s-.984 2.04-2.208 2.04zm4.375-2.04c0 1.944 1.608 3.276 3.66 3.276 1.644 0 2.796-.936 3.204-1.932l-1.14-.684c-.252.732-1.044 1.392-2.076 1.392-1.284 0-2.268-.768-2.268-2.052s.984-2.052 2.268-2.052c1.032 0 1.824.66 2.076 1.392l1.152-.66c-.396-1.008-1.572-1.956-3.216-1.956-2.052 0-3.66 1.332-3.66 3.276zm9.202-5.472h-1.44V124h1.44v-1.56l1.368-1.128 2.664 2.688h1.848l-3.48-3.54 3.348-2.76h-2.016l-3.732 3.156v-5.472z"
        fill="currentColor"
      />
      <circle fill="currentColor" transform="translate(26 240)" r={6} />
      <path
        d="M43.104 246v-4.784h7.968v-1.792h-7.968v-3.12h8.88v-1.792H41.088V246h2.016zm22.027-9.104c-.928-1.536-3.024-2.56-5.616-2.56-4.144 0-6.624 2.592-6.624 6.128 0 3.216 2.048 5.712 6.368 5.712 3.456 0 5.936-1.696 5.936-4.048 0-2.224-2.272-3.904-5.696-3.904-2.16 0-3.824.672-4.72 1.712 0-2.16 1.92-3.872 4.656-3.872 1.984 0 3.6.832 4.208 2.112l1.488-1.28zm-1.952 5.296c0 1.36-1.664 2.256-4 2.256-2.368 0-3.968-.896-3.968-2.256 0-1.344 1.632-2.272 4-2.272 2.336 0 3.968.928 3.968 2.272z"
        fill="currentColor"
      />
      <path
        opacity={0.5}
        d="M42.328 266v-3.588h5.976v-1.344h-5.976v-2.34h6.66v-1.344h-8.172V266h1.512zm10.38-6.42c-2.005 0-3.6 1.32-3.6 3.276 0 1.956 1.595 3.276 3.6 3.276 1.991 0 3.587-1.32 3.587-3.276 0-1.956-1.596-3.276-3.588-3.276zm0 5.316c-1.237 0-2.22-.756-2.22-2.04s.983-2.04 2.22-2.04c1.223 0 2.207.756 2.207 2.04s-.984 2.04-2.208 2.04zm4.7 1.104h1.44v-3.168c0-1.164.66-1.932 1.884-1.932 1.164 0 1.74.792 1.74 1.908V266h1.44v-3.432c0-1.764-.984-2.988-2.736-2.988-1.092 0-1.884.432-2.328.948v-.828h-1.44v6.3zm8.71-2.16c0 1.692 1.212 2.232 2.556 2.232.636 0 1.404-.156 1.872-.336l-.24-1.224c-.42.132-.852.264-1.38.264-.948 0-1.392-.252-1.392-1.068v-2.784h2.772V259.7h-2.772v-1.848h-1.416v1.848h-1.584v1.224h1.584v2.916zm4.985-.696h3.36v-1.284h-3.36v1.284zm3.836.804c.804 1.308 2.772 2.184 4.896 2.184 2.34 0 4.2-.96 4.2-2.796 0-1.836-1.62-2.124-4.236-2.424-2.256-.264-2.808-.432-2.808-1.116 0-.624.72-1.212 2.424-1.212 1.5 0 2.7.516 3.324 1.44l1.104-.924c-.732-1.128-2.46-1.848-4.368-1.848-2.4 0-3.936 1.14-3.936 2.7 0 1.68 1.56 2.04 3.756 2.292 2.52.288 3.24.36 3.24 1.272 0 .768-1.116 1.284-2.664 1.284-1.296 0-2.856-.432-3.828-1.872l-1.104 1.02zm10.09-5.088h1.489v-1.476H85.03v1.476zm1.465.84h-1.44v6.3h1.44v-6.3zm7.784 5.076H89.67l4.572-3.984V259.7h-6.48v1.224h4.5l-4.548 3.996V266h6.564v-1.224zm4.224.132c-1.176 0-2.076-.624-2.268-1.632h5.652v-.504c0-1.812-1.308-3.192-3.384-3.192-2.148 0-3.636 1.428-3.636 3.276 0 1.944 1.536 3.276 3.636 3.276 1.692 0 2.88-.924 3.264-1.908l-1.152-.612c-.3.768-1.068 1.296-2.112 1.296zm-.072-4.128c1.188 0 1.968.756 2.064 1.416h-4.2c.276-.924 1.14-1.416 2.136-1.416zm4.509 2.364h3.36v-1.284h-3.36v1.284zm13.658-3.972c-.696-1.152-2.268-1.92-4.212-1.92-3.108 0-4.968 1.944-4.968 4.596 0 2.412 1.536 4.284 4.776 4.284 2.592 0 4.452-1.272 4.452-3.036 0-1.668-1.704-2.928-4.272-2.928-1.62 0-2.868.504-3.54 1.284 0-1.62 1.44-2.904 3.492-2.904 1.488 0 2.7.624 3.156 1.584l1.116-.96zm-1.464 3.972c0 1.02-1.248 1.692-3 1.692-1.776 0-2.976-.672-2.976-1.692 0-1.008 1.224-1.704 3-1.704 1.752 0 2.976.696 2.976 1.704z"
        fill="currentColor"
      />
      <circle fill="currentColor" transform="translate(243 240)" r={6} />
      <path
        d="M265.368 234.512l-3.088 9.424-3.232-9.424h-2.144l4.08 11.488h2.464l3.024-9.28 2.992 9.28h2.464l4.096-11.488h-2.128l-3.232 9.424-3.072-9.424h-2.224zm21.598 0v4.672h-7.808v-4.672h-2.048V246h2.048v-5.024h7.808V246h2.048v-11.488h-2.048zm6.37 0h-2.048V246h2.048v-11.488zm13.887 1.792v-1.792h-12.416v1.792h5.184V246h2.048v-9.696h5.184zm1.468-1.792V246h11.104v-1.792h-9.088v-3.232h8.176v-1.792h-8.176v-2.88h9.088v-1.792h-11.104z"
        fill="currentColor"
      />
      <path
        opacity={0.5}
        d="M263.276 257.384l-2.316 7.068-2.424-7.068h-1.608l3.06 8.616h1.848l2.268-6.96 2.244 6.96h1.848l3.072-8.616h-1.596l-2.424 7.068-2.304-7.068h-1.668zm8.711 8.616h1.44v-3.168c0-1.164.66-1.932 1.884-1.932 1.164 0 1.74.792 1.74 1.908V266h1.44v-3.432c0-1.764-.984-2.988-2.736-2.988-1.092 0-1.884.432-2.328.948v-3.144h-1.44V266zm7.928-7.14h1.488v-1.476h-1.488v1.476zm1.464.84h-1.44v6.3h1.44v-6.3zm2.372 4.14c0 1.692 1.212 2.232 2.556 2.232.636 0 1.404-.156 1.872-.336l-.24-1.224c-.42.132-.852.264-1.38.264-.948 0-1.392-.252-1.392-1.068v-2.784h2.772V259.7h-2.772v-1.848h-1.416v1.848h-1.584v1.224h1.584v2.916zm8.57 1.068c-1.176 0-2.076-.624-2.268-1.632h5.652v-.504c0-1.812-1.308-3.192-3.384-3.192-2.148 0-3.636 1.428-3.636 3.276 0 1.944 1.536 3.276 3.636 3.276 1.692 0 2.88-.924 3.264-1.908l-1.152-.612c-.3.768-1.068 1.296-2.112 1.296zm-.072-4.128c1.188 0 1.968.756 2.064 1.416h-4.2c.276-.924 1.14-1.416 2.136-1.416zm4.508 2.364h3.36v-1.284h-3.36v1.284zm11.914-4.416v-1.344h-9.312v1.344h3.888V266h1.536v-7.272h3.888zm2.102 6.18c-1.176 0-2.076-.624-2.268-1.632h5.652v-.504c0-1.812-1.308-3.192-3.384-3.192-2.148 0-3.636 1.428-3.636 3.276 0 1.944 1.536 3.276 3.636 3.276 1.692 0 2.88-.924 3.264-1.908l-1.152-.612c-.3.768-1.068 1.296-2.112 1.296zm-.072-4.128c1.188 0 1.968.756 2.064 1.416h-4.2c.276-.924 1.14-1.416 2.136-1.416zm5.222-1.08h-1.824l2.94 3.168-3.024 3.132h1.752l2.16-2.28 2.052 2.28h1.848l-3.012-3.24 2.928-3.06h-1.74l-2.076 2.208-2.004-2.208zm7.58 4.14c0 1.692 1.212 2.232 2.556 2.232.636 0 1.404-.156 1.872-.336l-.24-1.224c-.42.132-.852.264-1.38.264-.948 0-1.392-.252-1.392-1.068v-2.784h2.772V259.7h-2.772v-1.848h-1.416v1.848h-1.584v1.224h1.584v2.916z"
        fill="currentColor"
      />
      <circle fill="currentColor" transform="translate(243 169)" r={6} />
      <path
        d="M258.088 175h7.664c2.368 0 3.936-1.184 3.936-3.2 0-1.408-.88-2.4-2.08-2.784.8-.32 1.712-1.056 1.712-2.48 0-1.952-1.392-3.024-3.856-3.024h-7.376V175zm1.968-6.736v-3.024h5.216c1.312 0 2.112.496 2.112 1.504s-.8 1.52-2.112 1.52h-5.216zm0 1.728h5.584c1.296 0 2.08.672 2.08 1.632 0 .976-.784 1.648-2.08 1.648h-5.584v-3.28zm13.196.56h4.496l2.8 4.448h2.336l-2.976-4.624c1.648-.432 2.688-1.568 2.688-3.344 0-2.32-1.728-3.52-4.24-3.52h-7.152V175h2.048v-4.448zm0-1.76v-3.52h4.992c1.472 0 2.336.624 2.336 1.76 0 1.12-.864 1.76-2.336 1.76h-4.992zm10.256 4.544V175h11.104v-1.792h-7.536l3.456-1.888c2.256-1.232 3.808-2.288 3.808-4.176 0-2.272-2.08-3.808-4.96-3.808-3.44 0-5.52 1.84-6.048 4.336l1.856.512c.32-1.824 1.84-3.104 4.096-3.104 1.744 0 3.04.816 3.04 2.08 0 1.392-1.232 1.952-3.264 3.088l-5.552 3.088z"
        fill="currentColor"
      />
      <path
        opacity={0.5}
        d="M257.816 195h5.748c1.776 0 2.952-.888 2.952-2.4 0-1.056-.66-1.8-1.56-2.088.6-.24 1.284-.792 1.284-1.86 0-1.464-1.044-2.268-2.892-2.268h-5.532V195zm1.476-5.052v-2.268h3.912c.984 0 1.584.372 1.584 1.128 0 .756-.6 1.14-1.584 1.14h-3.912zm0 1.296h4.188c.972 0 1.56.504 1.56 1.224 0 .732-.588 1.236-1.56 1.236h-4.188v-2.46zm11.599-2.664c-2.004 0-3.6 1.32-3.6 3.276 0 1.956 1.596 3.276 3.6 3.276 1.992 0 3.588-1.32 3.588-3.276 0-1.956-1.596-3.276-3.588-3.276zm0 5.316c-1.236 0-2.22-.756-2.22-2.04s.984-2.04 2.22-2.04c1.224 0 2.208.756 2.208 2.04s-.984 2.04-2.208 2.04zm9.26-5.136a2.723 2.723 0 00-.708-.096c-1.02 0-1.872.324-2.412 1.176v-1.14h-1.44v6.3h1.44v-2.796c0-1.5.936-2.112 2.376-2.112.324 0 .456.036.744.108v-1.44zm6.275 5.448V195h1.44v-8.616h-1.44v3.12c-.456-.492-1.296-.924-2.448-.924-2.172 0-3.456 1.488-3.456 3.276 0 1.788 1.284 3.276 3.456 3.276 1.152 0 1.992-.432 2.448-.924zm.072-2.4v.096c0 1.152-1.008 2.028-2.316 2.028-1.236 0-2.292-.744-2.292-2.076s1.056-2.076 2.292-2.076c1.308 0 2.316.876 2.316 2.028zm6.116 2.1c-1.176 0-2.076-.624-2.268-1.632h5.652v-.504c0-1.812-1.308-3.192-3.384-3.192-2.148 0-3.636 1.428-3.636 3.276 0 1.944 1.536 3.276 3.636 3.276 1.692 0 2.88-.924 3.264-1.908l-1.152-.612c-.3.768-1.068 1.296-2.112 1.296zm-.072-4.128c1.188 0 1.968.756 2.064 1.416h-4.2c.276-.924 1.14-1.416 2.136-1.416zm9.109-1.02a2.723 2.723 0 00-.708-.096c-1.02 0-1.872.324-2.412 1.176v-1.14h-1.44v6.3h1.44v-2.796c0-1.5.936-2.112 2.376-2.112.324 0 .456.036.744.108v-1.44zm.714 3.384h3.36v-1.284h-3.36v1.284zm6.296-.48h3.372l2.1 3.336h1.752l-2.232-3.468c1.236-.324 2.016-1.176 2.016-2.508 0-1.74-1.296-2.64-3.18-2.64h-5.364V195h1.536v-3.336zm0-1.32v-2.64h3.744c1.104 0 1.752.468 1.752 1.32 0 .84-.648 1.32-1.752 1.32h-3.744zm10.285 4.788c1.176 0 2.148-.408 2.712-.984.204.624.816 1.128 2.16.852v-1.116c-.768.168-.936.012-.936-.348v-2.652c0-1.5-1.104-2.304-3.048-2.304-1.524 0-2.904.696-3.3 1.752l1.188.528c.24-.612 1.092-1.056 2.064-1.056 1.176 0 1.704.456 1.704 1.056v.048l-2.736.324c-1.512.18-2.424.84-2.424 1.944 0 1.296 1.164 1.956 2.616 1.956zm2.544-2.568c0 .924-1.344 1.404-2.424 1.404-.828 0-1.332-.276-1.332-.804s.42-.732 1.26-.828l2.496-.3v.528zm8.638 1.644V195h1.44v-8.616h-1.44v3.12c-.456-.492-1.296-.924-2.448-.924-2.172 0-3.456 1.488-3.456 3.276 0 1.788 1.284 3.276 3.456 3.276 1.152 0 1.992-.432 2.448-.924zm.072-2.4v.096c0 1.152-1.008 2.028-2.316 2.028-1.236 0-2.292-.744-2.292-2.076s1.056-2.076 2.292-2.076c1.308 0 2.316.876 2.316 2.028zm2.839-3.948h1.488v-1.476h-1.488v1.476zm1.464.84h-1.44v6.3h1.44v-6.3zm7.892 0h-1.44v3.216c0 1.164-.648 1.908-1.86 1.908-1.152 0-1.704-.66-1.704-1.776V188.7h-1.44v3.504c0 1.764 1.02 2.928 2.736 2.928 1.08 0 1.824-.432 2.268-.948V195h1.44v-6.3zm.753 4.968c.696.936 2.076 1.464 3.684 1.464 1.596 0 3.072-.684 3.072-2.1 0-1.464-1.428-1.668-3.12-1.872-1.38-.168-1.848-.228-1.848-.672 0-.432.492-.72 1.536-.72s1.896.372 2.364.996l.924-.888c-.54-.72-1.716-1.296-3.228-1.296-1.824 0-2.976.852-2.976 2.04 0 1.332 1.248 1.608 2.892 1.812 1.5.18 2.04.192 2.04.744 0 .54-.672.768-1.668.768-1.116 0-2.004-.36-2.652-1.2l-1.02.924zm7.519-1.524h3.36v-1.284h-3.36v1.284zm3.694 1.608V195h8.328v-1.344h-5.652l2.592-1.416c1.692-.924 2.856-1.716 2.856-3.132 0-1.704-1.56-2.856-3.72-2.856-2.58 0-4.14 1.38-4.536 3.252l1.392.384c.24-1.368 1.38-2.328 3.072-2.328 1.308 0 2.28.612 2.28 1.56 0 1.044-.924 1.464-2.448 2.316l-4.164 2.316z"
        fill="currentColor"
      />
      <rect
        width={173}
        height={46}
        rx={10}
        fill="#c00"
        transform="translate(862 156)"
      />
      <path
        d="M918.236 186h7.664c2.368 0 3.936-1.184 3.936-3.2 0-1.408-.88-2.4-2.08-2.784.8-.32 1.712-1.056 1.712-2.48 0-1.952-1.392-3.024-3.856-3.024h-7.376V186zm1.968-6.736v-3.024h5.216c1.312 0 2.112.496 2.112 1.504s-.8 1.52-2.112 1.52h-5.216zm0 1.728h5.584c1.296 0 2.08.672 2.08 1.632 0 .976-.784 1.648-2.08 1.648h-5.584v-3.28zm19.616-3.392h-1.92v4.288c0 1.552-.864 2.544-2.48 2.544-1.536 0-2.272-.88-2.272-2.368V177.6h-1.92v4.672c0 2.352 1.36 3.904 3.648 3.904 1.44 0 2.432-.576 3.024-1.264V186h1.92v-8.4zm3.231 5.52c0 2.256 1.616 2.976 3.408 2.976.848 0 1.872-.208 2.496-.448l-.32-1.632c-.56.176-1.136.352-1.84.352-1.264 0-1.856-.336-1.856-1.424v-3.712h3.696V177.6h-3.696v-2.464h-1.888v2.464h-2.112v1.632h2.112v3.888zm8.481 0c0 2.256 1.616 2.976 3.408 2.976.848 0 1.872-.208 2.496-.448l-.32-1.632c-.56.176-1.136.352-1.84.352-1.264 0-1.856-.336-1.856-1.424v-3.712h3.696V177.6h-3.696v-2.464h-1.888v2.464h-2.112v1.632h2.112v3.888zm11.445-5.68c-2.672 0-4.8 1.76-4.8 4.368 0 2.608 2.128 4.368 4.8 4.368 2.656 0 4.784-1.76 4.784-4.368 0-2.608-2.128-4.368-4.784-4.368zm0 7.088c-1.648 0-2.96-1.008-2.96-2.72 0-1.712 1.312-2.72 2.96-2.72 1.632 0 2.944 1.008 2.944 2.72 0 1.712-1.312 2.72-2.944 2.72zm6.334 1.472h1.92v-4.224c0-1.552.88-2.576 2.512-2.576 1.552 0 2.32 1.056 2.32 2.544V186h1.92v-4.576c0-2.352-1.312-3.984-3.648-3.984-1.456 0-2.512.576-3.104 1.264V177.6h-1.92v8.4z"
        fill="white"
      />
      <circle fill="currentColor" transform="translate(26 27)" r={6} />
      <path
        d="M43.136 28.552h5.088c2.56 0 4.24-1.232 4.24-3.52 0-2.32-1.68-3.52-4.24-3.52h-7.136V33h2.048v-4.448zm0-1.76v-3.52h4.976c1.472 0 2.336.624 2.336 1.76 0 1.12-.864 1.76-2.336 1.76h-4.976zm15.95-.4l-4.337-4.88h-2.528l5.824 6.496V33h2.048v-4.992l5.808-6.496h-2.496l-4.32 4.88zm7.219 4.944V33h11.104v-1.792h-7.536l3.456-1.888c2.256-1.232 3.808-2.288 3.808-4.176 0-2.272-2.08-3.808-4.96-3.808-3.44 0-5.52 1.84-6.048 4.336l1.856.512c.32-1.824 1.84-3.104 4.096-3.104 1.744 0 3.04.816 3.04 2.08 0 1.392-1.232 1.952-3.264 3.088l-5.552 3.088z"
        fill="currentColor"
      />
      <path
        opacity={0.5}
        d="M42.352 49.664h3.816c1.92 0 3.18-.924 3.18-2.64 0-1.74-1.26-2.64-3.18-2.64h-5.352V53h1.536v-3.336zm0-1.32v-2.64h3.732c1.104 0 1.752.468 1.752 1.32 0 .84-.648 1.32-1.752 1.32h-3.732zm9.875 4.788c1.176 0 2.148-.408 2.712-.984.204.624.816 1.128 2.16.852v-1.116c-.768.168-.936.012-.936-.348v-2.652c0-1.5-1.104-2.304-3.048-2.304-1.524 0-2.904.696-3.3 1.752l1.188.528c.24-.612 1.092-1.056 2.064-1.056 1.176 0 1.704.456 1.704 1.056v.048l-2.736.324c-1.512.18-2.424.84-2.424 1.944 0 1.296 1.164 1.956 2.616 1.956zm2.544-2.568c0 .924-1.344 1.404-2.424 1.404-.828 0-1.332-.276-1.332-.804s.42-.732 1.26-.828l2.496-.3v.528zm8.637 1.644V53h1.44v-8.616h-1.44v3.12c-.456-.492-1.296-.924-2.448-.924-2.172 0-3.456 1.488-3.456 3.276 0 1.788 1.284 3.276 3.456 3.276 1.152 0 1.992-.432 2.448-.924zm.072-2.4v.096c0 1.152-1.008 2.028-2.316 2.028-1.236 0-2.292-.744-2.292-2.076s1.056-2.076 2.292-2.076c1.308 0 2.316.876 2.316 2.028zm8.384 2.4V53h1.44v-8.616h-1.44v3.12c-.456-.492-1.296-.924-2.448-.924-2.172 0-3.456 1.488-3.456 3.276 0 1.788 1.284 3.276 3.456 3.276 1.152 0 1.992-.432 2.448-.924zm.072-2.4v.096c0 1.152-1.008 2.028-2.316 2.028-1.236 0-2.292-.744-2.292-2.076s1.056-2.076 2.292-2.076c1.308 0 2.316.876 2.316 2.028zm2.84-3.948h1.487v-1.476h-1.488v1.476zm1.463.84H74.8V53h1.44v-6.3zm1.496 6.3h1.44v-3.168c0-1.164.66-1.932 1.884-1.932 1.164 0 1.74.792 1.74 1.908V53h1.44v-3.432c0-1.764-.984-2.988-2.736-2.988-1.092 0-1.884.432-2.328.948V46.7h-1.44V53zm14.84-.828V46.7h-1.44v.78c-.468-.456-1.224-.9-2.424-.9-2.172 0-3.456 1.464-3.456 3.168 0 1.728 1.284 3.192 3.456 3.192 1.188 0 1.956-.444 2.424-.924v.288c0 1.176-1.056 1.824-2.352 1.824-1.116 0-2.028-.504-2.34-1.296l-1.152.744c.492 1.068 1.788 1.716 3.528 1.716 2.136 0 3.756-1.236 3.756-3.12zm-1.356-2.448v.036c0 1.224-1.068 1.968-2.316 1.968-1.236 0-2.268-.744-2.268-1.98s1.032-1.98 2.268-1.98c1.248 0 2.316.756 2.316 1.956zm2.637.42h3.36V48.86h-3.36v1.284zm7.167-2.1l-3.252-3.66h-1.896l4.368 4.872V53h1.536v-3.744l4.356-4.872h-1.872l-3.24 3.66zm3.767 2.1h3.36V48.86h-3.36v1.284zm7.667-5.76L108.065 53h1.644l1.092-2.16h5.004l1.092 2.16h1.632l-4.38-8.616h-1.692zm.852 1.512l1.824 3.6h-3.648l1.824-3.6zm7.172.804h-1.824l2.94 3.168L118.573 53h1.752l2.16-2.28 2.052 2.28h1.848l-3.012-3.24 2.928-3.06h-1.74l-2.076 2.208-2.004-2.208zm6.68-.84h1.488v-1.476h-1.488v1.476zm1.464.84h-1.44V53h1.44v-6.3zm.752 4.968c.696.936 2.076 1.464 3.684 1.464 1.596 0 3.072-.684 3.072-2.1 0-1.464-1.428-1.668-3.12-1.872-1.38-.168-1.848-.228-1.848-.672 0-.432.492-.72 1.536-.72s1.896.372 2.364.996l.924-.888c-.54-.72-1.716-1.296-3.228-1.296-1.824 0-2.976.852-2.976 2.04 0 1.332 1.248 1.608 2.892 1.812 1.5.18 2.04.192 2.04.744 0 .54-.672.768-1.668.768-1.116 0-2.004-.36-2.652-1.2l-1.02.924zm7.519-1.524h3.36V48.86h-3.36v1.284zm5.837-.816c.66-.516 1.56-.9 2.784-.9 1.716 0 2.892.648 2.892 1.704 0 1.116-1.236 1.704-2.808 1.704-1.668 0-2.796-.648-3.264-1.92l-1.356.588c.432 1.584 2.184 2.628 4.608 2.628 2.496 0 4.38-1.2 4.38-3.024 0-1.812-1.8-2.952-4.14-2.952-1.308 0-2.244.36-2.796.684l.276-2.112h5.928v-1.344h-7.08l-.552 4.56 1.128.384z"
        fill="currentColor"
      />
      <circle fill="currentColor" transform="translate(435.5 179)" r={3} />
      <circle fill="currentColor" transform="translate(730.5 179)" r={3} />
      <path
        d="M219 1H1v72M219 1v72m0-72h216.5v72M219 73H1m218 0h216.5M219 73v71M1 73v71m434.5-71v71M219 144h216.5M219 144v70.5m0-70.5H1m434.5 0v35.25m0 35.25H219m216.5 0v71m0-71v-35.25M219 214.5H1m218 0v71M1 144v70.5m0 0v71m218 0H1m218 0h216.5M1 285.5v71h434.5v-71m0-106.25h295m0 0V1H1167v355.5H730.5V179.25z"
        stroke="currentColor"
      />
      <circle
        id="prefix__kaw3tax2f7qd4c2bkw27y65t"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        transform="translate(435.5 179)"
        style={{
          animation: "2s linear infinite both kaw3tax2f7qd4c2bkw27y65t_t",
        }}
        r={3}
      />
    </svg>
  ),
};
