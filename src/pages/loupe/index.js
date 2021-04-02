/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Flex, Text, Box } from "theme-ui";
import * as React from "react";
import { Video, Img, GridParent } from "../../components";
import { Logo } from "./Logo";
import { videos, images } from "./assets";

const colors = {
  red: "#f60000",
  cyan: "#3edbff",
  orange: "#f47722",
  green: "#003807",
  beige: "#fcf6f5",
  magenta: "#e900a1",
  maroon: "#560000",
};

const Sections = {
  Temp: () => {
    return (
      <div
        sx={{
          height: 4503,
          borderTop: "1px solid",
          background: "linear-gradient(#fff0, #000)",
          width: "80%",
          margin: "0 auto",
        }}
      ></div>
    );
  },
};

// const Sections = {
//   Define: () => {
//     return (
//       <GridParent>
//         <Flex
//           sx={{
//             placeSelf: "center",
//             width: "100%",
//             marginBottom: 8,
//             gridColumn: ["span 8", "span 8"],
//             gridRow: ["span 1", "span 1"],
//           }}
//         >
//           <Text variant="body">
//             Loupe is a conference held by Framer each year. The 3rd edition of
//             the conference was planned to be held in Amsterdam 2020, but was
//             cancelled due to COVID-19. Below you'll find the progress of that
//             work.
//           </Text>
//         </Flex>
//         <div></div>
//         <Box bg="#003807">
//           <Video videoData={videos.loupeMesh} />
//         </Box>
//         <div
//           sx={{
//             background: "#F60000",
//             gridColumn: ["5 / span 4", "span 4"],
//             gridRow: ["6 / span 4", "span 4"],
//           }}
//         >
//           <Img imageData={images.monomeshMagenta}></Img>
//         </div>
//         <div></div>
//         <div
//           sx={{
//             gridColumn: ["span 4"],
//             gridRow: ["span 2"],
//           }}
//         ></div>
//         <div
//           sx={{
//             gridColumn: ["3 / span 2", "span 2"],
//             gridRow: ["8 / span 2", "span 2"],
//           }}
//         >
//           <div>
//             <Img imageData={images.multiMesh0} />
//           </div>
//         </div>
//       </GridParent>
//     );
//   },
//   Branding: () => {
//     return (
//       <>
//         <GridParent>
//           <Box sx={{ mb: 8, gridColumn: ["span 8", "span 8"] }}>
//             <Text variant="heading">Branding</Text>
//             <Text variant="body" mt={6}>
//               Loupe being a fairly young event, faced the challenge of
//               attracting new conference-goers as well as retaining previous
//               attendees. It had to feel like a new and exciting event, while
//               keeping the brand trust that the conference had built up during
//               the years.
//             </Text>
//             <Text variant="body" mt={6}>
//               Previous identities were branched of Framers own brand. But this
//               year Loupe put on a new distinguished look. The identity aimed to
//               be extendable and work well both as pixels and as printed media.
//             </Text>
//           </Box>

//           <Img
//             cover
//             plate
//             sx={{
//               gridColumn: ["span 2"],
//               gridRow: ["span 2"],
//               backgroundColor: "#e8e0d6",
//             }}
//             imageData={images.orbs}
//           ></Img>
//           <Img
//             cover
//             sx={{
//               gridColumn: ["span 2"],
//               gridRow: ["span 2"],
//               borderRadius: "99em 99em 0 0",
//               overflow: "hidden",
//               backgroundColor: colors.red,
//             }}
//             imageData={images.monomeshMagenta1}
//           ></Img>
//           <Img
//             cover
//             plate
//             sx={{
//               gridColumn: ["span 2"],
//               gridRow: ["span 2"],
//               borderRadius: "99em 0 0 99em",
//               overflow: "hidden",
//               backgroundColor: colors.red,
//             }}
//             imageData={images.notes}
//           ></Img>
//           <div
//             sx={{
//               borderRadius: "0 99em 99em 0",
//               backgroundColor: colors.green,
//               backgroundImage: `url(${images.monomeshCyan1.url.default})`,
//               backgroundSize: "100%",
//               gridColumn: "span 2",
//               gridRow: "span 2",
//               overflow: "hidden",
//               display: "flex",
//               flexDirection: "column",
//               zIndex: 2,
//               justifyContent: "center",
//             }}
//           >
//             <Img sx={{ height: "100%" }} cover imageData={images.notes} />
//           </div>
//           <Img
//             cover
//             plate
//             sx={{
//               borderRadius: "0 0 99em 99em",
//               overflow: "hidden",
//               gridColumn: ["span 2"],
//               gridRow: ["span 2"],
//               backgroundColor: colors.cyan,
//             }}
//             imageData={images.multiMesh0}
//           ></Img>
//           <Img
//             cover
//             sx={{
//               borderRadius: "0 0 0 99em",
//               gridColumn: ["span 2"],
//               gridRow: ["span 2"],
//               overflow: "hidden",
//               backgroundColor: colors.red,
//             }}
//             imageData={images.monomeshOrange}
//           ></Img>
//           <Img
//             cover
//             sx={{
//               borderRadius: "0 99em 99em 0",
//               overflow: "hidden",
//               gridColumn: ["span 2"],
//               gridRow: ["span 2"],
//               background: colors.green,
//             }}
//             imageData={images.multiMesh1}
//           ></Img>
//           <Img
//             cover
//             sx={{
//               overflow: "hidden",
//               borderRadius: "0 99em 99em 0",
//               gridColumn: ["span 2"],
//               gridRow: ["span 2"],
//             }}
//             imageData={images.monomeshOrange}
//           ></Img>
//         </GridParent>
//         <GridParent sx={{ mt: 8 }}>
//           <Box
//             sx={{
//               gridColumn: ["1 / span 8", "1 / span 3"],
//             }}
//           >
//             <div sx={{ height: "100%" }}>
//               <Logo></Logo>
//             </div>
//           </Box>
//           <Box
//             sx={{
//               gridColumn: ["1 / span 8", "6 / span 3"],
//             }}
//           >
//             <div sx={{ maxWidth: 102, margin: "0 auto" }}>
//               <Img imageData={images.logoStrip} />
//             </div>
//           </Box>
//           <Text
//             variant="body"
//             mt={[4, 5]}
//             sx={{
//               gridColumn: ["1 / span 8", "1 / span 4"],
//               gridRow: "span 1",
//               maxWidth: 520,
//             }}
//           >
//             The logo’s goal was not to represent a singular idea. Ultimately it
//             is up to the observer to decide what meanings they see.
//           </Text>
//           <Text
//             mt={[3, 5]}
//             sx={{ gridColumn: ["1 / span 8", "6 / span 3"], gridRow: "span 1" }}
//           >
//             Additionally, I wanted to create a logo mark that could extend its
//             usage into patterns or shapes.
//           </Text>
//         </GridParent>
//         <div sx={{ marginTop: 8 }}>
//           <GridParent>
//             <Flex
//               sx={{
//                 gridColumn: ["1 / span 8", "1 / span 3"],
//                 gridRow: ["1 / span 1", "1 / span 4"],
//                 flexDirection: "column",
//                 placeSelf: "center",
//               }}
//             >
//               <Text variant="body" mb={4}>
//                 The unremarkable shapes made the icons feel deliberately
//                 unassuming yet very legible in smaller sizes.
//               </Text>
//             </Flex>
//             <div
//               sx={{
//                 gridColumn: ["1 / span 8", "5 / span 4"],
//                 background: "#003807",
//               }}
//             >
//               <Video videoData={videos.icons} />
//             </div>
//           </GridParent>
//         </div>
//         <div sx={{ marginTop: 8 }}>
//           <GridParent>
//             <div
//               sx={{
//                 gridColumn: ["1 / span 8", "6 / span 3"],
//                 gridRow: ["1 / span 1", "1 / span 2"],
//               }}
//             >
//               <Text>
//                 Typography was put together to feel approachable and friendly.
//                 Previous Loupe branding languages felt masculine and bold. With
//                 the goal to attract a more diverse audience the typefaces had to
//                 follow suit.
//               </Text>
//             </div>
//             <div
//               sx={{
//                 background: "#fff",
//                 gridColumn: ["5 / span 2", "5 / span 1"],
//                 gridRow: ["3 / span 2", "4 / span 1"],
//                 overflow: "hidden",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 zIndex: 2,
//               }}
//             >
//               <div
//                 sx={{
//                   objectFit: "contain",
//                   maxWidth: 60,
//                   width: "80%",
//                   margin: "0 auto",
//                 }}
//               >
//                 <Img imageData={images.twentytwenty} />
//               </div>
//             </div>
//             <div
//               sx={{
//                 backgroundColor: "#E900A1",
//                 backgroundImage: `url(${images.monomeshRed2.url.default})`,
//                 backgroundSize: "100%",
//                 gridColumn: ["5 / span 4", "6 / span 3"],
//                 gridRow: ["5 / span 3", "4 / span 2"],
//                 overflow: "hidden",
//                 display: "flex",
//                 flexDirection: "column",
//                 zIndex: 2,
//                 justifyContent: "center",
//               }}
//             >
//               <div
//                 sx={{
//                   objectFit: "contain",
//                   maxWidth: 310,
//                   padding: "8%",
//                   margin: "0 auto",
//                   width: "100%",
//                 }}
//               >
//                 <Img imageData={images.styrenebold} />
//               </div>
//             </div>

//             <div
//               sx={{
//                 background: "#000",
//                 gridColumn: ["1 / span 4", "1 / span 3"],
//                 gridRow: ["3 / span 4", "1 / span 3"],
//                 overflow: "hidden",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//               }}
//             >
//               <div
//                 sx={{
//                   objectFit: "contain",
//                   width: ["40%", "60%"],
//                   margin: "0 auto",
//                   height: "auto",
//                 }}
//               >
//                 <Img imageData={images.raisonne} />
//               </div>
//               <Text
//                 mt={[2, 3, 3, 3]}
//                 sx={{
//                   display: ["none", "block"],
//                   color: "#fff",
//                   textAlign: "center",
//                   padding: "0 8px",
//                 }}
//               >
//                 Raisonne for headers
//               </Text>
//             </div>
//             <div
//               sx={{
//                 backgroundColor: "#003807",
//                 gridColumn: ["2 / span 5", "3 / span 3"],
//                 gridRow: ["7 / span 5", "4 / span 3"],
//                 overflow: "hidden",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "flex-end",
//                 position: "relative",
//               }}
//             >
//               <div
//                 sx={{
//                   objectFit: "contain",
//                   objectPosition: "left",
//                   maxWidth: 309,
//                   height: "auto",
//                   paddingRight: ["12%", 40],
//                   paddingLeft: ["12%", 40],
//                   paddingBottom: ["12%", 40],
//                   zIndex: 2,
//                 }}
//               >
//                 <Img imageData={images.styrene} />
//               </div>
//               <div
//                 sx={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                 }}
//               >
//                 <Img imageData={images.monomeshCyan1}></Img>
//               </div>
//             </div>
//           </GridParent>
//         </div>
//       </>
//     );
//   },
// };
const Loupe = () => {
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

export default React.memo(Loupe);
