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
        columnGap: [8, null, 7],
        rowGap: [8, 9],
        gridTemplateColumns: "repeat(8, 1fr)",
        gridTemplateRows: "auto",
      }}
    >
      {challenge && (
        <Box sx={{ gridColumn: ["1 / span 3", null, null, "1 / span 3"] }}>
          <Text variant="caps" sx={{ mb: 6 }}>
            Challenge
          </Text>

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
        <Box
          sx={{
            gridColumn: ["1 / span 2", null, null, "4 / span 2"],
            gridRow: ["2", null, null, "1"],
          }}
        >
          <Text variant="caps" sx={{ mb: 6 }}>
            Scope
          </Text>
          <List
            noBullets
            sx={{
              color: "var(--caseForegroundDim)",
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
        <Box
          sx={{
            gridColumn: ["5 / span 2", null, null, "6 / span 1"],
            gridRow: ["2", null, null, "1"],
          }}
        >
          <Text variant="caps" sx={{ mb: 6 }}>
            Duration
          </Text>
          <Text
            variant="label"
            sx={{
              color: "var(--caseForegroundDim)",
              whiteSpace: "pre",
            }}
          >
            {duration}
          </Text>
        </Box>
      )}
      {year && (
        <Box
          sx={{
            gridColumn: ["5 / span 3", null, null, "8 / span 2"],
          }}
        >
          <Text variant="caps" sx={{ mb: 6 }}>
            Year
          </Text>

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
