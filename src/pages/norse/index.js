/** @jsxRuntime classic */
/** @jsx jsx */

import * as React from "react";

import { jsx, Heading, Link, Text, Box } from "theme-ui";
import { GridParent, Video } from "../../components";

import { motion, useAnimation } from "framer-motion";
import { CharacterSet } from "./CharacterSet";
import { videos, images } from "./assets";

const Sections = {
  Define: () => {
    return (
      <React.Fragment>
        <GridParent>
          <Box
            sx={{
              maxHeight: 1000,
              gridColumn: ["span 8"],
              gridRow: ["span 1"],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Video videoData={videos.intro} />
          </Box>
        </GridParent>
      </React.Fragment>
    );
  },

  // NEEDS TO BE OPTIMISED
  // Design: () => {
  //   const controls = useAnimation();

  //   React.useEffect(() => {
  //     controls.start((i) => ({
  //       opacity: 0.02,
  //       transition: {
  //         delay: i * 0.05,
  //         repeatType: "reverse",
  //         repeat: Infinity,
  //         duration: 2.5,
  //         ease: "linear",
  //       },
  //     }));
  //   }, [controls]);
  //   return (
  //     <React.Fragment>
  //       <GridParent>
  //         <Box sx={{ gridColumn: ["span 8"], gridRow: ["span 1"] }}>
  //           <div sx={{ my: ["20%"] }}>{images.hero}</div>
  //         </Box>
  //         <Box
  //           sx={{
  //             maxHeight: 1000,
  //             marginTop: [4, 5, 6],
  //             gridColumn: ["span 8"],
  //             gridRow: ["span 1"],
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <div sx={{ width: ["40%", "772px"], my: ["20%"], mx: ["20%"] }}>
  //             {images.norse4}
  //           </div>
  //         </Box>

  //         <Box
  //           sx={{
  //             maxHeight: 1000,
  //             marginTop: [4, 5, 6],
  //             gridColumn: ["span 8"],
  //             gridRow: ["span 1"],
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <div
  //             sx={{
  //               fontSize: [2, 3, 4, 6],
  //               fontFamily: "norse",
  //               fontVariationSettings: `"wght" ${56}`,
  //               my: ["20%"],
  //             }}
  //           >
  //             <div>
  //               <motion.span
  //                 custom={1}
  //                 animate={controls}
  //                 initial={{ opacity: 0.5 }}
  //               >
  //                 Amo
  //               </motion.span>
  //               <span sx={{ opacity: 1 }}>rt</span>
  //               <motion.span
  //                 custom={2}
  //                 animate={controls}
  //                 initial={{ opacity: 0.5 }}
  //               >
  //                 ize
  //               </motion.span>{" "}
  //               <span sx={{ fontFeatureSettings: `"dlig"` }}>-&gt;</span>{" "}
  //               <motion.span
  //                 custom={3}
  //                 animate={controls}
  //                 initial={{ opacity: 0.5 }}
  //                 sx={{ fontFeatureSettings: `"dlig"` }}
  //               >
  //                 {" "}
  //                 Amo
  //               </motion.span>
  //               <span sx={{ opacity: 1, fontFeatureSettings: `"dlig"` }}>
  //                 rt
  //               </span>
  //               <motion.span
  //                 custom={4}
  //                 animate={controls}
  //                 initial={{ opacity: 0.5 }}
  //               >
  //                 ize
  //               </motion.span>{" "}
  //             </div>

  //             <div>
  //               <motion.span
  //                 custom={5}
  //                 animate={controls}
  //                 initial={{ opacity: 0.5 }}
  //               >
  //                 Bedwa
  //               </motion.span>
  //               <span sx={{ opacity: 1 }}>rf</span>
  //               <motion.span
  //                 custom={6}
  //                 animate={controls}
  //                 initial={{ opacity: 0.5 }}
  //               >
  //                 s
  //               </motion.span>{" "}
  //               <span sx={{ fontFeatureSettings: `"dlig"` }}>-&gt;</span>{" "}
  //               <motion.span
  //                 custom={7}
  //                 animate={controls}
  //                 initial={{ opacity: 0.5 }}
  //                 sx={{ fontFeatureSettings: `"dlig"` }}
  //               >
  //                 {" "}
  //                 Bedwa
  //               </motion.span>
  //               <span sx={{ opacity: 1, fontFeatureSettings: `"dlig"` }}>
  //                 rf
  //               </span>
  //               <motion.span
  //                 custom={8}
  //                 animate={controls}
  //                 initial={{ opacity: 0.5 }}
  //               >
  //                 s
  //               </motion.span>{" "}
  //             </div>

  //             <div>
  //               <motion.span
  //                 custom={9}
  //                 animate={controls}
  //                 initial={{ opacity: 0.5 }}
  //               >
  //                 Cray
  //               </motion.span>
  //               <span sx={{ opacity: 1 }}>fi</span>
  //               <motion.span
  //                 custom={10}
  //                 animate={controls}
  //                 initial={{ opacity: 0.5 }}
  //               >
  //                 sh
  //               </motion.span>{" "}
  //               <span sx={{ fontFeatureSettings: `"dlig"` }}>-&gt;</span>{" "}
  //               <motion.span
  //                 custom={11}
  //                 animate={controls}
  //                 initial={{ opacity: 0.5 }}
  //                 sx={{ fontFeatureSettings: `"dlig"` }}
  //               >
  //                 {" "}
  //                 Cray
  //               </motion.span>
  //               <span sx={{ opacity: 1, fontFeatureSettings: `"dlig"` }}>
  //                 fi
  //               </span>
  //               <motion.span
  //                 custom={12}
  //                 animate={controls}
  //                 initial={{ opacity: 0.5 }}
  //               >
  //                 sh
  //               </motion.span>{" "}
  //             </div>
  //           </div>
  //         </Box>
  //         <Box
  //           sx={{
  //             maxHeight: 1000,
  //             marginTop: [4, 5, 6],
  //             gridColumn: ["span 8"],
  //             gridRow: ["span 1"],
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <div sx={{ width: ["40%", "559px"], my: ["20%"], mx: ["20%"] }}>
  //             {images.norse3}
  //           </div>
  //         </Box>
  //         <Box
  //           sx={{
  //             maxHeight: 1000,
  //             marginTop: [4, 5, 6],
  //             gridColumn: ["span 8"],
  //             gridRow: ["span 1"],
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <div sx={{ width: ["40%", "578px"], my: ["20%"], mx: ["20%"] }}>
  //             {images.norse2}
  //           </div>
  //         </Box>
  //         <Box
  //           sx={{
  //             maxHeight: 1000,
  //             marginTop: [4, 5, 6],
  //             gridColumn: ["span 8"],
  //             gridRow: ["span 1"],
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <div sx={{ width: ["40%", "450px"], my: ["20%"], mx: ["20%"] }}>
  //             {images.norse1}
  //           </div>
  //         </Box>
  //         <Box
  //           sx={{
  //             maxHeight: 1000,
  //             marginTop: [4, 5, 6],
  //             gridColumn: ["span 8"],
  //             gridRow: ["span 1"],
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <div sx={{ width: ["40%", "450px"], my: ["20%"], mx: ["20%"] }}>
  //             {images.norse7}
  //           </div>
  //         </Box>
  //         <Box
  //           sx={{
  //             maxHeight: 1000,
  //             marginTop: [4, 5, 6],
  //             gridColumn: ["span 8"],
  //             gridRow: ["span 1"],
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <div
  //             sx={{
  //               textAlign: "center",
  //               fontSize: [2, 3, 4, 5],
  //               fontFamily: "norse",
  //               fontVariationSettings: `"wght" ${56}`,
  //               my: ["20%"],
  //             }}
  //           >
  //             <div>ABRACADABRA</div>
  //             <div sx={{ fontFeatureSettings: `"ss03"` }}>ABRACADABRA</div>
  //             <div sx={{ fontFeatureSettings: `"ss04"` }}>ABRACADABRA</div>
  //             <div sx={{ fontFeatureSettings: `"ss03","ss04"` }}>
  //               ABRACADABRA
  //             </div>
  //           </div>
  //         </Box>
  //       </GridParent>
  //     </React.Fragment>
  //   );
  // },

  // Glyphs: () => {
  //   return (
  //     <React.Fragment>
  //       <GridParent>
  //         <CharacterSet></CharacterSet>
  //       </GridParent>
  //     </React.Fragment>
  //   );
  // },

  Outro: () => {
    return (
      <React.Fragment>
        <GridParent>
          <Heading
            sx={{
              gridColumn: "span 8",
              gridRow: "span 1",
              marginBottom: [3],
            }}
          >
            Outro
          </Heading>
          <Text
            sx={{
              gridColumn: ["span 8", "span 4", "span 4", "span 4"],
              paddingRight: [0, 4, 4, 4],
              gridRow: "span 1",
            }}
          >
            Norse is a passive project I've been picking up throughout the
            years. Sounds like I’m patient, or maybe just really slow. Mostly
            I’m good at not being content. That said, Norse has been a great
            method for unwinding due to the near meditative exercise of pulling
            Bézier curves until they look even.
          </Text>
          <Text
            sx={{
              gridColumn: ["span 8", "span 4", "span 4", "span 4"],
              paddingLeft: [0, 4, 4, 4],
              paddingTop: [3, 0, 0, 0],
              gridRow: "span 1",
            }}
          >
            One great thing about drawing fonts is taking long breaks and then
            coming back and seeing all the glaring mistakes. Fixing them and
            seeing the typeface grow is very addictive! Nonetheless, at the time
            of writing Norse is considered a completed project. Can be{" "}
            <Link
              href="https://gum.co/norse"
              rel="noopener noreferrer"
              target="_blank"
            >
              purchased&nbsp;here
            </Link>{" "}
            at a heavily discounted amateur price.
          </Text>
        </GridParent>
      </React.Fragment>
    );
  },
};

const Norse = () => {
  return Object.entries(Sections).map(([k, Section]) => (
    <Box
      key={k}
      sx={{
        marginBottom: [7, 8],
      }}
    >
      <Section />
    </Box>
  ));
};

export default Norse;
