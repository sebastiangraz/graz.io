/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Text, Grid } from "theme-ui";
import { Logo } from "../";

export const Home = () => {
  return (
    <Grid variant="hero">
      <Logo
        sx={{
          lineHeight: 0.8,
          fontSize: 50,
          transition: `.5s cubic-bezier(1,0,0,1) opacity, 1s cubic-bezier(1,0,0,1) transform`,
          transform: false
            ? ["scale(1)", "scale(1)", "scale(0.8)"]
            : "scale(1)",
        }}
        weight={50}
      />
      <Text
        variant="body"
        sx={{
          marginBottom: [4, 0],
          width: ["min(100%, 360px)", 560, 720, 800],
        }}
      >
        I’m Sebastian—as a digital designer
        <br sx={{ display: ["none", "none", "block"] }} /> I care about our dear
        users, rapid prototyping, design systems & branding
      </Text>
    </Grid>
  );
};
