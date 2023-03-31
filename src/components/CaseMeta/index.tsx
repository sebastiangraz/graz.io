/** @jsxImportSource theme-ui */
import { Box, Text } from "theme-ui";
import { PropMap } from "../App";
import { List } from "../List";

export const CaseMeta = ({ ...props }: PropMap) => {
  const { grid, scope, role, timeframe, year } = props;

  console.log(props.scope);

  return (
    <Box
      mb={10}
      sx={{
        flexDirection: "column",
        display: ["flex", null, "grid"],
        gridColumn: "2 / span 8",
        gap: [8, null, 6],
        gridTemplateColumns: "repeat(8, 1fr)",
      }}
    >
      {scope && (
        <Box sx={{ gridColumn: "1 / span 2" }}>
          <Text variant="caps">Scope</Text>
          <List
            noBullets
            sx={{
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
      {role && (
        <Box sx={{ gridColumn: "4 / span 2" }}>
          <Text variant="caps">Role</Text>

          <Text variant="label">{role}</Text>
        </Box>
      )}
      {timeframe && (
        <Box sx={{ gridColumn: "6 / span 2" }}>
          <Text variant="caps">Time frame</Text>
          <Text variant="label">{timeframe}</Text>
        </Box>
      )}
      {year && (
        <Box sx={{ gridColumn: "8 / span 2" }}>
          <Text variant="caps">Year</Text>

          <Text variant="label">{year}</Text>
        </Box>
      )}
    </Box>
  );
};
