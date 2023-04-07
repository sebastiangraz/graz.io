/** @jsxImportSource theme-ui */
import { Box, Text } from "theme-ui";
import { PropMap } from "../App";
import { List } from "../List";
import Balancer from "react-wrap-balancer";

export const CaseMeta = ({ ...props }: PropMap) => {
  const { challenge, scope, duration, year } = props;

  return (
    <Box
      mb={12}
      sx={{
        flexDirection: "column",
        display: ["flex", null, "grid"],
        gridColumn: "2 / span 8",
        gap: [8, null, 6],
        gridTemplateColumns: "repeat(8, 1fr)",
      }}
    >
      {challenge && (
        <Box sx={{ gridColumn: "1 / span 2" }}>
          <Text variant="caps">Role</Text>

          <Text
            variant="label"
            sx={{
              color: "var(--caseForegroundDim)",
            }}
          >
            <Balancer>{challenge}</Balancer>
          </Text>
        </Box>
      )}
      {scope && (
        <Box sx={{ gridColumn: "4 / span 1" }}>
          <Text variant="caps">Scope</Text>
          <List
            noBullets
            sx={{
              color: "var(--caseForegroundDim)",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(112px, 100%), 1fr))",
              columnGap: "32px",
            }}
          >
            {scope?.map((e) => {
              return (
                <Text key={e} sx={{ whiteSpace: "pre" }} m={0} variant="label">
                  {e}
                </Text>
              );
            })}
          </List>
        </Box>
      )}
      {duration && (
        <Box sx={{ gridColumn: "6 / span 1" }}>
          <Text variant="caps">Duration</Text>
          <Text
            variant="label"
            sx={{
              color: "var(--caseForegroundDim)",
            }}
          >
            {duration}
          </Text>
        </Box>
      )}
      {year && (
        <Box sx={{ gridColumn: "8 / span 2" }}>
          <Text variant="caps">Year</Text>

          <Text
            variant="label"
            sx={{
              color: "var(--caseForegroundDim)",
            }}
          >
            {year}
          </Text>
        </Box>
      )}
    </Box>
  );
};
