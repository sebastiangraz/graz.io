/** @jsxImportSource theme-ui */
import { Box, Text } from "theme-ui";
import { List } from "../";
export const CaseMeta = ({ data }) => {
  return (
    <Box
      mb={10}
      sx={{
        display: "grid",
        gridColumn: "2 / span 8",
        gridTemplateColumns: "repeat(8, 1fr)",
      }}
    >
      <Box sx={{ gridColumn: "1 / span 1" }}>
        <Text variant="caps">Scope</Text>
        <List
          noBullets
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "60px",
          }}
        >
          {data.scope?.map((e) => {
            return (
              <Text sx={{ whiteSpace: "pre" }} m={0} variant="label">
                {e}
              </Text>
            );
          })}
        </List>
      </Box>
      <Box sx={{ gridColumn: "4 / span 2" }}>
        <Text variant="caps">Role</Text>

        <Text variant="label">{data.role}</Text>
      </Box>
      <Box sx={{ gridColumn: "6 / span 2" }}>
        <Text variant="caps">Period</Text>
        <Text variant="label">{data.period}</Text>
      </Box>

      <Box sx={{ gridColumn: "8 / span 2" }}>
        <Text variant="caps">Year</Text>

        <Text variant="label">{data.year}</Text>
      </Box>
    </Box>
  );
};
